"use client";
import { jsxs as u, jsx as t, Fragment as M } from "react/jsx-runtime";
import * as S from "react";
import { cn as f } from "../../utils/cn.mjs";
const v = {
  gray: "var(--bg-basic-gray-accent)",
  brand: "var(--bg-state-brand)",
  red: "var(--bg-basic-red-accent)",
  orange: "var(--bg-basic-orange-accent)",
  amber: "var(--bg-basic-amber-accent)",
  yellow: "var(--bg-basic-yellow-accent)",
  lime: "var(--bg-basic-lime-accent)",
  green: "var(--bg-basic-green-accent)",
  emerald: "var(--bg-basic-emerald-accent)",
  teal: "var(--bg-basic-teal-accent)",
  cyan: "var(--bg-basic-cyan-accent)",
  sky: "var(--bg-basic-sky-accent)",
  blue: "var(--bg-basic-blue-accent)",
  indigo: "var(--bg-basic-indigo-accent)",
  violet: "var(--bg-basic-violet-accent)",
  purple: "var(--bg-basic-purple-accent)",
  fuchsia: "var(--bg-basic-fuchsia-accent)",
  pink: "var(--bg-basic-pink-accent)",
  rose: "var(--bg-basic-rose-accent)"
}, B = {
  default: null,
  success: "var(--bg-basic-green-accent)",
  failed: "var(--bg-basic-red-accent)"
}, H = {
  gray: "text-default",
  brand: "text-informative",
  red: "text-destructive",
  orange: "text-warning",
  amber: "text-warning",
  yellow: "text-warning",
  lime: "text-success",
  green: "text-success",
  emerald: "text-success",
  teal: "text-success",
  cyan: "text-informative",
  sky: "text-informative",
  blue: "text-informative",
  indigo: "text-informative",
  violet: "text-informative",
  purple: "text-informative",
  fuchsia: "text-informative",
  pink: "text-destructive",
  rose: "text-destructive"
}, K = {
  default: null,
  success: "text-success",
  failed: "text-destructive"
}, V = S.forwardRef(
  ({
    className: T,
    value: m,
    max: C = 100,
    variant: g = "default",
    color: x = "gray",
    shape: N = "full",
    showLabel: A = !0,
    formatValue: h,
    size: e = 96,
    strokeWidth: a = 8,
    caption: P,
    error: c,
    success: n,
    ...$
  }, R) => {
    const _ = c === !0 || typeof c == "string" && c.length > 0, O = n === !0 || typeof n == "string" && n.length > 0, E = typeof c == "string" && c.length > 0 ? c : void 0, I = typeof n == "string" && n.length > 0 ? n : void 0, p = E || I || P, L = _ ? "text-destructive" : O ? "text-success" : "text-muted", i = m === void 0, b = i ? 0 : Math.min(100, Math.max(0, m / C * 100)), D = h ? h(Math.round(b)) : `${Math.round(b)}%`, r = N === "half", s = (e - a) / 2, d = r ? Math.PI * s : 2 * Math.PI * s, y = d - b / 100 * d, k = g === "default" ? v[x] : B[g], j = g === "default" ? H[x] : K[g], l = e / 2, o = r ? l + a / 2 : e, w = r ? `M ${a / 2},${o} A ${s},${s} 0 0 1 ${e - a / 2},${o}` : "";
    return /* @__PURE__ */ u(
      "div",
      {
        ref: R,
        className: f("inline-flex flex-col items-center", T),
        ...$,
        children: [
          /* @__PURE__ */ u(
            "div",
            {
              role: "progressbar",
              "aria-valuenow": i ? void 0 : b,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-busy": i,
              className: "relative inline-flex items-center justify-center",
              style: {
                width: e,
                height: o
              },
              children: [
                /* @__PURE__ */ t(
                  "svg",
                  {
                    width: e,
                    height: o,
                    viewBox: `0 0 ${e} ${o}`,
                    className: f(i && "animate-progress-circular-spin"),
                    style: r ? void 0 : { transform: "rotate(-90deg)" },
                    children: r ? /* @__PURE__ */ u(M, { children: [
                      /* @__PURE__ */ t(
                        "path",
                        {
                          d: w,
                          fill: "none",
                          stroke: "var(--bg-basic-gray-alpha-10)",
                          strokeWidth: a,
                          strokeLinecap: "round"
                        }
                      ),
                      /* @__PURE__ */ t(
                        "path",
                        {
                          d: w,
                          fill: "none",
                          stroke: k ?? v.gray,
                          strokeWidth: a,
                          strokeLinecap: "round",
                          strokeDasharray: d,
                          strokeDashoffset: y,
                          className: "transition-all duration-300"
                        }
                      )
                    ] }) : /* @__PURE__ */ u(M, { children: [
                      /* @__PURE__ */ t(
                        "circle",
                        {
                          cx: l,
                          cy: l,
                          r: s,
                          fill: "none",
                          stroke: "var(--bg-basic-gray-alpha-10)",
                          strokeWidth: a
                        }
                      ),
                      /* @__PURE__ */ t(
                        "circle",
                        {
                          cx: l,
                          cy: l,
                          r: s,
                          fill: "none",
                          stroke: k ?? v.gray,
                          strokeWidth: a,
                          strokeLinecap: "round",
                          strokeDasharray: d,
                          strokeDashoffset: y,
                          className: "transition-all duration-300"
                        }
                      )
                    ] })
                  }
                ),
                A && !i && /* @__PURE__ */ t(
                  "span",
                  {
                    className: f(
                      "absolute font-body font-medium",
                      e < 64 ? "size-xs line-height-leading-4" : e < 96 ? "size-sm line-height-leading-5" : "size-md line-height-leading-6",
                      j,
                      r && "bottom-0"
                    ),
                    children: D
                  }
                )
              ]
            }
          ),
          p && /* @__PURE__ */ t("span", { className: f("block font-body size-xs line-height-leading-4 margin-t-8", L), children: p })
        ]
      }
    );
  }
);
V.displayName = "ProgressCircular";
export {
  V as ProgressCircular
};
