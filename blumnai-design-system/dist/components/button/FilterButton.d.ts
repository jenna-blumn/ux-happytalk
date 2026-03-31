import type { FilterButtonProps, FilterButtonSize, FilterButtonShape } from './FilterButton.types';
declare const filterButtonVariants: (props?: ({
    size?: "xs" | "md" | "lg" | null | undefined;
    shape?: "rounded" | "pill" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/**
 * FilterButton 컴포넌트
 *
 * 필터 토글 버튼입니다. 선택 상태와 활성 필터 수를 배지로 표시합니다.
 *
 * @example
 * <FilterButton label="필터" selected={hasFilters} icon={['system', 'filter']} />
 */
export declare const FilterButton: import("react").ForwardRefExoticComponent<FilterButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { filterButtonVariants };
export type { FilterButtonProps, FilterButtonSize, FilterButtonShape };
