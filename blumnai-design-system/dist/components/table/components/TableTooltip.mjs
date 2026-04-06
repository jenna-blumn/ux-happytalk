"use client";
import { jsxs as T, jsx as s } from "react/jsx-runtime";
import { useState as o, useCallback as i, useEffect as g } from "react";
import { createPortal as b } from "react-dom";
import { useFloating as E, autoUpdate as S, offset as y, flip as C, shift as P } from "@floating-ui/react";
import { Tooltip as j } from "../../tooltip/Tooltip/Tooltip.mjs";
import { TableTooltipContext as F } from "./TableTooltipContext.mjs";
function M({ children: c }) {
  const [e, r] = o(!1), [a, d] = o(null), [n, u] = o(null), [f, p] = o(null), { floatingStyles: m } = E({
    open: e && n !== null,
    placement: "top",
    middleware: [y(8), C(), P({ padding: 8 })],
    whileElementsMounted: S,
    elements: {
      reference: n,
      floating: f
    }
  }), h = i(
    (t, x) => {
      u(t), d(x), r(!0);
    },
    []
  ), l = i(() => {
    r(!1);
  }, []);
  g(() => {
    const t = () => {
      e && l();
    };
    return window.addEventListener("scroll", t, !0), () => window.removeEventListener("scroll", t, !0);
  }, [e, l]);
  const w = {
    showTooltip: h,
    hideTooltip: l
  }, v = e && n !== null;
  return /* @__PURE__ */ T(F.Provider, { value: w, children: [
    c,
    v && b(
      /* @__PURE__ */ s(
        "div",
        {
          ref: p,
          style: { ...m, zIndex: 50 },
          children: /* @__PURE__ */ s(j, { maxWidth: 600, children: a })
        }
      ),
      document.body
    )
  ] });
}
export {
  M as TableTooltipProvider
};
