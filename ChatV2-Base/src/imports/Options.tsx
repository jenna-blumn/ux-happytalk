import svgPaths from "./svg-4y1gymf3l6";

function ArrowsDownUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowsDownUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowsDownUp">
          <path d={svgPaths.p1a715f00} fill="var(--fill-0, #18181B)" id="Vector" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function Sorting() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="sorting">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">최신순</p>
      <ArrowsDownUp />
    </div>
  );
}

function CaretDown() {
  return (
    <div className="absolute inset-1/4" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="CaretDown">
          <path d={svgPaths.p3294c0} fill="var(--fill-0, #18181B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="caret-down">
      <CaretDown />
    </div>
  );
}

function Option() {
  return (
    <div className="bg-white box-border content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] w-[36px]">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">전체</p>
      </div>
      <CaretDown1 />
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="absolute inset-1/4" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="CaretDown">
          <path d={svgPaths.p3294c0} fill="var(--fill-0, #18181B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CaretDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="caret-down">
      <CaretDown2 />
    </div>
  );
}

function Option1() {
  return (
    <div className="bg-white box-border content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] w-[36px]">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">키워드</p>
      </div>
      <CaretDown3 />
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="MagnifyingGlass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_9903)" id="MagnifyingGlass">
          <path d={svgPaths.p20798700} fill="var(--fill-0, #18181B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_9903">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Frame">
      <MagnifyingGlass />
    </div>
  );
}

function Option2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-500 tracking-[-0.26px] w-[38px]">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">검색어</p>
      </div>
      <Frame />
    </div>
  );
}

function Search() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0" data-name="search">
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0" data-name="btn">
      <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip px-[13px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-center text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">삭제</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-zinc-400 inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Btn1() {
  return (
    <div className="bg-[#306afe] box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip px-[13px] py-[6px] relative rounded-[4px] shrink-0" data-name="btn">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.26px] whitespace-pre">등록</p>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btns">
      <Btn />
      <Btn1 />
    </div>
  );
}

export default function Options() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full" data-name="options">
      <Sorting />
      <Search />
      <Btns />
    </div>
  );
}