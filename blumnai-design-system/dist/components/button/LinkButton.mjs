"use client";
import { jsxs as j, Fragment as E, jsx as e } from "react/jsx-runtime";
import { forwardRef as P, useMemo as V } from "react";
import { Slot as _ } from "@radix-ui/react-slot";
import { cva as b } from "class-variance-authority";
import { getPixelValue as D } from "../../lib/css-utils.mjs";
import { renderButtonIcon as F } from "./buttonUtils.mjs";
import { cn as h } from "../../utils/cn.mjs";
const I = b(
  "group inline-flex items-center font-medium bg-transparent no-underline hover:no-underline transition-all duration-200 focus:outline-none",
  {
    variants: {
      linkType: {
        default: "text-default hover:text-subtle",
        muted: "text-muted hover:text-subtle",
        informative: "text-informative hover:text-informative"
      },
      size: {
        sm: "size-xs line-height-leading-4 ds-gap-4 letter-spacing-tracking-tight",
        md: "size-sm line-height-leading-5 ds-gap-4 letter-spacing-tracking-tight",
        lg: "size-md line-height-leading-6 ds-gap-4 letter-spacing-tracking-normal"
      }
    },
    defaultVariants: {
      linkType: "default",
      size: "md"
    }
  }
), p = {
  default: { iconColor: "var(--icon-default-muted)" },
  muted: { iconColor: "var(--icon-default-muted)" },
  informative: { iconColor: "var(--icon-informative)" }
}, x = {
  text: "text-hint cursor-not-allowed",
  iconColor: "var(--icon-default-disabled)"
}, O = P(({
  linkType: s = "default",
  size: y = "md",
  label: k,
  href: c,
  openInNewTab: m = !1,
  leadIcon: u,
  tailIcon: d = ["system", "external-link"],
  disabled: t = !1,
  asChild: C = !1,
  width: n,
  className: z,
  style: S,
  ...o
}, i) => {
  const N = n !== void 0 && n !== "" ? { width: D(n) } : void 0, f = {
    ...S || {},
    ...N || {}
  }, g = p[s] ?? p.default, r = h(
    I({ ...t ? {} : { linkType: s }, size: y }),
    t && x.text,
    z
  ), B = V(() => t ? x.iconColor : g.iconColor, [t, g]), v = (L) => F(L, 16, B), l = /* @__PURE__ */ j(E, { children: [
    u && v(u),
    /* @__PURE__ */ e("span", { className: h("relative", !t && "link-label-hover"), children: k }),
    d && v(d)
  ] }), a = Object.keys(f).length > 0 ? f : void 0;
  return C ? /* @__PURE__ */ e(_, { ref: i, className: r, style: a, ...o, children: l }) : c && !t ? /* @__PURE__ */ e(
    "a",
    {
      ref: i,
      href: c,
      target: m ? "_blank" : void 0,
      className: r,
      style: a,
      ...o,
      rel: m ? "noopener noreferrer" : void 0,
      children: l
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      ref: i,
      type: "button",
      disabled: t,
      className: r,
      style: a,
      ...o,
      children: l
    }
  );
});
O.displayName = "LinkButton";
export {
  O as LinkButton,
  I as linkButtonVariants
};
