/**
 * InputAddOn component constants
 *
 * Based on Figma design specifications
 *
 * Structure:
 * - Outer container: white background, 15% border all sides, 8px radius
 * - Prefix/Suffix sections: NO background, only border for divider
 * - Input area: NO background, NO border
 */
export declare const ADDON_SECTION_BASE: "flex items-center justify-center";
export declare const ADDON_TEXT_STYLE: "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal font-medium text-muted whitespace-nowrap";
export declare const INLINE_ADDON_STYLE: "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal text-muted whitespace-nowrap";
export declare const ADDON_SIZE_CONFIG: {
    readonly xs: {
        readonly addOnPadding: "padding-x-10 padding-y-4";
        readonly inputPadding: "padding-x-6 padding-y-4";
        readonly prefixBorder: "border-r-darker";
        readonly suffixBorder: "border-l-darker";
    };
    readonly sm: {
        readonly addOnPadding: "padding-x-12 padding-y-6";
        readonly inputPadding: "padding-x-8 padding-y-6";
        readonly prefixBorder: "border-r-darker";
        readonly suffixBorder: "border-l-darker";
    };
    readonly lg: {
        readonly addOnPadding: "padding-x-14 padding-y-8";
        readonly inputPadding: "padding-x-10 padding-y-8";
        readonly prefixBorder: "border-r-darker";
        readonly suffixBorder: "border-l-darker";
    };
};
