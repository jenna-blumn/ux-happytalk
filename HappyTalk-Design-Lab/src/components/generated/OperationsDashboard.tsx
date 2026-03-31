import React, { useState } from 'react';
import { Calendar, MessageSquare, Network, Leaf, RefreshCw, Lightbulb, ChevronRight, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// Types and Mock Data
type ChartType = 'bar' | 'line';
const usageData = [{
  day: '03-01',
  value: 120
}, {
  day: '03-05',
  value: 450
}, {
  day: '03-10',
  value: 300
}, {
  day: '03-15',
  value: 600
}, {
  day: '03-20',
  value: 200
}, {
  day: '03-25',
  value: 800
}, {
  day: '03-26',
  value: 400
}] as any[];
const trafficData = [{
  day: '03-01',
  base: 400,
  extra: 240
}, {
  day: '03-05',
  base: 300,
  extra: 139
}, {
  day: '03-10',
  base: 200,
  extra: 980
}, {
  day: '03-15',
  base: 278,
  extra: 390
}, {
  day: '03-20',
  base: 189,
  extra: 480
}, {
  day: '03-25',
  base: 239,
  extra: 380
}, {
  day: '03-26',
  base: 349,
  extra: 430
}] as any[];
const StatCard = ({
  title,
  value,
  subtext,
  align = 'left'
}: {
  title: string;
  value: string;
  subtext: string;
  align?: 'left' | 'right';
}) => <div className={`flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
    <div className="text-[17px] font-semibold text-[#38373E] leading-7 tracking-tight">{value}</div>
    <div className="text-[13px] font-normal text-[#8A8A8E] leading-5">{subtext}</div>
  </div>;
const SectionHeader = ({
  title,
  icon: Icon,
  onIconClick
}: {
  title: string;
  icon?: any;
  onIconClick?: () => void;
}) => <div className="flex justify-between items-center w-full mb-3">
    <div className="text-[17px] font-semibold text-[#8A8A8E] leading-7 tracking-tight">{title}</div>
    {Icon && <button onClick={onIconClick} className="w-[30px] h-[30px] bg-[#F2F4F7] rounded-lg flex items-center justify-center text-[#38373E] hover:bg-gray-200 transition-colors">
        <Icon size={16} />
      </button>}
  </div>;

// @component: OperationsDashboard
export const OperationsDashboard = () => {
  const [talkChartType, setTalkChartType] = useState<ChartType>('bar');
  const [smsChartType, setSmsChartType] = useState<ChartType>('bar');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  // @return
  return <div className="min-h-screen bg-[#F3F5F9] p-6 font-sans text-[#38373E]">
      <div className="max-w-[1744px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-3.5">
            <h1 className="text-xl font-semibold leading-7 tracking-tight">운영 인사이트</h1>
            <button className="h-[26px] px-3 bg-[#595959]/10 text-[#3C3C43]/30 text-xs font-bold rounded-full hover:bg-gray-200 transition-colors">
              도움말
            </button>
          </div>
        </div>
        <p className="text-[13px] text-[#8A8A8E] mb-4">
          상담 인력 운영 현황, 시스템 이용량, 과금 플랜 및 변동 추이를 종합적으로 제공합니다.
        </p>

        <main className="flex flex-col gap-3">
          {/* Notice Banner */}
          <div className="bg-white rounded-lg px-6 py-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-[17px] font-semibold">해피톡 공지사항</span>
              <span className="text-sm font-semibold text-[#306AFE] cursor-pointer hover:underline">
                스머프의 공지사항 관리에서 등록한 시스템 공지사항입니다.
              </span>
            </div>
            <span className="text-sm text-[#38373E]">2025.07.28 18:40:29</span>
          </div>

          {/* Top Grid Status Cards */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Working Status */}
              <div className="border border-[#3C3C43]/10 rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="근무 현황" icon={Calendar} />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 text-[15px] font-medium text-[#38373E]">오늘</span>
                    <div className="flex gap-4 text-sm font-normal">
                      <div className="flex items-center gap-1.5 min-w-[100px]">
                        <span>상담인원</span>
                        <span className="text-[#306AFE] font-semibold">1명</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span>근무시간</span>
                        <span className="text-gray-600">00:00~23:59</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 text-[15px] font-medium text-[#38373E]">내일</span>
                    <div className="flex gap-4 text-sm font-normal">
                      <div className="flex items-center gap-1.5 min-w-[100px]">
                        <span>상담인원</span>
                        <span className="text-[#306AFE] font-semibold">1명</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span>근무시간</span>
                        <span className="text-gray-600">00:00~23:59</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Channel Status */}
              <div className="border border-[#3C3C43]/10 rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="채팅 채널" icon={MessageSquare} />
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium">해피톡</span>
                    <span className="text-[#38373E]">사용</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium">카카오톡</span>
                    <span className="text-[#8A8A8E]">미사용</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium">네이버톡톡</span>
                    <span className="text-[#8A8A8E]">미사용</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium">인스타그램</span>
                    <span className="text-[#8A8A8E]">미사용</span>
                  </div>
                </div>
              </div>

              {/* Integration Status */}
              <div className="border border-[#3C3C43]/10 rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="연동 현황" icon={Network} />
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-14 font-medium">주문연동</span>
                    <span className="bg-[#787880]/30 text-[#3C3C43]/30 px-1.5 py-0.5 rounded text-xs">미연동</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-14 font-medium">SMS인증</span>
                    <span className="text-[#8A8A8E]">미사용</span>
                    <span className="underline cursor-pointer hover:text-blue-600">SMS인증 설정</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Grid Row: Plan & Talk Cash */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
              <div className="border border-[#3C3C43]/10 rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="이용 플랜 현황" icon={Leaf} />
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="w-10 font-medium">해피톡</span>
                    <div className="flex gap-4">
                      <span>Enterprise</span>
                      <span className="text-[#306AFE] font-semibold">1개 (인증:1개 / 미인증:0개)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-10 font-medium">챗봇</span>
                    <div className="flex gap-4">
                      <span>미사용</span>
                      <span className="text-[#306AFE] font-semibold">0건 / 0건</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#3C3C43]/10 rounded-lg p-3 px-5 flex flex-col gap-3">
                <div className="flex justify-between items-center w-full mb-3">
                  <div className="text-[17px] font-semibold text-[#8A8A8E]">톡캐시</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 mr-2">
                      <span className="text-[15px] font-semibold text-[#8A8A8E]">톡캐시 보유 금액</span>
                      <span className="text-[17px] font-semibold text-[#38373E]">0원</span>
                    </div>
                    <button className="w-[30px] h-[30px] bg-[#F2F4F7] rounded-lg flex items-center justify-center text-[#FFD23A] hover:bg-gray-200">
                      <div className="w-4 h-4 bg-[#FFD23A] rounded-full flex items-center justify-center text-[10px] text-white font-bold italic">H</div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-20 font-medium">차감 예정일</span>
                    <span className="text-gray-600">2026.04.01</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 font-medium">차감예정금액</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FF4713] font-semibold">0원</span>
                      <button className="bg-[#47AC41] text-white px-1.5 py-0.5 rounded text-xs font-medium hover:bg-green-700">충전</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Stats Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm overflow-hidden">
            <div className="flex justify-between items-center mb-6 text-sm text-[#8A8A8E]">
              <span>조회 기간 : 2026.03.01 ~ 2026.03.26</span>
              <div className="flex items-center gap-2 cursor-pointer group" onClick={handleRefresh}>
                <span>마지막 업데이트 : 2026.03.26 14:55:21</span>
                <motion.div animate={isRefreshing ? {
                rotate: 360
              } : {}}>
                  <RefreshCw size={12} className="group-hover:text-blue-500" />
                </motion.div>
              </div>
            </div>

            {/* Usage Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
              <div className="border border-[#3C3C43]/10 rounded-lg p-4 px-5">
                <div className="text-sm mb-2">3월 카카오 상담톡 사용량</div>
                <StatCard title="3월 카카오 상담톡 사용량" value="0건" subtext="총 사용량" />
              </div>
              <div className="border border-[#3C3C43]/10 rounded-lg p-4 px-5 flex justify-between">
                <div className="flex flex-col">
                  <div className="text-sm mb-2">3월 SMS인증/메시지 발송량</div>
                  <StatCard title="SMS인증 총 발송량" value="0건" subtext="SMS인증 총 발송량" />
                </div>
                <div className="flex flex-col items-end">
                  <div className="h-5" />
                  <div className="flex items-center gap-1 group relative">
                    <StatCard title="메시지 총 발송량" value="0건" subtext="메시지 총 발송량" align="right" />
                    <Lightbulb size={13} className="text-gray-400 mt-1 cursor-help" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
              {/* Talk Usage Trend Chart */}
              <div className="border border-[#3C3C43]/10 rounded-lg p-4 px-5 h-[360px] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">3월 카카오 상담톡 일별 사용량 추이(건)</span>
                  <div className="bg-[#F1F1F1] rounded-full p-0.5 flex gap-1">
                    <button onClick={() => setTalkChartType('bar')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${talkChartType === 'bar' ? 'bg-white shadow-sm' : 'text-gray-500'}`}>막대</button>
                    <button onClick={() => setTalkChartType('line')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${talkChartType === 'line' ? 'bg-white shadow-sm' : 'text-gray-500'}`}>선형</button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {talkChartType === 'bar' ? <BarChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{
                      fontSize: 11,
                      fill: '#8A8A8E'
                    }} />
                        <YAxis hide />
                        <Tooltip contentStyle={{
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {usageData.map((entry, index) => <Cell key={`cell-${index}`} fill="#FAC858" />)}
                        </Bar>
                      </BarChart> : <LineChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{
                      fontSize: 11,
                      fill: '#8A8A8E'
                    }} />
                        <YAxis hide />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#FAC858" strokeWidth={3} dot={{
                      r: 4,
                      fill: '#FAC858',
                      strokeWidth: 2,
                      stroke: '#fff'
                    }} activeDot={{
                      r: 6
                    }} />
                      </LineChart>}
                  </ResponsiveContainer>
                </div>
              </div>

              {/* SMS Usage Trend Chart */}
              <div className="border border-[#3C3C43]/10 rounded-lg p-4 px-5 h-[360px] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">3월 SMS인증/메시지 일별 발송량 추이(건)</span>
                  <div className="bg-[#F1F1F1] rounded-full p-0.5 flex gap-1">
                    <button onClick={() => setSmsChartType('bar')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${smsChartType === 'bar' ? 'bg-white shadow-sm' : 'text-gray-500'}`}>막대</button>
                    <button onClick={() => setSmsChartType('line')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${smsChartType === 'line' ? 'bg-white shadow-sm' : 'text-gray-500'}`}>선형</button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {smsChartType === 'bar' ? <BarChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{
                      fontSize: 11,
                      fill: '#8A8A8E'
                    }} />
                        <YAxis hide />
                        <Tooltip />
                        <Bar dataKey="base" stackId="a" fill="#306AFE" radius={[0, 0, 0, 0]} />
                        <Bar dataKey="extra" stackId="a" fill="#71A0FF" radius={[4, 4, 0, 0]} />
                      </BarChart> : <LineChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{
                      fontSize: 11,
                      fill: '#8A8A8E'
                    }} />
                        <YAxis hide />
                        <Tooltip />
                        <Line type="monotone" dataKey="base" stroke="#306AFE" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="extra" stroke="#71A0FF" strokeWidth={2} dot={false} />
                      </LineChart>}
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Bottom Traffic Summary */}
            <div className="border border-[#3C3C43]/10 rounded-lg p-4 px-5 mb-3">
              <div className="text-sm mb-4">3월 챗봇 트래픽 사용량</div>
              <div className="flex justify-between items-center">
                <StatCard title="기본 트래픽" value="0건" subtext="기본 트래픽 총 사용량" />
                <StatCard title="초과 트래픽" value="0건" subtext="초과 트래픽 총 사용량" align="right" />
              </div>
            </div>

            {/* Extended Bottom Chart (Full Width) */}
            <div className="border border-[#3C3C43]/10 rounded-lg p-4 px-5 h-[360px] flex flex-col">
              <div className="text-sm mb-4">3월 챗봇 트래픽 일별 사용량 추이(건)</div>
              <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{
                    fontSize: 11,
                    fill: '#8A8A8E'
                  }} />
                    <YAxis hide />
                    <Tooltip cursor={{
                    fill: '#f5f5f5'
                  }} />
                    <Bar dataKey="base" fill="#306AFE" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>;
};