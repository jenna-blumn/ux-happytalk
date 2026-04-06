import { type ReactNode, type ReactElement } from 'react';
import { type Placement } from '@floating-ui/react';
export interface TooltipTriggerProps {
    /**
     * 툴팁을 트리거하는 요소
     */
    children: ReactElement;
    /**
     * 툴팁에 표시할 내용 (문자열 또는 ReactNode)
     */
    content: ReactNode;
    /**
     * 배지 텍스트 (간단한 Tooltip과 함께 사용)
     */
    badge?: string;
    /**
     * 툴팁 위치
     * @default 'top'
     */
    placement?: Placement;
    /**
     * 호버 지연 시간 (ms)
     * @default 200
     */
    delay?: number;
    /**
     * 툴팁 비활성화 여부
     */
    disabled?: boolean;
    /**
     * 툴팁 최대 너비 (px)
     * @default 240
     */
    maxWidth?: number;
    /**
     * 메인 축 오프셋 (px)
     * @default 8
     */
    sideOffset?: number;
    /**
     * 크로스 축 오프셋 (px)
     * @default 0
     */
    alignOffset?: number;
    /**
     * 툴팁 너비 (px)
     */
    width?: number;
    /**
     * 툴팁 최소 너비 (px)
     */
    minWidth?: number;
    /**
     * 제어 모드: 열림 상태
     */
    open?: boolean;
    /**
     * 제어 모드: 열림 상태 변경 콜백
     */
    onOpenChange?: (open: boolean) => void;
}
export declare function TooltipTrigger({ children, content, badge, placement, delay, disabled, maxWidth, sideOffset, alignOffset, width, minWidth, open: controlledOpen, onOpenChange, }: TooltipTriggerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace TooltipTrigger {
    var displayName: string;
}
