"use client";
import { jsx as f } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { useSortable as I } from "@dnd-kit/sortable";
import { CSS as N } from "@dnd-kit/utilities";
import { SortableItemContext as P } from "./useSortableItemContext.mjs";
import { useSortableDisabledContext as R } from "./useSortableContext.mjs";
import { cn as h } from "../../../utils/cn.mjs";
const B = C(
  function({ id: c, children: r, disabled: l = !1, handle: p = !1, className: b, activeClassName: u }, t) {
    const { disabled: d } = R(), S = l || d, {
      attributes: e,
      listeners: s,
      setNodeRef: i,
      transform: a,
      transition: m,
      isDragging: o,
      isSorting: g
    } = I({
      id: c,
      disabled: S
    }), x = {
      transform: N.Transform.toString(a),
      transition: m
    }, y = {
      isDragging: o,
      isSorting: g,
      attributes: e,
      listeners: s,
      setNodeRef: i,
      transform: a,
      transition: m
    }, D = {
      attributes: e,
      listeners: s,
      isDragging: o
    }, v = typeof r == "function" ? r(y) : r;
    return /* @__PURE__ */ f(P.Provider, { value: D, children: /* @__PURE__ */ f(
      "div",
      {
        ref: (n) => {
          i(n), typeof t == "function" ? t(n) : t && (t.current = n);
        },
        className: h(
          "touch-none",
          o && "z-50 opacity-50",
          o && u,
          b
        ),
        style: x,
        ...p ? {} : { ...e, ...s },
        children: v
      }
    ) });
  }
);
export {
  B as SortableItem
};
