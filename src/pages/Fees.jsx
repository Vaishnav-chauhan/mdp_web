import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Phone,
  Info,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Receipt
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { schoolData } from '../data/schoolData';

export default function Fees() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="Transparent Pricing"
        title="Fee Structure & Guidelines"
        subtitle="Modern Dhampur Play School is dedicated to providing high quality, accessible early childhood education without hidden costs."
        breadcrumb={[{ label: 'Fees' }]}
      />

      {/* 2. Important Notice Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-navy-900 font-display">
                Indicative & Editable Fee Guidelines ({schoolData.fees.academicYear})
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed mt-1">
                {schoolData.fees.notice}
              </p>
            </div>
          </div>

          <a
            href={`tel:${schoolData.contact.phoneClean}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shrink-0 shadow-orange transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Verify with School Office</span>
          </a>
        </div>
      </div>

      {/* 3. Tuition Fee Table / Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
            Class-Wise Fee Schedule
          </span>
          <h2 className="text-3xl font-black text-navy-900 font-display mt-3 mb-2">
            Monthly Tuition & Admission Fees
          </h2>
          <p className="text-slate-600 text-sm">
            Figures configured via central school data and can be updated easily by school management.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-3xl overflow-hidden border border-orange-100/80 shadow-soft">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white text-xs uppercase tracking-wider font-display">
                <th className="py-4 px-6">Class / Program</th>
                <th className="py-4 px-6">Age Group</th>
                <th className="py-4 px-6">Monthly Tuition Fee</th>
                <th className="py-4 px-6">One-Time Admission</th>
                <th className="py-4 px-6">Curriculum Inclusions</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {schoolData.fees.tuitionStructure.map((row, idx) => (
                <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                  <td className="py-4 px-6 font-bold text-navy-900">
                    {row.program}
                  </td>
                  <td className="py-4 px-6 text-slate-600 text-xs font-medium">
                    {row.age}
                  </td>
                  <td className="py-4 px-6 font-bold text-primary-600">
                    {row.monthlyTuition}
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-700">
                    {row.admissionFee}
                  </td>
                  <td className="py-4 px-6 text-slate-600 text-xs">
                    {row.notes}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link
                      to={`/admissions?program=${row.program.toLowerCase()}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-700 hover:text-white hover:bg-primary-500 bg-orange-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
          {schoolData.fees.tuitionStructure.map((row, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-orange-100/60 shadow-soft space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-navy-900 font-display">{row.program}</h3>
                  <span className="text-xs text-slate-500 font-medium">Age: {row.age}</span>
                </div>
                <span className="text-xs bg-orange-100 text-primary-800 font-bold px-2.5 py-1 rounded-full border border-orange-200">
                  Monthly
                </span>
              </div>

              <div className="bg-orange-50/40 p-3 rounded-xl space-y-2 text-xs border border-orange-100/50">
                <div className="flex justify-between">
                  <span className="text-slate-500">Monthly Tuition:</span>
                  <strong className="text-primary-600 font-bold text-sm">{row.monthlyTuition}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">One-Time Admission:</span>
                  <span className="text-slate-800 font-semibold">{row.admissionFee}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-snug">
                {row.notes}
              </p>

              <Link
                to={`/admissions?program=${row.program.toLowerCase()}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 text-white text-xs font-bold py-2.5 rounded-xl transition-all"
              >
                <span>Enquire for {row.program}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Other Charges & Kits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
            Incidental & Annual Supplies
          </span>
          <h2 className="text-3xl font-black text-navy-900 font-display mt-3">
            Other Charges & Kits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schoolData.fees.otherCharges.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-orange-100/60 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 font-display mb-1">{item.name}</h3>
              <div className="text-base font-black text-primary-600 mb-1">{item.amount}</div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                {item.frequency}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Payment Information & Policies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Payment Methods */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-8 border border-orange-100/60 shadow-soft space-y-5">
            <div className="flex items-center gap-2 text-primary-600">
              <CreditCard className="w-5 h-5" />
              <h3 className="text-xl font-black text-navy-900 font-display">
                Accepted Payment Methods
              </h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm">
              We provide convenient and secure modes of fee deposit for parents:
            </p>

            <div className="space-y-3">
              {schoolData.fees.paymentMethods.map((method, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-orange-50/40 border border-orange-100/40">
                  <h4 className="text-sm font-bold text-navy-900 mb-1">{method.title}</h4>
                  <p className="text-xs text-slate-600">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Policy & Rules */}
          <div className="lg:col-span-6 bg-slate-100/80 rounded-3xl p-7 sm:p-8 border border-slate-200 space-y-5">
            <div className="flex items-center gap-2 text-navy-900">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <h3 className="text-xl font-black text-navy-900 font-display">
                Important Fee Guidelines
              </h3>
            </div>

            <div className="space-y-3">
              {schoolData.fees.feePolicy.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all"
              >
                <span>Have fee questions? Contact Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
