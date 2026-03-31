"use client";
import { jsxs as f, jsx as e } from "react/jsx-runtime";
import * as T from "react";
import { cn as t } from "../../utils/cn.mjs";
const m = {
  gray: "bg-basic-gray-accent",
  brand: "bg-state-brand",
  red: "bg-basic-red-accent",
  orange: "bg-basic-orange-accent",
  amber: "bg-basic-amber-accent",
  yellow: "bg-basic-yellow-accent",
  lime: "bg-basic-lime-accent",
  green: "bg-basic-green-accent",
  emerald: "bg-basic-emerald-accent",
  teal: "bg-basic-teal-accent",
  cyan: "bg-basic-cyan-accent",
  sky: "bg-basic-sky-accent",
  blue: "bg-basic-blue-accent",
  indigo: "bg-basic-indigo-accent",
  violet: "bg-basic-violet-accent",
  purple: "bg-basic-purple-accent",
  fuchsia: "bg-basic-fuchsia-accent",
  pink: "bg-basic-pink-accent",
  rose: "bg-basic-rose-accent"
}, j = T.forwardRef(
  ({
    className: d,
    value: c,
    max: l = 100,
    variant: b = "linear",
    color: g = "gray",
    label: r,
    showValue: n = !1,
    formatValue: h,
    caption: p,
    error: s,
    success: i,
    ...y
  }, v) => {
    const x = s === !0 || typeof s == "string" && s.length > 0, N = i === !0 || typeof i == "string" && i.length > 0, w = typeof s == "string" && s.length > 0 ? s : void 0, k = typeof i == "string" && i.length > 0 ? i : void 0, u = w || k || p, C = x ? "text-destructive" : N ? "text-success" : "text-muted", a = c === void 0, o = a ? 0 : Math.min(100, Math.max(0, c / l * 100)), M = h ? h(Math.round(o)) : `${Math.round(o)}%`;
    return /* @__PURE__ */ f("div", { ref: v, className: t("w-full", d), ...y, children: [
      (r || n) && /* @__PURE__ */ f("div", { className: "flex items-center justify-between margin-b-8", children: [
        r && /* @__PURE__ */ e("span", { className: "font-body size-sm line-height-leading-5 font-medium text-default", children: r }),
        n && !a && /* @__PURE__ */ e("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: M })
      ] }),
      /* @__PURE__ */ e(
        "div",
        {
          role: "progressbar",
          "aria-valuenow": a ? void 0 : o,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-busy": a,
          "aria-label": r,
          className: t(
            "relative w-full height-4 rounded-full overflow-hidden",
            b === "dashed" ? "bg-transparent" : "bg-basic-gray-alpha-10"
          ),
          children: b === "dashed" ? /* @__PURE__ */ e(
            z,
            {
              percentage: o,
              color: g,
              isIndeterminate: a
            }
          ) : /* @__PURE__ */ e(
            "div",
            {
              className: t(
                "h-full rounded-full transition-all duration-300",
                m[g],
                a && "animate-progress-indeterminate"
              ),
              style: {
                width: a ? "40%" : `${o}%`
              }
            }
          )
        }
      ),
      u && /* @__PURE__ */ e("span", { className: t("block font-body size-xs line-height-leading-4 margin-t-4", C), children: u })
    ] });
  }
);
j.displayName = "Progress";
function z({ percentage: d, color: c, isIndeterminate: l }) {
  const g = l ? 0 : Math.round(d / 100 * 10);
  return /* @__PURE__ */ e("div", { className: "flex ds-gap-2 h-full", children: Array.from({ length: 10 }).map((r, n) => /* @__PURE__ */ e(
    "div",
    {
      className: t(
        "flex-1 h-full rounded-full",
        l ? t(m[c], "animate-progress-dashed-sweep") : t(
          "transition-colors duration-200",
          n < g ? m[c] : "bg-basic-gray-alpha-10"
        )
      ),
      style: l ? { animationDelay: `${n * 0.15}s` } : void 0
    },
    n
  )) });
}
export {
  j as Progress
};
