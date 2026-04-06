import { useState } from 'react';
import { Calendar, MessageSquare, Network, Leaf, RefreshCw, Lightbulb } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { Button, Badge } from '@blumnai-studio/blumnai-design-system';

// Types and Mock Data
type ChartType = 'bar' | 'line';
const usageData = [{ day: '03-01', value: 120 }, { day: '03-05', value: 450 }, { day: '03-10', value: 300 }, { day: '03-15', value: 600 }, { day: '03-20', value: 200 }, { day: '03-25', value: 800 }, { day: '03-26', value: 400 }] as any[];
const trafficData = [{ day: '03-01', base: 400, extra: 240 }, { day: '03-05', base: 300, extra: 139 }, { day: '03-10', base: 200, extra: 980 }, { day: '03-15', base: 278, extra: 390 }, { day: '03-20', base: 189, extra: 480 }, { day: '03-25', base: 239, extra: 380 }, { day: '03-26', base: 349, extra: 430 }] as any[];

const StatCard = ({ value, subtext, align = 'left' }: { value: string; subtext: string; align?: 'left' | 'right' }) => (
  <div className={`flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
    <div className="text-[17px] font-semibold text-text-default leading-7 tracking-tight">{value}</div>
    <div className="text-[13px] font-normal text-text-muted leading-5">{subtext}</div>
  </div>
);

const SectionHeader = ({ title, icon: Icon, onIconClick }: { title: string; icon?: any; onIconClick?: () => void }) => (
  <div className="flex justify-between items-center w-full mb-3">
    <div className="text-[17px] font-semibold text-text-muted leading-7 tracking-tight">{title}</div>
    {Icon && (
      <Button buttonStyle="secondary" onClick={onIconClick} className="w-[30px] h-[30px] p-0 flex items-center justify-center">
        <Icon size={16} />
      </Button>
    )}
  </div>
);

export const OperationsDashboard = () => {
  const [talkChartType, setTalkChartType] = useState<ChartType>('bar');
  const [smsChartType, setSmsChartType] = useState<ChartType>('bar');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="min-h-screen bg-bg-subtle p-6 font-sans text-text-default">
      <div className="max-w-[1744px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-3.5">
            <h1 className="text-xl font-semibold leading-7 tracking-tight">운영 인사이트</h1>
            <Button buttonStyle="secondary" size="sm" className="h-[26px] text-xs px-3 rounded-full">도움말</Button>
          </div>
        </div>
        <p className="text-[13px] text-text-muted mb-4">
          상담 인력 운영 현황, 시스템 이용량, 과금 플랜 및 변동 추이를 종합적으로 제공합니다.
        </p>

        <main className="flex flex-col gap-3">
          {/* Notice Banner */}
          <div className="bg-bg-default rounded-lg px-6 py-4 flex justify-between items-center shadow-sm border border-border-default">
            <div className="flex items-center gap-3">
              <span className="text-[17px] font-semibold">해피톡 공지사항</span>
              <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">
                스머프의 공지사항 관리에서 등록한 시스템 공지사항입니다.
              </span>
            </div>
            <span className="text-sm text-text-default">2026.03.30 18:40:29</span>
          </div>

          {/* Top Grid Status Cards */}
          <div className="bg-bg-default rounded-lg p-6 shadow-sm border border-border-default">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Working Status */}
              <div className="border border-border-default rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="근무 현황" icon={Calendar} />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 text-[15px] font-medium text-text-default">오늘</span>
                    <div className="flex gap-4 text-sm font-normal">
                      <div className="flex items-center gap-1.5 min-w-[100px]">
                        <span className="text-text-muted">상담인원</span>
                        <span className="text-primary font-semibold">1명</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-text-muted">근무시간</span>
                        <span className="text-text-muted">00:00~23:59</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 text-[15px] font-medium text-text-default">내일</span>
                    <div className="flex gap-4 text-sm font-normal">
                      <div className="flex items-center gap-1.5 min-w-[100px]">
                        <span className="text-text-muted">상담인원</span>
                        <span className="text-primary font-semibold">1명</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-text-muted">근무시간</span>
                        <span className="text-text-muted">00:00~23:59</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Channel Status */}
              <div className="border border-border-default rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="채팅 채널" icon={MessageSquare} />
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium">해피톡</span>
                    <Badge label="사용" color="green" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium text-text-muted">카카오톡</span>
                    <Badge label="미사용" color="neutral" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium text-text-muted">네이버톡톡</span>
                    <Badge label="미사용" color="neutral" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium text-text-muted">인스타그램</span>
                    <Badge label="미사용" color="neutral" />
                  </div>
                </div>
              </div>

              {/* Integration Status */}
              <div className="border border-border-default rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="연동 현황" icon={Network} />
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-14 font-medium text-text-muted">주문연동</span>
                    <Badge label="미연동" color="neutral" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-14 font-medium text-text-muted">SMS인증</span>
                    <Badge label="미사용" color="neutral" />
                    <span className="underline cursor-pointer text-primary hover:text-blue-600 ml-1 font-medium">SMS인증 설정</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Grid Row: Plan & Talk Cash */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
              <div className="border border-border-default rounded-lg p-3 px-5 flex flex-col gap-3">
                <SectionHeader title="이용 플랜 현황" icon={Leaf} />
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="w-10 font-medium text-text-muted">해피톡</span>
                    <div className="flex gap-4 items-center">
                      <Badge label="Enterprise" color="yellow" />
                      <span className="text-primary font-semibold">1개 (인증:1개 / 미인증:0개)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-10 font-medium text-text-muted">챗봇</span>
                    <div className="flex gap-4">
                      <Badge label="미사용" color="neutral" />
                      <span className="text-primary font-semibold ml-1">0건 / 0건</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border-default rounded-lg p-3 px-5 flex flex-col gap-3">
                <div className="flex justify-between items-center w-full mb-3">
                  <div className="text-[17px] font-semibold text-text-muted">톡캐시</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 mr-2">
                      <span className="text-[15px] font-medium text-text-muted">보유 금액</span>
                      <span className="text-[17px] font-bold text-text-default tracking-tight">0원</span>
                    </div>
                    <Button buttonStyle="secondary" className="w-[30px] h-[30px] p-0 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] bg-yellow-400 text-white font-bold italic">H</div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-20 font-medium text-text-muted">차감 예정일</span>
                    <span className="text-text-muted">2026.04.01</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 font-medium text-text-muted">차감예정금액</span>
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 font-semibold">0원</span>
                      <Button buttonStyle="primary" size="sm" className="h-[24px] px-2 text-xs">충전</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Stats Section */}
          <div className="bg-bg-default rounded-lg p-6 shadow-sm border border-border-default overflow-hidden">
            <div className="flex justify-between items-center mb-6 text-sm text-text-muted">
              <span>조회 기간 : 2026.03.01 ~ 2026.03.26</span>
              <div className="flex items-center gap-2 cursor-pointer group" onClick={handleRefresh}>
                <span>마지막 업데이트 : 2026.03.26 14:55:21</span>
                <motion.div animate={isRefreshing ? { rotate: 360 } : {}}>
                  <RefreshCw size={12} className="group-hover:text-primary transition-colors" />
                </motion.div>
              </div>
            </div>

            {/* Usage Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
              <div className="border border-border-default rounded-lg p-4 px-5">
                <div className="text-sm mb-2 text-text-muted">3월 카카오 상담톡 사용량</div>
                <StatCard value="0건" subtext="총 사용량" />
              </div>
              <div className="border border-border-default rounded-lg p-4 px-5 flex justify-between">
                <div className="flex flex-col">
                  <div className="text-sm mb-2 text-text-muted">3월 SMS인증/메시지 발송량</div>
                  <StatCard value="0건" subtext="SMS인증 총 발송량" />
                </div>
                <div className="flex flex-col items-end">
                  <div className="h-5" />
                  <div className="flex items-center gap-1 group relative">
                    <StatCard value="0건" subtext="메시지 총 발송량" align="right" />
                    <Lightbulb size={13} className="text-text-muted mt-1 cursor-help" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
              {/* Talk Usage Trend Chart */}
              <div className="border border-border-default rounded-lg p-4 px-5 h-[360px] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-text-default">3월 카카오 상담톡 일별 사용량 추이(건)</span>
                  <div className="bg-bg-subtle rounded-full p-0.5 flex gap-1 border border-border-default">
                    <button onClick={() => setTalkChartType('bar')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${talkChartType === 'bar' ? 'bg-bg-default shadow-sm border border-border-default text-text-default' : 'text-text-muted'}`}>막대</button>
                    <button onClick={() => setTalkChartType('line')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${talkChartType === 'line' ? 'bg-bg-default shadow-sm border border-border-default text-text-default' : 'text-text-muted'}`}>선형</button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {talkChartType === 'bar' ? (
                      <BarChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-default, #e5e5ea)" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--text-muted, #8A8A8E)' }} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-default, #e5e5ea)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {usageData.map((_, index) => <Cell key={`cell-${index}`} fill="#FAC858" />)}
                        </Bar>
                      </BarChart>
                    ) : (
                      <LineChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-default, #e5e5ea)" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--text-muted, #8A8A8E)' }} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-default, #e5e5ea)' }} />
                        <Line type="monotone" dataKey="value" stroke="#FAC858" strokeWidth={3} dot={{ r: 4, fill: '#FAC858', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>

              {/* SMS Usage Trend Chart */}
              <div className="border border-border-default rounded-lg p-4 px-5 h-[360px] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-text-default">3월 SMS인증/메시지 일별 발송량 추이(건)</span>
                  <div className="bg-bg-subtle rounded-full p-0.5 flex gap-1 border border-border-default">
                    <button onClick={() => setSmsChartType('bar')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${smsChartType === 'bar' ? 'bg-bg-default shadow-sm border border-border-default text-text-default' : 'text-text-muted'}`}>막대</button>
                    <button onClick={() => setSmsChartType('line')} className={`px-3 py-0.5 text-xs rounded-full transition-all ${smsChartType === 'line' ? 'bg-bg-default shadow-sm border border-border-default text-text-default' : 'text-text-muted'}`}>선형</button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {smsChartType === 'bar' ? (
                      <BarChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-default, #e5e5ea)" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--text-muted, #8A8A8E)' }} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-default, #e5e5ea)' }} />
                        <Bar dataKey="base" stackId="a" fill="#306AFE" radius={[0, 0, 0, 0]} />
                        <Bar dataKey="extra" stackId="a" fill="#71A0FF" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    ) : (
                      <LineChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-default, #e5e5ea)" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--text-muted, #8A8A8E)' }} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-default, #e5e5ea)' }} />
                        <Line type="monotone" dataKey="base" stroke="#306AFE" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="extra" stroke="#71A0FF" strokeWidth={2} dot={false} />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Bottom Traffic Summary */}
            <div className="border border-border-default rounded-lg p-4 px-5 mb-3">
              <div className="text-sm mb-4 text-text-muted">3월 챗봇 트래픽 사용량</div>
              <div className="flex justify-between items-center">
                <StatCard value="0건" subtext="기본 트래픽 총 사용량" />
                <StatCard value="0건" subtext="초과 트래픽 총 사용량" align="right" />
              </div>
            </div>

            {/* Extended Bottom Chart (Full Width) */}
            <div className="border border-border-default rounded-lg p-4 px-5 h-[360px] flex flex-col">
              <div className="text-sm mb-4 text-text-muted">3월 챗봇 트래픽 일별 사용량 추이(건)</div>
              <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-default, #e5e5ea)" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--text-muted, #8A8A8E)' }} />
                    <YAxis hide />
                    <Tooltip cursor={{ fill: 'var(--bg-subtle, #f5f5f5)' }} contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-default, #e5e5ea)' }} />
                    <Bar dataKey="base" fill="#306AFE" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
