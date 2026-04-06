/**
 * InputDropdown component constants
 *
 * Based on Figma design specifications
 */
export declare const DROPDOWN_TRIGGER_BASE: "flex items-center ds-gap-4 cursor-pointer select-none";
export declare const DROPDOWN_TRIGGER_TEXT: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-default whitespace-nowrap";
export declare const DROPDOWN_TRIGGER_PLACEHOLDER: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-hint whitespace-nowrap";
export declare const DROPDOWN_MENU_BASE: "z-50 bg-card border-default rounded-md shadow-modal-sm";
export declare const DROPDOWN_OPTION_BASE: "flex items-center ds-gap-6 padding-x-8 padding-y-6 cursor-pointer hover:bg-state-ghost-hover transition-colors";
export declare const DROPDOWN_OPTION_TEXT: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-default";
export declare const DROPDOWN_OPTION_SELECTED: "bg-state-soft";
export declare const DROPDOWN_SIZE_CONFIG: {
    readonly xs: {
        readonly triggerPadding: "padding-x-6 padding-y-4";
        readonly iconSize: 14;
    };
    readonly sm: {
        readonly triggerPadding: "padding-x-8 padding-y-6";
        readonly iconSize: 16;
    };
    readonly lg: {
        readonly triggerPadding: "padding-x-10 padding-y-8";
        readonly iconSize: 16;
    };
};
export declare const DROPDOWN_DIVIDER: "w-px bg-divider self-stretch";
