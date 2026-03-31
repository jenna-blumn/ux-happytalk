import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LeftSidebar } from "./components/LeftSidebar";
import { Header } from "./components/Header";
import { LNB } from "./components/LNB";
import { OperationsDashboard } from "./components/OperationsDashboard";
import { PageHeader } from "./components/PageHeader";
import { ChatListPanel } from "./components/chat/ChatListPanel";
import { ChatDetail } from "./components/chat/ChatDetail";
import { CustomerInfo } from "./components/chat/CustomerInfo";
import { cn } from "./lib/utils";

// Page wrapper component
function InsightsPage() {
    return (
        <>
            <PageHeader
                title="운영 인사이트"
                description="상담 인력 운영 현황, 시스템 이용량, 과금 플랜 및 변동 추이를 종합적으로 제공합니다."
                showHelpBadge={true}
            />
            <OperationsDashboard />
        </>
    );
}

// Chat Page Component
function ChatPage() {
    return (
        <div className={cn("flex flex-row h-screen w-full overflow-hidden bg-app-bg")}>
            <ChatListPanel />
            <ChatDetail />
            <CustomerInfo />
        </div>
    );
}

// Placeholder pages for other routes
import { Input, Button, Badge, Card, CardHeader, CardTitle, CardContent } from "@blumnai-studio/blumnai-design-system";
import { Plus, Trash2, GripVertical, Clock, Save, RefreshCw, ChevronRight } from "lucide-react";

