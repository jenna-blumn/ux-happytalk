import type { FormControlProps } from './Form.types';
/**
 * FormControl 컴포넌트
 *
 * 자식 컴포넌트가 error prop을 지원하면 자동으로 에러 메시지를 주입합니다.
 * 또한 aria 속성을 추가하여 접근성을 향상시킵니다.
 */
export declare const FormControl: {
    ({ children }: FormControlProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
