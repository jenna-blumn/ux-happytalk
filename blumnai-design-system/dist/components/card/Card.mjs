"use client";
import { jsx as o } from "react/jsx-runtime";
import * as s from "react";
import { cva as m } from "class-variance-authority";
import { cn as t } from "../../utils/cn.mjs";
const g = m(
  "rounded-lg bg-state-secondary text-default",
  {
    variants: {
      variant: {
        default: "border-default shadow-sm",
        outline: "border-default",
        ghost: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), p = s.forwardRef(
  ({ className: d, variant: r, interactive: a, onClick: i, onKeyDown: n, ...l }, c) => {
    const f = a ? (e) => {
      n?.(e), !e.defaultPrevented && (e.key === "Enter" || e.key === " ") && !e.repeat && (e.preventDefault(), e.currentTarget.click());
    } : n;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: c,
        role: a ? "button" : void 0,
        tabIndex: a ? 0 : void 0,
        className: t(
          g({ variant: r }),
          a && "cursor-pointer hover:shadow-md transition-shadow focus-visible:shadow-component-focus focus-visible:outline-none",
          d
        ),
        onClick: i,
        onKeyDown: f,
        ...l
      }
    );
  }
);
p.displayName = "Card";
const u = s.forwardRef(
  ({ className: d, ...r }, a) => /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      className: t("flex flex-col ds-gap-6 padding-24", d),
      ...r
    }
  )
);
u.displayName = "CardHeader";
const C = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, N = s.forwardRef(
  ({ className: d, as: r = "h3", ...a }, i) => /* @__PURE__ */ o(
    r,
    {
      ref: i,
      className: t(
        "size-lg font-body font-semibold line-height-leading-6 letter-spacing-tracking-tight",
        d
      ),
      ...a
    }
  )
);
N.displayName = "CardTitle";
const h = s.forwardRef(
  ({ className: d, ...r }, a) => /* @__PURE__ */ o(
    "p",
    {
      ref: a,
      className: t("size-sm font-body text-muted line-height-leading-5", d),
      ...r
    }
  )
);
h.displayName = "CardDescription";
const v = s.forwardRef(
  ({ className: d, ...r }, a) => /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      className: t("padding-24 [padding-top:0]", d),
      ...r
    }
  )
);
v.displayName = "CardContent";
const y = s.forwardRef(
  ({ className: d, ...r }, a) => /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      className: t("flex items-center padding-24 [padding-top:0]", d),
      ...r
    }
  )
);
y.displayName = "CardFooter";
const w = s.forwardRef(
  ({ className: d, columns: r = 3, ...a }, i) => /* @__PURE__ */ o(
    "div",
    {
      ref: i,
      className: t("grid ds-gap-16", C[r], d),
      ...a
    }
  )
);
w.displayName = "CardGroup";
export {
  p as Card,
  v as CardContent,
  h as CardDescription,
  y as CardFooter,
  w as CardGroup,
  u as CardHeader,
  N as CardTitle
};
