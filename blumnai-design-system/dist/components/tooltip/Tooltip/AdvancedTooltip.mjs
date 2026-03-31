"use client";
import { jsx as r } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { cn as l } from "../../../utils/cn.mjs";
import { TooltipItem as s } from "./TooltipItem.mjs";
const c = p(({
  className: e,
  items: d,
  minWidth: o,
  ...t
}, i) => /* @__PURE__ */ r(
  "div",
  {
    ref: i,
    className: l(
      "rounded-card-xs",
      "padding-4",
      "bg-card",
      "shadow-modal-sm",
      "flex flex-col items-center justify-center ds-gap-4",
      e
    ),
    style: o ? { minWidth: `${o}px` } : void 0,
    role: "tooltip",
    ...t,
    children: d.map((m, a) => /* @__PURE__ */ r(s, { ...m }, a))
  }
));
c.displayName = "AdvancedTooltip";
export {
  c as AdvancedTooltip
};
