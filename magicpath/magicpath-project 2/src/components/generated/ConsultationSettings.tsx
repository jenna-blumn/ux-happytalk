import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Save, Lightbulb, MessageSquareOff, BellRing, PlusSquare, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type TabType = 'WORK_HOURS' | 'AUTO_END' | 'CONSULTANT_CHANGE' | 'LIMIT' | 'QUALITY' | 'OPERATIONS';
interface ToggleProps {
  enabled: boolean;
  onChange: (val: boolean) => void;
}
interface InfoBoxProps {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}

// Helpers
const TABS: {
  id: TabType;
  label: string;
}[] = [{
  id: 'WORK_HOURS',
  label: '근무 시간 설정'
}, {
  id: 'AUTO_END',
  label: '상담 종료 설정'
}, {
  id: 'CONSULTANT_CHANGE',
  label: '상담사 변경 승인'
}, {
  id: 'LIMIT',
  label: '상담 건수 제한'
}, {
  id: 'QUALITY',
  label: '상담 품질 평가 설정'
}, {
  id: 'OPERATIONS',
  label: '상담 운영 설정'
}];
const Toggle = ({
  enabled,
  onChange
}: ToggleProps) => <div onClick={() => onChange(!enabled)} className={cn("relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-200 flex items-center px-1", enabled ? "bg-[#306afe]" : "bg-[#cccccc]")}>
    <motion.div animate={{
    x: enabled ? 24 : 0
  }} className="w-4 h-4 bg-white rounded-full shadow-sm" />
    <span className={cn("absolute text-[10px] font-bold select-none transition-opacity", enabled ? "left-2 opacity-100 text-white" : "right-2 opacity-100 text-white")}>
      {enabled ? 'ON' : 'OFF'}
    </span>
  </div>;
const InfoBox = ({
  title,
  items,
  defaultOpen = true
}: InfoBoxProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return <div className="bg-[#8c8c9c]/10 border border-transparent rounded-lg p-3 relative overflow-hidden">
      <div className="flex justify-between items-center cursor-pointer mb-1" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center text-sm font-medium text-[#38373e]">
          <Lightbulb className="w-3.5 h-3.5 mr-2" />
          {title}
        </div>
        <button className="text-[#38373e]">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && <motion.ul initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="pl-2 space-y-1 overflow-hidden">
            {items.map((item, idx) => <li key={idx} className="flex items-start text-[13px] text-[#38373e] leading-5 relative pl-3">
                <span className="absolute left-0 top-2 w-[3px] h-[3px] bg-[#38373e] rounded-full" />
                {item}
              </li>)}
          </motion.ul>}
      </AnimatePresence>
    </div>;
};

