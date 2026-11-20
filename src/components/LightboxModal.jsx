import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  currentImage,
  currentIndex,
  totalImages,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/90 backdrop-blur-sm p-4 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all z-50 focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center p-2">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption & Category */}
        <div className="mt-4 text-center text-white max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs bg-primary-600 text-white font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {currentImage.category}
            </span>
            <span className="text-xs text-slate-400">
              {currentIndex + 1} of {totalImages}
            </span>
          </div>
          <h3 className="text-lg font-bold font-display">{currentImage.title}</h3>
          {currentImage.caption && (
            <p className="text-xs text-slate-300 mt-1">{currentImage.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
