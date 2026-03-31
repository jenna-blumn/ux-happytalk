import svgPaths from "../imports/svg-i71009d0sy";
import svgPathsPagination from "../imports/svg-popayb2ses";

interface TemplateItemProps {
  badge?: {
    label: string;
    color: string;
  };
  text: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

function FavoriteIcon({ isActive = false, onClick }: { isActive?: boolean; onClick?: () => void }) {
  const StarIcon = () => (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" aria-hidden="true">
        <g id="favorite">
          <path 
            d={svgPaths.p2abaebc0} 
            fill={isActive ? "var(--fill-0, #FFCC66)" : "var(--fill-0, #3F3F46)"} 
            id="Vector" 
            opacity={isActive ? "1" : "0.2"}
            stroke={isActive ? "var(--stroke-0, #EAB308)" : "var(--stroke-0, #18181B)"} 
          />
        </g>
      </svg>
    </div>
  );

  return (
    <button
      className="relative rounded-[4px] shrink-0 size-[24px] hover:bg-gray-100 transition-colors"
      onClick={onClick}
      aria-label={isActive ? "즐겨찾기 해제" : "즐겨찾기 추가"}
    >
      <StarIcon />
    </button>
  );
}

function TemplateBadge({ label, color }: { label: string; color: string }) {
  const bgColor = color === "red" ? "bg-[rgba(255,71,19,0.1)]" : "bg-[rgba(24,24,27,0.08)]";
  const textColor = color === "red" ? "text-[#ff4713]" : "text-zinc-900";
  const opacity = color === "red" ? "" : "opacity-60";

  return (
    <div className={`${bgColor} box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0`} data-name="badge">
      <p className={`font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic ${opacity} relative shrink-0 text-[13px] text-nowrap ${textColor} tracking-[-0.26px] whitespace-pre`}>
        {label}
      </p>
    </div>
  );
}

export function TemplateItem({ badge, text, isFavorite = false, onFavoriteClick }: TemplateItemProps) {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          {badge && <TemplateBadge label={badge.label} color={badge.color} />}
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">
            {text}
          </p>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
            <FavoriteIcon isActive={isFavorite} onClick={onFavoriteClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TablerIconChevronsRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevrons-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" aria-hidden="true">
        <g id="tabler-icon-chevrons-right">
          <path d={svgPathsPagination.p11c341e0} id="Vector" stroke="var(--stroke-0, #38373E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" aria-hidden="true">
        <g id="tabler-icon-chevron-right">
          <path d="M6 4L10 8L6 12" id="Vector" stroke="var(--stroke-0, #38373E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

interface PaginationButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  'aria-label': string;
}

function FirstPageButton({ onClick, disabled, 'aria-label': ariaLabel }: PaginationButtonProps) {
  return (
    <div className="flex items-center justify-center min-w-[24px] relative shrink-0">
      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
        <button
          className="box-border content-stretch flex h-[24px] items-center justify-center opacity-25 px-[4px] py-0 relative rounded-[4px] disabled:cursor-not-allowed"
          data-name="iconbutton"
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
        >
          <TablerIconChevronsRight />
        </button>
      </div>
    </div>
  );
}

function PrevPageButton({ onClick, disabled, 'aria-label': ariaLabel }: PaginationButtonProps) {
  return (
    <div className="flex items-center justify-center min-w-[24px] relative shrink-0">
      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
        <button
          className="box-border content-stretch flex h-[24px] items-center justify-center opacity-25 px-[4px] py-0 relative rounded-[4px] disabled:cursor-not-allowed"
          data-name="iconbutton"
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
        >
          <TablerIconChevronRight />
        </button>
      </div>
    </div>
  );
}

interface PageNumberButtonProps {
  pageNumber: number;
  isActive?: boolean;
  onClick?: () => void;
}

function PageNumberButton({ pageNumber, isActive = false, onClick }: PageNumberButtonProps) {
  if (isActive) {
    return (
      <button
        className="bg-[#5988fe] box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0"
        data-name="iconbutton"
        onClick={onClick}
        aria-label={`페이지 ${pageNumber}`}
        aria-current="page"
      >
        <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">
          {pageNumber}
        </p>
      </button>
    );
  }

  return (
    <button
      className="box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0 hover:bg-gray-100 transition-colors"
      data-name="iconbutton"
      onClick={onClick}
      aria-label={`페이지 ${pageNumber}로 이동`}
    >
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#38373e] text-[12px] text-center text-nowrap whitespace-pre">
        {pageNumber}
      </p>
    </button>
  );
}

function NextPageButton({ onClick, disabled, 'aria-label': ariaLabel }: PaginationButtonProps) {
  return (
    <button
      className="box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      data-name="iconbutton"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <TablerIconChevronRight />
    </button>
  );
}

function LastPageButton({ onClick, disabled, 'aria-label': ariaLabel }: PaginationButtonProps) {
  return (
    <button
      className="box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      data-name="iconbutton"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <TablerIconChevronsRight />
    </button>
  );
}

function Pagination() {
  return (
    <div className="bg-white relative w-full" data-name="bottom-paging">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center w-full">
        <div className="box-border content-stretch flex items-center justify-center p-[10px] relative w-full">
          <FirstPageButton disabled aria-label="첫 페이지로 이동" />
          <PrevPageButton disabled aria-label="이전 페이지로 이동" />
          <PageNumberButton pageNumber={1} isActive />
          <PageNumberButton pageNumber={2} />
          <NextPageButton aria-label="다음 페이지로 이동" />
          <LastPageButton aria-label="마지막 페이지로 이동" />
        </div>
      </div>
    </div>
  );
}

interface TemplateListProps {
  templates: Array<{
    id: string;
    badge?: {
      label: string;
      color: string;
    };
    text: string;
    isFavorite?: boolean;
  }>;
  onFavoriteToggle?: (id: string) => void;
}

export function TemplateList({ templates, onFavoriteToggle }: TemplateListProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="flex flex-col items-center justify-start size-full">
        <div className="content-stretch flex flex-col items-center relative w-full">
          {templates.map((template) => (
            <TemplateItem
              key={template.id}
              badge={template.badge}
              text={template.text}
              isFavorite={template.isFavorite}
              onFavoriteClick={() => onFavoriteToggle?.(template.id)}
            />
          ))}
        </div>
        <div className="box-border content-stretch flex items-center justify-center px-0 py-[16px] relative w-full">
          <Pagination />
        </div>
      </div>
    </div>
  );
}