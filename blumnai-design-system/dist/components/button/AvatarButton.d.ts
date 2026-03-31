import type { AvatarButtonProps, AvatarButtonIconType, AvatarButtonSize, AvatarButtonStyle } from './AvatarButton.types';
declare const avatarButtonVariants: (props?: ({
    buttonStyle?: "default" | "dashed" | "soft" | null | undefined;
    size?: "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/**
 * AvatarButton 컴포넌트
 *
 * 아바타가 포함된 사용자 프로필 버튼입니다. 드롭다운 표시를 지원합니다.
 *
 * @example
 * <AvatarButton avatar="/avatar.jpg" alt="홍길동" showDropdown />
 */
export declare const AvatarButton: import("react").ForwardRefExoticComponent<AvatarButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { avatarButtonVariants };
export type { AvatarButtonProps, AvatarButtonSize, AvatarButtonStyle, AvatarButtonIconType };
