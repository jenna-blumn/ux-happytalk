import svgPaths from "./svg-tso47w9u0p";
import img from "figma:asset/7cfaa69b592af7ec8c8808b7a7f0c285ad472129.png";
import img1 from "figma:asset/ed41c5709f8d461cd82c5cea29580be586f2bd83.png";
import img2 from "figma:asset/5fbb185eee7a3c1b5efdd89e3c33fdade182dcea.png";
import img3 from "figma:asset/11e5fbdbb2aa968ddc6769ff9038514ec26c2c1f.png";
import img4 from "figma:asset/a899a1cc8626d803fbaf3549f598911cb94f762e.png";

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="box-border content-stretch flex h-[48px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Core Elements - tab - Section primary">
        <div aria-hidden="true" className="absolute border-[#306afe] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#306afe] text-[18px] text-nowrap tracking-[-0.36px] whitespace-pre">내 상담 현황</p>
      </div>
      <div className="box-border content-stretch flex h-[48px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Core Elements - tab - Section primary">
        <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[18px] text-nowrap text-zinc-900 tracking-[-0.36px] whitespace-pre">전체 상담</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center text-white w-[23px]" data-name="Text">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] opacity-[0.59] relative shrink-0 text-[13px] text-nowrap tracking-[-0.26px] whitespace-pre">대기</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[18px] w-[min-content]">12</p>
    </div>
  );
}

function Active() {
  return (
    <div className="basis-0 bg-slate-500 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Active">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[20px] py-[10px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center text-zinc-900 w-[23px]" data-name="Text">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] opacity-60 relative shrink-0 text-[13px] text-nowrap tracking-[-0.26px] whitespace-pre">문의</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[18px] w-[min-content]">50</p>
    </div>
  );
}

function None() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="None">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[20px] py-[10px] relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center text-nowrap text-zinc-900 whitespace-pre" data-name="Text">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] opacity-60 relative shrink-0 text-[13px] tracking-[-0.26px]">응대</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">999</p>
    </div>
  );
}

function None1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="None">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[20px] py-[10px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center text-nowrap text-zinc-900 whitespace-pre" data-name="Text">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] opacity-60 relative shrink-0 text-[13px] tracking-[-0.26px]">종료</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">1,000</p>
    </div>
  );
}

function None2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="None">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[20px] py-[10px] relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function ChatStatus() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Chat-Status">
      <Active />
      <None />
      <None1 />
      <None2 />
    </div>
  );
}

function StatusArea() {
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

function SortHold() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center opacity-80 overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="sort-hold">
      <div className="overflow-clip relative shrink-0 size-[10.667px]" data-name="Icon / AlarmClock">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-6.25%_-5.63%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
              <path d={svgPaths.pf80bd00} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">알람 1건</p>
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
              <path d={svgPaths.p2f2f0700} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">보류 0건</p>
    </div>
  );
}

function StatusAdditioal() {
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
    <div className="bg-white box-border content-stretch flex items-center mr-[-1px] pl-[8px] pr-[4px] py-[4px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">상담내용</p>
      <CaretDown1 />
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

function Option1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic opacity-40 relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">검색어 입력</p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-px py-0 relative shrink-0 w-full" data-name="row1">
      <Option />
      <Option1 />
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

function Option2() {
  return (
    <div className="bg-white box-border content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">플래그</p>
      <CaretDown3 />
    </div>
  );
}

function CaretDown4() {
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

function CaretDown5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="caret-down">
      <CaretDown4 />
    </div>
  );
}

function Option3() {
  return (
    <div className="bg-white box-border content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.2] not-italic opacity-80 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">고객등급</p>
      <CaretDown5 />
    </div>
  );
}

function CaretDown6() {
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

function CaretDown7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="caret-down">
      <CaretDown6 />
    </div>
  );
}

function Option4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <p className="basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">최근 상담 시간</p>
          <CaretDown7 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="row2">
      <Option2 />
      <Option3 />
      <Option4 />
    </div>
  );
}

function DetailOption() {
  return (
    <div className="relative shrink-0 w-full" data-name="Detail option">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Row />
          <Row1 />
        </div>
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="content-stretch flex font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] gap-[4px] items-center leading-[1.2] not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre" data-name="count">
      <p className="relative shrink-0">검색 결과</p>
      <p className="relative shrink-0">150개</p>
    </div>
  );
}

function Iconbutton() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex h-[24px] items-center justify-center opacity-60 px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">일괄처리</p>
    </div>
  );
}

