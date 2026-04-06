import type { ControlButtonProps, ControlButtonSize, ControlButtonShape, ControlButtonStyle } from './ControlButton.types';
declare const controlButtonVariants: (props?: ({
    buttonStyle?: "default" | "inverted" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    shape?: "circle" | "rounded" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/**
 * ControlButton 컴포넌트
 *
 * 아이콘만 표시되는 컴팩트 액션 버튼입니다.
 *
 * @example
 * <ControlButton icon={['system', 'edit']} size="md" />
 */
export declare const ControlButton: import("react").ForwardRefExoticComponent<ControlButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { controlButtonVariants };
export type { ControlButtonProps, ControlButtonSize, ControlButtonShape, ControlButtonStyle };
