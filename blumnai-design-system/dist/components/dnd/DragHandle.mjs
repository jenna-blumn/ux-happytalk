"use client";
import { jsx as e } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { useDraggableContext as m } from "./useDraggableContext.mjs";
import { useSortableItemContext as u } from "./Sortable/useSortableItemContext.mjs";
import { cn as b } from "../../utils/cn.mjs";
import { Icon as d } from "../icons/Icon/Icon.mjs";
const y = g(
  function({ children: r, className: o }, n) {
    const a = m(), i = u(), t = a || i;
    if (!t)
      return console.warn("DragHandle must be used within a Draggable or SortableItem with handle={true}"), null;
    const { attributes: s, listeners: l, isDragging: c } = t;
    return /* @__PURE__ */ e(
      "button",
      {
        ref: n,
        type: "button",
        "aria-label": "Drag handle",
        className: b(
          "flex items-center justify-center cursor-grab touch-none",
          "text-muted hover:text-default transition-colors",
          c && "cursor-grabbing",
          o
        ),
        ...s,
        ...l,
        children: r || /* @__PURE__ */ e(d, { iconType: ["editor", "draggable"], size: 16 })
      }
    );
  }
);
export {
  y as DragHandle
};
