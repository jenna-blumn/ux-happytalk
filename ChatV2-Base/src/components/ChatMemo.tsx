import svgPaths from "../imports/svg-18bsoavcqy";

export function ChatMemo() {
  return (
    <div className="bg-[#ffe79a] relative shrink-0 w-full" data-name="memo-fixed">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[6px] relative w-full">
          <div className="opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon / SquareGanttChart">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <div className="absolute inset-[-4.167%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={svgPaths.p1638cb00} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px]">이 고객은 친절한 말투를 좋아하며, 스몰토크를 시도하니 유의하세요.</p>
        </div>
      </div>
    </div>
  );
}
