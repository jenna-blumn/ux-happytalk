"use client";
import { jsx as i, jsxs as b, Fragment as v } from "react/jsx-runtime";
import { forwardRef as q, useRef as F } from "react";
import { Slot as P } from "@radix-ui/react-slot";
import { cva as R } from "class-variance-authority";
import { getPixelValue as J } from "../../lib/css-utils.mjs";
import { useKeyboardShortcut as Q } from "../../hooks/use-keyboard-shortcut.mjs";
import { useMergeRefs as X } from "../../hooks/use-merge-refs.mjs";
import { renderButtonIcon as rr } from "./buttonUtils.mjs";
import { cn as y } from "../../utils/cn.mjs";
const er = R(
  "inline-flex items-center justify-center shrink-0 whitespace-nowrap cursor-pointer transition-all duration-200 focus:outline-none font-medium letter-spacing-tracking-normal",
  {
    variants: {
      size: {
        "2xs": "height-24 size-xs line-height-leading-4 padding-x-6 padding-y-4 ds-gap-4",
        xs: "height-28 size-sm line-height-leading-5 padding-x-8 padding-y-4 ds-gap-4",
        sm: "height-32 size-sm line-height-leading-5 padding-x-10 padding-y-6 ds-gap-4",
        md: "height-36 size-sm line-height-leading-5 padding-x-12 padding-y-8 ds-gap-6",
        lg: "height-40 size-sm line-height-leading-5 padding-x-14 padding-y-10 ds-gap-6"
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
), tr = {
  primary: "bg-state-primary text-white-default border-solid border-[1px] border-transparent hover:bg-state-primary-hover active:bg-state-primary-press focus-visible:shadow-component-focus",
  secondary: "bg-state-secondary text-default border-darker hover:bg-state-secondary-hover active:bg-state-secondary-press focus-visible:shadow-component-focus",
  destructive: "bg-state-destructive text-white-default border-solid border-[1px] border-transparent hover:bg-state-destructive-hover active:bg-state-destructive-press focus-visible:shadow-component-destructive-focus",
  ghost: "bg-state-ghost text-subtle border-solid border-[1px] border-transparent hover:bg-state-ghost-hover active:bg-state-ghost-press focus-visible:shadow-component-misc-focus",
  ghostMuted: "bg-state-ghost text-muted border-solid border-[1px] border-transparent hover:bg-state-ghost-hover active:bg-state-ghost-press focus-visible:shadow-component-misc-focus",
  soft: "bg-state-soft text-subtle border-solid border-[1px] border-transparent hover:bg-state-soft-hover active:bg-state-soft-press focus-visible:shadow-component-misc-focus",
  dashed: "bg-state-secondary text-default border-dashed [border-width:1px] [border-color:var(--border-default)] hover:bg-state-secondary-hover active:bg-state-secondary-press focus-visible:shadow-component-misc-focus"
}, or = R("", {
  variants: {
    size: {
      "2xs": "width-24 height-24",
      xs: "width-28 height-28",
      sm: "width-32 height-32",
      md: "width-36 height-36",
      lg: "width-40 height-40"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), z = {
  default: { "2xs": 16, xs: 16, sm: 16, md: 16, lg: 18 },
  iconOnly: { "2xs": 16, xs: 16, sm: 20, md: 20, lg: 20 }
}, E = {
  "2xs": "min-width-16 height-16 size-xs padding-x-4 rounded-xs",
  xs: "min-width-16 height-16 size-xs padding-x-4 rounded-xs",
  sm: "min-width-20 height-20 size-xs padding-x-4 rounded-xs",
  md: "min-width-20 height-20 size-xs padding-x-4 rounded-xs",
  lg: "min-width-20 height-20 size-xs padding-x-4 rounded-xs"
}, k = {
  light: "bg-muted border-default text-subtle",
  inverted: "bg-white/10 border-solid border-[1px] border-white/20 text-white-default"
}, sr = "bg-state-disabled text-hint border-solid border-[1px] border-transparent cursor-not-allowed", ar = {
  primary: "bg-state-primary-loading text-white-default border-solid border-[1px] border-transparent cursor-wait",
  secondary: "bg-state-secondary-loading text-default border-darker cursor-wait",
  destructive: "bg-state-destructive-loading text-white-default border-solid border-[1px] border-transparent cursor-wait",
  ghost: "bg-state-ghost-loading text-subtle border-solid border-[1px] border-transparent cursor-wait",
  ghostMuted: "bg-state-ghost-loading text-subtle border-solid border-[1px] border-transparent cursor-wait",
  soft: "bg-state-soft-loading text-subtle border-solid border-[1px] border-transparent cursor-wait",
  dashed: "bg-state-secondary-loading text-default border-dashed [border-width:1px] [border-color:var(--border-default)] cursor-wait"
}, nr = (r) => ({
  "--btn-bg": `var(--bg-basic-${r}-accent)`,
  "--btn-bg-hover": `var(--bg-basic-${r}-strong)`,
  "--btn-bg-subtle": `var(--bg-basic-${r}-subtle)`,
  "--btn-bg-alpha": `var(--bg-basic-${r}-alpha-15)`,
  "--btn-text": `var(--bg-basic-${r}-strong)`,
  "--btn-text-muted": `var(--bg-basic-${r}-accent)`
}), dr = {
  primary: "[background-color:var(--btn-bg)] text-white-default border-solid border-[1px] border-transparent hover:[background-color:var(--btn-bg-hover)] active:[background-color:var(--btn-bg-hover)] focus-visible:shadow-component-focus",
  destructive: "[background-color:var(--btn-bg)] text-white-default border-solid border-[1px] border-transparent hover:[background-color:var(--btn-bg-hover)] active:[background-color:var(--btn-bg-hover)] focus-visible:shadow-component-focus",
  secondary: "bg-state-secondary [color:var(--btn-text)] border-solid border-[1px] [border-color:var(--btn-text)] hover:bg-state-secondary-hover active:bg-state-secondary-press focus-visible:shadow-component-focus",
  ghost: "bg-transparent [color:var(--btn-text)] border-solid border-[1px] border-transparent hover:[background-color:var(--btn-bg-alpha)] active:[background-color:var(--btn-bg-alpha)] focus-visible:shadow-component-misc-focus",
  ghostMuted: "bg-transparent [color:var(--btn-text-muted)] border-solid border-[1px] border-transparent hover:[background-color:var(--btn-bg-alpha)] active:[background-color:var(--btn-bg-alpha)] focus-visible:shadow-component-misc-focus",
  soft: "[background-color:var(--btn-bg-subtle)] [color:var(--btn-text)] border-solid border-[1px] border-transparent hover:[background-color:var(--btn-bg-alpha)] active:[background-color:var(--btn-bg-alpha)] focus-visible:shadow-component-misc-focus",
  dashed: "bg-state-secondary [color:var(--btn-text)] border-dashed [border-width:1px] [border-color:var(--btn-text)] hover:bg-state-secondary-hover active:bg-state-secondary-press focus-visible:shadow-component-misc-focus"
}, ir = {
  primary: "[background-color:var(--btn-bg-subtle)] text-white-default border-solid border-[1px] border-transparent cursor-wait",
  destructive: "[background-color:var(--btn-bg-subtle)] text-white-default border-solid border-[1px] border-transparent cursor-wait",
  secondary: "bg-state-secondary-loading [color:var(--btn-text)] border-solid border-[1px] [border-color:var(--btn-text)] cursor-wait",
  ghost: "[background-color:var(--btn-bg-alpha)] [color:var(--btn-text)] border-solid border-[1px] border-transparent cursor-wait",
  ghostMuted: "[background-color:var(--btn-bg-alpha)] [color:var(--btn-text-muted)] border-solid border-[1px] border-transparent cursor-wait",
  soft: "[background-color:var(--btn-bg-subtle)] [color:var(--btn-text)] border-solid border-[1px] border-transparent cursor-wait",
  dashed: "bg-state-secondary-loading [color:var(--btn-text)] border-dashed [border-width:1px] [border-color:var(--btn-text)] cursor-wait"
}, cr = q(({
  buttonStyle: r = "primary",
  variant: S = "default",
  size: l = "md",
  shape: T = "rounded",
  type: _ = "button",
  leadIcon: c,
  tailIcon: a,
  shortcut: n,
  colorOverride: d,
  loading: t = !1,
  disabled: o = !1,
  fullWidth: N = !1,
  width: f,
  asChild: x = !1,
  className: V,
  children: g,
  style: $,
  ...h
}, K) => {
  const C = F(null), M = X(C, K);
  Q(
    n,
    () => {
      C.current?.click();
    },
    { enabled: !o && !t }
  );
  const j = x ? P : "button", s = S === "iconOnly", O = r === "primary" || r === "destructive", m = (s ? z.iconOnly : z.default)[l] ?? 16, B = E[l] ?? E.md, U = f !== void 0 && f !== "" ? { width: J(f) } : void 0, Y = t && !s && !c && !a, D = !!d, I = y(
    er({ size: l, shape: T }),
    !o && !t && (D ? dr[r] : tr[r]),
    o && sr,
    t && (D && !o ? ir[r] : ar[r]),
    !o && r !== "ghost" && r !== "ghostMuted" && r !== "dashed" && r !== "soft" && "shadow-components-default",
    s && or({ size: l }),
    s && "aspect-square",
    Y && "relative",
    N && !s && "w-full",
    V
  ), A = () => o ? "var(--icon-default-disabled)" : O ? "var(--icon-white-default)" : d ? `var(--bg-basic-${d}-${r === "ghostMuted" ? "accent" : "strong"})` : "var(--icon-default-muted)", u = () => /* @__PURE__ */ b(
    "svg",
    {
      className: "animate-spin shrink-0",
      width: m,
      height: m,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      style: { display: "block", fill: "var(--bg-default)" },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeDasharray: "32", strokeDashoffset: "32", opacity: "0.3" }),
        /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeDasharray: "32", strokeDashoffset: "24" })
      ]
    }
  ), p = (e) => rr(e, m, A()), w = () => {
    if (!n) return null;
    const e = O ? k.inverted : d ? y(k.light, "[color:var(--btn-text)]") : k.light;
    return /* @__PURE__ */ i("span", { className: y("inline-flex items-center justify-center leading-none", B, e), children: n });
  }, G = d && !o ? nr(d) : {}, L = {
    ...$ || {},
    ...U || {},
    ...G,
    ...s ? { padding: 0 } : {}
  }, H = (e) => {
    if (o || t) {
      e.preventDefault();
      return;
    }
    h.onClick?.(e);
  }, W = (e) => {
    if ((o || t) && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      return;
    }
    h.onKeyDown?.(e);
  }, Z = (e) => {
    if ((o || t) && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      return;
    }
    h.onKeyUp?.(e);
  };
  return /* @__PURE__ */ i(
    j,
    {
      ref: M,
      type: x ? void 0 : _,
      disabled: x ? void 0 : o || t,
      "aria-disabled": o || t || void 0,
      "aria-busy": t || void 0,
      className: I,
      style: Object.keys(L).length > 0 ? L : void 0,
      ...h,
      onClick: H,
      onKeyDown: W,
      onKeyUp: Z,
      children: s ? t ? u() : p(c) : t ? c ? /* @__PURE__ */ b(v, { children: [
        u(),
        g,
        n && w(),
        a && p(a)
      ] }) : a ? /* @__PURE__ */ b(v, { children: [
        g,
        n && w(),
        u()
      ] }) : /* @__PURE__ */ b(v, { children: [
        /* @__PURE__ */ i("span", { className: "invisible", children: g }),
        /* @__PURE__ */ i("span", { className: "absolute inset-0 flex items-center justify-center", children: u() })
      ] }) : /* @__PURE__ */ b(v, { children: [
        c && p(c),
        g,
        n && w(),
        a && p(a)
      ] })
    }
  );
});
cr.displayName = "Button";
export {
  cr as Button,
  er as buttonVariants
};
