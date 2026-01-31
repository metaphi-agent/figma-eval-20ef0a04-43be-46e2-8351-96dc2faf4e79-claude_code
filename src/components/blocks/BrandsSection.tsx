import React, { useState } from 'react';

interface BrandCard {
  id: number;
  name: string;
  logo: string;
  discount: string;
  color: string;
  productImage?: string;
}

export const BrandsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const brands: BrandCard[] = [
    {
      id: 1,
      name: 'IPHONE',
      logo: '🍎',
      discount: 'UP to 80% OFF',
      color: '#2C2C2C',
      productImage: '',
    },
    {
      id: 2,
      name: 'REALME',
      logo: 'realme',
      discount: 'UP to 80% OFF',
      color: '#FFE082',
      productImage: '',
    },
    {
      id: 3,
      name: 'XIAOMI',
      logo: 'mi',
      discount: 'UP to 80% OFF',
      color: '#FFB74D',
      productImage: '',
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[--color-gray-900]">
          Top <span className="text-[--color-primary]">Electronics Brands</span>
        </h2>
        <a href="#" className="flex items-center gap-1 text-[--color-primary] font-medium hover:underline">
          View All
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="relative rounded-xl overflow-hidden h-64 cursor-pointer group hover:shadow-xl transition-shadow"
              style={{ backgroundColor: brand.color }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-medium text-[--color-gray-600] mb-2">{brand.name}</div>
                  <div className="text-2xl font-bold mb-2">
                    {brand.id === 1 && '🍏'}
                    {brand.id === 2 && <span className="text-yellow-600">realme</span>}
                    {brand.id === 3 && (
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        mi
                      </div>
                    )}
                  </div>
                  <div className="text-lg font-semibold text-[--color-gray-900]">{brand.discount}</div>
                </div>
                <div className="flex justify-end">
                  <div className="w-32 h-40 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center text-4xl">
                    📱
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-6 bg-[--color-primary]' : 'bg-[--color-gray-300]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
