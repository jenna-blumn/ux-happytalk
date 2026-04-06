"use client";
import { jsxs as j, jsx as l } from "react/jsx-runtime";
import { forwardRef as B, useMemo as c } from "react";
import { Slot as E } from "@radix-ui/react-slot";
import { cva as I } from "class-variance-authority";
import { getPixelValue as N } from "../../lib/css-utils.mjs";
import { cn as u } from "../../utils/cn.mjs";
import { Icon as T } from "../icons/Icon/Icon.mjs";
const F = I(
  "inline-flex items-center justify-center font-medium cursor-pointer transition-all duration-200 focus:outline-none",
  {
    variants: {
      size: {
        xs: "size-xs line-height-leading-4 ds-gap-4 padding-x-6 padding-y-4 letter-spacing-tracking-tight",
        md: "size-sm line-height-leading-5 ds-gap-4 padding-x-8 padding-y-4 letter-spacing-tracking-tight",
        lg: "size-sm line-height-leading-5 ds-gap-4 padding-x-10 padding-y-6 letter-spacing-tracking-tight"
      },
      shape: {
        rounded: "rounded-sm",
        pill: "rounded-full"
      }
    },
    defaultVariants: {
      size: "md",
      shape: "rounded"
    }
  }
), o = {
  unselected: {
    bg: "bg-input",
    border: "border-dashed [border-width:1px] [border-color:var(--border-darker)]",
    text: "text-subtle",
    iconColor: "var(--icon-default-muted)"
  },
  selected: {
    bg: "bg-input",
    border: "border-default",
    text: "text-subtle",
    iconColor: "var(--icon-default-muted)"
  },
  hover: { bg: "hover:bg-state-soft-hover" },
  active: { bg: "active:bg-state-soft-press" },
  focus: { ring: "focus-visible:shadow-component-focus" }
}, a = {
  unselected: "bg-state-disabled border-dashed [border-width:1px] [border-color:var(--border-default)] text-hint cursor-not-allowed",
  selected: "bg-state-disabled border-default text-hint cursor-not-allowed",
  iconColor: "var(--icon-default-disabled)"
}, K = B(({
  size: g = "md",
  shape: f = "rounded",
  selected: r = !1,
  disabled: t = !1,
  label: p,
  icon: m = ["system", "filter"],
  asChild: n = !1,
  width: i,
  className: b,
  style: h,
  ...s
}, v) => {
  const x = n ? E : "button", y = 16, k = i !== void 0 && i !== "" ? { width: N(i) } : void 0, d = {
    ...h || {},
    ...k || {}
  }, w = c(() => {
    if (t)
      return r ? a.selected : a.unselected;
    const e = r ? o.selected : o.unselected;
    return u(
      e.bg,
      e.border,
      e.text,
      o.hover.bg,
      o.active.bg,
      o.focus.ring
    );
  }, [t, r]), C = c(() => t ? a.iconColor : (r ? o.selected : o.unselected).iconColor, [t, r]), S = u(
    F({ size: g, shape: f }),
    w,
    !t && "shadow-components-default",
    b
  ), z = (e) => {
    if (t) {
      e.preventDefault();
      return;
    }
    s.onClick?.(e);
  }, D = (e) => {
    if (t && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      return;
    }
    s.onKeyDown?.(e);
  };
  return /* @__PURE__ */ j(
    x,
    {
      ref: v,
      type: n ? void 0 : "button",
      disabled: n ? void 0 : t,
      "aria-disabled": t || void 0,
      "aria-pressed": r,
      tabIndex: n && t ? -1 : void 0,
      className: S,
      style: Object.keys(d).length > 0 ? d : void 0,
      ...s,
      onClick: z,
      onKeyDown: D,
      children: [
        /* @__PURE__ */ l(
          T,
          {
            iconType: m,
            size: y,
            color: C
          }
        ),
        /* @__PURE__ */ l("span", { children: p })
      ]
    }
  );
});
K.displayName = "FilterButton";
export {
  K as FilterButton,
  F as filterButtonVariants
};
