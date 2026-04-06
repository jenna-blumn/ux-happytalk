type DateFormat = 'date' | 'datetime' | 'time';
type Locale = 'ko' | 'en' | 'ja' | 'zh';
interface CellDateProps {
    value: Date | string | number | null | undefined;
    format?: DateFormat;
    locale?: Locale;
    className?: string;
}
export declare function CellDate({ value, format, locale, className, }: CellDateProps): import("react/jsx-runtime").JSX.Element;
export {};
