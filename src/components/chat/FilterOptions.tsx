import svgPaths from "../../imports/svg-4y1gymf3l6";
import { Button } from "../ui/button";

function ArrowsDownUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowsDownUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" aria-hidden="true">
        <g id="ArrowsDownUp">
          <path d={svgPaths.p1a715f00} fill="var(--fill-0, #18181B)" id="Vector" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function Sorting() {
  return (
    <button
      className="content-stretch flex items-center relative shrink-0 hover:opacity-80 transition-opacity font-sans"
      data-name="sorting"
      aria-label="정렬 옵션"
    >
      <p className="leading-none not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">
        최신순
      </p>
      <ArrowsDownUp />
    </button>
  );
}


function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="MagnifyingGlass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12" aria-hidden="true">
        <g clipPath="url(#clip0_filter_search)" id="MagnifyingGlass">
          <path d={svgPaths.p20798700} fill="var(--fill-0, #18181B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_filter_search">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SearchButton() {
  return (
    <button
      className="bg-zinc-100 box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[24px] hover:bg-zinc-200 transition-colors"
      data-name="Frame"
      aria-label="검색"
    >
      <MagnifyingGlass />
    </button>
  );
}

function SearchInputOption() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0 shadow-sort-component focus-within:shadow-sort-focus" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
      <input
        type="text"
        placeholder="검색어"
        className="flex flex-col font-sans h-[16px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-500 tracking-[-0.26px] w-[38px] bg-transparent border-none outline-none focus:ring-0"
        aria-label="검색어 입력"
      />
      <SearchButton />
    </div>
  );
}

function Search() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0" data-name="search">
      <Button size="xs" className="w-[64px]">전체</Button>
      <Button size="xs" className="w-[84px]">키워드</Button>
      <SearchInputOption />
    </div>
  );
}

interface ActionButtonProps {
  label: string;
  variant?: 'default' | 'primary';
  onClick?: () => void;
}

function ActionButton({ label, variant = 'default', onClick }: ActionButtonProps) {
  const isPrimary = variant === 'primary';

  if (isPrimary) {
    return (
      <button
        className="bg-primary box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip px-[13px] py-[6px] relative rounded-[4px] shrink-0 hover:bg-primary-hover transition-all shadow-sort-component focus:shadow-sort-focus font-sans"
        data-name="btn"
        onClick={onClick}
      >
        <p className="leading-none not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.26px] whitespace-pre">
          {label}
        </p>
      </button>
    );
  }

  return (
    <button
      className="bg-white h-[32px] relative rounded-[4px] shrink-0 hover:bg-gray-50 transition-all shadow-sort-component focus:shadow-sort-focus font-sans"
      data-name="btn"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip px-[13px] py-[6px] relative rounded-[inherit]">
        <p className="leading-none not-italic relative shrink-0 text-[13px] text-center text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">
          {label}
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-zinc-400 inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );
}

function ActionButtons({ onDelete, onRegister }: { onDelete?: () => void; onRegister?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btns">
      <ActionButton label="삭제" variant="default" onClick={onDelete} />
      <ActionButton label="등록" variant="primary" onClick={onRegister} />
    </div>
  );
}

interface FilterOptionsProps {
  onSort?: () => void;
  onDelete?: () => void;
  onRegister?: () => void;
}

export function FilterOptions({ onDelete, onRegister }: FilterOptionsProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative w-full p-1" data-name="options">
      <Sorting />
      <Search />
      <ActionButtons onDelete={onDelete} onRegister={onRegister} />
    </div>
  );
}
