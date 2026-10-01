import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { siteConfig } from '../data/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages where navbar starts over a dark hero banner
  const isDarkHeroPage = ['/', '/stay', '/experience', '/dining', '/weddings-events', '/about', '/gallery'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0d1e16]/95 backdrop-blur-md shadow-xl py-4 border-b border-[#28503c]/40 text-[#faf7f2]'
            : isDarkHeroPage
            ? 'bg-gradient-to-b from-[#0d1e16]/80 via-[#0d1e16]/40 to-transparent py-6 text-[#faf7f2]'
            : 'bg-[#faf7f2] py-5 border-b border-[#d6c6b3]/40 text-[#0d1e16]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-serif-heading text-xl sm:text-2xl lg:text-3xl tracking-wider font-semibold group-hover:text-[#c5a059] transition-colors duration-300">
              AHAS POKUNA
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#c5a059]">
              {siteConfig.tagline}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-1 hover:text-[#c5a059] ${
                    isActive
                      ? 'text-[#c5a059] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#c5a059]'
                      : isScrolled || isDarkHeroPage
                      ? 'text-[#faf7f2]/90'
                      : 'text-[#0d1e16]/90'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            <Link
              to="/booking"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#c5a059] text-[#0d1e16] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#dfbe7d] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              BOOK NOW
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled || isDarkHeroPage
                  ? 'text-[#faf7f2] hover:bg-[#1c3d2e]'
                  : 'text-[#0d1e16] hover:bg-[#d6c6b3]/30'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
