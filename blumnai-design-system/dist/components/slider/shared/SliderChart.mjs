"use client";
import { jsx as a, jsxs as y } from "react/jsx-runtime";
import * as f from "react";
import { cn as C } from "../../../utils/cn.mjs";
const R = {
  gray: "var(--bg-basic-gray-alpha-15)",
  brand: "var(--bg-basic-blue-alpha-15)",
  red: "var(--bg-basic-red-alpha-15)",
  orange: "var(--bg-basic-orange-alpha-15)",
  amber: "var(--bg-basic-amber-alpha-15)",
  yellow: "var(--bg-basic-yellow-alpha-15)",
  lime: "var(--bg-basic-lime-alpha-15)",
  green: "var(--bg-basic-green-alpha-15)",
  emerald: "var(--bg-basic-emerald-alpha-15)",
  teal: "var(--bg-basic-teal-alpha-15)",
  cyan: "var(--bg-basic-cyan-alpha-15)",
  sky: "var(--bg-basic-sky-alpha-15)",
  blue: "var(--bg-basic-blue-alpha-15)",
  indigo: "var(--bg-basic-indigo-alpha-15)",
  violet: "var(--bg-basic-violet-alpha-15)",
  purple: "var(--bg-basic-purple-alpha-15)",
  fuchsia: "var(--bg-basic-fuchsia-alpha-15)",
  pink: "var(--bg-basic-pink-alpha-15)",
  rose: "var(--bg-basic-rose-alpha-15)"
}, k = f.forwardRef(
  ({ data: d, min: s, max: $, value: v, color: m = "gray", disabled: x, className: P }, w) => {
    const e = f.useId();
    if (d.length === 0) return null;
    const r = 32, u = $ - s, n = (v[0] - s) / u * 100, p = (v[1] - s) / u * 100, b = ((g) => {
      if (g.length === 0) return "";
      const i = g.map((l, c) => {
        const t = c / (g.length - 1) * 100, h = r - Math.max(0, Math.min(1, l)) * r;
        return { x: t, y: h };
      });
      let o = `M ${i[0].x} ${i[0].y}`;
      for (let l = 1; l < i.length; l++) {
        const c = i[l - 1], t = i[l], h = (c.x + t.x) / 2;
        o += ` C ${h} ${c.y}, ${h} ${t.y}, ${t.x} ${t.y}`;
      }
      return o += ` L 100 ${r} L 0 ${r} Z`, o;
    })(d);
    return /* @__PURE__ */ a(
      "div",
      {
        ref: w,
        className: C("relative w-full h-[32px] padding-x-8", x && "opacity-50", P),
        children: /* @__PURE__ */ y(
          "svg",
          {
            viewBox: `0 0 100 ${r}`,
            preserveAspectRatio: "none",
            className: "w-full h-full",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ y("defs", { children: [
                /* @__PURE__ */ a("clipPath", { id: `${e}-selected`, children: /* @__PURE__ */ a(
                  "rect",
                  {
                    x: n,
                    y: "0",
                    width: p - n,
                    height: r
                  }
                ) }),
                /* @__PURE__ */ a("clipPath", { id: `${e}-left`, children: /* @__PURE__ */ a("rect", { x: "0", y: "0", width: n, height: r }) }),
                /* @__PURE__ */ a("clipPath", { id: `${e}-right`, children: /* @__PURE__ */ a("rect", { x: p, y: "0", width: 100 - p, height: r }) })
              ] }),
              /* @__PURE__ */ a(
                "path",
                {
                  d: b,
                  fill: "var(--bg-basic-gray-alpha-10)",
                  clipPath: `url(#${e}-left)`
                }
              ),
              /* @__PURE__ */ a(
                "path",
                {
                  d: b,
                  fill: R[m],
                  clipPath: `url(#${e}-selected)`
                }
              ),
              /* @__PURE__ */ a(
                "path",
                {
                  d: b,
                  fill: "var(--bg-basic-gray-alpha-10)",
                  clipPath: `url(#${e}-right)`
                }
              )
            ]
          }
        )
      }
    );
  }
);
k.displayName = "SliderChart";
export {
  k as SliderChart
};
