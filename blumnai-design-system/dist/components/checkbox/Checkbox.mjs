"use client";
import { jsxs as l, jsx as e } from "react/jsx-runtime";
import * as y from "react";
import * as g from "@radix-ui/react-checkbox";
import { cn as r } from "../../utils/cn.mjs";
const z = {
  sm: { box: "width-16 height-16", checkSize: 8, indeterminateBar: "width-10 height-2", labelLineHeight: "height-20" },
  md: { box: "width-20 height-20", checkSize: 10, indeterminateBar: "width-14 height-2", labelLineHeight: "height-24" },
  lg: { box: "width-24 height-24", checkSize: 12, indeterminateBar: "width-16 height-2", labelLineHeight: "height-28" }
}, u = ({ color: i = "currentColor", size: o = 8 }) => /* @__PURE__ */ e(
  "svg",
  {
    width: o,
    height: o,
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M1 4L3 6L7 2",
        stroke: i,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), _ = ({ color: i = "currentColor", className: o }) => /* @__PURE__ */ e(
  "div",
  {
    className: o,
    style: { backgroundColor: i }
  }
), I = y.forwardRef(({ className: i, label: o, description: a, checkboxPosition: x = "left", checkboxStyle: h = "default", size: f = "sm", shape: p = "square", disabled: t, checked: s, onCheckedChange: b, ...w }, v) => {
  const c = s === !0 || s === "indeterminate", k = s === "indeterminate", n = z[f], C = h === "with-shadow" && !c && !t ? "shadow-[inset_0_-1px_0_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)]" : "", N = h === "with-shadow" && c && !t, d = t ? "var(--icon-default-disabled)" : "var(--icon-white-default, #FFF)", m = /* @__PURE__ */ l(
    g.Root,
    {
      ref: v,
      checked: s,
      disabled: t,
      onCheckedChange: b,
      className: r(
        "peer relative shrink-0 group",
        n.box,
        p === "round" ? "rounded-full" : "rounded-default",
        "overflow-hidden",
        "transition-colors",
        "focus-visible:outline-none focus-visible:shadow-component-focus",
        t ? "bg-checkbox-disabled border-default cursor-not-allowed" : c ? "border-none bg-checkbox-active cursor-pointer hover:bg-checkbox-active-hover" : "border-darker bg-checkbox-default cursor-pointer hover:border-strong",
        C,
        i
      ),
      ...w,
      children: [
        N && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute rounded-xs pointer-events-none",
            style: { inset: "1px", boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.25) inset" }
          }
        ),
        /* @__PURE__ */ e(g.Indicator, { className: "absolute flex items-center justify-center", style: { inset: "1px" }, children: k ? /* @__PURE__ */ e(_, { color: d, className: n.indeterminateBar }) : /* @__PURE__ */ e(u, { color: d, size: n.checkSize }) }),
        !t && !c && /* @__PURE__ */ e(
          "div",
          {
            className: "absolute flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
            style: { inset: "1px" },
            children: /* @__PURE__ */ e(u, { color: "var(--icon-default-disabled)", size: n.checkSize })
          }
        )
      ]
    }
  );
  return !o && !a ? m : /* @__PURE__ */ l(
    "label",
    {
      className: r(
        "inline-flex items-start ds-gap-10",
        x === "right" && "flex-row-reverse",
        t ? "cursor-not-allowed" : "cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: r(n.labelLineHeight, "flex items-center shrink-0"), children: m }),
        /* @__PURE__ */ l("div", { className: "flex flex-col ds-gap-4", children: [
          o && /* @__PURE__ */ e(
            "span",
            {
              className: r(
                "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal font-medium select-none",
                t ? "text-hint" : "text-default"
              ),
              children: o
            }
          ),
          a && /* @__PURE__ */ e(
            "span",
            {
              className: r(
                "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal select-none",
                t ? "text-hint" : "text-subtle"
              ),
              children: a
            }
          )
        ] })
      ]
    }
  );
});
I.displayName = "Checkbox";
export {
  I as Checkbox
};
