"use client";
import { jsx as n, jsxs as c } from "react/jsx-runtime";
import { forwardRef as D, useMemo as u } from "react";
import { cn as i } from "../../../utils/cn.mjs";
import { DropdownMenu as z, DropdownMenuTrigger as I, DropdownMenuContent as S, DropdownMenuItem as T } from "../../dropdown/Dropdown.mjs";
import { parseIconTypeWithFill as j } from "../../icons/Icon/Icon.types.mjs";
import { Icon as A } from "../../icons/Icon/Icon.mjs";
const m = "__breadcrumb_ellipsis__", B = (r) => Array.isArray(r) && (r.length === 2 || r.length === 3) && typeof r[0] == "string" && typeof r[1] == "string", E = D(({
  items: r,
  size: h = "sm",
  separator: p = "slash",
  maxItems: o,
  className: k,
  ...x
}, C) => {
  const s = o && o >= 3 ? o : void 0, N = u(() => !s || r.length <= s ? [] : r.slice(1, -(s - 2)), [r, s]), b = u(() => {
    if (!s || r.length <= s)
      return r;
    const e = r[0], a = r.slice(-(s - 2));
    return [e, { label: m, disabled: !0 }, ...a];
  }, [r, s]), y = u(() => {
    switch (p) {
      case "chevron":
        return ">";
      case "dot":
        return "•";
      case "arrow":
        return "→";
      default:
        return "/";
    }
  }, [p]), d = h === "sm" ? 16 : 18, v = h === "sm" ? "size-sm line-height-leading-5 font-medium letter-spacing-tracking-normal" : "size-md line-height-leading-6 font-medium letter-spacing-tracking-normal", f = (e) => {
    if (e.image)
      return /* @__PURE__ */ n("span", { className: "inline-flex items-center shrink-0", children: /* @__PURE__ */ n(
        "img",
        {
          src: e.image,
          alt: "",
          className: "rounded-full object-cover border-default",
          style: { width: d, height: d }
        }
      ) });
    if (e.icon) {
      if (B(e.icon)) {
        const { iconType: a, isFill: t } = j(e.icon);
        return /* @__PURE__ */ n("span", { className: "inline-flex items-center shrink-0", children: /* @__PURE__ */ n(
          A,
          {
            iconType: a,
            isFill: t,
            size: d,
            color: "default"
          }
        ) });
      }
      return /* @__PURE__ */ n("span", { className: "inline-flex items-center shrink-0", children: e.icon });
    }
    return null;
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: C,
      "aria-label": "Breadcrumb",
      className: i("flex items-center", k),
      ...x,
      children: /* @__PURE__ */ n("ol", { className: "flex items-center ds-gap-2 list-none", children: b.map((e, a) => {
        const t = a === b.length - 1, g = (!!e.href || !!e.onClick) && !e.disabled && !t, w = e.label === m, M = (l) => {
          e.onClick && (l.preventDefault(), e.onClick());
        };
        return /* @__PURE__ */ c(
          "li",
          {
            className: i("flex items-center ds-gap-2", v),
            children: [
              w ? /* @__PURE__ */ c(z, { children: [
                /* @__PURE__ */ n(I, { asChild: !0, children: /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Show hidden breadcrumbs",
                    className: i(
                      "flex items-center ds-gap-1 cursor-pointer",
                      "text-default hover:underline",
                      "bg-transparent border-none padding-0 font-inherit"
                    ),
                    children: "…"
                  }
                ) }),
                /* @__PURE__ */ n(S, { align: "start", sideOffset: 4, children: N.map((l, _) => /* @__PURE__ */ n(
                  T,
                  {
                    disabled: l.disabled,
                    onClick: () => {
                      l.onClick ? l.onClick() : l.href && (window.location.href = l.href);
                    },
                    children: l.label
                  },
                  l.href ?? `hidden-${_}`
                )) })
              ] }) : g && e.href ? /* @__PURE__ */ c(
                "a",
                {
                  href: e.href,
                  onClick: M,
                  className: i(
                    "flex items-center ds-gap-1 hover:underline",
                    "text-default"
                  ),
                  children: [
                    f(e),
                    e.label
                  ]
                }
              ) : g && e.onClick ? /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  onClick: () => e.onClick(),
                  className: i(
                    "flex items-center ds-gap-1 hover:underline",
                    "text-default cursor-pointer",
                    "bg-transparent border-none padding-0 font-inherit"
                  ),
                  children: [
                    f(e),
                    e.label
                  ]
                }
              ) : /* @__PURE__ */ c(
                "span",
                {
                  className: i(
                    "flex items-center ds-gap-1",
                    t ? "text-subtle" : "text-default",
                    e.disabled && "cursor-default opacity-60"
                  ),
                  "aria-current": t ? "page" : void 0,
                  children: [
                    f(e),
                    e.label
                  ]
                }
              ),
              !t && /* @__PURE__ */ n(
                "span",
                {
                  className: "text-subtle",
                  "aria-hidden": "true",
                  children: y
                }
              )
            ]
          },
          e.href ?? `${e.label}-${a}`
        );
      }) })
    }
  );
});
E.displayName = "Breadcrumbs";
export {
  E as Breadcrumbs
};
