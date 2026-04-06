"use client";
import { jsx as t, jsxs as u } from "react/jsx-runtime";
import * as r from "react";
import * as d from "@radix-ui/react-menubar";
import { useKeyboardShortcut as C } from "../../hooks/use-keyboard-shortcut.mjs";
import { cn as s } from "../../utils/cn.mjs";
import { Icon as b } from "../icons/Icon/Icon.mjs";
import { Badge as I } from "../badge/Badge/Badge.mjs";
const k = r.forwardRef(({ className: e, ...a }, n) => /* @__PURE__ */ t(
  d.Root,
  {
    ref: n,
    className: s(
      "flex height-36 items-center ds-gap-4 rounded-lg border-default bg-card padding-4",
      e
    ),
    ...a
  }
));
k.displayName = "Menubar";
function Q({
  ...e
}) {
  return /* @__PURE__ */ t(d.Menu, { ...e });
}
function U({
  ...e
}) {
  return /* @__PURE__ */ t(d.Group, { ...e });
}
function V({
  ...e
}) {
  return /* @__PURE__ */ t(d.RadioGroup, { ...e });
}
function W({
  ...e
}) {
  return /* @__PURE__ */ t(d.Sub, { ...e });
}
const T = r.forwardRef(({ className: e, ...a }, n) => /* @__PURE__ */ t(
  d.Trigger,
  {
    ref: n,
    className: s(
      "flex cursor-default select-none items-center rounded-sm padding-x-12 padding-y-6 size-sm font-body font-medium line-height-leading-5 text-default outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...a
  }
));
T.displayName = "MenubarTrigger";
const j = r.forwardRef(({
  className: e,
  align: a = "start",
  alignOffset: n = -4,
  sideOffset: i = 8,
  width: o,
  style: l,
  container: p,
  ...h
}, f) => {
  const g = o !== void 0 && o !== "" ? { width: typeof o == "number" ? `${o}px` : o } : void 0, c = {
    ...l || {},
    ...g || {}
  };
  return /* @__PURE__ */ t(d.Portal, { container: p, children: /* @__PURE__ */ t(
    d.Content,
    {
      ref: f,
      align: a,
      alignOffset: n,
      sideOffset: i,
      className: s(
        "z-50 min-w-[192px] max-h-[var(--radix-menubar-content-available-height)] overflow-y-auto overflow-x-hidden rounded-lg border-default bg-card padding-4 text-default shadow-modal-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-[--radix-menubar-content-transform-origin]",
        o && "w-auto",
        e
      ),
      style: Object.keys(c).length > 0 ? c : void 0,
      ...h
    }
  ) });
});
j.displayName = "MenubarContent";
const G = r.forwardRef(({ className: e, ...a }, n) => /* @__PURE__ */ t(
  d.SubContent,
  {
    ref: n,
    className: s(
      "z-50 min-w-[128px] max-h-[var(--radix-menubar-content-available-height)] overflow-y-auto overflow-x-hidden rounded-lg border-default bg-card padding-4 text-default shadow-modal-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "origin-[--radix-menubar-content-transform-origin]",
      e
    ),
    ...a
  }
));
G.displayName = "MenubarSubContent";
const L = r.forwardRef(({ className: e, inset: a, children: n, ...i }, o) => /* @__PURE__ */ u(
  d.SubTrigger,
  {
    ref: o,
    className: s(
      "flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 padding-y-6 size-sm font-body line-height-leading-5 text-default outline-none",
      "focus:bg-accent data-[state=open]:bg-accent",
      a && "padding-l-32",
      e
    ),
    ...i,
    children: [
      n,
      /* @__PURE__ */ t(b, { iconType: ["arrows", "arrow-right-s"], size: 16, color: "default-subtle", className: "ml-auto" })
    ]
  }
));
L.displayName = "MenubarSubTrigger";
const F = r.forwardRef(({
  className: e,
  inset: a,
  destructive: n,
  leadIcon: i,
  leadIconFill: o = !1,
  tailIcon: l,
  tailIconFill: p = !1,
  iconColor: h,
  caption: f,
  description: g,
  shortcut: c,
  size: z = "default",
  children: M,
  onClick: R,
  ...x
}, m) => {
  const w = r.useRef(null), S = r.useCallback(
    (N) => {
      w.current = N, typeof m == "function" ? m(N) : m && (m.current = N);
    },
    [m]
  );
  C(
    c,
    () => {
      w.current?.click();
    },
    { enabled: !x.disabled }
  );
  const y = z === "large", v = x.disabled ? "default-disabled" : n ? "destructive" : h ?? "default-subtle";
  return /* @__PURE__ */ u(
    d.Item,
    {
      ref: S,
      className: s(
        "relative flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 size-sm font-body line-height-leading-5 outline-none transition-colors",
        y ? "padding-y-8" : "padding-y-6",
        n ? "text-destructive focus:bg-state-destructive-soft focus:text-destructive" : "text-default focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a && "padding-l-32",
        e
      ),
      onClick: R,
      ...x,
      children: [
        i && /* @__PURE__ */ t("div", { className: s(
          "flex items-center justify-center flex-shrink-0",
          y ? "width-28 height-28 rounded-sm bg-muted" : "width-20 height-20"
        ), children: /* @__PURE__ */ t(
          b,
          {
            iconType: i,
            size: 16,
            color: v,
            isFill: o
          }
        ) }),
        y && g ? /* @__PURE__ */ u("div", { className: "flex flex-col flex-1 min-w-0 ds-gap-1", children: [
          /* @__PURE__ */ t("span", { className: "truncate", children: M }),
          /* @__PURE__ */ t("span", { className: "font-body size-xs line-height-leading-4 text-muted truncate", children: g })
        ] }) : /* @__PURE__ */ t("span", { className: "flex-1 min-w-0 truncate", children: M }),
        f && /* @__PURE__ */ t("span", { className: "font-body size-xs line-height-leading-4 text-muted flex-shrink-0", children: f }),
        c && /* @__PURE__ */ t(I, { size: "sm", color: "neutral", border: !0, label: c }),
        l && /* @__PURE__ */ t("div", { className: "flex items-center justify-center flex-shrink-0 width-20 height-20", children: /* @__PURE__ */ t(
          b,
          {
            iconType: l,
            size: 16,
            color: v,
            isFill: p
          }
        ) })
      ]
    }
  );
});
F.displayName = "MenubarItem";
const P = r.forwardRef(({ className: e, children: a, checked: n, inset: i, ...o }, l) => /* @__PURE__ */ u(
  d.CheckboxItem,
  {
    ref: l,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm padding-y-6 padding-r-8 padding-l-32 size-sm font-body line-height-leading-5 outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      i && "padding-l-32",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ t("span", { className: "absolute flex height-16 width-16 items-center justify-center", style: { left: "8px" }, children: /* @__PURE__ */ t(d.ItemIndicator, { children: /* @__PURE__ */ t(b, { iconType: ["system", "check"], size: 16, color: "default" }) }) }),
      a
    ]
  }
));
P.displayName = "MenubarCheckboxItem";
const B = r.forwardRef(({ className: e, children: a, inset: n, ...i }, o) => /* @__PURE__ */ u(
  d.RadioItem,
  {
    ref: o,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm padding-y-6 padding-r-8 padding-l-32 size-sm font-body line-height-leading-5 outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n && "padding-l-32",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ t("span", { className: "absolute flex height-16 width-16 items-center justify-center", style: { left: "8px" }, children: /* @__PURE__ */ t(d.ItemIndicator, { children: /* @__PURE__ */ t("div", { className: "width-8 height-8 rounded-full bg-current" }) }) }),
      a
    ]
  }
));
B.displayName = "MenubarRadioItem";
const K = r.forwardRef(({ className: e, inset: a, caption: n, children: i, ...o }, l) => /* @__PURE__ */ u(
  d.Label,
  {
    ref: l,
    className: s(
      "flex items-center justify-between padding-x-8 padding-y-6 size-xs font-body font-semibold line-height-leading-4 text-muted",
      a && "padding-l-32",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ t("span", { children: i }),
      n && /* @__PURE__ */ t("span", { className: "font-normal text-hint", children: n })
    ]
  }
));
K.displayName = "MenubarLabel";
const O = r.forwardRef(({ className: e, ...a }, n) => /* @__PURE__ */ t(
  d.Separator,
  {
    ref: n,
    className: s("-margin-x-4 margin-y-4 height-1 bg-muted", e),
    ...a
  }
));
O.displayName = "MenubarSeparator";
const $ = ({
  className: e,
  ...a
}) => /* @__PURE__ */ t(
  "span",
  {
    className: s("ml-auto size-xs font-body letter-spacing-tracking-wide text-muted", e),
    ...a
  }
);
$.displayName = "MenubarShortcut";
const q = r.forwardRef(
  ({ className: e, children: a, ...n }, i) => /* @__PURE__ */ t(
    "div",
    {
      ref: i,
      className: s(
        "padding-x-8 padding-y-6 font-body size-xs line-height-leading-4 text-muted",
        e
      ),
      ...n,
      children: a
    }
  )
);
q.displayName = "MenubarCaption";
export {
  k as Menubar,
  q as MenubarCaption,
  P as MenubarCheckboxItem,
  j as MenubarContent,
  U as MenubarGroup,
  F as MenubarItem,
  K as MenubarLabel,
  Q as MenubarMenu,
  V as MenubarRadioGroup,
  B as MenubarRadioItem,
  O as MenubarSeparator,
  $ as MenubarShortcut,
  W as MenubarSub,
  G as MenubarSubContent,
  L as MenubarSubTrigger,
  T as MenubarTrigger
};
