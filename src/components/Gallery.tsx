import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { galleryCategories } from '../data/gallery';
import { getStoredGallery } from '../utils/storage';
import { GalleryLightbox } from './GalleryLightbox';

interface GalleryProps {
  initialCategory?: typeof galleryCategories[number];
  limit?: number;
}

export const Gallery: React.FC<GalleryProps> = ({
  initialCategory = 'ALL',
  limit
}) => {
  const [activeCategory, setActiveCategory] = useState<typeof galleryCategories[number]>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = getStoredGallery();

  // Filter items based on active category
  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#28503c] text-[#faf7f2] shadow-md border border-[#c5a059]/40'
                : 'bg-[#faf7f2] text-[#0d1e16]/80 hover:bg-[#d6c6b3]/30 border border-[#d6c6b3]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Masonry / Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {displayedItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#d6c6b3]/40 bg-[#0d1e16] aspect-[4/3] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16]/90 via-[#0d1e16]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#faf7f2]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[#faf7f2]">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c5a059]">
                  {item.category}
                </span>
                <h4 className="font-serif-heading text-xl text-[#faf7f2] mt-0.5">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-[#0d1e16]/80 text-[#c5a059] border border-[#c5a059]/40">
                <Maximize2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={displayedItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
};
