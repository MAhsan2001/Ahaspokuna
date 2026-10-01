import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0d1e16]">
      {/* Background Image with Slow Parallax/Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85')`
        }}
      />

      {/* Dark Forest Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/60 to-[#0d1e16]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0d1e16]/30 to-[#0d1e16]/80" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#faf7f2] pt-24 pb-32">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c3d2e]/80 border border-[#c5a059]/40 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
            {siteConfig.tagline}
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight mb-4"
        >
          {siteConfig.heroHeadline}
          <span className="block text-2xl sm:text-4xl md:text-5xl font-light italic text-[#d6c6b3] mt-2">
            {siteConfig.heroSubheadline}
          </span>
        </motion.h1>

        {/* Quote / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif-heading italic text-xl sm:text-2xl md:text-3xl text-[#c5a059] mb-4"
        >
          "Where Luxury Meets the Wild"
        </motion.p>

        {/* Paragraph text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light text-[#d6c6b3]/90 leading-relaxed mb-10"
        >
          {siteConfig.heroDescription}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/booking"
            className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] hover:bg-[#dfbe7d] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            BOOK YOUR STAY
          </Link>
          <Link
            to="/stay"
            className="w-full sm:w-auto px-8 py-4 bg-[#1c3d2e]/80 hover:bg-[#28503c] text-[#faf7f2] border border-[#28503c] font-semibold text-xs uppercase tracking-widest rounded backdrop-blur-md transition-all duration-300"
          >
            EXPLORE THE RESORT
          </Link>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#d6c6b3]/70 font-light">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="p-1 rounded-full border border-[#d6c6b3]/40 text-[#c5a059]"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
