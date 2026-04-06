"use client";
import { jsx as e } from "react/jsx-runtime";
import { forwardRef as w } from "react";
import { cn as m } from "../../../utils/cn.mjs";
import { Icon as v } from "../../icons/Icon/Icon.mjs";
const N = w(
  ({ className: p, direction: o, size: r = "lg", disabled: t, href: s, onClick: a, iconOverride: n, ...f }, h) => {
    const g = n || (o === "prev" ? ["arrows", "arrow-left-s"] : ["arrows", "arrow-right-s"]), i = o === "prev" ? "이전 페이지" : "다음 페이지", u = r === "sm" ? "width-28 height-28" : "width-32 height-32", b = r === "sm" ? 16 : 20, c = m(
      u,
      "rounded-sm",
      "flex items-center justify-center",
      "transition-colors",
      t ? "bg-state-disabled cursor-not-allowed" : "bg-state-soft hover:bg-state-soft-hover cursor-pointer",
      p
    ), l = /* @__PURE__ */ e(
      v,
      {
        iconType: g,
        size: b,
        className: m(t ? "text-hint pointer-events-none" : "text-subtle")
      }
    );
    return s && !t ? /* @__PURE__ */ e(
      "a",
      {
        href: s,
        className: c,
        "aria-label": i,
        onClick: a,
        children: l
      }
    ) : /* @__PURE__ */ e(
      "button",
      {
        ref: h,
        type: "button",
        className: c,
        disabled: t,
        "aria-label": i,
        onClick: a,
        ...f,
        children: l
      }
    );
  }
);
N.displayName = "PaginationNav";
export {
  N as PaginationNav
};
