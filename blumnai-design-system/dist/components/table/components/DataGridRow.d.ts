import type { Row } from '@tanstack/react-table';
import type { StickyColumnInfo } from '../utils/stickyColumnUtils';
interface DataGridRowProps<T> {
    row: Row<T>;
    gridTemplateColumns: string;
    onRowClick?: (row: T) => void;
    showSelectedRowBackground?: boolean;
    stickyColumnPositions: Map<string, StickyColumnInfo>;
    rowHeight?: string;
    getRowHeight?: (row: T) => string | undefined;
}
export declare function DataGridRow<T>({ row, gridTemplateColumns, onRowClick, showSelectedRowBackground, stickyColumnPositions, rowHeight, getRowHeight, }: DataGridRowProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
