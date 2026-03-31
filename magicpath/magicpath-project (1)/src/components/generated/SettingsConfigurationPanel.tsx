import React, { useState } from 'react';
import { Clock, Save, ChevronUp, ChevronDown, Lightbulb, Utensils, Moon, HelpCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Types
type DayConfig = {
  active: boolean;
  is24Hours: boolean;
  startTime: string;
  endTime: string;
  isNextDay: boolean;
};
type WeekConfig = {
  weekday: DayConfig;
  saturday: DayConfig;
  sunday: DayConfig;
};
type ToggleState = {
  outsideHours: boolean;
  mealTimeFeature: boolean;
  mealTimeReception: boolean;
  restTimeReception: boolean;
};

// Helpers
const InfoCard = ({
  title,
  children,
  defaultOpen = true
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return <div className="bg-[#8C8C9C1F] w-full border border-transparent rounded-lg p-3 relative mb-3">
      <div className="flex justify-between items-center cursor-pointer mb-1" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center text-sm font-medium text-[#38373E]">
          <Lightbulb className="w-3.5 h-3.5 mr-2 text-black" />
          {title}
        </div>
        <button className="p-1 hover:bg-black/5 rounded">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="overflow-hidden">
            <ul className="pl-2 space-y-1 mt-1">
              {children}
            </ul>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
const InfoItem = ({
  text,
  highlight
}: {
  text: string;
  highlight?: string;
}) => <li className="relative pl-3 text-sm text-[#38373E] leading-5">
    <span className="absolute left-0 top-2 w-[3px] height-[3px] bg-[#38373E] rounded-full" />
    {text}
    {highlight && <span className="text-[#306AFE] font-medium underline cursor-pointer ml-1">
        {highlight}
      </span>}
  </li>;
const Toggle = ({
  value,
  onChange,
  labelOn = "ON",
  labelOff = "OFF"
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  labelOn?: string;
  labelOff?: string;
}) => <div className="relative flex items-center">
    <button onClick={() => onChange(!value)} className={cn("relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none", value ? "bg-[#306AFE]" : "bg-[#CCCCCC]")}>
      <span className={cn("inline-block h-[18px] w-[18px] transform rounded-full bg-white transition-transform duration-300", value ? "translate-x-7" : "translate-x-0.5")} />
      <span className={cn("absolute text-[11px] font-bold text-white transition-opacity duration-300 pointer-events-none", value ? "left-2 opacity-100" : "right-2 opacity-100")}>
        {value ? labelOn : labelOff}
      </span>
    </button>
  </div>;
const Checkbox = ({
  checked,
  onChange,
  label,
  disabled = false
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  disabled?: boolean;
}) => <label className={cn("flex items-center cursor-pointer group select-none", disabled && "cursor-not-allowed")}>
    <div className={cn("w-4 h-4 rounded border transition-all flex items-center justify-center mr-2", checked ? "bg-[#306AFE] border-[#306AFE]" : "bg-white border-[#E8E8E8]", disabled && "bg-[#FBFBFB] border-[#E8E8E8]")} onClick={() => !disabled && onChange(!checked)}>
      {checked && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
    </div>
    <span className={cn("text-sm text-[#484848] -tracking-[0.5px]", disabled && "opacity-50")}>{label}</span>
  </label>;
const TimeInput = ({
  label,
  time,
  isNextDay,
  onTimeChange,
  onNextDayChange,
  disabled = false,
  required = true
}: {
  label: string;
  time: string;
  isNextDay?: boolean;
  onTimeChange: (v: string) => void;
  onNextDayChange?: (v: boolean) => void;
  disabled?: boolean;
  required?: boolean;
}) => <div className="flex flex-col gap-2 flex-1">
    <div className="flex items-center justify-between min-h-[20px]">
      <span className="text-[15px] font-medium text-[#38373E]">
        {label}
        {required && <span className="text-[#FF4757] ml-0.5">*</span>}
      </span>
      {onNextDayChange && <Checkbox checked={!!isNextDay} onChange={onNextDayChange} label="익일" disabled={disabled} />}
    </div>
    <div className={cn("h-[38px] flex items-center justify-between rounded-lg border px-3 relative cursor-pointer", disabled ? "bg-[#F0F0F0] border-black/10" : "bg-white border-black/20")}>
      <input type="time" value={time} onChange={e => onTimeChange(e.target.value)} disabled={disabled} className={cn("bg-transparent border-none text-sm font-medium w-full focus:outline-none appearance-none", disabled ? "text-[#8A8A8E]" : "text-[#38373E]")} />
      <ChevronDown className="w-4 h-4 text-black ml-1 pointer-events-none" />
    </div>
  </div>;
const ConfigCard = ({
  title,
  active,
  onActiveChange,
  config
}: {
  title: string;
  active?: boolean;
  onActiveChange?: (v: boolean) => void;
  config: DayConfig;
}) => {
  return <div className="flex flex-col gap-4 flex-1 min-w-[300px] border border-[#EFEFE8] rounded-lg p-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[#4A90E2] rounded-full" />
          <span className="text-[15px] font-medium text-[#38373E]">{title}</span>
        </div>
        {onActiveChange && <Toggle value={active || false} onChange={onActiveChange} labelOn="근무" labelOff="휴무" />}
      </div>
      
      <div className="flex flex-col gap-2.5">
        <Checkbox checked={config.is24Hours} onChange={() => {}} label="하루종일(24시간 운영)" disabled={!active && onActiveChange !== undefined} />
        
        <div className="flex gap-5">
          <TimeInput label="시작 시간" time={config.startTime} onTimeChange={() => {}} disabled={config.is24Hours || !active && onActiveChange !== undefined} />
          <TimeInput label="종료 시간" time={config.endTime} isNextDay={config.isNextDay} onTimeChange={() => {}} onNextDayChange={() => {}} disabled={config.is24Hours || !active && onActiveChange !== undefined} />
        </div>
      </div>
    </div>;
};

// @component: SettingsConfigurationPanel
export const SettingsConfigurationPanel = () => {
  const [activeTab, setActiveTab] = useState('REST_TIME');
  const [toggles, setToggles] = useState<ToggleState>({
    outsideHours: true,
    mealTimeFeature: false,
    mealTimeReception: true,
    restTimeReception: true
  });
  const tabs = [{
    id: 'REST_TIME',
    label: '근무 시간 설정'
  }, {
    id: 'AUTO_END',
    label: '상담 종료 설정'
  }, {
    id: 'AUTO_CONTROL',
    label: '상담사 변경 승인'
  }, {
    id: 'COUNSOL_LIMIT',
    label: '상담 건수 제한'
  }, {
    id: 'QUALITY_EVALUATION',
    label: '상담 품질 평가 설정'
  }, {
    id: 'SCHEDULE',
    label: '상담 운영 설정'
  }] as any[];
  const handleToggle = (key: keyof ToggleState) => (val: boolean) => {
    setToggles(prev => ({
      ...prev,
      [key]: val
    }));
  };

  // @return
  return <div className="bg-[#F3F5F9] min-h-screen p-6 font-sans">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-3.5">
            <h1 className="text-xl font-semibold text-[#38373E]">기본 조건 설정</h1>
            <button className="bg-white border border-black/10 shadow-sm rounded-md px-1.5 py-1 text-xs font-medium cursor-pointer hover:bg-gray-50 transition-colors">
              가이드
            </button>
          </div>
        </div>
        
        <p className="text-[13px] text-[#8A8A8E] leading-5 mb-4">
          근무 시간, 휴식, 상담종료, 상담 제한 건수 등 채팅상담에 필수적인 기본 상담 환경을 설정합니다. 
          각 항목 설정 후 반드시 [저장] 버튼을 클릭해야 설정이 완료됩니다.
        </p>

        <main className="bg-white rounded-lg p-6 shadow-sm min-h-[800px]">
          {/* Tabs */}
          <div className="flex gap-10 border-bottom border-[#F2F4F7] mb-5 overflow-x-auto no-scrollbar">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("pb-2 text-[17px] font-medium transition-all whitespace-nowrap relative border-b-2", activeTab === tab.id ? "text-[#5988FE] border-[#5988FE]" : "text-[#8A8A8E] border-transparent")}>
                {tab.label}
              </button>)}
          </div>

          <div className="flex flex-col gap-6">
            {/* Section 1: Work Hours Management */}
            <section className="border border-[#D8D8D9] rounded-lg p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#306AFE]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-[#38373E]">근무 시간 관리</h2>
                    <p className="text-[13px] text-[#8A8A8E]">상담사의 요일별 근무 시간을 관리합니다.</p>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-1 min-w-[76px] h-[38px] bg-[#78788029] text-[#3C3C434D] rounded-lg text-sm font-medium cursor-not-allowed">
                  <Save className="w-4 h-4" /> 저장
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                <ConfigCard title="평일(월~금요일)" active={true} config={{
                active: true,
                is24Hours: true,
                startTime: '00:00',
                endTime: '23:59',
                isNextDay: false
              }} />
                <ConfigCard title="토요일" active={true} onActiveChange={() => {}} config={{
                active: true,
                is24Hours: true,
                startTime: '00:00',
                endTime: '23:59',
                isNextDay: false
              }} />
                <ConfigCard title="일요일" active={false} onActiveChange={() => {}} config={{
                active: false,
                is24Hours: false,
                startTime: '09:00',
                endTime: '17:00',
                isNextDay: false
              }} />
              </div>

              <InfoCard title="근무 시간 관리 안내">
                <InfoItem text="기본적으로 설정된 상담 시간 외에 휴무일(공휴일 포함) 설정은 " highlight="[설정 > 상담 운영 > 휴무일/근무관리]" />
              </InfoCard>

              {/* Outside Hours Reception */}
              <div className="border border-black/10 rounded-lg p-5 flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-[#91CC75] rounded-full shrink-0" />
                <div className="flex-1">
                  <h3 className="text-[15px] font-medium text-[#38373E]">근무 시간외 상담 접수(상담사 연결 접수)</h3>
                  <p className="text-[13px] text-[#8A8A8E]">근무 시간 외에도 상담을 접수하여 대기열로 이동합니다.</p>
                </div>
                <Toggle value={toggles.outsideHours} onChange={handleToggle('outsideHours')} />
              </div>

              <InfoCard title="근무 시간 외 상담 접수 안내">
                <InfoItem text="ON 설정 시, 근무 외 시간에 상담건을 받아 '상담대기' 상태로 인입됩니다. (챗봇 사용 시, 고객이 '상담사 연결'을 누를 때 '상담대기' 상태로 인입)" />
                <InfoItem text="OFF 설정 시, 근무 외 시간에 상담건이 인입되어도 상담방이 생성되지 않습니다. (챗봇 사용 시, 고객이 '상담사 연결' 을 누를 때 챗봇이 자동으로 종료되고 '챗봇종료' 상태로 인입)" />
                <InfoItem text="근무 시간 외 안내 메시지는 " highlight="[설정 > 고급설정 > 자동 메시지 관리]" />
              </InfoCard>
            </section>

            {/* Section 2: Rest Time Management */}
            <section className="border border-[#D8D8D9] rounded-lg p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#306AFE]/10 rounded-lg flex items-center justify-center">
                    <Moon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-[#38373E]">상담사 휴식 시간</h2>
                    <p className="text-[13px] text-[#8A8A8E]">상담사의 휴식 시간을 관리합니다.</p>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-1 min-w-[76px] h-[38px] bg-[#78788029] text-[#3C3C434D] rounded-lg text-sm font-medium cursor-not-allowed">
                  <Save className="w-4 h-4" /> 저장
                </button>
              </div>

              <div className="border border-[#EFEFE8] rounded-lg p-5 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-[#91CC75] rounded-full shrink-0" />
                  <span className="text-[15px] font-medium text-[#38373E]">상담사 휴식 최대 허용 시간</span>
                </div>
                <div className="relative">
                  <button className="w-full h-[38px] flex items-center justify-between px-3 py-2 border border-black/20 rounded-lg bg-white text-sm">
                    <span>5분</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <InfoCard title="상담사 휴식 최대 허용 시간 안내">
                <InfoItem text="상담사의 회당 최대 휴식 시간을 설정합니다." />
                <InfoItem text="상담사가 '휴식중' 상태로 전환한 시점부터 해당 시간이 지나면 '상담중' 상태로 자동 전환됩니다." />
                <InfoItem text="자동 전환 시점 이전에 상담 복귀 시 언제든 '상담중'으로 수동 전환할 수 있습니다." />
              </InfoCard>

              {/* Rest Time Reception */}
              <div className="border border-black/10 rounded-lg p-5 flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-[#91CC75] rounded-full shrink-0" />
                <div className="flex-1">
                  <h3 className="text-[15px] font-medium text-[#38373E]">상담사 휴식 시 상담 접수(상담사 연결 접수)</h3>
                  <p className="text-[13px] text-[#8A8A8E]">상담사 휴식 중에도 상담을 접수하여 대기열로 이동합니다.</p>
                </div>
                <Toggle value={toggles.restTimeReception} onChange={handleToggle('restTimeReception')} />
              </div>

              <InfoCard title="상담사 휴식 시 상담 접수 안내">
                <InfoItem text="ON 설정 시, '휴식중'인 상담사에게도 상담건이 배정되어 '접수' 상태로 유입됩니다.(챗봇 사용 시, 고객이 '상담사 연결'을 누를 때 '접수' 상태로 인입)" />
                <InfoItem text="OFF 설정 시, '휴식중'인 상담사에게 상담건이 배정되지 않고, 전체 상담사가 '휴식중'일 경우 해당 상담건은 '상담대기' 상태로 인입되면서 상담불가 안내 메시지가 전송됩니다." />
                <InfoItem text="상담 불가 안내 메시지는 " highlight="[설정 > 고급설정 > 자동 메시지 관리]" />
              </InfoCard>
            </section>

            {/* Section 3: Meal Time Management */}
            <section className="border border-[#D8D8D9] rounded-lg p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#306AFE]/10 rounded-lg flex items-center justify-center">
                    <Utensils className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-[#38373E]">상담사 식사 시간</h2>
                    <p className="text-[13px] text-[#8A8A8E]">상담사의 식사 시간을 개별 또는 일괄로 설정합니다.</p>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-1 min-w-[76px] h-[38px] bg-[#78788029] text-[#3C3C434D] rounded-lg text-sm font-medium cursor-not-allowed">
                  <Save className="w-4 h-4" /> 저장
                </button>
              </div>

              <div className="border border-black/10 rounded-lg p-5 flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-[#EE6666] rounded-full shrink-0" />
                <div className="flex-1">
                  <h3 className="text-[15px] font-medium text-[#38373E]">상담사 식사시간 기능 사용</h3>
                  <p className="text-[13px] text-[#8A8A8E]">상담사 식사 시간 설정을 사용하지 않습니다.</p>
                </div>
                <Toggle value={toggles.mealTimeFeature} onChange={handleToggle('mealTimeFeature')} />
              </div>

              <InfoCard title="상담사 식사 시 상담 접수 안내">
                <InfoItem text="ON 설정 시, 식사시간에 인입되는 상담에 식사시간 안내 메시지가 발송되면서 '상담대기' 상태로 인입됩니다." />
                <InfoItem text="OFF 설정 시, 식사시간에 인입되는 상담에 식사시간 안내 메시지가 발송되고 상담방은 생성되지 않습니다." />
                <InfoItem text="식사시간 안내 메시지는 " highlight="[설정 > 고급설정 > 자동 메시지 관리]" />
              </InfoCard>
            </section>
          </div>
        </main>
      </div>
    </div>;
};