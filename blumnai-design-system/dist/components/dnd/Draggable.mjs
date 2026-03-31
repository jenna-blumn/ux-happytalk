"use client";
import { jsx as l } from "react/jsx-runtime";
import { forwardRef as v } from "react";
import { useDraggable as x } from "@dnd-kit/core";
import { CSS as S } from "@dnd-kit/utilities";
import { DraggableContext as d } from "./useDraggableContext.mjs";
import { cn as j } from "../../utils/cn.mjs";
const V = v(
  function({ id: i, children: o, data: r, disabled: m = !1, handle: g = !1, className: p }, t) {
    const {
      attributes: e,
      listeners: n,
      setNodeRef: c,
      transform: s,
      isDragging: a
    } = x({
      id: i,
      data: { id: i, ...typeof r == "object" && r !== null ? r : {} },
      disabled: m
    }), u = s ? {
      transform: S.Translate.toString(s)
    } : void 0, b = {
      isDragging: a,
      attributes: e,
      listeners: n,
      setNodeRef: c,
      transform: s
    }, y = {
      attributes: e,
      listeners: n,
      isDragging: a
    }, D = typeof o == "function" ? o(b) : o;
    return /* @__PURE__ */ l(d.Provider, { value: y, children: /* @__PURE__ */ l(
      "div",
      {
        ref: (f) => {
          c(f), typeof t == "function" ? t(f) : t && (t.current = f);
        },
        className: j(
          "touch-none",
          a && "opacity-50",
          p
        ),
        style: u,
        ...g ? {} : { ...e, ...n },
        children: D
      }
    ) });
  }
);
export {
  V as Draggable
};
