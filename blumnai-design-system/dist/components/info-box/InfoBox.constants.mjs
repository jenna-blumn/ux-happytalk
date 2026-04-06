"use client";
const e = {
  default: "bg-basic-gray-subtle",
  info: "bg-basic-blue-subtle",
  success: "bg-basic-green-subtle",
  warning: "bg-basic-orange-subtle",
  error: "bg-basic-red-subtle"
}, c = {
  default: "bg-basic-gray-accent",
  info: "bg-basic-blue-accent",
  success: "bg-basic-green-accent",
  warning: "bg-basic-orange-accent",
  error: "bg-basic-red-accent"
}, s = {
  default: "text-basic-gray-accent",
  info: "text-basic-blue-accent",
  success: "text-basic-green-accent",
  warning: "text-basic-orange-accent",
  error: "text-basic-red-accent"
}, a = {
  default: ["system", "information"],
  info: ["system", "information"],
  success: ["system", "checkbox-circle"],
  warning: ["system", "error-warning"],
  error: ["system", "close-circle"]
};
export {
  a as INFOBOX_DEFAULT_ICON,
  s as INFOBOX_ICON_COLOR,
  c as INFOBOX_INDICATOR,
  e as INFOBOX_VARIANT_BG
};
