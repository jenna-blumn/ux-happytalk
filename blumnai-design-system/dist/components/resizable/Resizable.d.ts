import * as React from 'react';
import type { ResizablePanelProps, ResizableHandleProps } from './Resizable.types';
declare const ResizablePanelGroup: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    defaultLayout?: import("react-resizable-panels").Layout | undefined;
    disableCursor?: boolean | undefined;
    disabled?: boolean | undefined;
    elementRef?: React.Ref<HTMLDivElement | null> | undefined;
    groupRef?: React.Ref<import("react-resizable-panels").GroupImperativeHandle | null> | undefined;
    id?: string | number | undefined;
    onLayoutChange?: (layout: import("react-resizable-panels").Layout) => void | undefined;
    onLayoutChanged?: (layout: import("react-resizable-panels").Layout) => void | undefined;
    resizeTargetMinimumSize?: {
        coarse: number;
        fine: number;
    };
    orientation?: "horizontal" | "vertical" | undefined;
    style?: React.CSSProperties | undefined;
} & React.RefAttributes<HTMLDivElement>>;
declare const ResizablePanel: React.FC<ResizablePanelProps>;
declare const ResizableHandle: {
    ({ withHandle, variant, collapseButton, collapseButtonPosition, panelRef, isCollapsed: isCollapsedProp, onCollapseChange, className, ...props }: ResizableHandleProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
