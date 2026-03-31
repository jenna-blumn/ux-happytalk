import svgPaths from "../imports/svg-i71009d0sy";
import { FilterOptions } from "./FilterOptions";

interface CategoryTagProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function CategoryTag({ label, isActive = false, onClick }: CategoryTagProps) {
  if (isActive) {
    return (
      <button
        className="bg-slate-600 box-border content-stretch flex gap-[4px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0"
        data-name="title type - Core Elements"
        onClick={onClick}
      >
        <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-nowrap text-white tracking-[-0.26px]">
          <p className="leading-none whitespace-pre">{label}</p>
        </div>
      </button>
    );
  }

  return (
    <button
      className="bg-[rgba(140,140,156,0.12)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 hover:bg-[rgba(140,140,156,0.18)] transition-colors"
      data-name="title type - Core Elements"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] justify-center leading-[0] not-italic opacity-60 overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px]">
        <p className="leading-none overflow-ellipsis overflow-hidden whitespace-pre">{label}</p>
      </div>
    </button>
  );
}

interface TemplateFilterProps {
  categories: Array<{
    id: string;
    label: string;
  }>;
  activeCategory?: number;
  onCategoryChange?: (index: number) => void;
}

export function TemplateFilter({ categories, activeCategory = 0, onCategoryChange }: TemplateFilterProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Option">
      {/* Category Tags */}
      <div className="content-stretch flex flex-wrap gap-[4px] items-center relative shrink-0 w-full">
        {categories.map((category, index) => (
          <CategoryTag
            key={category.id}
            label={category.label}
            isActive={index === activeCategory}
            onClick={() => onCategoryChange?.(index)}
          />
        ))}
      </div>

      {/* Divider - Line 2 */}
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(244, 244, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 1" aria-hidden="true">
            <line id="Line 2" stroke="var(--stroke-0, #F4F4F5)" x2="408" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Filter Options: Sorting + Search + Buttons */}
      <FilterOptions />
    </div>
  );
}