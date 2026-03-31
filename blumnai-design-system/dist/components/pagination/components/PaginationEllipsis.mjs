"use client";
import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { cn as m } from "../../../utils/cn.mjs";
const c = d(
  ({ className: o, onClick: t, size: s = "lg", ...r }, n) => {
    const e = !!t;
    return /* @__PURE__ */ a(
      "span",
      {
        ref: n,
        role: e ? "button" : void 0,
        tabIndex: e ? 0 : void 0,
        "aria-hidden": e ? void 0 : !0,
        "aria-label": e ? "페이지 건너뛰기" : void 0,
        className: m(
          s === "sm" ? "width-28 height-28" : "width-32 height-32",
          "flex items-center justify-center",
          `font-body ${s === "sm" ? "size-xs" : "size-sm"} font-medium line-height-leading-5`,
          "text-hint",
          e && "cursor-pointer hover:bg-state-ghost-hover hover:text-muted rounded-sm transition-colors",
          o
        ),
        onClick: t,
        onKeyDown: e ? (i) => {
          (i.key === "Enter" || i.key === " ") && (i.preventDefault(), i.currentTarget.click());
        } : void 0,
        ...r,
        children: [
          "...",
          !e && /* @__PURE__ */ l("span", { className: "sr-only", children: "더 많은 페이지" })
        ]
      }
    );
  }
);
c.displayName = "PaginationEllipsis";
export {
  c as PaginationEllipsis
};
