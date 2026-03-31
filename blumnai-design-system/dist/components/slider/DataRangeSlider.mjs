"use client";
import { jsxs as a, jsx as e } from "react/jsx-runtime";
import * as d from "react";
import * as z from "@radix-ui/react-slider";
import { cn as g } from "../../utils/cn.mjs";
import { SliderChart as F } from "./shared/SliderChart.mjs";
import { SliderTrack as P, SliderRangeFilled as $ } from "./shared/SliderTrack.mjs";
import { SliderThumb as S } from "./shared/SliderThumb.mjs";
import { SliderTicks as q } from "./shared/SliderTicks.mjs";
const v = d.forwardRef(({
  className: w,
  color: c = "gray",
  formatValue: V,
  label: f,
  separator: x = "~",
  chartData: l,
  onChange: p,
  value: m,
  defaultValue: u,
  min: r = 0,
  max: o = 100,
  step: h = 1,
  disabled: i,
  showTicks: N = !1,
  tickCount: R = 11,
  formatTick: T,
  ...k
}, y) => {
  const [j, C] = d.useState(
    m ?? u ?? [r, o]
  ), n = m ?? j, s = V ?? ((t) => `${t}%`), b = d.useCallback((t) => {
    C([t[0], t[1]]), p?.([t[0], t[1]]);
  }, [p]);
  return /* @__PURE__ */ a("div", { className: g("w-full", w), children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between margin-b-8", children: [
      f && /* @__PURE__ */ e("label", { className: "font-body size-sm line-height-leading-5 font-medium text-default", children: f }),
      /* @__PURE__ */ a("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: [
        s(n[0]),
        " ",
        x,
        " ",
        s(n[1])
      ] })
    ] }),
    l && l.length > 0 && /* @__PURE__ */ e(
      F,
      {
        data: l,
        min: r,
        max: o,
        value: n,
        color: c,
        disabled: i
      }
    ),
    /* @__PURE__ */ a(
      z.Root,
      {
        ref: y,
        className: g(
          "relative flex w-full touch-none select-none items-center",
          "h-[16px] padding-x-8",
          l && l.length > 0 && "-mt-[6px]",
          i && "cursor-not-allowed"
        ),
        value: m,
        defaultValue: u ?? [r, o],
        min: r,
        max: o,
        step: h,
        disabled: i,
        onValueChange: b,
        ...k,
        children: [
          /* @__PURE__ */ e(P, { children: /* @__PURE__ */ e($, { color: c }) }),
          /* @__PURE__ */ e(
            S,
            {
              disabled: i,
              showTooltip: !0,
              tooltipValue: s(n[0])
            }
          ),
          /* @__PURE__ */ e(
            S,
            {
              disabled: i,
              showTooltip: !0,
              tooltipValue: s(n[1])
            }
          )
        ]
      }
    ),
    N && /* @__PURE__ */ e(
      q,
      {
        min: r,
        max: o,
        step: h,
        tickCount: R,
        formatTick: T
      }
    )
  ] });
});
v.displayName = "DataRangeSlider";
export {
  v as DataRangeSlider
};
