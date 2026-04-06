import type { HeaderGroup, ColumnOrderState } from '@tanstack/react-table';
import type { StickyColumnInfo } from '../utils/stickyColumnUtils';
import type { ColumnSizingState } from '../DataGrid.types';
interface DataGridHeaderProps<T> {
    headerGroups: HeaderGroup<T>[];
    gridTemplateColumns: string;
    stickyColumnPositions: Map<string, StickyColumnInfo>;
    headerHeight?: string;
    enableColumnReorder?: boolean;
    onColumnOrderChange?: (updater: ColumnOrderState | ((prev: ColumnOrderState) => ColumnOrderState)) => void;
    enableColumnResize?: boolean;
    columnSizing?: ColumnSizingState;
    onColumnSizingChange?: (sizing: ColumnSizingState) => void;
}
export declare function DataGridHeader<T>({ headerGroups, gridTemplateColumns, stickyColumnPositions, headerHeight, enableColumnReorder, onColumnOrderChange, enableColumnResize, columnSizing, onColumnSizingChange, }: DataGridHeaderProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
