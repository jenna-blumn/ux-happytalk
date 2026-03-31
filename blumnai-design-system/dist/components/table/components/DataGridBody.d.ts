import type { Row } from '@tanstack/react-table';
import type { StickyColumnInfo } from '../utils/stickyColumnUtils';
interface DataGridBodyProps<T> {
    rows: Row<T>[];
    gridTemplateColumns: string;
    isLoading?: boolean;
    preserveDataWhileLoading?: boolean;
    onRowClick?: (row: T) => void;
    showSelectedRowBackground?: boolean;
    stickyColumnPositions: Map<string, StickyColumnInfo>;
    rowHeight?: string;
    getRowHeight?: (row: T) => string | undefined;
}
export declare function DataGridBody<T>({ rows, gridTemplateColumns, isLoading, preserveDataWhileLoading, onRowClick, showSelectedRowBackground, stickyColumnPositions, rowHeight, getRowHeight, }: DataGridBodyProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
