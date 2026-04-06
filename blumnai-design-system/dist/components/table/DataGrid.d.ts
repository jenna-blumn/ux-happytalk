import * as React from 'react';
import type { DataGridProps } from './DataGrid.types';
/**
 * DataGrid 컴포넌트
 *
 * TanStack Table 기반의 데이터 그리드입니다. 정렬, 필터, 페이지네이션, 행 선택을 지원합니다.
 *
 * @example
 * <DataGrid columns={columns} data={data} enableSorting enableRowSelection />
 */
declare function DataGridInner<T>({ data, columns, getRowId, sorting, onSortingChange, columnFilters, onColumnFiltersChange, rowSelection, onRowSelectionChange, enableRowSelection, enableColumnReorder, columnOrder, onColumnOrderChange, enableColumnResize, columnSizing: externalColumnSizing, onColumnSizingChange, pagination, page, total, limit, limitOptions, limitOptionLabel, onPageChange, onLimitChange, pageChangeConfirmMessage, paginationAlign, paginationVariant, maxVisiblePages, paginationDisabled, hideNavButtons, resultTextFormatter, showItemCount, isLoading, preserveDataWhileLoading, minHeight, maxHeight, headerHeight, rowHeight, getRowHeight, emptyText, emptyContent, error, onRetry, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, className, onRowClick, showSelectedRowBackground, }: DataGridProps<T>, ref: React.ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare const DataGrid: <T>(props: DataGridProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => ReturnType<typeof DataGridInner>;
export {};
