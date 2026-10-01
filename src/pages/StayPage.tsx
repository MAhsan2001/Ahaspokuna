import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { RoomGrid } from '../components/RoomGrid';
import { roomsData } from '../data/rooms';
import { Check, ShieldCheck, Sparkles, Bed, Users } from 'lucide-react';

export const StayPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="relative py-32 sm:py-40 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
            alt="Stay Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Eco-Luxury Accommodations
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#faf7f2] font-normal leading-tight mt-2 mb-4">
            SANCTUARIES IN THE WILD
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#d6c6b3]/90 font-light leading-relaxed">
            Discover our luxury eco-villas and forest cabanas set across 25 acres of pristine Kurunegala woodland. Each suite blends refined timber design with total privacy.
          </p>
        </div>
      </section>

      {/* Main Rooms Section */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Explore All Villas"
            title="SELECT YOUR PERFECT FOREST ESCAPE"
            description="All accommodations feature air conditioning, private verandas, luxury ensuite rain showers, and complimentary high-speed Wi-Fi."
          />

          <RoomGrid />

          {/* Inclusions Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#0d1e16] text-[#faf7f2] border border-[#28503c]">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                Included With Every Stay
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-4xl text-[#faf7f2] mt-1">
                Standard Luxury Inclusions
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[#d6c6b3]">
              <div className="p-4 rounded-lg bg-[#1c3d2e]/50 border border-[#28503c]/40 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#faf7f2]">Free High-Speed Wi-Fi</h4>
                  <p className="text-xs text-[#d6c6b3]/75">Stay connected across all villas and main grounds.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#1c3d2e]/50 border border-[#28503c]/40 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#faf7f2]">Outdoor Swimming Pool</h4>
                  <p className="text-xs text-[#d6c6b3]/75">Full access to our forest-framed swimming pool.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#1c3d2e]/50 border border-[#28503c]/40 flex items-start gap-3">
                <Bed className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#faf7f2]">Premium Linens & AC</h4>
                  <p className="text-xs text-[#d6c6b3]/75">Climate control and handcrafted teak bedding.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#1c3d2e]/50 border border-[#28503c]/40 flex items-start gap-3">
                <Users className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#faf7f2]">24-Hour Hospitality</h4>
                  <p className="text-xs text-[#d6c6b3]/75">Dedicated front desk & guest services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
