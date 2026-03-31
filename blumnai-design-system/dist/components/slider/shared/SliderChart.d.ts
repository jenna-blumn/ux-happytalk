import * as React from 'react';
import type { SliderColor } from '../Slider.types';
export interface SliderChartProps {
    data: number[];
    min: number;
    max: number;
    value: [number, number];
    color?: SliderColor;
    disabled?: boolean;
    className?: string;
}
declare const SliderChart: React.ForwardRefExoticComponent<SliderChartProps & React.RefAttributes<HTMLDivElement>>;
export { SliderChart };
