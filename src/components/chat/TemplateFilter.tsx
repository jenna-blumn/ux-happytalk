import { FilterOptions } from "./FilterOptions";
import { TabPills } from "../ui/tab-pills";

interface TemplateFilterProps {
  categories: Array<{
    id: string;
    label: string;
  }>;
  activeCategory?: number;
  onCategoryChange?: (index: number) => void;
}

export function TemplateFilter({ categories, activeCategory = 0, onCategoryChange }: TemplateFilterProps) {
  const categoryLabels = categories.map(cat => cat.label);
  const activeLabel = categories[activeCategory]?.label || "";

  const handleCategoryChange = (label: string) => {
    const index = categories.findIndex(cat => cat.label === label);
    if (index !== -1 && onCategoryChange) {
      onCategoryChange(index);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Option">
      {/* Category Pill Tabs */}
      <TabPills
        items={categoryLabels}
        activeTab={activeLabel}
        onTabChange={handleCategoryChange}
        className="w-full"
      />

      {/* Divider - Line 2 */}
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "var(--sort-zinc-10, #F4F4F5)" } as React.CSSProperties}>
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