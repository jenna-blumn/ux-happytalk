export declare const SIZE_CONFIG: {
    readonly button: {
        readonly sm: "width-16 height-16";
        readonly md: "width-20 height-20";
        readonly lg: "width-24 height-24";
    };
    readonly icon: {
        readonly sm: 14;
        readonly md: 16;
        readonly lg: 16;
    };
};
export declare const CONTAINER_BASE: "inline-flex items-center justify-center transition-all duration-200 focus:outline-none";
export declare const SHAPE_CONFIG: {
    readonly rounded: "rounded-xs";
    readonly circle: "rounded-full";
};
export declare const STYLE_CONFIG: {
    readonly default: {
        readonly base: "bg-transparent";
        readonly states: "hover:bg-state-ghost-hover active:bg-state-ghost-press";
        readonly focus: "focus-visible:shadow-component-misc-focus";
        readonly iconColor: "var(--icon-default-muted)";
        readonly disabledIconColor: "var(--icon-default-disabled)";
    };
    readonly inverted: {
        readonly base: "bg-transparent";
        readonly states: "hover:bg-white/[0.08] active:bg-white/[0.15]";
        readonly focus: "focus-visible:shadow-component-misc-focus";
        readonly iconColor: "var(--icon-white-default)";
        readonly disabledIconColor: "var(--icon-white-disabled)";
    };
};
export declare const DISABLED_STYLE: "bg-transparent cursor-not-allowed";
