interface TemplateTabItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function TemplateTabItem({ label, isActive = false, onClick }: TemplateTabItemProps) {
  if (isActive) {
    return (
      <button
        className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[12px] relative shrink-0"
        data-name="active"
        onClick={onClick}
        role="tab"
        aria-selected="true"
      >
        <div aria-hidden="true" className="absolute border-[#68768b] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">
          {label}
        </p>
      </button>
    );
  }

  return (
    <button
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[12px] relative shrink-0 hover:bg-gray-50 transition-colors"
      data-name="none"
      onClick={onClick}
      role="tab"
      aria-selected="false"
    >
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic opacity-60 relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">
        {label}
      </p>
    </button>
  );
}

interface TemplateTabProps {
  tabs: string[];
  activeIndex?: number;
  onTabChange?: (index: number) => void;
}

export function TemplateTab({ tabs, activeIndex = 1, onTabChange }: TemplateTabProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="menu-item" role="tablist">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      {tabs.map((tab, index) => (
        <TemplateTabItem
          key={`template-tab-${index}`}
          label={tab}
          isActive={index === activeIndex}
          onClick={() => onTabChange?.(index)}
        />
      ))}
    </div>
  );
}
