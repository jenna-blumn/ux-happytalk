"use client";
import { jsx as e, jsxs as s } from "react/jsx-runtime";
import * as N from "react";
import { MENU_ITEM_SIZE_CONFIG as d } from "../../constants/select/Select/Select.constants.mjs";
import { cn as n } from "../../utils/cn.mjs";
import { Badge as y } from "../badge/Badge/Badge.mjs";
import { Avatar as F } from "../avatar/Avatar/Avatar.mjs";
import { parseIconTypeWithFill as I } from "../icons/Icon/Icon.types.mjs";
import { Icon as h } from "../icons/Icon/Icon.mjs";
const C = N.memo(
  ({ option: r, selected: a, focused: c, disabled: t = !1, isMulti: o, selectType: l = "default", onSelect: f, style: u }) => {
    const i = r.description ? d.large : d.default, m = r.iconColor ?? (t ? "var(--icon-default-disabled)" : "var(--icon-default)"), x = () => {
      t || f();
    }, g = () => o || l === "checkbox" ? /* @__PURE__ */ e(
      "div",
      {
        className: n(
          "relative width-16 height-16 rounded-default overflow-hidden flex-shrink-0 transition-colors",
          t ? "bg-checkbox-disabled border-default" : a ? "border-none bg-checkbox-active" : "border-darker bg-checkbox-default"
        ),
        children: a && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute flex items-center justify-center",
            style: { inset: "1px" },
            children: /* @__PURE__ */ e("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
              "path",
              {
                d: "M1 4L3 6L7 2",
                stroke: t ? "var(--icon-default-disabled)" : "#FFFFFF",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ) })
          }
        )
      }
    ) : l === "radio" ? /* @__PURE__ */ e(
      "div",
      {
        className: n(
          "relative width-16 height-16 rounded-full overflow-hidden flex-shrink-0 transition-colors",
          t ? "bg-checkbox-disabled border-default" : a ? "border-none bg-checkbox-active" : "border-darker bg-checkbox-default"
        ),
        children: a && /* @__PURE__ */ e("div", { className: "absolute flex items-center justify-center", style: { inset: "1px" }, children: /* @__PURE__ */ e("div", { className: "width-8 height-8 rounded-full bg-white" }) })
      }
    ) : null, v = () => {
      if (r.avatarSrc)
        return /* @__PURE__ */ e(
          F,
          {
            variant: "userpic",
            size: r.description ? "sm" : "2xs",
            src: r.avatarSrc,
            alt: r.label,
            className: "flex-shrink-0"
          }
        );
      if (r.leadIcon) {
        const { iconType: p, isFill: w } = I(r.leadIcon);
        return /* @__PURE__ */ e("div", { className: n("flex items-center justify-center flex-shrink-0", i.iconFrame), children: /* @__PURE__ */ e(h, { iconType: p, size: i.iconSize, color: m, isFill: w }) });
      }
      return null;
    }, b = () => !o && l === "default" && a ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center width-20 height-20 flex-shrink-0", children: /* @__PURE__ */ e(h, { iconType: ["system", "check"], size: 16, color: "primary" }) }) : null, k = g();
    return /* @__PURE__ */ e(
      "div",
      {
        role: "option",
        "aria-selected": a,
        "aria-disabled": t,
        "data-focused": c || void 0,
        id: `vs-item-${r.id}`,
        onClick: x,
        className: "flex w-full padding-x-4",
        style: u,
        children: /* @__PURE__ */ s(
          "div",
          {
            className: n(
              "flex items-center w-full rounded-xs transition-colors duration-150",
              i.height,
              i.padding,
              i.gap,
              t ? "bg-transparent cursor-not-allowed" : "bg-transparent hover:bg-state-ghost-hover active:bg-state-ghost-hover cursor-pointer",
              !t && c && "shadow-component-focus"
            ),
            children: [
              k,
              v(),
              r.description ? /* @__PURE__ */ s("div", { className: "flex flex-col flex-1 min-w-0 padding-x-4 ds-gap-1", children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: n(
                      "font-body",
                      i.text,
                      t ? "text-hint" : "text-default",
                      "flex-1 truncate"
                    ),
                    children: r.label
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: n(
                      "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight truncate",
                      t ? "text-hint" : "text-muted"
                    ),
                    children: r.description
                  }
                )
              ] }) : /* @__PURE__ */ e("div", { className: "flex-1 min-w-0 padding-x-4", children: /* @__PURE__ */ e(
                "span",
                {
                  className: n(
                    "font-body block",
                    i.text,
                    t ? "text-hint" : "text-default",
                    "truncate"
                  ),
                  children: r.label
                }
              ) }),
              r.badge && /* @__PURE__ */ e(y, { size: "sm", color: "neutral", border: !0, label: r.badge }),
              b()
            ]
          }
        )
      }
    );
  }
);
C.displayName = "VirtualSelectItem";
export {
  C as VirtualSelectItem
};
