"use client";
import { jsx as i } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { flexRender as s } from "@tanstack/react-table";
import { DataGridCellContext as c } from "./DataGridCellContext.mjs";
import { cn as m } from "../../../utils/cn.mjs";
function b({ cell: r, stickyInfo: o, isRowSelected: l, height: a, colIndex: d }) {
  const e = r.column.columnDef.meta?.align ?? "left", t = !!o, n = f(() => ({ align: e }), [e]);
  return /* @__PURE__ */ i(
    "div",
    {
      role: "gridcell",
      "aria-colindex": d,
      className: m(
        "padding-x-10 flex items-center",
        "font-body size-xs line-height-leading-4 text-default",
        "border-r-default border-b-default last:border-r-0",
        "overflow-hidden min-w-[0px]",
        "bg-default",
        t ? "group-hover:bg-hover-solid" : "group-hover:bg-basic-gray-alpha-4",
        l && (t ? "bg-hover-solid" : "bg-basic-gray-alpha-4"),
        e === "center" && "justify-center",
        e === "right" && "justify-end",
        t ? "sticky z-10 isolate" : "relative z-[1]"
      ),
      style: {
        height: a ?? "32px",
        ...t ? { left: o.leftOffset, width: o.width } : void 0
      },
      children: /* @__PURE__ */ i(c.Provider, { value: n, children: s(r.column.columnDef.cell, r.getContext()) })
    }
  );
}
export {
  b as DataGridCell
};
