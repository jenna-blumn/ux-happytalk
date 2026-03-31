import type { IconType } from '../../icons/Icon/Icon.types';
import type { AvatarBadgeLocation, AvatarShape, AvatarSize, AvatarStatus } from './Avatar.types';
interface AvatarBadgeProps {
    status: AvatarStatus;
    size: AvatarSize;
    shape: AvatarShape;
    badgeLocation: AvatarBadgeLocation;
    logoImage?: string;
    icon?: IconType;
    color?: string;
}
/**
 * AvatarBadge 컴포넌트
 *
 * 아바타의 우측 상단 또는 우측 하단에 위치한 상태 인디케이터
 * (온라인, 오프라인, 알림, 체크마크, 로고, 아이콘)를 표시합니다.
 */
export declare const AvatarBadge: ({ status, size, shape, badgeLocation, logoImage, icon, color, }: AvatarBadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
