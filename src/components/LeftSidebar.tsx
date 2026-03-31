import { useNavigate, useLocation } from "react-router-dom";
import {
    Chats,
    Users,
    ChatTeardropText,
    Sparkle,
    GearSix,
    Megaphone,
    Info,
    SquaresFour,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SidebarItem({
    icon: Icon,
    label,
    isActive,
    onClick,
}: {
    icon: any;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "relative flex flex-col items-center justify-center w-14 h-14 rounded-lg transition-all duration-200 group outline-none",
                isActive
                    ? "text-white"
                    : "text-white/50 hover:bg-white/10 hover:text-white/80"
            )}
            title={label}
        >
            <Icon size={20} weight={isActive ? "fill" : "regular"} />
            <span
                className={cn(
                    "text-[10px] mt-1 font-medium truncate w-full text-center transition-colors",
                    isActive ? "text-white" : "text-white/50"
                )}
            >
                {label}
            </span>
            {isActive && (
                <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
            )}
        </button>
    );
}

export function LeftSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className="flex flex-col h-screen bg-[#1B1D21] w-16 shrink-0 select-none">
            {/* Logo */}
            <div className="flex items-center justify-center h-14 mb-1">
                <div className="w-8 h-8 cursor-pointer">
                    <img
                        src="https://patch-counselor.happytalk.io/images/happytalk-logo-32.svg"
                        alt="HappyTalk"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 flex flex-col items-center gap-1 px-1 py-2 overflow-y-auto">
                <SidebarItem
                    icon={Chats}
                    label="채팅"
                    isActive={currentPath.startsWith("/chat")}
                    onClick={() => navigate("/chat")}
                />
                <SidebarItem
                    icon={Users}
                    label="고객관리"
                    isActive={currentPath.startsWith("/customer")}
                    onClick={() => navigate("/customer")}
                />
                <SidebarItem
                    icon={ChatTeardropText}
                    label="상담관리"
                    isActive={currentPath.startsWith("/consultation")}
                    onClick={() => navigate("/consultation")}
                />
                <SidebarItem
                    icon={Sparkle}
                    label="AI"
                    isActive={currentPath.startsWith("/ai")}
                    onClick={() => navigate("/ai")}
                />
                <SidebarItem
                    icon={GearSix}
                    label="설정"
                    isActive={currentPath.startsWith("/settings")}
                    onClick={() => navigate("/settings")}
                />
            </div>

            {/* Bottom Navigation */}
            <div className="flex flex-col items-center gap-1 px-1 py-3 border-t border-white/10">
                <SidebarItem
                    icon={Megaphone}
                    label="공지"
                    isActive={currentPath.startsWith("/notice")}
                    onClick={() => navigate("/notice")}
                />
                <SidebarItem
                    icon={Info}
                    label="정보"
                    isActive={currentPath.startsWith("/info")}
                    onClick={() => navigate("/info")}
                />
                <SidebarItem
                    icon={SquaresFour}
                    label="연동"
                    isActive={currentPath.startsWith("/integration")}
                    onClick={() => navigate("/integration")}
                />
            </div>
        </aside>
    );
}
