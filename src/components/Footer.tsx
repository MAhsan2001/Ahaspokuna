import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Globe, Share2 } from 'lucide-react';
import { getStoredSiteConfig } from '../utils/storage';

export const Footer: React.FC = () => {
  const siteConfig = getStoredSiteConfig();
  return (
    <footer className="bg-[#0d1e16] text-[#faf7f2] border-t border-[#28503c]/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-12 border-b border-[#28503c]/40">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif-heading text-2xl sm:text-3xl tracking-wider text-[#faf7f2] font-semibold">
                AHAS POKUNA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a059] mt-0.5">
                {siteConfig.tagline}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#d6c6b3]/80 font-light leading-relaxed">
              Sri Lanka's premier 25-acre luxury eco-resort in Kurunegala. Experience pristine forest solitude, private villas, outdoor pool, and memorable dining.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-[#1c3d2e] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0d1e16] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-[#1c3d2e] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0d1e16] transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif-heading text-lg text-[#c5a059] uppercase tracking-wider font-semibold">
              Explore Resort
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#d6c6b3]/90">
              <li>
                <Link to="/" className="hover:text-[#c5a059] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/stay" className="hover:text-[#c5a059] transition-colors">Villas & Accommodations</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-[#c5a059] transition-colors">Nature Experiences</Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-[#c5a059] transition-colors">Dining & Cuisine</Link>
              </li>
              <li>
                <Link to="/weddings-events" className="hover:text-[#c5a059] transition-colors">Weddings & Outings</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#c5a059] transition-colors">Photo Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Resort Info & About */}
          <div className="space-y-4">
            <h4 className="font-serif-heading text-lg text-[#c5a059] uppercase tracking-wider font-semibold">
              Resort Identity
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#d6c6b3]/90">
              <li>
                <Link to="/about" className="hover:text-[#c5a059] transition-colors">About 25-Acres Reserve</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#c5a059] transition-colors">Direct Booking Guarantee</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#c5a059] transition-colors">Contact & Directions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#c5a059] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#c5a059] transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="font-serif-heading text-lg text-[#c5a059] uppercase tracking-wider font-semibold">
              Direct Reach
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#d6c6b3]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{siteConfig.address.fullText}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.contact.phones[0]}</p>
                  <p>{siteConfig.contact.phones[1]}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d6c6b3]/70 font-light">
          <p>© {new Date().getFullYear()} Ahas Pokuna Holiday Resorts. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-[#c5a059] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#c5a059] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
