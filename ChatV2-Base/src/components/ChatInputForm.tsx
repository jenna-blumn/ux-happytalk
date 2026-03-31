import svgPaths from "../imports/svg-ie6agv95ud";

function HAiAssistantText() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="hAI assistant text">
      <p className="bg-clip-text font-['Pretendard:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-center text-nowrap tracking-[-0.43px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        AI
      </p>
    </div>
  );
}

function Ai() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="ai">
      <div className="relative shrink-0 size-[16px]" data-name="AI Assistant icon">
        <div className="absolute inset-[14.21%_14.21%_14.21%_10.05%]" data-name="Union">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1d828280} fill="url(#paint0_linear_4_12208)" id="Union" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_12208" x1="-0.000132891" x2="12.6515" y1="7.56828e-06" y2="0.622841">
                <stop stopColor="#16ECA8" />
                <stop offset="0.504808" stopColor="#4784FF" />
                <stop offset="1" stopColor="#6417FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <HAiAssistantText />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Heart">
          <path d={svgPaths.p2ac0be80} fill="var(--fill-0, #8A8A8E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d={svgPaths.p2e01a700} fill="var(--fill-0, #8A8A8E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="bg-white box-border content-stretch flex gap-[4px] h-[30px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Ai_btn">
        <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <Heart />
        <p className="font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#38373e] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">친절하게</p>
      </div>
      <div className="bg-white box-border content-stretch flex gap-[4px] h-[30px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Ai_btn">
        <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <Check />
        <p className="font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#38373e] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">맞춤법</p>
      </div>
    </div>
  );
}

function GroupAi() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="group_ai">
      <Ai />
      <Frame1 />
    </div>
  );
}

function Send() {
  return (
    <div className="bg-[#f8f9fa] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="send">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Reaction Icon">
        <div className="absolute inset-[12.5%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(158, 168, 188, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p36b39200} fill="var(--fill-0, #9EA8BC)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CounselorMessage() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Counselor Message">
      <div className="basis-0 font-['Pretendard:Medium',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#8a8a8e] text-[15px] tracking-[-0.23px]">
        <p className="mb-px">메시지를 입력해 주세요.</p>
        <p>단축키는 입력창을 먼저 클릭한 후 사용해 주세요.</p>
      </div>
      <Send />
    </div>
  );
}

function Paperclip() {
  return (
    <div className="absolute inset-[12.5%]" data-name="paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="paperclip">
          <path d={svgPaths.p1f518800} fill="var(--fill-0, #8294AE)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="iconbutton-파일첨부">
      <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="ic-chat-center-attachment">
        <Paperclip />
      </div>
    </div>
  );
}

function Iconbutton1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="iconbutton-이모지">
      <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="ic-chat-center-emoji">
        <div className="absolute inset-[12.5%]" data-name="Shape">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(130, 148, 174, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path clipRule="evenodd" d={svgPaths.p1f3c8b40} fill="var(--fill-0, #8294AE)" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Iconbutton2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="iconbutton-상담템플릿">
      <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="ic-chat-center-template">
        <div className="absolute inset-[18.75%_10.42%_18.75%_6.25%]" data-name="Shape">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(130, 148, 174, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
              <path clipRule="evenodd" d={svgPaths.p14e280} fill="var(--fill-0, #8294AE)" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute inset-[12.5%]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="link">
          <path clipRule="evenodd" d={svgPaths.pe25c290} fill="var(--fill-0, #8294AE)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="iconbutton-링크버튼">
      <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="ic-chat-center-link">
        <Link />
      </div>
    </div>
  );
}

function Iconbutton4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="iconbutton-단축키안내">
      <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="ic-chat-center-keyboard">
        <div className="absolute bottom-1/4 left-[6.25%] right-[12.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(130, 148, 174, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 8">
              <path d={svgPaths.p24e31e40} fill="var(--fill-0, #8294AE)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-[18.75%] right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(130, 148, 174, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.pce1200} fill="var(--fill-0, #8294AE)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="group">
      <Iconbutton />
      <Iconbutton1 />
      <Iconbutton2 />
      <Iconbutton3 />
      <Iconbutton4 />
    </div>
  );
}

function LucideTrash() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="lucide/trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/trash-2">
          <path d={svgPaths.p2aa76000} id="Vector" stroke="var(--stroke-0, #8294AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="iconbutton-초기화">
      <LucideTrash />
    </div>
  );
}

function Attachments() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Attachments">
      <Group />
      <Iconbutton5 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(60,60,67,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[10px] pt-[20px] px-[20px] relative w-full">
          <CounselorMessage />
          <Attachments />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[10px] py-[8px] relative w-full">
          <GroupAi />
          <Input />
        </div>
      </div>
    </div>
  );
}

export function ChatInputForm() {
  return (
    <div className="relative shrink-0 w-full" data-name="Write">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-0 relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}
