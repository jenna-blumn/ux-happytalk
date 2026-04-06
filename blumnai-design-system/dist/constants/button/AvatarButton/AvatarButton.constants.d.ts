export declare const SIZE_CONFIG: {
    readonly button: {
        readonly sm: "height-28 padding-y-4 padding-l-4 padding-r-8 ds-gap-4";
        readonly lg: "height-32 padding-y-6 padding-l-6 padding-r-12 ds-gap-6";
    };
    readonly avatar: {
        readonly sm: "xs";
        readonly lg: "xs";
    };
    readonly icon: {
        readonly sm: 20;
        readonly lg: 20;
    };
};
export declare const CONTAINER_BASE: "inline-flex items-center rounded-full transition-all duration-200 focus:outline-none";
export declare const TEXT_STYLE: "font-body size-sm line-height-leading-5 font-medium letter-spacing-tracking-normal";
export declare const STYLE_CONFIG: {
    readonly default: {
        readonly base: "bg-state-secondary text-default border-darker";
        readonly states: "hover:bg-state-secondary-hover active:bg-state-secondary-press";
        readonly focus: "focus-visible:shadow-component-focus";
        readonly disabled: "bg-state-disabled text-hint border-default cursor-not-allowed";
    };
    readonly dashed: {
        readonly base: "bg-state-secondary text-default border border-dashed border-darker";
        readonly states: "hover:bg-state-secondary-hover active:bg-state-secondary-press";
        readonly focus: "focus-visible:shadow-component-focus";
        readonly disabled: "bg-state-disabled text-hint border border-dashed border-default cursor-not-allowed";
    };
    readonly soft: {
        readonly base: "bg-state-soft text-default border-none";
        readonly states: "hover:bg-state-soft-hover active:bg-state-soft-press";
        readonly focus: "focus-visible:shadow-component-misc-focus";
        readonly disabled: "bg-muted text-hint border-none cursor-not-allowed";
    };
};
