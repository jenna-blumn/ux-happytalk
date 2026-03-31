import { TemplateTab } from "./TemplateTab";
import { TemplateFilter } from "./TemplateFilter";
import { TemplateList } from "./TemplateList";

interface TemplateSectionProps {
  tabs: string[];
  activeTab?: number;
  categories: Array<{
    id: string;
    label: string;
  }>;
  activeCategory?: number;
  templates: Array<{
    id: string;
    badge?: {
      label: string;
      color: string;
    };
    text: string;
    isFavorite?: boolean;
  }>;
  onTabChange?: (index: number) => void;
  onCategoryChange?: (index: number) => void;
  onFavoriteToggle?: (id: string) => void;
}

export function TemplateSection({
  tabs,
  activeTab = 1,
  categories,
  activeCategory = 0,
  templates,
  onTabChange,
  onCategoryChange,
  onFavoriteToggle,
}: TemplateSectionProps) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Panel-section-템플릿">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-300 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[10px] relative size-full">
          {/* Container with bg-white */}
          <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative size-full">
                {/* Template Tabs */}
                <TemplateTab 
                  tabs={tabs} 
                  activeIndex={activeTab}
                  onTabChange={onTabChange}
                />
     

                {/* Filter Options */}
                <TemplateFilter 
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={onCategoryChange}
                />


                {/* Template List */}
                <TemplateList 
                  templates={templates}
                  onFavoriteToggle={onFavoriteToggle}
                />

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}