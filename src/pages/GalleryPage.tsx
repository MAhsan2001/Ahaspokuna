import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Gallery } from '../components/Gallery';

export const GalleryPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="relative py-32 sm:py-40 bg-[#0d1e16] text-[#faf7f2] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e16] via-[#0d1e16]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
            Visual Storytelling
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#faf7f2] font-normal leading-tight mt-2 mb-4">
            RESORT PHOTO GALLERY
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#d6c6b3]/90 font-light leading-relaxed">
            Immerse yourself in images capturing the architecture, swimming pool, forest pathways, and memorable celebrations at Ahas Pokuna.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery */}
      <section className="py-24 sm:py-32 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Explore Photography"
            title="CAPTURED MOMENTS IN NATURE"
            description="Click on any image to launch the full-screen lightbox view with keyboard navigation."
          />

          <Gallery />
        </div>
      </section>
    </PageTransition>
  );
};
