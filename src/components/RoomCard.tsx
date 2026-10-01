import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Maximize, Bed, Check } from 'lucide-react';
import type { Room } from '../data/rooms';

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#faf7f2] border border-[#d6c6b3]/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#c5a059]/60 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container with Slow Zoom */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d1e16]">
        <img
          src={room.featuredImage}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Capacity Pill */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#0d1e16]/80 backdrop-blur-md text-[#faf7f2] text-xs font-medium flex items-center gap-1.5 border border-[#28503c]/50">
          <Users className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>{room.capacity.text}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-[#faf7f2]">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-1">
            {room.bedType} • {room.sizeSqMters} m²
          </div>
          <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0d1e16] font-normal group-hover:text-[#28503c] transition-colors mb-3">
            {room.name}
          </h3>
          <p className="text-sm text-[#28503c]/80 line-clamp-3 leading-relaxed mb-5 font-light">
            {room.description}
          </p>

          {/* Quick Facilities list */}
          <div className="space-y-1.5 mb-6 pt-4 border-t border-[#d6c6b3]/40">
            {room.facilities.slice(0, 3).map((facility) => (
              <div key={facility} className="flex items-center gap-2 text-xs text-[#0d1e16]/80">
                <Check className="w-3.5 h-3.5 text-[#587853]" />
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#d6c6b3]/40 flex items-center justify-between gap-3">
          <Link
            to={`/stay/${room.id}`}
            className="text-xs font-semibold uppercase tracking-widest text-[#0d1e16] hover:text-[#c5a059] transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/booking?roomId=${room.id}`}
            className="px-4 py-2 bg-[#28503c] hover:bg-[#1c3d2e] text-[#faf7f2] text-xs font-semibold uppercase tracking-widest rounded transition-all shadow-sm hover:shadow"
          >
            Book Villa
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
