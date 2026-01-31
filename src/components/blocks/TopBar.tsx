import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[--color-gray-200] py-2 px-4 text-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="text-[--color-gray-600]">
          Welcome to worldwide <span className="font-semibold">Megamart!</span>
        </div>
        <div className="flex items-center gap-6 text-[--color-gray-600]">
          <a href="#" className="flex items-center gap-1 hover:text-[--color-primary] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Deliver to <span className="font-semibold">423651</span></span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[--color-primary] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <span>Track your order</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[--color-primary] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>All Offers</span>
          </a>
        </div>
      </div>
    </div>
  );
};
