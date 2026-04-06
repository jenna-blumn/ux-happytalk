/**
 * Select component constants
 */
export declare const SIZE_CONFIG: {
    readonly sm: {
        readonly container: "height-32";
        readonly minHeight: "min-height-32";
        readonly padding: "padding-x-8 padding-y-6";
        readonly paddingWithLeadIcon: "padding-x-8 padding-y-6";
        readonly text: "size-sm line-height-leading-5";
        readonly iconSize: 16;
        readonly gap: "ds-gap-6";
    };
    readonly lg: {
        readonly container: "height-36";
        readonly minHeight: "min-height-36";
        readonly padding: "padding-x-8 padding-y-8";
        readonly paddingWithLeadIcon: "padding-x-8 padding-y-8";
        readonly text: "size-sm line-height-leading-5";
        readonly iconSize: 16;
        readonly gap: "ds-gap-6";
    };
};
export declare const STYLE_CONFIG: {
    readonly default: {
        readonly base: "bg-input border-darker rounded-md";
        readonly focus: "focus-within:border-strong focus-within:shadow-component-input-focus data-[state=open]:border-strong data-[state=open]:shadow-component-input-focus";
    };
    readonly shadow: {
        readonly base: "bg-input border-darker rounded-md shadow-component-default";
        readonly focus: "focus-within:border-strong focus-within:shadow-component-input-focus data-[state=open]:border-strong data-[state=open]:shadow-component-input-focus";
    };
    readonly soft: {
        readonly base: "bg-input-soft-focusable border-transparent rounded-md";
        readonly focus: "focus-within:shadow-component-input-focus data-[state=open]:shadow-component-input-focus";
    };
};
export declare const STATE_CONFIG: {
    readonly default: {
        readonly border: "border-darker";
        readonly text: "text-default";
        readonly placeholder: "text-hint";
    };
    readonly disabled: {
        readonly border: "border-default";
        readonly text: "text-hint";
        readonly placeholder: "text-hint";
        readonly bg: "bg-input-disabled";
    };
    readonly error: {
        readonly border: "border-destructive";
        readonly text: "text-default";
        readonly placeholder: "text-hint";
    };
    readonly success: {
        readonly border: "border-success";
        readonly text: "text-default";
        readonly placeholder: "text-hint";
    };
};
export declare const MENU_ITEM_SIZE_CONFIG: {
    readonly default: {
        readonly height: "height-32";
        readonly padding: "padding-6";
        readonly gap: "ds-gap-6";
        readonly iconSize: 16;
        readonly iconFrame: "width-20 height-20";
        readonly text: "size-sm line-height-leading-5 letter-spacing-tracking-tight";
    };
    readonly large: {
        readonly height: "min-height-50";
        readonly padding: "padding-x-8 padding-y-6";
        readonly gap: "ds-gap-6";
        readonly iconSize: 20;
        readonly iconFrame: "width-36 height-36";
        readonly text: "size-sm line-height-leading-5 letter-spacing-tracking-tight";
    };
};
