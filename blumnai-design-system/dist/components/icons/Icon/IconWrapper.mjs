"use client";
import { forwardRef as u, isValidElement as c, cloneElement as m } from "react";
const p = u(
  ({
    children: o,
    size: e = 24,
    color: a,
    cursor: l,
    title: r,
    focusable: i = !1,
    className: n,
    style: d,
    ...t
  }, s) => {
    if (!c(o))
      return null;
    const f = {
      ref: s,
      width: e,
      height: e,
      "aria-hidden": r ? void 0 : !0,
      "aria-label": r,
      role: r ? "img" : void 0,
      focusable: i ? "true" : "false",
      tabIndex: i ? 0 : void 0,
      className: n,
      style: {
        ...d,
        color: a || void 0,
        fill: a || "currentColor",
        cursor: l || void 0
      },
      ...t
    };
    return m(o, f);
  }
);
p.displayName = "IconWrapper";
export {
  p as Icon
};
