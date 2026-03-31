"use client";
import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { forwardRef as c, useMemo as d } from "react";
import { cn as u } from "../../../utils/cn.mjs";
import { Skeleton as l } from "../../skeleton/Skeleton.mjs";
const b = c(
  ({
    width: r,
    height: e,
    className: t,
    children: n,
    ariaLabel: p,
    isLoading: s,
    responsive: g,
    onDataPointClick: v,
    renderTooltip: y,
    ...i
  }, x) => {
    const _ = d(() => {
      const a = {};
      return r && (a.width = typeof r == "number" ? `${r}px` : r), e && (a.minHeight = typeof e == "number" ? `${e}px` : e, a.height = "auto"), a;
    }, [r, e]), m = u(
      "relative",
      "bg-state-ghost",
      "rounded-lg",
      "shadow-[0_0_1px_rgba(39,39,42,0.1),0_12px_12px_-6px_rgba(0,0,0,0.04),0_6px_6px_-3px_rgba(0,0,0,0.04),0_3px_3px_-1.5px_rgba(0,0,0,0.04),0_1px_1px_-0.5px_rgba(0,0,0,0.04)]",
      t
    );
    return /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        className: m,
        style: _,
        role: "img",
        "aria-label": p,
        ...i,
        children: s ? /* @__PURE__ */ f("div", { className: "flex flex-col ds-gap-8 padding-16 w-full h-full", children: [
          /* @__PURE__ */ o(l, { variant: "text", className: "height-16 w-1/3" }),
          /* @__PURE__ */ o(l, { variant: "default", className: "flex-1 w-full", height: e ? typeof e == "number" ? e - 60 : void 0 : 200 })
        ] }) : n
      }
    );
  }
);
b.displayName = "Chart";
export {
  b as Chart
};
