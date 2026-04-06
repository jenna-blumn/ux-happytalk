export declare const SIZE_CONFIG: {
    readonly text: {
        readonly xs: "size-xs line-height-leading-4";
        readonly md: "size-sm line-height-leading-5";
        readonly lg: "size-sm line-height-leading-5";
    };
    readonly icon: {
        readonly xs: 16;
        readonly md: 16;
        readonly lg: 16;
    };
    readonly gap: {
        readonly xs: "ds-gap-4";
        readonly md: "ds-gap-4";
        readonly lg: "ds-gap-4";
    };
    readonly padding: {
        readonly xs: "padding-x-6 padding-y-4";
        readonly md: "padding-x-8 padding-y-4";
        readonly lg: "padding-x-10 padding-y-6";
    };
    readonly letterSpacing: {
        readonly xs: "letter-spacing-tracking-tight";
        readonly md: "letter-spacing-tracking-tight";
        readonly lg: "letter-spacing-tracking-tight";
    };
};
export declare const SHAPE_CONFIG: {
    readonly rounded: "rounded-sm";
    readonly pill: "rounded-full";
};
export declare const CONTAINER_BASE: "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none";
export declare const STATE_CONFIG: {
    readonly unselected: {
        readonly bg: "bg-input";
        readonly border: "border-dashed border-darker";
        readonly text: "text-subtle";
        readonly iconColor: "var(--icon-default-muted)";
    };
    readonly selected: {
        readonly bg: "bg-input";
        readonly border: "card-border-default";
        readonly text: "text-subtle";
        readonly iconColor: "var(--icon-default-muted)";
    };
    readonly hover: {
        readonly bg: "hover:bg-input-soft";
    };
    readonly active: {
        readonly bg: "active:bg-muted";
    };
    readonly focus: {
        readonly ring: "focus-visible:shadow-component-focus";
    };
};
export declare const DISABLED_STYLE: {
    readonly unselected: "bg-state-disabled border-dashed border-default text-hint cursor-not-allowed";
    readonly selected: "bg-state-disabled card-border-default text-hint cursor-not-allowed";
    readonly iconColor: "var(--icon-default-disabled)";
};
