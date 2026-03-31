import svgPaths from "./svg-aknspt9wgk";
import imgPaging from "figma:asset/2db4ed58b00c84b81fbd5bf05b15d1e961a7477a.png";

function None() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[12px] relative shrink-0" data-name="none">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic opacity-60 relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">즐겨찾기</p>
    </div>
  );
}

function Active() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[12px] relative shrink-0" data-name="active">
      <div aria-hidden="true" className="absolute border-[#68768b] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">상담템플릿</p>
    </div>
  );
}

function None1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[12px] relative shrink-0" data-name="none">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic opacity-60 relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">템플릿 단축키</p>
    </div>
  );
}

function None2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[12px] relative shrink-0" data-name="none">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic opacity-60 relative shrink-0 text-[14px] text-center text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">자동완성</p>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="menu-item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
      <None />
      <Active />
      <None1 />
      <None2 />
    </div>
  );
}

function TitleTypeCoreElements() {
  return (
    <div className="bg-slate-600 box-border content-stretch flex gap-[4px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="title type - Core Elements">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-nowrap text-white tracking-[-0.26px]">
        <p className="leading-none whitespace-pre">전체(45)</p>
      </div>
    </div>
  );
}

function TitleTypeCoreElements1() {
  return (
    <div className="bg-[rgba(140,140,156,0.12)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="title type - Core Elements">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] justify-center leading-[0] not-italic opacity-60 overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px]">
        <p className="leading-none overflow-ellipsis overflow-hidden whitespace-pre">일반상담(22)</p>
      </div>
    </div>
  );
}

function TitleTypeCoreElements2() {
  return (
    <div className="bg-[rgba(140,140,156,0.12)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="title type - Core Elements">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] justify-center leading-[0] not-italic opacity-60 overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px]">
        <p className="leading-none overflow-ellipsis overflow-hidden whitespace-pre">민원(1)</p>
      </div>
    </div>
  );
}

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

function Options() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="options">
      <Sorting />
      <Search />
      <Btns />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(255,71,19,0.1)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="badge-공용">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">공유</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #FFCC66)" id="Vector" stroke="var(--stroke-0, #EAB308)" />
        </g>
      </svg>
    </div>
  );
}

function IconFavoriteActive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-favorite:active">
      <Component />
    </div>
  );
}

function Btns1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <IconFavoriteActive />
    </div>
  );
}

function List() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Badge />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">배송 지연·제품 불량·서비스 오류 등 고객 불만 제기 시</p>
          <Btns1 />
        </div>
      </div>
    </div>
  );
}

function Type() {
  return (
    <div className="bg-[rgba(24,24,27,0.08)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="type">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">개인</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #3F3F46)" id="Vector" opacity="0.2" stroke="var(--stroke-0, #18181B)" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <Component1 />
    </div>
  );
}

function Btns2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <Frame1 />
    </div>
  );
}

function ListActive() {
  return (
    <div className="bg-[#f4f7ff] relative shrink-0 w-full" data-name="List:active">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[12px] items-center p-[10px] relative w-full">
          <Type />
          <p className="[text-underline-position:from-font] decoration-solid font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px] underline w-[308px]">먼저 접수된 순서대로 상담사가 응답을 준비하고 있습니다.</p>
          <Btns2 />
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(255,71,19,0.1)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="badge-공용">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">공유</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #3F3F46)" id="Vector" opacity="0.2" stroke="var(--stroke-0, #18181B)" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <Component2 />
    </div>
  );
}

function Btns3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <Frame2 />
    </div>
  );
}

function List1() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Badge1 />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">고객이 처음 연결되었을 때</p>
          <Btns3 />
        </div>
      </div>
    </div>
  );
}

function Iconbutton() {
  return (
    <div className="bg-[rgba(24,24,27,0.08)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">개인</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #FFCC66)" id="Vector" stroke="var(--stroke-0, #EAB308)" />
        </g>
      </svg>
    </div>
  );
}

function IconFavoriteActive1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-favorite:active">
      <Component3 />
    </div>
  );
}

function Btns4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <IconFavoriteActive1 />
    </div>
  );
}

function List2() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Iconbutton />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">고객님의 문의를 접수하였습니다.</p>
          <Btns4 />
        </div>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(255,71,19,0.1)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="badge-공용">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">공유</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #3F3F46)" id="Vector" opacity="0.2" stroke="var(--stroke-0, #18181B)" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <Component4 />
    </div>
  );
}

function Btns5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <Frame3 />
    </div>
  );
}

