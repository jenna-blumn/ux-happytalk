"use client";
import { jsxs as r, jsx as s } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { INFOBOX_DEFAULT_ICON as x, INFOBOX_INDICATOR as N, INFOBOX_ICON_COLOR as p, INFOBOX_VARIANT_BG as O } from "./InfoBox.constants.mjs";
import { cn as o } from "../../utils/cn.mjs";
import { Icon as i } from "../icons/Icon/Icon.mjs";
const I = {
  default: "var(--bg-basic-gray-accent)",
  info: "var(--bg-basic-blue-accent)",
  success: "var(--bg-basic-green-accent)",
  warning: "var(--bg-basic-orange-accent)",
  error: "var(--bg-basic-red-accent)"
}, y = g(
  ({
    variant: e = "default",
    icon: t,
    visible: c = !0,
    title: n,
    closable: l = !1,
    onClose: a,
    children: d,
    className: f,
    ...m
  }, u) => {
    if (!c) return null;
    const b = e === "warning" || e === "error" ? "alert" : "status", h = t ?? x[e];
    return /* @__PURE__ */ r(
      "div",
      {
        ref: u,
        role: b,
        className: o(
          "flex items-center ds-gap-12 rounded-card-sm border-default padding-x-12 padding-y-10",
          O[e],
          f
        ),
        ...m,
        children: [
          /* @__PURE__ */ s(
            "div",
            {
              className: o(
                "width-4 rounded-full flex-shrink-0 self-stretch min-height-20",
                N[e]
              )
            }
          ),
          /* @__PURE__ */ s("div", { className: o("flex-shrink-0", p[e]), children: /* @__PURE__ */ s(
            i,
            {
              iconType: h,
              size: 16,
              color: I[e]
            }
          ) }),
          /* @__PURE__ */ r("div", { className: "flex flex-col ds-gap-2 flex-1 min-w-0", children: [
            n && /* @__PURE__ */ s("div", { className: "font-body size-sm line-height-leading-5 font-semibold text-subtle", children: n }),
            /* @__PURE__ */ s("div", { className: "font-body size-sm line-height-leading-5 text-subtle", children: d })
          ] }),
          l && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: a,
              "aria-label": "Close",
              className: "flex-shrink-0 inline-flex items-center justify-center width-16 height-16 rounded-xs text-muted hover:text-default transition-colors cursor-pointer focus:outline-none focus-visible:shadow-component-misc-focus",
              children: /* @__PURE__ */ s(i, { iconType: ["system", "close"], size: 16 })
            }
          )
        ]
      }
    );
  }
);
y.displayName = "InfoBox";
export {
  y as InfoBox
};
