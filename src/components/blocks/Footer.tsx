import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[--color-primary] text-white mt-16">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">MegaMart</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-sm">Contact Us</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">Whats App</span>
              </div>
              <p className="text-sm">+1 202-918-2132</p>

              <div className="flex items-center gap-2 mt-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">Call Us</span>
              </div>
              <p className="text-sm">+1 202-918-2132</p>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Download App</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="inline-block">
                    <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="inline-block">
                    <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Most Popular Categories */}
          <div>
            <h4 className="font-semibold mb-4">Most Popular Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Staples</a></li>
              <li><a href="#" className="hover:underline">Beverages</a></li>
              <li><a href="#" className="hover:underline">Personal Care</a></li>
              <li><a href="#" className="hover:underline">Home Care</a></li>
              <li><a href="#" className="hover:underline">Baby Care</a></li>
              <li><a href="#" className="hover:underline">Vegetables & Fruits</a></li>
              <li><a href="#" className="hover:underline">Snacks & Foods</a></li>
              <li><a href="#" className="hover:underline">Dairy & Bakery</a></li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h4 className="font-semibold mb-4">Customer Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">E-waste Policy</a></li>
              <li><a href="#" className="hover:underline">Cancellation & Return Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
      </div>
    </footer>
  );
};
