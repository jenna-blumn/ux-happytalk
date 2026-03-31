import svgPaths from "../imports/svg-lavpwqak8k";

function Badge() {
  return (
    <div className="bg-badge-green box-border content-stretch flex gap-[10px] items-center overflow-clip p-[4px] relative rounded-[2px] shrink-0" data-name="badge">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[8px] not-italic relative shrink-0 text-content-green text-[8px] text-nowrap tracking-[-0.4px] whitespace-pre">NEW</p>
    </div>
  );
}

function Notice() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Notice">
      <p className="font-sans leading-[1.2] not-italic opacity-80 relative shrink-0 text-[0px] text-[13px] text-gray-900 text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">
        <span className="font-sans font-bold">2분 후</span>
        <span className="font-sans">{` 상담방 알람이 울립니다.`}</span>
      </p>
      <Badge />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="menuItem">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[11px] relative rounded-[inherit] w-[210px]">
        <p className="font-sans font-bold leading-[22px] not-italic relative shrink-0 text-primary text-[16px] text-center text-nowrap tracking-[-0.32px] whitespace-pre">해피톡</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="menuItem">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[11px] relative rounded-[inherit] w-[210px]">
        <p className="font-sans font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-slate-500 tracking-[-0.32px] whitespace-pre">상담콜</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Maqee() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Maqee">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-0 relative size-full">
          <Notice />
        </div>
      </div>
    </div>
  );
}

function LucideBell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/bell">
          <path d={svgPaths.p8e9ab80} id="Vector" stroke="var(--stroke-0, var(--text-sub))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconAlert() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="Button-icon-alert">
      <LucideBell />
    </div>
  );
}

function LucideFlaskConical() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/flask-conical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/flask-conical">
          <path d={svgPaths.p3bf56100} id="Vector" stroke="var(--stroke-0, var(--text-sub))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconLabs() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="Button-icon-labs">
      <LucideFlaskConical />
    </div>
  );
}

function IcHeadset() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ic_headset">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ic_headset">
          <path clipRule="evenodd" d={svgPaths.p38297b00} fill="var(--fill-0, #E3FFE4)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconUserstatus() {
  return (
    <div className="bg-green-600 box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="Button-icon-userstatus">
      <IcHeadset />
    </div>
  );
}


function Dropdown() {
  return (
    <button
      className="bg-white h-[32px] px-[10px] py-[6px] rounded-[6px] shadow-sort-card ring-1 ring-zinc-900/15 ring-inset flex items-center justify-center gap-[4px] overflow-hidden hover:bg-zinc-50 transition-colors font-sans"
      data-name="dropdown"
    >
      <div className="px-[2px] flex items-center justify-center">
        <p className="text-zinc-900 text-[14px] font-normal leading-[20px] whitespace-nowrap">
          <span className="font-bold">홍길동</span>님(happytalk_hong)
        </p>
      </div>
      <div className="size-[16px] relative overflow-hidden flex items-center justify-center">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L4.5 4.5L8 1.5" stroke="#6F6F77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}

function Account() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-full items-center justify-end overflow-clip px-[16px] py-0 relative shrink-0" data-name="Account">
      <ButtonIconAlert />
      <ButtonIconLabs />
      <ButtonIconUserstatus />
      <Dropdown />
    </div>
  );
}

export function Header() {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <MenuItem />
        <MenuItem1 />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Maqee />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Account />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-300 inset-0 pointer-events-none" />
    </div>
  );
}
