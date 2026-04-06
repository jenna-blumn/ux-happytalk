export declare const CONTAINER_BASE: "inline-flex items-center font-medium cursor-pointer transition-all duration-200 focus:outline-none";
export declare const SIZE_CONFIG: {
    readonly text: "size-sm line-height-leading-5";
    readonly icon: 16;
    readonly gap: "ds-gap-4";
    readonly padding: "padding-x-10 padding-y-6";
    readonly letterSpacing: "letter-spacing-tracking-tight";
    readonly radius: "rounded-sm";
};
export declare const ALIGN_CONFIG: {
    readonly left: "text-left";
    readonly center: "text-center";
    readonly right: "text-right";
};
export declare const STATE_CONFIG: {
    readonly default: {
        readonly bg: "bg-input";
        readonly border: "card-border-default";
        readonly text: "text-default";
        readonly iconColor: "var(--icon-default-muted)";
    };
    readonly hover: {
        readonly bg: "hover:bg-input-soft";
    };
    readonly active: {
        readonly bg: "active:bg-muted";
    };
    readonly focus: {
        readonly ring: "";
    };
    readonly opened: {
        readonly bg: "bg-input";
        readonly border: "card-border-default";
        readonly text: "text-default";
        readonly iconColor: "var(--icon-default-muted)";
    };
};
export declare const DISABLED_STYLE: {
    readonly container: "bg-state-disabled border-default text-hint cursor-not-allowed";
    readonly iconColor: "var(--icon-default-disabled)";
};
export declare const BADGE_STYLE: {
    readonly container: "inline-flex items-center justify-center border-default rounded-xs padding-x-4";
    readonly text: "size-xs line-height-leading-4 text-subtle";
    readonly size: "height-20";
};
