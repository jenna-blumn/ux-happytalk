import type { ReactNode } from 'react';
import type { ChartTooltipParams, PieTooltipParams } from './Chart.types';
interface ChartTooltipAdapterProps {
    active?: boolean;
    payload?: Array<{
        dataKey?: string;
        value?: number;
        color?: string;
        name?: string;
        payload?: Record<string, unknown>;
    }>;
    label?: string | number;
    renderTooltip?: (params: ChartTooltipParams) => ReactNode;
    getLabel: (key: string) => string;
    getColor: (key: string, index: number) => string;
}
export declare function ChartTooltipAdapter({ active, payload, label, renderTooltip, getLabel, getColor, }: ChartTooltipAdapterProps): import("react/jsx-runtime").JSX.Element | null;
interface PieTooltipAdapterProps {
    active?: boolean;
    payload?: Array<{
        name?: string;
        value?: number;
        payload?: Record<string, unknown> & {
            fill?: string;
        };
    }>;
    renderTooltip?: (params: PieTooltipParams) => ReactNode;
    getLabel: (key: string) => string;
    totalValue?: number;
}
export declare function PieTooltipAdapter({ active, payload, renderTooltip, getLabel, totalValue, }: PieTooltipAdapterProps): import("react/jsx-runtime").JSX.Element | null;
export {};