function ArrowsClockwise() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowsClockwise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowsClockwise">
          <path d={svgPaths.p6391d00} fill="var(--fill-0, #18181B)" id="Vector" stroke="var(--stroke-0, #18181B)" strokeWidth="0.0625" />
        </g>
      </svg>
    </div>
  );
}

function Iconbutton1() {
  return (
    <div className="bg-zinc-100 content-stretch flex items-center justify-center opacity-60 relative rounded-[4px] shrink-0 size-[24px]" data-name="iconbutton">
      <ArrowsClockwise />
    </div>
  );
}

function Iconbutton2() {
  return (
    <div className="bg-zinc-100 content-stretch flex items-center justify-center opacity-60 relative rounded-[4px] shrink-0 size-[24px]" data-name="iconbutton">
      <div className="overflow-clip relative shrink-0 size-[10.667px]" data-name="Icon / Rows2">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.25%]" style={{ "--stroke-0": "rgba(24, 24, 27, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.pab22b00} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Function() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="function">
      <Iconbutton />
      <Iconbutton1 />
      <Iconbutton2 />
    </div>
  );
}

function Title() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full" data-name="Title-검색결과">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[16px] py-[8px] relative w-full">
          <Count />
          <Function />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group8Copy() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_10023" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_10023)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy />
    </div>
  );
}

function Component1Row() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon />
      <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">상품이 좀 이상한데요!! 환불 요청했는데 답변이 없어요. 품질이 기대 이하입니다.</p>
    </div>
  );
}

function BadgeCall() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] opacity-75 relative shrink-0 tracking-[-0.24px]">휴대폰</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] opacity-75 relative shrink-0">미확인</p>
    </div>
  );
}

function Component2Row() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall />
    </div>
  );
}

function Frame15Copy() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(6, 182, 212, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #06B6D4)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy />
    </div>
  );
}

function Information() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row />
      <Component2Row />
      <Component4Row />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">1분전</p>
    </div>
  );
}

function Group8Copy1() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_10023" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_10023)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon1() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy1 />
    </div>
  );
}

function Component1Row1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon1 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">배송이 늦어지고 있어요.</p>
    </div>
  );
}

function BadgeCall1() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] opacity-80 relative shrink-0 tracking-[-0.24px]">휴대폰</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] opacity-80 relative shrink-0">010-0090-9999</p>
    </div>
  );
}

function Component2Row1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall1 />
    </div>
  );
}

function Frame15Copy1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 197, 94, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #22C55E)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy1 />
    </div>
  );
}

function Information1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row1 />
      <Component2Row1 />
      <Component4Row1 />
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">5분전</p>
    </div>
  );
}

function Group8Copy2() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_10023" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_10023)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon2() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy2 />
    </div>
  );
}

function Component1Row2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon2 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">상품이 잘못 도착했어요!</p>
    </div>
  );
}

function BadgeCall2() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] opacity-80 relative shrink-0 tracking-[-0.24px]">휴대폰</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] opacity-80 relative shrink-0">010-0090-9999</p>
    </div>
  );
}

function Component2Row2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall2 />
    </div>
  );
}

function Frame15Copy2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(6, 182, 212, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #06B6D4)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy2 />
    </div>
  );
}

function Information2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row2 />
      <Component2Row2 />
      <Component4Row2 />
    </div>
  );
}

function Time2() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">10분전</p>
    </div>
  );
}

function Group8Copy3() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_10023" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_10023)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon3() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy3 />
    </div>
  );
}

function Component1Row3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon3 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">환불 요청했는데 답변이 없어요.</p>
    </div>
  );
}

function BadgeCall3() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] opacity-80 relative shrink-0 tracking-[-0.24px]">휴대폰</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] opacity-80 relative shrink-0">010-0090-9999</p>
    </div>
  );
}

function Component2Row3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall3 />
    </div>
  );
}

function Frame15Copy3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(6, 182, 212, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #06B6D4)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy3 />
    </div>
  );
}

function Information3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row3 />
      <Component2Row3 />
      <Component4Row3 />
    </div>
  );
}

function Time3() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">15분전</p>
    </div>
  );
}

function Group8Copy4() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_10023" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_10023)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon4() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy4 />
    </div>
  );
}

function Component1Row4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon4 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">품질이 기대 이하입니다.</p>
    </div>
  );
}

function BadgeCall4() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] opacity-80 relative shrink-0 tracking-[-0.24px]">휴대폰</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] opacity-80 relative shrink-0">010-0090-9999</p>
    </div>
  );
}

