/**
 * Input component constants
 *
 * Based on Figma design specifications
 */
export declare const SIZE_CONFIG: {
    readonly xs: {
        readonly container: "height-28";
        readonly padding: "padding-x-6 padding-y-4";
        readonly paddingWithLeadIcon: "padding-x-6 padding-y-4";
        readonly paddingWithTailIcon: "padding-x-6 padding-y-4";
        readonly paddingWithBothIcons: "padding-x-6 padding-y-4";
        readonly text: "size-xs line-height-leading-4";
        readonly iconSize: 14;
        readonly gap: "ds-gap-4";
    };
    readonly sm: {
        readonly container: "height-32";
        readonly padding: "padding-x-8 padding-y-6";
        readonly paddingWithLeadIcon: "padding-x-8 padding-y-6";
        readonly paddingWithTailIcon: "padding-x-8 padding-y-6";
        readonly paddingWithBothIcons: "padding-x-8 padding-y-6";
        readonly text: "size-sm line-height-leading-5";
        readonly iconSize: 16;
        readonly gap: "ds-gap-6";
    };
    readonly lg: {
        readonly container: "height-36";
        readonly padding: "padding-x-10 padding-y-8";
        readonly paddingWithLeadIcon: "padding-x-10 padding-y-8";
        readonly paddingWithTailIcon: "padding-x-10 padding-y-8";
        readonly paddingWithBothIcons: "padding-x-10 padding-y-8";
        readonly text: "size-sm line-height-leading-5";
        readonly iconSize: 16;
        readonly gap: "ds-gap-6";
    };
};
export declare const STYLE_CONFIG: {
    readonly default: {
        readonly base: "bg-input border-darker rounded-sm";
        readonly focus: "focus-within:border-strong focus-within:shadow-component-input-focus";
    };
    readonly shadow: {
        readonly base: "bg-input border-darker rounded-sm shadow-component-default";
        readonly focus: "focus-within:border-strong focus-within:shadow-component-input-focus";
    };
    readonly soft: {
        readonly base: "bg-input-soft-focusable border-transparent rounded-sm";
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
export declare const LABEL_STYLE: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight font-medium text-default";
export declare const SUPPORT_TEXT_STYLE: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-muted";
export declare const CAPTION_STYLE: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted";
export declare const ERROR_CAPTION_STYLE: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-destructive";
export declare const SUCCESS_CAPTION_STYLE: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-success";
export declare const REQUIRED_STYLE: "text-destructive";
export declare const SHORTCUT_STYLE: {
    readonly container: "inline-flex items-center justify-center bg-card border-default rounded-sm padding-2";
    readonly text: "font-code size-xs line-height-leading-4 letter-spacing-tracking-normal text-muted";
};
export declare const INPUT_CONTAINER_BASE: "flex flex-col";
export declare const INPUT_WRAPPER_BASE: "flex items-center w-full transition-colors duration-150";
export declare const INPUT_COUNT_STYLE: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted";
export declare const INPUT_FIELD_BASE: "flex-1 min-w-0 bg-transparent outline-none font-body";
