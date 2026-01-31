import React, { useState } from 'react';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="relative bg-[--color-secondary] rounded-2xl overflow-hidden h-[400px]">
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-between px-16">
          {/* Left Content */}
          <div className="text-white max-w-xl z-10">
            <p className="text-sm mb-2 opacity-90">Best Deal Online on smart watches</p>
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              SMART WEARABLE.
            </h2>
            <p className="text-2xl font-semibold mb-8">UP to 80% OFF</p>
          </div>

          {/* Right Product Image */}
          <div className="relative z-10">
            <div className="w-80 h-80 flex items-center justify-center">
              {/* Placeholder for smartwatch image */}
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="w-48 h-56 bg-gray-800 rounded-2xl border-4 border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[--color-primary] text-4xl font-bold mb-2">08:26:00</div>
                    <div className="flex gap-4 justify-center mt-4">
                      <div className="text-red-500 text-sm">♥ 98</div>
                      <div className="text-orange-500 text-sm">🔥 150</div>
                      <div className="text-blue-400 text-sm">⚡ 99%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-20"
        >
          <svg className="w-6 h-6 text-[--color-gray-900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-20"
        >
          <svg className="w-6 h-6 text-[--color-gray-900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
