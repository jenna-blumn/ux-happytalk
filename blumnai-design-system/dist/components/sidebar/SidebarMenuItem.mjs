"use client";
import { jsx as e, jsxs as f, Fragment as M } from "react/jsx-runtime";
import { forwardRef as p, useRef as T, useCallback as A, isValidElement as L } from "react";
import { cva as E } from "class-variance-authority";
import { useKeyboardShortcut as O } from "../../hooks/use-keyboard-shortcut.mjs";
import { Avatar as F } from "../avatar/Avatar/Avatar.mjs";
import { Badge as S } from "../badge/Badge/Badge.mjs";
import { useSidebar as g, SidebarMenuItem as x, SidebarMenuButton as N } from "./SidebarPrimitives.mjs";
import { cn as h } from "../../utils/cn.mjs";
import { Icon as H } from "../icons/Icon/Icon.mjs";
const U = 18, K = "min-width-16 height-16 size-xs padding-x-4 rounded-xs", Y = "bg-muted border border-default text-subtle", V = (t) => typeof t == "string" || typeof t == "number" ? /* @__PURE__ */ e(S, { label: String(t), size: "sm", color: "neutral" }) : /* @__PURE__ */ e(S, { size: "sm", color: "neutral", ...t }), y = E(
  "flex w-full items-center rounded-sm font-body size-sm line-height-leading-5 text-default transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "height-32 padding-6 ds-gap-6",
        label: "height-24 padding-x-8 padding-y-4 ds-gap-4",
        caption: "min-height-40 padding-x-10 padding-y-6 ds-gap-2",
        buttons: "height-32 ds-gap-4",
        divider: "height-8 padding-x-0 padding-y-0",
        avatar: "height-32 padding-6 ds-gap-6",
        children: "height-32 padding-6 ds-gap-6"
      },
      state: {
        default: "",
        hover: "bg-state-ghost-hover",
        active: "bg-state-soft",
        disabled: "opacity-50 cursor-not-allowed"
      }
    },
    defaultVariants: {
      variant: "default",
      state: "default"
    }
  }
), w = (t, a = U) => {
  if (!t || typeof t == "object" && !Array.isArray(t) && Object.keys(t).length === 0) return null;
  if (Array.isArray(t) && (t.length === 2 || t.length === 3) && typeof t[0] == "string" && typeof t[1] == "string") {
    const n = t[2], i = t.length === 3 && (n === !0 || n === "true");
    return /* @__PURE__ */ e(
      H,
      {
        iconType: [t[0], t[1]],
        isFill: i,
        size: a,
        color: "var(--icon-default-muted)"
      }
    );
  }
  return L(t) ? /* @__PURE__ */ e("span", { className: "inline-flex items-center", children: t }) : null;
}, j = p(
  ({ icon: t, label: a, badge: n, shortcut: i, isActive: r, disabled: s, collapsed: d, tooltip: c, className: o, ...u }, l) => {
    const m = T(null), v = A(
      (C) => {
        m.current = C, typeof l == "function" ? l(C) : l && (l.current = C);
      },
      [l]
    );
    O(
      i,
      () => {
        m.current?.click();
      },
      { enabled: !s }
    );
    const { state: b } = g(), I = d ?? b === "collapsed";
    return /* @__PURE__ */ e(x, { children: /* @__PURE__ */ f(
      N,
      {
        ref: v,
        isActive: r,
        disabled: s,
        tooltip: c || a,
        className: h(
          y({ variant: "default", state: r ? "active" : s ? "disabled" : "default" }),
          o
        ),
        ...u,
        children: [
          t && /* @__PURE__ */ e("span", { className: "flex items-center justify-center width-20 height-20 shrink-0", children: w(t) }),
          !I && /* @__PURE__ */ f(M, { children: [
            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: a }),
            i && /* @__PURE__ */ e("span", { className: h("inline-flex items-center justify-center leading-none", K, Y), children: i }),
            n && V(n)
          ] })
        ]
      }
    ) });
  }
);
j.displayName = "DefaultMenuItem";
const z = p(
  ({ label: t, icon: a, action: n, collapsed: i, className: r, ...s }, d) => {
    const { state: c } = g();
    return i ?? c === "collapsed" ? null : /* @__PURE__ */ f(
      "div",
      {
        ref: d,
        className: h(
          y({ variant: "label" }),
          "text-muted size-xs font-medium select-none",
          r
        ),
        ...s,
        children: [
          a && /* @__PURE__ */ e("span", { className: "flex items-center justify-center width-16 height-16 shrink-0", children: w(a, 16) }),
          /* @__PURE__ */ e("span", { className: "flex-1 truncate uppercase letter-spacing-tracking-wide", children: t }),
          n && /* @__PURE__ */ e("span", { className: "opacity-0 group-hover:opacity-100 transition-opacity", children: n })
        ]
      }
    );
  }
);
z.displayName = "LabelMenuItem";
const _ = p(
  ({ label: t, caption: a, isActive: n, disabled: i, collapsed: r, tooltip: s, className: d, variant: c, ...o }, u) => {
    const { state: l } = g(), m = r ?? l === "collapsed";
    return /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(
      N,
      {
        ref: u,
        isActive: n,
        disabled: i,
        tooltip: s || t,
        className: h(
          y({ variant: "caption", state: n ? "active" : i ? "disabled" : "default" }),
          "!h-auto flex-col items-start justify-center !overflow-visible",
          d
        ),
        ...o,
        children: !m && /* @__PURE__ */ f(M, { children: [
          /* @__PURE__ */ e("span", { className: "font-body size-sm font-medium w-full", children: t }),
          /* @__PURE__ */ e("span", { className: "font-body size-xs text-muted w-full", children: a })
        ] })
      }
    ) });
  }
);
_.displayName = "CaptionMenuItem";
const k = p(
  ({ icon: t, label: a, actions: n, isActive: i, disabled: r, collapsed: s, tooltip: d, className: c, variant: o, ...u }, l) => {
    const { state: m } = g(), v = s ?? m === "collapsed";
    return /* @__PURE__ */ e(x, { children: /* @__PURE__ */ f("div", { className: h(
      "group/buttons flex items-center w-full rounded-sm transition-colors",
      i ? "bg-state-soft" : "hover:bg-state-ghost-hover",
      r && "opacity-50 cursor-not-allowed",
      c
    ), children: [
      /* @__PURE__ */ f(
        "button",
        {
          ref: l,
          disabled: r,
          className: h(
            "flex-1 flex items-center height-32 padding-x-10 ds-gap-6 font-body size-sm text-default",
            "bg-transparent border-none cursor-pointer text-left",
            r && "cursor-not-allowed"
          ),
          ...u,
          children: [
            t && /* @__PURE__ */ e("span", { className: "flex items-center justify-center width-16 height-16 shrink-0", children: w(t, 16) }),
            !v && /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: a })
          ]
        }
      ),
      n && !v && /* @__PURE__ */ e("div", { className: "flex items-center ds-gap-6 padding-r-8 opacity-0 group-hover/buttons:opacity-100 transition-opacity", children: n })
    ] }) });
  }
);
k.displayName = "ButtonsMenuItem";
const B = p(
  ({ className: t, ...a }, n) => /* @__PURE__ */ e(
    "div",
    {
      ref: n,
      role: "separator",
      className: h(
        y({ variant: "divider" }),
        "margin-y-16",
        t
      ),
      ...a,
      children: /* @__PURE__ */ e("div", { className: "w-full height-2 bg-divider" })
    }
  )
);
B.displayName = "DividerMenuItem";
const D = p(
  ({ avatarSrc: t, avatarAlt: a, avatarInitials: n, label: i, badge: r, isActive: s, disabled: d, collapsed: c, tooltip: o, className: u, variant: l, ...m }, v) => {
    const { state: b } = g(), I = c ?? b === "collapsed";
    return /* @__PURE__ */ e(x, { children: /* @__PURE__ */ f(
      N,
      {
        ref: v,
        isActive: s,
        disabled: d,
        tooltip: o || i,
        className: h(
          y({ variant: "avatar", state: s ? "active" : d ? "disabled" : "default" }),
          u
        ),
        ...m,
        children: [
          /* @__PURE__ */ e(
            F,
            {
              size: "xs",
              shape: "circular",
              variant: t ? "userpic" : n ? "initials" : "empty",
              src: t,
              alt: a,
              initials: n
            }
          ),
          !I && /* @__PURE__ */ f(M, { children: [
            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: i }),
            r && V(r)
          ] })
        ]
      }
    ) });
  }
);
D.displayName = "AvatarMenuItem";
const R = p(
  ({ label: t, nested: a = !0, isActive: n, disabled: i, collapsed: r, tooltip: s, className: d, variant: c, ...o }, u) => {
    const { state: l } = g();
    return r ?? l === "collapsed" ? null : /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(
      N,
      {
        ref: u,
        isActive: n,
        disabled: i,
        tooltip: s || t,
        className: h(
          y({ variant: "children", state: n ? "active" : i ? "disabled" : "default" }),
          a && "padding-l-12",
          d
        ),
        ...o,
        children: /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: t })
      }
    ) });
  }
);
R.displayName = "ChildrenMenuItem";
const Z = (t) => !("variant" in t) || t.variant === "default", $ = (t) => "variant" in t && t.variant === "label", q = (t) => "variant" in t && t.variant === "caption", G = (t) => "variant" in t && t.variant === "buttons", J = (t) => "variant" in t && t.variant === "divider", P = (t) => "variant" in t && t.variant === "avatar", Q = (t) => "variant" in t && t.variant === "children", W = p(
  (t, a) => $(t) ? /* @__PURE__ */ e(z, { ref: a, ...t }) : J(t) ? /* @__PURE__ */ e(B, { ref: a, ...t }) : q(t) ? /* @__PURE__ */ e(_, { ref: a, ...t }) : G(t) ? /* @__PURE__ */ e(k, { ref: a, ...t }) : P(t) ? /* @__PURE__ */ e(D, { ref: a, ...t }) : Q(t) ? /* @__PURE__ */ e(R, { ref: a, ...t }) : Z(t) ? /* @__PURE__ */ e(j, { ref: a, ...t }) : null
);
W.displayName = "SidebarMenuItem";
export {
  W as SidebarMenuItem,
  y as menuItemVariants
};
