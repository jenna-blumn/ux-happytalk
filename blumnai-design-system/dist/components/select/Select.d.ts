import type { SelectProps } from './Select.types';
/**
 * Select 컴포넌트
 *
 * 다양한 변형을 지원하는 통합 Select 컴포넌트입니다.
 * `variant` prop으로 원하는 선택 유형을 선택하세요.
 *
 * - `default`: 단일 선택
 * - `avatar`: 아바타가 있는 단일 선택
 * - `multi-select`: 체크박스가 있는 다중 선택
 * - `tags`: 태그로 표시되는 다중 선택
 *
 * @example
 * <Select variant="default" label="선택" options={[{ label: 'A', value: 'a' }]} />
 */
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLDivElement>>;
