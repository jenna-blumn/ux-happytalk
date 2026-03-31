"use client";
import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import { cva as b } from "class-variance-authority";
import { Avatar as z } from "../avatar/Avatar/Avatar.mjs";
import { useSidebar as S } from "./SidebarPrimitives.mjs";
import { cn as r } from "../../utils/cn.mjs";
import { Icon as V } from "../icons/Icon/Icon.mjs";
const _ = {
  variant1: "sm",
  variant2: "md",
  variant3: "sm"
}, j = {
  variant1: "sm",
  variant2: "md",
  variant3: "md"
}, h = b(
  "flex w-full items-center font-body text-default transition-colors rounded-sm cursor-pointer",
  {
    variants: {
      variant: {
        variant1: "height-32 padding-6 ds-gap-6",
        variant2: "height-64 padding-12 ds-gap-12",
        variant3: "height-48 padding-12 ds-gap-12"
      },
      state: {
        default: "hover:bg-state-ghost-hover",
        hover: "bg-state-ghost-hover",
        opened: "bg-state-soft"
      }
    },
    defaultVariants: {
      variant: "variant3",
      state: "default"
    }
  }
), E = b(
  "flex items-center justify-center font-body text-default transition-colors rounded-sm cursor-pointer",
  {
    variants: {
      variant: {
        variant1: "width-32 height-32",
        variant2: "width-48 height-48",
        variant3: "width-48 height-48"
      },
      state: {
        default: "hover:bg-state-ghost-hover",
        hover: "bg-state-ghost-hover",
        opened: "bg-state-soft"
      }
    },
    defaultVariants: {
      variant: "variant3",
      state: "default"
    }
  }
), I = N(
  ({
    variant: t = "variant3",
    collapsed: x,
    avatarSrc: m,
    avatarAlt: A,
    avatarInitials: f,
    name: a,
    email: p,
    isOpen: v = !1,
    onClick: s,
    className: n,
    ...i
  }, o) => {
    const { state: w } = S(), g = x ?? w === "collapsed", d = v ? "opened" : "default", y = g ? j[t] : _[t], l = () => /* @__PURE__ */ e(
      z,
      {
        size: y,
        shape: "circular",
        variant: m ? "userpic" : f ? "initials" : "empty",
        src: m,
        alt: A,
        initials: f
      }
    ), u = () => /* @__PURE__ */ e(
      V,
      {
        iconType: ["arrows", "arrow-drop-down"],
        size: 16,
        color: "var(--icon-default-muted)",
        className: r(
          "transition-transform duration-200",
          v && "rotate-180"
        )
      }
    );
    return g ? /* @__PURE__ */ e(
      "button",
      {
        ref: o,
        type: "button",
        onClick: s,
        className: r(
          E({ variant: t, state: d }),
          n
        ),
        ...i,
        children: l()
      }
    ) : t === "variant1" ? /* @__PURE__ */ c(
      "button",
      {
        ref: o,
        type: "button",
        onClick: s,
        className: r(
          h({ variant: t, state: d }),
          n
        ),
        ...i,
        children: [
          l(),
          a && /* @__PURE__ */ e("span", { className: "flex-1 truncate size-sm font-medium", children: a }),
          u()
        ]
      }
    ) : t === "variant2" ? /* @__PURE__ */ c(
      "button",
      {
        ref: o,
        type: "button",
        onClick: s,
        className: r(
          h({ variant: t, state: d }),
          n
        ),
        ...i,
        children: [
          l(),
          /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col min-w-0 ds-gap-1", children: [
            a && /* @__PURE__ */ e("span", { className: "truncate size-sm font-medium line-height-leading-5", children: a }),
            p && /* @__PURE__ */ e("span", { className: "truncate size-xs text-muted line-height-leading-4", children: p })
          ] }),
          u()
        ]
      }
    ) : /* @__PURE__ */ c(
      "button",
      {
        ref: o,
        type: "button",
        onClick: s,
        className: r(
          h({ variant: t, state: d }),
          n
        ),
        ...i,
        children: [
          l(),
          a && /* @__PURE__ */ e("span", { className: "flex-1 truncate size-sm font-medium", children: a }),
          u()
        ]
      }
    );
  }
);
I.displayName = "SidebarUserbar";
export {
  I as SidebarUserbar,
  E as collapsedUserbarVariants,
  h as userbarVariants
};
