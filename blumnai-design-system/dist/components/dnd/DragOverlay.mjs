"use client";
import { jsx as i } from "react/jsx-runtime";
import { useDndContext as c, DragOverlay as s } from "@dnd-kit/core";
import { cn as u } from "../../utils/cn.mjs";
const l = {
  duration: 250,
  easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)"
};
function p({
  children: a,
  className: n,
  dropAnimation: o = l
}) {
  const { active: t } = c(), r = t ? { id: t.id, data: t.data.current } : null, e = typeof a == "function" ? a(r) : a;
  return /* @__PURE__ */ i(
    s,
    {
      dropAnimation: o,
      className: u("shadow-lg", n),
      children: t ? e : null
    }
  );
}
export {
  p as DragOverlay
};
