/**
 * Radius tokens extracted from Figma REST API
 * Source: https://www.figma.com/design/hNwky49HL9rYtxWb5smgqZ/Sort-UI-%E2%80%94-1.3-Source?node-id=4245-142373
 * Fetched: 2026-01-18
 *
 * Structure matches Figma Variable Modes:
 * Each size has four modes (style variants) that correspond to Figma's variable modes:
 * - default: "Default" mode in Figma - Base radius value
 * - rounded: "Rounded" mode in Figma - More rounded variant
 * - full: "Full" mode in Figma - Full circle (9999px)
 * - none: "None" mode in Figma - No radius (0px)
 *
 * Usage:
 * - radius.sm.default → Uses "Default" mode value
 * - radius.sm.rounded → Uses "Rounded" mode value
 * - radius.sm.full → Uses "Full" mode value
 * - radius.sm.none → Uses "None" mode value
 */
export declare const radius: {
    readonly none: {
        readonly default: "0px";
        readonly rounded: "0px";
        readonly full: "0px";
        readonly none: "0px";
    };
    readonly '2xs': {
        readonly default: "2px";
        readonly rounded: "4px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly xs: {
        readonly default: "4px";
        readonly rounded: "6px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly sm: {
        readonly default: "6px";
        readonly rounded: "8px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly md: {
        readonly default: "8px";
        readonly rounded: "12px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly lg: {
        readonly default: "12px";
        readonly rounded: "16px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly xl: {
        readonly default: "16px";
        readonly rounded: "20px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly '2xl': {
        readonly default: "24px";
        readonly rounded: "28px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly '3xl': {
        readonly default: "28px";
        readonly rounded: "36px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly full: {
        readonly default: "9999px";
        readonly rounded: "9999px";
        readonly full: "9999px";
        readonly none: "0px";
    };
    readonly card: {
        readonly none: {
            readonly default: "0px";
            readonly rounded: "0px";
            readonly full: "0px";
            readonly none: "0px";
        };
        readonly xs: {
            readonly default: "4px";
            readonly rounded: "8px";
            readonly full: "10px";
            readonly none: "0px";
        };
        readonly sm: {
            readonly default: "8px";
            readonly rounded: "12px";
            readonly full: "16px";
            readonly none: "0px";
        };
        readonly md: {
            readonly default: "12px";
            readonly rounded: "16px";
            readonly full: "24px";
            readonly none: "0px";
        };
        readonly lg: {
            readonly default: "16px";
            readonly rounded: "20px";
            readonly full: "32px";
            readonly none: "0px";
        };
    };
};
