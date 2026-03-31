import type { AvatarProps } from './Avatar.types';
/**
 * Avatar 컴포넌트
 *
 * 이니셜, 이미지 또는 빈 상태를 지원하는 사용자 아바타를 표시합니다.
 * 다양한 크기, 모양(원형/둥근 사각형), 상태 인디케이터를 지원합니다.
 *
 * @example
 * <Avatar variant="initials" initials="AB" size="md" />
 */
export declare const Avatar: import("react").ForwardRefExoticComponent<AvatarProps & import("react").RefAttributes<HTMLDivElement>>;
