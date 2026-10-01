import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../data/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Stay', path: '/stay' },
  { name: 'Experience', path: '/experience' },
  { name: 'Dining', path: '/dining' },
  { name: 'Weddings & Events', path: '/weddings-events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#0d1e16]/98 backdrop-blur-xl text-[#faf7f2] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#28503c]/40">
            <Link to="/" onClick={onClose} className="flex flex-col">
              <span className="font-serif-heading text-2xl tracking-wider text-[#faf7f2]">
                AHAS POKUNA
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059]">
                {siteConfig.tagline}
              </span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2.5 rounded-full bg-[#1c3d2e]/80 text-[#faf7f2] hover:bg-[#28503c] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-8 flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.3 }}
              >
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `font-serif-heading text-2xl sm:text-3xl transition-colors duration-200 block ${
                      isActive ? 'text-[#c5a059] font-medium' : 'text-[#faf7f2]/80 hover:text-[#faf7f2]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Info & Action */}
          <div className="pt-6 border-t border-[#28503c]/40 space-y-5">
            <Link
              to="/booking"
              onClick={onClose}
              className="w-full inline-block text-center py-4 bg-[#c5a059] text-[#0d1e16] font-semibold tracking-widest text-xs uppercase rounded hover:bg-[#dfbe7d] transition-all shadow-lg"
            >
              BOOK YOUR STAY
            </Link>

            <div className="space-y-2 text-xs text-[#d6c6b3]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059]" />
                <span>{siteConfig.address.fullText}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>{siteConfig.contact.phones[0]} / {siteConfig.contact.phones[1]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059]" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
