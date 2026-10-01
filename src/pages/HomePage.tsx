import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TreePine, MapPin, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Hero } from '../components/Hero';
import { BookingWidget } from '../components/BookingWidget';
import { SectionHeading } from '../components/SectionHeading';
import { NatureStats } from '../components/NatureStats';
import { RoomGrid } from '../components/RoomGrid';
import { ExperienceCard } from '../components/ExperienceCard';
import { experiencesData } from '../data/experiences';
import { Gallery } from '../components/Gallery';
import { siteConfig } from '../data/site';

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Floating Booking Widget */}
      <BookingWidget variant="floating" />

      {/* 3. Introduction Section (Editorial Welcome) */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left Image Column with Framing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#d6c6b3]/50">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Ahas Pokuna Eco Villa Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Accent Box */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 p-6 bg-[#0d1e16] text-[#faf7f2] rounded-xl shadow-xl border border-[#28503c]">
                <p className="font-serif-heading text-xl text-[#c5a059] italic mb-1">
                  25 Acres
                </p>
                <p className="text-xs text-[#d6c6b3]/80 font-light">
                  Untouched forest reserve in Barandana, Kurunegala.
                </p>
              </div>
            </motion.div>

            {/* Right Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#c5a059]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                  Welcome to Ahas Pokuna
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-[#0d1e16] leading-[1.1] font-normal">
                25 ACRES OF UNTAMED NATURE
              </h2>

              <p className="text-base sm:text-lg text-[#28503c]/85 font-light leading-relaxed">
                Ahas Pokuna Holiday Resorts is designed as a private eco-sanctuary in Kurunegala, Sri Lanka. Tucked away across 25 acres of lush tropical woodlands, our resort combines modern architectural comfort with uninterrupted nature immersion.
              </p>

              <p className="text-sm sm:text-base text-[#28503c]/80 font-light leading-relaxed">
                Whether relaxing by our sparkling outdoor pool, walking through forest paths, or savoring authentic Sri Lankan cuisine under open skies, every moment at Ahas Pokuna offers peaceful luxury.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#28503c] hover:bg-[#1c3d2e] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md hover:shadow-xl group"
                >
                  <span>DISCOVER AHAS POKUNA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Nature Stats Section */}
      <NatureStats />

      {/* 5. Featured Accommodations */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Private Villas & Cabanas"
            title="ACCOMMODATIONS IN HARMONY WITH NATURE"
            description="Our villas and cabanas are thoughtfully positioned across the forest preserve to grant ultimate privacy, panoramic canopy views, and modern comforts."
          />

          <RoomGrid limit={3} />

          <div className="mt-12 text-center">
            <Link
              to="/stay"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#28503c] text-[#28503c] hover:bg-[#28503c] hover:text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300"
            >
              <span>VIEW ALL ACCOMMODATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Listen to the Forest (Wildlife & Sanctuary) */}
      <section className="relative py-28 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80"
            alt="Forest backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e16] via-[#0d1e16]/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#c5a059]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Forest Sanctuary
              </span>
            </div>

            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#faf7f2] font-normal leading-tight mb-6">
              LISTEN TO THE FOREST
            </h2>

            <p className="text-base sm:text-lg text-[#d6c6b3]/90 font-light leading-relaxed mb-8">
              Step outside your villa into a world where birdsong replaces morning alarms. The 25-acre natural canopy provides a peaceful haven for native songbirds, tropical butterflies, and fresh forest air.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1c3d2e]/60 border border-[#28503c]">
                <TreePine className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf7f2]">Pure Oxygen Trail</h4>
                  <p className="text-xs text-[#d6c6b3]/80">Shaded walking paths across 25 acres.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1c3d2e]/60 border border-[#28503c]">
                <Sparkles className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf7f2]">Zero Pollution</h4>
                  <p className="text-xs text-[#d6c6b3]/80">Peaceful sanctuary far from urban noise.</p>
                </div>
              </div>
            </div>

            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-xl"
            >
              <span>EXPLORE NATURE EXPERIENCES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Experiences Overview */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Resort Activities"
            title="CURATED EXPERIENCES FOR EVERY GUEST"
            description="Whether seeking solitary reflection, romantic candlelight dining, or family pool fun, our experiences are crafted around natural hospitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiencesData.slice(0, 3).map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Weddings & Events Teaser */}
      <section className="relative py-28 bg-[#1c3d2e] text-[#faf7f2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-14 rounded-2xl bg-[#0d1e16]/80 border border-[#c5a059]/40 backdrop-blur-xl shadow-2xl space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Weddings & Outings
            </span>

            <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#faf7f2] font-normal leading-tight">
              YOUR DAY. YOUR STORY. YOUR PLACE.
            </h2>

            <p className="text-base sm:text-lg text-[#d6c6b3]/90 font-light leading-relaxed max-w-2xl mx-auto">
              Host your intimate wedding, anniversary, or private company outing against the stunning natural backdrop of 25 acres of forest lawns.
            </p>

            <div className="pt-4">
              <Link
                to="/weddings-events"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-lg"
              >
                <span>PLAN YOUR EVENT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Photo Gallery Teaser */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Visual Journey"
            title="GALLERY OF NATURE & LUXURY"
            description="Glance through the peaceful moments captured across our pool, villas, and 25-acre natural grounds."
          />

          <Gallery limit={6} />

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#28503c] text-[#faf7f2] hover:bg-[#1c3d2e] font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-md"
            >
              <span>EXPLORE FULL GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Location Section */}
      <section className="py-20 bg-[#f4eee7] border-t border-[#d6c6b3]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center gap-2 text-[#c5a059] font-semibold text-xs uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                <span>Our Location</span>
              </div>
              <h3 className="font-serif-heading text-3xl sm:text-4xl text-[#0d1e16]">
                VISIT AHAS POKUNA
              </h3>
              <p className="text-sm text-[#28503c]/80 font-light leading-relaxed">
                {siteConfig.address.fullText}
              </p>
              <div className="text-xs text-[#0d1e16]/80 space-y-1 pt-2">
                <p>Phone: {siteConfig.contact.phones.join(' / ')}</p>
                <p>Email: {siteConfig.contact.email}</p>
              </div>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#28503c] text-[#faf7f2] text-xs font-semibold uppercase tracking-widest rounded hover:bg-[#1c3d2e] transition-colors"
              >
                GET DIRECTIONS
              </Link>
            </div>

            {/* Map Component / Placeholder */}
            <div className="lg:col-span-2 h-80 rounded-xl overflow-hidden border border-[#d6c6b3] relative bg-[#0d1e16] flex items-center justify-center text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Resort Location Overview"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10 p-6 bg-[#0d1e16]/90 border border-[#28503c] rounded-xl text-[#faf7f2] max-w-md">
                <MapPin className="w-8 h-8 text-[#c5a059] mx-auto mb-2" />
                <h4 className="font-serif-heading text-xl text-[#faf7f2]">Barandana, Kurunegala</h4>
                <p className="text-xs text-[#d6c6b3]/80 mt-1">
                  Located off Ranthatiuyana Road amidst 25 acres of protected forest preserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
