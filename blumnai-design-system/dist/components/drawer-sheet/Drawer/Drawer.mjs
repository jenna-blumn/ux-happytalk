"use client";
import { jsx as o, jsxs as n } from "react/jsx-runtime";
import * as l from "react";
import { Drawer as a } from "vaul";
import { cn as s } from "../../../utils/cn.mjs";
import { Icon as g } from "../../icons/Icon/Icon.mjs";
const d = l.createContext({
  direction: "bottom"
}), f = ({
  shouldScaleBackground: t = !0,
  direction: e = "bottom",
  ...i
}) => /* @__PURE__ */ o(d.Provider, { value: { direction: e }, children: /* @__PURE__ */ o(
  a.Root,
  {
    shouldScaleBackground: t,
    direction: e,
    autoFocus: !0,
    ...i
  }
) });
f.displayName = "Drawer";
const C = a.Trigger, p = a.Portal, R = a.Close, m = l.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ o(
  a.Overlay,
  {
    ref: i,
    className: s("fixed inset-0 z-50 bg-black/80", t),
    ...e
  }
));
m.displayName = a.Overlay.displayName;
const u = l.forwardRef(({ className: t, children: e, ...i }, c) => {
  const { direction: r } = l.useContext(d);
  return /* @__PURE__ */ n(p, { children: [
    /* @__PURE__ */ o(m, {}),
    /* @__PURE__ */ n(
      a.Content,
      {
        ref: c,
        className: s(
          "fixed z-50 flex bg-background border",
          r === "bottom" && "inset-x-0 bottom-0 [margin-top:96px] h-auto flex-col rounded-t-lg",
          r === "top" && "inset-x-0 top-0 [margin-bottom:96px] h-auto flex-col rounded-b-lg",
          r === "left" && "inset-y-0 left-0 [margin-right:96px] w-auto h-full flex-col rounded-r-lg",
          r === "right" && "inset-y-0 right-0 [margin-left:96px] w-auto h-full flex-col rounded-l-lg",
          t
        ),
        ...i,
        children: [
          (r === "bottom" || r === "top") && /* @__PURE__ */ o(
            "div",
            {
              className: s(
                "mx-auto height-8 w-[100px] rounded-full bg-muted",
                r === "bottom" && "margin-t-16",
                r === "top" && "margin-b-16 mt-auto order-last"
              )
            }
          ),
          (r === "left" || r === "right") && /* @__PURE__ */ o(
            "div",
            {
              className: s(
                "my-auto width-8 h-[100px] rounded-full bg-muted",
                r === "left" && "ml-auto margin-r-16",
                r === "right" && "mr-auto [margin-left:16px]"
              )
            }
          ),
          /* @__PURE__ */ n(a.Close, { className: "absolute [right:20px] [top:20px] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
            /* @__PURE__ */ o(g, { iconType: ["system", "close"], size: 16 }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ] }),
          e
        ]
      }
    )
  ] });
});
u.displayName = "DrawerContent";
const x = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s("grid ds-gap-6 padding-16 text-center sm:text-left", t),
    ...e
  }
);
x.displayName = "DrawerHeader";
const h = ({
  className: t,
  ...e
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s("mt-auto flex flex-col ds-gap-8 padding-16", t),
    ...e
  }
);
h.displayName = "DrawerFooter";
const w = l.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ o(
  a.Title,
  {
    ref: i,
    className: s(
      "size-lg font-body font-semibold line-height-leading-3 letter-spacing-tracking-tight",
      t
    ),
    ...e
  }
));
w.displayName = a.Title.displayName;
const y = l.forwardRef(({ className: t, ...e }, i) => /* @__PURE__ */ o(
  a.Description,
  {
    ref: i,
    className: s("size-sm font-body line-height-leading-5 text-muted-foreground", t),
    ...e
  }
));
y.displayName = a.Description.displayName;
export {
  f as Drawer,
  R as DrawerClose,
  u as DrawerContent,
  y as DrawerDescription,
  h as DrawerFooter,
  x as DrawerHeader,
  m as DrawerOverlay,
  p as DrawerPortal,
  w as DrawerTitle,
  C as DrawerTrigger
};
