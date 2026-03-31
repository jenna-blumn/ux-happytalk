"use client";
import { jsxs as s, jsx as l } from "react/jsx-runtime";
import * as a from "react";
import * as C from "@radix-ui/react-slider";
import { cn as n } from "../../utils/cn.mjs";
import { SliderTrack as F, SliderRangeFilled as P } from "./shared/SliderTrack.mjs";
import { SliderThumb as q } from "./shared/SliderThumb.mjs";
import { SliderTicks as A } from "./shared/SliderTicks.mjs";
const B = a.forwardRef(({
  className: v,
  color: w = "gray",
  showValue: m = !1,
  formatValue: f,
  label: c,
  onChange: h,
  value: r,
  defaultValue: o,
  min: t = 0,
  max: p = 100,
  step: u = 1,
  disabled: d,
  showTicks: N = !1,
  tickCount: k = 11,
  formatTick: T,
  orientation: e = "horizontal",
  height: x = 200,
  ...V
}, j) => {
  const [R, b] = a.useState(r ?? o ?? t), g = r ?? R, y = f ? f(g) : String(g), i = e === "vertical", z = a.useCallback((S) => {
    b(S[0]), h?.(S[0]);
  }, [h]);
  return /* @__PURE__ */ s("div", { className: n(i ? "inline-flex flex-col" : "w-full", v), children: [
    (c || m) && /* @__PURE__ */ s("div", { className: "flex items-center justify-between margin-b-8", children: [
      c && /* @__PURE__ */ l("label", { className: "font-body size-sm line-height-leading-5 font-medium text-default", children: c }),
      m && /* @__PURE__ */ l("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: y })
    ] }),
    /* @__PURE__ */ s("div", { className: n(i && "flex flex-row"), children: [
      /* @__PURE__ */ s(
        C.Root,
        {
          ref: j,
          className: n(
            "relative flex touch-none select-none",
            i ? "flex-col items-center justify-center w-[16px] padding-y-8" : "w-full items-center h-[16px] padding-x-8",
            d && "cursor-not-allowed"
          ),
          value: r !== void 0 ? [r] : void 0,
          defaultValue: o !== void 0 ? [o] : [t],
          min: t,
          max: p,
          step: u,
          disabled: d,
          orientation: e,
          onValueChange: z,
          ...i ? { style: { height: x } } : {},
          ...V,
          children: [
            /* @__PURE__ */ l(F, { orientation: e, children: /* @__PURE__ */ l(P, { color: w, orientation: e }) }),
            /* @__PURE__ */ l(
              q,
              {
                disabled: d,
                showTooltip: !0,
                tooltipValue: y,
                orientation: e
              }
            )
          ]
        }
      ),
      N && /* @__PURE__ */ l(
        A,
        {
          min: t,
          max: p,
          step: u,
          tickCount: k,
          formatTick: T,
          orientation: e,
          height: i ? x : void 0
        }
      )
    ] })
  ] });
});
B.displayName = "Slider";
export {
  B as Slider
};
