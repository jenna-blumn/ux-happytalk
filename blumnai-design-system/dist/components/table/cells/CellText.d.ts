import { type ReactNode } from 'react';
interface CellTextProps {
    value: string | number | null | undefined;
    tooltip?: boolean | ReactNode;
    copyable?: boolean;
    className?: string;
}
export declare function CellText({ value, tooltip, copyable, className, }: CellTextProps): import("react/jsx-runtime").JSX.Element;
export {};
