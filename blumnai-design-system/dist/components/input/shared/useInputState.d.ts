import { SIZE_CONFIG, STYLE_CONFIG, STATE_CONFIG } from '../../../constants/input/Input/Input.constants';
import type { InputSize, InputStyle } from '../Input/Input.types';
export interface UseInputStateOptions {
    inputStyle?: InputStyle;
    size?: InputSize;
    disabled?: boolean;
    error?: boolean | string;
    success?: boolean | string;
}
export interface UseInputStateReturn {
    inputId: string;
    hasError: boolean;
    hasSuccess: boolean;
    state: 'default' | 'disabled' | 'error' | 'success';
    sizeConfig: (typeof SIZE_CONFIG)[InputSize];
    styleConfig: (typeof STYLE_CONFIG)[InputStyle];
    stateConfig: (typeof STATE_CONFIG)['default' | 'disabled' | 'error' | 'success'];
    iconColor: 'default-disabled' | 'destructive' | 'success' | 'default-subtle';
}
/**
 * 입력 필드 상태 로직을 위한 훅
 *
 * 모든 입력 필드 변형에서 공통으로 사용되는
 * 상태 결정, 크기/스타일 설정, 아이콘 색상을 처리합니다.
 */
export declare const useInputState: ({ inputStyle, size, disabled, error, success, }: UseInputStateOptions) => UseInputStateReturn;
