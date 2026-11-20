import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          {/* Col 1: School Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-lg border-2 border-orange-200/60 shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src="/logo.svg"
                  alt="Modern Dhampur Play School Logo"
                  width="64"
                  height="64"
                  className="w-full h-full object-contain block"
                />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight font-display group-hover:text-primary-400 transition-colors">
                  MDPS
                </span>
                <p className="text-xs text-primary-400 font-semibold tracking-wider uppercase">
                  Modern Dhampur Play School
                </p>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed">
              {schoolData.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-navy-800/90 text-teal-300 text-xs px-3 py-1.5 rounded-full border border-navy-700">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                Child-Centric Campus
              </span>
              <span className="inline-flex items-center gap-1.5 bg-navy-800/90 text-primary-300 text-xs px-3 py-1.5 rounded-full border border-navy-700">
                <Heart className="w-3.5 h-3.5 text-primary-400" />
                Loving Educators
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-primary-400 text-xs font-bold font-display tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-primary-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-400" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-400" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-primary-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-400" /> Programs
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-primary-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-400" /> Facilities
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-primary-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-400" /> Activities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-400" /> Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Admissions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-teal-400 text-xs font-bold font-display tracking-widest uppercase">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/admissions" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-400" /> Admission Process
                </Link>
              </li>
              <li>
                <Link to="/fees" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-400" /> Fee Structure
                </Link>
              </li>
              <li>
                <Link to="/programs#playgroup" className="hover:text-primary-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-400" /> Playgroup (2-3 Yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs#nursery" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-400" /> Nursery (3-4 Yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs#lkg" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400" /> LKG (4-5 Yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs#ukg" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-400" /> UKG (5-6 Yrs)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-primary-400 text-xs font-bold font-display tracking-widest uppercase">
              School Contact & Visit
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <p className="text-slate-300 leading-snug">
                  {schoolData.contact.address.full}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href={`tel:${schoolData.contact.phoneClean}`}
                  className="text-white hover:text-primary-300 font-semibold"
                >
                  {schoolData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{schoolData.contact.timings}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={schoolData.contact.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-orange"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={schoolData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-teal"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {currentYear} {schoolData.name} ({schoolData.shortName}), Dhampur, Bijnor. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/admissions" className="hover:text-primary-300 transition-colors">
              Admissions Policy
            </Link>
            <Link to="/fees" className="hover:text-teal-300 transition-colors">
              Fee Guidelines
            </Link>
            <Link to="/contact" className="hover:text-primary-300 transition-colors">
              Campus Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
