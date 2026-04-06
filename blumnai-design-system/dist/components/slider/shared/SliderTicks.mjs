"use client";
import { jsx as n, jsxs as v } from "react/jsx-runtime";
import * as d from "react";
import { cn as i } from "../../../utils/cn.mjs";
const y = d.forwardRef(
  ({ min: r, max: s, step: l, tickCount: c = 11, formatTick: f, orientation: x = "horizontal", height: p, className: h }, u) => {
    const g = d.useMemo(() => {
      const e = [];
      if (l && l >= 10 && (s - r) / l <= 20)
        for (let t = r; t <= s; t += l)
          e.push(t);
      else {
        const t = (s - r) / (c - 1);
        for (let a = 0; a < c; a++)
          e.push(Math.round(r + t * a));
      }
      return e;
    }, [r, s, l, c]), m = f ?? ((e) => String(e)), w = s - r, o = x === "vertical";
    return /* @__PURE__ */ n(
      "div",
      {
        ref: u,
        role: "presentation",
        "aria-hidden": "true",
        className: i(
          "relative",
          o ? "w-[24px] [margin-left:4px]" : "w-full h-[24px] margin-t-4",
          h
        ),
        ...o && p ? { style: { height: p } } : {},
        children: g.map((e, t) => {
          const a = (e - r) / w * 100;
          return /* @__PURE__ */ v(
            "div",
            {
              className: i(
                "absolute flex items-center",
                o ? "flex-row ds-gap-4 translate-y-1/2" : "flex-col ds-gap-4 -translate-x-1/2"
              ),
              style: o ? { bottom: `calc(8px + (100% - 16px) * ${a / 100})` } : { left: `calc(8px + (100% - 16px) * ${a / 100})` },
              children: [
                /* @__PURE__ */ n("div", { className: i(
                  "bg-basic-gray-alpha-10",
                  o ? "h-[1px] w-[4px]" : "w-[1px] h-[4px]"
                ) }),
                /* @__PURE__ */ n("span", { className: "font-body size-xs line-height-leading-4 text-muted whitespace-nowrap", children: m(e) })
              ]
            },
            `${e}-${t}`
          );
        })
      }
    );
  }
);
y.displayName = "SliderTicks";
export {
  y as SliderTicks
};
