import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';

const products = [
  {
    image: './assets/images/products/galaxy-s22.png',
    name: 'Galaxy S22 Ultra',
    currentPrice: '₹32999',
    originalPrice: '₹74999',
    savings: 'Save - ₹32999',
    discount: '56% OFF',
  },
  {
    image: './assets/images/products/galaxy-m13.png',
    name: 'Galaxy M13 (4GB | 64 GB )',
    currentPrice: '₹10499',
    originalPrice: '₹14999',
    savings: 'Save - ₹4500',
    discount: '56% OFF',
  },
  {
    image: './assets/images/products/galaxy-m33.png',
    name: 'Galaxy M33 (4GB | 64 GB )',
    currentPrice: '₹16999',
    originalPrice: '₹24999',
    savings: 'Save - ₹8000',
    discount: '56% OFF',
  },
  {
    image: './assets/images/products/galaxy-s22.png',
    name: 'Galaxy M53 (4GB | 64 GB )',
    currentPrice: '₹31999',
    originalPrice: '₹40999',
    savings: 'Save - ₹9000',
    discount: '56% OFF',
  },
  {
    image: './assets/images/products/galaxy-m13.png',
    name: 'Galaxy S22 Ultra',
    currentPrice: '₹67999',
    originalPrice: '₹85999',
    savings: 'Save - ₹18000',
    discount: '56% OFF',
  },
];

export default function SmartphonesSection() {
  return (
    <section className="bg-white py-8">
      <div className="container-custom">
        <SectionHeader title="Grab the best deal on" highlight="Smartphones" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
