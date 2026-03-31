import { useState } from "react";
import { InfoContainer } from "./InfoContainer";
import { TemplateSection } from "./TemplateSection";
import { TabPills } from "../ui/tab-pills";

// Mock data
const infoTabs = ["상담방 정보", "고객정보", "태스크", "상담이력", "파일첨부", "메모"];

const infoData = {
  title: "1:1 채팅 상담 문의 드립니다.",
  category: "상품문의(샘플) > 일반 상담(샘플)",
  gridFields: [
    { id: "field-1", label: "채널", value: "해피톡" },
    { id: "field-2", label: "상담사", value: "홍민지" },
    { id: "field-3", label: "상담이력", value: "3" },
  ],
  tags: [
    { id: "tag-1", label: "# 긴급처리" },
    { id: "tag-2", label: "# 본인인증" },
    { id: "tag-3", label: "# 회원가입" },
    { id: "tag-4", label: "# 이벤트" },
    { id: "tag-5", label: "# 상담방 태그" },
    { id: "tag-6", label: "# 태그는 20자까지 입력가능합니다." },
    { id: "tag-7", label: "# 방태그 7" },
    { id: "tag-8", label: "# 방태그8" },
    { id: "tag-9", label: "# 방태그9" },
    { id: "tag-10", label: "# 방태그10" },
  ],
};

const templateTabs = ["즐겨찾기", "상담템플릿", "템플릿 단축키", "자동완성"];

const templateCategories = [
  { id: "cat-1", label: "전체(45)" },
  { id: "cat-2", label: "일반상담(22)" },
  { id: "cat-3", label: "민원(1)" },
  { id: "cat-4", label: "인칭(1)" },
  { id: "cat-5", label: "민원(1)" },
  { id: "cat-6", label: "민원(1)" },
];

const templates = [
  {
    id: "tmpl-1",
    badge: { label: "공유", color: "red" },
    text: "배송 지연 재품 발송 서비스 오류 등 고객 불만 재기 시",
    isFavorite: true
  },
  {
    id: "tmpl-2",
    badge: { label: "개인", color: "default" },
    text: "먼저 접수된 순서대로 상담사가 응답하고 있습니다.",
    isFavorite: false
  },
  {
    id: "tmpl-3",
    badge: { label: "공유", color: "red" },
    text: "고객이 처음 연결되었을 때",
    isFavorite: false
  },
  {
    id: "tmpl-4",
    badge: { label: "공유", color: "red" },
    text: "고객님의 문의를 접수하였습니다.",
    isFavorite: true
  },
  {
    id: "tmpl-5",
    badge: { label: "공유", color: "red" },
    text: "기술 지원 설정 안내 결제 설명 등 상세 해결책 단계",
    isFavorite: false
  },
  {
    id: "tmpl-6",
    badge: { label: "개인", color: "default" },
    text: "더 궁금한 점은 언제든지 문의해 주세요",
    isFavorite: false
  },
  {
    id: "tmpl-7",
    badge: { label: "개인", color: "default" },
    text: "현재 대기 중인 고객님이 있습니다.",
    isFavorite: false
  },
  {
    id: "tmpl-8",
    badge: { label: "개인", color: "default" },
    text: "상담이 시작되었습니다. 어떻게 도와드릴까요?",
    isFavorite: true
  },
  {
    id: "tmpl-9",
    badge: { label: "개인", color: "default" },
    text: "기다려 주셔서 감사합니다.",
    isFavorite: true
  },
  {
    id: "tmpl-10",
    badge: { label: "개인", color: "default" },
    text: "상담사가 여러명입니다",
    isFavorite: false
  },
];

export function CustomerInfo() {
  const [activeInfoTab, setActiveInfoTab] = useState(infoTabs[0]);

  return (
    <aside
      className="bg-zinc-50 h-full min-w-[460px] relative shrink-0 w-[460px] border-l border-panel-border"
      data-name="Panel"
      aria-label="고객 정보 및 템플릿 패널"
    >
      <div className="content-stretch flex flex-col items-start min-w-inherit relative size-full">
        {/* Section 1: Information Panel */}
        <div className="relative shrink-0 w-full" data-name="Panel-section-정보패널">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-zinc-200 inset-0 pointer-events-none" />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative w-full">
              <TabPills
                items={infoTabs}
                activeTab={activeInfoTab}
                onTabChange={setActiveInfoTab}
                className="w-full"
              />

              <div className="w-full min-h-[400px]">
                {activeInfoTab === "상담방 정보" ? (
                  <InfoContainer data={infoData} />
                ) : (
                  <div className="p-12 text-zinc-400 text-center font-sans">
                    <p className="text-[14px]">{activeInfoTab} 화면 준비 중입니다.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Template Section */}
        <TemplateSection
          tabs={templateTabs}
          activeTab={1}
          categories={templateCategories}
          activeCategory={0}
          templates={templates}
        />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-solid border-zinc-400 inset-0 pointer-events-none" />
    </aside>
  );
}