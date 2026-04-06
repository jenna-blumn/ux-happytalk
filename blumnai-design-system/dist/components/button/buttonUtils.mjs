"use client";
import { jsx as r } from "react/jsx-runtime";
import { isValidElement as f } from "react";
import { Icon as u } from "../icons/Icon/Icon.mjs";
const y = (e, l, s) => {
  if (!e || typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0) return null;
  if (Array.isArray(e) && (e.length === 2 || e.length === 3) && typeof e[0] == "string" && typeof e[1] == "string") {
    const t = e[2], n = e.length === 3 && (t === !0 || t === "true");
    return /* @__PURE__ */ r(u, { iconType: [e[0], e[1]], isFill: n, size: l, color: s });
  }
  return typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ r("span", { className: "inline-flex items-center", children: e }) : f(e) ? /* @__PURE__ */ r("span", { className: "inline-flex items-center", children: e }) : null;
};
export {
  y as renderButtonIcon
};
