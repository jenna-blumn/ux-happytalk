export declare const SIZE_CONFIG: {
    readonly text: {
        readonly sm: "size-xs line-height-leading-4";
        readonly md: "size-sm line-height-leading-5";
        readonly lg: "size-md line-height-leading-6";
    };
    readonly icon: {
        readonly sm: 16;
        readonly md: 16;
        readonly lg: 16;
    };
    readonly gap: {
        readonly sm: "ds-gap-4";
        readonly md: "ds-gap-4";
        readonly lg: "ds-gap-4";
    };
    readonly letterSpacing: {
        readonly sm: "letter-spacing-tracking-tight";
        readonly md: "letter-spacing-tracking-tight";
        readonly lg: "letter-spacing-tracking-normal";
    };
};
export declare const CONTAINER_BASE: "inline-flex items-center font-medium bg-transparent no-underline hover:no-underline transition-all duration-200 focus:outline-none";
export declare const TYPE_CONFIG: {
    readonly default: {
        readonly text: "text-default";
        readonly hoverText: "hover:text-subtle";
        readonly iconColor: "var(--icon-default-muted)";
    };
    readonly muted: {
        readonly text: "text-muted";
        readonly hoverText: "hover:text-subtle";
        readonly iconColor: "var(--icon-default-muted)";
    };
    readonly informative: {
        readonly text: "text-informative";
        readonly hoverText: "hover:text-informative";
        readonly iconColor: "var(--icon-informative)";
    };
};
export declare const DISABLED_STYLE: {
    readonly text: "text-hint cursor-not-allowed";
    readonly iconColor: "var(--icon-default-disabled)";
};
export declare const HOVER_STYLE: "";
