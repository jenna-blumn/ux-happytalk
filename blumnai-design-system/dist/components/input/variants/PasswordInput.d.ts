import type { InputHTMLAttributes } from 'react';
import type { IconTypeWithFill } from '../../icons/Icon/Icon.types';
import type { InputStyle, InputSize } from '../Input/Input.types';
/**
 * 비밀번호 강도 레벨
 */
export type PasswordStrength = 'none' | 'low' | 'medium' | 'high';
export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /**
     * 입력 필드 스타일 변형
     * @default 'default'
     */
    inputStyle?: InputStyle;
    /**
     * 입력 필드 크기
     * @default 'sm'
     */
    size?: InputSize;
    /**
     * 입력 필드 위에 표시되는 라벨 텍스트
     */
    label?: string;
    /**
     * 필수 입력 여부 (별표 표시)
     * @default false
     */
    required?: boolean;
    /**
     * 라벨 옆에 표시되는 보조 텍스트
     */
    supportText?: string;
    /**
     * 입력 필드 아래에 표시되는 설명 텍스트
     */
    caption?: string;
    /**
     * 에러 상태 - true면 에러 스타일 적용, 문자열이면 캡션으로 에러 메시지 표시
     */
    error?: boolean | string;
    /**
     * 성공 상태 - true면 성공 스타일 적용, 문자열이면 캡션으로 성공 메시지 표시
     */
    success?: boolean | string;
    /**
     * 입력 필드 앞에 표시되는 아이콘
     */
    leadIcon?: IconTypeWithFill;
    /**
     * 입력 필드 컨테이너의 커스텀 너비 (숫자는 px, 문자열은 그대로 사용)
     * 미지정 시 전체 너비 사용
     */
    width?: string | number;
    /**
     * 비밀번호 표시/숨김 토글 버튼 표시 여부
     * @default true
     */
    showToggle?: boolean;
    /**
     * 비밀번호 강도 표시기 표시 여부
     * @default false
     */
    showStrength?: boolean;
    /**
     * 제어되는 비밀번호 강도 값
     */
    strength?: PasswordStrength;
    /**
     * 비밀번호 강도 변경 시 호출되는 콜백 (autoCalculateStrength가 true일 때)
     */
    onStrengthChange?: (strength: PasswordStrength) => void;
    /**
     * 입력 값에 따라 비밀번호 강도를 자동으로 계산할지 여부
     * @default false
     */
    autoCalculateStrength?: boolean;
    /**
     * 글자 수 카운터 표시 여부 (maxLength와 함께 사용)
     * @default false
     */
    showCount?: boolean;
}
/**
 * PasswordInput 변형
 *
 * 표시/숨김 토글과 선택적 강도 표시기가 있는 비밀번호 입력 필드
 */
export declare const PasswordInput: import("react").ForwardRefExoticComponent<PasswordInputProps & import("react").RefAttributes<HTMLInputElement>>;
