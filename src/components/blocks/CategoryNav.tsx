const categories = [
  { name: 'Groceries', active: true, hasDropdown: true },
  { name: 'Premium Fruits', active: false, hasDropdown: true },
  { name: 'Home & Kitchen', active: false, hasDropdown: true },
  { name: 'Fashion', active: false, hasDropdown: true },
  { name: 'Electronics', active: false, hasDropdown: true },
  { name: 'Beauty', active: false, hasDropdown: true },
  { name: 'Home Improvement', active: false, hasDropdown: true },
  { name: 'Sports, Toys & Luggage', active: false, hasDropdown: true },
];

export default function CategoryNav() {
  return (
    <div className="bg-white border-b border-[#D9D9D9]">
      <div className="container-custom py-4">
        <div className="flex items-center gap-3.5 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-[18px] text-sm font-medium transition-colors ${
                category.active
                  ? 'bg-[#008ECC] text-white'
                  : 'bg-[#F4F9FB] text-[#666] hover:bg-[#E8F4F8]'
              }`}
            >
              {category.name}
              {category.hasDropdown && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
