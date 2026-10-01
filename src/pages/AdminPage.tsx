import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  CalendarCheck,
  Bed,
  Sparkles,
  TrendingUp,
  Settings,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  ExternalLink,
  Users,
  Building2,
  Plus,
  Download,
  Menu,
  X,
  FileText,
  Edit3,
  Trash2,
  Image as ImageIcon,
  Save,
  RotateCcw,
  Globe
} from 'lucide-react';
import {
  getStoredSiteConfig,
  saveStoredSiteConfig,
  getStoredRooms,
  saveStoredRooms,
  getStoredExperiences,
  saveStoredExperiences,
  getStoredGallery,
  saveStoredGallery
} from '../utils/storage';
import type { Room } from '../data/rooms';
import type { GalleryItem } from '../data/gallery';

interface Inquiry {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  villaName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  type: 'Stay' | 'Wedding' | 'Day Outing' | 'Honeymoon';
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  dateSubmitted: string;
  amountNote: string;
}

const initialInquiries: Inquiry[] = [
  {
    id: "RES-9021",
    guestName: "Anura Fernando",
    email: "anura.f@gmail.com",
    phone: "+94 77 345 6789",
    villaName: "Deluxe Eco Villa",
    checkIn: "2026-10-10",
    checkOut: "2026-10-12",
    guests: 2,
    type: "Stay",
    status: "Pending",
    dateSubmitted: "2026-09-24",
    amountNote: "Seasonal Full Board Inquiry"
  },
  {
    id: "RES-9022",
    guestName: "Samantha & David Miller",
    email: "smiller@uktravel.co.uk",
    phone: "+44 7911 123456",
    villaName: "Royal Suite Villa",
    checkIn: "2026-11-01",
    checkOut: "2026-11-05",
    guests: 2,
    type: "Honeymoon",
    status: "Confirmed",
    dateSubmitted: "2026-09-23",
    amountNote: "Honeymoon Package + Candlelight Dinner"
  },
  {
    id: "EVT-4011",
    guestName: "Dilshan Perera (Ceylon Tech)",
    email: "dilshan@ceylontech.lk",
    phone: "+94 71 888 9900",
    villaName: "Full 25-Acres Reserve",
    checkIn: "2026-10-20",
    checkOut: "2026-10-20",
    guests: 35,
    type: "Day Outing",
    status: "Pending",
    dateSubmitted: "2026-09-22",
    amountNote: "Corporate Team Outing & Buffet"
  }
];

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'inquiries' | 'cms_site' | 'cms_villas' | 'cms_gallery' | 'analytics'>('dashboard');

  // Dynamic CMS States (persisted via localStorage)
  const [siteConfig, setSiteConfig] = useState(getStoredSiteConfig());
  const [rooms, setRooms] = useState<Room[]>(getStoredRooms());
  const [gallery, setGallery] = useState<GalleryItem[]>(getStoredGallery());

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Confirmed' | 'Cancelled'>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // Modals & UI States
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [isNewRoom, setIsNewRoom] = useState(false);
  const [newGalleryImage, setNewGalleryImage] = useState({ title: '', category: 'RESORT' as const, image: '', caption: '' });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // --- CMS Save Handlers ---
  const handleSaveSiteConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredSiteConfig(siteConfig);
    showToast('Site details & contact info updated successfully!');
  };

  const handleSaveRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRoom) return;

    let updatedRooms: Room[];
    if (isNewRoom) {
      updatedRooms = [...rooms, editingRoom];
    } else {
      updatedRooms = rooms.map(r => (r.id === editingRoom.id ? editingRoom : r));
    }

    setRooms(updatedRooms);
    saveStoredRooms(updatedRooms);
    showToast(`Villa "${editingRoom.name}" saved!`);
    setEditingRoom(null);
  };

  const handleDeleteRoom = (id: string) => {
    const updated = rooms.filter(r => r.id !== id);
    setRooms(updated);
    saveStoredRooms(updated);
    showToast('Villa removed from inventory.');
  };

  const handleAddGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryImage.image.trim()) return;

    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: newGalleryImage.title || 'Resort Photo',
      category: newGalleryImage.category,
      image: newGalleryImage.image,
      caption: newGalleryImage.caption
    };

    const updated = [newItem, ...gallery];
    setGallery(updated);
    saveStoredGallery(updated);
    setNewGalleryImage({ title: '', category: 'RESORT', image: '', caption: '' });
    showToast('New photo added to gallery!');
  };

  const handleDeleteGalleryItem = (id: string) => {
    const updated = gallery.filter(g => g.id !== id);
    setGallery(updated);
    saveStoredGallery(updated);
    showToast('Photo removed from gallery.');
  };

  const handleResetDefaults = () => {
    localStorage.clear();
    setSiteConfig(getStoredSiteConfig());
    setRooms(getStoredRooms());
    setGallery(getStoredGallery());
    showToast('Restored original resort defaults.');
  };

  const handleUpdateInquiryStatus = (id: string, newStatus: 'Confirmed' | 'Cancelled') => {
    setInquiries(prev =>
      prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
    );
    showToast(`Reservation ${id} updated to ${newStatus}`);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(prev => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const pendingCount = inquiries.filter(i => i.status === 'Pending').length;

  return (
    <div className="min-h-screen bg-[#0d1e16] text-[#faf7f2] flex flex-col font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 z-50 px-5 py-3 rounded-lg bg-[#c5a059] text-[#0d1e16] font-semibold text-xs shadow-2xl flex items-center gap-2 border border-[#dfbe7d]"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Admin Header */}
      <header className="bg-[#152e22] border-b border-[#28503c]/60 px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="lg:hidden p-2 text-[#faf7f2] hover:bg-[#1c3d2e] rounded-lg"
          >
            {isMobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="flex flex-col">
            <span className="font-serif-heading text-xl sm:text-2xl tracking-wider text-[#faf7f2] font-semibold">
              AHAS POKUNA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5a059]">
              Content & Booking Admin CMS
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={handleResetDefaults}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c3d2e] hover:bg-rose-900/40 text-xs font-medium text-[#d6c6b3] border border-[#28503c] transition-colors"
            title="Reset edits to original defaults"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Reset Defaults</span>
          </button>

          <Link
            to="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#c5a059] hover:bg-[#dfbe7d] text-xs font-semibold text-[#0d1e16] shadow transition-colors"
          >
            <span>View Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3 border-l border-[#28503c] pl-4">
            <div className="w-9 h-9 rounded-full bg-[#c5a059] text-[#0d1e16] font-semibold flex items-center justify-center text-sm shadow">
              AP
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow flex">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-64 bg-[#12291d] border-r border-[#28503c]/60 p-6 space-y-8 flex-shrink-0">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-semibold mb-3">
              Dashboard & Bookings
            </p>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'dashboard' ? 'bg-[#28503c] text-[#faf7f2] shadow border border-[#c5a059]/40' : 'text-[#d6c6b3]/80 hover:bg-[#1c3d2e]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-[#c5a059]" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'inquiries' ? 'bg-[#28503c] text-[#faf7f2] shadow border border-[#c5a059]/40' : 'text-[#d6c6b3]/80 hover:bg-[#1c3d2e]'
              }`}
            >
              <div className="flex items-center gap-3">
                <CalendarCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Reservations</span>
              </div>
              {pendingCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#c5a059] text-[#0d1e16] text-[10px] font-bold">
                  {pendingCount}
                </span>
              )}
            </button>
          </div>

          <div className="space-y-1 pt-4 border-t border-[#28503c]/40">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-semibold mb-3">
              CMS Content Manager
            </p>

            <button
              onClick={() => setActiveTab('cms_site')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'cms_site' ? 'bg-[#28503c] text-[#faf7f2] shadow border border-[#c5a059]/40' : 'text-[#d6c6b3]/80 hover:bg-[#1c3d2e]'
              }`}
            >
              <FileText className="w-4 h-4 text-[#c5a059]" />
              <span>Resort Details & Contact</span>
            </button>

            <button
              onClick={() => setActiveTab('cms_villas')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'cms_villas' ? 'bg-[#28503c] text-[#faf7f2] shadow border border-[#c5a059]/40' : 'text-[#d6c6b3]/80 hover:bg-[#1c3d2e]'
              }`}
            >
              <Bed className="w-4 h-4 text-[#c5a059]" />
              <span>Edit Villas & Photos</span>
            </button>

            <button
              onClick={() => setActiveTab('cms_gallery')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'cms_gallery' ? 'bg-[#28503c] text-[#faf7f2] shadow border border-[#c5a059]/40' : 'text-[#d6c6b3]/80 hover:bg-[#1c3d2e]'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-[#c5a059]" />
              <span>Photo Gallery CMS</span>
            </button>
          </div>
        </aside>

        {/* Main Admin Workspace Area */}
        <main className="flex-grow p-4 sm:p-8 space-y-8 overflow-x-hidden">
          {/* 1. OVERVIEW DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
                  Executive Overview
                </span>
                <h1 className="font-serif-heading text-3xl sm:text-4xl text-[#faf7f2]">
                  Resort Operations & Live Edit Portal
                </h1>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-6 rounded-2xl bg-[#1c3d2e]/70 border border-[#28503c] shadow flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#d6c6b3]/80">Pending Inquiries</p>
                    <h3 className="text-3xl font-serif-heading text-[#c5a059] mt-1">{pendingCount}</h3>
                  </div>
                  <Clock className="w-8 h-8 text-[#c5a059]" />
                </div>

                <div className="p-6 rounded-2xl bg-[#1c3d2e]/70 border border-[#28503c] shadow flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#d6c6b3]/80">Active Villas</p>
                    <h3 className="text-3xl font-serif-heading text-[#faf7f2] mt-1">{rooms.length}</h3>
                  </div>
                  <Bed className="w-8 h-8 text-[#587853]" />
                </div>

                <div className="p-6 rounded-2xl bg-[#1c3d2e]/70 border border-[#28503c] shadow flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#d6c6b3]/80">Gallery Photos</p>
                    <h3 className="text-3xl font-serif-heading text-[#faf7f2] mt-1">{gallery.length}</h3>
                  </div>
                  <ImageIcon className="w-8 h-8 text-[#c5a059]" />
                </div>

                <div className="p-6 rounded-2xl bg-[#1c3d2e]/70 border border-[#28503c] shadow flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#d6c6b3]/80">Estate Reserve</p>
                    <h3 className="text-3xl font-serif-heading text-[#faf7f2] mt-1">25 Acres</h3>
                  </div>
                  <Building2 className="w-8 h-8 text-[#c5a059]" />
                </div>
              </div>

              {/* Quick CMS Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  onClick={() => setActiveTab('cms_site')}
                  className="cursor-pointer p-6 rounded-2xl bg-[#152e22] border border-[#28503c] hover:border-[#c5a059] transition-all shadow-md group"
                >
                  <FileText className="w-8 h-8 text-[#c5a059] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif-heading text-xl text-[#faf7f2]">Edit Site Details & Contact</h3>
                  <p className="text-xs text-[#d6c6b3]/80 mt-1">Change resort phone numbers, email, address, and headline quotes.</p>
                </div>

                <div
                  onClick={() => setActiveTab('cms_villas')}
                  className="cursor-pointer p-6 rounded-2xl bg-[#152e22] border border-[#28503c] hover:border-[#c5a059] transition-all shadow-md group"
                >
                  <Bed className="w-8 h-8 text-[#c5a059] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif-heading text-xl text-[#faf7f2]">Manage Villas & Photos</h3>
                  <p className="text-xs text-[#d6c6b3]/80 mt-1">Edit villa titles, descriptions, capacity, and featured image URLs.</p>
                </div>

                <div
                  onClick={() => setActiveTab('cms_gallery')}
                  className="cursor-pointer p-6 rounded-2xl bg-[#152e22] border border-[#28503c] hover:border-[#c5a059] transition-all shadow-md group"
                >
                  <ImageIcon className="w-8 h-8 text-[#c5a059] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif-heading text-xl text-[#faf7f2]">Upload & Edit Gallery</h3>
                  <p className="text-xs text-[#d6c6b3]/80 mt-1">Add new photography, set categories, or remove outdated photos.</p>
                </div>
              </div>
            </div>
          )}

          {/* 2. CMS: RESORT DETAILS & CONTACT */}
          {activeTab === 'cms_site' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">CMS Editor</span>
                <h1 className="font-serif-heading text-3xl sm:text-4xl text-[#faf7f2]">Edit Resort Details & Contact Info</h1>
              </div>

              <form onSubmit={handleSaveSiteConfig} className="bg-[#152e22] border border-[#28503c] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Resort Name</label>
                    <input
                      type="text"
                      value={siteConfig.name}
                      onChange={(e) => setSiteConfig({ ...siteConfig, name: e.target.value })}
                      className="w-full bg-[#0d1e16] border border-[#28503c] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2]"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Tagline</label>
                    <input
                      type="text"
                      value={siteConfig.tagline}
                      onChange={(e) => setSiteConfig({ ...siteConfig, tagline: e.target.value })}
                      className="w-full bg-[#0d1e16] border border-[#28503c] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Primary Phone</label>
                    <input
                      type="text"
                      value={siteConfig.contact.phones[0] || ''}
                      onChange={(e) => {
                        const newPhones = [...siteConfig.contact.phones];
                        newPhones[0] = e.target.value;
                        setSiteConfig({ ...siteConfig, contact: { ...siteConfig.contact, phones: newPhones } });
                      }}
                      className="w-full bg-[#0d1e16] border border-[#28503c] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Secondary Phone</label>
                    <input
                      type="text"
                      value={siteConfig.contact.phones[1] || ''}
                      onChange={(e) => {
                        const newPhones = [...siteConfig.contact.phones];
                        newPhones[1] = e.target.value;
                        setSiteConfig({ ...siteConfig, contact: { ...siteConfig.contact, phones: newPhones } });
                      }}
                      className="w-full bg-[#0d1e16] border border-[#28503c] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Email Address</label>
                    <input
                      type="email"
                      value={siteConfig.contact.email}
                      onChange={(e) => setSiteConfig({ ...siteConfig, contact: { ...siteConfig.contact, email: e.target.value } })}
                      className="w-full bg-[#0d1e16] border border-[#28503c] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Full Address</label>
                  <input
                    type="text"
                    value={siteConfig.address.fullText}
                    onChange={(e) => setSiteConfig({ ...siteConfig, address: { ...siteConfig.address, fullText: e.target.value } })}
                    className="w-full bg-[#0d1e16] border border-[#28503c] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Hero Description</label>
                  <textarea
                    rows={3}
                    value={siteConfig.heroDescription}
                    onChange={(e) => setSiteConfig({ ...siteConfig, heroDescription: e.target.value })}
                    className="w-full bg-[#0d1e16] border border-[#28503c] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 shadow"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Site Changes</span>
                </button>
              </form>
            </div>
          )}

          {/* 3. CMS: EDIT VILLAS & ACCOMMODATIONS */}
          {activeTab === 'cms_villas' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">CMS Inventory</span>
                  <h1 className="font-serif-heading text-3xl sm:text-4xl text-[#faf7f2]">Edit Villas, Facilities & Images</h1>
                </div>

                <button
                  onClick={() => {
                    setIsNewRoom(true);
                    setEditingRoom({
                      id: `villa-${Date.now()}`,
                      name: 'New Custom Villa',
                      tagline: 'Private Forest Retreat',
                      description: 'Custom villa description...',
                      longDescription: 'Long detailed description of the custom villa...',
                      capacity: { adults: 2, children: 1, text: '2 Adults, 1 Child' },
                      bedType: '1 King Bed',
                      sizeSqMters: 60,
                      featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
                      galleryImages: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'],
                      facilities: ['Air Conditioning', 'Private Veranda', 'Rain Shower'],
                      highlights: ['Private Deck'],
                      priceNote: 'Direct Rate'
                    });
                  }}
                  className="px-4 py-2.5 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Villa</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rooms.map((room) => (
                  <div key={room.id} className="bg-[#152e22] border border-[#28503c] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
                    <div className="relative aspect-[16/9] bg-[#0d1e16]">
                      <img src={room.featuredImage} alt={room.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0d1e16]/80 text-[#c5a059] text-[10px] uppercase tracking-widest font-semibold border border-[#c5a059]/30">
                        {room.bedType} • {room.sizeSqMters} m²
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-serif-heading text-2xl text-[#faf7f2]">{room.name}</h3>
                      <p className="text-xs text-[#d6c6b3]/80 line-clamp-2">{room.description}</p>
                      <p className="text-[11px] text-[#c5a059] font-medium">{room.capacity.text}</p>

                      <div className="pt-3 border-t border-[#28503c] flex items-center justify-between">
                        <button
                          onClick={() => { setIsNewRoom(false); setEditingRoom(room); }}
                          className="px-3.5 py-1.5 bg-[#28503c] hover:bg-[#386851] text-[#faf7f2] text-xs font-semibold rounded flex items-center gap-1.5"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit Details & Image</span>
                        </button>

                        <button
                          onClick={() => handleDeleteRoom(room.id)}
                          className="px-3 py-1.5 bg-rose-900/40 hover:bg-rose-900 text-rose-300 text-xs font-semibold rounded flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. CMS: GALLERY PHOTOS */}
          {activeTab === 'cms_gallery' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">CMS Media</span>
                <h1 className="font-serif-heading text-3xl sm:text-4xl text-[#faf7f2]">Photo Gallery CMS</h1>
              </div>

              {/* Add Photo Form */}
              <form onSubmit={handleAddGalleryItem} className="bg-[#152e22] border border-[#28503c] rounded-2xl p-6 space-y-4 shadow-xl">
                <h3 className="font-serif-heading text-xl text-[#c5a059]">Add New Photo to Website</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Photo Title (e.g. Forest Sunset)"
                    value={newGalleryImage.title}
                    onChange={(e) => setNewGalleryImage({ ...newGalleryImage, title: e.target.value })}
                    className="bg-[#0d1e16] border border-[#28503c] rounded-lg px-3.5 py-2 text-xs text-[#faf7f2]"
                    required
                  />

                  <select
                    value={newGalleryImage.category}
                    onChange={(e) => setNewGalleryImage({ ...newGalleryImage, category: e.target.value as any })}
                    className="bg-[#0d1e16] border border-[#28503c] rounded-lg px-3.5 py-2 text-xs text-[#faf7f2]"
                  >
                    <option value="RESORT">RESORT</option>
                    <option value="ROOMS">ROOMS</option>
                    <option value="NATURE">NATURE</option>
                    <option value="WEDDINGS">WEDDINGS</option>
                    <option value="EVENTS">EVENTS</option>
                    <option value="POOL">POOL</option>
                  </select>

                  <input
                    type="url"
                    placeholder="Image URL (https://...)"
                    value={newGalleryImage.image}
                    onChange={(e) => setNewGalleryImage({ ...newGalleryImage, image: e.target.value })}
                    className="bg-[#0d1e16] border border-[#28503c] rounded-lg px-3.5 py-2 text-xs text-[#faf7f2]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2 bg-[#c5a059] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Photo to Gallery</span>
                </button>
              </form>

              {/* Photos List Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((g) => (
                  <div key={g.id} className="relative group aspect-[4/3] rounded-xl overflow-hidden bg-[#0d1e16] border border-[#28503c]">
                    <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0d1e16]/80 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-bold">{g.category}</span>
                        <p className="font-semibold text-[#faf7f2] mt-0.5">{g.title}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteGalleryItem(g.id)}
                        className="px-2.5 py-1 bg-rose-800 text-rose-100 text-[11px] rounded flex items-center gap-1 w-fit"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. RESERVATION INQUIRIES TAB */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">Guest Bookings</span>
                <h1 className="font-serif-heading text-3xl sm:text-4xl text-[#faf7f2]">Reservation Records</h1>
              </div>

              <div className="bg-[#152e22] border border-[#28503c] rounded-2xl overflow-hidden shadow-xl">
                <table className="w-full text-left text-xs text-[#faf7f2]">
                  <thead className="bg-[#1c3d2e] uppercase text-[10px] tracking-widest text-[#c5a059]">
                    <tr>
                      <th className="p-4">Ref ID</th>
                      <th className="p-4">Guest Name</th>
                      <th className="p-4">Requested Villa</th>
                      <th className="p-4">Dates</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#28503c]/40">
                    {inquiries.map((item) => (
                      <tr key={item.id} className="hover:bg-[#1c3d2e]/40 transition-colors">
                        <td className="p-4 font-mono font-bold text-[#c5a059]">{item.id}</td>
                        <td className="p-4 font-semibold">{item.guestName}</td>
                        <td className="p-4">{item.villaName}</td>
                        <td className="p-4">{item.checkIn} to {item.checkOut}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase ${item.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-400' : item.status === 'Pending' ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-400'}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          {item.status === 'Pending' && (
                            <button
                              onClick={() => handleUpdateInquiryStatus(item.id, 'Confirmed')}
                              className="px-2.5 py-1 bg-emerald-700 hover:bg-emerald-600 text-[#faf7f2] rounded text-[11px]"
                            >
                              Approve
                            </button>
                          )}
                          <button
                            onClick={() => setSelectedInquiry(item)}
                            className="px-2.5 py-1 bg-[#28503c] hover:bg-[#386851] text-[#faf7f2] rounded text-[11px]"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Villa Edit Modal */}
      <AnimatePresence>
        {editingRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d1e16]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <form onSubmit={handleSaveRoom} className="bg-[#152e22] border border-[#28503c] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-5 text-[#faf7f2] my-8 relative">
              <button
                type="button"
                onClick={() => setEditingRoom(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#1c3d2e] text-[#faf7f2]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-[#28503c] pb-3">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">{isNewRoom ? 'New Villa' : 'Edit Villa Details'}</span>
                <h3 className="font-serif-heading text-2xl text-[#faf7f2]">{editingRoom.name}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="uppercase tracking-wider text-[#c5a059]">Villa Name</label>
                  <input
                    type="text"
                    value={editingRoom.name}
                    onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })}
                    className="w-full bg-[#0d1e16] border border-[#28503c] rounded px-3 py-2 text-[#faf7f2]"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="uppercase tracking-wider text-[#c5a059]">Bed Type</label>
                  <input
                    type="text"
                    value={editingRoom.bedType}
                    onChange={(e) => setEditingRoom({ ...editingRoom, bedType: e.target.value })}
                    className="w-full bg-[#0d1e16] border border-[#28503c] rounded px-3 py-2 text-[#faf7f2]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="uppercase tracking-wider text-[#c5a059]">Capacity Text</label>
                  <input
                    type="text"
                    value={editingRoom.capacity.text}
                    onChange={(e) => setEditingRoom({ ...editingRoom, capacity: { ...editingRoom.capacity, text: e.target.value } })}
                    className="w-full bg-[#0d1e16] border border-[#28503c] rounded px-3 py-2 text-[#faf7f2]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="uppercase tracking-wider text-[#c5a059]">Featured Image URL</label>
                  <input
                    type="url"
                    value={editingRoom.featuredImage}
                    onChange={(e) => setEditingRoom({ ...editingRoom, featuredImage: e.target.value })}
                    className="w-full bg-[#0d1e16] border border-[#28503c] rounded px-3 py-2 text-[#faf7f2]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <label className="uppercase tracking-wider text-[#c5a059]">Short Description</label>
                <textarea
                  rows={2}
                  value={editingRoom.description}
                  onChange={(e) => setEditingRoom({ ...editingRoom, description: e.target.value })}
                  className="w-full bg-[#0d1e16] border border-[#28503c] rounded px-3 py-2 text-[#faf7f2]"
                />
              </div>

              <div className="pt-3 border-t border-[#28503c] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingRoom(null)}
                  className="px-4 py-2 bg-[#1c3d2e] text-[#faf7f2] text-xs font-semibold rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#c5a059] text-[#0d1e16] text-xs font-semibold uppercase tracking-widest rounded shadow"
                >
                  Save Villa
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
