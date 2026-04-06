"use client";
import { jsx as i } from "react/jsx-runtime";
import { useCallback as b, useMemo as D } from "react";
import { arrayMove as w, SortableContext as z, verticalListSortingStrategy as E, rectSortingStrategy as L, horizontalListSortingStrategy as M } from "@dnd-kit/sortable";
import { DndContext as j } from "../DndContext.mjs";
import { SortableDisabledContext as k } from "./useSortableContext.mjs";
function P(t) {
  switch (t) {
    case "horizontal":
      return M;
    case "grid":
      return L;
    default:
      return E;
  }
}
function G({
  items: t,
  children: g,
  onReorder: a,
  strategy: f = "vertical",
  disabled: e = !1,
  id: u,
  standalone: S = !0,
  onDragStart: m,
  onDragMove: x,
  onDragOver: v,
  onDragCancel: p
}) {
  const y = b(
    (n) => {
      const { active: d, over: o } = n;
      if (o && d.id !== o.id) {
        const s = t.findIndex((r) => r.id === d.id), l = t.findIndex((r) => r.id === o.id);
        if (s !== -1 && l !== -1) {
          const r = w(t, s, l);
          a?.(r);
        }
      }
    },
    [t, a]
  ), h = t.map((n) => n.id), I = P(f), C = D(() => ({ disabled: e }), [e]), c = /* @__PURE__ */ i(k.Provider, { value: C, children: /* @__PURE__ */ i(
    z,
    {
      id: u?.toString(),
      items: h,
      strategy: I,
      disabled: e,
      children: g
    }
  ) });
  return S ? /* @__PURE__ */ i(
    j,
    {
      onDragEnd: y,
      onDragStart: m,
      onDragMove: x,
      onDragOver: v,
      onDragCancel: p,
      children: c
    }
  ) : c;
}
export {
  G as Sortable
};
