"use client";
import { jsx as r } from "react/jsx-runtime";
import { forwardRef as l, Suspense as d } from "react";
import { hasBrand as s, getBrandSync as f, getBrandLazy as m } from "./brand-registry.mjs";
const B = l(({
  brandType: n,
  size: o = 24,
  className: c,
  ...e
}, i) => {
  if (!s(n))
    return console.warn(`BrandIcon: Unknown brand "${n}"`), null;
  const t = /* @__PURE__ */ r("div", { style: { width: o, height: o, display: "inline-block" } }), a = f(n) || m(n);
  return a ? /* @__PURE__ */ r(d, { fallback: t, children: /* @__PURE__ */ r(
    a,
    {
      ref: i,
      size: o,
      className: c,
      ...e
    }
  ) }) : t;
});
B.displayName = "BrandIcon";
export {
  B as BrandIcon
};
