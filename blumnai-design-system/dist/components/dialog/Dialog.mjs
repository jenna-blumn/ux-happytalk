"use client";
import { jsx as i, jsxs as N } from "react/jsx-runtime";
import * as o from "react";
import * as s from "@radix-ui/react-dialog";
import { getPixelValue as T } from "../../lib/css-utils.mjs";
import { buttonVariants as z } from "../button/Button.mjs";
import { cn as p } from "../../utils/cn.mjs";
import { Icon as E } from "../icons/Icon/Icon.mjs";
import { ScrollArea as I } from "../scroll-area/ScrollArea.mjs";
const C = o.createContext(null), v = () => {
  const t = o.useContext(C);
  if (!t)
    throw new Error("Dialog components must be used within a Dialog");
  return t;
}, B = ({ children: t, open: a, onOpenChange: e, defaultOpen: d, ...c }) => {
  const [l, n] = o.useState(d ?? !1), [m, y] = o.useState(!1), f = a !== void 0, x = f ? a : l, g = o.useCallback((r) => {
    m || (f || n(r), e?.(r));
  }, [f, e, m]), D = o.useCallback(() => {
    g(!1);
  }, [g]), b = o.useMemo(() => ({ close: D, isPending: m, setIsPending: y }), [D, m]);
  return /* @__PURE__ */ i(C.Provider, { value: b, children: /* @__PURE__ */ i(
    s.Root,
    {
      open: x,
      onOpenChange: g,
      ...c,
      children: t
    }
  ) });
}, J = s.Trigger, O = s.Portal, k = o.forwardRef(({ asChild: t = !0, disabled: a, children: e, ...d }, c) => {
  const { isPending: l } = v(), n = a || l;
  return t && o.isValidElement(e) ? /* @__PURE__ */ i(s.Close, { asChild: !0, ref: c, ...d, children: o.cloneElement(e, {
    disabled: n
  }) }) : /* @__PURE__ */ i(s.Close, { ref: c, disabled: n, ...d, children: e });
});
k.displayName = s.Close.displayName;
const h = o.forwardRef(({ className: t, ...a }, e) => /* @__PURE__ */ i(
  s.Overlay,
  {
    ref: e,
    className: p(
      "fixed inset-0 z-[10000] bg-overlay",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a
  }
));
h.displayName = s.Overlay.displayName;
const P = o.forwardRef(({ className: t, children: a, hideCloseButton: e = !1, disableEscapeClose: d = !1, disableOutsideClose: c = !1, width: l, fullScreen: n = !1, overlayClassName: m, style: y, onEscapeKeyDown: f, onPointerDownOutside: x, onInteractOutside: g, ...D }, b) => {
  const { isPending: r } = v(), R = l !== void 0 && l !== "" ? { width: T(l) } : void 0, w = {
    ...y || {},
    ...R || {}
  };
  return /* @__PURE__ */ N(O, { children: [
    /* @__PURE__ */ i(h, { className: m }),
    /* @__PURE__ */ N(
      s.Content,
      {
        ref: b,
        onEscapeKeyDown: (u) => {
          (d || r) && u.preventDefault(), f?.(u);
        },
        onPointerDownOutside: (u) => {
          (c || r) && u.preventDefault(), x?.(u);
        },
        onInteractOutside: (u) => {
          (c || r) && u.preventDefault(), g?.(u);
        },
        className: p(
          n ? "fixed inset-0 z-[10000] grid w-full h-full max-w-none rounded-none overflow-y-auto" : "fixed left-[50%] top-[50%] z-[10000] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
          "ds-gap-16 border-default bg-card padding-24 shadow-modal-lg",
          !n && "rounded-lg",
          "duration-200",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          !n && "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          !n && "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          !n && "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          l && !n && "max-w-none",
          t
        ),
        style: Object.keys(w).length > 0 ? w : void 0,
        ...D,
        children: [
          a,
          !e && /* @__PURE__ */ N(
            s.Close,
            {
              disabled: r,
              className: p(
                "absolute [right:20px] [top:20px] rounded-sm cursor-pointer",
                "text-muted hover:text-default",
                "transition-colors duration-150",
                "focus:outline-none focus-visible:shadow-component-misc-focus",
                "disabled:pointer-events-none disabled:opacity-50"
              ),
              children: [
                /* @__PURE__ */ i(E, { iconType: ["system", "close"], size: 20 }),
                /* @__PURE__ */ i("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
});
P.displayName = s.Content.displayName;
const Q = P, V = o.forwardRef(
  ({ className: t, ...a }, e) => /* @__PURE__ */ i(
    "div",
    {
      ref: e,
      className: p("flex flex-col ds-gap-6 text-center sm:text-left", t),
      ...a
    }
  )
);
V.displayName = "DialogHeader";
const j = o.forwardRef(
  ({ className: t, ...a }, e) => /* @__PURE__ */ i(
    "div",
    {
      ref: e,
      className: p(
        "flex flex-col-reverse ds-gap-8 sm:flex-row sm:justify-end",
        t
      ),
      ...a
    }
  )
);
j.displayName = "DialogFooter";
const A = ({ className: t, maxHeight: a, children: e }) => /* @__PURE__ */ i(
  I,
  {
    orientation: "vertical",
    maxHeight: a,
    className: t,
    children: e
  }
);
A.displayName = "DialogScrollArea";
const H = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}, F = o.forwardRef(({ className: t, weight: a = "semibold", ...e }, d) => /* @__PURE__ */ i(
  s.Title,
  {
    ref: d,
    className: p(
      "font-body size-lg line-height-leading-6 letter-spacing-tracking-tight text-default",
      H[a],
      t
    ),
    ...e
  }
));
F.displayName = s.Title.displayName;
const S = o.forwardRef(({ className: t, ...a }, e) => /* @__PURE__ */ i(
  s.Description,
  {
    ref: e,
    className: p(
      "font-body size-sm line-height-leading-5 text-muted",
      t
    ),
    ...a
  }
));
S.displayName = s.Description.displayName;
const G = o.forwardRef(({ className: t, asChild: a = !0, onAction: e, onClick: d, disabled: c, children: l, ...n }, m) => {
  const { close: y, isPending: f, setIsPending: x } = v(), g = async (b) => {
    if (d?.(b), e) {
      const r = e();
      if (r instanceof Promise) {
        x(!0);
        try {
          await r, y();
        } finally {
          x(!1);
        }
      } else
        y();
    } else
      y();
  }, D = c || f;
  return a && o.isValidElement(l) ? o.cloneElement(l, {
    ref: m,
    onClick: g,
    disabled: D,
    loading: f,
    ...n
  }) : /* @__PURE__ */ i(
    "button",
    {
      ref: m,
      disabled: D,
      onClick: g,
      className: p(z(), "bg-state-primary text-white border border-transparent", t),
      ...n,
      children: l
    }
  );
});
G.displayName = "DialogAction";
export {
  B as Dialog,
  G as DialogAction,
  k as DialogClose,
  Q as DialogContent,
  S as DialogDescription,
  j as DialogFooter,
  V as DialogHeader,
  h as DialogOverlay,
  O as DialogPortal,
  A as DialogScrollArea,
  F as DialogTitle,
  J as DialogTrigger
};
