export declare const MONTHS_KO: string[];
export declare const MONTHS_EN: string[];
export declare const formatYearMonth: (date: Date) => string;
export declare const isMonthDisabled: (year: number, month: number, opts: {
    disabledFuture?: boolean;
    minDate?: Date;
    maxDate?: Date;
}) => boolean;
