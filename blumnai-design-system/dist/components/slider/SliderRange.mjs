"use client";
import { jsxs as t, jsx as l } from "react/jsx-runtime";
import * as m from "react";
import * as F from "@radix-ui/react-slider";
import { cn as h } from "../../utils/cn.mjs";
import { SliderTrack as P, SliderRangeFilled as q } from "./shared/SliderTrack.mjs";
import { SliderThumb as w } from "./shared/SliderThumb.mjs";
import { SliderTicks as A } from "./shared/SliderTicks.mjs";
const B = m.forwardRef(({
  className: y,
  color: N = "gray",
  showValue: p = !1,
  formatValue: V,
  label: d,
  onChange: u,
  value: f,
  defaultValue: g,
  min: i = 0,
  max: o = 100,
  step: x = 1,
  disabled: s,
  showTicks: R = !1,
  tickCount: T = 11,
  formatTick: k,
  orientation: e = "horizontal",
  height: S = 200,
  ...j
}, z) => {
  const [b, v] = m.useState(
    f ?? g ?? [i, o]
  ), c = f ?? b, a = V ?? String, r = e === "vertical", C = m.useCallback((n) => {
    v([n[0], n[1]]), u?.([n[0], n[1]]);
  }, [u]);
  return /* @__PURE__ */ t("div", { className: h(r ? "inline-flex flex-col" : "w-full", y), children: [
    (d || p) && /* @__PURE__ */ t("div", { className: "flex items-center justify-between margin-b-8", children: [
      d && /* @__PURE__ */ l("label", { className: "font-body size-sm line-height-leading-5 font-medium text-default", children: d }),
      p && /* @__PURE__ */ t("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: [
        a(c[0]),
        " - ",
        a(c[1])
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: h(r && "flex flex-row"), children: [
      /* @__PURE__ */ t(
        F.Root,
        {
          ref: z,
          className: h(
            "relative flex touch-none select-none",
            r ? "flex-col items-center justify-center w-[16px] padding-y-8" : "w-full items-center h-[16px] padding-x-8",
            s && "cursor-not-allowed"
          ),
          value: f,
          defaultValue: g ?? [i, o],
          min: i,
          max: o,
          step: x,
          disabled: s,
          orientation: e,
          onValueChange: C,
          ...r ? { style: { height: S } } : {},
          ...j,
          children: [
            /* @__PURE__ */ l(P, { orientation: e, children: /* @__PURE__ */ l(q, { color: N, orientation: e }) }),
            /* @__PURE__ */ l(
              w,
              {
                disabled: s,
                showTooltip: !0,
                tooltipValue: a(c[0]),
                orientation: e
              }
            ),
            /* @__PURE__ */ l(
              w,
              {
                disabled: s,
                showTooltip: !0,
                tooltipValue: a(c[1]),
                orientation: e
              }
            )
          ]
        }
      ),
      R && /* @__PURE__ */ l(
        A,
        {
          min: i,
          max: o,
          step: x,
          tickCount: T,
          formatTick: k,
          orientation: e,
          height: r ? S : void 0
        }
      )
    ] })
  ] });
});
B.displayName = "SliderRange";
export {
  B as SliderRange
};
