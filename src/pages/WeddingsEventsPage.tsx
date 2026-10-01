import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Sparkles, Heart, Users, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const WeddingsEventsPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-32 sm:py-40 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
            alt="Weddings Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Weddings & Celebrations
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#faf7f2] font-normal leading-tight mt-2 mb-4">
            YOUR DAY. YOUR STORY. YOUR PLACE.
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#d6c6b3]/90 font-light leading-relaxed">
            Exchange vows or celebrate milestone moments surrounded by 25 acres of vibrant tropical greenery in Kurunegala, Sri Lanka.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Memorable Occasions"
            title="A NATURAL STAGE FOR UNFORGETTABLE EVENTS"
            description="Whether planning an outdoor destination wedding, anniversary celebration, corporate team outing, or birthday gathering, Ahas Pokuna provides expansive natural venues."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Wedding Ceremonies */}
            <div className="p-8 rounded-xl bg-[#faf7f2] border border-[#d6c6b3]/50 shadow-sm hover:shadow-xl transition-all space-y-4">
              <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-2xl text-[#0d1e16]">
                Destination Weddings
              </h3>
              <p className="text-sm text-[#28503c]/85 font-light leading-relaxed">
                Open-air garden ceremonies under leafy canopies, followed by starry evening banquets and private villa stays for the wedding party.
              </p>
              <ul className="space-y-1.5 text-xs text-[#0d1e16]/85 pt-3 border-t border-[#d6c6b3]/40">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Garden Poruwa / Ceremony Setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Bridal Villa Accommodations</span>
                </li>
              </ul>
            </div>

            {/* Corporate Outings */}
            <div className="p-8 rounded-xl bg-[#faf7f2] border border-[#d6c6b3]/50 shadow-sm hover:shadow-xl transition-all space-y-4">
              <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-2xl text-[#0d1e16]">
                Company & Day Outings
              </h3>
              <p className="text-sm text-[#28503c]/85 font-light leading-relaxed">
                Spacious green grounds for team building activities, pool leisure, buffer lunches, and relaxing outdoor gatherings.
              </p>
              <ul className="space-y-1.5 text-xs text-[#0d1e16]/85 pt-3 border-t border-[#d6c6b3]/40">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Full-Day Outing Packages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Pool & Lawn Access</span>
                </li>
              </ul>
            </div>

            {/* Private Celebrations */}
            <div className="p-8 rounded-xl bg-[#faf7f2] border border-[#d6c6b3]/50 shadow-sm hover:shadow-xl transition-all space-y-4">
              <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-2xl text-[#0d1e16]">
                Anniversaries & Parties
              </h3>
              <p className="text-sm text-[#28503c]/85 font-light leading-relaxed">
                Milestone birthdays, family reunions, and intimate gatherings crafted with custom dining menus and peaceful ambiance.
              </p>
              <ul className="space-y-1.5 text-xs text-[#0d1e16]/85 pt-3 border-t border-[#d6c6b3]/40">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Custom Sri Lankan Buffet Options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Nighttime Campfire Audio & Lighting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Event Enquiry Form Section */}
          <div className="max-w-3xl mx-auto">
            <ContactForm defaultSubject="Weddings & Celebrations" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
