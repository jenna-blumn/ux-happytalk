import type { InputHTMLAttributes } from 'react';
import type { InputStyle, InputSize } from '../Input/Input.types';
/**
 * 수량 입력 변형 - default (양쪽 버튼) 또는 compact (오른쪽에 쌓인 버튼)
 */
export type QuantityVariant = 'default' | 'compact';
export interface QuantityInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange' | 'type'> {
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
     * 수량 변형 - default (양쪽 버튼) 또는 compact (쌓인 버튼)
     * @default 'default'
     */
    quantityVariant?: QuantityVariant;
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
     * 입력 필드 컨테이너의 커스텀 너비 (숫자는 px, 문자열은 그대로 사용)
     * 미지정 시 전체 너비 사용
     */
    width?: string | number;
    /**
     * 현재 숫자 값
     * @default 0
     */
    value?: number;
    /**
     * 값 변경 시 호출되는 콜백
     */
    onChange?: (value: number) => void;
    /**
     * 최소 허용 값
     * @default 0
     */
    min?: number;
    /**
     * 최대 허용 값
     */
    max?: number;
    /**
     * 증가/감소 단위 값
     * @default 1
     */
    step?: number;
}
/**
 * QuantityInput 변형
 *
 * 증가/감소 버튼이 있는 숫자 입력 필드
 * default (양쪽 버튼)와 compact (쌓인 버튼) 변형 지원
 */
export declare const QuantityInput: import("react").ForwardRefExoticComponent<QuantityInputProps & import("react").RefAttributes<HTMLInputElement>>;
