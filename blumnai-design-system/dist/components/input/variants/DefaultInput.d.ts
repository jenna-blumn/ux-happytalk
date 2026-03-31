import type { InputHTMLAttributes } from 'react';
import type { IconTypeWithFill } from '../../icons/Icon/Icon.types';
import type { InputStyle, InputSize } from '../Input/Input.types';
export interface DefaultInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
     * 입력 필드 뒤에 표시되는 아이콘
     */
    tailIcon?: IconTypeWithFill;
    /**
     * 끝에 표시되는 단축키 뱃지 텍스트
     */
    shortcut?: string;
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
     * 글자 수 카운터 표시 여부 (maxLength와 함께 사용)
     * @default false
     */
    showCount?: boolean;
    /**
     * Cmd/Ctrl+Enter 입력 시 호출되는 콜백
     */
    onCmdEnter?: () => void;
}
/**
 * DefaultInput 변형
 *
 * 아이콘, 단축키, 지우기 버튼을 지원하는 기본 텍스트 입력 필드
 */
export declare const DefaultInput: import("react").ForwardRefExoticComponent<DefaultInputProps & import("react").RefAttributes<HTMLInputElement>>;
