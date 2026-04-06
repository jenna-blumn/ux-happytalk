"use client";
import { jsx as s } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { cn as l } from "../../../utils/cn.mjs";
const f = p(
  ({ className: a, isActive: o, variant: e = "numbered", size: n = "lg", disabled: r, href: u, children: t, onClick: i, ...g }, c) => {
    const m = e === "numbered" ? l(
      n === "sm" ? "width-28 height-28" : "width-32 height-32",
      "rounded-sm",
      "flex items-center justify-center",
      `font-body ${n === "sm" ? "size-xs" : "size-sm"} font-medium line-height-leading-5`,
      "transition-colors",
      o ? "border-solid border-[1px] border-[color:var(--bg-basic-blue-accent)] text-basic-blue-strong" : "text-hint hover:bg-state-ghost-hover hover:text-muted",
      r ? "cursor-not-allowed opacity-40" : "cursor-pointer",
      a
    ) : l(
      n === "sm" ? "width-8 height-8" : "width-10 height-10",
      "rounded-full",
      "transition-colors",
      o ? "bg-basic-blue-accent" : "bg-state-soft hover:bg-state-soft-hover",
      r ? "cursor-not-allowed opacity-40" : "cursor-pointer",
      a
    ), d = e === "dot" ? t != null ? o ? `슬라이드 ${t}, 현재` : `슬라이드 ${t}(으)로 이동` : void 0 : typeof t == "string" || typeof t == "number" ? o ? `${t} 페이지, 현재 페이지` : `${t} 페이지로 이동` : void 0, b = e === "dot" ? t != null ? /* @__PURE__ */ s("span", { className: "sr-only", children: t }) : null : t;
    return u && !r ? /* @__PURE__ */ s(
      "a",
      {
        href: u,
        className: m,
        "aria-current": o ? e === "dot" ? !0 : "page" : void 0,
        "aria-label": d,
        onClick: i,
        children: b
      }
    ) : /* @__PURE__ */ s(
      "button",
      {
        ref: c,
        type: "button",
        className: m,
        disabled: r,
        "aria-current": o ? e === "dot" ? !0 : "page" : void 0,
        "aria-label": d,
        onClick: i,
        ...g,
        children: b
      }
    );
  }
);
f.displayName = "PaginationItem";
export {
  f as PaginationItem
};