// @component: ConsultationSettings
export const ConsultationSettings = () => {
  const [activeTab, setActiveTab] = useState<TabType>('AUTO_END');
  const [customerAutoEnd, setCustomerAutoEnd] = useState(false);
  const [consultantAutoEnd, setConsultantAutoEnd] = useState(false);
  const [messageEnabled, setMessageEnabled] = useState(true);
  const [noticeEnabled, setNoticeEnabled] = useState(false);
  const [endMessage, setEndMessage] = useState('상담원이 종료하였습니다.');

  // @return
  return <div className="min-h-screen bg-[#f3f5f9] font-sans antialiased text-[#38373e]">
      <div className="max-w-[1160px] mx-auto p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-xl font-semibold text-[#38373e]">기본 조건 설정</h1>
          <button className="px-1.5 py-1 text-[12px] font-medium bg-white border border-[#27272a1a] rounded shadow-sm hover:bg-gray-50 transition-colors">
            가이드
          </button>
        </div>
        <p className="text-[13px] text-[#8a8a8e] mb-6">
          근무 시간, 휴식, 상담종료, 상담 제한 건수 등 채팅상담에 필수적인 기본 상담 환경을 설정합니다. 각 항목 설정 후 반드시 [저장] 버튼을 클릭해야 설정이 완료됩니다.
        </p>

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-6 min-h-[800px]">
          {/* Tabs */}
          <div className="flex gap-10 border-bottom border-[#f2f4f7] mb-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {TABS.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("pb-2 text-[17px] font-medium transition-all relative", activeTab === tab.id ? "text-[#5988fe]" : "text-[#8a8a8e] hover:text-[#38373e]")}>
                {tab.label}
                {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5988fe]" />}
              </button>)}
          </div>

          {/* Tab Panel Content */}
          <div className="space-y-5">
            {activeTab === 'AUTO_END' && <div className="space-y-6">
                
                {/* 1. Customer Auto End Section */}
                <div className="border border-[#d8d8d9] rounded-lg p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-[35px] h-[35px] bg-[#306afe14] rounded-lg flex items-center justify-center">
                        <MessageSquareOff className="w-4 h-4 text-black" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-semibold">상담 자동 종료 설정</span>
                        <span className="text-[13px] text-[#8a8a8e]">
                          자동 종료 설정 여부와 관계없이 마지막 대화 이후 60일 경과 시 상담방이 자동 종료됩니다.(종료 보류 제외)
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-1.5 h-[38px] px-4 rounded-lg bg-[#78788029] text-[#3c3c434d] font-medium text-sm cursor-not-allowed">
                      <Save className="w-4 h-4" /> 저장
                    </button>
                  </div>

                  <div className="border border-[#3c3c4314] rounded-lg p-5 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 bg-[#ee6666] rounded-full" />
                      <div className="flex-1">
                        <div className="text-[15px] font-medium">고객 상담 자동종료</div>
                        <div className="text-[13px] text-[#8a8a8e]">
                          고객의 문의가 일정 시간 없더라도 자동 종료되지 않으며, 고객 또는 상담사가 직접 종료할 때까지 상담이 유지됩니다.
                        </div>
                      </div>
                      <Toggle enabled={customerAutoEnd} onChange={setCustomerAutoEnd} />
                    </div>
                    
                    <InfoBox title="고객 상담 자동종료 주의사항 안내" items={["상담사의 마지막 응대 시점이 최근 7일 이내인 상담방에만 적용됩니다.", "종료 시간은 최소 '5분'에서 '6일 23시간 55분'까지 설정 가능합니다."]} />
                  </div>

                  <div className="border border-[#3c3c4314] rounded-lg p-5 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 bg-[#ee6666] rounded-full" />
                      <div className="flex-1">
                        <div className="text-[15px] font-medium">상담사 상담 자동종료</div>
                        <div className="text-[13px] text-[#8a8a8e]">
                          상담사 일정 시간 미응대 시에도 자동 종료되지 않고, 고객 또는 상담사가 직접 종료할 때까지 상담이 유지됩니다.
                        </div>
                      </div>
                      <Toggle enabled={consultantAutoEnd} onChange={setConsultantAutoEnd} />
                    </div>

                    <InfoBox title="상담사 상담 자동종료 주의사항 안내" items={["고객의 마지막 문의 시점이 최근 7일 이내인 상담방에만 적용됩니다.", "카카오톡 채널 이용 시 챗봇 미설정, 상담사 미응대의 경우 메시지가 발송되지 않고 종료됩니다."]} />
                  </div>
                </div>

                {/* 2. End Message Section */}
                <div className="border border-[#d8d8d9] rounded-lg p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-[35px] h-[35px] bg-[#306afe14] rounded-lg flex items-center justify-center">
                        <BellRing className="w-4 h-4 text-black" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-semibold">상담사 상담 종료 안내 메시지 및 종료 예고 설정</span>
                        <span className="text-[13px] text-[#8a8a8e]">
                          상담사가 상담종료 시 종료 안내 메시지를 고객에게 전송 여부를 설정합니다.
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-1.5 h-[38px] px-4 rounded-lg bg-[#78788029] text-[#3c3c434d] font-medium text-sm cursor-not-allowed">
                      <Save className="w-4 h-4" /> 저장
                    </button>
                  </div>

                  {/* Toggle: End Message */}
                  <div className="border border-[#3c3c4314] rounded-lg p-5 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 bg-[#91cc75] rounded-full" />
                      <div className="flex-1">
                        <div className="text-[15px] font-medium">상담 종료 안내 메시지 설정</div>
                        <div className="text-[13px] text-[#8a8a8e]">
                          상담사가 상담 종료 시 설정된 안내 메시지가 고객에게 전송됩니다.
                        </div>
                      </div>
                      <Toggle enabled={messageEnabled} onChange={setMessageEnabled} />
                    </div>

                    {messageEnabled && <div className="space-y-2 mt-4 pt-4 border-t border-[#efeff0]">
                        <div className="flex items-center gap-1 text-[15px] font-medium">
                          상담 종료 메시지 <span className="text-red-500">*</span>
                        </div>
                        <div className="relative border border-[#3c3c4333] rounded-lg p-3 pt-2">
                          <textarea value={endMessage} onChange={e => setEndMessage(e.target.value)} maxLength={100} className="w-full h-[72px] resize-none outline-none text-[13px] leading-[22px]" placeholder="상담 종료 메시지를 입력하세요" />
                          <div className="flex justify-between items-center mt-1">
                            <button className="bg-[#fbfbfb] p-1 rounded cursor-pointer hover:bg-gray-100">
                              <PlusSquare className="w-3 h-4 text-[#8a8a8e]" />
                            </button>
                            <span className="text-[11px] text-[#8a8a8e]">{endMessage.length}/100</span>
                          </div>
                        </div>
                      </div>}

                    <InfoBox title="상담 종료 안내 메시지 설정 안내" items={["ON 설정 시, 상담사 상담 종료 시점에 고객에게 안내 메시지가 자동 발송됩니다.", "OFF 설정 시, 상담고객에게 어떤 메시지도 발송되지 않고 상담방을 종료합니다.", "카카오톡 채널의 경우 본 메시지가 발송될 때 과금이 발생됩니다. (단, 챗봇 미설정, 상담사 미응대인 경우 ‘상담사 상담 종료 안내 메시지’ 미발송 및 미과금)"]} />
                  </div>

                  {/* Toggle: Notice End */}
                  <div className="border border-[#3c3c4314] rounded-lg p-5 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 bg-[#ee6666] rounded-full" />
                      <div className="flex-1">
                        <div className="text-[15px] font-medium">상담 종료 예고</div>
                        <div className="text-[13px] text-[#8a8a8e]">
                          상담사가 상담을 종료하면, 상담이 즉시 종료됩니다.
                        </div>
                      </div>
                      <Toggle enabled={noticeEnabled} onChange={setNoticeEnabled} />
                    </div>

                    <InfoBox title="상담 종료 예고 주의사항 안내" items={["실제 종료시점 대비 약 1~2분 정도의 오차가 발생할 수 있습니다."]} />
                  </div>
                </div>

              </div>}

            {/* Placeholder for other tabs */}
            {activeTab !== 'AUTO_END' && <div className="flex flex-col items-center justify-center py-20 text-[#8a8a8e]">
                <Info className="w-12 h-12 mb-4 opacity-20" />
                <p>{TABS.find(t => t.id === activeTab)?.label} 화면입니다.</p>
                <p className="text-sm mt-1">이 탭의 상세 설정은 현재 데모에서 제공되지 않습니다.</p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};