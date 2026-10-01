import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Utensils, Coffee, Sun, Moon, CheckCircle2, ArrowRight } from 'lucide-react';

export const DiningPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-32 sm:py-40 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
            alt="Dining Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Authentic Culinary Journeys
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#faf7f2] font-normal leading-tight mt-2 mb-4">
            DINING & FLAVORS OF SRI LANKA
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#d6c6b3]/90 font-light leading-relaxed">
            Experience traditional Sri Lankan cuisine, international favorites, and outdoor candlelit dining framed by the 25-acre forest preserve.
          </p>
        </div>
      </section>

      {/* Main Dining Overview */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Culinary Concept"
            title="FRESH, LOCAL & TAILORED DINING"
            description="Our chefs draw inspiration from authentic Sri Lankan home cooking and contemporary international techniques, using fresh local herbs and organic produce."
          />

          {/* 3 Dining Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Main Pavilion Restaurant */}
            <div className="bg-[#faf7f2] border border-[#d6c6b3]/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit mb-4">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-2xl text-[#0d1e16] mb-2">
                  Main Pavilion Restaurant
                </h3>
                <p className="text-xs italic font-serif-heading text-[#c5a059] mb-4">
                  Open-Air Forest Pavilion
                </p>
                <p className="text-sm text-[#28503c]/85 font-light leading-relaxed mb-6">
                  Serving daily breakfast, lunch, and dinner in a breezy open-air dining pavilion overlooking garden pathways. Enjoy Full English/Irish breakfasts and traditional Sri Lankan rice & curry feasts.
                </p>
              </div>
              <ul className="space-y-2 border-t border-[#d6c6b3]/40 pt-4 text-xs text-[#0d1e16]/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Breakfast: 7:00 AM - 10:30 AM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Lunch & Dinner Service</span>
                </li>
              </ul>
            </div>

            {/* 2. Private Outdoor & Garden Dining */}
            <div className="bg-[#faf7f2] border border-[#d6c6b3]/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit mb-4">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-2xl text-[#0d1e16] mb-2">
                  Veranda & Candlelight Dining
                </h3>
                <p className="text-xs italic font-serif-heading text-[#c5a059] mb-4">
                  Private Intimate Setup
                </p>
                <p className="text-sm text-[#28503c]/85 font-light leading-relaxed mb-6">
                  For couples and families celebrating special occasions, we offer private dining setups on your villa veranda or in secluded garden clearings illuminated by warm oil lamps.
                </p>
              </div>
              <ul className="space-y-2 border-t border-[#d6c6b3]/40 pt-4 text-xs text-[#0d1e16]/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Bespoke Candlelight Menus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Personalized Service</span>
                </li>
              </ul>
            </div>

            {/* 3. Ceylon Tea & Pool Lounge */}
            <div className="bg-[#faf7f2] border border-[#d6c6b3]/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit mb-4">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-2xl text-[#0d1e16] mb-2">
                  Ceylon Tea & Pool Lounge
                </h3>
                <p className="text-xs italic font-serif-heading text-[#c5a059] mb-4">
                  Afternoon Tea & Refreshments
                </p>
                <p className="text-sm text-[#28503c]/85 font-light leading-relaxed mb-6">
                  Relax by the pool with single-origin Ceylon high-grown tea, fresh fruit juices, and light afternoon savory bites as the sun dips below the hill tops.
                </p>
              </div>
              <ul className="space-y-2 border-t border-[#d6c6b3]/40 pt-4 text-xs text-[#0d1e16]/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Fresh Tropical Juices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#587853]" />
                  <span>Artisanal Tea Selection</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#28503c] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#1c3d2e] transition-colors"
            >
              <span>INQUIRE ABOUT DINING & PACKAGES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
