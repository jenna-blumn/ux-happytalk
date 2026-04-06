const i = {
  sm: {
    container: "height-32",
    minHeight: "min-height-32",
    padding: "padding-x-8 padding-y-6",
    paddingWithLeadIcon: "padding-x-8 padding-y-6",
    text: "size-sm line-height-leading-5",
    iconSize: 16,
    gap: "ds-gap-6"
  },
  lg: {
    container: "height-36",
    minHeight: "min-height-36",
    padding: "padding-x-8 padding-y-8",
    paddingWithLeadIcon: "padding-x-8 padding-y-8",
    text: "size-sm line-height-leading-5",
    iconSize: 16,
    gap: "ds-gap-6"
  }
}, t = {
  default: {
    base: "bg-input border-darker rounded-md",
    focus: "focus-within:border-strong focus-within:shadow-component-input-focus data-[state=open]:border-strong data-[state=open]:shadow-component-input-focus"
  },
  shadow: {
    base: "bg-input border-darker rounded-md shadow-component-default",
    focus: "focus-within:border-strong focus-within:shadow-component-input-focus data-[state=open]:border-strong data-[state=open]:shadow-component-input-focus"
  },
  soft: {
    base: "bg-input-soft-focusable border-transparent rounded-md",
    focus: "focus-within:shadow-component-input-focus data-[state=open]:shadow-component-input-focus"
  }
}, n = {
  disabled: {
    border: "border-default",
    bg: "bg-input-disabled"
  }
}, e = {
  default: {
    height: "height-32",
    padding: "padding-6",
    gap: "ds-gap-6",
    iconSize: 16,
    iconFrame: "width-20 height-20",
    text: "size-sm line-height-leading-5 letter-spacing-tracking-tight"
  },
  large: {
    height: "min-height-50",
    padding: "padding-x-8 padding-y-6",
    gap: "ds-gap-6",
    iconSize: 20,
    iconFrame: "width-36 height-36",
    text: "size-sm line-height-leading-5 letter-spacing-tracking-tight"
  }
};
export {
  e as MENU_ITEM_SIZE_CONFIG,
  i as SIZE_CONFIG,
  n as STATE_CONFIG,
  t as STYLE_CONFIG
};
