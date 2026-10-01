import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../data/site';
import { TreePine, Home, Compass, Waves } from 'lucide-react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif-heading font-normal">
      {count}
      {suffix}
    </span>
  );
};

export const NatureStats: React.FC = () => {
  const statIcons = [TreePine, Home, Compass, Waves];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#c5a059]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              Immersion in Nature
            </span>
            <span className="w-8 h-[1px] bg-[#c5a059]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#faf7f2]"
          >
            LET NATURE BE YOUR NEIGHBOUR
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#d6c6b3]/85 font-light leading-relaxed"
          >
            Immerse yourself in 25 uninterrupted acres of pristine tropical forest, bird sanctuaries, and natural mountain breezes in Kurunegala, Sri Lanka.
          </motion.p>
        </div>

        {/* Animated Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {siteConfig.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="text-center p-6 sm:p-8 rounded-xl bg-[#1c3d2e]/50 border border-[#28503c]/40 backdrop-blur-sm hover:border-[#c5a059]/40 transition-colors duration-300"
              >
                <div className="inline-flex p-3 rounded-full bg-[#28503c]/60 text-[#c5a059] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif-heading text-[#c5a059] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-[#d6c6b3]/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
