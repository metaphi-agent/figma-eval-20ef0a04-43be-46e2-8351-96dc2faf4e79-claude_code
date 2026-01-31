import SectionHeader from '../ui/SectionHeader';

const essentials = [
  {
    name: 'Daily Essentials',
    image: './assets/images/essentials/daily-essentials.png',
    discount: 'UP to 50% OFF',
  },
  {
    name: 'Vegitables',
    image: './assets/images/essentials/vegetables.png',
    discount: 'UP to 50% OFF',
  },
  {
    name: 'Fruits',
    image: './assets/images/essentials/fruits.png',
    discount: 'UP to 50% OFF',
  },
  {
    name: 'Strawberry',
    image: './assets/images/essentials/strawberry.png',
    discount: 'UP to 50% OFF',
  },
  {
    name: 'Mango',
    image: './assets/images/essentials/mango.png',
    discount: 'UP to 50% OFF',
  },
  {
    name: 'Cherry',
    image: './assets/images/essentials/cherry.png',
    discount: 'UP to 50% OFF',
  },
];

export default function DailyEssentialsSection() {
  return (
    <section className="bg-white py-8">
      <div className="container-custom">
        <SectionHeader title="Daily" highlight="Essentials" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {essentials.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="relative h-[180px] bg-[#F5F5F5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="text-center py-3">
                <h3 className="text-[#666] text-sm font-medium mb-1">{item.name}</h3>
                <p className="text-[#00B517] text-sm font-semibold">{item.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
