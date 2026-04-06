import { type ReactNode } from 'react';
export interface TableTooltipContextValue {
    showTooltip: (anchor: HTMLElement, content: ReactNode) => void;
    hideTooltip: () => void;
}
export declare const TableTooltipContext: import("react").Context<TableTooltipContextValue | null>;
