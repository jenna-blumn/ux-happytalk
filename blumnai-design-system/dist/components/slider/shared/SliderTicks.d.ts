import * as React from 'react';
export interface SliderTicksProps {
    min: number;
    max: number;
    step?: number;
    tickCount?: number;
    formatTick?: (value: number) => string;
    orientation?: 'horizontal' | 'vertical';
    height?: number;
    className?: string;
}
declare const SliderTicks: React.ForwardRefExoticComponent<SliderTicksProps & React.RefAttributes<HTMLDivElement>>;
export { SliderTicks };
