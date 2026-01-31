import React from 'react';

interface Category {
  id: number;
  name: string;
  icon: string;
}

export const CategoriesSection: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: 'Mobile', icon: '📱' },
    { id: 2, name: 'Cosmetics', icon: '💄' },
    { id: 3, name: 'Electronics', icon: '🎧' },
    { id: 4, name: 'Furniture', icon: '🛋️' },
    { id: 5, name: 'Watches', icon: '⌚' },
    { id: 6, name: 'Decor', icon: '🌿' },
    { id: 7, name: 'Accessories', icon: '🎧' },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[--color-gray-900]">
          Shop From <span className="text-[--color-primary]">Top Categories</span>
        </h2>
        <a href="#" className="flex items-center gap-1 text-[--color-primary] font-medium hover:underline">
          View All
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-24 h-24 bg-[--color-gray-100] rounded-full flex items-center justify-center text-4xl group-hover:bg-[--color-primary]/10 transition-colors border border-[--color-gray-200]">
              {category.icon}
            </div>
            <span className="text-sm font-medium text-[--color-gray-900] text-center group-hover:text-[--color-primary] transition-colors">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
