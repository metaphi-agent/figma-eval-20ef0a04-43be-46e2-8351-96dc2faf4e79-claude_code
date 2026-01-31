import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  badge?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  discount,
  image,
  badge,
}) => {
  return (
    <div className="bg-white border border-[--color-gray-200] rounded-lg p-4 hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative mb-4">
        {badge && (
          <div className="absolute top-2 right-2 bg-[--color-primary] text-white text-xs font-bold px-2 py-1 rounded">
            {badge}
          </div>
        )}
        <div className="aspect-[3/4] bg-[--color-gray-100] rounded-lg flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
            📱
          </div>
        </div>
      </div>
      <h3 className="text-sm font-medium text-[--color-gray-900] mb-2 line-clamp-2 group-hover:text-[--color-primary] transition-colors">
        {name}
      </h3>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-lg font-bold text-[--color-gray-900]">₹{price.toLocaleString()}</span>
        {originalPrice && (
          <span className="text-sm text-[--color-gray-400] line-through">₹{originalPrice.toLocaleString()}</span>
        )}
      </div>
      {discount && (
        <div className="text-sm text-green-600 font-medium">
          Save - ₹{discount.toLocaleString()}
        </div>
      )}
    </div>
  );
};
