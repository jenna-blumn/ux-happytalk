"use client";
import { jsx as a } from "react/jsx-runtime";
import * as r from "react";
import * as v from "@radix-ui/react-slider";
import { cn as i } from "../../../utils/cn.mjs";
const g = r.forwardRef(({ className: n, disabled: t, showTooltip: l, tooltipValue: e, orientation: d = "horizontal", ...u }, c) => {
  const [f, o] = r.useState(!1), [m, s] = r.useState(!1), b = l && (f || m) && e, h = d === "vertical";
  return /* @__PURE__ */ a(
    v.Thumb,
    {
      ref: c,
      "aria-valuetext": e,
      className: i(
        "relative block width-16 height-16 rounded-full",
        "focus-visible:outline-none",
        "transition-colors",
        t ? "bg-subtle border-default cursor-not-allowed" : "bg-card border-darker cursor-grab active:cursor-grabbing",
        !t && "slider-thumb-shadow",
        n
      ),
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      onFocus: () => s(!0),
      onBlur: () => s(!1),
      ...u,
      children: b && /* @__PURE__ */ a(
        "div",
        {
          className: i(
            "absolute",
            "bg-inverted rounded-xs",
            "padding-x-4 padding-y-2",
            "font-body size-xs font-medium text-inverted-default",
            "whitespace-nowrap",
            "pointer-events-none",
            h ? "top-1/2 -translate-y-1/2 left-full [margin-left:4px]" : "left-1/2 -translate-x-1/2 bottom-full margin-b-4"
          ),
          children: e
        }
      )
    }
  );
});
g.displayName = "SliderThumb";
export {
  g as SliderThumb
};
