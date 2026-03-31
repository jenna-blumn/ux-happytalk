/**
 * Textarea component constants
 *
 * Based on Figma design specifications and Input component patterns
 */
export declare const SIZE_CONFIG: {
    readonly sm: {
        readonly padding: "padding-x-12 padding-y-10";
        readonly text: "size-sm line-height-leading-5";
    };
    readonly lg: {
        readonly padding: "padding-x-14 padding-y-12";
        readonly text: "size-sm line-height-leading-5";
    };
};
export declare const STYLE_CONFIG: {
    readonly default: {
        readonly base: "bg-input border-darker rounded-lg";
        readonly focus: "focus-within:border-strong focus-within:shadow-component-input-focus";
    };
    readonly shadow: {
        readonly base: "bg-input border-darker rounded-lg shadow-component-default";
        readonly focus: "focus-within:border-strong focus-within:shadow-component-input-focus";
    };
    readonly soft: {
        readonly base: "bg-input-soft-focusable border-transparent rounded-lg";
        readonly focus: "focus-within:shadow-component-input-focus";
    };
};
export declare const STATE_CONFIG: {
    readonly default: {
        readonly border: "border-darker";
        readonly text: "text-default";
        readonly placeholder: "placeholder:text-hint";
    };
    readonly disabled: {
        readonly border: "border-default";
        readonly text: "text-hint";
        readonly placeholder: "placeholder:text-hint";
        readonly bg: "bg-input-disabled";
    };
    readonly error: {
        readonly border: "border-destructive";
        readonly text: "text-default";
        readonly placeholder: "placeholder:text-hint";
    };
    readonly success: {
        readonly border: "border-success";
        readonly text: "text-default";
        readonly placeholder: "placeholder:text-hint";
    };
};
export declare const RESIZE_CONFIG: {
    readonly none: "resize-none";
    readonly vertical: "resize-y";
    readonly horizontal: "resize-x";
    readonly both: "resize";
};
export declare const TEXTAREA_BASE: "w-full bg-transparent outline-none font-body";
export declare const TEXTAREA_CONTAINER_BASE: "flex flex-col";
export declare const COUNT_STYLE: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted";
export declare const TOOLBAR_CONTAINER: "flex items-center justify-between ds-gap-8 margin-t-4";
export declare const TOOLBAR_ACTIONS_CONTAINER: "flex items-center ds-gap-4";
export declare const TOOLBAR_BUTTON_BASE: "flex items-center justify-center rounded-sm transition-colors duration-150 cursor-pointer";
export declare const TOOLBAR_BUTTON_ICON_ONLY: "width-28 height-28 bg-state-soft hover:bg-state-soft-hover active:bg-state-soft-press";
export declare const TOOLBAR_CHIP_BASE: "flex items-center ds-gap-4 padding-x-8 padding-y-4 height-28 rounded-sm bg-state-soft hover:bg-state-soft-hover active:bg-state-soft-press font-body size-sm line-height-leading-5 text-muted cursor-pointer transition-colors duration-150";
export declare const TOOLBAR_SUBMIT_BUTTON: "width-28 height-28 rounded-sm bg-state-primary hover:bg-state-primary-hover active:bg-state-primary-press flex items-center justify-center transition-colors duration-150";
export declare const TOOLBAR_SUBMIT_BUTTON_DISABLED: "width-28 height-28 rounded-sm bg-state-soft flex items-center justify-center cursor-not-allowed";
