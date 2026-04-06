"use client";
import { jsxs as F, jsx as g } from "react/jsx-runtime";
import { forwardRef as I } from "react";
import { cn as h } from "../../../utils/cn.mjs";
import { parseIconTypeWithFill as O } from "../../icons/Icon/Icon.types.mjs";
import { Icon as H } from "../../icons/Icon/Icon.mjs";
const v = (t) => t === "neutral" ? "bg-badge-gray" : `bg-badge-${t}`, c = (t) => t === "neutral" ? "bg-basic-gray-subtle" : `bg-basic-${t}-subtle`, R = (t) => t === "neutral" ? "text-subtle" : `text-basic-${t}-strong`, W = I(
  ({
    label: t,
    icon: u,
    variant: f = "default",
    style: l = "default",
    shape: m = "rounded",
    size: i = "md",
    selected: n = !1,
    disabled: a = !1,
    color: s,
    onToggle: y,
    className: S,
    onClick: z,
    ...p
  }, C) => {
    const k = (d) => {
      y?.(!n), z?.(d);
    }, r = f === "iconOnly", b = {
      sm: {
        padding: r ? "min-height-24 min-width-24" : "padding-x-6 padding-y-4",
        textSize: "font-body size-xs line-height-leading-4",
        iconSize: 16
      },
      md: {
        padding: r ? "min-height-28 min-width-28" : "padding-x-8 padding-y-4",
        textSize: "font-body size-sm line-height-leading-5",
        iconSize: 16
      },
      lg: {
        padding: r ? "min-height-32 min-width-32" : "padding-x-10 padding-y-6",
        textSize: "font-body size-sm line-height-leading-5",
        iconSize: r ? 20 : 16
      }
    }[i], e = s ? R(s) : "", w = (s ? {
      default: { base: v(s), hover: "", press: "", text: e, icon: e, border: "border-darker" },
      soft: { base: v(s), hover: "", press: "", text: e, icon: e, border: "" },
      ghost: { base: "bg-state-ghost", hover: "hover:bg-state-ghost-hover", press: "active:bg-state-ghost-press", text: e, icon: e, border: "" },
      ghostMuted: { base: "bg-state-ghost", hover: "hover:bg-state-ghost-hover", press: "active:bg-state-ghost-press", text: e, icon: e, border: "" }
    } : {
      default: {
        base: "bg-state-secondary",
        hover: "hover:bg-state-secondary-hover",
        press: "active:bg-state-secondary-press",
        text: "text-muted group-hover-text-subtle",
        icon: "icon-default-muted group-hover-icon-default-subtle",
        border: "border-darker"
      },
      soft: {
        base: "bg-state-soft",
        hover: "hover:bg-state-soft-hover",
        press: "active:bg-state-soft-press",
        text: "text-muted group-hover-text-subtle",
        icon: "icon-default-muted group-hover-icon-default-subtle",
        border: ""
      },
      ghost: {
        base: "bg-state-ghost",
        hover: "hover:bg-state-ghost-hover",
        press: "active:bg-state-ghost-press",
        text: "text-muted group-hover-text-subtle",
        icon: "icon-default-muted group-hover-icon-default-subtle",
        border: ""
      },
      ghostMuted: {
        base: "bg-state-ghost",
        hover: "hover:bg-state-ghost-hover",
        press: "active:bg-state-ghost-press",
        text: "text-muted group-hover-text-subtle",
        icon: "icon-default-muted group-hover-icon-default-subtle",
        border: ""
      }
    })[l], N = s ? {
      default: { base: c(s), hover: "", press: "", text: e, icon: e, border: "border-darker" },
      soft: { base: c(s), hover: "", press: "", text: e, icon: e, border: "" },
      ghost: { base: c(s), hover: "", press: "", text: e, icon: e, border: "" },
      ghostMuted: { base: "bg-state-soft", hover: "hover:bg-state-soft-hover", press: "active:bg-state-soft-press", text: e, icon: e, border: "" }
    } : {
      default: { base: "bg-badge-blue", hover: "", press: "", text: "text-basic-blue-strong", icon: "text-basic-blue-accent", border: "border-darker" },
      soft: { base: "bg-badge-blue", hover: "", press: "", text: "text-basic-blue-strong", icon: "text-basic-blue-accent", border: "" },
      ghost: { base: "bg-badge-blue", hover: "", press: "", text: "text-basic-blue-strong", icon: "text-basic-blue-accent", border: "" },
      ghostMuted: { base: "bg-state-soft", hover: "hover:bg-state-soft-hover", press: "active:bg-state-soft-press", text: "text-basic-blue-strong", icon: "text-basic-blue-accent", border: "" }
    }, x = n ? N[l] : null, $ = {
      rounded: "rounded-sm",
      pill: "rounded-full"
    }, j = "focus-ring", o = n && x ? x : w, M = i === "sm" ? "height-24" : i === "md" ? "height-28" : "height-32", B = h(
      "inline-flex items-center justify-center ds-gap-4",
      "box-border",
      a ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      "select-none group",
      "transition-colors duration-150",
      b.padding,
      M,
      !r && "min-width-32",
      o.base,
      o.border,
      $[m],
      !a && o.hover,
      !a && o.press,
      j,
      S
    );
    return /* @__PURE__ */ F("button", { ref: C, ...p, type: "button", className: B, disabled: a, "aria-pressed": n, "aria-label": r ? p["aria-label"] ?? t : void 0, onClick: k, children: [
      u && /* @__PURE__ */ g(
        "span",
        {
          className: h(
            "inline-flex items-center justify-center shrink-0",
            "transition-colors duration-150",
            o.icon
          ),
          children: (() => {
            const { iconType: d, isFill: T } = O(u);
            return /* @__PURE__ */ g(H, { iconType: d, size: b.iconSize, isFill: T });
          })()
        }
      ),
      !r && t && /* @__PURE__ */ g(
        "span",
        {
          className: `${h(
            "shrink-0 transition-colors duration-150",
            b.textSize
          )} ${o.text}`,
          children: t
        }
      )
    ] });
  }
);
W.displayName = "Chip";
export {
  W as Chip
};