function SettingsPage() {
    return (
        <div className="max-w-4xl space-y-6">
            <PageHeader
                title="기본 설정"
                description="해피톡 서비스의 기본적인 시스템 환경과 인터페이스를 설정합니다."
            />

            <Card>
                <CardHeader className="pb-3 border-b border-darker">
                    <CardTitle className="text-[16px] font-bold text-fg-primary">서비스 프로필</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                    <div className="flex items-start gap-8">
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-20 rounded-[16px] bg-bg-tertiary border border-darker flex items-center justify-center overflow-hidden">
                                <span className="text-fg-muted text-[13px]">No Image</span>
                            </div>
                            <Button buttonStyle="secondary">변경</Button>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[13px] font-normal text-fg-tertiary">서비스 명칭</label>
                                    <Input defaultValue="HappyTalk Design Lab" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[13px] font-normal text-fg-tertiary">대표 웹사이트</label>
                                    <Input defaultValue="https://happytalk.io" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[13px] font-normal text-fg-tertiary">서비스 설명</label>
                                <Input defaultValue="고객과 브랜드를 연결하는 가장 쉬운 방법" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <Button>
                            <Save className="size-3.5" />
                            저장하기
                        </Button>
                        <Button buttonStyle="secondary">
                            <RefreshCw className="size-3.5" />
                            초기화
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-3 border-b border-darker text-fg-primary">
                    <CardTitle className="text-[16px] font-bold">관리자 정보</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4 text-fg-primary">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[13px] font-normal text-fg-tertiary">마스터 계정</label>
                            <Input defaultValue="master@happytalk.io" disabled />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[13px] font-normal text-fg-tertiary">비상 연락처</label>
                            <Input defaultValue="02-1234-5678" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function SettingsConditionsPage() {
    return (
        <div className="max-w-4xl space-y-6 text-fg-primary">
            <PageHeader
                title="기본 조건 설정"
                description="상담 서비스의 기본 조건 및 운영 시간을 설정합니다."
            />

            <Card>
                <CardHeader className="pb-3 border-b border-darker">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-[16px] font-bold text-fg-primary">운영 시간 설정</CardTitle>
                        <Badge label="운영 중" color="green" />
                    </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="divide-y divide-darker border border-darker rounded-[12px] bg-white overflow-hidden shadow-sort-card">
                        {["월요일", "화요일", "수요일", "목요일", "금요일"].map((day) => (
                            <div key={day} className="flex items-center justify-between p-4 hover:bg-bg-secondary transition-colors group">
                                <div className="flex items-center gap-3">
                                    <Clock className="size-5 text-fg-tertiary group-hover:text-primary transition-colors" />
                                    <span className="text-[14px] font-bold text-fg-primary">{day}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Input className="w-24 text-center font-medium" defaultValue="09:00" />
                                    <span className="text-fg-muted font-bold">-</span>
                                    <Input className="w-24 text-center font-medium" defaultValue="18:00" />
                                    <div className="ml-4 h-5 w-[1px] bg-darker" />
                                    <Button buttonStyle="ghost" className="text-primary font-bold">점심시간 추가</Button>
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center justify-between p-4 bg-bg-secondary/50">
                            <div className="flex items-center gap-3">
                                <Clock className="size-5 text-fg-muted opacity-50" />
                                <span className="text-[14px] font-normal text-fg-muted">주말 (토, 일)</span>
                            </div>
                            <span className="text-[13px] text-fg-muted font-bold px-2">휴무</span>
                        </div>
                    </div>
                    <div className="flex justify-end pt-2">
                        <Button className="w-24">설정 저장</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-3 border-b border-darker text-fg-primary">
                    <CardTitle className="text-[16px] font-bold">상담 불가 메시지</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-[13px] font-normal text-fg-tertiary">운영 시간 외 자동 응답</label>
                        <textarea
                            className="w-full h-32 p-3 text-[14px] bg-white border border-darker rounded-[8px] focus:outline-none focus:border-primary focus:shadow-sort-input transition-all placeholder:text-fg-tertiary shadow-sort-component font-normal"
                            placeholder="현재는 운영 시간이 아닙니다. 내일 오전 9시에 다시 연락 부탁드립니다."
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function SettingsCategoriesPage() {
    const categories = [
        { id: 1, name: "제품 문의", subCount: 4, status: "사용 중" },
        { id: 2, name: "배송/결제", subCount: 12, status: "사용 중" },
        { id: 3, name: "AS/교환", subCount: 8, status: "사용 중" },
        { id: 4, name: "기타 문의", subCount: 2, status: "미사용" },
    ];

    return (
        <div className="max-w-4xl space-y-6 text-fg-primary">
            <PageHeader
                title="상담 분류 관리"
                description="상담 유형 및 카테고리를 관리하고 분류 체계를 설정합니다."
            />

            <div className="flex justify-between items-center bg-white/6 border border-darker p-4 rounded-[12px] shadow-sort-card">
                <div className="flex items-center gap-4">
                    <Button buttonStyle="secondary">전체 카테고리</Button>
                    <div className="h-4 w-[1px] bg-darker" />
                    <span className="text-[13px] text-fg-tertiary">총 {categories.length}개의 대분류</span>
                </div>
                <Button>
                    <Plus className="size-4" />
                    새 분류 추가
                </Button>
            </div>

            <Card>
                <CardContent className="p-0 text-fg-primary">
                    <div className="divide-y divide-darker">
                        {categories.map((cat) => (
                            <div key={cat.id} className="flex items-center justify-between p-4 hover:bg-white/4 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="p-1 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                                        <GripVertical className="size-4 text-fg-muted" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold">{cat.name}</span>
                                        <span className="text-[12px] text-fg-tertiary">하위 분류: {cat.subCount}개</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge label={cat.status} color={cat.status === "사용 중" ? "green" : "neutral"} />
                                    <Button buttonStyle="ghost">
                                        <ChevronRight className="size-4 text-fg-muted" />
                                    </Button>
                                    <div className="h-4 w-[1px] bg-darker mx-1" />
                                    <Button buttonStyle="ghost" className="text-red-500 hover:bg-red-50 text-[12px]">
                                        <Trash2 className="size-3.5" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function SettingsChatButtonPage() {
    return (
        <>
            <PageHeader
                title="채팅 버튼 설정 v2"
                description="웹사이트에 표시될 채팅 버튼의 디자인과 동작을 설정합니다."
            />
            <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">채팅 버튼 설정 페이지입니다.</p>
            </div>
        </>
    );
}

function ConsultationPage() {
    return (
        <>
            <PageHeader
                title="상담 관리"
                description="상담 관리 화면입니다."
            />
            <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">상담 관리 브라우저가 여기에 표시됩니다.</p>
            </div>
        </>
    );
}

function CustomerPage() {
    return (
        <>
            <PageHeader
                title="고객 관리"
                description="고객 관리 화면입니다."
            />
            <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">고객 목록 및 상세 정보가 여기에 표시됩니다.</p>
            </div>
        </>
    );
}

function AIPage() {
    return (
        <>
            <PageHeader
                title="AI"
                description="AI 상담 에이전트 및 연동 설정을 관리합니다."
            />
            <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">AI 관련 대시보드입니다.</p>
            </div>
        </>
    );
}

function NoticePage() {
    return (
        <>
            <PageHeader
                title="공지사항"
                description="업데이트 소식 및 공지사항을 확인하세요."
            />
            <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">공지사항 목록입니다.</p>
            </div>
        </>
    );
}

function InfoPage() {
    return (
        <>
            <PageHeader
                title="정보"
                description="서비스 이용 정보 및 도움말입니다."
            />
            <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">도움말 및 안내 페이지입니다.</p>
            </div>
        </>
    );
}

function IntegrationPage() {
    return (
        <>
            <PageHeader
                title="연동"
                description="외부 서비스와의 연동을 관리합니다."
            />
            <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600">연동 설정 페이지입니다.</p>
            </div>
        </>
    );
}

// Main layout component
function AppLayout() {
    const location = useLocation();
    const isChatPage = location.pathname.startsWith("/chat");

    return (
        <div className="w-full h-screen bg-app-bg flex flex-row overflow-hidden">
            {/* Left Sidebar - 56px width */}
            <LeftSidebar />

            {/* LNB Menu - hidden on chat page */}
            {!isChatPage && (
                <div className="w-[240px] h-screen bg-lnb-bg border-r border-lnb-border shrink-0">
                    <LNB />
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden bg-app-bg">
                <Header />
                <div className={cn(
                    "w-full h-full overflow-hidden flex-1 flex flex-col",
                    !isChatPage && "p-6 overflow-y-auto"
                )}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/insights" replace />} />
                        <Route path="/insights" element={<InsightsPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/customer" element={<CustomerPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/ai" element={<AIPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/settings/conditions" element={<SettingsConditionsPage />} />
                        <Route path="/settings/categories" element={<SettingsCategoriesPage />} />
                        <Route path="/settings/chat-button" element={<SettingsChatButtonPage />} />
                        <Route path="/notice" element={<NoticePage />} />
                        <Route path="/info" element={<InfoPage />} />
                        <Route path="/integration" element={<IntegrationPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export function App() {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
}
