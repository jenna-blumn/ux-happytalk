import type { BreadcrumbsProps } from './Breadcrumbs.types';
/**
 * Breadcrumbs 컴포넌트
 *
 * 계층 구조에서 사용자의 현재 위치를 보여주는 내비게이션 브레드크럼 경로를 표시합니다.
 * 다양한 크기, 구분자, 아이템 축소 기능을 지원합니다.
 *
 * @example
 * <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
 */
export declare const Breadcrumbs: import("react").ForwardRefExoticComponent<BreadcrumbsProps & import("react").RefAttributes<HTMLElement>>;
