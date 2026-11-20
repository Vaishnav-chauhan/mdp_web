import React, { useState } from 'react';
import { Sparkles, Maximize2, Image as ImageIcon, Camera } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import LightboxModal from '../components/LightboxModal';
import { schoolData } from '../data/schoolData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Events', 'Classrooms', 'Activities', 'Celebrations'];

  const filteredImages =
    activeCategory === 'All'
      ? schoolData.gallery
      : schoolData.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="Photo Gallery"
        title="Moments of Joy, Wonder & Learning"
        subtitle="A visual tour through classroom discovery, festive smiles, active outdoor play, and joyous student celebrations at MDPS Dhampur."
        breadcrumb={[{ label: 'Gallery' }]}
      />

      {/* Notice regarding school photos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <Camera className="w-5 h-5 text-primary-600 shrink-0" />
            <p className="text-xs sm:text-sm text-primary-950">
              <strong>Notice:</strong> High-resolution curated preschool images are shown as representations. Original photographs from our Dhampur campus sessions and annual functions are updated periodically.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-orange'
                  : 'bg-white text-slate-700 hover:bg-orange-50 border border-slate-200 hover:border-orange-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg bg-slate-100 cursor-pointer border border-orange-100/50 aspect-[4/3] transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold bg-primary-500/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold font-display">{item.title}</h3>
                  {item.caption && (
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.caption}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentImage={filteredImages[currentIndex]}
        currentIndex={currentIndex}
        totalImages={filteredImages.length}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
}
