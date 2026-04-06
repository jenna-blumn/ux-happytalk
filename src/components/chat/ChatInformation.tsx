import svgPaths from "../../imports/svg-18bsoavcqy";
import React, { useState } from "react";

function Breadcrumb() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Breadcrumb">
      <p className="[white-space-collapse:collapse] basis-0 font-sans grow leading-[1.2] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-zinc-900 tracking-[-0.24px]">대분류대분류대분류대분류대분류대분류대분류대분류대분류대분류대분류대분류대분류</p>
    </div>
  );
}

function Breadcrumb1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Breadcrumb">
      <p className="[white-space-collapse:collapse] basis-0 font-sans grow leading-[1.2] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-zinc-900 tracking-[-0.24px]">중분류중분류중분류중분류중분류중분류중분류중분류중분류중분류중분류중분류</p>
    </div>
  );
}

function Breadcrumb2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Breadcrumb">
      <p className="[white-space-collapse:collapse] basis-0 font-sans grow leading-[1.2] min-h-px min-w-px not-italic opacity-70 overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-zinc-900 tracking-[-0.24px]">소분류는여덟글자</p>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Breadcrumbs">
      <Breadcrumb />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic-toggle-arrow">
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6px] top-[4px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "8", "--transform-inner-height": "4" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-[4px] relative w-[8px]">
              <div className="absolute inset-[-18.75%_-9.38%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path d={svgPaths.p293c9da0} id="Vector 1761" opacity="0.4" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumb1 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic-toggle-arrow">
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6px] top-[4px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "8", "--transform-inner-height": "4" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-[4px] relative w-[8px]">
              <div className="absolute inset-[-18.75%_-9.38%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path d={svgPaths.p293c9da0} id="Vector 1761" opacity="0.4" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumb2 />
    </div>
  );
}

function Elephant() {
  return (
    <div className="absolute inset-[20.83%_12.5%_16.67%_8.33%]" data-name="elephant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="elephant">
          <path clipRule="evenodd" d={svgPaths.p3a0e5900} fill="var(--fill-0, #D22D26)" fillRule="evenodd" id="Shape" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p18791880} fill="var(--fill-0, #D22D26)" fillRule="evenodd" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-zinc-100 content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="고객 분류">
      <div className="relative shrink-0 size-[18px]" data-name="Customer Icon">
        <Elephant />
      </div>
    </div>
  );
}

function Crown() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_12.5%]" data-name="crown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="crown">
          <path clipRule="evenodd" d={svgPaths.p2a7d5500} fill="var(--fill-0, #F6CA52)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-zinc-100 content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="고객 분류">
      <div className="relative shrink-0 size-[18px]" data-name="Customer Icon">
        <Crown />
      </div>
    </div>
  );
}

function GrinHearts() {
  return (
    <div className="absolute inset-[12.5%]" data-name="grin-hearts">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="grin-hearts">
          <path clipRule="evenodd" d={svgPaths.p331b6480} fill="var(--fill-0, #F9CCD8)" fillRule="evenodd" id="Shape" opacity="0.9" />
          <path clipRule="evenodd" d={svgPaths.p1d6c9980} fill="var(--fill-0, #E63232)" fillRule="evenodd" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-zinc-100 content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="고객 분류">
      <div className="relative shrink-0 size-[18px]" data-name="Customer Icon">
        <GrinHearts />
      </div>
    </div>
  );
}

function Star2() {
  return (
    <div className="absolute inset-[16.8%_16.1%_14.93%_12.57%]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="star">
          <path d={svgPaths.p2a3a6872} fill="var(--fill-0, #E99536)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-zinc-100 content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="고객 분류">
      <div className="relative shrink-0 size-[18px]" data-name="Customer Icon">
        <Star2 />
      </div>
    </div>
  );
}

function Star3() {
  return (
    <div className="absolute inset-[16.8%_16.1%_14.93%_12.57%]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="star">
          <path d={svgPaths.p2a3a6872} fill="var(--fill-0, #F1C944)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-zinc-100 content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="고객 분류">
      <div className="relative shrink-0 size-[18px]" data-name="Customer Icon">
        <Star3 />
      </div>
    </div>
  );
}

function CustomerClassification() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-end relative shrink-0" data-name="Customer Classification">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Breadcrumbs1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Breadcrumbs">
      <Breadcrumbs />
      <CustomerClassification />
    </div>
  );
}

