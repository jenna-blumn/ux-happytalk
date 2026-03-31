import type { IconProps } from './Icon.types';
/**
 * 카테고리별 UI 아이콘 컴포넌트
 * [category, name] 튜플 형식으로 타입 안전한 아이콘 선택 지원
 * 번들 최적화를 위해 카테고리 단위 지연 로딩
 */
export declare const Icon: import("react").ForwardRefExoticComponent<Omit<IconProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
