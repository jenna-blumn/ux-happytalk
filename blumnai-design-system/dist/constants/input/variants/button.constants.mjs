const t = {
  xs: {
    container: "height-28",
    inputPadding: "padding-6",
    inputGap: "ds-gap-4",
    buttonPadding: "padding-x-8 padding-y-4",
    buttonGap: "ds-gap-4",
    iconSize: 14
  },
  sm: {
    // Container height
    container: "height-32",
    // Input area: 8px padding all around, 6px gap
    inputPadding: "padding-8",
    inputGap: "ds-gap-6",
    // Inline button: 10px horizontal, 6px vertical, 4px gap
    buttonPadding: "padding-x-10 padding-y-6",
    buttonGap: "ds-gap-4",
    // Icon size
    iconSize: 16
  },
  lg: {
    // Container height
    container: "height-36",
    // Input area: 8px padding all around, 6px gap
    inputPadding: "padding-8",
    inputGap: "ds-gap-6",
    // Inline button: 10px horizontal, 8px vertical, 4px gap
    buttonPadding: "padding-x-10 padding-y-8",
    buttonGap: "ds-gap-4",
    // Icon size
    iconSize: 16
  }
}, n = "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight font-medium", i = "flex items-center justify-center bg-transparent cursor-pointer select-none", d = "hover:bg-state-ghost-hover active:bg-state-ghost-press", a = "w-px self-stretch bg-divider";
export {
  t as BUTTON_SIZE_CONFIG,
  a as DIVIDER_STYLE,
  i as INLINE_BUTTON_BASE,
  d as INLINE_BUTTON_HOVER,
  n as INLINE_BUTTON_TEXT
};
