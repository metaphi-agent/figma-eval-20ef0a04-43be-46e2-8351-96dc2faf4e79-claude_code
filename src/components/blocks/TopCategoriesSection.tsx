import SectionHeader from '../ui/SectionHeader';

const categories = [
  { name: 'Mobile', image: './assets/images/categories/mobile.png' },
  { name: 'Cosmetics', image: './assets/images/categories/cosmetics.png' },
  { name: 'Electronics', image: './assets/images/categories/electronics.png' },
  { name: 'Furniture', image: './assets/images/categories/furniture.png' },
  { name: 'Watches', image: './assets/images/categories/watches.png' },
  { name: 'Decor', image: './assets/images/categories/decor.png' },
  { name: 'Accessories', image: './assets/images/categories/accessories.png' },
];

export default function TopCategoriesSection() {
  return (
    <section className="bg-white py-8">
      <div className="container-custom">
        <SectionHeader title="Shop From" highlight="Top Categories" />
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group min-w-[120px]"
            >
              <div className="w-[120px] h-[120px] rounded-full bg-[#F9F9F9] border-2 border-transparent group-hover:border-[#008ECC] flex items-center justify-center overflow-hidden transition-all">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="mt-3 text-[#666] text-sm font-medium group-hover:text-[#008ECC] transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
