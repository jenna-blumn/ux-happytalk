/**
 * InputQuantity component constants
 *
 * Based on Figma design specifications
 */
export declare const QUANTITY_BUTTON_BASE: "flex items-center justify-center transition-colors select-none";
export declare const QUANTITY_BUTTON_SIZE: {
    readonly xs: "width-20 height-20";
    readonly sm: "width-24 height-24";
    readonly lg: "width-28 height-28";
};
export declare const QUANTITY_BUTTON_COMPACT_SIZE: {
    readonly xs: "width-14 height-14";
    readonly sm: "width-16 height-14";
    readonly lg: "width-20 height-16";
};
export declare const QUANTITY_BUTTON_STATES: {
    readonly default: "bg-state-ghost hover:bg-state-ghost-hover active:bg-state-ghost-press rounded-xs";
    readonly disabled: "bg-state-ghost opacity-50 cursor-not-allowed rounded-xs";
};
export declare const QUANTITY_INPUT_STYLE: "text-center font-body font-medium tabular-nums";
export declare const COMPACT_BUTTONS_CONTAINER: "flex flex-col items-center justify-center";
export declare const COMPACT_BUTTON_STYLE: {
    readonly xs: {
        readonly container: "flex flex-col border-l border-l-default";
        readonly button: "width-20 flex items-center justify-center hover:bg-state-ghost-hover transition-colors";
        readonly buttonTop: "border-b border-b-default";
        readonly iconSize: 10;
    };
    readonly sm: {
        readonly container: "flex flex-col border-l border-l-default";
        readonly button: "width-24 flex items-center justify-center hover:bg-state-ghost-hover transition-colors";
        readonly buttonTop: "border-b border-b-default";
        readonly iconSize: 12;
    };
    readonly lg: {
        readonly container: "flex flex-col border-l border-l-default";
        readonly button: "width-28 flex items-center justify-center hover:bg-state-ghost-hover transition-colors";
        readonly buttonTop: "border-b border-b-default";
        readonly iconSize: 12;
    };
};
