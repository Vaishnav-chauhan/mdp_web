import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Palette,
  Music,
  Gamepad2,
  Calendar,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Heart
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { schoolData } from '../data/schoolData';

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Arts & Craft',
    'Performing Arts',
    'Physical Fitness',
    'Cultural Values',
    'Personality Development',
    'Cognitive Learning'
  ];

  const filteredActivities =
    selectedCategory === 'All'
      ? schoolData.activities
      : schoolData.activities.filter((act) => act.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="Co-Curricular Learning"
        title="Vibrant Activities & Holistic Experiences"
        subtitle="At MDPS, learning happens through play, colors, rhythm, celebrations, and hands-on discovery that spark pure joy."
        breadcrumb={[{ label: 'Activities' }]}
      />

      {/* 2. Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-orange'
                  : 'bg-white text-slate-700 hover:bg-orange-50 border border-slate-200 hover:border-orange-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Activities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-3xl overflow-hidden border border-orange-100/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-navy-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {act.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-navy-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {act.frequency}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-black text-navy-900 font-display mb-2 group-hover:text-primary-600 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {act.desc}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Growth Benefits:
                    </h4>
                    <div className="space-y-1.5">
                      {act.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <Link
                  to="/admissions"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-orange-50 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 hover:text-white text-primary-800 text-xs font-bold py-2.5 rounded-xl border border-orange-200 transition-all duration-200"
                >
                  <span>Enquire For Your Child</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Activity Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-50 via-white to-teal-50 rounded-3xl p-8 sm:p-12 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-navy-900 font-display">
              Why We Emphasize Multiple Intelligences
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Howard Gardner's theory of multiple intelligences reminds us that one child may shine in music, another in spatial art, and another in physical agility. We nurture every talent equally.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-orange transition-all shrink-0"
          >
            <span>View Gallery of Celebrations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
