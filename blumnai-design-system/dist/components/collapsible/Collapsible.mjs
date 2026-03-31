"use client";
import { jsx as e } from "react/jsx-runtime";
import * as l from "react";
import * as i from "@radix-ui/react-collapsible";
import { cn as r } from "../../utils/cn.mjs";
const s = l.forwardRef(({ ...o }, a) => /* @__PURE__ */ e(i.Root, { ref: a, ...o }));
s.displayName = "Collapsible";
const p = l.forwardRef(({ ...o }, a) => /* @__PURE__ */ e(i.Trigger, { ref: a, ...o }));
p.displayName = "CollapsibleTrigger";
const m = l.forwardRef(({ className: o, ...a }, t) => /* @__PURE__ */ e(
  i.Content,
  {
    ref: t,
    className: r(
      "overflow-hidden",
      "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
      o
    ),
    ...a
  }
));
m.displayName = "CollapsibleContent";
export {
  s as Collapsible,
  m as CollapsibleContent,
  p as CollapsibleTrigger
};
