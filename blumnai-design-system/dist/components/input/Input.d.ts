import type { InputProps } from './Input.types';
/**
 * Input 컴포넌트
 *
 * 다양한 변형을 지원하는 통합 입력 컴포넌트입니다.
 * `variant` prop으로 원하는 입력 유형을 선택하세요.
 *
 * @example
 * <Input variant="default" label="이름" placeholder="이름을 입력하세요" />
 */
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
