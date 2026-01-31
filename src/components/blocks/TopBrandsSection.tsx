import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const brands = [
  {
    name: 'IPHONE',
    logo: '',
    logoType: 'apple',
    image: './assets/images/brands/iphone-brand.png',
    discount: 'UP to 80% OFF',
    bgColor: '#002855',
  },
  {
    name: 'REALME',
    logo: '',
    logoType: 'realme',
    image: './assets/images/brands/realme-brand.png',
    discount: 'UP to 80% OFF',
    bgColor: '#008ECC',
  },
  {
    name: 'XIAOMI',
    logo: '',
    logoType: 'xiaomi',
    image: './assets/images/brands/xiaomi-brand.png',
    discount: 'UP to 80% OFF',
    bgColor: '#00B517',
  },
];

export default function TopBrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-white py-8">
      <div className="container-custom">
        <SectionHeader title="Top" highlight="Electronics Brands" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-[250px] cursor-pointer group"
              style={{ backgroundColor: brand.bgColor }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/90 text-xs font-bold px-3 py-1 rounded text-[#333]">
                  {brand.name}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                {brand.logoType === 'apple' && (
                  <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                )}
                {brand.logoType === 'realme' && (
                  <span className="text-2xl font-bold mb-2 block">realme</span>
                )}
                {brand.logoType === 'xiaomi' && (
                  <span className="text-2xl font-bold mb-2 block">mi</span>
                )}
                <p className="text-lg font-semibold">{brand.discount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-4 h-2 rounded-full bg-[#008ECC]" />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#D9D9D9]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
