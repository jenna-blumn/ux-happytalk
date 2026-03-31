"use client";
import { jsx as e } from "react/jsx-runtime";
import * as i from "react";
import * as t from "@radix-ui/react-hover-card";
import { cn as s } from "../../utils/cn.mjs";
const p = ({ ...a }) => /* @__PURE__ */ e(t.Root, { ...a });
p.displayName = "HoverCard";
const c = i.forwardRef(({ ...a }, o) => /* @__PURE__ */ e(t.Trigger, { ref: o, ...a }));
c.displayName = "HoverCardTrigger";
const g = i.forwardRef(({ className: a, align: o = "center", sideOffset: d = 4, container: m, width: r, style: n, ...l }, f) => /* @__PURE__ */ e(t.Portal, { container: m, children: /* @__PURE__ */ e(
  t.Content,
  {
    ref: f,
    align: o,
    sideOffset: d,
    className: s(
      "z-50 rounded-lg border-default bg-card padding-16 text-default shadow-modal-sm outline-none",
      !r && "[width:256px]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "origin-[--radix-hover-card-content-transform-origin]",
      a
    ),
    style: r ? { width: typeof r == "number" ? `${r}px` : r, ...n } : n,
    ...l
  }
) }));
g.displayName = "HoverCardContent";
const C = i.forwardRef(({ className: a, ...o }, d) => /* @__PURE__ */ e(
  t.Arrow,
  {
    ref: d,
    className: s("fill-card", a),
    ...o
  }
));
C.displayName = "HoverCardArrow";
export {
  p as HoverCard,
  C as HoverCardArrow,
  g as HoverCardContent,
  c as HoverCardTrigger
};
