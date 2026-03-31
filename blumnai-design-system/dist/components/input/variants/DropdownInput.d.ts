import type { InputHTMLAttributes } from 'react';
import type { IconTypeWithFill } from '../../icons/Icon/Icon.types';
import type { InputStyle, InputSize } from '../Input/Input.types';
/**
 * 드롭다운 위치 - lead (입력 필드 앞) 또는 tail (입력 필드 뒤)
 */
export type DropdownPosition = 'lead' | 'tail';
/**
 * 드롭다운 옵션 정의
 */
export interface DropdownOption {
    value: string;
    label: string;
    icon?: IconTypeWithFill;
}
export interface DropdownInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
     * 입력 필드 앞에 표시되는 아이콘 (드롭다운이 lead가 아닐 때)
     */
    leadIcon?: IconTypeWithFill;
    /**
     * 입력 필드 뒤에 표시되는 아이콘 (드롭다운이 tail이 아닐 때)
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
     * 사용 가능한 드롭다운 옵션 목록
     */
    dropdownOptions: DropdownOption[];
    /**
     * 드롭다운 위치 - lead (입력 필드 앞) 또는 tail (입력 필드 뒤)
     * @default 'lead'
     */
    dropdownPosition?: DropdownPosition;
    /**
     * 현재 선택된 드롭다운 값
     */
    dropdownValue?: string;
    /**
     * 드롭다운 값 변경 시 호출되는 콜백
     */
    onDropdownChange?: (value: string) => void;
    /**
     * 드롭다운 값이 선택되지 않았을 때 표시되는 플레이스홀더 텍스트
     * @default 'Select'
     */
    dropdownPlaceholder?: string;
    /**
     * 글자 수 카운터 표시 여부 (maxLength와 함께 사용)
     * @default false
     */
    showCount?: boolean;
    /**
     * 드롭다운 트리거의 고정 너비 (px)
     */
    dropdownWidth?: number;
}
/**
 * DropdownInput 변형
 *
 * 앞 또는 뒤에 통합 드롭다운 셀렉터가 있는 입력 필드
 */
export declare const DropdownInput: import("react").ForwardRefExoticComponent<DropdownInputProps & import("react").RefAttributes<HTMLInputElement>>;
