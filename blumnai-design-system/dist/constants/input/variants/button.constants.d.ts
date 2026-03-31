/**
 * InputButton component constants
 *
 * Based on Figma design specifications
 *
 * Structure (from Figma):
 * - Outer Container: white bg, shadow-based border (10% outer + 40% inset), 8px radius
 * - Inner Container (input area): flex-1, padding 8px, itemSpacing 6
 * - Divider: VECTOR, 1px stroke at 15% opacity (border-darker), full height
 * - tail-button: INLINE button (NOT regular Button component!)
 *   - Transparent background
 *   - No border-radius (flat edges)
 *   - Padding: 10px horizontal, 6px (sm) / 8px (lg) vertical
 *   - Text: dark color, 14px, font-weight 500
 */
export declare const BUTTON_SIZE_CONFIG: {
    readonly xs: {
        readonly container: "height-28";
        readonly inputPadding: "padding-6";
        readonly inputGap: "ds-gap-4";
        readonly buttonPadding: "padding-x-8 padding-y-4";
        readonly buttonGap: "ds-gap-4";
        readonly iconSize: 14;
    };
    readonly sm: {
        readonly container: "height-32";
        readonly inputPadding: "padding-8";
        readonly inputGap: "ds-gap-6";
        readonly buttonPadding: "padding-x-10 padding-y-6";
        readonly buttonGap: "ds-gap-4";
        readonly iconSize: 16;
    };
    readonly lg: {
        readonly container: "height-36";
        readonly inputPadding: "padding-8";
        readonly inputGap: "ds-gap-6";
        readonly buttonPadding: "padding-x-10 padding-y-8";
        readonly buttonGap: "ds-gap-4";
        readonly iconSize: 16;
    };
};
export declare const INLINE_BUTTON_TEXT: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight font-medium";
export declare const INLINE_BUTTON_BASE: "flex items-center justify-center bg-transparent cursor-pointer select-none";
export declare const INLINE_BUTTON_HOVER: "hover:bg-state-ghost-hover active:bg-state-ghost-press";
export declare const DIVIDER_STYLE: "w-px self-stretch bg-divider";
