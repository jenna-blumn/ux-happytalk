"use client";
import { jsx as i } from "react/jsx-runtime";
import { forwardRef as v, Suspense as h, createElement as y } from "react";
import { hasIcon as p, getIconSync as w, getIconLazy as g } from "./ui-icon-registry.mjs";
function k(e) {
  return e.replace(/-/g, "").toLowerCase();
}
const I = /* @__PURE__ */ new Set([
  "default",
  "default-subtle",
  "default-muted",
  "default-disabled",
  "inverted-default",
  "inverted-subtle",
  "inverted-muted",
  "inverted-disabled",
  "white-default",
  "white-subtle",
  "white-muted",
  "white-disabled",
  "black-default",
  "black-subtle",
  "black-muted",
  "black-disabled",
  "destructive",
  "informative",
  "success",
  "warning"
]), C = (e) => {
  if (e)
    return I.has(e) ? `var(--icon-${e})` : e;
}, S = v(({
  iconType: e,
  isFill: a = !1,
  size: r = 24,
  color: s,
  className: d,
  focusable: t,
  ...c
}, u) => {
  const [x, f] = e, n = k(f) + (a ? "fill" : ""), o = /* @__PURE__ */ i(
    "div",
    {
      style: {
        width: r,
        height: r,
        display: "inline-block"
      }
    }
  );
  if (!p(n))
    return o;
  const b = C(s), m = t === !0 || t === "true" ? !0 : t === !1 || t === "false" ? !1 : void 0, l = w(n) || g(n);
  return l ? /* @__PURE__ */ i(h, { fallback: o, children: y(l, {
    ref: u,
    size: r,
    color: b,
    className: d,
    focusable: m,
    ...c
  }) }) : o;
});
S.displayName = "Icon";
export {
  S as Icon
};
