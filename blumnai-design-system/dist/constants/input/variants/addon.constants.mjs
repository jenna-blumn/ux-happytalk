const d = "flex items-center justify-center", r = "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal font-medium text-muted whitespace-nowrap", e = "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal text-muted whitespace-nowrap", n = {
  xs: {
    addOnPadding: "padding-x-10 padding-y-4",
    inputPadding: "padding-x-6 padding-y-4",
    prefixBorder: "border-r-darker",
    suffixBorder: "border-l-darker"
  },
  sm: {
    // Add-on section: 12px horizontal padding (Figma spec)
    addOnPadding: "padding-x-12 padding-y-6",
    // Input area: 8px horizontal padding (Figma spec)
    inputPadding: "padding-x-8 padding-y-6",
    // Border for divider
    prefixBorder: "border-r-darker",
    suffixBorder: "border-l-darker"
  },
  lg: {
    addOnPadding: "padding-x-14 padding-y-8",
    inputPadding: "padding-x-10 padding-y-8",
    prefixBorder: "border-r-darker",
    suffixBorder: "border-l-darker"
  }
};
export {
  d as ADDON_SECTION_BASE,
  n as ADDON_SIZE_CONFIG,
  r as ADDON_TEXT_STYLE,
  e as INLINE_ADDON_STYLE
};
