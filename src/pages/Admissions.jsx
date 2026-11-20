import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  FileText,
  Clock,
  Phone,
  HelpCircle,
  ShieldCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { schoolData } from '../data/schoolData';

export default function Admissions() {
  const [searchParams] = useSearchParams();
  const defaultProgram = searchParams.get('program') || 'playgroup';

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="Admissions Open 2025–2026"
        title="Admission Guidelines & Registration"
        subtitle="We invite parents to take the first joyful step in their child's educational journey at Modern Dhampur Play School."
        breadcrumb={[{ label: 'Admissions' }]}
      />

      {/* 2. Notice Banner (Logo Orange to Charcoal Navy) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-navy-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-300 shrink-0" />
            <p className="text-sm font-semibold">
              {schoolData.admissions.notice}
            </p>
          </div>
          <a
            href={`tel:${schoolData.contact.phoneClean}`}
            className="inline-flex items-center gap-2 bg-white text-navy-900 text-xs font-bold px-4 py-2 rounded-xl shrink-0 hover:bg-orange-50 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-primary-500" />
            <span>Call Admissions Desk</span>
          </a>
        </div>
      </div>

      {/* 3. Admission Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl font-black text-navy-900 font-display mt-3 mb-3">
            How to Enroll Your Child at MDPS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Our admissions process is smooth, welcoming, and transparent for parents and toddlers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.admissions.steps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-7 rounded-3xl border border-orange-100/60 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-primary-600 flex items-center justify-center font-black text-lg font-display mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-navy-900 font-display mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Form & Required Documents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Required Documents & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100/60 shadow-soft">
              <div className="flex items-center gap-2 text-primary-600 mb-3">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Verification Checklist</span>
              </div>
              <h3 className="text-2xl font-black text-navy-900 font-display mb-3">
                Required Documents
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                (All document requirements are editable by school administration and indicative of standard enrollment procedures)
              </p>

              <div className="space-y-3">
                {schoolData.admissions.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-orange-50/40 rounded-xl border border-orange-100/40">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-2xl border border-orange-200">
                <p className="text-xs text-primary-950 leading-relaxed">
                  <strong>Need help with documents?</strong> Don't worry! You can submit provisional documents and provide remaining copies within 15 days of enrollment.
                </p>
              </div>
            </div>

            {/* Office Visiting Hours */}
            <div className="bg-slate-100/80 rounded-3xl p-6 border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-500" />
                Admissions Counter Hours
              </h4>
              <p className="text-xs text-slate-700">
                Monday to Saturday: 8:30 AM to 1:30 PM
              </p>
              <p className="text-xs text-slate-700">
                School Location: Udaipur, Seohara Chungi Road, Dhampur.
              </p>
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm
              defaultProgram={defaultProgram}
              formTitle="Online Admission Enquiry Form"
            />
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
            Parent Queries
          </span>
          <h2 className="text-3xl font-black text-navy-900 font-display mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {schoolData.admissions.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-orange-100/60 shadow-soft">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-1.5">{faq.q}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
