import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { roomsData } from '../data/rooms';
import type { Room } from '../data/rooms';
import { Calendar, Users, Bed, CheckCircle2, ShieldCheck, ChevronRight, AlertCircle, ArrowLeft } from 'lucide-react';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Step state (1: Select Dates & Room -> 2: Guest Details -> 3: Confirmation)
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form selections
  const [checkIn, setCheckIn] = useState<string>(
    searchParams.get('checkIn') || new Date().toISOString().split('T')[0]
  );
  const [checkOut, setCheckOut] = useState<string>(
    searchParams.get('checkOut') || new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [guests, setGuests] = useState<number>(
    Number(searchParams.get('guests')) || 2
  );
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    searchParams.get('roomId') || roomsData[0].id
  );

  // Guest details form
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [loading, setLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(true);

  const selectedRoom = roomsData.find((r) => r.id === selectedRoomId) || roomsData[0];

  // Calculate nights
  const nights = React.useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkIn, checkOut]);

  const handleProceedToDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate checking backend availability
    setTimeout(() => {
      setLoading(false);
      setIsAvailable(true);
      setStep(2);
    }, 600);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking creation API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1000);
  };

  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="relative py-28 sm:py-36 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Booking Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Direct Reservation Portal
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#faf7f2] font-normal mt-1">
            RESERVE YOUR SANCTUARY
          </h1>
          <p className="text-xs sm:text-sm text-[#d6c6b3]/80 font-light mt-2">
            No booking fees • Direct best rate guarantee • Instant confirmation inquiry
          </p>

          {/* Stepper Indicator */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mt-8">
            <div className={`flex items-center gap-2 text-xs uppercase tracking-widest ${step >= 1 ? 'text-[#c5a059] font-semibold' : 'text-[#d6c6b3]/50'}`}>
              <span className="w-6 h-6 rounded-full bg-[#1c3d2e] border border-[#c5a059] flex items-center justify-center text-[11px]">1</span>
              <span>1. Dates & Villa</span>
            </div>
            <div className="w-8 h-[1px] bg-[#28503c]"></div>
            <div className={`flex items-center gap-2 text-xs uppercase tracking-widest ${step >= 2 ? 'text-[#c5a059] font-semibold' : 'text-[#d6c6b3]/50'}`}>
              <span className="w-6 h-6 rounded-full bg-[#1c3d2e] border border-[#c5a059] flex items-center justify-center text-[11px]">2</span>
              <span>2. Guest Info</span>
            </div>
            <div className="w-8 h-[1px] bg-[#28503c]"></div>
            <div className={`flex items-center gap-2 text-xs uppercase tracking-widest ${step === 3 ? 'text-[#c5a059] font-semibold' : 'text-[#d6c6b3]/50'}`}>
              <span className="w-6 h-6 rounded-full bg-[#1c3d2e] border border-[#c5a059] flex items-center justify-center text-[11px]">3</span>
              <span>3. Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Flow Section */}
      <section className="py-16 sm:py-24 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* STEP 1: Select Dates, Guests & Villa */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-10"
              >
                {/* Form Column */}
                <form onSubmit={handleProceedToDetails} className="lg:col-span-2 space-y-8 bg-[#faf7f2] p-6 sm:p-8 rounded-2xl border border-[#d6c6b3]/60 shadow-lg">
                  <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0d1e16]">
                    Select Dates & Accommodation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                        Check-In Date *
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                        Check-Out Date *
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={6}>5+ Guests / Family</option>
                    </select>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#d6c6b3]/40">
                    <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold block">
                      Choose Villa Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {roomsData.map((room) => (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoomId(room.id)}
                          className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex flex-col justify-between ${
                            selectedRoomId === room.id
                              ? 'border-[#c5a059] bg-[#0d1e16] text-[#faf7f2] shadow-md'
                              : 'border-[#d6c6b3] bg-[#f4eee7] text-[#0d1e16] hover:border-[#28503c]'
                          }`}
                        >
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c5a059]">
                              {room.capacity.text}
                            </span>
                            <h4 className="font-serif-heading text-lg font-normal mt-0.5">
                              {room.name}
                            </h4>
                            <p className="text-xs opacity-80 line-clamp-2 mt-1">
                              {room.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#28503c] hover:bg-[#1c3d2e] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{loading ? 'CHECKING AVAILABILITY...' : 'CONTINUE TO GUEST DETAILS'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Reservation Summary Box */}
                <div className="lg:col-span-1">
                  <div className="bg-[#0d1e16] text-[#faf7f2] p-6 sm:p-8 rounded-2xl border border-[#28503c] shadow-xl space-y-6">
                    <h3 className="font-serif-heading text-2xl text-[#c5a059]">
                      Stay Summary
                    </h3>
                    <div className="space-y-3 text-xs text-[#d6c6b3] border-b border-[#28503c] pb-4">
                      <div className="flex justify-between">
                        <span>Check-In:</span>
                        <span className="font-semibold text-[#faf7f2]">{checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Check-Out:</span>
                        <span className="font-semibold text-[#faf7f2]">{checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold text-[#faf7f2]">{nights} Night(s)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span className="font-semibold text-[#faf7f2]">{guests} Persons</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#c5a059]">Selected Villa</span>
                      <h4 className="font-serif-heading text-xl text-[#faf7f2] mt-0.5">{selectedRoom.name}</h4>
                      <p className="text-xs text-[#d6c6b3]/75 mt-1">{selectedRoom.bedType}</p>
                    </div>

                    <div className="pt-2 text-xs text-[#d6c6b3]/80 space-y-1">
                      <p className="flex items-center gap-1.5 text-[#c5a059]">
                        <ShieldCheck className="w-4 h-4" />
                        Direct Reservation Inquiry
                      </p>
                      <p>Our team will confirm your exact villa availability upon submission.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Guest Information */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto bg-[#faf7f2] p-8 sm:p-12 rounded-2xl border border-[#d6c6b3]/60 shadow-xl space-y-8"
              >
                <div className="flex items-center justify-between border-b border-[#d6c6b3]/40 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Step 2 of 3</span>
                    <h3 className="font-serif-heading text-3xl text-[#0d1e16]">Guest Contact Information</h3>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-[#28503c] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Dates</span>
                  </button>
                </div>

                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={guestInfo.firstName}
                        onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                        required
                        className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={guestInfo.lastName}
                        onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                        required
                        className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={guestInfo.email}
                        onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                        required
                        className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={guestInfo.phone}
                        onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                        required
                        placeholder="+94 77 123 4567"
                        className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
                      Special Requests / Dietary Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={guestInfo.specialRequests}
                      onChange={(e) => setGuestInfo({ ...guestInfo, specialRequests: e.target.value })}
                      placeholder="Airport transfer requests, dietary preferences, anniversary celebrations..."
                      className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>{loading ? 'CONFIRMING RESERVATION...' : 'SUBMIT RESERVATION REQUEST'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 3: Confirmation */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto bg-[#0d1e16] text-[#faf7f2] p-8 sm:p-14 rounded-2xl border border-[#c5a059]/40 shadow-2xl text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#587853]/20 border border-[#587853] text-[#c5a059] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#faf7f2]">
                  RESERVATION INQUIRY RECEIVED
                </h2>

                <p className="text-sm sm:text-base text-[#d6c6b3]/90 font-light leading-relaxed">
                  Thank you, <strong className="text-[#faf7f2]">{guestInfo.firstName}</strong>. Your reservation inquiry for <strong className="text-[#c5a059]">{selectedRoom.name}</strong> ({checkIn} to {checkOut}) has been submitted successfully.
                </p>

                <div className="p-4 rounded-xl bg-[#1c3d2e]/60 border border-[#28503c] text-xs text-[#d6c6b3] space-y-1 text-left">
                  <p><strong>Reference ID:</strong> AHAS-{(Math.random() * 100000).toFixed(0)}</p>
                  <p><strong>Guest Email:</strong> {guestInfo.email}</p>
                  <p><strong>Selected Villa:</strong> {selectedRoom.name}</p>
                </div>

                <p className="text-xs text-[#d6c6b3]/75">
                  Our front desk team will contact you via email or phone shortly to confirm final villa availability and deposit details.
                </p>

                <div className="pt-4">
                  <Link
                    to="/"
                    className="inline-block px-8 py-3.5 bg-[#c5a059] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#dfbe7d] transition-colors"
                  >
                    RETURN TO HOMEPAGE
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
};
