import { type ReactNode } from 'react';
interface CellLinkProps {
    href: string;
    label?: string;
    tooltip?: boolean | ReactNode;
    external?: boolean;
    className?: string;
}
export declare function CellLink({ href, label, tooltip, external, className, }: CellLinkProps): import("react/jsx-runtime").JSX.Element;
export {};
