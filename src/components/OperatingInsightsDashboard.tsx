import {
    Calendar,
    MessageSquare,
    Share2,
    Zap,
    RotateCw,
    HelpCircle,
    Lightbulb,
    Coins,
} from "lucide-react";
import {
    Divider,
    Text,
    AreaChart,
    BarChart,
    Flex,
} from "@tremor/react";
import { Button, Card, Badge } from "@blumnai-studio/blumnai-design-system";

// Sample data for charts
const chartData = [
    { day: "5", value: 120 },
    { day: "10", value: 450 },
    { day: "15", value: 300 },
    { day: "20", value: 500 },
    { day: "25", value: 420 },
];

export function OperatingInsightsDashboard() {
    return (
        <div className="space-y-4 font-sans max-w-7xl">
            {/* Top Description and Link */}
            <Flex justifyContent="between" alignItems="start" className="mb-2">
                <Text className="text-tremor-content">
                    상담 인력 운영 현황, 시스템 이용량, 과금 플랜 및 변동 추이를 종합적으로 제공합니다.
                </Text>
                <div className="flex items-center gap-1 text-xs text-zinc-400 cursor-pointer hover:text-zinc-600 transition-colors">
                    <Lightbulb className="size-3" />
                    <span style={{ letterSpacing: '-0.24px' }}>이전 대시보드 안내(클릭)</span>
                </div>
            </Flex>

            {/* Notice Banner */}
            <div className="bg-zinc-900/[0.03] border border-zinc-900/10 rounded-[12px] p-4 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="font-normal text-[#111115] text-sm">해피톡 공지사항</span>
                    <span className="text-primary font-normal text-sm">
                        스머프의 공지사항 관리에서 등록한 시스템 공지사항입니다.
                    </span>
                </div>
                <span className="text-zinc-400 text-xs tabular-nums">2025.07.28 18:40:29</span>
            </div>

            {/* Row 1: Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Work Status */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[16px] font-bold text-[#111115]">근무 현황</h3>
                        <Calendar className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm">오늘 상담인원</span>
                            <div className="flex items-center gap-2">
                                <span className="font-normal text-primary text-sm">1명</span>
                                <span className="text-xs text-zinc-400 tabular-nums">00:00~23:59</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm">내일 상담인원</span>
                            <div className="flex items-center gap-2">
                                <span className="font-normal text-primary text-sm">1명</span>
                                <span className="text-xs text-zinc-400 tabular-nums">00:00~23:59</span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Chat Channels */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[16px] font-bold text-[#111115]">채팅 채널</h3>
                        <MessageSquare className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-y-5">
                        <div className="flex justify-between items-center pr-4 border-r border-zinc-100">
                            <span className="text-zinc-500 text-sm">해피톡</span>
                            <Badge label="사용" color="blue" />
                        </div>
                        <div className="flex justify-between items-center pl-4">
                            <span className="text-zinc-500 text-sm">카카오톡</span>
                            <Badge label="미사용" color="neutral" />
                        </div>
                        <div className="flex justify-between items-center pr-4 border-r border-zinc-100">
                            <span className="text-zinc-500 text-sm">네이버톡톡</span>
                            <Badge label="미사용" color="neutral" />
                        </div>
                        <div className="flex justify-between items-center pl-4">
                            <span className="text-zinc-500 text-sm">인스타그램</span>
                            <Badge label="미사용" color="neutral" />
                        </div>
                    </div>
                </Card>

                {/* Integration Status */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[16px] font-bold text-[#111115]">연동 현황</h3>
                        <Share2 className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm">주문연동</span>
                            <Badge label="미연동" color="neutral" />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm">SMS인증</span>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-400 text-sm">미사용</span>
                                <Button buttonStyle="ghost" size="xs" className="text-primary font-bold">
                                    설정
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Row 2: Plan & Cash */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Plan Status */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[16px] font-bold text-[#111115]">이용 플랜 현황</h3>
                        <Zap className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="space-y-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="font-normal text-[#111115] text-sm">해피톡</span>
                                <Badge label="Enterprise" color="yellow" />
                            </div>
                            <span className="text-primary font-normal text-base">1개</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm">챗봇</span>
                            <span className="text-zinc-400 text-sm">미사용 (0건/0건)</span>
                        </div>
                    </div>
                </Card>

                {/* Talk Cash */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[16px] font-bold text-[#111115]">톡캐시</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#111115] tracking-tight">0원</span>
                            <Coins className="h-5 w-5 text-sort-amber" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-zinc-400">차감 예정일 : 2025.12.01</span>
                            <div className="flex items-center gap-3">
                                <span className="text-sort-red font-normal text-sm">0원 차감 예정</span>
                                <Button buttonStyle="primary" size="xs" className="px-3 font-normal bg-sort-green hover:bg-sort-green/90 ring-0 border-none rounded-[4px]">
                                    충전
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Statistics Section */}
            <div className="space-y-4 pt-4">
                <Flex justifyContent="between" alignItems="center" className="text-xs text-tremor-content-subtle">
                    <span>조회 기간 : 2025.11.01 ~ 2025.11.24</span>
                    <Flex justifyContent="end" className="gap-1 cursor-pointer hover:text-tremor-content-emphasis w-fit">
                        <span>마지막 업데이트 : 2025.11.24 17:21:54</span>
                        <RotateCw className="h-3 w-3" />
                    </Flex>
                </Flex>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Chart Block 1 */}
                    <Card className="p-6">
                        <div className="mb-4">
                            <p className="text-zinc-500 text-[14px]">11월 카카오 상담톡 사용량</p>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-[#111115]">0</span>
                                <span className="text-sm text-zinc-400">건</span>
                            </div>
                            <p className="text-xs text-zinc-400 mt-1">총 사용량</p>
                        </div>
                        <Divider className="my-6" />
                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-normal text-[#111115]">일별 사용량 추이(건)</h4>
                                <div className="flex bg-zinc-900/[0.04] rounded-[6px] p-[2px]">
                                    <Button size="2xs" buttonStyle="primary" className="px-3">막대</Button>
                                    <Button size="2xs" buttonStyle="ghost" className="px-3">선형</Button>
                                </div>
                            </div>
                            <div className="h-72">
                                <BarChart
                                    data={chartData}
                                    index="day"
                                    categories={["value"]}
                                    colors={["blue"]}
                                    showLegend={false}
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Chart Block 2 */}
                    <Card className="p-6">
                        <div className="mb-4">
                            <p className="text-zinc-500 text-[14px]">11월 SMS인증/메시지 발송량</p>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-[#111115]">0</span>
                                <span className="text-sm text-zinc-400">건</span>
                            </div>
                            <div className="flex justify-between items-center text-xs text-zinc-400 mt-1">
                                <span>SMS인증 총 발송량</span>
                                <div className="flex items-center gap-1">
                                    메시지 총 발송량 <HelpCircle className="h-3 w-3" />
                                </div>
                            </div>
                        </div>
                        <Divider className="my-6" />
                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-normal text-[#111115]">일별 발송량 추이(건)</h4>
                                <div className="flex bg-zinc-900/[0.04] rounded-[6px] p-[2px]">
                                    <Button size="2xs" buttonStyle="primary" className="px-3">막대</Button>
                                    <Button size="2xs" buttonStyle="ghost" className="px-3">선형</Button>
                                </div>
                            </div>
                            <div className="h-72">
                                <AreaChart
                                    data={chartData}
                                    index="day"
                                    categories={["value"]}
                                    colors={["emerald"]}
                                    showLegend={false}
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
