import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Bed, ChevronRight } from 'lucide-react';
import { roomsData } from '../data/rooms';

interface BookingWidgetProps {
  className?: string;
  variant?: 'floating' | 'inline';
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  className = '',
  variant = 'floating'
}) => {
  const navigate = useNavigate();

  // Get tomorrow's date format for defaults
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDate(today));
  const [checkOut, setCheckOut] = useState<string>(formatDate(tomorrow));
  const [guests, setGuests] = useState<number>(2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      checkIn,
      checkOut,
      guests: guests.toString(),
      roomId: selectedRoomId
    });
    navigate(`/booking?${queryParams.toString()}`);
  };

  return (
    <div
      className={`${
        variant === 'floating'
          ? 'relative z-30 max-w-6xl mx-auto -mt-16 sm:-mt-20 px-4 sm:px-6'
          : 'w-full'
      } ${className}`}
    >
      <form
        onSubmit={handleSearch}
        className="bg-[#0d1e16]/95 backdrop-blur-xl border border-[#28503c]/60 rounded-xl shadow-2xl p-4 sm:p-6 text-[#faf7f2]"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Check-in */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#1c3d2e]/70 border border-[#28503c] rounded-lg px-3.5 py-2.5 text-sm text-[#faf7f2] focus:outline-none focus:border-[#c5a059] transition-colors"
              required
            />
          </div>

          {/* Check-out */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || formatDate(today)}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#1c3d2e]/70 border border-[#28503c] rounded-lg px-3.5 py-2.5 text-sm text-[#faf7f2] focus:outline-none focus:border-[#c5a059] transition-colors"
              required
            />
          </div>

          {/* Guests & Room */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-[#1c3d2e]/70 border border-[#28503c] rounded-lg px-3 py-2.5 text-sm text-[#faf7f2] focus:outline-none focus:border-[#c5a059] transition-colors"
              >
                <option value={1} className="bg-[#0d1e16]">1 Guest</option>
                <option value={2} className="bg-[#0d1e16]">2 Guests</option>
                <option value={3} className="bg-[#0d1e16]">3 Guests</option>
                <option value={4} className="bg-[#0d1e16]">4 Guests</option>
                <option value={6} className="bg-[#0d1e16]">5+ Guests</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5" />
                Villa Type
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-[#1c3d2e]/70 border border-[#28503c] rounded-lg px-2.5 py-2.5 text-sm text-[#faf7f2] focus:outline-none focus:border-[#c5a059] transition-colors truncate"
              >
                <option value="all" className="bg-[#0d1e16]">All Villas</option>
                {roomsData.map((room) => (
                  <option key={room.id} value={room.id} className="bg-[#0d1e16]">
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <span>CHECK AVAILABILITY</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
