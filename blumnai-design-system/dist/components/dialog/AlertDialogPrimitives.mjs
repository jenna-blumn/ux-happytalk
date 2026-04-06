"use client";
import { jsxs as p, jsx as l } from "react/jsx-runtime";
import * as s from "react";
import * as o from "@radix-ui/react-alert-dialog";
import { getPixelValue as g } from "../../lib/css-utils.mjs";
import { buttonVariants as y } from "../button/Button.mjs";
import { cn as i } from "../../utils/cn.mjs";
const j = o.Root, u = o.Portal, n = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ l(
  o.Overlay,
  {
    ref: a,
    className: i(
      "fixed inset-0 z-[10000] bg-overlay",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
n.displayName = o.Overlay.displayName;
const x = s.forwardRef(({ className: t, width: e, style: a, ...r }, m) => {
  const f = e !== void 0 && e !== "" ? { width: g(e) } : void 0, d = {
    ...a || {},
    ...f || {}
  };
  return /* @__PURE__ */ p(u, { children: [
    /* @__PURE__ */ l(n, {}),
    /* @__PURE__ */ l(
      o.Content,
      {
        ref: m,
        onEscapeKeyDown: (c) => c.preventDefault(),
        className: i(
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
x.displayName = o.Content.displayName;
const N = s.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ l(
    "div",
    {
      ref: a,
      className: i("flex flex-col ds-gap-6 text-center sm:text-left", t),
      ...e
    }
  )
);
N.displayName = "AlertDialogHeader";
const D = s.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ l(
    "div",
    {
      ref: a,
      className: i(
        "flex flex-col-reverse ds-gap-8 sm:flex-row sm:justify-end",
        t
      ),
      ...e
    }
  )
);
D.displayName = "AlertDialogFooter";
const A = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ l(
  o.Title,
  {
    ref: a,
    className: i(
      "font-body size-lg font-semibold line-height-leading-6 letter-spacing-tracking-tight text-default",
      t
    ),
    ...e
  }
));
A.displayName = o.Title.displayName;
const w = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ l(
  o.Description,
  {
    ref: a,
    className: i(
      "font-body size-sm line-height-leading-5 text-muted",
      t
    ),
    ...e
  }
));
w.displayName = o.Description.displayName;
const v = s.forwardRef(({ className: t, asChild: e = !0, ...a }, r) => /* @__PURE__ */ l(
  o.Action,
  {
    ref: r,
    asChild: e,
    className: e ? t : i(y(), "bg-state-primary text-white border border-transparent", t),
    ...a
  }
));
v.displayName = o.Action.displayName;
export {
  v as AlertDialogAction,
  x as AlertDialogContent,
  w as AlertDialogDescription,
  D as AlertDialogFooter,
  N as AlertDialogHeader,
  n as AlertDialogOverlay,
  u as AlertDialogPortal,
  j as AlertDialogRoot,
  A as AlertDialogTitle
};
