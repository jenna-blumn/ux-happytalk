"use client";
import { jsx as i } from "react/jsx-runtime";
import { forwardRef as j, useRef as C, useMemo as A, useState as B, useCallback as T } from "react";
import { cn as s } from "../../utils/cn.mjs";
import { Icon as _ } from "../icons/Icon/Icon.mjs";
const F = {
  "2xs": { containerRadius: "rounded-md", buttonSize: "xs" },
  xs: { containerRadius: "rounded-lg", buttonSize: "xs" },
  sm: { containerRadius: "rounded-lg", buttonSize: "sm" },
  md: { containerRadius: "rounded-lg", buttonSize: "md" },
  lg: { containerRadius: "rounded-lg", buttonSize: "lg" }
}, m = {
  "2xs": { iconOnly: "min-width-24 min-height-24", default: "min-height-24 padding-x-6 padding-y-4" },
  xs: { iconOnly: "min-width-28 min-height-28", default: "min-height-28 padding-x-8 padding-y-4" },
  sm: { iconOnly: "min-width-32 min-height-32", default: "min-height-32 padding-x-10 padding-y-6" },
  md: { iconOnly: "min-width-36 min-height-36", default: "min-height-36 padding-x-12 padding-y-8" },
  lg: { iconOnly: "min-width-40 min-height-40", default: "min-height-40 padding-x-14 padding-y-10" }
}, G = j(
  ({ items: c, size: d = "md", className: x, "aria-label": y, ...w }, k) => {
    const v = F[d], S = 16, I = d === "lg" || d === "md" ? "ds-gap-6" : "ds-gap-4", f = C([]), e = A(() => c.map((n, t) => ({ i: t, disabled: n.disabled || !n.onClick })).filter((n) => !n.disabled).map((n) => n.i), [c]), [p, u] = B(() => e[0] ?? 0);
    e.length > 0 && !e.includes(p) && u(e[0]);
    const N = T((n, t) => {
      const r = e.indexOf(t);
      if (r === -1) return;
      let a;
      switch (n.key) {
        case "ArrowRight":
          n.preventDefault(), a = e[(r + 1) % e.length];
          break;
        case "ArrowLeft":
          n.preventDefault(), a = e[(r - 1 + e.length) % e.length];
          break;
        case "Home":
          n.preventDefault(), a = e[0];
          break;
        case "End":
          n.preventDefault(), a = e[e.length - 1];
          break;
      }
      a !== void 0 && (u(a), f.current[a]?.focus());
    }, [e]), R = s(
      "inline-flex items-center justify-start",
      "bg-default",
      "shadow-[0px_1px_2px_rgba(0,0,0,0.05)]",
      "outline outline-1 outline-darker outline-offset-[-1px]",
      v.containerRadius,
      "overflow-hidden",
      x
    ), D = (n, t) => /* @__PURE__ */ i(
      "span",
      {
        className: s(
          "inline-flex items-center justify-center",
          "min-width-20 padding-x-6 padding-y-2",
          "rounded-full",
          "bg-basic-gray-alpha-4",
          "size-xs line-height-leading-4 font-medium",
          t ? "text-hint" : "text-subtle"
        ),
        children: n
      }
    ), b = (n, t) => Array.isArray(n) && n.length === 2 && typeof n[0] == "string" && typeof n[1] == "string" ? /* @__PURE__ */ i("span", { className: "inline-flex items-center justify-center shrink-0", children: /* @__PURE__ */ i(
      _,
      {
        iconType: n,
        size: S,
        color: t ? "var(--icon-default-disabled)" : "var(--icon-default-muted)"
      }
    ) }) : /* @__PURE__ */ i("span", { className: "inline-flex items-center justify-center shrink-0", children: n });
    return /* @__PURE__ */ i("div", { ref: k, ...w, role: "toolbar", "aria-orientation": "horizontal", "aria-label": y ?? "Button group", className: R, children: c.map((n, t) => {
      const a = !(t === 0), h = !n.label && !n.badge, O = d === "2xs" ? "size-xs line-height-leading-4" : "size-sm line-height-leading-5", z = h ? m[d].iconOnly : m[d].default, l = [];
      n.icon && l.push(
        /* @__PURE__ */ i("span", { children: b(n.icon, n.disabled || !1) }, "lead-icon")
      ), n.label && l.push(
        /* @__PURE__ */ i(
          "span",
          {
            className: s(
              "shrink-0 padding-x-2",
              O,
              "font-medium",
              n.disabled ? "text-hint" : "text-subtle"
            ),
            children: n.label
          },
          "label"
        )
      ), n.badge && l.push(
        /* @__PURE__ */ i("span", { children: D(n.badge, n.disabled || !1) }, "badge")
      ), n.tailIcon && l.push(
        /* @__PURE__ */ i("span", { children: b(n.tailIcon, n.disabled || !1) }, "tail-icon")
      );
      const o = n.disabled || !n.onClick;
      return /* @__PURE__ */ i(
        "button",
        {
          ref: (g) => {
            f.current[t] = g;
          },
          type: "button",
          className: s(
            "inline-flex items-center justify-center",
            "bg-transparent",
            z,
            "transition-colors duration-150",
            a && "border-l-default",
            o ? "cursor-not-allowed" : "cursor-pointer",
            !o && "hover:bg-basic-gray-alpha-4 active:bg-basic-gray-alpha-10"
          ),
          onClick: o ? void 0 : n.onClick,
          onKeyDown: (g) => N(g, t),
          onFocus: () => u(t),
          tabIndex: t === p ? 0 : -1,
          "aria-label": h ? n.ariaLabel : void 0,
          disabled: o,
          children: l.length === 1 && h ? l[0] : /* @__PURE__ */ i("div", { className: s("flex items-center justify-center", I), children: l })
        },
        n.id ?? t
      );
    }) });
  }
);
G.displayName = "ButtonGroup";
export {
  G as ButtonGroup
};
