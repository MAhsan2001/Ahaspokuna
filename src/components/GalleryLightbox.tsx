import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(nextIndex);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0d1e16]/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8"
      >
        {/* Top Control Bar */}
        <div className="w-full max-w-6xl flex items-center justify-between z-10 text-[#faf7f2] pb-4 border-b border-[#28503c]/40">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              {currentItem.category}
            </span>
            <span className="text-xs text-[#d6c6b3]/70">
              ({currentIndex + 1} / {items.length})
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 rounded-full bg-[#1c3d2e] text-[#faf7f2] hover:bg-[#28503c] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="relative w-full max-w-5xl flex-grow flex items-center justify-center my-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#0d1e16]/80 text-[#faf7f2] hover:bg-[#c5a059] hover:text-[#0d1e16] border border-[#28503c] transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-h-[75vh] max-w-full overflow-hidden rounded-lg shadow-2xl flex flex-col items-center"
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#0d1e16]/80 text-[#faf7f2] hover:bg-[#c5a059] hover:text-[#0d1e16] border border-[#28503c] transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption Bar */}
        <div className="w-full max-w-3xl text-center text-[#faf7f2] pt-4 border-t border-[#28503c]/40">
          <h4 className="font-serif-heading text-xl sm:text-2xl text-[#faf7f2]">
            {currentItem.title}
          </h4>
          {currentItem.caption && (
            <p className="text-xs sm:text-sm text-[#d6c6b3]/80 font-light mt-1">
              {currentItem.caption}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
