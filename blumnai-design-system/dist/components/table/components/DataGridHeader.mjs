"use client";
import { jsx as t, jsxs as y } from "react/jsx-runtime";
import { useState as j, useRef as w, useEffect as D, useCallback as T, useMemo as H } from "react";
import { flexRender as C } from "@tanstack/react-table";
import { arrayMove as M, SortableContext as W, horizontalListSortingStrategy as X, useSortable as A } from "@dnd-kit/sortable";
import { CSS as O } from "@dnd-kit/utilities";
import { useMergeRefs as F } from "../../../hooks/use-merge-refs.mjs";
import { DndContext as U } from "../../dnd/DndContext.mjs";
import { cn as z } from "../../../utils/cn.mjs";
import { TooltipTrigger as P } from "../../tooltip/Tooltip/TooltipTrigger.mjs";
import { Icon as N } from "../../icons/Icon/Icon.mjs";
function q({ header: e, stickyInfo: s, headerHeight: g, colIndex: p, enableColumnResize: x, onResizeStart: b }) {
  const m = w(null), r = e.column.getCanSort(), c = e.column.getIsSorted(), n = e.column.getSortIndex(), l = e.column.columnDef.meta?.headerAlign ?? e.column.columnDef.meta?.align ?? "left", a = e.column.columnDef.meta?.headerTooltip, f = () => c ? c === "asc" ? "arrow-up-s" : "arrow-down-s" : "expand-up-down", u = !!s, i = /* @__PURE__ */ t("span", { className: "truncate", children: e.isPlaceholder ? null : C(e.column.columnDef.header, e.getContext()) });
  return /* @__PURE__ */ y(
    "div",
    {
      ref: m,
      role: "columnheader",
      "aria-colindex": p,
      className: z(
        "padding-x-10 flex items-center ds-gap-4",
        "font-body size-xs line-height-leading-4 font-medium text-subtle",
        "border-r-default last:border-r-0",
        l === "center" && "justify-center",
        l === "right" && "justify-end",
        "bg-default",
        r && "cursor-pointer select-none",
        u ? "sticky z-10" : "relative z-[1]"
      ),
      style: {
        height: g ?? "32px",
        ...u ? { left: s.leftOffset, width: s.width } : void 0
      },
      onClick: r ? e.column.getToggleSortingHandler() : void 0,
      "aria-sort": c === "asc" ? "ascending" : c === "desc" ? "descending" : void 0,
      children: [
        a ? /* @__PURE__ */ t(P, { content: a, placement: "top", children: i }) : i,
        r && /* @__PURE__ */ y("div", { className: "flex items-center ds-gap-1 shrink-0", children: [
          /* @__PURE__ */ t(
            N,
            {
              iconType: ["arrows", f()],
              size: 12,
              className: c ? "text-subtle" : "text-hint"
            }
          ),
          n > 0 && /* @__PURE__ */ t("span", { className: "size-2xs text-hint", children: n + 1 })
        ] }),
        x && /* @__PURE__ */ t(
          "div",
          {
            className: z(
              "absolute top-0 right-0 bottom-0 flex items-center cursor-col-resize z-[5]",
              "width-4 hover:bg-border-darker active:bg-border-strong"
            ),
            onPointerDown: (o) => {
              o.stopPropagation(), o.preventDefault(), b?.(e.column.id, o.clientX, m.current?.offsetWidth ?? 0);
            },
            onClick: (o) => o.stopPropagation(),
            role: "separator",
            "aria-orientation": "vertical"
          }
        )
      ]
    }
  );
}
const B = () => !1;
function J({ header: e, stickyInfo: s, headerHeight: g, colIndex: p, enableColumnResize: x, onResizeStart: b }) {
  const m = !!s || e.column.id === "select", r = w(null), {
    attributes: c,
    listeners: n,
    setNodeRef: l,
    transform: a,
    transition: f,
    isDragging: u
  } = A({
    id: e.column.id,
    disabled: m,
    animateLayoutChanges: B
  }), i = F(r, l), o = e.column.getCanSort(), d = e.column.getIsSorted(), h = e.column.getSortIndex(), S = e.column.columnDef.meta?.headerAlign ?? e.column.columnDef.meta?.align ?? "left", R = e.column.columnDef.meta?.headerTooltip, E = () => d ? d === "asc" ? "arrow-up-s" : "arrow-down-s" : "expand-up-down", I = !!s, L = {
    height: g ?? "32px",
    ...I ? { left: s.leftOffset, width: s.width } : void 0,
    transform: O.Translate.toString(a),
    transition: f
  }, k = /* @__PURE__ */ t("span", { className: "truncate", children: e.isPlaceholder ? null : C(e.column.columnDef.header, e.getContext()) });
  return /* @__PURE__ */ y(
    "div",
    {
      ref: i,
      role: "columnheader",
      "aria-colindex": p,
      className: z(
        "padding-x-10 flex items-center ds-gap-4",
        "font-body size-xs line-height-leading-4 font-medium text-subtle",
        "border-r-default last:border-r-0",
        S === "center" && "justify-center",
        S === "right" && "justify-end",
        "bg-default",
        o && "cursor-pointer select-none",
        I ? "sticky z-10" : "relative z-[1]",
        u && "opacity-50 z-50"
      ),
      style: L,
      onClick: o ? e.column.getToggleSortingHandler() : void 0,
      "aria-sort": d === "asc" ? "ascending" : d === "desc" ? "descending" : void 0,
      children: [
        !m && /* @__PURE__ */ t(
          "div",
          {
            className: "shrink-0 cursor-grab active:cursor-grabbing",
            ...c,
            ...n,
            children: /* @__PURE__ */ t(
              N,
              {
                iconType: ["editor", "draggable"],
                size: 12,
                className: "text-hint"
              }
            )
          }
        ),
        R ? /* @__PURE__ */ t(P, { content: R, placement: "top", children: k }) : k,
        o && /* @__PURE__ */ y("div", { className: "flex items-center ds-gap-1 shrink-0", children: [
          /* @__PURE__ */ t(
            N,
            {
              iconType: ["arrows", E()],
              size: 12,
              className: d ? "text-subtle" : "text-hint"
            }
          ),
          h > 0 && /* @__PURE__ */ t("span", { className: "size-2xs text-hint", children: h + 1 })
        ] }),
        x && /* @__PURE__ */ t(
          "div",
          {
            className: z(
              "absolute top-0 right-0 bottom-0 flex items-center cursor-col-resize z-[5]",
              "width-4 hover:bg-border-darker active:bg-border-strong"
            ),
            onPointerDown: (v) => {
              v.stopPropagation(), v.preventDefault(), b?.(e.column.id, v.clientX, r.current?.offsetWidth ?? 0);
            },
            onClick: (v) => v.stopPropagation(),
            role: "separator",
            "aria-orientation": "vertical"
          }
        )
      ]
    }
  );
}
function K({
  headerGroup: e,
  gridTemplateColumns: s,
  stickyColumnPositions: g,
  headerHeight: p,
  onColumnOrderChange: x,
  enableColumnResize: b,
  onResizeStart: m
}) {
  const r = H(
    () => e.headers.map((n) => n.column.id),
    [e.headers]
  ), c = T(
    (n) => {
      const { active: l, over: a } = n;
      if (a && l.id !== a.id) {
        const f = r.indexOf(l.id), u = r.indexOf(a.id);
        f !== -1 && u !== -1 && x(M(r, f, u));
      }
    },
    [r, x]
  );
  return /* @__PURE__ */ t(U, { onDragEnd: c, children: /* @__PURE__ */ t(W, { items: r, strategy: X, children: /* @__PURE__ */ t("div", { role: "row", className: "grid", style: { gridTemplateColumns: s }, children: e.headers.map((n, l) => /* @__PURE__ */ t(
    J,
    {
      header: n,
      stickyInfo: g.get(n.column.id),
      headerHeight: p,
      colIndex: l + 1,
      enableColumnResize: b,
      onResizeStart: m
    },
    n.id
  )) }) }) });
}
function oe({
  headerGroups: e,
  gridTemplateColumns: s,
  stickyColumnPositions: g,
  headerHeight: p,
  enableColumnReorder: x,
  onColumnOrderChange: b,
  enableColumnResize: m,
  columnSizing: r,
  onColumnSizingChange: c
}) {
  const [n, l] = j(null), a = w(r);
  D(() => {
    a.current = r;
  }, [r]);
  const f = w(c);
  D(() => {
    f.current = c;
  }, [c]), D(() => {
    if (!n) return;
    const i = (d) => {
      const h = d.clientX - n.startX, S = Math.max(50, n.startWidth + h);
      f.current?.({
        ...a.current,
        [n.columnId]: S
      });
    }, o = () => l(null);
    return document.addEventListener("pointermove", i), document.addEventListener("pointerup", o), document.body.style.userSelect = "none", document.body.style.cursor = "col-resize", () => {
      document.removeEventListener("pointermove", i), document.removeEventListener("pointerup", o), document.body.style.userSelect = "", document.body.style.cursor = "";
    };
  }, [n]);
  const u = T(
    (i, o, d) => {
      l({ columnId: i, startX: o, startWidth: d });
    },
    []
  );
  return /* @__PURE__ */ t(
    "div",
    {
      role: "rowgroup",
      className: "sticky top-0 z-20 bg-default border-b-default",
      children: e.map(
        (i) => x && b ? /* @__PURE__ */ t(
          K,
          {
            headerGroup: i,
            gridTemplateColumns: s,
            stickyColumnPositions: g,
            headerHeight: p,
            onColumnOrderChange: b,
            enableColumnResize: m,
            onResizeStart: u
          },
          i.id
        ) : /* @__PURE__ */ t(
          "div",
          {
            role: "row",
            className: "grid",
            style: { gridTemplateColumns: s },
            children: i.headers.map((o, d) => /* @__PURE__ */ t(
              q,
              {
                header: o,
                stickyInfo: g.get(o.column.id),
                headerHeight: p,
                colIndex: d + 1,
                enableColumnResize: m,
                onResizeStart: u
              },
              o.id
            ))
          },
          i.id
        )
      )
    }
  );
}
export {
  oe as DataGridHeader
};
