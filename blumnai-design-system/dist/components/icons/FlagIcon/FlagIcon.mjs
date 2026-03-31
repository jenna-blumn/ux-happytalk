"use client";
import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, Suspense as g } from "react";
import { hasFlag as s, getFlagSync as f, getFlagLazy as m } from "./flag-registry.mjs";
const p = c(({
  country: n,
  size: o = 24,
  className: e,
  ...t
}, i) => {
  const a = /* @__PURE__ */ l(
    "div",
    {
      style: {
        width: o,
        height: o,
        display: "inline-block"
      }
    }
  );
  if (!s(n))
    return console.warn(`FlagIcon: Unknown country "${n}"`), a;
  const r = f(n) || m(n);
  return r ? /* @__PURE__ */ l(g, { fallback: a, children: /* @__PURE__ */ l(
    r,
    {
      ref: i,
      size: o,
      className: e,
      ...t
    }
  ) }) : a;
});
p.displayName = "FlagIcon";
export {
  p as FlagIcon
};
