"use client";
import { jsx as i } from "react/jsx-runtime";
import * as s from "react";
import * as o from "@radix-ui/react-popover";
import { getPixelValue as v } from "../../lib/css-utils.mjs";
import { cn as d } from "../../utils/cn.mjs";
import { ScrollArea as P } from "../scroll-area/ScrollArea.mjs";
const x = o.Root, C = o.Trigger, S = o.Anchor, b = o.Portal, R = o.Close, g = s.forwardRef(({ className: t, align: e = "center", sideOffset: r = 4, width: a, container: l, style: m, ...p }, c) => {
  const f = a !== void 0 && a !== "" ? { width: v(a) } : void 0, n = {
    ...m || {},
    ...f || {}
  };
  return /* @__PURE__ */ i(o.Portal, { container: l, children: /* @__PURE__ */ i(
    o.Content,
    {
      ref: c,
      align: e,
      sideOffset: r,
      className: d(
        "z-50 [width:288px] rounded-lg bg-card padding-16 text-default shadow-modal-sm outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-[--radix-popover-content-transform-origin]",
        a && "w-auto",
        t
      ),
      style: Object.keys(n).length > 0 ? n : void 0,
      ...p
    }
  ) });
});
g.displayName = o.Content.displayName;
const u = ({ className: t, maxHeight: e, children: r }) => /* @__PURE__ */ i(
  P,
  {
    orientation: "vertical",
    maxHeight: e,
    className: t,
    children: r
  }
);
u.displayName = "PopoverScrollArea";
const y = s.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ i(
  o.Arrow,
  {
    ref: r,
    className: d("fill-card", t),
    ...e
  }
));
y.displayName = o.Arrow.displayName;
export {
  x as Popover,
  S as PopoverAnchor,
  y as PopoverArrow,
  R as PopoverClose,
  g as PopoverContent,
  b as PopoverPortal,
  u as PopoverScrollArea,
  C as PopoverTrigger
};
