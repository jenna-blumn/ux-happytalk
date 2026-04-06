"use client";
import { jsx as o } from "react/jsx-runtime";
import * as v from "react";
import { cva as y } from "class-variance-authority";
import { cn as u } from "../../utils/cn.mjs";
const p = y(
  "bg-muted",
  {
    variants: {
      variant: {
        default: "rounded-md",
        circular: "rounded-full",
        text: "rounded-sm"
      },
      animation: {
        pulse: "motion-safe:animate-pulse",
        wave: "motion-safe:animate-shimmer overflow-hidden relative",
        none: ""
      }
    },
    defaultVariants: {
      variant: "default",
      animation: "pulse"
    }
  }
), x = v.forwardRef(
  ({ className: n, variant: l, width: e, height: a, style: c, animation: d = "pulse", count: t, ...i }, s) => {
    const m = {
      ...e !== void 0 && {
        width: typeof e == "number" ? `${e}px` : e
      },
      ...a !== void 0 && {
        height: typeof a == "number" ? `${a}px` : a
      },
      ...c
    }, f = Object.keys(m).length > 0 ? m : void 0;
    return t && t > 1 ? /* @__PURE__ */ o("div", { className: "flex flex-col ds-gap-8", "aria-hidden": "true", children: Array.from({ length: t }, (b, r) => /* @__PURE__ */ o(
      "div",
      {
        ref: r === 0 ? s : void 0,
        className: u(p({ variant: l, animation: d }), n),
        style: f,
        ...r === 0 ? i : {}
      },
      r
    )) }) : /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        "aria-hidden": "true",
        className: u(p({ variant: l, animation: d }), n),
        style: f,
        ...i
      }
    );
  }
);
x.displayName = "Skeleton";
export {
  x as Skeleton
};
