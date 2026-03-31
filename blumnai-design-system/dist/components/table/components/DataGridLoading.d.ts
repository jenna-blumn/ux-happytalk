import type { ColumnDef } from '@tanstack/react-table';
import type { StickyColumnInfo } from '../utils/stickyColumnUtils';
interface DataGridLoadingProps<T> {
    columns: ColumnDef<T>[];
    gridTemplateColumns: string;
    rowCount?: number;
    overlay?: boolean;
    stickyColumnPositions: Map<string, StickyColumnInfo>;
    rowHeight?: string;
}
export declare function DataGridLoading<T>({ columns, gridTemplateColumns, rowCount, overlay, stickyColumnPositions, rowHeight, }: DataGridLoadingProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
