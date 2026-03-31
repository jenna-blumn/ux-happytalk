"use client";
import { jsxs as c, jsx as l } from "react/jsx-runtime";
import * as n from "react";
import * as E from "@radix-ui/react-slider";
import { cn as g } from "../../utils/cn.mjs";
import { SliderTrack as P, SliderRangeFilled as q } from "./shared/SliderTrack.mjs";
import { SliderThumb as V } from "./shared/SliderThumb.mjs";
import { SliderTicks as A } from "./shared/SliderTicks.mjs";
const G = n.forwardRef(({
  className: v,
  color: I = "gray",
  formatValue: k,
  label: w,
  suffix: i,
  onChange: r,
  value: s,
  defaultValue: C,
  min: d = 0,
  max: u = 100,
  step: N = 1,
  disabled: o,
  showTicks: R = !1,
  tickCount: z = 11,
  formatTick: T,
  ...B
}, F) => {
  const [t, m] = n.useState(
    s ?? C ?? [d, u]
  ), [f, p] = n.useState(String(t[0])), [x, h] = n.useState(String(t[1]));
  n.useEffect(() => {
    s !== void 0 && (m(s), p(String(s[0])), h(String(s[1])));
  }, [s]);
  const D = n.useCallback((e) => {
    const a = [e[0], e[1]];
    m(a), p(String(e[0])), h(String(e[1])), r?.(a);
  }, [r]), K = n.useCallback((e) => {
    p(e.target.value);
  }, []), j = n.useCallback((e) => {
    h(e.target.value);
  }, []), S = n.useCallback(() => {
    let e = parseFloat(f);
    isNaN(e) && (e = d), e = Math.max(d, Math.min(t[1], e));
    const a = [e, t[1]];
    m(a), p(String(e)), r?.(a);
  }, [f, d, t, r]), b = n.useCallback(() => {
    let e = parseFloat(x);
    isNaN(e) && (e = u), e = Math.max(t[0], Math.min(u, e));
    const a = [t[0], e];
    m(a), h(String(e)), r?.(a);
  }, [x, u, t, r]), y = n.useCallback((e, a) => {
    e.key === "Enter" && (a === "min" ? S() : b());
  }, [S, b]), M = k ?? String;
  return /* @__PURE__ */ c("div", { className: g("w-full", v), children: [
    w && /* @__PURE__ */ l("label", { className: "block font-body size-sm line-height-leading-5 font-medium text-default margin-b-8", children: w }),
    /* @__PURE__ */ c("div", { className: "flex items-end ds-gap-12", children: [
      /* @__PURE__ */ c("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            "aria-label": "Minimum value",
            value: f,
            onChange: K,
            onBlur: S,
            onKeyDown: (e) => y(e, "min"),
            disabled: o,
            className: g(
              "w-[72px] height-32 padding-x-8",
              "font-body size-sm line-height-leading-5 text-center text-default",
              "bg-card border-default rounded-md",
              "focus:outline-none focus:shadow-component-input-focus",
              o && "bg-input-disabled text-muted cursor-not-allowed",
              i && "padding-r-24"
            )
          }
        ),
        i && /* @__PURE__ */ l("span", { className: "absolute right-8 font-body size-sm text-muted pointer-events-none", children: i })
      ] }),
      /* @__PURE__ */ c("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ c(
          E.Root,
          {
            ref: F,
            className: g(
              "relative flex w-full touch-none select-none items-center",
              "h-[16px] padding-x-8",
              o && "cursor-not-allowed"
            ),
            value: t,
            min: d,
            max: u,
            step: N,
            disabled: o,
            onValueChange: D,
            ...B,
            children: [
              /* @__PURE__ */ l(P, { children: /* @__PURE__ */ l(q, { color: I }) }),
              /* @__PURE__ */ l(
                V,
                {
                  disabled: o,
                  showTooltip: !0,
                  tooltipValue: M(t[0])
                }
              ),
              /* @__PURE__ */ l(
                V,
                {
                  disabled: o,
                  showTooltip: !0,
                  tooltipValue: M(t[1])
                }
              )
            ]
          }
        ),
        R && /* @__PURE__ */ l(
          A,
          {
            min: d,
            max: u,
            step: N,
            tickCount: z,
            formatTick: T
          }
        )
      ] }),
      /* @__PURE__ */ c("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            "aria-label": "Maximum value",
            value: x,
            onChange: j,
            onBlur: b,
            onKeyDown: (e) => y(e, "max"),
            disabled: o,
            className: g(
              "w-[72px] height-32 padding-x-8",
              "font-body size-sm line-height-leading-5 text-center text-default",
              "bg-card border-default rounded-md",
              "focus:outline-none focus:shadow-component-input-focus",
              o && "bg-input-disabled text-muted cursor-not-allowed",
              i && "padding-r-24"
            )
          }
        ),
        i && /* @__PURE__ */ l("span", { className: "absolute right-8 font-body size-sm text-muted pointer-events-none", children: i })
      ] })
    ] })
  ] });
});
G.displayName = "SliderRangeInput";
export {
  G as SliderRangeInput
};
