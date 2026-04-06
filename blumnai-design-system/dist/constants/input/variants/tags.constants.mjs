const e = "inline-flex items-center rounded-xs transition-colors backdrop-blur-sm", t = {
  xs: {
    container: "height-20 padding-x-2 ds-gap-0",
    text: "size-xs line-height-leading-4 padding-x-4",
    closeButton: "width-16 height-16",
    iconSize: 14
  },
  sm: {
    container: "height-20 padding-x-2 ds-gap-0",
    text: "size-xs line-height-leading-4 padding-x-4",
    closeButton: "width-16 height-16",
    iconSize: 14
  },
  lg: {
    container: "height-20 padding-x-2 ds-gap-0",
    text: "size-xs line-height-leading-4 padding-x-4",
    closeButton: "width-16 height-16",
    iconSize: 14
  }
}, i = "font-body letter-spacing-tracking-tight text-subtle font-medium whitespace-nowrap", n = "flex items-center justify-center rounded-2xs hover:bg-state-ghost-hover transition-colors cursor-pointer", d = "flex flex-wrap ds-gap-4 margin-t-8", r = "flex flex-wrap ds-gap-4 items-center", o = {
  // Tags inside input
  inline: {
    default: "bg-card border-default hover:border-darker",
    disabled: "bg-card border-default opacity-50"
  },
  // Tags below input
  stacked: {
    default: "bg-card border-darker hover:border-strong",
    disabled: "bg-card border-darker opacity-50"
  }
};
export {
  r as INLINE_TAGS_CONTAINER,
  d as TAGS_CONTAINER,
  e as TAG_BASE,
  n as TAG_CLOSE_BUTTON,
  t as TAG_SIZE_CONFIG,
  i as TAG_TEXT_STYLE,
  o as TAG_VARIANT_STYLES
};
