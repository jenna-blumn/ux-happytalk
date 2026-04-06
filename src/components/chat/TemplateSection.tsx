import { TabPills } from "../ui/tab-pills";
import { TemplateFilter } from "./TemplateFilter";
import { TemplateList } from "./TemplateList";
import { useState } from "react";

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
  const [selectedTab, setSelectedTab] = useState(tabs[activeTab]);

  const handleTabChange = (tabName: string) => {
    setSelectedTab(tabName);
    const index = tabs.indexOf(tabName);
    if (onTabChange) onTabChange(index);
  };

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Panel-section-템플릿">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-stretch justify-center p-[10px] relative size-full">
          {/* Container with bg-white */}
          <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0 shadow-sort-card ring-1 ring-zinc-900/5 ring-inset" data-name="container">
            <div className="rounded-[inherit] w-full h-full">
              <div className="box-border flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative w-full h-full">

                {/* Template Tabs (Custom Button) */}
                <TabPills
                  items={tabs}
                  activeTab={selectedTab}
                  onTabChange={handleTabChange}
                />

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto w-full min-h-0 pr-1">
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
    </div>
  );
}