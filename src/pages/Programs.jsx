import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Phone,
  CheckCircle2
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProgramCard from '../components/ProgramCard';
import { schoolData } from '../data/schoolData';

export default function Programs() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="Academic Curriculums"
        title="Comprehensive Early Education Programs"
        subtitle="Designed sequentially from Playgroup to UKG to support children at every milestone of their cognitive, physical, and emotional development."
        breadcrumb={[{ label: 'Programs' }]}
      />

      {/* 2. Program Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-primary-700 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full inline-block border border-orange-200 mb-2">
            Ages 2 to 6 Years
          </p>
          <h2 className="text-3xl font-black text-navy-900 font-display">
            Explore Classes by Age & Readiness
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Note: Age criteria are indicative guidelines and may be adjusted based on the child's developmental readiness in consultation with the school.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schoolData.programs.map((program) => (
            <ProgramCard key={program.id} program={program} featured={program.id === 'nursery'} />
          ))}
        </div>
      </section>

      {/* 3. Program Methodology & Progression */}
      <section className="bg-orange-50/40 py-16 sm:py-20 border-y border-orange-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
              Progression Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight font-display mt-3 mb-3">
              How Your Child Evolves at MDPS
            </h2>
            <p className="text-slate-600 text-base">
              A gentle, seamless transition from sensory exploration to confident classroom independence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-soft">
              <span className="text-2xl font-black text-primary-500 font-display">01</span>
              <h3 className="text-lg font-bold text-navy-900 mt-2 mb-1">Playgroup</h3>
              <p className="text-xs text-slate-500 mb-3">Separation ease & sensory play</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adapting cheerfully to routine, sharing toys, learning nursery rhymes, and developing hand grip through kinetic play.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-teal-100 shadow-soft">
              <span className="text-2xl font-black text-teal-500 font-display">02</span>
              <h3 className="text-lg font-bold text-navy-900 mt-2 mb-1">Nursery</h3>
              <p className="text-xs text-slate-500 mb-3">Letters, numbers & vocabulary</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alphabet sound recognition, counting concepts, holding pencils, clay modeling, and expressive speech in circle time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-soft">
              <span className="text-2xl font-black text-amber-500 font-display">03</span>
              <h3 className="text-lg font-bold text-navy-900 mt-2 mb-1">LKG</h3>
              <p className="text-xs text-slate-500 mb-3">Pre-reading & simple words</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Two-letter word blending, Hindi Swar introduction, basic addition readiness, and awareness of the natural environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-teal-100 shadow-soft">
              <span className="text-2xl font-black text-teal-600 font-display">04</span>
              <h3 className="text-lg font-bold text-navy-900 mt-2 mb-1">UKG</h3>
              <p className="text-xs text-slate-500 mb-3">Grade 1 readiness & independence</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sentence reading, confident calculation, bilingual recitation, and self-directed project solving for formal schooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation & Admission CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-8 border border-navy-800">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-primary-300 uppercase tracking-wider bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
              Not sure which class fits your child?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Schedule an Informal Readiness Assessment
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Bring your toddler for an informal play session at our Dhampur school. Our friendly teachers will guide you to the right class.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-orange transition-all"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${schoolData.contact.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm px-5 py-3.5 rounded-xl border border-navy-700 transition-all"
            >
              <Phone className="w-4 h-4 text-primary-400" />
              <span>Call +91 98118 25699</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
