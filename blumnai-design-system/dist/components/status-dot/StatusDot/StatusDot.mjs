"use client";
import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { cn as t } from "../../../utils/cn.mjs";
const g = {
  green: "bg-basic-green-accent",
  red: "bg-basic-red-accent",
  orange: "bg-basic-orange-accent",
  gray: "bg-basic-gray-accent"
}, m = {
  sm: "width-8 height-8",
  md: "width-10 height-10"
}, h = o(
  ({ color: n = "green", label: e, size: s = "md", className: r, ...i }, c) => /* @__PURE__ */ d(
    "span",
    {
      ref: c,
      className: t("inline-flex items-center ds-gap-6", r),
      ...i,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            className: t(
              "rounded-full flex-shrink-0",
              g[n],
              m[s]
            ),
            "aria-hidden": "true"
          }
        ),
        e && /* @__PURE__ */ a("span", { className: "font-body size-sm line-height-leading-5 text-default", children: e })
      ]
    }
  )
);
h.displayName = "StatusDot";
export {
  h as StatusDot
};
