import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Building2,
  Navigation
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { schoolData } from '../data/schoolData';

export default function Contact() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="Connect With Us"
        title="Contact Modern Dhampur Play School"
        subtitle="We would love to welcome you and your child. Reach out to schedule a campus tour, enquire about admissions, or ask any questions."
        breadcrumb={[{ label: 'Contact Us' }]}
      />

      {/* 2. Contact Cards & Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone (Logo Orange) */}
          <div className="bg-white rounded-3xl p-7 border border-orange-100 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-primary-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Call Admissions
              </span>
              <h3 className="text-xl font-black text-navy-900 font-display mt-1 mb-2">
                {schoolData.contact.phone}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct helpline for admission queries, appointments, and fee assistance.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={`tel:${schoolData.contact.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-orange transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Click to Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp (Logo Teal) */}
          <div className="bg-white rounded-3xl p-7 border border-teal-100 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Instant Chat
              </span>
              <h3 className="text-xl font-black text-navy-900 font-display mt-1 mb-2">
                WhatsApp Desk
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our admissions coordinator on WhatsApp for instant replies.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={schoolData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-teal transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Card 3: School Campus (Charcoal Navy & Amber) */}
          <div className="bg-white rounded-3xl p-7 border border-orange-100 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Campus Location
              </span>
              <h3 className="text-lg font-black text-navy-900 font-display mt-1 mb-2">
                Dhampur, Bijnor (U.P.)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plot No. 313, Backside Bankey Bihari Medical Store, Seohara Chungi Road, Near Dropda Devi Mandir, Udaipur.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={schoolData.contact.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Form & Contact Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Detailed Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-orange-100/60 shadow-soft space-y-6">
              <div>
                <span className="text-xs font-bold text-primary-700 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
                  School Address
                </span>
                <h3 className="text-2xl font-black text-navy-900 font-display mt-2">
                  Modern Dhampur Play School
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-900">Full Postal Address:</strong>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      {schoolData.contact.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-900">Visiting & School Hours:</strong>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      {schoolData.contact.timings}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-900">Direct Contact:</strong>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      {schoolData.contact.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={schoolData.contact.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-orange"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <a
                  href={schoolData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs py-3 rounded-xl border border-teal-200 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <ContactForm formTitle="Send an Enquiry to School Administration" />
          </div>
        </div>
      </section>

      {/* 4. Google Maps Embedded View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100/60 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
                Interactive Map
              </span>
              <h3 className="text-2xl font-black text-navy-900 font-display mt-2">
                Find Us on Google Maps
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Modern Dhampur Play School, Plot No. 313, Seohara Chungi Road, Dhampur.
              </p>
            </div>

            <a
              href={schoolData.contact.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-200 h-[420px] bg-slate-100 relative">
            <iframe
              title="Modern Dhampur Play School Exact Location Map"
              src={schoolData.contact.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
