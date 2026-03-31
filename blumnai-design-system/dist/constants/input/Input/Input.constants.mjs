const t = {
  xs: {
    container: "height-28",
    padding: "padding-x-6 padding-y-4",
    paddingWithLeadIcon: "padding-x-6 padding-y-4",
    paddingWithTailIcon: "padding-x-6 padding-y-4",
    paddingWithBothIcons: "padding-x-6 padding-y-4",
    text: "size-xs line-height-leading-4",
    iconSize: 14,
    gap: "ds-gap-4"
  },
  sm: {
    container: "height-32",
    padding: "padding-x-8 padding-y-6",
    paddingWithLeadIcon: "padding-x-8 padding-y-6",
    paddingWithTailIcon: "padding-x-8 padding-y-6",
    paddingWithBothIcons: "padding-x-8 padding-y-6",
    text: "size-sm line-height-leading-5",
    iconSize: 16,
    gap: "ds-gap-6"
  },
  lg: {
    container: "height-36",
    padding: "padding-x-10 padding-y-8",
    paddingWithLeadIcon: "padding-x-10 padding-y-8",
    paddingWithTailIcon: "padding-x-10 padding-y-8",
    paddingWithBothIcons: "padding-x-10 padding-y-8",
    text: "size-sm line-height-leading-5",
    iconSize: 16,
    gap: "ds-gap-6"
  }
}, e = {
  default: {
    base: "bg-input border-darker rounded-sm",
    focus: "focus-within:border-strong focus-within:shadow-component-input-focus"
  },
  shadow: {
    base: "bg-input border-darker rounded-sm shadow-component-default",
    focus: "focus-within:border-strong focus-within:shadow-component-input-focus"
  },
  soft: {
    base: "bg-input-soft-focusable border-transparent rounded-sm",
    focus: "focus-within:shadow-component-input-focus"
  }
}, n = {
  default: {
    border: "border-darker",
    text: "text-default",
    placeholder: "placeholder:text-hint"
  },
  disabled: {
    border: "border-default",
    text: "text-hint",
    placeholder: "placeholder:text-hint",
    bg: "bg-input-disabled"
  },
  error: {
    border: "border-destructive",
    text: "text-default",
    placeholder: "placeholder:text-hint"
  },
  success: {
    border: "border-success",
    text: "text-default",
    placeholder: "placeholder:text-hint"
  }
}, i = "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight font-medium text-default", d = "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-muted", a = "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted", o = "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-destructive", s = "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-success", g = "text-destructive", r = {
  container: "inline-flex items-center justify-center bg-card border-default rounded-sm padding-2",
  text: "font-code size-xs line-height-leading-4 letter-spacing-tracking-normal text-muted"
}, c = "flex flex-col", p = "flex items-center w-full transition-colors duration-150", l = "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted", h = "flex-1 min-w-0 bg-transparent outline-none font-body";
export {
  a as CAPTION_STYLE,
  o as ERROR_CAPTION_STYLE,
  c as INPUT_CONTAINER_BASE,
  l as INPUT_COUNT_STYLE,
  h as INPUT_FIELD_BASE,
  p as INPUT_WRAPPER_BASE,
  i as LABEL_STYLE,
  g as REQUIRED_STYLE,
  r as SHORTCUT_STYLE,
  t as SIZE_CONFIG,
  n as STATE_CONFIG,
  e as STYLE_CONFIG,
  s as SUCCESS_CAPTION_STYLE,
  d as SUPPORT_TEXT_STYLE
};
