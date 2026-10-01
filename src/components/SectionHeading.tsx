import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const isCenter = align === 'center';
  const isRight = align === 'right';
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : isRight ? 'ml-auto text-right' : 'text-left'
      } ${className}`}
    >
      {subtitle && (
        <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start inline-flex">
          <span className="w-8 h-[1px] bg-[#c5a059]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c5a059]">
            {subtitle}
          </span>
          <span className="w-8 h-[1px] bg-[#c5a059]"></span>
        </div>
      )}

      <h2
        className={`font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight ${
          isDark ? 'text-[#faf7f2]' : 'text-[#0d1e16]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 sm:mt-5 text-base sm:text-lg font-light leading-relaxed ${
            isDark ? 'text-[#d6c6b3]/90' : 'text-[#28503c]/85'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
