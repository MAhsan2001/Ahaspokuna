import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { experiencesData } from '../data/experiences';
import { CheckCircle2, ArrowRight, TreePine, Sparkles, Heart } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-32 sm:py-40 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80"
            alt="Experiences Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Nature & Leisure Activities
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#faf7f2] font-normal leading-tight mt-2 mb-4">
            EXPERIENCES AT AHAS POKUNA
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#d6c6b3]/90 font-light leading-relaxed">
            From forest walking trails across our 25-acre reserve to poolside leisure and romantic outdoor dining under tropical stars.
          </p>
        </div>
      </section>

      {/* Experience List Detailed Sections */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {experiencesData.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                id={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-[#d6c6b3]/50 bg-[#0d1e16]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#0d1e16]/80 backdrop-blur-md text-[#c5a059] text-xs font-semibold uppercase tracking-widest border border-[#c5a059]/40">
                    {exp.category}
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8 }}
                  className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                    {exp.suitableFor || 'Guest Activity'}
                  </span>

                  <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#0d1e16] font-normal leading-tight">
                    {exp.title}
                  </h2>

                  <p className="text-sm italic font-serif-heading text-[#c5a059]">
                    "{exp.tagline}"
                  </p>

                  <p className="text-base text-[#28503c]/85 font-light leading-relaxed">
                    {exp.fullDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-2 pt-4 border-t border-[#d6c6b3]/40">
                    <h4 className="text-xs uppercase tracking-widest text-[#0d1e16] font-semibold mb-3">
                      Experience Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-[#0d1e16]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#587853] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#28503c] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#1c3d2e] transition-colors"
                    >
                      <span>INQUIRE ABOUT THIS EXPERIENCE</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
};
