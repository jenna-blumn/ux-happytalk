import svgPaths from "../../imports/svg-lavpwqak8k";
import svgPathsTitle from "../../imports/svg-e8prrac6wu";
import svgPathsItem from "../../imports/svg-i12acbiyi4";
import { Button } from "@blumnai-studio/blumnai-design-system";
const placeholderImg = "";


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

function SearchButton() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Frame">
      <MagnifyingGlass />
    </div>
  );
}

function Option() {
  return (
    <Button size="xs" className="rounded-r-none ring-r-0 mr-[-1px] w-[80px]">상담내용</Button>
  );
}

function SearchInput() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="option">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <p className="basis-0 font-sans grow leading-[1.2] min-h-px min-w-px not-italic opacity-40 relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px]">검색어 입력</p>
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

function SearchRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="row1">
      <Option />
      <SearchInput />
    </div>
  );
}

function SelectOption({ label }: { label: string }) {
  return (
    <Button size="xs" className="shrink-0">{label}</Button>
  );
}

function SelectOptionGrow({ label }: { label: string }) {
  return (
    <Button size="xs" className="flex-1">{label}</Button>
  );
}

function FilterRow() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="row2">
      <SelectOption label="플래그" />
      <SelectOption label="고객등급" />
      <SelectOptionGrow label="최근 상담 시간" />
    </div>
  );
}

function DetailOption() {
  return (
    <div className="relative shrink-0 w-full" data-name="Detail option">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <SearchRow />
          <FilterRow />
        </div>
      </div>
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

function IconRows2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="IconRows2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="IconRows2">
          <path d={svgPathsTitle.p6391d00} fill="var(--fill-0, #18181B)" id="Vector" stroke="var(--stroke-0, #18181B)" strokeWidth="0.0625" />
        </g>
      </svg>
    </div>
  );
}

function Count() {
  return (
    <div className="content-stretch flex font-sans font-bold gap-[4px] items-center leading-[1.2] not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre" data-name="count">
      <p className="relative shrink-0">검색 결과</p>
      <p className="relative shrink-0">150개</p>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
        <Count />
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="bg-zinc-100 box-border content-stretch flex h-[24px] items-center justify-center opacity-60 px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="iconbutton">
            <p className="font-sans leading-none not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">일괄처리</p>
          </div>
          <div className="bg-zinc-100 content-stretch flex items-center justify-center opacity-60 relative rounded-[4px] shrink-0 size-[24px]" data-name="iconbutton">
            <ArrowsClockwise />
          </div>
          <div className="bg-zinc-100 content-stretch flex items-center justify-center opacity-60 relative rounded-[4px] shrink-0 size-[24px]" data-name="iconbutton">
            <IconRows2 />
          </div>
        </div>
      </div>
    </div>
  );
}

