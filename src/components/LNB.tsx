import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import svgPaths from "../imports/svg-yktbh51fzf";
import { cn } from "./ui/utils";

// --- Icons & Buttons ---

function IcToggleChevronS() {
    return (
        <div
            className="relative shrink-0 size-[16px]"
            data-name="ic-toggle-chevron-s16"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
            >
                <g id="ic-toggle-chevron-s16">
                    <path
                        d="M5 8L3 6L5 4"
                        id="Vector 1761"
                        stroke="var(--stroke-0, var(--text-main))"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <path
                        d="M9 4H13"
                        id="Vector 1770"
                        stroke="var(--stroke-0, var(--text-main))"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M9 8H13"
                        id="Vector 1771"
                        stroke="var(--stroke-0, var(--text-main))"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M3 12H13"
                        id="Vector 1772"
                        stroke="var(--stroke-0, var(--text-main))"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>
        </div>
    );
}

function ButtonShowHideHeader() {
    return (
        <div
            className="box-border content-stretch flex gap-[10px] items-center justify-center p-[7px] relative rounded-[4px] shrink-0 size-[24px] cursor-pointer hover:bg-zinc-100 transition-colors"
            data-name="button/show-hide"
        >
            <IcToggleChevronS />
        </div>
    );
}

function ButtonShowHideItem() {
    return (
        <div
            className="relative shrink-0 size-[24px]"
            data-name="button/show-hide"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="button/show-hide">
                    <path
                        d={svgPaths.p13000e80}
                        fill="var(--fill-0, var(--text-muted))"
                        id="Combined Shape"
                    />
                </g>
            </svg>
        </div>
    );
}

// --- Header ---

function LnbHead() {
    return (
        <div
            className="relative shrink-0 w-full"
            data-name="LNB/Head"
        >
            <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[24px] relative w-full">
                    <p className="font-sans font-bold leading-[20px] not-italic relative shrink-0 text-content-main text-[15px] text-nowrap whitespace-pre">
                        설정
                    </p>
                    <ButtonShowHideHeader />
                </div>
            </div>
        </div>
    );
}

// --- Reusable Menu Item ---

interface LnbMenuItemProps {
    label: string;
    rightElement?: React.ReactNode;
    hasSeparator?: boolean;
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
}

function LnbMenuItem({
    label,
    rightElement,
    hasSeparator,
    className,
    onClick,
    isActive,
}: LnbMenuItemProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "group transition-colors duration-200 cursor-pointer relative rounded-[4px] shrink-0 w-full h-[44px]",
                isActive ? "bg-lnb-hover" : "hover:bg-lnb-hover",
                className
            )}
            data-name="LNB/Menu"
        >
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex items-center justify-between px-[16px] relative w-full h-full">
                    <p
                        className={cn(
                            "font-sans leading-[20px] not-italic relative shrink-0 text-[13px] text-nowrap tracking-[-0.26px] whitespace-pre",
                            isActive ? "font-bold text-primary" : "text-content-main"
                        )}
                    >
                        {label}
                    </p>
                    {rightElement}
                </div>
            </div>
            {hasSeparator && (
                <div
                    aria-hidden="true"
                    className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none"
                />
            )}
        </div>
    );
}

// --- Sub Menus (Children) ---

interface SubMenuItemType {
    label: string;
    path?: string;
}

function LnbSubMenuItem({
    label,
    active,
    onClick,
}: SubMenuItemType & { active?: boolean; onClick?: () => void }) {
    return (
        <div
            onClick={onClick}
            className="hover:bg-lnb-hover transition-colors duration-200 cursor-pointer relative shrink-0 w-full"
            data-name="LNB/Menu2"
        >
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex items-center pl-[36px] pr-[12px] py-[8px] relative w-full">
                    <p
                        className={cn(
                            "font-sans leading-[20px] not-italic relative shrink-0 text-[13px] text-nowrap tracking-[-0.26px] whitespace-pre",
                            active
                                ? "font-bold text-primary"
                                : "text-content-sub",
                        )}
                    >
                        {label}
                    </p>
                </div>
            </div>
        </div>
    );
}

interface LnbSubMenuListProps {
    items: SubMenuItemType[];
    hasSeparator?: boolean;
    currentPath: string;
    onNavigate: (path: string) => void;
}

function LnbSubMenuList({ items, hasSeparator, currentPath, onNavigate }: LnbSubMenuListProps) {
    if (!items || items.length === 0) return null;

    return (
        <div
            className="bg-zinc-50 box-border content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-full"
            data-name="LNB/SubMenu/List"
        >
            {items.map((item, index) => (
                <LnbSubMenuItem
                    key={index}
                    label={item.label}
                    path={item.path}
                    active={item.path ? currentPath === item.path : false}
                    onClick={() => item.path && onNavigate(item.path)}
                />
            ))}

            {hasSeparator && (
                <div
                    aria-hidden="true"
                    className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none"
                />
            )}
        </div>
    );
}

function LnbList({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative shrink-0 w-full">
            <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[2px] items-start justify-center p-[4px] relative w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

// --- Menu Data ---

interface MainMenuItemType {
    label: string;
    rightElement?: React.ReactNode;
    hasSeparator?: boolean;
    children?: SubMenuItemType[];
    path?: string;
}

const MENU_ITEMS: MainMenuItemType[] = [
    {
        label: "운영 인사이트",
        hasSeparator: true,
        path: "/insights"
    },
    {
        label: "기본 설정",
        rightElement: <ButtonShowHideItem />,
        hasSeparator: true,
        path: "/settings", // Default path for parent
        children: [
            { label: "기본 조건 설정", path: "/settings/conditions" },
            { label: "상담 분류 관리", path: "/settings/categories" },
            { label: "채팅 버튼 설정 v2", path: "/settings/chat-button" },
        ],
    },
    {
        label: "상담 운영",
        rightElement: <ButtonShowHideItem />,
        hasSeparator: true,
        path: "/consultation"
    },
    {
        label: "고급 설정",
        rightElement: <ButtonShowHideItem />,
        hasSeparator: true,
        path: "/advanced",
        children: [
            { label: "AI상담 에이전트", path: "/advanced/ai-agent" },
        ],
    },
    {
        label: "확장 서비스 관리",
        rightElement: <ButtonShowHideItem />,
        hasSeparator: true,
        path: "/extensions"
    },
];

// --- Main Component ---

export function LNB() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div
            className="bg-lnb-bg content-stretch flex flex-col items-start relative size-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            data-name="LNB"
        >
            <LnbHead />

            <LnbList>
                {MENU_ITEMS.map((item, index) => {
                    const isParentActive = item.children
                        ? item.children.some(child => child.path === location.pathname)
                        : item.path === location.pathname;

                    return (
                        <React.Fragment key={index}>
                            <LnbMenuItem
                                label={item.label}
                                rightElement={item.rightElement}
                                hasSeparator={item.children ? false : item.hasSeparator}
                                isActive={isParentActive}
                                onClick={() => {
                                    // If it has children, maybe expand/collapse? 
                                    // For now, if it has a path, navigate there. 
                                    // If it has children and no path, stick to first child or do nothing.
                                    if (item.children && item.children.length > 0) {
                                        // Optional: Navigate to first child
                                        if (item.children[0].path) handleNavigate(item.children[0].path);
                                    } else if (item.path) {
                                        handleNavigate(item.path);
                                    }
                                }}
                            />
                            {item.children && (
                                <LnbSubMenuList
                                    items={item.children}
                                    hasSeparator={item.hasSeparator}
                                    currentPath={location.pathname}
                                    onNavigate={handleNavigate}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </LnbList>
        </div>
    );
}
