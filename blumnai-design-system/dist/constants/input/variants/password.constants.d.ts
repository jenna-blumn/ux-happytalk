/**
 * InputPassword component constants
 *
 * Based on Figma design specifications
 */
export declare const STRENGTH_INDICATOR_CONTAINER: "flex items-center ds-gap-4 margin-t-8";
export declare const STRENGTH_BAR_BASE: "height-2 rounded-full flex-1 transition-colors";
export declare const STRENGTH_BAR_COLORS: {
    readonly none: "bg-state-ghost";
    readonly low: "bg-basic-red-strong";
    readonly medium: "bg-basic-amber-strong";
    readonly high: "bg-basic-green-strong";
};
export declare const STRENGTH_BAR_INACTIVE: "bg-state-ghost";
export declare const STRENGTH_LABEL_STYLE: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight";
export declare const STRENGTH_LABEL_COLORS: {
    readonly none: "text-muted";
    readonly low: "text-basic-red-strong";
    readonly medium: "text-basic-amber-strong";
    readonly high: "text-basic-green-strong";
};
export declare const STRENGTH_LABELS: {
    readonly none: "";
    readonly low: "Weak";
    readonly medium: "Medium";
    readonly high: "Strong";
};
export declare const TOGGLE_BUTTON_STYLE: "flex-shrink-0 flex items-center justify-center hover:bg-state-ghost-hover rounded-xs transition-colors padding-2";
