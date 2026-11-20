import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Shapes,
  Sun,
  ShieldAlert,
  Palette,
  CheckCircle2,
  ArrowRight,
  Info
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { schoolData } from '../data/schoolData';

export default function Facilities() {
  const getIcon = (category) => {
    switch (category) {
      case 'Classrooms':
        return <Sparkles className="w-6 h-6 text-primary-600" />;
      case 'Learning Environment':
        return <Heart className="w-6 h-6 text-amber-500" />;
      case 'Indoor Activities':
        return <Shapes className="w-6 h-6 text-teal-600" />;
      case 'Outdoor Play':
        return <Sun className="w-6 h-6 text-primary-500" />;
      case 'Safety and Hygiene':
        return <ShieldAlert className="w-6 h-6 text-teal-600" />;
      case 'Creative Learning':
        return <Palette className="w-6 h-6 text-orange-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-primary-600" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="School Infrastructure"
        title="Modern, Child-Safe Facilities"
        subtitle="Designed with love, safety, and hygiene at the forefront to provide your child with a joyful, secure preschool campus."
        breadcrumb={[{ label: 'Facilities' }]}
      />

      {/* Notice Banner regarding verification */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong>School Facility Assurance:</strong> All facilities listed below represent active and confirmed amenities at our Dhampur campus. Specific equipment upgrades and safety equipment are regularly inspected by school management.
          </p>
        </div>
      </div>

      {/* 2. Detailed Facility Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {schoolData.facilities.map((facility, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={facility.id}
                id={facility.id}
                className={`bg-white rounded-3xl p-6 sm:p-10 border border-orange-100/60 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 group">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-navy-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {facility.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{facility.status}</span>
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                      {getIcon(facility.category)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                        {facility.category}
                      </span>
                      <h3 className="text-2xl font-black text-navy-900 font-display">
                        {facility.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {facility.desc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5">
                      Key Feature Checklist:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {facility.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-orange-50/40 p-2 rounded-lg border border-orange-100/40">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Safety Standard Commitment (Navy & Orange Theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-soft-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400 bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
              Parent Peace of Mind
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-3 mb-2">
              Our Non-Negotiable Safety Protocols
            </h3>
            <p className="text-slate-300 text-sm">
              We know leaving your little one for the first time requires absolute trust. Here is how we safeguard your child every second.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/80 p-6 rounded-2xl border border-navy-700">
              <ShieldCheck className="w-8 h-8 text-teal-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Child-Proof Campus</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rounded furniture, protected electric points, soft floor mats, and non-slip surfaces throughout the school.
              </p>
            </div>

            <div className="bg-navy-800/80 p-6 rounded-2xl border border-navy-700">
              <Sun className="w-8 h-8 text-primary-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">RO Pure Water & Sanitation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clean child-sized washrooms sanitized multiple times a day and multi-stage RO drinking water stations.
              </p>
            </div>

            <div className="bg-navy-800/80 p-6 rounded-2xl border border-navy-700">
              <Heart className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Staff Supervision</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No toddler is ever left unattended. Attendants escort children during washroom breaks and activity transitions.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-orange transition-all"
            >
              <span>Schedule a Campus Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
