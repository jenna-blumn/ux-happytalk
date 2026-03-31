interface CellProgressProps {
    value: number;
    max?: number;
    showLabel?: boolean;
    color?: 'default' | 'success' | 'warning' | 'destructive';
}
export declare function CellProgress({ value, max, showLabel, color, }: CellProgressProps): import("react/jsx-runtime").JSX.Element;
export {};
