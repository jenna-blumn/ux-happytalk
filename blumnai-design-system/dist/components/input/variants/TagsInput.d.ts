import type { InputHTMLAttributes } from 'react';
import type { IconTypeWithFill } from '../../icons/Icon/Icon.types';
import type { InputStyle, InputSize } from '../Input/Input.types';
export interface TagsInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange'> {
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
     * 태그를 입력 필드와 인라인으로 표시할지 여부
     * @default true
     */
    inline?: boolean;
    /**
     * 현재 태그 배열
     * @default []
     */
    tags?: string[];
    /**
     * 태그 배열 변경 시 호출되는 콜백
     */
    onTagsChange?: (tags: string[]) => void;
    /**
     * 태그 추가 시 호출되는 콜백
     */
    onTagAdd?: (tag: string) => void;
    /**
     * 태그 삭제 시 호출되는 콜백
     */
    onTagRemove?: (tag: string) => void;
    /**
     * 허용되는 최대 태그 개수
     */
    maxTags?: number;
    /**
     * 제어되는 입력 값
     */
    value?: string;
    /**
     * 제어되는 입력 변경 콜백
     */
    onInputChange?: (value: string) => void;
    /**
     * 태그 생성을 트리거하는 구분자 문자
     * @default [',', 'Enter']
     */
    delimiters?: string[];
    /**
     * 중복 태그 허용 여부
     * @default false
     */
    allowDuplicates?: boolean;
    /**
     * 태그 삭제 가능 여부 (닫기 버튼 표시)
     * @default true
     */
    removable?: boolean;
}
/**
 * TagsInput 변형
 *
 * 태그 추가 및 삭제가 가능한 입력 필드
 * 인라인과 스택 태그 표시 모드 지원
 */
export declare const TagsInput: import("react").ForwardRefExoticComponent<TagsInputProps & import("react").RefAttributes<HTMLInputElement>>;
