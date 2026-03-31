import svgPaths from "../../imports/svg-18bsoavcqy";

function Star() {
  return (
    <div className="absolute inset-[16.8%_16.1%_14.93%_12.57%]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
        <g id="star">
          <path d={svgPaths.pac03d80} fill="var(--fill-0, var(--sort-amber, #F1C944))" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function TabFavorite() {
  return (
    <div className="box-border content-stretch flex gap-[2px] h-full items-center px-0 py-[10px] relative shrink-0" data-name="tab-favorite1">
      <div aria-hidden="true" className="absolute border-[0px_0px_3px] border-primary border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[16px]" data-name="ic-list-star-yellow">
        <Star />
      </div>
      <p className="font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">홍길동</p>
    </div>
  );
}

function Star1() {
  return (
    <div className="absolute inset-[16.8%_16.1%_14.93%_12.57%]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
        <g id="star">
          <path d={svgPaths.pac03d80} fill="var(--fill-0, #F1C944)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function TabFavorite1() {
  return (
    <div className="box-border content-stretch flex gap-[2px] h-full items-center px-0 py-[10px] relative shrink-0" data-name="tab-favorite2">
      <div className="relative shrink-0 size-[16px]" data-name="ic-list-star-yellow">
        <Star1 />
      </div>
      <p className="font-sans font-bold leading-[20px] not-italic opacity-60 relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">김길동</p>
    </div>
  );
}

function TabFavorite2() {
  return (
    <div className="box-border content-stretch flex gap-[2px] h-full items-center px-0 py-[10px] relative shrink-0" data-name="tab-favorite3">
      <p className="font-sans font-bold leading-[20px] not-italic opacity-60 relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">이길동</p>
    </div>
  );
}

function TabFavorite3() {
  return (
    <div className="box-border content-stretch flex gap-[2px] h-full items-center px-0 py-[10px] relative shrink-0" data-name="tab-favorite4">
      <p className="font-sans font-bold leading-[20px] not-italic opacity-60 relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px] whitespace-pre">최길동</p>
    </div>
  );
}

function Hover() {
  return <div className="absolute inset-0 rounded-[4px]" data-name="hover" />;
}

function TabsGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="tabs-group">
      <TabFavorite />
      <TabFavorite1 />
      <TabFavorite2 />
      <TabFavorite3 />
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button-add">
        <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
        <Hover />
        <div className="opacity-60 overflow-clip relative shrink-0 size-[16px]" data-name="ic-button-more">
          <div className="absolute left-1/2 overflow-clip size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon / Plus">
            <div className="absolute inset-[20.833%]" data-name="Vector">
              <div className="absolute inset-[-8.036%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={svgPaths.p18191e80} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0">
      <p className="font-sans font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-zinc-400 tracking-[-0.15px] w-full">5</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function IconChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon / ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / ChevronDown">
          <path d="M3 4L6 8L9 4" fill="var(--fill-0, #18181B)" id="Vector" stroke="var(--stroke-2, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BtnXsFavorite() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="btn-xs-favorite">
      <div aria-hidden="true" className="absolute border border-[rgba(60,60,67,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-sans leading-none not-italic opacity-50 relative shrink-0 text-[12px] text-nowrap text-zinc-900 tracking-[-0.24px] whitespace-pre">즐겨찾기</p>
      <Frame />
      <IconChevronDown />
    </div>
  );
}

export function ChatFavoriteTabs() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="chat-favorite-tabs">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[48px] items-center pl-[12px] pr-[8px] py-0 relative w-full">
          <TabsGroup />
          <BtnXsFavorite />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
