import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import type { SliderColor } from '../Slider.types';
interface SliderTrackProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> {
    children?: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
}
declare const SliderTrack: React.ForwardRefExoticComponent<SliderTrackProps & React.RefAttributes<HTMLSpanElement>>;
declare const RANGE_COLOR_MAP: Record<SliderColor, string>;
interface SliderRangeFilledProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range> {
    color?: SliderColor;
    orientation?: 'horizontal' | 'vertical';
}
declare const SliderRangeFilled: React.ForwardRefExoticComponent<SliderRangeFilledProps & React.RefAttributes<HTMLSpanElement>>;
export { SliderTrack, SliderRangeFilled, RANGE_COLOR_MAP };
