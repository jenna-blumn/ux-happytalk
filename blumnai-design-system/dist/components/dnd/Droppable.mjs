"use client";
import { jsx as b } from "react/jsx-runtime";
import { forwardRef as A } from "react";
import { useDroppable as I } from "@dnd-kit/core";
import { cn as x } from "../../utils/cn.mjs";
const w = A(
  function({
    id: m,
    children: o,
    disabled: l = !1,
    accepts: r,
    className: u,
    activeClassName: d,
    overClassName: v,
    rejectedClassName: y
  }, t) {
    const { isOver: n, setNodeRef: c, active: e } = I({
      id: m,
      disabled: l,
      data: { accepts: r }
    }), a = e?.data?.current, p = e ? { id: e.id, data: a } : null, f = a?.type, i = !r || !p || typeof f == "string" && r.includes(f), D = typeof o == "function" ? o({
      isOver: n && !!i,
      active: p,
      setNodeRef: c
    }) : o;
    return /* @__PURE__ */ b(
      "div",
      {
        ref: (s) => {
          c(s), typeof t == "function" ? t(s) : t && (t.current = s);
        },
        className: x(
          u,
          e !== null && d,
          n && i && v,
          n && !i && y
        ),
        children: D
      }
    );
  }
);
export {
  w as Droppable
};
