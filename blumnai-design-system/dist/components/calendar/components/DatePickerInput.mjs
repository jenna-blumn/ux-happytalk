"use client";
import { jsxs as I, jsx as a } from "react/jsx-runtime";
import { forwardRef as T } from "react";
import { cn as i } from "../../../utils/cn.mjs";
import { Icon as h } from "../../icons/Icon/Icon.mjs";
import { SIZE_CONFIG as w, STYLE_CONFIG as P, STATE_CONFIG as l, INPUT_WRAPPER_BASE as _ } from "../../../constants/input/Input/Input.constants.mjs";
const k = T(({
  datePickerStyle: f = "default",
  size: u = "sm",
  displayValue: o,
  placeholder: m,
  disabled: t = !1,
  hasError: r = !1,
  hasSuccess: n = !1,
  isOpen: p = !1,
  onClick: d
}, b) => {
  const e = w[u], c = P[f], s = t ? "disabled" : r ? "error" : n ? "success" : "default", x = l[s], N = t ? "default-disabled" : r ? "destructive" : n ? "success" : "default-subtle", g = i(
    _,
    e.container,
    e.paddingWithTailIcon,
    e.gap,
    c.base,
    !t && c.focus,
    s === "disabled" && l.disabled.bg,
    s === "error" && "border-destructive",
    s === "success" && "border-success",
    p && "border-0 shadow-component-input-focus",
    t ? "cursor-not-allowed" : "cursor-pointer"
  ), C = i(
    "flex-1 min-w-0 text-left font-body",
    e.text,
    "letter-spacing-tracking-tight",
    o ? x.text : "text-hint"
  );
  return /* @__PURE__ */ I(
    "button",
    {
      ref: b,
      type: "button",
      disabled: t,
      onClick: d,
      className: g,
      children: [
        /* @__PURE__ */ a("span", { className: C, children: o || m }),
        /* @__PURE__ */ a(
          h,
          {
            iconType: ["business", "calendar"],
            size: e.iconSize,
            color: N,
            className: "flex-shrink-0"
          }
        )
      ]
    }
  );
});
k.displayName = "DatePickerInput";
export {
  k as DatePickerInput
};
