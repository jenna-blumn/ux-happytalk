"use client";
import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { cn as a } from "../../../utils/cn.mjs";
import { parseIconTypeWithFill as x } from "../../icons/Icon/Icon.types.mjs";
import { Icon as p } from "../../icons/Icon/Icon.mjs";
const u = o(
  ({
    type: t,
    label: i,
    caption: n,
    indicatorColor: d,
    icon: c,
    text: f,
    className: s,
    ...l
  }, r) => t === "divider" ? /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: a(
        "self-stretch",
        "padding-y-2 padding-x-4",
        "flex items-center justify-start ds-gap-8",
        "relative",
        s
      ),
      ...l,
      children: /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-basic-gray-alpha-10" })
    }
  ) : t === "text" ? /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: a("self-stretch padding-y-2 padding-x-4 flex items-center justify-start ds-gap-8", s),
      ...l,
      children: /* @__PURE__ */ e("span", { className: "flex-1 font-body size-xs line-height-leading-4 font-normal letter-spacing-tracking-normal text-muted", children: f })
    }
  ) : t === "label" ? /* @__PURE__ */ m(
    "div",
    {
      ref: r,
      className: a("self-stretch padding-y-2 padding-x-4 flex items-center justify-between ds-gap-8", s),
      ...l,
      children: [
        i && /* @__PURE__ */ e("span", { className: "flex-1 font-body size-xs line-height-leading-4 font-medium letter-spacing-tracking-normal text-default", children: i }),
        n && /* @__PURE__ */ e("span", { className: "font-body size-xs line-height-leading-4 font-normal letter-spacing-tracking-normal text-muted", children: n })
      ]
    }
  ) : t === "item" ? /* @__PURE__ */ m(
    "div",
    {
      ref: r,
      className: a("self-stretch padding-y-2 padding-x-4 flex items-center justify-start ds-gap-6", s),
      ...l,
      children: [
        d && /* @__PURE__ */ e("div", { className: "width-16 height-16 flex flex-col items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(
          "div",
          {
            className: "width-8 height-8 rounded-2xs flex-shrink-0",
            style: { backgroundColor: d }
          }
        ) }),
        c && !d && (() => {
          const { iconType: h, isFill: g } = x(c);
          return /* @__PURE__ */ e("div", { className: "width-16 height-16 flex flex-col items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(p, { iconType: h, isFill: g, size: 14 }) });
        })(),
        i && /* @__PURE__ */ e("span", { className: "flex-1 font-body size-xs line-height-leading-4 font-medium letter-spacing-tracking-normal text-subtle", children: i }),
        n && /* @__PURE__ */ e("span", { className: "size-xs font-body line-height-leading-4 font-normal letter-spacing-tracking-normal text-muted", children: n })
      ]
    }
  ) : null
);
u.displayName = "TooltipItem";
export {
  u as TooltipItem
};