function MessageContainer() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Message Container">
      <div className="basis-0 font-sans font-bold grow leading-[1.2] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-nowrap text-zinc-900 tracking-[-0.3px]">
        <p className="[white-space-collapse:collapse] mb-px overflow-ellipsis overflow-hidden">해피톡 엔터프라이즈 상품에 대해서 알고싶어요. 해피 싱크에 대해서도 알고 싶고 설치 방법을 알려주세요.</p>
      </div>
    </div>
  );
}

function Star4() {
  return (
    <div className="absolute inset-[16.8%_16.1%_14.93%_12.57%]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="star">
          <path d={svgPaths.p299c100} fill="var(--fill-0, #18181B)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function FavoriteTag() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Favorite Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(60,60,67,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="opacity-[0.45] relative shrink-0 size-[12px]" data-name="Favorite Icon">
        <Star4 />
      </div>
      <p className="font-sans leading-none not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">즐겨찾기</p>
    </div>
  );
}

function TagCount() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="Tag Count">
      <p className="font-sans font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-zinc-400 tracking-[-0.15px] w-full">11</p>
    </div>
  );
}

function TagCountContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Tag Count Container">
      <TagCount />
    </div>
  );
}

function CustomerTag() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Customer Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(60,60,67,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="opacity-[0.45] overflow-clip relative shrink-0 size-[12px]" data-name="Tag Icon">
        <div className="absolute inset-[8.33%_8.35%_8.35%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.001%]" style={{ "--fill-0": "rgba(24, 24, 27, 1)", "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <g id="Vector">
                <path d={svgPaths.p21a4c3f0} fill="var(--fill-0, #18181B)" />
                <path d={svgPaths.p21f66380} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p21a4c3f0} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-sans leading-none not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">고객 태그</p>
      <TagCountContainer />
    </div>
  );
}

function TagCount1() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="Tag Count">
      <p className="font-sans font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-zinc-400 tracking-[-0.15px] w-full">8</p>
    </div>
  );
}

function TagCountContainer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Tag Count Container">
      <TagCount1 />
    </div>
  );
}

function ConsultationTag() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Consultation Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(60,60,67,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="opacity-[0.45] overflow-clip relative shrink-0 size-[12px]" data-name="Tag Icon">
        <div className="absolute inset-[8.33%_8.35%_8.35%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.001%]" style={{ "--fill-0": "rgba(24, 24, 27, 1)", "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <g id="Vector">
                <path d={svgPaths.p21a4c3f0} fill="var(--fill-0, #18181B)" />
                <path d={svgPaths.p21f66380} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p21a4c3f0} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-sans leading-none not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">상담 태그</p>
      <TagCountContainer1 />
    </div>
  );
}

function TagCount2() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="Tag Count">
      <p className="font-sans font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-zinc-400 tracking-[-0.15px] w-full">5</p>
    </div>
  );
}

function TagCountContainer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Tag Count Container">
      <TagCount2 />
    </div>
  );
}

function TaskTag() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Task Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(60,60,67,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="opacity-[0.45] overflow-clip relative shrink-0 size-[12px]" data-name="Task Icon">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-5%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
              <path d={svgPaths.pfe00c00} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-sans leading-none not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">소유 태스크</p>
      <TagCountContainer2 />
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Tags">
      <FavoriteTag />
      <CustomerTag />
      <ConsultationTag />
      <TaskTag />
    </div>
  );
}



function ButtonFunctionMasking() {
  const [isMasking, setIsMasking] = useState(false);
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button/function.Masking">
      <p className="font-sans leading-none not-italic opacity-70 relative shrink-0 text-[12px] text-nowrap text-zinc-900 tracking-[-0.24px] whitespace-pre">{`마스킹 `}</p>
      <button
        onClick={() => setIsMasking(!isMasking)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${isMasking ? 'bg-blue-500' : 'bg-zinc-300'}`}
      >
        <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${isMasking ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}

function ButtonFunctionSkin() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex gap-[4px] h-[24px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button/function.Skin">
      <div className="opacity-[0.45] overflow-clip relative shrink-0 size-[12px]" data-name="Skin Button Icon">
        <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.54%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <g id="Vector">
                <path d={svgPaths.pe7e3100} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p87afa80} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-sans leading-none not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.24px] whitespace-pre">스킨</p>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Buttons Container">
      <ButtonFunctionMasking />
      <ButtonFunctionSkin />
    </div>
  );
}

function TagsContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Tags Container">
      <Tags />
      <ButtonsContainer />
    </div>
  );
}

export function ChatInformation() {
  return (
    <div className="relative shrink-0 w-full" data-name="chat-information">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[8px] relative w-full">
          <Breadcrumbs1 />
          <MessageContainer />
          <TagsContainer />
        </div>
      </div>
    </div>
  );
}