"use client";
import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { cn as d } from "../../../utils/cn.mjs";
import { parseIconTypeWithFill as h } from "../../icons/Icon/Icon.types.mjs";
import { Icon as x } from "../../icons/Icon/Icon.mjs";
const u = {
  sm: {
    icon: 32,
    title: "font-body size-sm line-height-leading-5 font-medium text-default",
    description: "font-body size-xs line-height-leading-4 text-muted",
    gap: "ds-gap-8"
  },
  md: {
    icon: 40,
    title: "font-body size-md line-height-leading-6 font-medium text-default",
    description: "font-body size-sm line-height-leading-5 text-muted",
    gap: "ds-gap-12"
  }
}, y = g(
  ({ icon: i, title: m, description: n, action: s, size: o = "md", className: a, ...r }, c) => {
    const e = u[o];
    return /* @__PURE__ */ l(
      "div",
      {
        ref: c,
        className: d(
          "flex flex-col items-center justify-center text-center",
          e.gap,
          a
        ),
        ...r,
        children: [
          i && (() => {
            const { iconType: p, isFill: f } = h(i);
            return /* @__PURE__ */ t(
              x,
              {
                iconType: p,
                isFill: f,
                size: e.icon,
                color: "default-muted"
              }
            );
          })(),
          /* @__PURE__ */ l("div", { className: d("flex flex-col items-center", o === "sm" ? "ds-gap-2" : "ds-gap-4"), children: [
            /* @__PURE__ */ t("span", { className: e.title, children: m }),
            n && /* @__PURE__ */ t("span", { className: e.description, children: n })
          ] }),
          s && /* @__PURE__ */ t("div", { className: "margin-t-24", children: s })
        ]
      }
    );
  }
);
y.displayName = "EmptyState";
export {
  y as EmptyState
};
