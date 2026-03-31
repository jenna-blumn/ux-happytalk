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
import { cn } from "./ui/utils";

// HappyTalk Logo Icon
function IcChannelHappytalkBalloonS() {
    return (
        <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[40px] mb-4 flex items-center justify-center" data-name="ic-channel-happytalk_balloon-s48">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.4769 17.0081H19.6027C16.5545 17.0081 14.0795 19.4793 14.0795 22.5275V29.8744C14.0795 30.2168 14.3549 30.4922 14.6973 30.4922C14.902 30.4922 15.0807 30.3917 15.1924 30.2391H15.1998C16.2084 28.9067 17.8013 28.047 19.6027 28.047H26.4769C29.5251 28.047 32.0001 25.5757 32.0001 22.5275C32.0001 19.4793 29.5251 17.0081 26.4769 17.0081Z" fill="#097FBA" />
                <path d="M23.9159 13.4872H17.0379C13.9898 13.4872 11.5185 15.9585 11.5185 19.0104V26.3572C11.5185 26.6996 11.7939 26.975 12.1363 26.975C12.341 26.975 12.5234 26.8745 12.635 26.722C13.6436 25.3933 15.2403 24.5335 17.0379 24.5335H23.9159C26.964 24.5335 29.439 22.0622 29.439 19.0104C29.439 15.9585 26.964 13.4872 23.9159 13.4872Z" fill="#4EB548" />
                <path d="M21.3554 9.9664H14.4812C11.433 9.9664 8.958 12.4377 8.958 15.4858V22.8327C8.958 23.1751 9.2334 23.4505 9.5758 23.4505C9.7805 23.4505 9.9629 23.35 10.0746 23.1974C11.0794 21.865 12.6798 21.0053 14.4775 21.0053H21.3516C24.3998 21.0053 26.8711 18.534 26.8711 15.4821C26.8711 12.4302 24.3961 9.9626 21.3516 9.9626" fill="#FFD23A" />
            </svg>
        </div>
    );
}

function SidebarItem({
    icon: Icon,
    isActive,
    onClick
}: {
    icon: any;
    isActive?: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            className={cn(
                "cursor-pointer content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-[56px] hover:bg-white/10 transition-colors",
                isActive && "bg-white/10"
            )}
            onClick={onClick}
        >
            <div className="relative flex items-center justify-center size-[20px]">
                <Icon size={20} weight="fill" color="white" />
            </div>
        </div>
    );
}

export function LeftSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <div className="bg-sidebar-bg box-border content-stretch flex flex-col h-screen items-center px-0 py-[8px] relative shrink-0 w-[56px] select-none" data-name="navigation lnb">
            {/* Top Section */}
            <div className="flex flex-col items-center w-full">
                <IcChannelHappytalkBalloonS />

                {/* Group 1 */}
                <SidebarItem
                    icon={Chats}
                    isActive={currentPath.startsWith("/chat")}
                    onClick={() => navigate("/chat")}
                />
                <SidebarItem
                    icon={Users}
                    isActive={currentPath.startsWith("/customer")}
                    onClick={() => navigate("/customer")}
                />
                <SidebarItem
                    icon={ChatTeardropText}
                    isActive={currentPath.startsWith("/consultation")}
                    onClick={() => navigate("/consultation")}
                />
                <SidebarItem
                    icon={Sparkle}
                    isActive={currentPath.startsWith("/ai")}
                    onClick={() => navigate("/ai")}
                />
                <SidebarItem
                    icon={GearSix}
                    isActive={currentPath.startsWith("/settings")}
                    onClick={() => navigate("/settings")}
                />
            </div>

            {/* Spacer to push Group 2 to bottom */}
            <div className="flex-1" />

            {/* Group 2 */}
            <div className="flex flex-col items-center w-full pb-4">
                <SidebarItem
                    icon={Megaphone}
                    isActive={currentPath.startsWith("/notice")}
                    onClick={() => navigate("/notice")}
                />
                <SidebarItem
                    icon={Info}
                    isActive={currentPath.startsWith("/info")}
                    onClick={() => navigate("/info")}
                />
                <SidebarItem
                    icon={SquaresFour}
                    isActive={currentPath.startsWith("/integration")}
                    onClick={() => navigate("/integration")}
                />
            </div>
        </div>
    );
}
