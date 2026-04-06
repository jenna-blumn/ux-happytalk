import type { LinkButtonProps, LinkButtonIconType, LinkButtonSize, LinkButtonType } from './LinkButton.types';
declare const linkButtonVariants: (props?: ({
    linkType?: "default" | "informative" | "muted" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/**
 * LinkButton 컴포넌트
 *
 * 텍스트 링크 스타일의 네비게이션 버튼입니다.
 *
 * @example
 * <LinkButton href="/page" label="페이지 이동" />
 */
export declare const LinkButton: import("react").ForwardRefExoticComponent<LinkButtonProps & import("react").RefAttributes<HTMLElement>>;
export { linkButtonVariants };
export type { LinkButtonProps, LinkButtonSize, LinkButtonType, LinkButtonIconType };
