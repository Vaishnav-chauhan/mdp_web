import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Clock,
  HeartHandshake,
  MessageCircle
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for sticky navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Activities', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Fees', path: '/fees' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - Charcoal Navy with Orange & Teal Accents */}
      <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href={`tel:${schoolData.contact.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-primary-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-primary-400" />
              <span>{schoolData.contact.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span className="truncate max-w-xs sm:max-w-none">
                Dhampur, Bijnor, Uttar Pradesh
              </span>
            </div>
            <span className="hidden md:inline text-slate-600">•</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>8:30 AM - 1:30 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-primary-300 font-semibold flex items-center gap-1.5 bg-navy-800 px-2.5 py-0.5 rounded-full border border-navy-700">
              <Sparkles className="w-3.5 h-3.5 text-primary-400" />
              Admissions Open 2025–26
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-soft-lg py-2.5' : 'bg-white/95 backdrop-blur-md shadow-sm py-3.5'
        } border-b border-orange-100/60`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center p-1 shadow-sm border-2 border-orange-100 group-hover:scale-105 group-hover:border-primary-400 transition-all duration-200 overflow-hidden shrink-0">
              <img
                src="/logo.svg"
                alt="Modern Dhampur Play School Logo"
                width="56"
                height="56"
                className="w-full h-full object-contain block"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight font-display group-hover:text-primary-600 transition-colors">
                  MDPS
                </span>
                <span className="bg-orange-100 text-primary-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-orange-200">
                  Dhampur
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Modern Dhampur Play School
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all py-1 ${
                    isActive
                      ? 'text-primary-600 font-bold border-b-2 border-primary-500'
                      : 'text-slate-700 hover:text-primary-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Call to Action Button - Vibrant Orange Theme */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-orange hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/admissions"
              className="sm:hidden bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-navy-900 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-navy-900" />
              ) : (
                <Menu className="w-6 h-6 text-navy-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-orange-100 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl">
            <div className="grid grid-cols-1 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-3 px-3 rounded-lg text-sm font-semibold flex items-center justify-between ${
                      isActive
                        ? 'bg-orange-50 text-primary-600 font-bold'
                        : 'text-slate-700 hover:bg-orange-50/50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                to="/admissions"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm py-3 rounded-xl shadow-orange"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${schoolData.contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-semibold py-2.5 rounded-lg"
                >
                  <Phone className="w-3.5 h-3.5 text-primary-500" />
                  <span>Call School</span>
                </a>
                <a
                  href={schoolData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold py-2.5 rounded-lg border border-teal-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
