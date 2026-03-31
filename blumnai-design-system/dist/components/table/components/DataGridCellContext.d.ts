export type CellAlign = 'left' | 'center' | 'right';
export interface DataGridCellContextValue {
    align: CellAlign;
}
export declare const DataGridCellContext: import("react").Context<DataGridCellContextValue | null>;
