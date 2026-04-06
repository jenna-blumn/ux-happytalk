"use client";
import { jsx as r } from "react/jsx-runtime";
import { forwardRef as f, Suspense as p } from "react";
import { hasIso as d, getIsoSync as h, getIsoLazy as y } from "./isometric-registry.mjs";
const u = f(({
  iconType: e,
  view: c = "top",
  size: o = 24,
  className: i,
  fillColor: a = "default",
  strokeColor: m = "accent",
  ...l
}, I) => {
  const t = `${e}-${c}`, n = /* @__PURE__ */ r(
    "div",
    {
      style: {
        width: o,
        height: o,
        display: "inline-block"
      }
    }
  );
  if (!d(t))
    return console.warn(`IsometricIcon: Unknown icon "${e}" with view "${c}"`), n;
  const s = h(t) || y(t);
  return s ? /* @__PURE__ */ r(p, { fallback: n, children: /* @__PURE__ */ r(
    s,
    {
      ref: I,
      size: o,
      className: i,
      fillColor: a,
      strokeColor: m,
      ...l
    }
  ) }) : n;
});
u.displayName = "IsometricIcon";
export {
  u as IsometricIcon
};
