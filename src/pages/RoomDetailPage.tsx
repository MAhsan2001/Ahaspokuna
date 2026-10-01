import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { roomsData } from '../data/rooms';
import { Users, Maximize, Bed, Check, Calendar, ArrowLeft, Shield, Sparkles } from 'lucide-react';

export const RoomDetailPage: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();

  const room = roomsData.find((r) => r.id === roomId) || roomsData[0];

  const [activeImage, setActiveImage] = useState<string>(room.featuredImage);
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(room.capacity.adults);

  const handleBookingRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      roomId: room.id,
      checkIn: checkIn || new Date().toISOString().split('T')[0],
      checkOut: checkOut || new Date(Date.now() + 86400000).toISOString().split('T')[0],
      guests: guests.toString()
    });
    navigate(`/booking?${queryParams.toString()}`);
  };

  return (
    <PageTransition>
      {/* Top Banner Hero */}
      <section className="relative pt-32 pb-16 bg-[#0d1e16] text-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Back */}
          <Link
            to="/stay"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#dfbe7d] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Accommodations</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#28503c]/50">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
                Private Luxury Sanctuary
              </span>
              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-[#faf7f2] font-normal leading-tight mt-1">
                {room.name}
              </h1>
              <p className="text-base text-[#d6c6b3]/85 font-light italic mt-1">
                "{room.tagline}"
              </p>
            </div>

            {/* Room Spec Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#faf7f2]">
              <div className="px-3.5 py-2 rounded-lg bg-[#1c3d2e] border border-[#28503c] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#c5a059]" />
                <span>{room.capacity.text}</span>
              </div>
              <div className="px-3.5 py-2 rounded-lg bg-[#1c3d2e] border border-[#28503c] flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#c5a059]" />
                <span>{room.bedType}</span>
              </div>
              <div className="px-3.5 py-2 rounded-lg bg-[#1c3d2e] border border-[#28503c] flex items-center gap-2">
                <Maximize className="w-4 h-4 text-[#c5a059]" />
                <span>{room.sizeSqMters} m²</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Gallery */}
      <section className="py-16 sm:py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content Area (2 Cols) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Active Image */}
              <div className="space-y-4">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-[#d6c6b3]/50 bg-[#0d1e16]">
                  <img
                    src={activeImage}
                    alt={room.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {room.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === img ? 'border-[#c5a059] scale-95 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 pt-6 border-t border-[#d6c6b3]/40">
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0d1e16]">
                  About This Residence
                </h3>
                <p className="text-base text-[#28503c]/90 font-light leading-relaxed">
                  {room.longDescription}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <h3 className="font-serif-heading text-2xl text-[#0d1e16]">
                  Residence Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {room.highlights.map((item) => (
                    <div
                      key={item}
                      className="p-4 rounded-xl bg-[#f4eee7] border border-[#d6c6b3]/50 flex items-start gap-3"
                    >
                      <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-[#0d1e16]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Facilities List */}
              <div className="space-y-4 pt-6 border-t border-[#d6c6b3]/40">
                <h3 className="font-serif-heading text-2xl text-[#0d1e16]">
                  Amenities & Room Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.facilities.map((facility) => (
                    <div key={facility} className="flex items-center gap-2.5 text-sm text-[#0d1e16]">
                      <div className="p-1 rounded-full bg-[#587853]/20 text-[#587853]">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Panel (Desktop) */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#0d1e16] text-[#faf7f2] p-6 sm:p-8 rounded-2xl border border-[#28503c] shadow-2xl space-y-6">
                <div className="border-b border-[#28503c] pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">
                    Direct Reservation
                  </span>
                  <h3 className="font-serif-heading text-3xl text-[#faf7f2] mt-1">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#d6c6b3]/75 mt-1">
                    {room.priceNote || 'Direct Booking Guarantee'}
                  </p>
                </div>

                <form onSubmit={handleBookingRedirect} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-widest text-[#c5a059]">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#1c3d2e] border border-[#28503c] rounded px-3 py-2 text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a059]"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-widest text-[#c5a059]">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#1c3d2e] border border-[#28503c] rounded px-3 py-2 text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a059]"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-widest text-[#c5a059]">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#1c3d2e] border border-[#28503c] rounded px-3 py-2 text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value={1} className="bg-[#0d1e16]">1 Adult</option>
                      <option value={2} className="bg-[#0d1e16]">2 Adults</option>
                      <option value={3} className="bg-[#0d1e16]">3 Adults</option>
                      <option value={4} className="bg-[#0d1e16]">4 Adults</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-lg hover:shadow-xl mt-4"
                  >
                    BOOK THIS VILLA NOW
                  </button>
                </form>

                <div className="pt-4 border-t border-[#28503c] text-center space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#d6c6b3]/80">
                    <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Best Price & Direct Assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Bottom Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d1e16]/95 backdrop-blur-md p-4 border-t border-[#28503c] flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">
            {room.name}
          </span>
          <p className="text-[11px] text-[#d6c6b3]/80">{room.capacity.text}</p>
        </div>
        <Link
          to={`/booking?roomId=${room.id}`}
          className="px-6 py-3 bg-[#c5a059] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded shadow-md"
        >
          BOOK NOW
        </Link>
      </div>
    </PageTransition>
  );
};
