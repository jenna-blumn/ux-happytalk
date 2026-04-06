import * as React from 'react';
import { DayButton } from 'react-day-picker';
import type { CalendarProps } from './Calendar.types';
declare function CalendarDayButton({ className, day, modifiers, children, ...props }: React.ComponentProps<typeof DayButton>): import("react/jsx-runtime").JSX.Element;
/**
 * 디자인 시스템 스타일이 적용된 캘린더 컴포넌트
 */
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, calendarStyle, locale, components, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar, CalendarDayButton };
