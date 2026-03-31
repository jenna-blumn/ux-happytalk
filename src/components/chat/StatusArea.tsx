import svgPaths from "../../imports/svg-tso47w9u0p";

interface StatusCardProps {
  label: string;
  count: string | number;
  isActive?: boolean;
}

function StatusCard({ label, count, isActive = false }: StatusCardProps) {
  const textColor = isActive ? "text-white" : "text-content-main";
  const bgColor = isActive ? "bg-slate-500" : "";

  return (
    <div className={`basis-0 ${bgColor} grow min-h-px min-w-px relative rounded-[8px] shrink-0`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[20px] py-[10px] relative w-full">
          <div className={`content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center ${textColor}`}>
            <p className={`font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] relative shrink-0 text-[13px] text-nowrap tracking-[-0.26px] whitespace-pre ${isActive ? 'opacity-[0.59]' : 'opacity-60'}`}>
              {label}
            </p>
            <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">
              {count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Tabs" role="tablist">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <button
        className="box-border content-stretch flex h-[48px] items-center justify-center px-0 py-[8px] relative shrink-0"
        role="tab"
        aria-selected="true"
      >
        <div aria-hidden="true" className="absolute border-primary border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-primary text-[18px] text-nowrap tracking-[-0.36px] whitespace-pre">내 상담 현황</p>
      </button>
      <button
        className="box-border content-stretch flex h-[48px] items-center justify-center px-0 py-[8px] relative shrink-0"
        role="tab"
        aria-selected="false"
      >
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[18px] text-nowrap text-content-main tracking-[-0.36px] whitespace-pre">전체 상담</p>
      </button>
    </div>
  );
}

function ChatStatus() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Chat-Status">
      <StatusCard label="대기" count={12} isActive={true} />
      <StatusCard label="문의" count={50} />
      <StatusCard label="응대" count="999" />
      <StatusCard label="종료" count="1,000" />
    </div>
  );
}

function SortHold() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center opacity-80 overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="sort-hold">
      <div className="overflow-clip relative shrink-0 size-[10.667px]" data-name="Icon / AlarmClock">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-6.25%_-5.63%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={svgPaths.pf80bd00} id="Vector" stroke="var(--stroke-0, var(--text-main))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[13px] text-nowrap text-content-main tracking-[-0.26px] whitespace-pre">알람 1건</p>
    </div>
  );
}

function SortHold1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center opacity-80 overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="sort-hold">
      <div className="overflow-clip relative shrink-0 size-[10.667px]" data-name="Icon / CirclePause">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <div className="absolute inset-[-5.625%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p2f2f0700} id="Vector" stroke="var(--stroke-0, var(--text-main))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">보류 0건</p>
    </div>
  );
}

function StatusAdditional() {
  return (
    <div className="relative shrink-0 w-full" data-name="Status additioal">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-end px-[12px] py-0 relative w-full">
          <SortHold />
          <SortHold1 />
        </div>
      </div>
    </div>
  );
}

function StatusAreaMain() {
  return (
    <div className="relative shrink-0 w-full" data-name="Status area">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative w-full">
          <ChatStatus />
        </div>
      </div>
    </div>
  );
}

export function StatusArea() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <Tabs />
      <StatusAreaMain />
      <StatusAdditional />
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-solid border-zinc-400 inset-0 pointer-events-none" />
    </div>
  );
}