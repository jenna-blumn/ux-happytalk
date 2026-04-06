"use client";
import { jsx as s } from "react/jsx-runtime";
import { cn as o } from "../../../utils/cn.mjs";
const u = (t, e, l) => {
  const n = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0"), g = String(t.getHours()).padStart(2, "0"), d = String(t.getMinutes()).padStart(2, "0"), a = `${n}.${r}.${i}`, c = `${g}:${d}`;
  switch (e) {
    case "date":
      return a;
    case "time":
      return c;
    case "datetime":
      return `${a} ${c}`;
    default:
      return a;
  }
}, h = (t) => {
  if (t instanceof Date)
    return isNaN(t.getTime()) ? null : t;
  const e = new Date(t);
  return isNaN(e.getTime()) ? null : e;
};
function f({
  value: t,
  format: e = "date",
  locale: l = "ko",
  className: n
}) {
  if (t == null)
    return /* @__PURE__ */ s("span", { className: o(
      "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-hint",
      n
    ), children: "-" });
  const r = h(t);
  if (!r)
    return /* @__PURE__ */ s("span", { className: o(
      "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-hint",
      n
    ), children: "-" });
  const i = u(r, e);
  return /* @__PURE__ */ s("span", { className: o(
    "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-default tabular-nums",
    n
  ), children: i });
}
export {
  f as CellDate
};
