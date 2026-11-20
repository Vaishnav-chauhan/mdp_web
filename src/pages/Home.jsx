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
  Users,
  Compass,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ChevronRight,
  Palette,
  Music,
  Gamepad2
} from 'lucide-react';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import ContactForm from '../components/ContactForm';
import { schoolData } from '../data/schoolData';

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Why Choose MDPS Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-orange-200">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>Why Parents Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight font-display mb-4">
            Why Choose Modern Dhampur Play School?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We provide young learners in Dhampur with a joyful, stimulating, and secure environment designed to turn every child's innate curiosity into lifelong confidence and academic readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 - Joyful Play (Logo Orange) */}
          <div className="bg-white rounded-3xl p-7 border border-orange-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-primary-600 flex items-center justify-center mb-5 shadow-sm">
              <Smile className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 font-display mb-2.5">
              Joyful Play-Way Learning
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Our curriculum blends play, sensory discovery, and hands-on games so children absorb foundational concepts naturally without rote stress.
            </p>
            <div className="text-xs font-semibold text-primary-600 flex items-center gap-1">
              <span>Sensory & Cognitive Games</span>
            </div>
          </div>

          {/* Card 2 - Safe Campus (Logo Teal) */}
          <div className="bg-white rounded-3xl p-7 border border-teal-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 font-display mb-2.5">
              Child-Safe & Hygienic Campus
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Round-the-clock CCTV surveillance, child-safe rounded furniture, sanitized washrooms, and dedicated support staff ensure complete safety.
            </p>
            <div className="text-xs font-semibold text-teal-700 flex items-center gap-1">
              <span>CCTV Monitored & RO Water</span>
            </div>
          </div>

          {/* Card 3 - Loving Educators (Warm Coral) */}
          <div className="bg-white rounded-3xl p-7 border border-amber-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 shadow-sm">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 font-display mb-2.5">
              Loving, Certified Educators
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Trained teachers who connect with every toddler with maternal patience, encouragement, and keen attention to individual learning rhythms.
            </p>
            <div className="text-xs font-semibold text-amber-700 flex items-center gap-1">
              <span>Low Student-Teacher Ratio</span>
            </div>
          </div>

          {/* Card 4 - Phonics (Logo Teal) */}
          <div className="bg-white rounded-3xl p-7 border border-teal-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5 shadow-sm">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 font-display mb-2.5">
              Phonics & Early Math Focus
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Structured progressive readiness in letter sounds, storytelling, number concepts, and bilingual communication for smooth primary entry.
            </p>
            <div className="text-xs font-semibold text-teal-700 flex items-center gap-1">
              <span>English & Hindi Basics</span>
            </div>
          </div>

          {/* Card 5 - Arts & Creative (Logo Orange) */}
          <div className="bg-white rounded-3xl p-7 border border-orange-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-primary-600 flex items-center justify-center mb-5 shadow-sm">
              <Palette className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 font-display mb-2.5">
              Arts, Music & Expressive Play
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Finger painting, rhymes, dance movements, clay sculpting, and role-play corners allow children to express feelings freely and creatively.
            </p>
            <div className="text-xs font-semibold text-primary-600 flex items-center gap-1">
              <span>Weekly Creative Workshops</span>
            </div>
          </div>

          {/* Card 6 - Parent Partnership (Teal/Cyan) */}
          <div className="bg-white rounded-3xl p-7 border border-cyan-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-teal-700 flex items-center justify-center mb-5 shadow-sm">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 font-display mb-2.5">
              Active Parent Partnership
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Regular progress updates, celebratory milestones, parent-teacher meetings, and open communication to support each child's home and school growth.
            </p>
            <div className="text-xs font-semibold text-teal-700 flex items-center gap-1">
              <span>Continuous Progress Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Learning & Development Highlights - Logo Charcoal Navy Background */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-primary-300 text-xs font-bold uppercase tracking-widest bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
                Holistic Growth Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
                Nurturing Every Dimension of Your Child's Early Development
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At Modern Dhampur Play School, education goes far beyond books. We systematically guide toddlers across foundational developmental domains:
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: "Cognitive & Problem Solving", desc: "Spatial puzzles, logic games, color sorting, and curiosity-driven discovery." },
                  { title: "Linguistic & Phonics Skills", desc: "Rich vocabulary, clear articulation, rhyme recitations, and storytelling." },
                  { title: "Physical & Motor Dexterity", desc: "Fine motor pencil grip, scissor craft, balancing, jumping, and agility play." },
                  { title: "Social & Emotional Confidence", desc: "Sharing with peers, expressing needs politely, building empathy and self-care." }
                ].map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-navy-800/80 p-3.5 rounded-2xl border border-navy-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-navy-700">
                    <img
                      src="/assets/home_png/home_png_2.png"
                      alt="Early childhood learning"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-navy-700">
                    <img
                      src="/assets/home_png/home_png_3.png"
                      alt="Student phonics and writing"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-navy-700">
                    <img
                      src="/assets/home_png/home_png_4.png"
                      alt="Art and creative painting"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-navy-700">
                    <img
                      src="/assets/home_png/home_png_5.png"
                      alt="Preschool classroom activities"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Programs Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-orange-200">
              <BookOpen className="w-3.5 h-3.5 text-primary-600" />
              <span>Tailored For Every Stage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight font-display">
              Our Academic Programs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              From initial toddler steps to primary school readiness, explore our structured early childhood education offerings.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-navy-900 font-bold text-sm group"
          >
            <span>View All Program Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.programs.map((prog, idx) => (
            <ProgramCard
              key={prog.id}
              program={{
                ...prog,
                image: `/assets/home_png/home_png_${6 + idx}.png`
              }}
            />
          ))}
        </div>
      </section>

      {/* 5. School Activities Preview */}
      <section className="bg-orange-50/40 py-16 sm:py-20 border-y border-orange-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
              Life At MDPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight font-display mt-3 mb-3">
              Engaging Activities & Creative Pursuits
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every day at MDPS brings lively new opportunities for hands-on creativity, sports, festive celebrations, and joy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolData.activities.slice(0, 3).map((activity, idx) => (
              <div
                key={activity.id}
                className="bg-white rounded-3xl overflow-hidden shadow-soft border border-orange-100/60 group hover:shadow-soft-lg transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={`/assets/home_png/home_png_${10 + idx}.png`}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-navy-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {activity.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 font-display mb-2 group-hover:text-primary-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {activity.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {activity.benefits.map((b, i) => (
                      <span key={i} className="text-[11px] bg-orange-50 text-primary-800 px-2.5 py-0.5 rounded-md font-medium">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 bg-white hover:bg-orange-50 text-navy-900 font-bold text-sm px-6 py-3 rounded-full border border-orange-200 shadow-sm hover:shadow transition-all"
            >
              <span>Explore All School Activities</span>
              <ArrowRight className="w-4 h-4 text-primary-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
              Campus Moments
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight font-display mt-3">
              Glimpses of MDPS Dhampur
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Smiles, discovery, and memorable childhood experiences captured at our school.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-navy-900 font-bold text-sm group"
          >
            <span>Visit Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {schoolData.gallery.slice(0, 4).map((item, idx) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative rounded-2xl overflow-hidden shadow-soft aspect-square bg-slate-100 block border border-slate-100"
            >
              <img
                src={`/assets/home_png/home_png_${13 + idx}.png`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-primary-300 font-bold">
                  {item.category}
                </span>
                <p className="text-xs font-bold leading-tight">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Parent Enquiry Section & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-orange-200">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>Enroll Your Child</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight font-display">
              Give Your Child the Gift of a Joyful Beginning
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We welcome parents to visit our campus in Dhampur, interact with our teaching faculty, and experience our friendly atmosphere firsthand.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-orange-100 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-primary-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Direct Admission Helpline</h4>
                  <a href={`tel:${schoolData.contact.phoneClean}`} className="text-base font-bold text-navy-900 hover:text-primary-600">
                    {schoolData.contact.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Call for queries, fee details, or campus visit</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-teal-100 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">School Office Visiting Hours</h4>
                  <p className="text-sm font-bold text-navy-900">
                    {schoolData.contact.timings}
                  </p>
                  <p className="text-[11px] text-slate-500">Parents welcome Monday through Saturday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm formTitle="Apply / Enquire for Admission" />
          </div>
        </div>
      </section>

      {/* 8. Google Maps & School Location Section */}
      <section className="bg-slate-100/80 py-16 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
                School Location
              </span>
              <h2 className="text-3xl font-black text-navy-900 font-display tracking-tight">
                Conveniently Located in Dhampur
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Modern Dhampur Play School is centrally situated in Udaipur, Dhampur, behind Bankey Bihari Medical Store on Seohara Chungi Road, easily accessible for families across Dhampur.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-card">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700 leading-snug">
                    <strong className="block text-navy-900 font-bold mb-1">Modern Dhampur Play School</strong>
                    {schoolData.contact.address.full}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={schoolData.contact.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-orange transition-all"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${schoolData.contact.phoneClean}`}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-bold text-sm px-5 py-3 rounded-xl border border-slate-200 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border-2 border-white bg-slate-200 h-[380px] relative">
                <iframe
                  title="Modern Dhampur Play School Google Map Location"
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
          </div>
        </div>
      </section>
    </div>
  );
}
