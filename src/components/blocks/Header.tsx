import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-white border-b border-[#D9D9D9] sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[10px] bg-[#F4F9FB] flex items-center justify-center">
              <img
                src="./assets/icons/hamburger.svg"
                alt=""
                className="w-[26px] h-[18px]"
              />
            </div>
            <img
              src="./assets/icons/logo-blue.svg"
              alt="MegaMart"
              className="h-6"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[507px]">
            <div className="flex items-center bg-[#F4F9FB] rounded-[10px] px-4 py-3 gap-2.5">
              <svg
                className="w-5 h-5 text-[#666]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-[#666] placeholder-[#666] text-sm outline-none"
              />
              <img
                src="./assets/icons/list.svg"
                alt=""
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Side - Sign In & Cart */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <img
                src="./assets/icons/user.svg"
                alt=""
                className="w-6 h-6"
              />
              <span className="text-[#666] font-bold text-base">Sign Up/Sign In</span>
            </div>

            <div className="w-px h-6 bg-[#D9D9D9]" />

            <div className="flex items-center gap-1.5 cursor-pointer">
              <img
                src="./assets/icons/cart.svg"
                alt=""
                className="w-6 h-6"
              />
              <span className="text-[#666] font-bold text-base">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
