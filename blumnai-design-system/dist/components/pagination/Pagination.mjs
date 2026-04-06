"use client";
import { jsxs as p, Fragment as I, jsx as s } from "react/jsx-runtime";
import { forwardRef as b, useState as T, useCallback as _, useMemo as q } from "react";
import { AlertDialog as V, AlertDialogContent as C, AlertDialogHeader as H, AlertDialogTitle as a, AlertDialogDescription as P, AlertDialogFooter as g, AlertDialogCancel as ii, AlertDialogAction as ri } from "../dialog/AlertDialog.mjs";
import { Button as j } from "../button/Button.mjs";
import { PaginationItem as y } from "./components/PaginationItem.mjs";
import { PaginationNav as E } from "./components/PaginationNav.mjs";
import { PaginationEllipsis as ni } from "./components/PaginationEllipsis.mjs";
import { cn as G } from "../../utils/cn.mjs";
function li(f, i, l = 7) {
  const n = [];
  if (i <= l) {
    for (let r = 1; r <= i; r++)
      n.push(r);
    return n;
  }
  const c = l - 3, t = l - 4, o = Math.floor(t / 2), h = f <= c, v = f >= i - c + 1;
  if (h) {
    for (let r = 1; r <= l - 2; r++)
      n.push(r);
    n.push("ellipsis-end"), n.push(i);
  } else if (v) {
    n.push(1), n.push("ellipsis-start");
    for (let r = i - (l - 3); r <= i; r++)
      n.push(r);
  } else {
    n.push(1), n.push("ellipsis-start");
    for (let r = f - o; r <= f + o; r++)
      n.push(r);
    n.push("ellipsis-end"), n.push(i);
  }
  return n;
}
function ei(f, i, l, n) {
  const c = (d, M) => {
    const k = [];
    for (let A = d; A <= M; A++) k.push(A);
    return k;
  }, t = c(1, Math.min(n, i)), o = c(Math.max(i - n + 1, n + 1), i), h = Math.max(
    Math.min(f - l, i - n - l * 2 - 1),
    n + 2
  ), v = Math.min(
    Math.max(f + l, n + l * 2 + 2),
    o.length > 0 ? o[0] - 2 : i - 1
  ), r = [];
  if (r.push(...t), h > n + 2 ? r.push("ellipsis-start") : n + 1 < i - n && r.push(n + 1), r.push(...c(h, v)), v < i - n - 1)
    r.push("ellipsis-end");
  else if (i - n > n) {
    const d = i - n;
    r.includes(d) || r.push(d);
  }
  return r.push(...o.filter((d) => !r.includes(d))), r;
}
function ci(f, i, l) {
  if (!l || l < 1 || i <= l)
    return Array.from({ length: i }, (o, h) => h + 1);
  const n = Math.floor(l / 2);
  let c = f - n, t = c + l - 1;
  return c < 1 && (c = 1, t = l), t > i && (t = i, c = Math.max(1, i - l + 1)), Array.from({ length: t - c + 1 }, (o, h) => c + h);
}
const si = b(
  ({
    className: f,
    page: i,
    totalPages: l,
    onPageChange: n,
    variant: c = "numbered",
    size: t = "lg",
    maxVisiblePages: o = 7,
    siblingCount: h,
    boundaryCount: v = 1,
    disabled: r = !1,
    hideNavButtons: d = !1,
    showFirstLastButtons: M = !1,
    maxDots: k,
    ellipsisJump: A = 5,
    pageChangeConfirmMessage: S,
    getPageHref: u,
    total: w,
    resultTextFormatter: F,
    prevText: K = "Prev",
    nextText: L = "Next",
    ...Q
  }, U) => {
    const [W, D] = T(!1), [$, x] = T(null), m = _(
      (e) => {
        r || e < 1 || e > l || e !== i && (S ? (x(e), D(!0)) : n(e));
      },
      [r, l, i, S, n]
    ), X = _(() => {
      $ !== null && (n($), x(null)), D(!1);
    }, [$, n]), Y = _(() => {
      x(null), D(!1);
    }, []), Z = q(() => h !== void 0 ? ei(i, l, h, v) : li(i, l, o), [i, l, o, h, v]), B = q(
      () => ci(i, l, k),
      [i, l, k]
    ), N = i > 1, O = i < l;
    if (l <= 0)
      return null;
    const R = (e) => e === "first" ? ["arrows", "arrow-left-double"] : ["arrows", "arrow-right-double"];
    return /* @__PURE__ */ p(I, { children: [
      /* @__PURE__ */ p(
        "nav",
        {
          ref: U,
          role: "navigation",
          "aria-label": "페이지네이션",
          className: G(
            "flex items-center",
            c === "simple" ? "justify-between" : "ds-gap-12",
            f
          ),
          ...Q,
          children: [
            /* @__PURE__ */ s("span", { className: "sr-only", "aria-live": "polite", "aria-atomic": "true", children: `${i} / ${l} 페이지` }),
            c === "simple" ? /* @__PURE__ */ p(I, { children: [
              /* @__PURE__ */ s("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: F ? F(i, w ?? 0) : `${i} of ${w ?? 0} results` }),
              /* @__PURE__ */ p("div", { className: "flex items-center ds-gap-8", children: [
                /* @__PURE__ */ s(
                  j,
                  {
                    buttonStyle: "soft",
                    size: "sm",
                    disabled: !N || r,
                    onClick: () => m(i - 1),
                    children: K
                  }
                ),
                /* @__PURE__ */ s(
                  j,
                  {
                    buttonStyle: "soft",
                    size: "sm",
                    disabled: !O || r,
                    onClick: () => m(i + 1),
                    children: L
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ p(I, { children: [
              M && c === "numbered" && /* @__PURE__ */ s(
                E,
                {
                  direction: "prev",
                  size: t,
                  disabled: r || !N,
                  onClick: () => m(1),
                  "aria-label": "첫 페이지",
                  iconOverride: R("first")
                }
              ),
              !d && /* @__PURE__ */ s(
                E,
                {
                  direction: "prev",
                  size: t,
                  disabled: r || !N,
                  onClick: () => m(i - 1),
                  href: u && N ? u(i - 1) : void 0
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: G(
                    "flex items-center",
                    c === "numbered" ? "ds-gap-4" : "ds-gap-8"
                  ),
                  children: c === "numbered" ? Z.map(
                    (e) => typeof e == "string" ? /* @__PURE__ */ s(
                      ni,
                      {
                        size: t,
                        onClick: A ? () => {
                          const J = e === "ellipsis-start" ? -A : A, z = Math.max(1, Math.min(l, i + J));
                          m(z);
                        } : void 0
                      },
                      e
                    ) : /* @__PURE__ */ s(
                      y,
                      {
                        variant: "numbered",
                        size: t,
                        isActive: e === i,
                        disabled: r,
                        onClick: () => m(e),
                        href: u ? u(e) : void 0,
                        children: e
                      },
                      e
                    )
                  ) : B.map((e) => /* @__PURE__ */ s(
                    y,
                    {
                      variant: "dot",
                      size: t,
                      isActive: e === i,
                      disabled: r,
                      onClick: () => m(e),
                      href: u ? u(e) : void 0,
                      children: e
                    },
                    e
                  ))
                }
              ),
              !d && /* @__PURE__ */ s(
                E,
                {
                  direction: "next",
                  size: t,
                  disabled: r || !O,
                  onClick: () => m(i + 1),
                  href: u && O ? u(i + 1) : void 0
                }
              ),
              M && c === "numbered" && /* @__PURE__ */ s(
                E,
                {
                  direction: "next",
                  size: t,
                  disabled: r || !O,
                  onClick: () => m(l),
                  "aria-label": "마지막 페이지",
                  iconOverride: R("last")
                }
              )
            ] })
          ]
        }
      ),
      S && /* @__PURE__ */ s(V, { open: W, onOpenChange: D, children: /* @__PURE__ */ p(C, { children: [
        /* @__PURE__ */ p(H, { children: [
          /* @__PURE__ */ s(a, { children: "페이지 이동" }),
          /* @__PURE__ */ s(P, { children: S })
        ] }),
        /* @__PURE__ */ p(g, { children: [
          /* @__PURE__ */ s(ii, { children: /* @__PURE__ */ s(j, { buttonStyle: "secondary", onClick: Y, children: "취소" }) }),
          /* @__PURE__ */ s(ri, { children: /* @__PURE__ */ s(j, { buttonStyle: "primary", onClick: X, children: "확인" }) })
        ] })
      ] }) })
    ] });
  }
);
si.displayName = "Pagination";
export {
  si as Pagination
};