// Chat List Item Components
function Group8Copy() {
  return (
    <div className="h-[16px] relative shrink-0 w-[16px]" data-name="Group 8 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 8 Copy 2">
          <path clipRule="evenodd" d={svgPathsItem.p116f000} fill="var(--fill-0, #306AFE)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPathsItem.p2d14480} fill="var(--fill-0, #38AD3D)" fillRule="evenodd" id="Fill 3" />
          <g id="Group 7">
            <mask height="11" id="mask0_4_11456" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="0" y="0">
              <path clipRule="evenodd" d={svgPathsItem.p14797f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 6" />
            </mask>
            <g mask="url(#mask0_4_11456)">
              <path clipRule="evenodd" d={svgPathsItem.p3858d20} fill="var(--fill-0, #FFD23A)" fillRule="evenodd" id="Fill 5" />
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

function Component1Row({ content }: { content: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="1row">
      <Syncicon />
      <p className="[white-space-collapse:collapse] basis-0 font-sans grow leading-[1.4] min-h-px min-w-px not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-zinc-900 tracking-[-0.28px]">{content}</p>
    </div>
  );
}

function BadgeCall({ platform, status }: { platform: string; status: string }) {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[4px] h-[24px] items-center leading-[16px] not-italic overflow-clip p-[4px] relative rounded-[4px] shrink-0 text-[12px] text-nowrap text-zinc-900 whitespace-pre" data-name="badge-call">
      <p className="font-sans font-bold opacity-75 relative shrink-0 tracking-[-0.24px]">{platform}</p>
      <p className="font-sans opacity-75 relative shrink-0">{status}</p>
    </div>
  );
}

function Component2Row({ platform, status }: { platform: string; status: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="2row">
      <BadgeCall platform={platform} status={status} />
    </div>
  );
}

function Frame15Copy() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0 w-[128px]" data-name="Frame 15 Copy 9">
      <div className="relative shrink-0 size-[20px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={placeholderImg} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={placeholderImg} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 100">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={placeholderImg} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 101">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={placeholderImg} />
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={placeholderImg} />
      </div>
    </div>
  );
}

function FlagV2({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="flag v2">
      <div className="absolute inset-0" data-name="Rectangle Copy 96">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPathsItem.p1d1acb00} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Rectangle Copy 96" />
        </svg>
      </div>
      <div className="absolute inset-[20.83%_20.83%_33.33%_20.83%]" data-name="Path">
        <div className="absolute inset-0" style={{ "--fill-0": color, "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
            <g id="Path">
              <path d={svgPathsItem.p36329240} fill="var(--fill-0, #06B6D4)" />
              <path d={svgPathsItem.p9b9ec80} stroke="var(--stroke-0, black)" strokeOpacity="0.05" />
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
  );
}

function Component4Row({ flagColor }: { flagColor: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4row">
      <FlagV2 color={flagColor} />
      <Frame15Copy />
    </div>
  );
}

function Information({ content, platform, status, flagColor }: { content: string; platform: string; status: string; flagColor: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="information">
      <Component1Row content={content} />
      <Component2Row platform={platform} status={status} />
      <Component4Row flagColor={flagColor} />
    </div>
  );
}

function Time({ time }: { time: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-end relative shrink-0" data-name="time">
      <p className="font-sans leading-[18px] not-italic relative shrink-0 text-primary text-[13px] text-nowrap text-right tracking-[-0.26px] whitespace-pre">{time}</p>
    </div>
  );
}

function ChatItem({ content, platform, status, flagColor, time }: { content: string; platform: string; status: string; flagColor: string; time: string }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="chat-list-item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative size-full">
          <Information content={content} platform={platform} status={status} flagColor={flagColor} />
          <Time time={time} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ChatListItems() {
  const chatItems = [
    { content: "상품이 좀 이상한데요!! 환불 요청했는데 답변이 없어요. 품질이 기대 이하입니다.", platform: "휴대폰", status: "미확인", flagColor: "#06B6D4", time: "1분전" },
    { content: "안녕하세요 새로 출시된 제품에 대해 궁���한 점이 있어서 문의드립니다. 상세 스펙과 가격 정보를 알려주실 수 있을까요?", platform: "카카오톡", status: "대기중", flagColor: "#FF5733", time: "3분전" },
    { content: "주문한 상품이 예상 배송일보다 늦어지고 있어요. 현재 배송 상태를 확인할 수 있을까요?", platform: "인스타", status: "응대중", flagColor: "#10B981", time: "5분전" },
    { content: "제품 수령 후 하자가 발견되어 반품을 원합니다. 반품 절차에 대해 안내 부탁드립니다.", platform: "네이버톡", status: "미확인", flagColor: "#8B5CF6", time: "8분전" },
    { content: "회원가입 시 받은 할인 쿠폰을 사용하려고 하는데 적용이 안 되는 것 같아요. 확인 부탁드립니다.", platform: "카카오톡", status: "대기중", flagColor: "#F59E0B", time: "12분전" },
    { content: "관심있는 상품이 품절로 표시되어 있는데, 재입고 예정일을 알 수 있을까요?", platform: "휴대폰", status: "응대중", flagColor: "#06B6D4", time: "15분전" },
    { content: "배송 주소를 잘못 입력했는데 변경 가능한가요? 아직 출고 전이라고 나와있어요.", platform: "카카오톡", status: "미확인", flagColor: "#EF4444", time: "18분전" },
    { content: "제품 사용법을 알려주세요. 설명서가 너무 복잡해서 이해가 안 됩니다.", platform: "인스타", status: "대기중", flagColor: "#06B6D4", time: "22분전" },
    { content: "주문 취소하고 싶은데 어떻게 하나요? 급하게 필요해서 다른 곳에서 구매했습니다.", platform: "네이버톡", status: "응대중", flagColor: "#FF5733", time: "25분전" },
    { content: "사이즈 교환 가능한가요? 생각보다 작게 나왔어요.", platform: "휴대폰", status: "미확인", flagColor: "#10B981", time: "30분전" },
    { content: "포인트 적립은 언제 되나요? 구매한 지 일주일이 지났는데 아직도 반영이 안 됐어요.", platform: "카카오톡", status: "대기중", flagColor: "#8B5CF6", time: "35분전" },
    { content: "결제는 했는데 주문 확인 메일이 안 왔어요. 정상적으로 주문된 건가요?", platform: "인스타", status: "응대중", flagColor: "#F59E0B", time: "40분전" },
    { content: "동일 상품을 추가 구매하고 싶은데 합배송 가능한가요?", platform: "네이버톡", status: "미확인", flagColor: "#06B6D4", time: "45분전" },
    { content: "제품 보증기간이 어떻게 되나요? A/S 센터 위치도 알려주세요.", platform: "카카오톡", status: "대기중", flagColor: "#EF4444", time: "50분전" },
    { content: "색상이 사진과 많이 다른데 교환 가능한가요?", platform: "휴대폰", status: "응대중", flagColor: "#10B981", time: "55분전" },
    { content: "적립금 사용하려고 하는데 오류가 나요. 확인 부탁드립니다.", platform: "인스타", status: "미확인", flagColor: "#FF5733", time: "1시간전" },
    { content: "대량 구매 할인 받을 수 있나요? 20개 정도 구매 예정입니다.", platform: "네이버톡", status: "대기중", flagColor: "#8B5CF6", time: "1시간전" },
    { content: "영수증 발급 부탁드립니다. 현금영수증으로 처리해주세요.", platform: "카카오톡", status: "응대중", flagColor: "#F59E0B", time: "2시간전" },
    { content: "배송비 무료 조건이 어떻게 되나요? 금액을 더 채워야 하나요?", platform: "휴대폰", status: "미확인", flagColor: "#06B6D4", time: "2시간전" },
    { content: "제품이 불량인 것 같아요. 교환 또는 환불 처리 부탁드립니다.", platform: "인스타", status: "대기중", flagColor: "#EF4444", time: "3시간전" },
  ];

  return (
    <div className="bg-zinc-200 content-stretch flex flex-1 flex-col items-start overflow-y-auto relative shrink-0 w-full" data-name="Chat-List">
      {chatItems.map((item, index) => (
        <ChatItem key={index} {...item} />
      ))}
    </div>
  );
}

export function ChatList() {
  return (
    <div className="bg-white h-full max-w-[420px] min-w-[300px] relative shrink-0 w-[360px]" data-name="Chat List">
      <div className="content-stretch flex flex-col h-full items-start max-w-inherit min-w-inherit overflow-clip relative rounded-[inherit] w-[360px]">
        <DetailOption />
        <Title />
        <ChatListItems />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-solid border-zinc-400 inset-0 pointer-events-none" />
    </div>
  );
}