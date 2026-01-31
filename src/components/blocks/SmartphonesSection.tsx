import React from 'react';
import { ProductCard } from './ProductCard';

export const SmartphonesSection: React.FC = () => {
  const smartphones = [
    {
      id: 1,
      name: 'Galaxy S23 Ultra',
      price: 32999,
      originalPrice: 74999,
      discount: 32999,
      image: '',
      badge: '56% OFF',
    },
    {
      id: 2,
      name: 'Galaxy M13 (6GB | 64 GB )',
      price: 10499,
      originalPrice: 14999,
      discount: 4000,
      image: '',
      badge: '42% OFF',
    },
    {
      id: 3,
      name: 'Galaxy M53 (6GB | 64 GB )',
      price: 16999,
      originalPrice: 26999,
      discount: 8000,
      image: '',
      badge: '40% OFF',
    },
    {
      id: 4,
      name: 'Galaxy M53 (6GB | 64 GB )',
      price: 31999,
      originalPrice: 46999,
      discount: 9000,
      image: '',
      badge: '56% OFF',
    },
    {
      id: 5,
      name: 'Galaxy S22 Ultra',
      price: 67999,
      originalPrice: 86999,
      discount: 18000,
      image: '',
      badge: '42% OFF',
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[--color-gray-900]">
          Grab the best deal on <span className="text-[--color-primary]">Smartphones</span>
        </h2>
        <a href="#" className="flex items-center gap-1 text-[--color-primary] font-medium hover:underline">
          View All
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {smartphones.map((phone) => (
          <ProductCard key={phone.id} {...phone} />
        ))}
      </div>
    </section>
  );
};
