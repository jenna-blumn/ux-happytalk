"use client";
import { jsx as o, jsxs as d } from "react/jsx-runtime";
import * as n from "react";
import * as e from "@radix-ui/react-dialog";
import { cva as f } from "class-variance-authority";
import { cn as i } from "../../../utils/cn.mjs";
import { Icon as p } from "../../icons/Icon/Icon.mjs";
const R = e.Root, T = e.Trigger, z = e.Close, g = e.Portal, r = n.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o(
  e.Overlay,
  {
    className: i(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: s
  }
));
r.displayName = e.Overlay.displayName;
const h = f(
  "fixed z-50 ds-gap-16 bg-background padding-24 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), u = n.forwardRef(({ side: t = "right", className: a, children: s, onOpenAutoFocus: l, ...m }, c) => /* @__PURE__ */ d(g, { children: [
  /* @__PURE__ */ o(r, {}),
  /* @__PURE__ */ d(
    e.Content,
    {
      ref: c,
      className: i(h({ side: t }), a),
      onOpenAutoFocus: l,
      ...m,
      children: [
        /* @__PURE__ */ d(e.Close, { className: "absolute [right:20px] [top:20px] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ o(p, { iconType: ["system", "close"], size: 16 }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
        ] }),
        s
      ]
    }
  )
] }));
u.displayName = e.Content.displayName;
const y = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o(
  "div",
  {
    className: i(
      "flex flex-col ds-gap-8 text-center sm:text-left",
      t
    ),
    ...a
  }
);
y.displayName = "SheetHeader";
const b = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o(
  "div",
  {
    className: i(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:ds-gap-8",
      t
    ),
    ...a
  }
);
b.displayName = "SheetFooter";
const x = n.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o(
  e.Title,
  {
    ref: s,
    className: i("size-lg font-body font-semibold text-foreground", t),
    ...a
  }
));
x.displayName = e.Title.displayName;
const N = n.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ o(
  e.Description,
  {
    ref: s,
    className: i("size-sm font-body line-height-leading-5 text-muted-foreground", t),
    ...a
  }
));
N.displayName = e.Description.displayName;
export {
  R as Sheet,
  z as SheetClose,
  u as SheetContent,
  N as SheetDescription,
  b as SheetFooter,
  y as SheetHeader,
  r as SheetOverlay,
  g as SheetPortal,
  x as SheetTitle,
  T as SheetTrigger
};
