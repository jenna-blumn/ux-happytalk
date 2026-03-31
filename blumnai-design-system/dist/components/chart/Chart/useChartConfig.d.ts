import type { ChartConfig } from './Chart.types';
interface UseChartConfigResult {
    getLabel: (key: string) => string;
    getColor: (key: string, index: number) => string;
}
export declare function useChartConfig(config?: ChartConfig, colorMapping?: Record<string, string> | string[]): UseChartConfigResult;
export {};
