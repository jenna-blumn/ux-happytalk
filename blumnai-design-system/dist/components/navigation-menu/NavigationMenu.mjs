"use client";
import { jsxs as c, jsx as a } from "react/jsx-runtime";
import * as r from "react";
import * as n from "@radix-ui/react-navigation-menu";
import { cva as N } from "class-variance-authority";
import { cn as s } from "../../utils/cn.mjs";
import { Icon as f } from "../icons/Icon/Icon.mjs";
const x = r.forwardRef(({ className: o, children: e, ...t }, i) => /* @__PURE__ */ c(
  n.Root,
  {
    ref: i,
    className: s(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      o
    ),
    ...t,
    children: [
      e,
      /* @__PURE__ */ a(g, {})
    ]
  }
));
x.displayName = "NavigationMenu";
const b = r.forwardRef(({ className: o, ...e }, t) => /* @__PURE__ */ a(
  n.List,
  {
    ref: t,
    className: s(
      "group flex flex-1 list-none items-center justify-center ds-gap-4",
      o
    ),
    ...e
  }
));
b.displayName = "NavigationMenuList";
const k = n.Item, u = N(
  s(
    "group inline-flex height-36 w-max items-center justify-center rounded-md bg-transparent",
    "padding-x-16 padding-y-8 size-sm font-body font-medium line-height-leading-5 text-default",
    "transition-colors hover:bg-accent hover:text-accent-foreground",
    "focus:bg-accent focus:text-accent-foreground focus:outline-none",
    "focus-visible:shadow-component-misc-focus focus-visible:rounded-sm",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50",
    "data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
  )
), y = r.forwardRef(({ className: o, children: e, ...t }, i) => /* @__PURE__ */ c(
  n.Trigger,
  {
    ref: i,
    className: s(u(), "group", o),
    ...t,
    children: [
      e,
      " ",
      /* @__PURE__ */ a(
        f,
        {
          iconType: ["arrows", "arrow-down-s"],
          size: 16,
          color: "default-subtle",
          className: "relative transition duration-300 group-data-[state=open]:rotate-180",
          style: { marginLeft: "4px", top: "1px" },
          "aria-hidden": "true"
        }
      )
    ]
  }
));
y.displayName = "NavigationMenuTrigger";
const w = r.forwardRef(({ className: o, width: e, style: t, ...i }, d) => {
  const m = e !== void 0 && e !== "" ? { width: typeof e == "number" ? `${e}px` : e } : void 0, l = {
    ...t || {},
    ...m || {}
  };
  return /* @__PURE__ */ a(
    n.Content,
    {
      ref: d,
      className: s(
        "left-0 top-0 w-full md:absolute md:w-auto",
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out",
        "data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52",
        "data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
        e && "w-auto",
        o
      ),
      style: Object.keys(l).length > 0 ? l : void 0,
      ...i
    }
  );
});
w.displayName = "NavigationMenuContent";
const M = r.forwardRef(({ className: o, active: e, ...t }, i) => /* @__PURE__ */ a(
  n.Link,
  {
    ref: i,
    className: s(
      u(),
      e && "bg-accent/50 text-accent-foreground",
      o
    ),
    ...t
  }
));
M.displayName = "NavigationMenuLink";
const g = r.forwardRef(({ className: o, ...e }, t) => /* @__PURE__ */ a("div", { className: "absolute left-0 top-full flex justify-center", style: { marginTop: "6px" }, children: /* @__PURE__ */ a(
  n.Viewport,
  {
    className: s(
      "origin-top-center relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden",
      "rounded-lg border-default bg-card text-default shadow-modal-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90",
      "md:w-[var(--radix-navigation-menu-viewport-width)]",
      o
    ),
    ref: t,
    ...e
  }
) }));
g.displayName = "NavigationMenuViewport";
const L = r.forwardRef(({ className: o, ...e }, t) => /* @__PURE__ */ a(
  n.Indicator,
  {
    ref: t,
    className: s(
      "top-full z-[1] flex height-6 items-end justify-center overflow-hidden",
      "data-[state=visible]:animate-in data-[state=hidden]:animate-out",
      "data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      o
    ),
    ...e,
    children: /* @__PURE__ */ a("div", { className: "relative top-[60%] height-8 width-8 rotate-45 rounded-tl-sm bg-card border-default shadow-sm" })
  }
));
L.displayName = "NavigationMenuIndicator";
const R = r.forwardRef(({ className: o, title: e, description: t, href: i, icon: d, iconFill: m = !1, active: l, children: p, ...v }, h) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(n.Link, { asChild: !0, active: l, children: /* @__PURE__ */ a(
  "a",
  {
    ref: h,
    href: i,
    className: s(
      "block select-none rounded-md padding-12 no-underline outline-none transition-colors",
      "hover:bg-accent focus:bg-accent",
      "focus-visible:shadow-component-misc-focus",
      o
    ),
    ...v,
    children: p || /* @__PURE__ */ c("div", { className: "flex items-start ds-gap-12", children: [
      d && /* @__PURE__ */ a("div", { className: "flex items-center justify-center width-24 height-24 flex-shrink-0", style: { marginTop: "1px" }, children: /* @__PURE__ */ a(
        f,
        {
          iconType: d,
          size: 20,
          color: "default-subtle",
          isFill: m
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "flex flex-col ds-gap-2", children: [
        /* @__PURE__ */ a("div", { className: "size-sm font-body font-medium line-height-leading-5 text-default", children: e }),
        t && /* @__PURE__ */ a("p", { className: "size-sm font-body line-height-leading-5 text-muted", children: t })
      ] })
    ] })
  }
) }) }));
R.displayName = "NavigationMenuListItem";
export {
  x as NavigationMenu,
  w as NavigationMenuContent,
  L as NavigationMenuIndicator,
  k as NavigationMenuItem,
  M as NavigationMenuLink,
  b as NavigationMenuList,
  R as NavigationMenuListItem,
  y as NavigationMenuTrigger,
  g as NavigationMenuViewport,
  u as navigationMenuTriggerStyle
};
