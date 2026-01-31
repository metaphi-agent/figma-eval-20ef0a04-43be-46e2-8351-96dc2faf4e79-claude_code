const popularCategories = [
  'Staples',
  'Beverages',
  'Personal Care',
  'Home Care',
  'Baby Care',
  'Vegetables & Fruits',
  'Snacks & Foods',
  'Dairy & Bakery',
];

const customerServices = [
  'About Us',
  'Terms & Conditions',
  'FAQ',
  'Privacy Policy',
  'E-waste Policy',
  'Cancellation & Return Policy',
];

export default function Footer() {
  return (
    <footer className="bg-[#002855] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div>
            <img
              src="./assets/icons/logo-white.svg"
              alt="MegaMart"
              className="h-8 mb-6"
            />

            <div className="space-y-4">
              <h4 className="text-[#008ECC] font-semibold">Contact Us</h4>

              <div className="flex items-center gap-3">
                <img
                  src="./assets/images/whatsapp-footer.png"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                <div>
                  <p className="text-sm text-gray-300">Whats App</p>
                  <p className="text-sm">+1 202-918-2132</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="./assets/images/call-footer.png"
                  alt="Call"
                  className="w-5 h-5"
                />
                <div>
                  <p className="text-sm text-gray-300">Call Us</p>
                  <p className="text-sm">+1 202-918-2132</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-[#008ECC] font-semibold mb-3">Download App</h4>
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/images/appstore.png"
                    alt="App Store"
                    className="h-10 cursor-pointer"
                  />
                  <img
                    src="./assets/images/playstore.png"
                    alt="Google Play"
                    className="h-10 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Most Popular Categories */}
          <div>
            <h4 className="text-[#008ECC] font-semibold mb-4">Most Popular Categories</h4>
            <ul className="space-y-2">
              {popularCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#008ECC]">•</span>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h4 className="text-[#008ECC] font-semibold mb-4">Customer Services</h4>
            <ul className="space-y-2">
              {customerServices.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#008ECC]">•</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code */}
          <div className="flex justify-center md:justify-end">
            <img
              src="./assets/images/qr-code.png"
              alt="Scan QR Code"
              className="w-32 h-32"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <p className="text-center text-sm text-gray-400">
            © 2022 All rights reserved. Reliance Retail Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
