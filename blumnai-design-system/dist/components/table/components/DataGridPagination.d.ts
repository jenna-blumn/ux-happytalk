import type { PaginationVariant } from '../../pagination';
interface DataGridPaginationProps {
    page: number;
    totalPages: number;
    total: number;
    limit: number;
    limitOptions?: number[];
    limitOptionLabel?: (limit: number) => string;
    startIndex: number;
    endIndex: number;
    onPageChange: (page: number) => void;
    onLimitChange?: (limit: number) => void;
    pageChangeConfirmMessage?: string;
    align?: 'left' | 'center' | 'right';
    variant?: PaginationVariant;
    maxVisiblePages?: number;
    disabled?: boolean;
    hideNavButtons?: boolean;
    resultTextFormatter?: (current: number, total: number) => string;
    showItemCount?: boolean;
}
export declare function DataGridPagination({ page, totalPages, total, limit, limitOptions, limitOptionLabel, startIndex, endIndex, onPageChange, onLimitChange, pageChangeConfirmMessage, align, variant, maxVisiblePages, disabled, hideNavButtons, resultTextFormatter, showItemCount, }: DataGridPaginationProps): import("react/jsx-runtime").JSX.Element;
export {};
