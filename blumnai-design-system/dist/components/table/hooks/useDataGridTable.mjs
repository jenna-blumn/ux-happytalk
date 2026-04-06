"use client";
import { useMemo as x, useState as o, useCallback as l, useRef as Cn, useEffect as dn } from "react";
import { useReactTable as un, getPaginationRowModel as mn, getFilteredRowModel as hn, getSortedRowModel as Sn, getCoreRowModel as Rn } from "@tanstack/react-table";
function xn(T) {
  const {
    data: a,
    columns: k,
    getRowId: y,
    sorting: O,
    onSortingChange: s,
    columnFilters: G,
    onColumnFiltersChange: d,
    rowSelection: N,
    onRowSelectionChange: u,
    enableRowSelection: W,
    enableColumnReorder: v,
    columnOrder: j,
    onColumnOrderChange: m,
    columnSizing: q,
    onColumnSizingChange: h,
    pagination: F = !0,
    page: A,
    total: B,
    limit: I = 10,
    onPageChange: r,
    onLimitChange: S,
    isLoading: g,
    preserveDataWhileLoading: R
  } = T, H = O !== void 0 || s !== void 0, e = x(() => r !== void 0, [r]), [J, K] = o([]), [Q, U] = o([]), [V, X] = o({}), [Y, Z] = o([]), [_, $] = o({}), [nn, p] = o(1), [en, tn] = o(I), M = O ?? J, P = G ?? Q, b = N ?? V, on = j ?? Y, ln = q ?? _, t = A ?? nn, i = I ?? en, z = l(
    (n) => {
      s ? s(n) : K(n);
    },
    [s]
  ), L = l(
    (n) => {
      d ? d(n) : U(n);
    },
    [d]
  ), D = l(
    (n) => {
      u ? u(n) : X(n);
    },
    [u]
  ), an = l(
    (n) => {
      h ? h(n) : $(n);
    },
    [h]
  ), E = l(
    (n) => {
      m ? m(n) : Z(n);
    },
    [m]
  ), rn = l(
    (n) => {
      r ? r(n) : p(n);
    },
    [r]
  ), gn = l(
    (n) => {
      S ? S(n) : (tn(n), p(1));
    },
    [S]
  ), w = Cn(a);
  dn(() => {
    !g && a.length > 0 && (w.current = a);
  }, [a, g]);
  const f = x(() => g && R && w.current.length > 0 ? w.current : a, [a, g, R]), c = B ?? f.length, C = Math.ceil(c / i), sn = un({
    data: f,
    columns: k,
    getRowId: y,
    state: {
      sorting: M,
      columnFilters: P,
      rowSelection: b,
      ...v ? { columnOrder: on } : {},
      pagination: F ? {
        pageIndex: t - 1,
        pageSize: i
      } : void 0
    },
    onSortingChange: z,
    onColumnFiltersChange: L,
    onRowSelectionChange: D,
    ...v ? { onColumnOrderChange: E } : {},
    enableSorting: H,
    enableRowSelection: W,
    getCoreRowModel: Rn(),
    getSortedRowModel: e ? void 0 : Sn(),
    getFilteredRowModel: e ? void 0 : hn(),
    getPaginationRowModel: e ? void 0 : F ? mn() : void 0,
    manualSorting: e,
    manualFiltering: e,
    manualPagination: e,
    pageCount: e ? C : void 0
  }), cn = x(
    () => ({
      page: t,
      limit: i,
      total: c,
      totalPages: C,
      hasNextPage: t < C,
      hasPreviousPage: t > 1,
      startIndex: (t - 1) * i + 1,
      endIndex: Math.min(t * i, c)
    }),
    [t, i, c, C]
  );
  return {
    table: sn,
    isServerSide: e,
    sorting: M,
    columnFilters: P,
    rowSelection: b,
    pagination: cn,
    handleSortingChange: z,
    handleColumnFiltersChange: L,
    handleRowSelectionChange: D,
    columnSizing: ln,
    handleColumnSizingChange: an,
    handleColumnOrderChange: E,
    handlePageChange: rn,
    handleLimitChange: gn,
    displayData: f,
    isLoading: g,
    preserveDataWhileLoading: R
  };
}
export {
  xn as useDataGridTable
};
