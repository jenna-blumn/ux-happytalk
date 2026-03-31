import type { SVGProps } from 'react';
/**
 * 등각 투영 아이콘 fill 색상 토큰
 * CSS 변수 `--bg-{token}`으로 변환됩니다.
 */
export type IsometricFillColor = 'default' | 'subtle' | 'muted' | 'inverted' | 'accent' | 'card-default' | 'card-subtle' | 'card-inverted' | 'sidebar-default' | 'sidebar-subtle' | 'input-default' | 'input-soft' | 'input-disabled' | 'overlay' | 'state-primary' | 'state-primary-hover' | 'state-primary-press' | 'state-primary-loading' | 'state-secondary' | 'state-secondary-hover' | 'state-secondary-press' | 'state-soft' | 'state-soft-hover' | 'state-soft-press' | 'state-ghost' | 'state-ghost-hover' | 'state-ghost-press' | 'state-ghost-inverted' | 'state-ghost-hover-inverted' | 'state-ghost-press-inverted' | 'state-destructive' | 'state-destructive-hover' | 'state-destructive-press' | 'state-destructive-loading' | 'state-brand' | 'state-brand-hover' | 'state-brand-press' | 'state-brand-loading' | 'state-gray' | 'state-disabled' | 'checkbox-default' | 'checkbox-active' | 'checkbox-active-hover' | 'checkbox-disabled' | 'switch-default' | 'switch-default-hover' | 'switch-disabled' | 'switch-active' | 'switch-active-hover' | 'switch-active-disabled' | 'switch-handle' | 'switch-handle-disabled' | 'basic-gray-subtle' | 'basic-gray-accent' | 'basic-gray-strong' | 'basic-gray-contrast' | 'basic-red-subtle' | 'basic-red-accent' | 'basic-red-strong' | 'basic-red-contrast' | 'basic-orange-subtle' | 'basic-orange-accent' | 'basic-orange-strong' | 'basic-orange-contrast' | 'basic-amber-subtle' | 'basic-amber-accent' | 'basic-amber-strong' | 'basic-amber-contrast' | 'basic-yellow-subtle' | 'basic-yellow-accent' | 'basic-yellow-strong' | 'basic-yellow-contrast' | 'basic-lime-subtle' | 'basic-lime-accent' | 'basic-lime-strong' | 'basic-lime-contrast' | 'basic-green-subtle' | 'basic-green-accent' | 'basic-green-strong' | 'basic-green-contrast' | 'basic-emerald-subtle' | 'basic-emerald-accent' | 'basic-emerald-strong' | 'basic-emerald-contrast' | 'basic-teal-subtle' | 'basic-teal-accent' | 'basic-teal-strong' | 'basic-teal-contrast' | 'basic-cyan-subtle' | 'basic-cyan-accent' | 'basic-cyan-strong' | 'basic-cyan-contrast' | 'basic-sky-subtle' | 'basic-sky-accent' | 'basic-sky-strong' | 'basic-sky-contrast' | 'basic-blue-subtle' | 'basic-blue-accent' | 'basic-blue-strong' | 'basic-blue-contrast' | 'basic-indigo-subtle' | 'basic-indigo-accent' | 'basic-indigo-strong' | 'basic-indigo-contrast' | 'basic-violet-subtle' | 'basic-violet-accent' | 'basic-violet-strong' | 'basic-violet-contrast' | 'basic-purple-subtle' | 'basic-purple-accent' | 'basic-purple-strong' | 'basic-purple-contrast' | 'basic-fuchsia-subtle' | 'basic-fuchsia-accent' | 'basic-fuchsia-strong' | 'basic-fuchsia-contrast' | 'basic-pink-subtle' | 'basic-pink-accent' | 'basic-pink-strong' | 'basic-pink-contrast' | 'basic-rose-subtle' | 'basic-rose-accent' | 'basic-rose-strong' | 'basic-rose-contrast' | 'basic-gray-alpha-2' | 'basic-gray-alpha-4' | 'basic-gray-alpha-10' | 'basic-gray-alpha-15';
/**
 * 등각 투영 아이콘 stroke 색상 토큰
 * CSS 변수 `--border-{token}`으로 변환됩니다.
 */
export type IsometricStrokeColor = 'default' | 'darker' | 'strong' | 'inverted' | 'accent' | 'accent-inverted' | 'destructive' | 'informative' | 'success' | 'warning' | 'highlight' | 'highlight-destructive' | 'input-highlight';
/**
 * 등각 투영 아이콘 SVG 컴포넌트의 props
 */
export interface IsometricSvgProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
    /** 아이콘 크기 (px) */
    size?: number;
    /** CSS 클래스 이름 */
    className?: string;
    /**
     * fill 색상 토큰
     * @default 'default' (--bg-default)
     */
    fillColor?: IsometricFillColor;
    /**
     * stroke 색상 토큰
     * @default 'accent' (--border-accent)
     */
    strokeColor?: IsometricStrokeColor;
}
