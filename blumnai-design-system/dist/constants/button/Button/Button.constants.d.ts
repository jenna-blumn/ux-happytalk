export declare const SIZE_CONFIG: {
    readonly button: {
        readonly iconOnly: {
            readonly '2xs': "width-24 height-24";
            readonly xs: "width-28 height-28";
            readonly sm: "width-32 height-32";
            readonly md: "width-36 height-36";
            readonly lg: "width-40 height-40";
        };
        readonly default: {
            readonly '2xs': "height-24 size-xs line-height-leading-4 padding-x-6 padding-y-4 ds-gap-4";
            readonly xs: "height-28 size-sm line-height-leading-5 padding-x-8 padding-y-4 ds-gap-4";
            readonly sm: "height-32 size-sm line-height-leading-5 padding-x-10 padding-y-6 ds-gap-4";
            readonly md: "height-36 size-sm line-height-leading-5 padding-x-12 padding-y-8 ds-gap-6";
            readonly lg: "height-40 size-sm line-height-leading-5 padding-x-14 padding-y-10 ds-gap-6";
        };
    };
    readonly icon: {
        readonly default: {
            readonly '2xs': 16;
            readonly xs: 16;
            readonly sm: 16;
            readonly md: 16;
            readonly lg: 18;
        };
        readonly iconOnly: {
            readonly '2xs': 16;
            readonly xs: 16;
            readonly sm: 20;
            readonly md: 20;
            readonly lg: 20;
        };
    };
    readonly shortcut: {
        readonly '2xs': "min-w-[16px] height-16 size-xs padding-x-4 rounded-xs";
        readonly xs: "min-w-[16px] height-16 size-xs padding-x-4 rounded-xs";
        readonly sm: "min-w-[20px] height-20 size-xs padding-x-4 rounded-xs";
        readonly md: "min-w-[20px] height-20 size-xs padding-x-4 rounded-xs";
        readonly lg: "min-w-[20px] height-20 size-xs padding-x-4 rounded-xs";
    };
};
export declare const SHORTCUT_STYLE: {
    readonly light: "bg-muted border border-default text-subtle";
    readonly inverted: "bg-[#ffffff1a] border border-[#ffffff33] text-white";
};
export declare const CONTAINER_BASE: "inline-flex items-center justify-center cursor-pointer transition-all duration-200 focus:outline-none";
export declare const TEXT_STYLE: "font-medium letter-spacing-tracking-normal";
export declare const DISABLED_STYLE: "bg-state-disabled text-hint cursor-not-allowed";
export declare const STYLE_CONFIG: {
    readonly primary: {
        readonly base: "bg-state-primary text-white border border-transparent";
        readonly states: "hover:bg-state-primary-hover active:bg-state-primary-press";
        readonly focus: "focus-visible:shadow-component-focus";
        readonly loading: "bg-state-primary-loading text-white border border-transparent";
    };
    readonly secondary: {
        readonly base: "bg-state-secondary text-default border-default";
        readonly states: "hover:bg-state-secondary-hover active:bg-state-secondary-press";
        readonly focus: "focus-visible:shadow-component-focus";
        readonly loading: "bg-state-secondary-loading text-default border-default";
    };
    readonly destructive: {
        readonly base: "bg-state-destructive text-white border border-transparent";
        readonly states: "hover:bg-state-destructive-hover active:bg-state-destructive-press";
        readonly focus: "focus-visible:shadow-component-destructive-focus";
        readonly loading: "bg-state-destructive-loading text-white border border-transparent";
    };
    readonly ghost: {
        readonly base: "bg-state-ghost text-subtle border border-transparent";
        readonly states: "hover:bg-state-ghost-hover active:bg-state-ghost-press";
        readonly focus: "focus-visible:shadow-component-misc-focus";
        readonly loading: "bg-state-ghost-loading text-subtle border border-transparent";
    };
    readonly ghostMuted: {
        readonly base: "bg-state-ghost text-muted border border-transparent";
        readonly states: "hover:bg-state-ghost-hover active:bg-state-ghost-press";
        readonly focus: "focus-visible:shadow-component-misc-focus";
        readonly loading: "bg-state-ghost-loading text-subtle border border-transparent";
    };
    readonly soft: {
        readonly base: "bg-state-soft text-subtle border border-transparent";
        readonly states: "hover:bg-state-soft-hover active:bg-state-soft-press";
        readonly focus: "focus-visible:shadow-component-misc-focus";
        readonly loading: "bg-state-soft-loading text-subtle border border-transparent";
    };
    readonly dashed: {
        readonly base: "bg-state-secondary text-default border border-dashed border-default";
        readonly states: "hover:bg-state-secondary-hover active:bg-state-secondary-press";
        readonly focus: "focus-visible:shadow-component-misc-focus";
        readonly loading: "bg-state-secondary-loading text-default border border-dashed border-default";
    };
};
