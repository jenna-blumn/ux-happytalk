import * as React from 'react';
import type { ScrollAreaProps, ScrollBarProps } from './ScrollArea.types';
declare const ScrollArea: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React.ForwardRefExoticComponent<ScrollBarProps & {
    size?: number;
} & React.RefAttributes<HTMLDivElement>>;
export { ScrollArea, ScrollBar };
