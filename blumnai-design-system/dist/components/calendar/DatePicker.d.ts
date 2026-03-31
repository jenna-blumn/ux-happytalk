import type { DatePickerProps, DateRangePickerProps } from './DatePicker.types';
/**
 * 단일 날짜 선택 컴포넌트
 */
/**
 * DatePicker 컴포넌트
 *
 * 캘린더 기반 날짜 선택 컴포넌트입니다. 빠른 선택 프리셋을 지원합니다.
 *
 * @example
 * <DatePicker value={date} onChange={setDate} label="날짜 선택" />
 */
export declare const DatePicker: {
    ({ datePickerStyle, size, label, required, supportText, caption, error, success, width, disabled, className, minDate, maxDate, disabledDates, locale, showQuickPresets, align, captionLayout, dateFormat, value, onChange, presets, showActions, confirmLabel, cancelLabel, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
/**
 * 날짜 범위 선택 컴포넌트
 */
/**
 * DateRangePicker 컴포넌트
 *
 * 시작일~종료일 범위를 선택하는 날짜 범위 선택 컴포넌트입니다.
 *
 * @example
 * <DateRangePicker value={range} onChange={setRange} label="기간 선택" />
 */
export declare const DateRangePicker: {
    ({ datePickerStyle, size, label, required, supportText, caption, error, success, width, disabled, className, minDate, maxDate, disabledDates, locale, showQuickPresets, align, captionLayout, dateFormat, value, onChange, presets, numberOfMonths, showActions, confirmLabel, cancelLabel, }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
