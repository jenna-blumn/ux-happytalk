import svgPaths from "./svg-popayb2ses";

function TablerIconChevronsRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevrons-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-chevrons-right">
          <path d={svgPaths.p11c341e0} id="Vector" stroke="var(--stroke-0, #38373E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center opacity-25 px-[4px] py-0 relative rounded-[4px]" data-name="iconbutton">
      <TablerIconChevronsRight />
    </div>
  );
}

function TablerIconChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-chevron-right">
          <path d="M6 4L10 8L6 12" id="Vector" stroke="var(--stroke-0, #38373E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton1() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center opacity-25 px-[4px] py-0 relative rounded-[4px]" data-name="iconbutton">
      <TablerIconChevronRight />
    </div>
  );
}

function Iconbutton2() {
  return (
    <div className="bg-[#5988fe] box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Iconbutton3() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#38373e] text-[12px] text-center text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function TablerIconChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-chevron-right">
          <path d="M6 4L10 8L6 12" id="Vector" stroke="var(--stroke-0, #38373E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton4() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <TablerIconChevronRight1 />
    </div>
  );
}

function TablerIconChevronsRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevrons-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-chevrons-right">
          <path d={svgPaths.p11c341e0} id="Vector" stroke="var(--stroke-0, #38373E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton5() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <TablerIconChevronsRight1 />
    </div>
  );
}

export default function BottomPaging() {
  return (
    <div className="bg-white relative size-full" data-name="bottom-paging">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="flex items-center justify-center min-w-[24px] relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <Iconbutton />
            </div>
          </div>
          <div className="flex items-center justify-center min-w-[24px] relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <Iconbutton1 />
            </div>
          </div>
          <Iconbutton2 />
          <Iconbutton3 />
          <Iconbutton4 />
          <Iconbutton5 />
        </div>
      </div>
    </div>
  );
}