function List3() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Badge2 />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">기술 지원·설정 안내·절차 설명 등 실질 해결 단계</p>
          <Btns5 />
        </div>
      </div>
    </div>
  );
}

function Iconbutton1() {
  return (
    <div className="bg-[rgba(24,24,27,0.08)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">개인</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #3F3F46)" id="Vector" opacity="0.2" stroke="var(--stroke-0, #18181B)" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <Component5 />
    </div>
  );
}

function Btns6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <Frame4 />
    </div>
  );
}

function List4() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Iconbutton1 />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">더 궁금한 점은 언제든지 문의해 주세요.</p>
          <Btns6 />
        </div>
      </div>
    </div>
  );
}

function Iconbutton2() {
  return (
    <div className="bg-[rgba(24,24,27,0.08)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">개인</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #3F3F46)" id="Vector" opacity="0.2" stroke="var(--stroke-0, #18181B)" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <Component6 />
    </div>
  );
}

function Btns7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <Frame5 />
    </div>
  );
}

function List5() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Iconbutton2 />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">현재 대기 중인 고객님이 있습니다.</p>
          <Btns7 />
        </div>
      </div>
    </div>
  );
}

function Iconbutton3() {
  return (
    <div className="bg-[rgba(24,24,27,0.08)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">개인</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #FFCC66)" id="Vector" stroke="var(--stroke-0, #EAB308)" />
        </g>
      </svg>
    </div>
  );
}

function IconFavoriteActive2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-favorite:active">
      <Component7 />
    </div>
  );
}

function Btns8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <IconFavoriteActive2 />
    </div>
  );
}

function List6() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Iconbutton3 />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">상담이 시작되었습니다. 어떻게 도와드릴까요?</p>
          <Btns8 />
        </div>
      </div>
    </div>
  );
}

function Iconbutton4() {
  return (
    <div className="bg-[rgba(24,24,27,0.08)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">개인</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #FFCC66)" id="Vector" stroke="var(--stroke-0, #EAB308)" />
        </g>
      </svg>
    </div>
  );
}

function IconFavoriteActive3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-favorite:active">
      <Component8 />
    </div>
  );
}

function Btns9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <IconFavoriteActive3 />
    </div>
  );
}

function List7() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Iconbutton4 />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">기다려 주셔서 감사합니다.</p>
          <Btns9 />
        </div>
      </div>
    </div>
  );
}

function Iconbutton5() {
  return (
    <div className="bg-[rgba(24,24,27,0.08)] box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.4] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">개인</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <path d={svgPaths.p2abaebc0} fill="var(--fill-0, #3F3F46)" id="Vector" opacity="0.2" stroke="var(--stroke-0, #18181B)" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <Component9 />
    </div>
  );
}

function Btns10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <Frame6 />
    </div>
  );
}

function List8() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-100 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Iconbutton5 />
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">상담사가 연결되었습니다.</p>
          <Btns10 />
        </div>
      </div>
    </div>
  );
}

function Iconbutton6() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex h-[24px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#68768b] text-[13px] text-nowrap whitespace-pre">개인</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="즐겨찾기">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ì¦ê²¨ì°¾ê¸°">
          <g id="Vector" opacity="0.2">
            <path d={svgPaths.p24914880} fill="var(--fill-0, #18181B)" />
            <path d={svgPaths.p2abaebc0} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]">
      <Component10 />
    </div>
  );
}

function Btns11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="btns">
      <Frame7 />
    </div>
  );
}

function List9() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center p-[10px] relative w-full">
          <Iconbutton6 />
          <p className="basis-0 font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.28px]">고객님의 요청 사항을 확인 중입니다.</p>
          <Btns11 />
        </div>
      </div>
    </div>
  );
}

function ListGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListGroup">
      <List />
      <ListActive />
      <List1 />
      <List2 />
      <List3 />
      <List4 />
      <List5 />
      <List6 />
      <List7 />
      <List8 />
      <List9 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute bg-white bottom-0 h-[56px] left-1/2 translate-x-[-50%] w-[408px]" data-name="bottom">
      <div className="absolute h-[44px] left-0 right-0 top-0" data-name="paging">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPaging} />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[16px] py-[12px] relative size-full">
          <MenuItem />
          <Tabs />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(244, 244, 245, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 1">
                <line id="Line 2" stroke="var(--stroke-0, #F4F4F5)" x2="408" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Options />
          <ListGroup />
          <Bottom />
        </div>
      </div>
    </div>
  );
}