const t = "flex items-center justify-center transition-colors select-none", e = {
  xs: "width-20 height-20",
  sm: "width-24 height-24",
  lg: "width-28 height-28"
}, o = {
  default: "bg-state-ghost hover:bg-state-ghost-hover active:bg-state-ghost-press rounded-xs",
  disabled: "bg-state-ghost opacity-50 cursor-not-allowed rounded-xs"
}, r = "text-center font-body font-medium tabular-nums", s = {
  xs: {
    container: "flex flex-col border-l border-l-default",
    button: "width-20 flex items-center justify-center hover:bg-state-ghost-hover transition-colors",
    buttonTop: "border-b border-b-default",
    iconSize: 10
  },
  sm: {
    container: "flex flex-col border-l border-l-default",
    button: "width-24 flex items-center justify-center hover:bg-state-ghost-hover transition-colors",
    buttonTop: "border-b border-b-default",
    iconSize: 12
  },
  lg: {
    container: "flex flex-col border-l border-l-default",
    button: "width-28 flex items-center justify-center hover:bg-state-ghost-hover transition-colors",
    buttonTop: "border-b border-b-default",
    iconSize: 12
  }
};
export {
  s as COMPACT_BUTTON_STYLE,
  t as QUANTITY_BUTTON_BASE,
  e as QUANTITY_BUTTON_SIZE,
  o as QUANTITY_BUTTON_STATES,
  r as QUANTITY_INPUT_STYLE
};
