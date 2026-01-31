interface SectionHeaderProps {
  title: string;
  highlight: string;
  showViewAll?: boolean;
}

export default function SectionHeader({ title, highlight, showViewAll = true }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-[#666]">
          {title}{' '}
          <span className="text-[#008ECC]">{highlight}</span>
        </h2>
        <div className="h-[3px] bg-[#008ECC] mt-4 rounded-full" style={{ width: `${(title.length + highlight.length) * 10}px`, maxWidth: '280px' }} />
      </div>
      {showViewAll && (
        <button className="flex items-center gap-1 text-[#666] text-sm font-medium hover:text-[#008ECC] transition-colors">
          View All
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
