"use client";
import { jsx as b } from "react/jsx-runtime";
import * as t from "react";
import * as n from "@radix-ui/react-slider";
import { cn as s } from "../../../utils/cn.mjs";
const g = t.forwardRef(({ className: a, children: e, orientation: c = "horizontal", ...i }, r) => {
  const l = c === "vertical";
  return /* @__PURE__ */ b(
    n.Track,
    {
      ref: r,
      className: s(
        "relative grow rounded-full bg-basic-gray-alpha-10",
        l ? "h-full w-[4px]" : "w-full h-[4px]",
        a
      ),
      ...i,
      children: e
    }
  );
});
g.displayName = "SliderTrack";
const o = {
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
}, d = t.forwardRef(({ className: a, color: e = "gray", orientation: c = "horizontal", ...i }, r) => {
  const l = c === "vertical";
  return /* @__PURE__ */ b(
    n.Range,
    {
      ref: r,
      className: s(
        "absolute",
        l ? "w-full" : "h-full",
        o[e],
        a
      ),
      ...i
    }
  );
});
d.displayName = "SliderRangeFilled";
export {
  o as RANGE_COLOR_MAP,
  d as SliderRangeFilled,
  g as SliderTrack
};
