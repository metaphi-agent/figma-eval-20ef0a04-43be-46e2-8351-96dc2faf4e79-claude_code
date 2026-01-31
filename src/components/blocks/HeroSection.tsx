import { useState } from 'react';

const slides = [
  {
    id: 1,
    subtitle: 'Best Deal Online on smart watches',
    title: 'SMART WEARABLE.',
    discount: 'UP TO 80% OFF',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-white py-8">
      <div className="container-custom">
        <div className="relative rounded-[20px] overflow-hidden bg-[#002855]">
          {/* Content */}
          <div className="flex items-center justify-between px-12 py-10 min-h-[320px]">
            {/* Left Arrow */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Text Content */}
            <div className="text-white z-10 max-w-md">
              <p className="text-lg mb-2">{slides[currentSlide].subtitle}</p>
              <h1 className="text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
              <p className="text-xl">{slides[currentSlide].discount}</p>
            </div>

            {/* Hero Image */}
            <div className="relative z-10">
              <img
                src="./assets/images/hero-smartwatch.png"
                alt="Smart Watch"
                className="w-[350px] h-auto object-contain"
              />
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-12 flex items-center gap-2">
            <div className="w-6 h-2 rounded-full bg-white" />
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-white/50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
