import type { HTMLAttributes, ReactNode } from 'react';
export interface InputCaptionProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * 캡션 텍스트 컨텐츠
     */
    children: ReactNode;
    /**
     * 에러 스타일 표시 여부
     * @default false
     */
    error?: boolean;
    /**
     * 성공 스타일 표시 여부
     * @default false
     */
    success?: boolean;
}
/**
 * InputCaption 컴포넌트
 *
 * 입력 필드용 캡션/설명 텍스트 컴포넌트입니다.
 * 기본, 에러, 성공 스타일을 지원합니다.
 */
export declare const InputCaption: {
    ({ children, error, success, className, ...props }: InputCaptionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
