"use client";
const e = {
  sm: {
    padding: "padding-x-12 padding-y-10",
    text: "size-sm line-height-leading-5"
  },
  lg: {
    padding: "padding-x-14 padding-y-12",
    text: "size-sm line-height-leading-5"
  }
}, t = {
  default: {
    base: "bg-input border-darker rounded-lg",
    focus: "focus-within:border-strong focus-within:shadow-component-input-focus"
  },
  shadow: {
    base: "bg-input border-darker rounded-lg shadow-component-default",
    focus: "focus-within:border-strong focus-within:shadow-component-input-focus"
  },
  soft: {
    base: "bg-input-soft-focusable border-transparent rounded-lg",
    focus: "focus-within:shadow-component-input-focus"
  }
}, o = {
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
}, s = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
}, r = "w-full bg-transparent outline-none font-body", n = "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted", i = "flex items-center justify-between ds-gap-8 margin-t-4", d = "flex items-center ds-gap-4", a = "flex items-center justify-center rounded-sm transition-colors duration-150 cursor-pointer", c = "width-28 height-28 bg-state-soft hover:bg-state-soft-hover active:bg-state-soft-press", l = "flex items-center ds-gap-4 padding-x-8 padding-y-4 height-28 rounded-sm bg-state-soft hover:bg-state-soft-hover active:bg-state-soft-press font-body size-sm line-height-leading-5 text-muted cursor-pointer transition-colors duration-150", h = "width-28 height-28 rounded-sm bg-state-primary hover:bg-state-primary-hover active:bg-state-primary-press flex items-center justify-center transition-colors duration-150", u = "width-28 height-28 rounded-sm bg-state-soft flex items-center justify-center cursor-not-allowed";
export {
  n as COUNT_STYLE,
  s as RESIZE_CONFIG,
  e as SIZE_CONFIG,
  o as STATE_CONFIG,
  t as STYLE_CONFIG,
  r as TEXTAREA_BASE,
  d as TOOLBAR_ACTIONS_CONTAINER,
  a as TOOLBAR_BUTTON_BASE,
  c as TOOLBAR_BUTTON_ICON_ONLY,
  l as TOOLBAR_CHIP_BASE,
  i as TOOLBAR_CONTAINER,
  h as TOOLBAR_SUBMIT_BUTTON,
  u as TOOLBAR_SUBMIT_BUTTON_DISABLED
};
