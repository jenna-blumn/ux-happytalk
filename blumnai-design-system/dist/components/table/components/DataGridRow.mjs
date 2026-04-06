"use client";
import { jsx as l } from "react/jsx-runtime";
import * as f from "react";
import { DataGridCell as u } from "./DataGridCell.mjs";
import { cn as S } from "../../../utils/cn.mjs";
function b({
  row: e,
  gridTemplateColumns: r,
  onRowClick: t,
  showSelectedRowBackground: d,
  stickyColumnPositions: c,
  rowHeight: o,
  getRowHeight: n
}) {
  const a = e.getIsSelected(), i = e.getCanSelect(), m = f.useCallback(() => {
    t && t(e.original);
  }, [t, e.original]), g = n?.(e.original) ?? o ?? "32px";
  return /* @__PURE__ */ l(
    "div",
    {
      role: "row",
      className: S(
        "grid group",
        !i && "[&>*]:opacity-50",
        t && i !== !1 && "cursor-pointer"
      ),
      style: { gridTemplateColumns: r },
      onClick: t && i !== !1 ? m : void 0,
      "aria-selected": a,
      "aria-disabled": !i || void 0,
      "data-state": a ? "selected" : void 0,
      children: e.getVisibleCells().map((s, p) => /* @__PURE__ */ l(
        u,
        {
          cell: s,
          stickyInfo: c.get(s.column.id),
          isRowSelected: a && d,
          height: g,
          colIndex: p + 1
        },
        s.id
      ))
    }
  );
}
export {
  b as DataGridRow
};
