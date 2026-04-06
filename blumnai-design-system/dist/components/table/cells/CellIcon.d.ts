import type { IconTypeWithFill, IconColor } from '../../icons/Icon/Icon.types';
interface CellIconProps {
    iconType: IconTypeWithFill;
    size?: number;
    color?: IconColor;
    label?: string;
    className?: string;
}
export declare function CellIcon({ iconType, size, color, label, className, }: CellIconProps): import("react/jsx-runtime").JSX.Element;
export {};
