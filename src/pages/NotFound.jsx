import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-orange-50/50 to-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-24 h-24 rounded-3xl bg-orange-100 text-primary-600 flex items-center justify-center mx-auto shadow-inner text-4xl font-black font-display border border-orange-200">
          404
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900 font-display">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Oops! The page you are looking for doesn't exist or has moved. Let's get you back on track to exploring Modern Dhampur Play School.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-orange transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-navy-900 font-bold text-sm px-6 py-3 rounded-xl border border-slate-200 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-primary-500" />
            <span>Contact School</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
