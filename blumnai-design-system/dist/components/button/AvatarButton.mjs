"use client";
import { jsxs as B, jsx as i } from "react/jsx-runtime";
import { forwardRef as D } from "react";
import { Slot as A } from "@radix-ui/react-slot";
import { cva as I } from "class-variance-authority";
import { getPixelValue as j } from "../../lib/css-utils.mjs";
import { renderButtonIcon as C } from "./buttonUtils.mjs";
import { cn as N } from "../../utils/cn.mjs";
import { Avatar as V } from "../avatar/Avatar/Avatar.mjs";
const E = I(
  "inline-flex items-center rounded-full transition-all duration-200 focus:outline-none font-body size-sm line-height-leading-5 font-medium letter-spacing-tracking-normal",
  {
    variants: {
      buttonStyle: {
        default: "bg-state-secondary text-default border-darker hover:bg-state-secondary-hover active:bg-state-secondary-press focus-visible:shadow-component-focus",
        dashed: "bg-state-secondary text-default border-dashed [border-width:1px] [border-color:var(--border-darker)] hover:bg-state-secondary-hover active:bg-state-secondary-press focus-visible:shadow-component-focus",
        soft: "bg-state-soft text-default border-none hover:bg-state-soft-hover active:bg-state-soft-press focus-visible:shadow-component-misc-focus"
      },
      size: {
        sm: "height-28 padding-y-4 padding-l-4 padding-r-8 ds-gap-4",
        lg: "height-32 padding-y-6 padding-l-6 padding-r-12 ds-gap-6"
      }
    },
    defaultVariants: {
      buttonStyle: "default",
      size: "lg"
    }
  }
), L = {
  default: "bg-state-disabled text-hint border-default cursor-not-allowed",
  dashed: "bg-state-disabled text-hint border-dashed [border-width:1px] [border-color:var(--border-default)] cursor-not-allowed",
  soft: "bg-muted text-hint border-none cursor-not-allowed"
}, P = D(({
  buttonStyle: a = "default",
  size: c = "lg",
  avatar: l,
  alt: u,
  label: s,
  tailIcon: n,
  disabled: t = !1,
  asChild: e = !1,
  width: r,
  className: f,
  style: p,
  ...g
}, b) => {
  const m = e ? A : "button", v = "xs", h = 20, y = r !== void 0 && r !== "" ? { width: j(r) } : void 0, d = {
    ...p || {},
    ...y || {}
  }, x = N(
    E({ ...t ? {} : { buttonStyle: a }, size: c }),
    t && L[a],
    !t && "shadow-components-default",
    f
  ), w = () => t ? "var(--icon-default-disabled)" : "var(--icon-default-muted)", S = (o) => C(o, h, w()), k = e && t, z = (o) => {
    o.preventDefault(), o.stopPropagation();
  };
  return /* @__PURE__ */ B(
    m,
    {
      ref: b,
      type: e ? void 0 : "button",
      disabled: e ? void 0 : t,
      className: x,
      style: Object.keys(d).length > 0 ? d : void 0,
      ...g,
      ...k ? {
        "aria-disabled": !0,
        tabIndex: -1,
        onClick: z
      } : {},
      children: [
        /* @__PURE__ */ i(
          V,
          {
            variant: "userpic",
            size: v,
            shape: "circular",
            src: l,
            alt: u ?? s,
            ring: !1
          }
        ),
        /* @__PURE__ */ i("span", { children: s }),
        n && S(n)
      ]
    }
  );
});
P.displayName = "AvatarButton";
export {
  P as AvatarButton,
  E as avatarButtonVariants
};
