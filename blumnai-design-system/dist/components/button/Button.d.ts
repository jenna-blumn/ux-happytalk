import type { ButtonProps, ButtonIconType, ButtonStyle, ButtonVariant, ButtonSize, ButtonShape, ButtonColor } from './Button.types';
declare const buttonVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "2xs" | null | undefined;
    shape?: "rounded" | "pill" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/**
 * Button 컴포넌트
 *
 * 다양한 스타일, 크기, 아이콘을 지원하는 범용 버튼입니다.
 *
 * @example
 * <Button buttonStyle="primary" size="md">저장</Button>
 */
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { buttonVariants };
export type { ButtonProps, ButtonStyle, ButtonVariant, ButtonSize, ButtonShape, ButtonIconType, ButtonColor };
