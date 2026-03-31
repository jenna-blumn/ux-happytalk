"use client";
import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { cn as i } from "../../../utils/cn.mjs";
const g = p(({
  className: n,
  children: s,
  badge: t,
  maxWidth: r = 240,
  width: a,
  minWidth: d,
  style: l,
  ...o
}, m) => /* @__PURE__ */ c(
  "div",
  {
    ref: m,
    className: i(
      "rounded-card-xs",
      "padding-y-2 padding-x-4",
      "bg-card",
      "shadow-modal-sm",
      "inline-flex items-center justify-center ds-gap-2",
      n
    ),
    style: { maxWidth: r, width: a, minWidth: d, ...l },
    role: "tooltip",
    ...o,
    children: [
      /* @__PURE__ */ e("div", { className: i("flex", "min-height-20", "padding-x-4", "items-center"), children: /* @__PURE__ */ e("span", { className: "font-body size-xs line-height-leading-4 font-medium letter-spacing-tracking-normal text-default whitespace-pre-line", children: s }) }),
      t && /* @__PURE__ */ e(
        "div",
        {
          className: i(
            "height-16 min-width-16",
            "padding-x-4",
            "rounded",
            "inline-flex items-center justify-center",
            "bg-state-soft",
            "border-darker"
          ),
          children: /* @__PURE__ */ e("span", { className: "size-xs line-height-leading-4 font-medium letter-spacing-tracking-tight text-subtle", children: t })
        }
      )
    ]
  }
));
g.displayName = "Tooltip";
export {
  g as Tooltip
};
