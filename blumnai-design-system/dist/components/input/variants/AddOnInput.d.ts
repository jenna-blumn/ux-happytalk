import type { InputHTMLAttributes, ReactNode } from 'react';
import type { IconTypeWithFill } from '../../icons/Icon/Icon.types';
import type { InputStyle, InputSize } from '../Input/Input.types';
export interface AddOnInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
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
     * 입력 필드 앞에 표시되는 아이콘 (인라인이거나 접두사가 없을 때)
     */
    leadIcon?: IconTypeWithFill;
    /**
     * 입력 필드 뒤에 표시되는 아이콘 (인라인이거나 접미사가 없을 때)
     */
    tailIcon?: IconTypeWithFill;
    /**
     * 입력 필드 컨테이너의 커스텀 너비 (숫자는 px, 문자열은 그대로 사용)
     * 미지정 시 전체 너비 사용
     */
    width?: string | number;
    /**
     * 지우기 버튼 클릭 시 호출되는 콜백 (제공 시 지우기 버튼 표시)
     */
    onClear?: () => void;
    /**
     * 접두사 애드온 컨텐츠 (문자열 또는 ReactNode)
     */
    prefix?: string | ReactNode;
    /**
     * 접미사 애드온 컨텐츠 (문자열 또는 ReactNode)
     */
    suffix?: string | ReactNode;
    /**
     * 애드온을 입력 필드와 인라인으로 표시할지 여부
     * @default false
     */
    inline?: boolean;
    /**
     * 글자 수 카운터 표시 여부 (maxLength와 함께 사용)
     * @default false
     */
    showCount?: boolean;
}
/**
 * AddOnInput 변형
 *
 * 접두사 및/또는 접미사 애드온 컨텐츠가 있는 입력 필드
 * 인라인 애드온과 별도 섹션 애드온 모두 지원
 */
export declare const AddOnInput: import("react").ForwardRefExoticComponent<AddOnInputProps & import("react").RefAttributes<HTMLInputElement>>;
