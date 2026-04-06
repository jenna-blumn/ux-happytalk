"use client";
import { jsxs as o, jsx as l } from "react/jsx-runtime";
import * as t from "react";
import * as B from "@radix-ui/react-slider";
import { cn as g } from "../../utils/cn.mjs";
import { SliderTrack as D, SliderRangeFilled as E } from "./shared/SliderTrack.mjs";
import { SliderThumb as F } from "./shared/SliderThumb.mjs";
import { SliderTicks as K } from "./shared/SliderTicks.mjs";
const M = t.forwardRef(({
  className: w,
  color: N = "gray",
  formatValue: x,
  label: S,
  suffix: u,
  onChange: i,
  value: a,
  defaultValue: y,
  min: n = 0,
  max: s = 100,
  step: b = 1,
  disabled: r,
  showTicks: k = !1,
  tickCount: v = 11,
  formatTick: V,
  ...I
}, C) => {
  const [d, p] = t.useState(a ?? y ?? n), [m, c] = t.useState(String(d));
  t.useEffect(() => {
    a !== void 0 && (p(a), c(String(a)));
  }, [a]);
  const R = t.useCallback((e) => {
    const h = e[0];
    p(h), c(String(h)), i?.(h);
  }, [i]), T = t.useCallback((e) => {
    c(e.target.value);
  }, []), f = t.useCallback(() => {
    let e = parseFloat(m);
    isNaN(e) && (e = n), e = Math.max(n, Math.min(s, e)), p(e), c(String(e)), i?.(e);
  }, [m, n, s, i]), z = t.useCallback((e) => {
    e.key === "Enter" && f();
  }, [f]), j = x ? x(d) : String(d);
  return /* @__PURE__ */ o("div", { className: g("w-full", w), children: [
    S && /* @__PURE__ */ l("label", { className: "block font-body size-sm line-height-leading-5 font-medium text-default margin-b-8", children: S }),
    /* @__PURE__ */ o("div", { className: "flex items-center ds-gap-16", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ o(
          B.Root,
          {
            ref: C,
            className: g(
              "relative flex w-full touch-none select-none items-center",
              "h-[16px] padding-x-8",
              r && "cursor-not-allowed"
            ),
            value: [d],
            min: n,
            max: s,
            step: b,
            disabled: r,
            onValueChange: R,
            ...I,
            children: [
              /* @__PURE__ */ l(D, { children: /* @__PURE__ */ l(E, { color: N }) }),
              /* @__PURE__ */ l(
                F,
                {
                  disabled: r,
                  showTooltip: !0,
                  tooltipValue: j
                }
              )
            ]
          }
        ),
        k && /* @__PURE__ */ l(
          K,
          {
            min: n,
            max: s,
            step: b,
            tickCount: v,
            formatTick: V
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            "aria-label": "Value",
            value: m,
            onChange: T,
            onBlur: f,
            onKeyDown: z,
            disabled: r,
            className: g(
              "w-[72px] height-32 padding-x-8",
              "font-body size-sm line-height-leading-5 text-center text-default",
              "bg-card border-default rounded-md",
              "focus:outline-none focus:shadow-component-input-focus",
              r && "bg-input-disabled text-muted cursor-not-allowed",
              u && "padding-r-24"
            )
          }
        ),
        u && /* @__PURE__ */ l("span", { className: "absolute right-8 font-body size-sm text-muted pointer-events-none", children: u })
      ] })
    ] })
  ] });
});
M.displayName = "SliderInput";
export {
  M as SliderInput
};
