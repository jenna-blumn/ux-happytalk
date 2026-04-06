import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
interface SliderThumbProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> {
    disabled?: boolean;
    showTooltip?: boolean;
    tooltipValue?: string;
    orientation?: 'horizontal' | 'vertical';
    'aria-label'?: string;
}
declare const SliderThumb: React.ForwardRefExoticComponent<SliderThumbProps & React.RefAttributes<HTMLSpanElement>>;
export { SliderThumb };
