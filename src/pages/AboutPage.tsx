import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { siteConfig } from '../data/site';
import { TreePine, ShieldCheck, Heart, MapPin, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="relative py-32 sm:py-40 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Our Story & Sanctuary
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#faf7f2] font-normal leading-tight mt-2 mb-4">
            ABOUT AHAS POKUNA
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#d6c6b3]/90 font-light leading-relaxed">
            Founded on the principle of peaceful eco-living, Ahas Pokuna Holiday Resorts offers a serene green sanctuary across 25 acres in Kurunegala, Sri Lanka.
          </p>
        </div>
      </section>

      {/* Editorial Story Section 1 */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-24 sm:mb-32">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                The Heritage & Location
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#0d1e16] leading-tight font-normal">
                NESTLED IN BARANDANA, KURUNEGALA
              </h2>
              <p className="text-base text-[#28503c]/85 font-light leading-relaxed">
                Located off Ranthatiuyana Road in Barandana, Kurunegala, Ahas Pokuna Holiday Resorts was established to give travelers an intimate retreat from busy urban life. The property rests amidst 25 acres of natural woodland, providing clean air, gentle mountain breezes, and abundant greenery.
              </p>
              <p className="text-base text-[#28503c]/85 font-light leading-relaxed">
                Our vision is to preserve the natural flora and fauna while offering contemporary luxury amenities, such as our outdoor swimming pool, eco-friendly private villas, and warm Sri Lankan hospitality.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#d6c6b3]/50">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Ahas Pokuna Resort Grounds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Philosophy Pillars Grid */}
          <SectionHeading
            subtitle="Resort Philosophy"
            title="FOUR PILLARS OF OUR SANCTUARY"
            description="Our core values guide every interaction, from architectural design to daily hospitality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 sm:p-8 rounded-xl bg-[#faf7f2] border border-[#d6c6b3]/50 shadow-sm space-y-3">
              <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#0d1e16]">
                25-Acres Nature
              </h3>
              <p className="text-xs text-[#28503c]/80 font-light leading-relaxed">
                Dedicated protection of native trees, walking paths, and bird habitats.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#faf7f2] border border-[#d6c6b3]/50 shadow-sm space-y-3">
              <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#0d1e16]">
                Total Privacy
              </h3>
              <p className="text-xs text-[#28503c]/80 font-light leading-relaxed">
                Generous distances between villas ensure undisturbed peace for guests.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#faf7f2] border border-[#d6c6b3]/50 shadow-sm space-y-3">
              <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#0d1e16]">
                Genuine Warmth
              </h3>
              <p className="text-xs text-[#28503c]/80 font-light leading-relaxed">
                Attentive, respectful Sri Lankan service tailored to your desires.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#faf7f2] border border-[#d6c6b3]/50 shadow-sm space-y-3">
              <div className="p-3 rounded-full bg-[#587853]/20 text-[#587853] w-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#0d1e16]">
                Prime Location
              </h3>
              <p className="text-xs text-[#28503c]/80 font-light leading-relaxed">
                Convenient road access in Kurunegala with zero noise pollution.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#28503c] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#1c3d2e] transition-colors"
            >
              <span>EXPERIENCE AHAS POKUNA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
