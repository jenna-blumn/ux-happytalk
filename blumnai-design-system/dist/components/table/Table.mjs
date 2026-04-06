"use client";
import { jsx as a, jsxs as i, Fragment as q } from "react/jsx-runtime";
import * as l from "react";
import { Select as C } from "../select/Select.mjs";
import { cn as d } from "../../utils/cn.mjs";
import { ScrollArea as G } from "../scroll-area/ScrollArea.mjs";
import { Icon as J } from "../icons/Icon/Icon.mjs";
import { Pagination as L } from "../pagination/Pagination.mjs";
const Q = (s) => `${s}개씩 보기`, U = l.forwardRef(
  ({
    className: s,
    striped: e,
    bordered: t,
    minHeight: n,
    maxHeight: x,
    stickyHeader: f,
    isLoading: b,
    pagination: h,
    page: c = 1,
    totalPages: o = 1,
    onPageChange: N,
    limit: u = 10,
    limitOptions: j,
    limitOptionLabel: I = Q,
    onLimitChange: v,
    pageChangeConfirmMessage: $,
    paginationAlign: r = "right",
    paginationVariant: H = "numbered",
    maxVisiblePages: _,
    paginationDisabled: B,
    hideNavButtons: E,
    resultTextFormatter: F,
    showItemCount: w,
    total: m,
    itemCountFormatter: T,
    children: K,
    ...M
  }, O) => {
    const p = w || v, k = (c - 1) * u + 1, z = Math.min(c * u, m ?? c * u), R = () => T && m !== void 0 ? T(k, z, m) : `${k}-${z} / ${m ?? "?"}`, S = v && /* @__PURE__ */ a(
      C,
      {
        size: "sm",
        selectStyle: "default",
        options: (j ?? [10, 20, 50, 100]).map((y) => ({
          id: String(y),
          label: I(y)
        })),
        value: String(u),
        onChange: (y) => v(Number(y)),
        width: 140
      }
    ), g = h && N && /* @__PURE__ */ a(
      L,
      {
        variant: H,
        page: c,
        totalPages: o,
        total: m,
        onPageChange: N,
        pageChangeConfirmMessage: $,
        maxVisiblePages: _,
        disabled: B,
        hideNavButtons: E,
        resultTextFormatter: F
      }
    );
    return /* @__PURE__ */ i(
      "div",
      {
        className: d(
          "relative w-full overflow-hidden",
          t && "bg-default border-default rounded-lg"
        ),
        children: [
          /* @__PURE__ */ a(
            G,
            {
              orientation: "both",
              maxHeight: x,
              className: d(
                f && "[&_thead]:sticky [&_thead]:top-[0px] [&_thead]:z-10"
              ),
              "data-sticky-bordered": t && f ? "" : void 0,
              style: { minHeight: n },
              children: /* @__PURE__ */ a(
                "table",
                {
                  ref: O,
                  className: d("w-full caption-bottom size-sm font-body", s),
                  "data-slot": "table",
                  "data-striped": e || void 0,
                  "aria-busy": b || void 0,
                  ...M,
                  children: K
                }
              )
            }
          ),
          b && /* @__PURE__ */ a("div", { role: "status", className: "absolute inset-0 flex items-center justify-center bg-default/80 z-20", children: /* @__PURE__ */ i("div", { className: "flex items-center ds-gap-8", children: [
            /* @__PURE__ */ a("div", { className: "width-20 height-20 border-2 border-state-primary border-t-transparent rounded-full animate-spin" }),
            /* @__PURE__ */ a("span", { className: "font-body size-sm text-subtle", children: "로딩 중..." })
          ] }) }),
          h && N && o > 0 && /* @__PURE__ */ i(
            "div",
            {
              className: d(
                "flex items-center padding-y-8 padding-x-10 border-t-default",
                r === "left" && "justify-start",
                r === "center" && "justify-center",
                r === "right" && p && "justify-between",
                r === "right" && !p && "justify-end"
              ),
              children: [
                r === "right" && p && /* @__PURE__ */ i("div", { className: "flex items-center ds-gap-8", children: [
                  w && /* @__PURE__ */ a("span", { className: "font-body size-sm text-subtle", children: R() }),
                  S
                ] }),
                r === "center" && g,
                r === "left" && /* @__PURE__ */ i(q, { children: [
                  g,
                  p && /* @__PURE__ */ i("div", { className: "flex items-center ds-gap-8 ml-auto", children: [
                    w && /* @__PURE__ */ a("span", { className: "font-body size-sm text-subtle", children: R() }),
                    S
                  ] })
                ] }),
                r === "right" && g
              ]
            }
          )
        ]
      }
    );
  }
);
U.displayName = "Table";
const V = l.forwardRef(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a(
    "thead",
    {
      ref: t,
      className: d(s),
      ...e
    }
  )
);
V.displayName = "TableHeader";
const W = l.forwardRef(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a(
    "tbody",
    {
      ref: t,
      className: d(s),
      ...e
    }
  )
);
W.displayName = "TableBody";
const X = l.forwardRef(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a(
    "tfoot",
    {
      ref: t,
      className: d(
        "border-t-default bg-muted/50 font-medium [&>tr]:last:border-b-0",
        s
      ),
      ...e
    }
  )
);
X.displayName = "TableFooter";
const Y = l.forwardRef(
  ({ className: s, selected: e, ...t }, n) => /* @__PURE__ */ a(
    "tr",
    {
      ref: n,
      className: d(
        "border-b-default transition-colors",
        e && "bg-basic-gray-alpha-4",
        s
      ),
      "aria-selected": e || void 0,
      "data-state": e ? "selected" : void 0,
      ...t
    }
  )
);
Y.displayName = "TableRow";
const Z = l.forwardRef(
  ({ className: s, sortable: e, sortDirection: t, children: n, onClick: x, ...f }, b) => {
    const h = () => t ? t === "asc" ? "arrow-up-s" : "arrow-down-s" : "expand-up-down", c = (o) => {
      e && (o.key === "Enter" || o.key === " ") && (o.preventDefault(), o.currentTarget.click());
    };
    return /* @__PURE__ */ a(
      "th",
      {
        ref: b,
        scope: "col",
        className: d(
          "height-32 padding-x-10 text-left align-middle bg-default",
          "font-body size-xs line-height-leading-4 font-medium text-subtle",
          "[&:has([role=checkbox])]:[padding-right:0] [&>[role=checkbox]]:translate-y-[2px]",
          e && "cursor-pointer select-none",
          s
        ),
        onClick: e ? x : void 0,
        onKeyDown: e ? c : void 0,
        tabIndex: e ? 0 : void 0,
        "aria-sort": t === "asc" ? "ascending" : t === "desc" ? "descending" : void 0,
        ...f,
        children: e ? /* @__PURE__ */ i("div", { className: "flex items-center ds-gap-4", children: [
          /* @__PURE__ */ a("span", { children: n }),
          /* @__PURE__ */ a(
            J,
            {
              iconType: ["arrows", h()],
              size: 12,
              className: d("shrink-0", t ? "text-subtle" : "text-hint")
            }
          )
        ] }) : n
      }
    );
  }
);
Z.displayName = "TableHead";
const D = l.forwardRef(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a(
    "td",
    {
      ref: t,
      className: d(
        "height-32 padding-x-10 align-middle",
        "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-default",
        "[&:has([role=checkbox])]:[padding-right:0] [&>[role=checkbox]]:translate-y-[2px]",
        s
      ),
      ...e
    }
  )
);
D.displayName = "TableCell";
const P = l.forwardRef(
  ({ className: s, ...e }, t) => /* @__PURE__ */ a(
    "caption",
    {
      ref: t,
      className: d("margin-t-16 size-sm font-body text-subtle", s),
      ...e
    }
  )
);
P.displayName = "TableCaption";
export {
  U as Table,
  W as TableBody,
  P as TableCaption,
  D as TableCell,
  X as TableFooter,
  Z as TableHead,
  V as TableHeader,
  Y as TableRow
};