function Component2Row4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall4 />
    </div>
  );
}

function Frame15Copy4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(6, 182, 212, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #06B6D4)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy4 />
    </div>
  );
}

function Information4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row4 />
      <Component2Row4 />
      <Component4Row4 />
    </div>
  );
}

function Time4() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">20분전</p>
    </div>
  );
}

function Group8Copy5() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_10023" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_10023)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon5() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy5 />
    </div>
  );
}

function Component1Row5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon5 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">상품이 이상한 냄새가 나요.</p>
    </div>
  );
}

function BadgeCall5() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] opacity-80 relative shrink-0 tracking-[-0.24px]">휴대폰</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] opacity-80 relative shrink-0">010-0090-9999</p>
    </div>
  );
}

function Component2Row5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall5 />
    </div>
  );
}

function Frame15Copy5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(6, 182, 212, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #06B6D4)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy5 />
    </div>
  );
}

function Information5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row5 />
      <Component2Row5 />
      <Component4Row5 />
    </div>
  );
}

function Time5() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">25분전</p>
    </div>
  );
}

function Group8Copy6() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_10023" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_10023)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon6() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy6 />
    </div>
  );
}

function Component1Row6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon6 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">사용법이 복잡해요.</p>
    </div>
  );
}

function BadgeCall6() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] opacity-80 relative shrink-0 tracking-[-0.24px]">휴대폰</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] opacity-80 relative shrink-0">010-0090-9999</p>
    </div>
  );
}

function Component2Row6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall6 />
    </div>
  );
}

function Frame15Copy6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(6, 182, 212, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #06B6D4)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy6 />
    </div>
  );
}

function Information6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row6 />
      <Component2Row6 />
      <Component4Row6 />
    </div>
  );
}

function Time6() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">30분전</p>
    </div>
  );
}

function Group8Copy7() {
  return (
    <div className="h-[15.611px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPaths.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_1_9848" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPaths.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_1_9848)">
              <path clipRule="evenodd" d={svgPaths.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Syncicon7() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="syncicon">
      <Group8Copy7 />
    </div>
  );
}

function Component1Row7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon7 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">고객센터와 통화가 어렵네요.</p>
    </div>
  );
}

function BadgeCall7() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex font-['Pretendard:Medium',sans-serif] gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-neutral-600 text-nowrap tracking-[-0.15px] whitespace-pre" data-name="badge-call">
      <p className="relative shrink-0">서비스</p>
      <p className="relative shrink-0">불만</p>
    </div>
  );
}

function Component2Row7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall7 />
    </div>
  );
}

function Frame15Copy7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
    </div>
  );
}

function Component4Row7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <div className="relative shrink-0 size-[24px]" data-name="flag v2">
        <div className="absolute inset-0" data-name="Rectangle Copy 96">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(6, 182, 212, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
              <g id="Path">
                <path d={svgPaths.p36329240} fill="var(--fill-0, #06B6D4)" />
                <path d={svgPaths.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[20.83%_79.17%_16.67%_20.83%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[15px]">
            <div className="relative size-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <line id="Line 7" stroke="var(--stroke-0, #2E2E2E)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2" x1="1" x2="14" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame15Copy7 />
    </div>
  );
}

function Information7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row7 />
      <Component2Row7 />
      <Component4Row7 />
    </div>
  );
}

function Time7() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#306afe] text-[13px] text-nowrap text-right tracking-[-0.28px] whitespace-pre">35분전</p>
    </div>
  );
}

function ChatList() {
  return (
    <div className="bg-zinc-200 content-stretch flex flex-col h-[746px] items-start overflow-clip relative shrink-0 w-full" data-name="Chat-List">
      <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <Information />
            <Time />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <Information1 />
            <Time1 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <Information2 />
            <Time2 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <Information3 />
            <Time3 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <Information4 />
            <Time4 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <Information5 />
            <Time5 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
            <Information6 />
            <Time6 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white box-border content-stretch flex gap-[4px] items-start overflow-clip p-[12px] relative shrink-0 w-[420px]" data-name="chat-list-item">
        <Information7 />
        <Time7 />
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

export default function ChatList1() {
  return (
    <div className="bg-white relative size-full" data-name="Chat List">
      <div className="content-stretch flex flex-col items-start max-w-inherit min-w-inherit relative size-full">
        <Tabs />
        <StatusArea />
        <StatusAdditioal />
        <DetailOption />
        <Title />
        <ChatList />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-solid border-zinc-400 inset-0 pointer-events-none" />
    </div>
  );
}