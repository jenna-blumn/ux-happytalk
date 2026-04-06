"use client";
import { jsx as l, jsxs as m } from "react/jsx-runtime";
import * as i from "react";
import * as o from "@radix-ui/react-alert-dialog";
import { getPixelValue as h } from "../../lib/css-utils.mjs";
import { buttonVariants as p, Button as b } from "../button/Button.mjs";
import { cn as s } from "../../utils/cn.mjs";
import { ScrollArea as w } from "../scroll-area/ScrollArea.mjs";
const v = o.Root, F = o.Trigger, R = o.Portal, g = i.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ l(
  o.Overlay,
  {
    ref: a,
    className: s(
      "fixed inset-0 z-[10000] bg-overlay",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
g.displayName = o.Overlay.displayName;
const y = i.forwardRef(({ className: t, width: e, style: a, ...r }, n) => {
  const c = e !== void 0 && e !== "" ? { width: h(e) } : void 0, d = {
    ...a || {},
    ...c || {}
  };
  return /* @__PURE__ */ m(R, { children: [
    /* @__PURE__ */ l(g, {}),
    /* @__PURE__ */ l(
      o.Content,
      {
        ref: n,
        onEscapeKeyDown: (f) => f.preventDefault(),
        className: s(
          "fixed left-[50%] top-[50%] z-[10000] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
          "ds-gap-16 border-default bg-card padding-24 shadow-modal-lg rounded-lg",
          "duration-200",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          e && "max-w-none",
          t
        ),
        style: Object.keys(d).length > 0 ? d : void 0,
        ...r
      }
    )
  ] });
});
y.displayName = o.Content.displayName;
const u = i.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ l(
    "div",
    {
      ref: a,
      className: s("flex flex-col ds-gap-6 text-center sm:text-left", t),
      ...e
    }
  )
);
u.displayName = "AlertDialogHeader";
const A = i.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ l(
    "div",
    {
      ref: a,
      className: s(
        "flex flex-col-reverse ds-gap-8 sm:flex-row sm:justify-end",
        t
      ),
      ...e
    }
  )
);
A.displayName = "AlertDialogFooter";
const S = ({ className: t, maxHeight: e, children: a }) => /* @__PURE__ */ l(
  w,
  {
    orientation: "vertical",
    maxHeight: e,
    className: t,
    children: a
  }
);
S.displayName = "AlertDialogScrollArea";
const D = i.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ l(
  o.Title,
  {
    ref: a,
    className: s(
      "font-body size-lg font-semibold line-height-leading-6 letter-spacing-tracking-tight text-default",
      t
    ),
    ...e
  }
));
D.displayName = o.Title.displayName;
const N = i.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ l(
  o.Description,
  {
    ref: a,
    className: s(
      "font-body size-sm line-height-leading-5 text-muted",
      t
    ),
    ...e
  }
));
N.displayName = o.Description.displayName;
const x = i.forwardRef(({ className: t, asChild: e = !0, ...a }, r) => /* @__PURE__ */ l(
  o.Action,
  {
    ref: r,
    asChild: e,
    className: e ? t : s(p(), "bg-state-primary text-white border border-transparent", t),
    ...a
  }
));
x.displayName = o.Action.displayName;
const C = i.forwardRef(({ className: t, asChild: e = !0, ...a }, r) => /* @__PURE__ */ l(
  o.Cancel,
  {
    ref: r,
    asChild: e,
    className: e ? t : s(p(), "bg-state-secondary text-default border-default", t),
    ...a
  }
));
C.displayName = o.Cancel.displayName;
const z = ({
  open: t,
  onOpenChange: e,
  title: a,
  description: r,
  confirmLabel: n = "확인",
  onConfirm: c,
  width: d
}) => /* @__PURE__ */ l(v, { open: t, onOpenChange: e, children: /* @__PURE__ */ m(y, { width: d, children: [
  /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ l(D, { children: a }),
    r && /* @__PURE__ */ l(N, { children: r })
  ] }),
  /* @__PURE__ */ l(A, { children: /* @__PURE__ */ l(x, { asChild: !0, children: /* @__PURE__ */ l(b, { buttonStyle: "primary", onClick: () => {
    c?.(), e(!1);
  }, children: n }) }) })
] }) });
z.displayName = "SimpleAlertDialog";
export {
  v as AlertDialog,
  x as AlertDialogAction,
  C as AlertDialogCancel,
  y as AlertDialogContent,
  N as AlertDialogDescription,
  A as AlertDialogFooter,
  u as AlertDialogHeader,
  g as AlertDialogOverlay,
  R as AlertDialogPortal,
  S as AlertDialogScrollArea,
  D as AlertDialogTitle,
  F as AlertDialogTrigger,
  z as SimpleAlertDialog
};
