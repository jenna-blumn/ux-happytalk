import { type HTMLAttributes } from 'react';
import type { IconTypeWithFill } from '../../icons/Icon';
import type { TooltipItemType } from './Tooltip.types';
export type { TooltipItemType } from './Tooltip.types';
export interface TooltipItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /**
     * 툴팁 아이템 타입
     * - `divider`: 구분선
     * - `label`: 라벨 및 캡션
     * - `item`: 인디케이터/아이콘, 라벨, 캡션
     * - `text`: 텍스트
     */
    type: TooltipItemType;
    /** 라벨 텍스트 */
    label?: string;
    /** 캡션 텍스트 */
    caption?: string;
    /** 인디케이터 색상 (hex 또는 색상명) */
    indicatorColor?: string;
    /** 아이콘 타입 */
    icon?: IconTypeWithFill;
    /** 텍스트 내용 */
    text?: string;
}
/**
 * 툴팁 아이템 컴포넌트
 */
export declare const TooltipItem: import("react").ForwardRefExoticComponent<TooltipItemProps & import("react").RefAttributes<HTMLDivElement>>;
