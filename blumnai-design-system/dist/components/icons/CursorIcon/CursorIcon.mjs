"use client";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { CursorTextIcon as a, CursorPointerIcon as d, CursorNotAllowedIcon as l, CursorHandOpenIcon as p, CursorHandClosedIcon as C, CursorArrowIcon as i } from "./icons/all.mjs";
const I = u(({
  cursorType: n,
  size: e = 24,
  className: s,
  ...t
}, c) => {
  const r = { ref: c, size: e, className: s, ...t };
  switch (n) {
    case "arrow":
      return /* @__PURE__ */ o(i, { ...r });
    case "hand-closed":
      return /* @__PURE__ */ o(C, { ...r });
    case "hand-open":
      return /* @__PURE__ */ o(p, { ...r });
    case "not-allowed":
      return /* @__PURE__ */ o(l, { ...r });
    case "pointer":
      return /* @__PURE__ */ o(d, { ...r });
    case "text":
      return /* @__PURE__ */ o(a, { ...r });
    default:
      return null;
  }
});
I.displayName = "CursorIcon";
export {
  I as CursorIcon
};
