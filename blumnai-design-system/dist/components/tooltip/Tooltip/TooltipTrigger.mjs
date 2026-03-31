"use client";
import { jsxs as H, Fragment as J, jsx as p } from "react/jsx-runtime";
import { useState as h, useRef as d, useId as Q, useCallback as o, useEffect as V } from "react";
import { createPortal as W } from "react-dom";
import { useFloating as X, autoUpdate as Y, offset as Z, flip as _, shift as $ } from "@floating-ui/react";
import { Tooltip as ee } from "./Tooltip.mjs";
function te({
  children: E,
  content: s,
  badge: S,
  placement: w = "top",
  delay: a = 200,
  disabled: r = !1,
  maxWidth: x = 240,
  sideOffset: C = 8,
  alignOffset: F = 0,
  width: I,
  minWidth: R,
  open: g,
  onOpenChange: M
}) {
  const [k, A] = h(!1), [m, L] = h(null), [j, B] = h(null), e = d(null), c = d(null), v = Q(), T = g !== void 0, l = T ? g : k, t = o(
    (f) => {
      T ? M?.(f) : A(f);
    },
    [T, M]
  ), { floatingStyles: D } = X({
    open: l && m !== null,
    placement: w,
    middleware: [Z({ mainAxis: C, crossAxis: F }), _(), $({ padding: 8 })],
    whileElementsMounted: Y,
    elements: {
      reference: m,
      floating: j
    }
  }), u = o(() => {
    c.current && (clearTimeout(c.current), c.current = null);
  }, []), K = o(() => {
    r || (u(), e.current && clearTimeout(e.current), e.current = setTimeout(() => {
      t(!0);
    }, a));
  }, [r, a, t, u]), i = o(() => {
    u(), c.current = setTimeout(() => {
      t(!1);
    }, 100);
  }, [t, u]), N = o(() => {
    e.current && (clearTimeout(e.current), e.current = null), i();
  }, [i]), O = o(() => {
    r || (u(), e.current && clearTimeout(e.current), e.current = setTimeout(() => {
      t(!0);
    }, a));
  }, [r, a, t, u]), U = o(() => {
    e.current && (clearTimeout(e.current), e.current = null), i();
  }, [i]), z = o((f) => {
    f.key === "Escape" && l && t(!1);
  }, [l, t]), n = d(null), P = o(() => {
    r || (n.current && clearTimeout(n.current), n.current = setTimeout(() => {
      t(!0);
    }, 500));
  }, [r, t]), b = o(() => {
    n.current && (clearTimeout(n.current), n.current = null), l && t(!1);
  }, [l, t]), q = o(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []);
  V(() => () => {
    e.current && clearTimeout(e.current), c.current && clearTimeout(c.current), n.current && clearTimeout(n.current);
  }, []);
  const G = typeof s == "string" || typeof s == "number" ? /* @__PURE__ */ p(ee, { badge: S, maxWidth: x, width: I, minWidth: R, children: s }) : s, y = l && !r && m !== null;
  return /* @__PURE__ */ H(J, { children: [
    /* @__PURE__ */ p(
      "span",
      {
        ref: L,
        onMouseEnter: K,
        onMouseLeave: N,
        onFocus: O,
        onBlur: U,
        onKeyDown: z,
        onTouchStart: P,
        onTouchEnd: b,
        onTouchMove: q,
        "aria-describedby": y ? v : void 0,
        className: "block min-w-0",
        children: E
      }
    ),
    y && typeof document < "u" && W(
      /* @__PURE__ */ p(
        "div",
        {
          ref: B,
          id: v,
          role: "tooltip",
          style: {
            ...D,
            zIndex: 50,
            animation: "tooltip-enter 150ms ease-out"
          },
          onMouseEnter: u,
          onMouseLeave: i,
          children: G
        }
      ),
      document.body
    )
  ] });
}
te.displayName = "TooltipTrigger";
export {
  te as TooltipTrigger
};
