"use client";
import { jsxs as S, jsx as t } from "react/jsx-runtime";
import { forwardRef as k, useState as g, useId as z, useCallback as M, useMemo as a } from "react";
import { ArrowDownIcon as T } from "../../icons/Icon/icons/arrows.mjs";
import { cn as r } from "../../../utils/cn.mjs";
import { STYLE_OPEN_CLASSES as Y, STYLE_HOVER_CLASSES as B, BOX_SHADOW as D, STYLE_BASE_CLASSES as R } from "../../../constants/accordion/AccordionItem/AccordionItem.constants.mjs";
const $ = k(({
  style: o = "default",
  isOpen: l,
  onToggle: s,
  header: v,
  children: w,
  disabled: n = !1,
  defaultIsOpen: x,
  headingLevel: N = 3,
  className: d,
  headerProps: I,
  ...C
}, E) => {
  const [A, L] = g(x ?? !1), [u, f] = g(!1), c = l !== void 0, e = c ? l : A, m = z(), p = `accordion-button-${m}`, h = `accordion-panel-${m}`, _ = M(() => {
    if (n) return;
    const i = !e;
    c || L(i), s?.(i);
  }, [n, c, e, s]), b = a(() => {
    const i = u && !e && !n, j = o === "default";
    return r(
      "w-full flex flex-col transition-all duration-200 ease-in-out",
      R[o],
      j && D,
      i && B[o],
      e && Y[o],
      d
    );
  }, [o, e, u, n, d]), y = a(
    () => r(
      "flex items-center justify-between w-full ds-gap-2 cursor-pointer select-none outline-none border-none bg-transparent padding-0",
      "text-default transition-colors duration-200 ease-in-out",
      "focus-visible:shadow-component-misc-focus focus-visible:rounded-sm",
      !n && "hover:text-default",
      n && "cursor-not-allowed opacity-50"
    ),
    [n]
  ), O = a(
    () => r(
      "flex items-center justify-center width-24 height-24 shrink-0 icon-default-muted",
      "transition-all duration-200 ease-in-out",
      e && "rotate-180"
    ),
    [e]
  ), H = a(
    () => r(
      "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
      e ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
    ),
    [e]
  );
  return /* @__PURE__ */ S(
    "div",
    {
      ref: E,
      className: b,
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      ...C,
      children: [
        /* @__PURE__ */ t("div", { role: "heading", "aria-level": N, children: /* @__PURE__ */ S(
          "button",
          {
            id: p,
            type: "button",
            className: y,
            onClick: _,
            disabled: n,
            "aria-expanded": e,
            "aria-controls": h,
            "aria-disabled": n,
            ...I,
            children: [
              /* @__PURE__ */ t("span", { className: "flex-1 size-md font-medium line-height-leading-6 text-left text-default", children: v }),
              /* @__PURE__ */ t("span", { className: O, children: /* @__PURE__ */ t(T, { size: 20 }) })
            ]
          }
        ) }),
        /* @__PURE__ */ t("div", { id: h, role: "region", "aria-labelledby": p, className: H, "aria-hidden": !e, ...!e && { inert: !0 }, children: /* @__PURE__ */ t("div", { className: "overflow-hidden", children: /* @__PURE__ */ t("div", { className: "padding-y-8 size-md font-normal line-height-leading-6 text-subtle", children: w }) }) })
      ]
    }
  );
});
$.displayName = "AccordionItem";
export {
  $ as AccordionItem
};
