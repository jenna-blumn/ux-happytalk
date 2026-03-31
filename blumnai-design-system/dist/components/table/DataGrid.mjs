"use client";
import { jsx as i, jsxs as E } from "react/jsx-runtime";
import * as j from "react";
import { useMemo as u } from "react";
import { useDataGridTable as bt } from "./hooks/useDataGridTable.mjs";
import { useGridKeyboardNav as It } from "./hooks/useGridKeyboardNav.mjs";
import { DataGridHeader as kt } from "./components/DataGridHeader.mjs";
import { DataGridBody as Et } from "./components/DataGridBody.mjs";
import { DataGridPagination as Kt } from "./components/DataGridPagination.mjs";
import { DataGridLoading as K } from "./components/DataGridLoading.mjs";
import { DataGridEmpty as Tt } from "./components/DataGridEmpty.mjs";
import { DataGridError as jt } from "./components/DataGridError.mjs";
import { TableTooltipProvider as Ot } from "./components/TableTooltip.mjs";
import { calculateStickyPositions as T } from "./utils/stickyColumnUtils.mjs";
import { cn as zt } from "../../utils/cn.mjs";
import { ScrollArea as Mt } from "../scroll-area/ScrollArea.mjs";
function Nt({
  data: D,
  columns: o,
  getRowId: O,
  sorting: z,
  onSortingChange: M,
  columnFilters: N,
  onColumnFiltersChange: A,
  rowSelection: B,
  onRowSelectionChange: H,
  enableRowSelection: $,
  enableColumnReorder: n,
  columnOrder: q,
  onColumnOrderChange: F,
  enableColumnResize: l,
  columnSizing: J,
  onColumnSizingChange: Q,
  pagination: G = !0,
  page: U,
  total: S,
  limit: x,
  limitOptions: V,
  limitOptionLabel: X,
  onPageChange: Y,
  onLimitChange: v,
  pageChangeConfirmMessage: Z,
  paginationAlign: _ = "right",
  paginationVariant: W = "numbered",
  maxVisiblePages: L,
  paginationDisabled: R,
  hideNavButtons: tt,
  resultTextFormatter: ot,
  showItemCount: rt = !0,
  isLoading: e,
  preserveDataWhileLoading: s,
  minHeight: at,
  maxHeight: nt,
  headerHeight: it,
  rowHeight: p,
  getRowHeight: et,
  emptyText: dt,
  emptyContent: mt,
  error: w,
  onRetry: lt,
  "aria-label": ct,
  "aria-labelledby": st,
  className: ft,
  onRowClick: gt,
  showSelectedRowBackground: ht = !0
}, c) {
  const {
    table: C,
    pagination: d,
    handlePageChange: ut,
    handleLimitChange: pt,
    handleColumnOrderChange: wt,
    columnSizing: m,
    handleColumnSizingChange: yt,
    displayData: Dt
  } = bt({
    data: D,
    columns: o,
    getRowId: O,
    sorting: z,
    onSortingChange: M,
    columnFilters: N,
    onColumnFiltersChange: A,
    rowSelection: B,
    onRowSelectionChange: H,
    enableRowSelection: $,
    enableColumnReorder: n,
    columnOrder: q,
    onColumnOrderChange: F,
    columnSizing: J,
    onColumnSizingChange: Q,
    pagination: G,
    page: U,
    total: S,
    limit: x,
    onPageChange: Y,
    onLimitChange: v,
    isLoading: e,
    preserveDataWhileLoading: s
  }), y = C.getHeaderGroups(), r = u(
    () => y[0]?.headers ?? [],
    [y]
  ), f = u(() => (n && r.length > 0 ? r.map((t) => ({
    id: t.column.id,
    width: t.column.columnDef.meta?.width ?? "1fr"
  })) : o.map((t) => ({
    id: t.id ?? t.accessorKey ?? "",
    width: t.meta?.width ?? "1fr"
  }))).map(
    (t) => l && m[t.id] ? `${m[t.id]}px` : t.width
  ).join(" "), [n, r, o, l, m]), g = u(() => {
    const a = l ? m : void 0;
    if (n && r.length > 0) {
      const t = r.map((Pt) => Pt.column.columnDef);
      return T(t, a);
    }
    return T(o, a);
  }, [n, r, o, l, m]), P = u(() => n && r.length > 0 ? r.map((a) => a.column.columnDef) : o, [n, r, o]), b = C.getRowModel().rows, h = Dt.length > 0, Gt = e && !s && !h, St = e && s && h, xt = !e && !h && !w, I = !!w, { gridRef: k, handleKeyDown: vt } = It({
    rowCount: b.length + 1,
    colCount: o.length
  }), Ct = j.useCallback(
    (a) => {
      k.current = a, typeof c == "function" ? c(a) : c && (c.current = a);
    },
    [c, k]
  );
  return /* @__PURE__ */ i(Ot, { children: /* @__PURE__ */ E(
    "div",
    {
      ref: Ct,
      role: "grid",
      "aria-label": ct,
      "aria-labelledby": st,
      "aria-busy": e || void 0,
      "aria-rowcount": S ?? D.length,
      "aria-colcount": o.length,
      onKeyDown: vt,
      className: zt(
        "relative overflow-hidden bg-default border-default rounded-lg",
        ft
      ),
      children: [
        /* @__PURE__ */ E(
          Mt,
          {
            orientation: "both",
            maxHeight: nt,
            style: { minHeight: at },
            children: [
              /* @__PURE__ */ i(
                kt,
                {
                  headerGroups: y,
                  gridTemplateColumns: f,
                  stickyColumnPositions: g,
                  headerHeight: it,
                  enableColumnReorder: n,
                  onColumnOrderChange: wt,
                  enableColumnResize: l,
                  columnSizing: m,
                  onColumnSizingChange: yt
                }
              ),
              I ? /* @__PURE__ */ i(jt, { error: w, onRetry: lt }) : xt ? /* @__PURE__ */ i(Tt, { text: dt, content: mt }) : Gt ? /* @__PURE__ */ i(
                K,
                {
                  columns: P,
                  gridTemplateColumns: f,
                  rowCount: x,
                  stickyColumnPositions: g,
                  rowHeight: p
                }
              ) : /* @__PURE__ */ i(
                Et,
                {
                  rows: b,
                  gridTemplateColumns: f,
                  isLoading: e,
                  preserveDataWhileLoading: s,
                  onRowClick: gt,
                  showSelectedRowBackground: ht,
                  stickyColumnPositions: g,
                  rowHeight: p,
                  getRowHeight: et
                }
              ),
              St && /* @__PURE__ */ i(
                K,
                {
                  columns: P,
                  gridTemplateColumns: f,
                  overlay: !0,
                  stickyColumnPositions: g,
                  rowHeight: p
                }
              )
            ]
          }
        ),
        G && h && !I && /* @__PURE__ */ i(
          Kt,
          {
            page: d.page,
            totalPages: d.totalPages,
            total: d.total,
            limit: d.limit,
            limitOptions: V,
            limitOptionLabel: X,
            startIndex: d.startIndex,
            endIndex: d.endIndex,
            onPageChange: ut,
            onLimitChange: v ? pt : void 0,
            pageChangeConfirmMessage: Z,
            align: _,
            variant: W,
            maxVisiblePages: L,
            disabled: R,
            hideNavButtons: tt,
            resultTextFormatter: ot,
            showItemCount: rt
          }
        )
      ]
    }
  ) });
}
const Wt = j.forwardRef(Nt);
export {
  Wt as DataGrid
};
