/**
 * InputTags component constants
 *
 * Based on Figma design specifications
 */
export declare const TAG_BASE: "inline-flex items-center rounded-xs transition-colors backdrop-blur-sm";
export declare const TAG_SIZE_CONFIG: {
    readonly xs: {
        readonly container: "height-20 padding-x-2 ds-gap-0";
        readonly text: "size-xs line-height-leading-4 padding-x-4";
        readonly closeButton: "width-16 height-16";
        readonly iconSize: 14;
    };
    readonly sm: {
        readonly container: "height-20 padding-x-2 ds-gap-0";
        readonly text: "size-xs line-height-leading-4 padding-x-4";
        readonly closeButton: "width-16 height-16";
        readonly iconSize: 14;
    };
    readonly lg: {
        readonly container: "height-20 padding-x-2 ds-gap-0";
        readonly text: "size-xs line-height-leading-4 padding-x-4";
        readonly closeButton: "width-16 height-16";
        readonly iconSize: 14;
    };
};
export declare const TAG_TEXT_STYLE: "font-body letter-spacing-tracking-tight text-subtle font-medium whitespace-nowrap";
export declare const TAG_CLOSE_BUTTON: "flex items-center justify-center rounded-2xs hover:bg-state-ghost-hover transition-colors cursor-pointer";
export declare const TAGS_CONTAINER: "flex flex-wrap ds-gap-4 margin-t-8";
export declare const INLINE_TAGS_CONTAINER: "flex flex-wrap ds-gap-4 items-center";
export declare const TAG_VARIANT_STYLES: {
    readonly inline: {
        readonly default: "bg-card border-default hover:border-darker";
        readonly disabled: "bg-card border-default opacity-50";
    };
    readonly stacked: {
        readonly default: "bg-card border-darker hover:border-strong";
        readonly disabled: "bg-card border-darker opacity-50";
    };
};
export declare const TAG_STATES: {
    readonly default: "bg-card border-default hover:border-darker";
    readonly disabled: "bg-card border-default opacity-50";
};
