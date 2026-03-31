import type { TimeFormat, TimeRange, TimePickerSize, TimePickerStyle, TimeSegmentPlaceholder } from '../time-picker.types';
export interface TimeRangeInputProps {
    value?: TimeRange;
    onChange?: (value: TimeRange | undefined) => void;
    timeFormat?: TimeFormat;
    showSeconds?: boolean;
    disabled?: boolean;
    hasError?: boolean;
    hasSuccess?: boolean;
    isOpen?: boolean;
    size?: TimePickerSize;
    timePickerStyle?: TimePickerStyle;
    placeholder?: TimeSegmentPlaceholder;
    onFocus?: () => void;
    onBlur?: () => void;
    onClockClick?: () => void;
    className?: string;
}
export declare const TimeRangeInput: import("react").ForwardRefExoticComponent<TimeRangeInputProps & import("react").RefAttributes<HTMLDivElement>>;
