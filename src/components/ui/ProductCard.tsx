interface ProductCardProps {
  image: string;
  name: string;
  currentPrice: string;
  originalPrice: string;
  savings: string;
  discount: string;
}

export default function ProductCard({
  image,
  name,
  currentPrice,
  originalPrice,
  savings,
  discount,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-[#E8E8E8] hover:shadow-lg transition-shadow cursor-pointer group">
      {/* Image Container */}
      <div className="relative p-4 bg-[#F9F9F9]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-40 object-contain group-hover:scale-105 transition-transform"
        />
        <span className="absolute top-3 right-3 bg-[#008ECC] text-white text-xs font-bold px-2 py-1 rounded">
          {discount}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm text-[#666] font-medium mb-2 line-clamp-1">{name}</h3>
        <div className="h-px bg-[#E8E8E8] my-2" />
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-lg font-bold text-[#333]">{currentPrice}</span>
          <span className="text-sm text-[#999] line-through">{originalPrice}</span>
        </div>
        <p className="text-sm text-[#00B517] font-medium">{savings}</p>
      </div>
    </div>
  );
}
