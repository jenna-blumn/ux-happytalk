type DateFormat = 'date' | 'datetime' | 'time';
type Locale = 'ko' | 'en' | 'ja' | 'zh';
interface CellDateRangeProps {
    startDate: Date | string | number | null | undefined;
    endDate: Date | string | number | null | undefined;
    format?: DateFormat;
    locale?: Locale;
    separator?: string;
    className?: string;
}
export declare function CellDateRange({ startDate, endDate, format, locale, separator, className, }: CellDateRangeProps): import("react/jsx-runtime").JSX.Element;
export {};
