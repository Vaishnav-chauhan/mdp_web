import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function PageHeader({ title, subtitle, badge, breadcrumb = [] }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-teal-50/30 pt-10 pb-14 border-b border-orange-100/60">
      {/* Decorative Pastel Orange & Teal Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-orange-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-4 font-medium">
          <Link to="/" className="hover:text-primary-600 transition-colors">
            Home
          </Link>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {item.path ? (
                <Link to={item.path} className="hover:text-primary-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary-600 font-bold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge in Logo Orange Accent */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 bg-orange-100/90 text-primary-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-orange-200">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight font-display mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
