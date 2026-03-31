import svgPaths from "../imports/svg-lavpwqak8k";

function Badge() {
  return (
    <div className="bg-[#d7efd8] box-border content-stretch flex gap-[10px] items-center overflow-clip p-[4px] relative rounded-[2px] shrink-0" data-name="badge">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[8px] not-italic relative shrink-0 text-[#2c8a30] text-[8px] text-nowrap tracking-[-0.4px] whitespace-pre">NEW</p>
    </div>
  );
}

function Notice() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Notice">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[0px] text-[13px] text-gray-900 text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">
        <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif]">2분 후</span>
        <span className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif]">{` 상담방 알람이 울립니다.`}</span>
      </p>
      <Badge />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="menuItem">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[11px] relative rounded-[inherit] w-[210px]">
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#306afe] text-[16px] text-center text-nowrap tracking-[-0.32px] whitespace-pre">채팅상담</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="relative shrink-0 w-[210px]" data-name="menuItem">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[11px] relative rounded-[inherit] w-[210px]">
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-slate-500 tracking-[-0.32px] whitespace-pre">상담콜</p>
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
          <path d={svgPaths.p8e9ab80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <path d={svgPaths.p3bf56100} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function Dropdown() {
  return (
    <div className="bg-white box-border content-stretch flex h-[32px] items-center justify-center px-[10px] py-0 relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="dropdown">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[13px] text-nowrap text-right text-zinc-900 tracking-[-0.26px] whitespace-pre">
        <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif]">홍길동</span>님(happytalk_hong)
      </p>
      <CaretDown1 />
    </div>
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
