'use client';

import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; title: string; event: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex
}) => {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-zinc-900 rounded-full border border-zinc-800"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative w-full max-h-[75vh] flex items-center justify-center">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl border border-amber-500/20 shadow-2xl"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-red-950 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-red-950 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="text-center mt-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            {currentImage.event}
          </span>
          <h4 className="text-sm font-semibold text-gray-200 mt-2">
            {currentImage.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};
