import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export default function ProgramCard({ program, featured = false }) {
  return (
    <div
      id={program.id}
      className={`group bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 border border-slate-100 hover:border-orange-200 shadow-soft hover:shadow-soft-lg flex flex-col justify-between relative overflow-hidden ${
        featured ? 'ring-2 ring-primary-500' : ''
      }`}
    >
      {/* Top Banner Accent */}
      <div className={`h-2.5 w-full absolute top-0 left-0 bg-gradient-to-r ${program.accentColor}`} />

      <div>
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pt-1">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${program.badgeColor}`}>
            Age: {program.ageGroup}
          </span>
          <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {program.timing}
          </span>
        </div>

        {/* Program Title */}
        <h3 className="text-2xl font-black text-navy-900 group-hover:text-primary-600 transition-colors font-display mb-3">
          {program.name}
        </h3>

        {/* Program Image Preview */}
        {program.image && (
          <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-inner">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {program.description}
        </p>

        {/* Learning Objectives */}
        <div className="mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary-500" />
            Key Learning Milestones
          </h4>
          <ul className="space-y-1.5">
            {program.learningObjectives.map((obj, i) => (
              <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sample Activities */}
        <div className="mb-6 pt-3 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-primary-500" />
            Featured Fun Activities
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {program.activities.map((act, i) => (
              <span
                key={i}
                className="text-[11px] bg-orange-50/70 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-orange-100/50"
              >
                {act}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          to={`/admissions?program=${program.id}`}
          className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all duration-200 group-hover:shadow-md"
        >
          <span>Enquire for {program.name}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
