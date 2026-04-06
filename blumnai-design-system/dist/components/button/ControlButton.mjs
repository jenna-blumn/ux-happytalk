"use client";
import { jsx as a } from "react/jsx-runtime";
import { forwardRef as g, useMemo as w } from "react";
import { Slot as C } from "@radix-ui/react-slot";
import { cva as b } from "class-variance-authority";
import { cn as y } from "../../utils/cn.mjs";
import { Icon as I } from "../icons/Icon/Icon.mjs";
const D = b(
  "inline-flex items-center justify-center transition-all duration-200 focus:outline-none",
  {
    variants: {
      buttonStyle: {
        default: "bg-transparent hover:bg-state-ghost-hover active:bg-state-ghost-press focus-visible:shadow-component-misc-focus",
        inverted: "bg-transparent hover:bg-white/[0.08] active:bg-white/[0.15] focus-visible:shadow-component-misc-focus"
      },
      size: {
        sm: "width-16 height-16",
        md: "width-20 height-20",
        lg: "width-24 height-24"
      },
      shape: {
        rounded: "rounded-xs",
        circle: "rounded-full"
      }
    },
    defaultVariants: {
      buttonStyle: "default",
      size: "md",
      shape: "rounded"
    }
  }
), k = {
  sm: 14,
  md: 16,
  lg: 16
}, c = {
  default: {
    iconColor: "var(--icon-default-muted)",
    disabledIconColor: "var(--icon-default-disabled)"
  },
  inverted: {
    iconColor: "var(--icon-white-default)",
    disabledIconColor: "var(--icon-white-disabled)"
  }
}, S = "bg-transparent cursor-not-allowed", x = g(({
  buttonStyle: n = "default",
  size: i = "md",
  shape: l = "rounded",
  icon: s,
  disabled: t = !1,
  asChild: e = !1,
  className: d,
  "aria-label": u,
  ...r
}, f) => {
  const m = e ? C : "button", h = k[i] ?? 16, v = y(
    D({ ...t ? {} : { buttonStyle: n }, size: i, shape: l }),
    t && S,
    d
  ), p = w(() => {
    const o = c[n] ?? c.default;
    return t ? o.disabledIconColor : o.iconColor;
  }, [n, t]);
  return /* @__PURE__ */ a(
    m,
    {
      ref: f,
      type: e ? void 0 : "button",
      disabled: e ? void 0 : t,
      "aria-disabled": t || void 0,
      tabIndex: e && t ? -1 : void 0,
      className: v,
      "aria-label": u,
      ...r,
      onClick: (o) => {
        if (t) {
          o.preventDefault();
          return;
        }
        r.onClick?.(o);
      },
      onKeyDown: (o) => {
        if (t && (o.key === "Enter" || o.key === " ")) {
          o.preventDefault();
          return;
        }
        r.onKeyDown?.(o);
      },
      children: /* @__PURE__ */ a(
        I,
        {
          iconType: s,
          size: h,
          color: p
        }
      )
    }
  );
});
x.displayName = "ControlButton";
export {
  x as ControlButton,
  D as controlButtonVariants
};
