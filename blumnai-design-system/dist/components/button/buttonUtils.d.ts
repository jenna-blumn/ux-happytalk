import { type ReactNode } from 'react';
import type { IconType } from '../icons/Icon/Icon.types';
/**
 * 아이콘 튜플 또는 ReactNode를 렌더링하는 공통 유틸리티
 */
export declare const renderButtonIcon: (icon: IconType | [string, string, boolean | string] | ReactNode, size: number, color: string) => ReactNode;
