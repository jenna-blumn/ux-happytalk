import type { ReactNode } from 'react';
interface DataGridErrorProps {
    error: string | ReactNode;
    onRetry?: () => void;
}
export declare function DataGridError({ error, onRetry }: DataGridErrorProps): import("react/jsx-runtime").JSX.Element;
export {};
