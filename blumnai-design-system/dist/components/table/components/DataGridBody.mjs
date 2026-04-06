"use client";
import { jsx as t } from "react/jsx-runtime";
import { DataGridRow as s } from "./DataGridRow.mjs";
import { cn as f } from "../../../utils/cn.mjs";
function u({
  rows: o,
  gridTemplateColumns: e,
  isLoading: i,
  preserveDataWhileLoading: n,
  onRowClick: a,
  showSelectedRowBackground: m,
  stickyColumnPositions: p,
  rowHeight: d,
  getRowHeight: c
}) {
  const l = i && n && o.length > 0;
  return /* @__PURE__ */ t(
    "div",
    {
      role: "rowgroup",
      className: f(
        "relative",
        l && "opacity-60 pointer-events-none"
      ),
      children: o.map((r) => /* @__PURE__ */ t(
        s,
        {
          row: r,
          gridTemplateColumns: e,
          onRowClick: a,
          showSelectedRowBackground: m,
          stickyColumnPositions: p,
          rowHeight: d,
          getRowHeight: c
        },
        r.id
      ))
    }
  );
}
export {
  u as DataGridBody
};
