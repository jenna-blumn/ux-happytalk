interface InfoTabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function InfoTab({ label, isActive = false, onClick }: InfoTabProps) {
  if (isActive) {
    return (
      <button
        className="bg-slate-600 box-border content-stretch flex gap-[2px] items-center justify-center px-[10px] py-[6px] relative rounded-[6px] shrink-0"
        onClick={onClick}
        aria-selected="true"
        role="tab"
      >
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">
          {label}
        </p>
      </button>
    );
  }

  return (
    <button
      className="box-border content-stretch flex gap-[2px] items-center justify-center px-[10px] py-[6px] relative rounded-[6px] shrink-0 hover:bg-gray-100 transition-colors"
      onClick={onClick}
      aria-selected="false"
      role="tab"
    >
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">
        {label}
      </p>
    </button>
  );
}

interface InfoTabsProps {
  tabs: string[];
  activeIndex?: number;
  onTabChange?: (index: number) => void;
}

export function InfoTabs({ tabs, activeIndex = 0, onTabChange }: InfoTabsProps) {
  return (
    <div 
      className="box-border content-stretch flex items-center pb-[10px] pt-0 px-[10px] relative shrink-0 w-[460px]" 
      data-name="Panel-Tab"
      role="tablist"
    >
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-300 inset-0 pointer-events-none" />
      {tabs.map((tab, index) => (
        <InfoTab
          key={`tab-${index}`}
          label={tab}
          isActive={index === activeIndex}
          onClick={() => onTabChange?.(index)}
        />
      ))}
    </div>
  );
}
