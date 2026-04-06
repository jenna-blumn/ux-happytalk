import type { LegendPayload } from 'recharts/types/component/DefaultLegendContent';
interface ChartLegendProps {
    payload?: LegendPayload[];
    variant?: 'square' | 'circle';
}
export declare function ChartLegend({ payload, variant }: ChartLegendProps): import("react/jsx-runtime").JSX.Element | null;
export {};
