import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Heart,
  Eye,
  Target,
  Smile,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  Brain,
  CheckCircle2,
  Users
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { schoolData } from '../data/schoolData';

export default function About() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="About Modern Dhampur Play School"
        title="Nurturing Little Minds With Love & Joy"
        subtitle="Dedicated to fostering an inspiring early childhood education foundation for children in Dhampur, Bijnor."
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* 2. School Story & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-orange-200">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 font-display tracking-tight">
              A Safe, Loving Haven for Your Child's Earliest Steps
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              {schoolData.about.story}
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              At MDPS Dhampur, we recognize that education is not merely preparation for school, but a vibrant part of life itself. We prioritize emotional security, personal warmth, and joyful exploration, ensuring each toddler feels deeply cherished from their very first day.
            </p>

            {/* Highlights List with Logo Teal checks */}
            <div className="space-y-2.5 pt-2">
              {schoolData.about.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-orange transition-all"
              >
                <span>Plan a Campus Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-white hover:bg-orange-50 text-navy-900 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-200 hover:border-orange-200 transition-all shadow-sm"
              >
                <span>Explore Programs</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/about_png/about_png_1.png"
                  alt="Modern Dhampur Play School classroom learning"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
              </div>

              {/* Decorative Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-soft-lg border border-orange-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-primary-600 flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Child-First Philosophy</h4>
                    <p className="text-[11px] text-slate-500">Every child is unique</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Encouraging individuality, personal speed of learning, and gentle curiosity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards (Orange & Teal) */}
      <section className="bg-orange-50/40 py-16 sm:py-20 border-y border-orange-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision (Logo Orange) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-orange-100 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden">
              <div className="w-2.5 h-full absolute left-0 top-0 bg-primary-500" />
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-primary-600 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                Our Future Horizon
              </span>
              <h3 className="text-2xl font-black text-navy-900 font-display mt-1 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {schoolData.about.vision}
              </p>
            </div>

            {/* Mission (Logo Teal) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden">
              <div className="w-2.5 h-full absolute left-0 top-0 bg-teal-500" />
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Our Daily Purpose
              </span>
              <h3 className="text-2xl font-black text-navy-900 font-display mt-1 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {schoolData.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Teaching Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight font-display mt-3 mb-4">
            Our Teaching Approach
          </h2>
          <p className="text-slate-600 text-base">
            We employ modern, globally endorsed early childhood practices adapted to ensure comfort, active listening, and playful comprehension.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.about.approach.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-orange-100/60 shadow-card hover:shadow-soft-lg transition-all text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-teal-50 text-primary-600 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 font-display mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Importance of Early Childhood Development - Dark Charcoal Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-soft-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-navy-800 text-primary-300 text-xs font-bold px-3 py-1.5 rounded-full border border-navy-700">
                <Brain className="w-4 h-4 text-teal-400" />
                <span>Foundational Science</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
                Why Early Childhood Years (Ages 2 to 6) Shape Everything
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Over 90% of a human being's core brain architecture develops before the age of six. During these golden formative years, exposure to joyful social interactions, creative play, sensory exploration, and emotional warmth lays down neural connections that influence future academic success and emotional resilience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-navy-800/80 p-4 rounded-2xl border border-navy-700">
                  <h4 className="text-sm font-bold text-primary-300 mb-1">Lifelong Curiosity</h4>
                  <p className="text-xs text-slate-300">Transforms natural questioning into passionate lifelong love for study.</p>
                </div>
                <div className="bg-navy-800/80 p-4 rounded-2xl border border-navy-700">
                  <h4 className="text-sm font-bold text-teal-300 mb-1">Social Confidence</h4>
                  <p className="text-xs text-slate-300">Empowers children to express thoughts, make friends, and respect peers.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-center">
              <div className="bg-white text-navy-900 p-8 rounded-3xl shadow-2xl space-y-4 max-w-sm mx-auto border border-orange-100">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-primary-600 flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display">Visit MDPS Dhampur</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experience our warm classrooms and meet our dedicated educators in person.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-orange transition-all"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
