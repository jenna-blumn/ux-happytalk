"use client";
import { jsx as f } from "react/jsx-runtime";
import { useSensors as l, useSensor as o, PointerSensor as x, TouchSensor as p, KeyboardSensor as b, DndContext as y, closestCenter as D } from "@dnd-kit/core";
import { sortableKeyboardCoordinates as v } from "@dnd-kit/sortable";
function G({
  children: t,
  onDragStart: e,
  onDragMove: n,
  onDragOver: r,
  onDragEnd: s,
  onDragCancel: a,
  modifiers: i,
  collisionDetection: d = D,
  autoScroll: c = !0,
  cancelDrop: u,
  measuring: C,
  sensors: m
}) {
  const S = l(
    o(x, {
      activationConstraint: {
        distance: 8
      }
    }),
    o(p, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    }),
    o(b, {
      coordinateGetter: v
    })
  );
  return /* @__PURE__ */ f(
    y,
    {
      sensors: m ?? S,
      collisionDetection: d,
      onDragStart: e,
      onDragMove: n,
      onDragOver: r,
      onDragEnd: s,
      onDragCancel: a,
      modifiers: i,
      autoScroll: c,
      cancelDrop: u,
      measuring: C,
      children: t
    }
  );
}
export {
  G as DndContext
};
