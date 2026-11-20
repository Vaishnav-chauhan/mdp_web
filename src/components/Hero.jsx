import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Smile,
  BookOpen,
  Award,
  Compass
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-teal-50/30 pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-orange-100/60">
      {/* Decorative Pastel Logo-Themed Blobs */}
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-orange-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Intro, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Admissions Open Pill in Orange & Teal */}
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-orange-200 text-primary-700 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-soft animate-bounce-subtle">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span>Admissions Open for Session 2025–2026</span>
              <Sparkles className="w-4 h-4 text-primary-500" />
            </div>

            {/* Main Headline with Orange to Teal Gradient Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 tracking-tight leading-[1.15] font-display">
              A Happy Beginning to a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-amber-500 to-teal-500">
                Bright Future
              </span>
            </h1>

            {/* School Introduction & Short Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <strong className="text-navy-900 font-bold">{schoolData.name} ({schoolData.shortName})</strong>, Dhampur.
              We provide a nurturing, joyful preschool environment where toddlers explore, learn through play, and build lifelong confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-orange hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Admission Enquiry</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-bold text-base px-7 py-4 rounded-2xl border-2 border-slate-200 hover:border-teal-400 shadow-soft transition-all duration-300"
              >
                <Compass className="w-5 h-5 text-teal-600" />
                <span>Explore Our School</span>
              </Link>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 border-t border-orange-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-white/90 p-3 rounded-2xl border border-teal-100 shadow-card flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Safe Campus</div>
                  <div className="text-[10px] text-slate-500">CCTV & Hygiene</div>
                </div>
              </div>

              <div className="bg-white/90 p-3 rounded-2xl border border-orange-100 shadow-card flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-primary-600 flex items-center justify-center shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Play-Way</div>
                  <div className="text-[10px] text-slate-500">Active Learning</div>
                </div>
              </div>

              <div className="bg-white/90 p-3 rounded-2xl border border-amber-100 shadow-card flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Caring Staff</div>
                  <div className="text-[10px] text-slate-500">Loving Teachers</div>
                </div>
              </div>

              <div className="bg-white/90 p-3 rounded-2xl border border-teal-100 shadow-card flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Toddler to UKG</div>
                  <div className="text-[10px] text-slate-500">Ages 2 to 6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Rounded Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/home_png/home_png_1.png"
                  alt="Happy preschool students learning at Modern Dhampur Play School"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary-300">
                    Modern Dhampur Play School
                  </p>
                  <p className="text-base font-bold font-display">
                    Nurturing Little Minds With Love, Curiosity & Play
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left (Orange Theme) */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-soft-lg border border-orange-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-primary-600 flex items-center justify-center font-bold">
                  ★ 5.0
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900">Trusted in Dhampur</p>
                  <p className="text-[10px] text-slate-500">Safe Early Education</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right (Teal Theme) */}
              <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl p-3.5 shadow-soft-lg border border-teal-100 flex items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900">Playgroup to UKG</p>
                  <p className="text-[10px] text-slate-500">Holistic Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
