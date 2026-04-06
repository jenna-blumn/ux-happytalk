"use client";
import { jsx as t, jsxs as C, Fragment as z } from "react/jsx-runtime";
import * as i from "react";
import * as c from "@radix-ui/react-tabs";
import { ScrollArea as j } from "../scroll-area/ScrollArea.mjs";
import { parseIconTypeWithFill as I } from "../icons/Icon/Icon.types.mjs";
import { cn as h } from "../../utils/cn.mjs";
import { Icon as k } from "../icons/Icon/Icon.mjs";
const L = i.createContext({
  variant: "segmented",
  shape: "rounded",
  size: "sm",
  type: "default"
}), P = () => i.useContext(L), q = c.Root, G = {
  sm: "ds-gap-12",
  lg: "ds-gap-16"
}, B = i.forwardRef(({ variant: r = "segmented", shape: n = "rounded", size: s = "sm", type: l = "default", scrollable: u = !1, activeColor: g, className: b, children: p, ...x }, w) => {
  const v = i.useMemo(() => ({ variant: r, shape: n, size: s, type: l, activeColor: g }), [r, n, s, l, g]), o = i.useRef(null), [N, _] = i.useState(!1), [S, f] = i.useState(!1), m = i.useCallback(() => {
    const a = o.current;
    a && (_(a.scrollLeft > 0), f(a.scrollLeft + a.clientWidth < a.scrollWidth - 1));
  }, []);
  i.useEffect(() => {
    if (!u) return;
    const a = o.current;
    if (!a) return;
    m();
    const e = new ResizeObserver(m);
    return e.observe(a), () => {
      e.disconnect();
    };
  }, [u, m]);
  const d = i.useCallback((a) => {
    const e = o.current;
    e && e.scrollBy({ left: a * 120, behavior: "smooth" });
  }, []), T = n === "pill" ? "rounded-full" : "rounded-md", y = /* @__PURE__ */ t(
    c.List,
    {
      ref: w,
      className: h(
        "inline-flex items-center",
        r === "pill" && "ds-gap-8",
        r === "segmented" && ["ds-gap-2 padding-2", T, "bg-state-soft"],
        r === "underline" && ["border-b-default", G[s]],
        l === "fixed" && "w-full",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
        r === "underline" && "data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r-default",
        u && "flex-nowrap",
        b
      ),
      ...x,
      children: p
    }
  );
  return u ? /* @__PURE__ */ t(L.Provider, { value: v, children: /* @__PURE__ */ C("div", { className: "relative flex items-center", children: [
    N && /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => d(-1),
        "aria-label": "이전 탭",
        className: "flex-shrink-0 flex items-center justify-center width-24 height-24 rounded-sm bg-default border-default cursor-pointer hover:bg-subtle transition-colors z-[1]",
        children: /* @__PURE__ */ t(k, { iconType: ["arrows", "arrow-left-s"], size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      j,
      {
        orientation: "horizontal",
        viewportRef: o,
        onScrollPositionChange: m,
        className: "flex-1 min-w-0",
        children: y
      }
    ),
    S && /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => d(1),
        "aria-label": "다음 탭",
        className: "flex-shrink-0 flex items-center justify-center width-24 height-24 rounded-sm bg-default border-default cursor-pointer hover:bg-subtle transition-colors z-[1]",
        children: /* @__PURE__ */ t(k, { iconType: ["arrows", "arrow-right-s"], size: 14 })
      }
    )
  ] }) }) : /* @__PURE__ */ t(L.Provider, { value: v, children: y });
});
B.displayName = c.List.displayName;
const D = "height-28 padding-x-8 padding-y-4 ds-gap-4", M = {
  sm: "height-40 padding-y-6 ds-gap-4",
  lg: "height-48 padding-y-6 ds-gap-4"
}, W = {
  sm: 14,
  lg: 16
}, A = i.forwardRef(({ leadIcon: r, tailIcon: n, badge: s, closable: l = !1, onClose: u, className: g, children: b, value: p, style: x, ...w }, v) => {
  const { variant: o, shape: N, size: _, type: S, activeColor: f } = P(), m = o === "underline" ? W[_] : 14, d = (e) => {
    if (!e) return null;
    if (Array.isArray(e) && e.length >= 2 && typeof e[0] == "string" && typeof e[1] == "string") {
      const { iconType: E, isFill: R } = I(e);
      return /* @__PURE__ */ t(k, { iconType: E, isFill: R, size: m, className: "shrink-0" });
    }
    return i.isValidElement(e) ? /* @__PURE__ */ t("span", { className: "inline-flex items-center shrink-0", children: e }) : null;
  }, T = (e) => {
    e.stopPropagation(), e.preventDefault(), p && u?.(p);
  }, y = N === "pill" ? "rounded-full" : "rounded-sm", a = l ? /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: T,
      "aria-label": "탭 닫기",
      className: "inline-flex items-center justify-center width-14 height-14 rounded-xs text-muted hover:text-default transition-colors cursor-pointer shrink-0",
      children: /* @__PURE__ */ t("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ t("path", { d: "M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
    }
  ) : null;
  return /* @__PURE__ */ t(
    c.Trigger,
    {
      ref: v,
      value: p,
      style: f ? { ...x, "--tabs-active-color": f } : x,
      className: h(
        "inline-flex items-center justify-center whitespace-nowrap",
        "font-body size-sm font-medium line-height-leading-5",
        "transition-all duration-150",
        "focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        S === "fixed" && "flex-1",
        (o === "pill" || o === "segmented") && [
          D,
          y,
          "border-solid border-transparent",
          "border-[1px]",
          "text-muted",
          "hover:text-subtle",
          "focus-visible:[box-shadow:0_0_0_2px_var(--border-highlight-accent)]",
          "data-[state=active]:![color:var(--text-default)]",
          "data-[state=active]:[border-color:var(--border-darker)]",
          "data-[state=active]:[background-color:var(--bg-state-secondary)]",
          "data-[state=active]:[box-shadow:0_-1px_0_0_rgba(0,0,0,0.08)_inset,0_1px_2px_0_rgba(0,0,0,0.05)]",
          "data-[state=active]:focus-visible:[box-shadow:0_-1px_0_0_rgba(0,0,0,0.08)_inset,0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_2px_var(--border-highlight-accent)]"
        ],
        o === "underline" && [
          M[_],
          "group",
          "text-muted",
          "hover:text-subtle",
          "relative",
          "[margin-bottom:-1px]",
          "after:absolute after:bottom-0 after:left-0 after:right-0 after:[height:1.5px]",
          "after:bg-transparent",
          f ? "data-[state=active]:![color:var(--tabs-active-color)]" : "data-[state=active]:![color:var(--text-default)]",
          f ? "data-[state=active]:after:[background-color:var(--tabs-active-color)]" : "data-[state=active]:after:[background-color:var(--border-accent)]"
        ],
        g
      ),
      ...w,
      children: o === "underline" ? /* @__PURE__ */ C(
        "span",
        {
          className: h(
            "inline-flex items-center justify-center ds-gap-4",
            "height-28 padding-x-6 rounded-md",
            "group-focus-visible:[box-shadow:0_0_0_2px_var(--border-highlight-accent)]"
          ),
          children: [
            r && d(r),
            b,
            n && d(n),
            s !== void 0 && /* @__PURE__ */ t(
              "span",
              {
                className: h(
                  "inline-flex items-center justify-center",
                  "min-width-16 height-16 padding-x-4",
                  "size-xs font-medium rounded-full",
                  "bg-muted text-muted"
                ),
                children: s
              }
            ),
            a
          ]
        }
      ) : /* @__PURE__ */ C(z, { children: [
        r && d(r),
        b,
        n && d(n),
        s !== void 0 && /* @__PURE__ */ t(
          "span",
          {
            className: h(
              "inline-flex items-center justify-center",
              "min-width-16 height-16 padding-x-4",
              "size-xs font-medium rounded-full",
              "bg-muted text-muted"
            ),
            children: s
          }
        ),
        a
      ] })
    }
  );
});
A.displayName = c.Trigger.displayName;
const F = i.forwardRef(({ className: r, animated: n = !1, ...s }, l) => /* @__PURE__ */ t(
  c.Content,
  {
    ref: l,
    className: h(
      "margin-t-8",
      "focus-visible:outline-none focus-visible:shadow-component-misc-focus",
      n && [
        "data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-200",
        "motion-reduce:data-[state=active]:animate-none"
      ],
      r
    ),
    ...s
  }
));
F.displayName = c.Content.displayName;
export {
  q as Tabs,
  F as TabsContent,
  B as TabsList,
  A as TabsTrigger
};
