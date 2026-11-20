import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Facilities from './pages/Facilities';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import Fees from './pages/Fees';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Floating Action Desk
import { Phone, MessageCircle } from 'lucide-react';
import { schoolData } from './data/schoolData';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-orange-100 selection:text-orange-950">
        {/* Universal Common Navbar */}
        <Navbar />

        {/* Page Content with dedicated routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Floating Quick Action Contacts (Desktop & Mobile) with Logo-Themed Colors */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          {/* WhatsApp Direct Chat Floating Button (Logo Teal) */}
          <a
            href={schoolData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 p-3.5 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-teal hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
              WhatsApp Us
            </span>
          </a>

          {/* Quick Call Floating Button (Logo Orange) */}
          <a
            href={`tel:${schoolData.contact.phoneClean}`}
            className="w-13 h-13 p-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-orange hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Call MDPS School"
            title="Call +91 98118 25699"
          >
            <Phone className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
              Call School
            </span>
          </a>
        </div>

        {/* Universal Common Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
