"use client";
import { jsx as g, jsxs as p } from "react/jsx-runtime";
import { cn as u } from "../../../utils/cn.mjs";
const d = (t, n, c) => {
  const l = t.getFullYear(), o = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0"), e = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0"), s = `${l}.${o}.${a}`, i = `${e}:${r}`;
  switch (n) {
    case "date":
      return s;
    case "time":
      return i;
    case "datetime":
      return `${s} ${i}`;
    default:
      return s;
  }
}, m = (t) => {
  if (t instanceof Date)
    return isNaN(t.getTime()) ? null : t;
  const n = new Date(t);
  return isNaN(n.getTime()) ? null : n;
};
function f({
  startDate: t,
  endDate: n,
  format: c = "date",
  locale: l = "ko",
  separator: o = "~",
  className: a
}) {
  const e = t != null ? m(t) : null, r = n != null ? m(n) : null;
  if (!e && !r)
    return /* @__PURE__ */ g("span", { className: u(
      "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-hint",
      a
    ), children: "-" });
  const s = e ? d(e, c) : "-", i = r ? d(r, c) : "-";
  return /* @__PURE__ */ p("span", { className: u(
    "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-default tabular-nums",
    a
  ), children: [
    s,
    /* @__PURE__ */ g("span", { className: "text-muted padding-x-4", children: o }),
    i
  ] });
}
export {
  f as CellDateRange
};
