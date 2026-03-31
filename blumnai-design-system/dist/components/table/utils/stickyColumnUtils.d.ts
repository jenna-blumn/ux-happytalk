import type { ColumnDef } from '@tanstack/react-table';
export interface StickyColumnInfo {
    index: number;
    leftOffset: number;
    width: number;
}
export declare function calculateStickyPositions<T>(columns: ColumnDef<T>[], columnSizing?: Record<string, number>): Map<string, StickyColumnInfo>;
