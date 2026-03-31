import type { BadgeProps } from './Badge.types';
/**
 * Badge 컴포넌트
 *
 * 텍스트, 아이콘, 이미지 또는 점이 있는 작은 배지를 표시합니다.
 * 다양한 변형, 크기, 색상, 모양을 지원합니다.
 * 색상은 현재 테마(라이트/다크 모드)에 자동으로 적응합니다.
 *
 * @example
 * <Badge label="New" color="blue" size="md" />
 */
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLDivElement>>;
