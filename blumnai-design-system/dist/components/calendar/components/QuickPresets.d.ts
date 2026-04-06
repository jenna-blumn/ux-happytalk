import type { QuickPreset } from '../DatePicker.types';
export interface QuickPresetsProps {
    presets: QuickPreset[];
    onSelect: (preset: QuickPreset) => void;
    selectedIndex?: number;
    disabled?: boolean;
    className?: string;
}
/**
 * 빠른 날짜 선택 프리셋 컴포넌트
 */
export declare const QuickPresets: {
    ({ presets, onSelect, selectedIndex, disabled, className, }: QuickPresetsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
