"use client";
import { jsx as c, jsxs as C } from "react/jsx-runtime";
import { useState as k, useRef as T, useEffect as w, useCallback as l } from "react";
import { TooltipTrigger as v } from "../../tooltip/Tooltip/TooltipTrigger.mjs";
import { useTableTooltipOptional as M } from "../components/useTableTooltip.mjs";
import { useCellAlign as S } from "../components/useCellAlign.mjs";
import { cn as f } from "../../../utils/cn.mjs";
import { Icon as z } from "../../icons/Icon/Icon.mjs";
function O({
  value: o,
  tooltip: e = !1,
  copyable: p = !1,
  className: m
}) {
  const [s, d] = k(!1), n = o ?? "-", i = T(null), t = M(), h = S(), r = T(null);
  w(() => () => {
    r.current && clearTimeout(r.current), t?.hideTooltip();
  }, []);
  const y = l(async () => {
    if (o != null)
      try {
        await navigator.clipboard.writeText(String(o)), d(!0), setTimeout(() => d(!1), 2e3);
      } catch {
      }
  }, [o]), g = l(() => typeof e == "boolean" ? n : e, [e, n]), x = l(() => {
    !e || !t || !i.current || (r.current = setTimeout(() => {
      i.current && t.showTooltip(i.current, g());
    }, 200));
  }, [e, t, g]), b = l(() => {
    r.current && (clearTimeout(r.current), r.current = null), t?.hideTooltip();
  }, [t]), a = e && t, u = /* @__PURE__ */ c(
    "span",
    {
      ref: i,
      className: f(
        "block w-full min-w-[0px] truncate font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-default",
        h === "center" && "text-center",
        h === "right" && "text-right",
        m
      ),
      onMouseEnter: a ? x : void 0,
      onMouseLeave: a ? b : void 0,
      children: n
    }
  );
  return !e && !p ? u : p ? /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      onClick: y,
      "aria-label": `Copy ${n}`,
      className: f(
        "inline-flex items-center ds-gap-4 truncate max-w-full",
        "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-default",
        "hover:text-state-primary cursor-pointer",
        m
      ),
      children: [
        /* @__PURE__ */ c("span", { className: "truncate", children: n }),
        /* @__PURE__ */ c(
          z,
          {
            iconType: ["document", s ? "file-check" : "file-copy"],
            size: 12,
            color: s ? "success" : "default-subtle",
            className: f(
              "shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
              s && "opacity-100"
            )
          }
        )
      ]
    }
  ) : a ? u : /* @__PURE__ */ c(
    v,
    {
      content: typeof e == "boolean" ? String(n) : e,
      delay: 200,
      maxWidth: 600,
      children: u
    }
  );
}
export {
  O as CellText
};
