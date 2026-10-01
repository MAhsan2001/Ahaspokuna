import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { Experience } from '../data/experiences';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group bg-[#faf7f2] border border-[#d6c6b3]/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#c5a059]/60 transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1e16]">
        <img
          src={experience.image}
          alt={experience.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16]/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#0d1e16]/80 backdrop-blur-md text-[#c5a059] text-[11px] uppercase tracking-widest font-medium border border-[#c5a059]/30">
          {experience.category}
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0d1e16] font-normal group-hover:text-[#28503c] transition-colors mb-2">
            {experience.title}
          </h3>
          <p className="text-xs italic font-serif-heading text-[#c5a059] mb-3">
            "{experience.tagline}"
          </p>
          <p className="text-sm text-[#28503c]/80 line-clamp-3 leading-relaxed mb-5 font-light">
            {experience.shortDescription}
          </p>

          <ul className="space-y-1.5 mb-6 pt-4 border-t border-[#d6c6b3]/40">
            {experience.highlights.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-[#0d1e16]/85">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#587853] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[#d6c6b3]/40 flex items-center justify-between">
          <span className="text-xs text-[#28503c]/70 font-medium">
            {experience.duration || 'Daily Service'}
          </span>
          <Link
            to={`/experience#${experience.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0d1e16] group-hover:text-[#c5a059] transition-colors"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
