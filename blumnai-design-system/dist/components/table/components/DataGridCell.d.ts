import type { Cell } from '@tanstack/react-table';
import type { StickyColumnInfo } from '../utils/stickyColumnUtils';
interface DataGridCellProps<T> {
    cell: Cell<T, unknown>;
    stickyInfo?: StickyColumnInfo;
    isRowSelected?: boolean;
    height?: string;
    colIndex?: number;
}
export declare function DataGridCell<T>({ cell, stickyInfo, isRowSelected, height, colIndex }: DataGridCellProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
