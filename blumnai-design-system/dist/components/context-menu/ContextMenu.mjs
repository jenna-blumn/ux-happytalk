"use client";
import { jsx as e, jsxs as c } from "react/jsx-runtime";
import * as s from "react";
import * as o from "@radix-ui/react-context-menu";
import { useKeyboardShortcut as S } from "../../hooks/use-keyboard-shortcut.mjs";
import { cn as r } from "../../utils/cn.mjs";
import { Icon as b } from "../icons/Icon/Icon.mjs";
import { Badge as k } from "../badge/Badge/Badge.mjs";
const H = o.Root, J = o.Trigger, Q = o.Group, U = o.Portal, V = o.Sub, X = o.RadioGroup, I = s.forwardRef(({ className: n, width: t, style: a, container: i, ...d }, l) => {
  const f = t !== void 0 && t !== "" ? { width: typeof t == "number" ? `${t}px` : t } : void 0, m = {
    ...a || {},
    ...f || {}
  };
  return /* @__PURE__ */ e(o.Portal, { container: i, children: /* @__PURE__ */ e(
    o.Content,
    {
      ref: l,
      className: r(
        "z-50 max-h-[var(--radix-context-menu-content-available-height)] min-w-[128px] overflow-y-auto overflow-x-hidden rounded-lg border-default bg-card padding-4 text-default shadow-modal-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-[--radix-context-menu-content-transform-origin]",
        t && "w-auto",
        n
      ),
      style: Object.keys(m).length > 0 ? m : void 0,
      ...d
    }
  ) });
});
I.displayName = "ContextMenuContent";
const L = s.forwardRef(({
  className: n,
  inset: t,
  destructive: a,
  leadIcon: i,
  leadIconFill: d = !1,
  tailIcon: l,
  tailIconFill: f = !1,
  iconColor: m,
  caption: y,
  description: C,
  shortcut: x,
  size: M = "default",
  children: N,
  onClick: R,
  ...g
}, u) => {
  const v = s.useRef(null), z = s.useCallback(
    (h) => {
      v.current = h, typeof u == "function" ? u(h) : u && (u.current = h);
    },
    [u]
  );
  S(
    x,
    () => {
      v.current?.click();
    },
    { enabled: !g.disabled }
  );
  const p = M === "large", w = g.disabled ? "default-disabled" : a ? "destructive" : m ?? "default-subtle";
  return /* @__PURE__ */ c(
    o.Item,
    {
      ref: z,
      className: r(
        "relative flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 size-sm font-body line-height-leading-5 outline-none transition-colors",
        p ? "padding-y-8" : "padding-y-6",
        a ? "text-destructive focus:bg-state-destructive-soft focus:text-destructive" : "text-default focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n
      ),
      style: t ? { paddingLeft: "32px" } : void 0,
      onClick: R,
      ...g,
      children: [
        i && /* @__PURE__ */ e("div", { className: r(
          "flex items-center justify-center flex-shrink-0",
          p ? "width-28 height-28 rounded-sm bg-muted" : "width-20 height-20"
        ), children: /* @__PURE__ */ e(
          b,
          {
            iconType: i,
            size: 16,
            color: w,
            isFill: d
          }
        ) }),
        p && C ? /* @__PURE__ */ c("div", { className: "flex flex-col flex-1 min-w-0 ds-gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate", children: N }),
          /* @__PURE__ */ e("span", { className: "font-body size-xs line-height-leading-4 text-muted truncate", children: C })
        ] }) : /* @__PURE__ */ e("span", { className: "flex-1 min-w-0 truncate", children: N }),
        y && /* @__PURE__ */ e("span", { className: "font-body size-xs text-muted flex-shrink-0", children: y }),
        x && /* @__PURE__ */ e(k, { size: "sm", color: "neutral", border: !0, label: x }),
        l && /* @__PURE__ */ e("div", { className: "flex items-center justify-center flex-shrink-0 width-20 height-20", children: /* @__PURE__ */ e(
          b,
          {
            iconType: l,
            size: 16,
            color: w,
            isFill: f
          }
        ) })
      ]
    }
  );
});
L.displayName = "ContextMenuItem";
const j = s.forwardRef(({ className: n, children: t, checked: a, inset: i, ...d }, l) => /* @__PURE__ */ c(
  o.CheckboxItem,
  {
    ref: l,
    className: r(
      "relative flex cursor-default select-none items-center rounded-sm padding-y-6 padding-r-8 size-sm font-body line-height-leading-5 outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n
    ),
    style: { paddingLeft: i ? "56px" : "32px" },
    checked: a,
    ...d,
    children: [
      /* @__PURE__ */ e(
        "span",
        {
          className: "absolute flex height-16 width-16 items-center justify-center",
          style: { left: "8px" },
          children: /* @__PURE__ */ e(o.ItemIndicator, { children: /* @__PURE__ */ e(b, { iconType: ["system", "check"], size: 16, color: "default" }) })
        }
      ),
      t
    ]
  }
));
j.displayName = "ContextMenuCheckboxItem";
const T = s.forwardRef(({ className: n, children: t, inset: a, ...i }, d) => /* @__PURE__ */ c(
  o.RadioItem,
  {
    ref: d,
    className: r(
      "relative flex cursor-default select-none items-center rounded-sm padding-y-6 padding-r-8 size-sm font-body line-height-leading-5 outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n
    ),
    style: { paddingLeft: a ? "56px" : "32px" },
    ...i,
    children: [
      /* @__PURE__ */ e(
        "span",
        {
          className: "absolute flex height-16 width-16 items-center justify-center",
          style: { left: "8px" },
          children: /* @__PURE__ */ e(o.ItemIndicator, { children: /* @__PURE__ */ e("div", { className: "width-8 height-8 rounded-full bg-current" }) })
        }
      ),
      t
    ]
  }
));
T.displayName = "ContextMenuRadioItem";
const G = s.forwardRef(({ className: n, inset: t, caption: a, children: i, ...d }, l) => /* @__PURE__ */ c(
  o.Label,
  {
    ref: l,
    className: r(
      "flex items-center justify-between padding-x-8 padding-y-6 size-xs font-body font-semibold text-muted",
      n
    ),
    style: t ? { paddingLeft: "32px" } : void 0,
    ...d,
    children: [
      /* @__PURE__ */ e("span", { children: i }),
      a && /* @__PURE__ */ e("span", { className: "font-normal text-hint", children: a })
    ]
  }
));
G.displayName = "ContextMenuLabel";
const P = s.forwardRef(({ className: n, ...t }, a) => /* @__PURE__ */ e(
  o.Separator,
  {
    ref: a,
    className: r("-margin-x-4 margin-y-4 height-1 bg-muted", n),
    ...t
  }
));
P.displayName = "ContextMenuSeparator";
const B = ({
  className: n,
  ...t
}) => /* @__PURE__ */ e(
  "span",
  {
    className: r("ml-auto size-xs font-body letter-spacing-tracking-wide text-muted", n),
    ...t
  }
);
B.displayName = "ContextMenuShortcut";
const F = s.forwardRef(({ className: n, inset: t, children: a, ...i }, d) => /* @__PURE__ */ c(
  o.SubTrigger,
  {
    ref: d,
    className: r(
      "flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 padding-y-6 size-sm font-body line-height-leading-5 text-default outline-none",
      "focus:bg-accent data-[state=open]:bg-accent",
      n
    ),
    style: t ? { paddingLeft: "32px" } : void 0,
    ...i,
    children: [
      a,
      /* @__PURE__ */ e(W, {})
    ]
  }
));
F.displayName = "ContextMenuSubTrigger";
const K = s.forwardRef(({ className: n, ...t }, a) => /* @__PURE__ */ e(
  o.SubContent,
  {
    ref: a,
    className: r(
      "z-50 min-w-[128px] overflow-hidden rounded-lg border-default bg-card padding-4 text-default shadow-modal-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "origin-[--radix-context-menu-content-transform-origin]",
      n
    ),
    ...t
  }
));
K.displayName = "ContextMenuSubContent";
const O = s.forwardRef(
  ({ className: n, children: t, ...a }, i) => /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      className: r(
        "padding-x-8 padding-y-6 font-body size-xs line-height-leading-4 text-muted",
        n
      ),
      ...a,
      children: t
    }
  )
);
O.displayName = "ContextMenuCaption";
const W = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ml-auto width-16 height-16",
    "aria-hidden": "true",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M6 12L10 8L6 4",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
export {
  H as ContextMenu,
  O as ContextMenuCaption,
  j as ContextMenuCheckboxItem,
  I as ContextMenuContent,
  Q as ContextMenuGroup,
  L as ContextMenuItem,
  G as ContextMenuLabel,
  U as ContextMenuPortal,
  X as ContextMenuRadioGroup,
  T as ContextMenuRadioItem,
  P as ContextMenuSeparator,
  B as ContextMenuShortcut,
  V as ContextMenuSub,
  K as ContextMenuSubContent,
  F as ContextMenuSubTrigger,
  J as ContextMenuTrigger
};
