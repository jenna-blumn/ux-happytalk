"use client";
import { jsx as e, jsxs as g } from "react/jsx-runtime";
import * as l from "react";
import * as u from "@radix-ui/react-dropdown-menu";
import { useKeyboardShortcut as k } from "../../hooks/use-keyboard-shortcut.mjs";
import { cn as c } from "../../utils/cn.mjs";
import { Icon as w } from "../icons/Icon/Icon.mjs";
import { Badge as D } from "../badge/Badge/Badge.mjs";
import { Avatar as C } from "../avatar/Avatar/Avatar.mjs";
import { Button as I } from "../button/Button.mjs";
const te = u.Root, ne = u.Trigger, oe = u.Group, ae = u.Portal, de = u.Sub, L = l.forwardRef(({ className: a, sideOffset: n = 4, width: t, maxHeight: o, loading: d = !1, style: i, container: s, children: r, ...f }, m) => {
  const p = t !== void 0 && t !== "" ? { width: typeof t == "number" ? `${t}px` : t } : void 0, y = o !== void 0 ? { maxHeight: typeof o == "number" ? `${o}px` : o } : void 0, h = {
    ...i || {},
    ...p || {},
    ...y || {}
  };
  return /* @__PURE__ */ e(u.Portal, { container: s, children: /* @__PURE__ */ e(
    u.Content,
    {
      ref: m,
      sideOffset: n,
      className: c(
        "z-50 min-w-[128px] overflow-y-auto overflow-x-hidden rounded-lg border-default bg-card padding-4 text-default shadow-modal-sm",
        !o && "max-h-[var(--radix-dropdown-menu-content-available-height)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-[--radix-dropdown-menu-content-transform-origin]",
        t && "w-auto",
        a
      ),
      style: Object.keys(h).length > 0 ? h : void 0,
      ...f,
      children: d ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center padding-y-12", children: /* @__PURE__ */ g(
        "svg",
        {
          className: "animate-spin width-16 height-16 text-muted",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "aria-label": "Loading",
          children: [
            /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
          ]
        }
      ) }) : r
    }
  ) });
});
L.displayName = "DropdownMenuContent";
const j = l.forwardRef(({
  className: a,
  inset: n,
  destructive: t,
  leadIcon: o,
  leadIconFill: d = !1,
  tailIcon: i,
  tailIconFill: s = !1,
  iconColor: r,
  caption: f,
  description: m,
  shortcut: p,
  size: y = "default",
  children: h,
  onClick: N,
  ...x
}, b) => {
  const z = l.useRef(null), S = l.useCallback(
    (M) => {
      z.current = M, typeof b == "function" ? b(M) : b && (b.current = M);
    },
    [b]
  );
  k(
    p,
    () => {
      z.current?.click();
    },
    { enabled: !x.disabled }
  );
  const v = y === "large", R = x.disabled ? "default-disabled" : t ? "destructive" : r ?? "default-subtle";
  return /* @__PURE__ */ g(
    u.Item,
    {
      ref: S,
      className: c(
        "relative flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 size-sm font-body line-height-leading-5 outline-none transition-colors",
        v ? "padding-y-8" : "padding-y-6",
        t ? "text-destructive focus:bg-state-destructive-soft focus:text-destructive" : "text-default focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a
      ),
      style: n ? { paddingLeft: "32px" } : void 0,
      onClick: N,
      ...x,
      children: [
        o && /* @__PURE__ */ e("div", { className: c(
          "flex items-center justify-center flex-shrink-0",
          v ? "width-28 height-28 rounded-sm bg-muted" : "width-20 height-20"
        ), children: /* @__PURE__ */ e(
          w,
          {
            iconType: o,
            size: 16,
            color: R,
            isFill: d
          }
        ) }),
        v && m ? /* @__PURE__ */ g("div", { className: "flex flex-col flex-1 min-w-0 ds-gap-1", children: [
          /* @__PURE__ */ e("span", { className: "truncate", children: h }),
          /* @__PURE__ */ e("span", { className: "font-body size-xs line-height-leading-4 text-muted truncate", children: m })
        ] }) : /* @__PURE__ */ e("span", { className: "flex-1 min-w-0 truncate", children: h }),
        f && /* @__PURE__ */ e("span", { className: "font-body size-xs text-muted flex-shrink-0", children: f }),
        p && /* @__PURE__ */ e(D, { size: "sm", color: "neutral", border: !0, label: p }),
        i && /* @__PURE__ */ e("div", { className: "flex items-center justify-center flex-shrink-0 width-20 height-20", children: /* @__PURE__ */ e(
          w,
          {
            iconType: i,
            size: 16,
            color: R,
            isFill: s
          }
        ) })
      ]
    }
  );
});
j.displayName = "DropdownMenuItem";
const T = l.forwardRef(({ className: a, children: n, checked: t, inset: o, leadIcon: d, iconColor: i, ...s }, r) => {
  const f = s.disabled ? "default-disabled" : i ?? "default-subtle";
  return /* @__PURE__ */ g(
    u.CheckboxItem,
    {
      ref: r,
      className: c(
        "relative flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 padding-y-6 size-sm font-body line-height-leading-5 outline-none transition-colors",
        "text-default focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a
      ),
      style: o ? { paddingLeft: "32px" } : void 0,
      checked: t,
      ...s,
      children: [
        /* @__PURE__ */ e("span", { className: "flex items-center justify-center width-16 height-16 flex-shrink-0", children: /* @__PURE__ */ e(u.ItemIndicator, { children: /* @__PURE__ */ e(w, { iconType: ["system", "check"], size: 14, color: "primary" }) }) }),
        d && /* @__PURE__ */ e("div", { className: "flex items-center justify-center flex-shrink-0 width-20 height-20", children: /* @__PURE__ */ e(w, { iconType: d, size: 16, color: f }) }),
        /* @__PURE__ */ e("span", { className: "flex-1 min-w-0 truncate", children: n })
      ]
    }
  );
});
T.displayName = "DropdownMenuCheckboxItem";
const ie = u.RadioGroup, B = l.forwardRef(({ className: a, children: n, inset: t, leadIcon: o, iconColor: d, ...i }, s) => {
  const r = i.disabled ? "default-disabled" : d ?? "default-subtle";
  return /* @__PURE__ */ g(
    u.RadioItem,
    {
      ref: s,
      className: c(
        "relative flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 padding-y-6 size-sm font-body line-height-leading-5 outline-none transition-colors",
        "text-default focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a
      ),
      style: t ? { paddingLeft: "32px" } : void 0,
      ...i,
      children: [
        /* @__PURE__ */ e("span", { className: "flex items-center justify-center width-16 height-16 flex-shrink-0", children: /* @__PURE__ */ e(u.ItemIndicator, { children: /* @__PURE__ */ e("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("circle", { cx: "4", cy: "4", r: "4" }) }) }) }),
        o && /* @__PURE__ */ e("div", { className: "flex items-center justify-center flex-shrink-0 width-20 height-20", children: /* @__PURE__ */ e(w, { iconType: o, size: 16, color: r }) }),
        /* @__PURE__ */ e("span", { className: "flex-1 min-w-0 truncate", children: n })
      ]
    }
  );
});
B.displayName = "DropdownMenuRadioItem";
const G = l.forwardRef(({ className: a, inset: n, caption: t, children: o, ...d }, i) => /* @__PURE__ */ g(
  u.Label,
  {
    ref: i,
    className: c(
      "flex items-center justify-between padding-x-8 padding-y-6 size-xs font-body font-semibold text-muted",
      a
    ),
    style: n ? { paddingLeft: "32px" } : void 0,
    ...d,
    children: [
      /* @__PURE__ */ e("span", { children: o }),
      t && /* @__PURE__ */ e("span", { className: "font-normal text-hint", children: t })
    ]
  }
));
G.displayName = "DropdownMenuLabel";
const P = l.forwardRef(({ className: a, ...n }, t) => /* @__PURE__ */ e(
  u.Separator,
  {
    ref: t,
    className: c("-margin-x-4 margin-y-4 height-1 bg-muted", a),
    ...n
  }
));
P.displayName = "DropdownMenuSeparator";
const _ = ({
  className: a,
  ...n
}) => /* @__PURE__ */ e(
  "span",
  {
    className: c("ml-auto size-xs font-body letter-spacing-tracking-wide text-muted", a),
    ...n
  }
);
_.displayName = "DropdownMenuShortcut";
const W = l.forwardRef(({ className: a, inset: n, children: t, ...o }, d) => /* @__PURE__ */ g(
  u.SubTrigger,
  {
    ref: d,
    className: c(
      "flex cursor-default select-none items-center ds-gap-8 rounded-sm padding-x-8 padding-y-6 size-sm font-body line-height-leading-5 text-default outline-none",
      "focus:bg-accent data-[state=open]:bg-accent",
      "[&_svg]:pointer-events-none [&_svg]:width-16 [&_svg]:height-16 [&_svg]:shrink-0",
      a
    ),
    style: n ? { paddingLeft: "32px" } : void 0,
    ...o,
    children: [
      t,
      /* @__PURE__ */ e(q, {})
    ]
  }
));
W.displayName = "DropdownMenuSubTrigger";
const U = l.forwardRef(({ className: a, ...n }, t) => /* @__PURE__ */ e(
  u.SubContent,
  {
    ref: t,
    className: c(
      "z-50 min-w-[128px] overflow-hidden rounded-lg border-default bg-card padding-4 text-default shadow-modal-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "origin-[--radix-dropdown-menu-content-transform-origin]",
      a
    ),
    ...n
  }
));
U.displayName = "DropdownMenuSubContent";
const $ = l.forwardRef(
  ({ className: a, children: n, ...t }, o) => /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      className: c(
        "padding-x-8 padding-y-6 font-body size-xs line-height-leading-4 text-muted",
        a
      ),
      ...t,
      children: n
    }
  )
);
$.displayName = "DropdownMenuCaption";
const A = l.forwardRef(
  ({
    className: a,
    label: n,
    avatarSrc: t,
    avatarAlt: o,
    tailIcon: d,
    caption: i,
    shortcut: s,
    disabled: r = !1,
    iconColor: f,
    onClick: m
  }, p) => {
    const y = l.useRef(null), h = l.useCallback(
      (x) => {
        y.current = x, typeof p == "function" ? p(x) : p && (p.current = x);
      },
      [p]
    );
    k(
      s,
      () => {
        y.current?.click();
      },
      { enabled: !r }
    );
    const N = r ? "default-disabled" : f ?? "default-subtle";
    return /* @__PURE__ */ g(
      u.Item,
      {
        ref: h,
        disabled: r,
        onSelect: () => m?.(),
        className: c(
          "flex items-center ds-gap-8 rounded-sm padding-x-8 padding-y-6 outline-none transition-colors",
          "text-default focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          a
        ),
        children: [
          /* @__PURE__ */ e(
            C,
            {
              variant: t ? "userpic" : "initials",
              size: "xs",
              shape: "rounded",
              src: t,
              alt: o || n,
              initials: o || n
            }
          ),
          /* @__PURE__ */ e("span", { className: c(
            "flex-1 min-w-0 truncate font-body size-sm line-height-leading-5",
            r ? "text-hint" : "text-default"
          ), children: n }),
          i && /* @__PURE__ */ e("span", { className: c(
            "font-body size-xs flex-shrink-0",
            r ? "text-hint" : "text-muted"
          ), children: i }),
          s && /* @__PURE__ */ e(D, { size: "sm", color: "neutral", border: !0, label: s }),
          d && /* @__PURE__ */ e("div", { className: "flex items-center justify-center flex-shrink-0 width-20 height-20", children: /* @__PURE__ */ e(
            w,
            {
              iconType: d,
              size: 16,
              color: N
            }
          ) })
        ]
      }
    );
  }
);
A.displayName = "DropdownMenuAvatar";
const E = l.forwardRef(
  ({
    className: a,
    name: n,
    description: t,
    avatarSrc: o,
    avatarAlt: d,
    badge: i,
    badgeColor: s = "neutral",
    ...r
  }, f) => /* @__PURE__ */ g(
    "div",
    {
      ref: f,
      role: "presentation",
      className: c(
        "flex items-center ds-gap-12 padding-x-8 padding-y-8",
        a
      ),
      ...r,
      children: [
        /* @__PURE__ */ e(
          C,
          {
            variant: o ? "userpic" : "initials",
            size: "md",
            shape: "rounded",
            src: o,
            alt: d || n,
            initials: d || n
          }
        ),
        /* @__PURE__ */ g("div", { className: "flex flex-col flex-1 min-w-0 ds-gap-1", children: [
          /* @__PURE__ */ e("span", { className: "font-body size-sm font-medium line-height-leading-5 text-default truncate", children: n }),
          t && /* @__PURE__ */ e("span", { className: "font-body size-xs line-height-leading-4 text-muted truncate", children: t })
        ] }),
        i && /* @__PURE__ */ e(D, { size: "sm", color: s, border: !0, label: i })
      ]
    }
  )
);
E.displayName = "DropdownMenuUserbar";
const F = l.forwardRef(
  ({
    className: a,
    label: n,
    buttonStyle: t = "secondary",
    leadIcon: o,
    tailIcon: d,
    disabled: i = !1,
    onClick: s,
    ...r
  }, f) => /* @__PURE__ */ e(
    "div",
    {
      ref: f,
      className: c("padding-x-4 padding-y-4", a),
      ...r,
      children: /* @__PURE__ */ e(
        I,
        {
          buttonStyle: t,
          size: "sm",
          fullWidth: !0,
          leadIcon: o,
          tailIcon: d,
          disabled: i,
          onClick: s,
          children: n
        }
      )
    }
  )
);
F.displayName = "DropdownMenuButton";
const K = l.forwardRef(
  ({ className: a, children: n, ...t }, o) => /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      className: c(
        "flex items-center ds-gap-4 padding-x-4 padding-y-4",
        a
      ),
      ...t,
      children: n
    }
  )
);
K.displayName = "DropdownMenuButtonGroup";
const O = l.forwardRef(
  ({ className: a, label: n, disabled: t = !1, onClick: o, ...d }, i) => /* @__PURE__ */ e(
    "button",
    {
      ref: i,
      type: "button",
      disabled: t,
      onClick: o,
      className: c(
        "flex-1 padding-x-8 padding-y-4 rounded-sm font-body size-sm line-height-leading-5 text-default",
        "bg-transparent border border-default",
        "hover:bg-accent focus:outline-none focus:shadow-component-focus",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        a
      ),
      ...d,
      children: n
    }
  )
);
O.displayName = "MenuButton";
const V = l.forwardRef(
  ({
    className: a,
    value: n,
    onChange: t,
    placeholder: o = "Search...",
    autoFocus: d = !0,
    ...i
  }, s) => {
    const r = l.useRef(null);
    l.useEffect(() => {
      d && r.current && r.current.focus();
    }, [d]);
    const f = (m) => {
      t?.(m.target.value);
    };
    return /* @__PURE__ */ e("div", { className: c("padding-x-4 padding-y-4", a), children: /* @__PURE__ */ g("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        w,
        {
          iconType: ["system", "search"],
          size: 16,
          color: "default-muted",
          className: "absolute left-8 top-1/2 -translate-y-1/2"
        }
      ),
      /* @__PURE__ */ e(
        "input",
        {
          ref: (m) => {
            r.current = m, typeof s == "function" ? s(m) : s && (s.current = m);
          },
          type: "text",
          value: n,
          onChange: f,
          placeholder: o,
          className: c(
            "w-full padding-l-32 padding-r-8 padding-y-6 rounded-sm",
            "font-body size-sm line-height-leading-5 text-default",
            "bg-subtle border-default",
            "placeholder:text-hint",
            "focus:outline-none focus:shadow-component-focus"
          ),
          ...i
        }
      )
    ] }) });
  }
);
V.displayName = "DropdownMenuSearch";
const q = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ml-auto width-16 height-16",
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
  te as DropdownMenu,
  A as DropdownMenuAvatar,
  F as DropdownMenuButton,
  K as DropdownMenuButtonGroup,
  $ as DropdownMenuCaption,
  T as DropdownMenuCheckboxItem,
  L as DropdownMenuContent,
  oe as DropdownMenuGroup,
  j as DropdownMenuItem,
  G as DropdownMenuLabel,
  ae as DropdownMenuPortal,
  ie as DropdownMenuRadioGroup,
  B as DropdownMenuRadioItem,
  V as DropdownMenuSearch,
  P as DropdownMenuSeparator,
  _ as DropdownMenuShortcut,
  de as DropdownMenuSub,
  U as DropdownMenuSubContent,
  W as DropdownMenuSubTrigger,
  ne as DropdownMenuTrigger,
  E as DropdownMenuUserbar,
  O as MenuButton
};
