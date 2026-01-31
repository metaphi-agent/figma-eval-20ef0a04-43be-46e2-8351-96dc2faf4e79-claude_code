import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-[--color-gray-200]">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#00A8CC"/>
              <path d="M8 8h8M8 12h8M8 16h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h1 className="text-2xl font-bold text-[--color-primary]">MegaMart</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pr-12 border border-[--color-gray-200] rounded-lg focus:outline-none focus:border-[--color-primary] transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[--color-primary] hover:bg-[--color-gray-100] rounded-md transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[--color-gray-900] hover:text-[--color-primary] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm">Sign Up/Sign In</span>
            </button>
            <button className="relative flex items-center gap-2 text-[--color-gray-900] hover:text-[--color-primary] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-semibold">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-[--color-primary] text-white rounded-lg hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="font-medium">Groceries</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {['Premium Fruits', 'Home & Kitchen', 'Fashion', 'Electronics', 'Beauty', 'Home Improvement', 'Sports, Toys & Luggage'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 text-sm text-[--color-gray-900] hover:text-[--color-primary] hover:bg-[--color-gray-100] rounded-lg transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
