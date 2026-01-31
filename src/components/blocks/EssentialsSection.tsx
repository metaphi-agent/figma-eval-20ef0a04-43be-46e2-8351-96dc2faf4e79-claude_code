import React from 'react';

interface Essential {
  id: number;
  name: string;
  discount: string;
  image: string;
  icon: string;
}

export const EssentialsSection: React.FC = () => {
  const essentials: Essential[] = [
    { id: 1, name: 'Daily Essentials', discount: 'UP to 50% OFF', image: '', icon: '🛒' },
    { id: 2, name: 'Vegetables', discount: 'UP to 50% OFF', image: '', icon: '🥬' },
    { id: 3, name: 'Fruits', discount: 'UP to 50% OFF', image: '', icon: '🍍' },
    { id: 4, name: 'Strawberry', discount: 'UP to 50% OFF', image: '', icon: '🍓' },
    { id: 5, name: 'Mango', discount: 'UP to 50% OFF', image: '', icon: '🥭' },
    { id: 6, name: 'Cherry', discount: 'UP to 50% OFF', image: '', icon: '🍒' },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[--color-gray-900]">
          Daily <span className="text-[--color-primary]">Essentials</span>
        </h2>
        <a href="#" className="flex items-center gap-1 text-[--color-primary] font-medium hover:underline">
          View All
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {essentials.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[--color-gray-200] rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="aspect-square bg-[--color-gray-100] rounded-lg mb-3 flex items-center justify-center text-6xl overflow-hidden">
              {item.icon}
            </div>
            <h3 className="text-sm font-medium text-[--color-gray-900] mb-1 group-hover:text-[--color-primary] transition-colors">
              {item.name}
            </h3>
            <p className="text-xs font-semibold text-[--color-gray-900]">{item.discount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
