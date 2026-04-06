"use client";
import { jsxs as d, jsx as a } from "react/jsx-runtime";
import * as l from "react";
import * as P from "@radix-ui/react-slider";
import { cn as c } from "../../utils/cn.mjs";
import { SliderChart as $ } from "./shared/SliderChart.mjs";
import { SliderTrack as q, SliderRangeFilled as A } from "./shared/SliderTrack.mjs";
import { SliderThumb as v } from "./shared/SliderThumb.mjs";
import { SliderTicks as G } from "./shared/SliderTicks.mjs";
const H = l.forwardRef(({
  className: C,
  color: M = "gray",
  formatValue: z,
  label: N,
  suffix: p = "%",
  chartData: m,
  onChange: s,
  value: u,
  defaultValue: R,
  min: i = 0,
  max: o = 100,
  step: V = 1,
  disabled: n,
  showTicks: b = !1,
  tickCount: j = 11,
  formatTick: B,
  ...F
}, K) => {
  const [t, f] = l.useState(
    u ?? R ?? [i, o]
  ), [h, g] = l.useState(String(t[0])), [x, w] = l.useState(String(t[1]));
  l.useEffect(() => {
    u !== void 0 && (f(u), g(String(u[0])), w(String(u[1])));
  }, [u]);
  const T = l.useCallback((e) => {
    const r = [e[0], e[1]];
    f(r), g(String(e[0])), w(String(e[1])), s?.(r);
  }, [s]), E = l.useCallback((e) => {
    g(e.target.value);
  }, []), D = l.useCallback((e) => {
    w(e.target.value);
  }, []), S = l.useCallback(() => {
    let e = parseFloat(h);
    isNaN(e) && (e = i), e = Math.max(i, Math.min(t[1], e));
    const r = [e, t[1]];
    f(r), g(String(e)), s?.(r);
  }, [h, i, t, s]), y = l.useCallback(() => {
    let e = parseFloat(x);
    isNaN(e) && (e = o), e = Math.max(t[0], Math.min(o, e));
    const r = [t[0], e];
    f(r), w(String(e)), s?.(r);
  }, [x, o, t, s]), I = l.useCallback((e, r) => {
    e.key === "Enter" && (r === "min" ? S() : y());
  }, [S, y]), k = z ?? ((e) => `${e}%`);
  return /* @__PURE__ */ d("div", { className: c("w-full", C), children: [
    N && /* @__PURE__ */ a("label", { className: "block font-body size-sm line-height-leading-5 font-medium text-default margin-b-8", children: N }),
    /* @__PURE__ */ d("div", { className: "flex items-end ds-gap-12", children: [
      /* @__PURE__ */ d(
        "div",
        {
          className: c(
            "flex items-center justify-center self-end",
            b ? "-translate-y-[15px]" : "translate-y-[10px]",
            "min-w-[64px] height-32 padding-x-8",
            "bg-card border-default rounded-md",
            "focus-within:shadow-component-input-focus",
            n && "bg-input-disabled cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ a(
              "input",
              {
                type: "text",
                "aria-label": "Minimum value",
                value: h,
                onChange: E,
                onBlur: S,
                onKeyDown: (e) => I(e, "min"),
                disabled: n,
                size: Math.max(1, h.length),
                className: c(
                  "w-auto bg-transparent border-none outline-none text-center",
                  "font-body size-sm line-height-leading-5 text-default",
                  n && "text-muted cursor-not-allowed"
                )
              }
            ),
            p && /* @__PURE__ */ a("span", { className: "font-body size-sm text-muted margin-l-4", children: p })
          ]
        }
      ),
      /* @__PURE__ */ d("div", { className: "flex-1 flex flex-col", children: [
        m && m.length > 0 && /* @__PURE__ */ a(
          $,
          {
            data: m,
            min: i,
            max: o,
            value: t,
            color: M,
            disabled: n
          }
        ),
        /* @__PURE__ */ d(
          P.Root,
          {
            ref: K,
            className: c(
              "relative flex w-full touch-none select-none items-center",
              "h-[16px] padding-x-8",
              m && m.length > 0 && "-mt-[6px]",
              n && "cursor-not-allowed"
            ),
            value: t,
            min: i,
            max: o,
            step: V,
            disabled: n,
            onValueChange: T,
            ...F,
            children: [
              /* @__PURE__ */ a(q, { children: /* @__PURE__ */ a(A, { color: M }) }),
              /* @__PURE__ */ a(
                v,
                {
                  disabled: n,
                  showTooltip: !0,
                  tooltipValue: k(t[0]),
                  "aria-label": "Minimum"
                }
              ),
              /* @__PURE__ */ a(
                v,
                {
                  disabled: n,
                  showTooltip: !0,
                  tooltipValue: k(t[1]),
                  "aria-label": "Maximum"
                }
              )
            ]
          }
        ),
        b && /* @__PURE__ */ a(
          G,
          {
            min: i,
            max: o,
            step: V,
            tickCount: j,
            formatTick: B
          }
        )
      ] }),
      /* @__PURE__ */ d(
        "div",
        {
          className: c(
            "flex items-center justify-center self-end",
            b ? "-translate-y-[15px]" : "translate-y-[10px]",
            "min-w-[64px] height-32 padding-x-8",
            "bg-card border-default rounded-md",
            "focus-within:shadow-component-input-focus",
            n && "bg-input-disabled cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ a(
              "input",
              {
                type: "text",
                "aria-label": "Maximum value",
                value: x,
                onChange: D,
                onBlur: y,
                onKeyDown: (e) => I(e, "max"),
                disabled: n,
                size: Math.max(1, x.length),
                className: c(
                  "w-auto bg-transparent border-none outline-none text-center",
                  "font-body size-sm line-height-leading-5 text-default",
                  n && "text-muted cursor-not-allowed"
                )
              }
            ),
            p && /* @__PURE__ */ a("span", { className: "font-body size-sm text-muted margin-l-4", children: p })
          ]
        }
      )
    ] })
  ] });
});
H.displayName = "DataRangeSliderInput";
export {
  H as DataRangeSliderInput
};
