"use client";
import { jsxs as p, jsx as t } from "react/jsx-runtime";
import * as c from "react";
import * as v from "@radix-ui/react-radio-group";
import { cn as n } from "../../utils/cn.mjs";
const C = {
  sm: { box: "width-16 height-16", indicatorSize: 8, labelLineHeight: "height-20" },
  md: { box: "width-20 height-20", indicatorSize: 10, labelLineHeight: "height-24" },
  lg: { box: "width-24 height-24", indicatorSize: 12, labelLineHeight: "height-28" }
}, w = ({ color: i = "currentColor", size: e = 8 }) => /* @__PURE__ */ t(
  "svg",
  {
    width: e,
    height: e,
    viewBox: `0 0 ${e} ${e}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t("circle", { cx: e / 2, cy: e / 2, r: e / 2, fill: i })
  }
), N = c.createContext({ value: void 0 }), _ = c.forwardRef(({ className: i, value: e, onValueChange: r, defaultValue: f, orientation: a, ...u }, x) => {
  const [m, o] = c.useState(f), s = e !== void 0 ? e ?? void 0 : m, g = (l) => {
    e === void 0 && o(l), r?.(l);
  };
  return /* @__PURE__ */ t(N.Provider, { value: { value: s }, children: /* @__PURE__ */ t(
    v.Root,
    {
      ref: x,
      className: n(
        "flex ds-gap-12",
        a === "horizontal" ? "flex-row flex-wrap" : "flex-col",
        i
      ),
      value: s,
      onValueChange: g,
      orientation: a,
      ...u
    }
  ) });
});
_.displayName = "RadioGroup";
const I = c.forwardRef(({ className: i, label: e, description: r, radioPosition: f = "left", radioStyle: a = "default", align: u = "start", labelWeight: x = "medium", size: m = "sm", disabled: o, value: s, ...g }, l) => {
  const d = c.useContext(N).value === s, h = C[m], y = a === "with-shadow" && !d && !o ? "shadow-[inset_0_-1px_0_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)]" : "", R = a === "with-shadow" && d && !o, k = o ? "var(--icon-default-disabled)" : "var(--icon-white-default, #FFF)", b = /* @__PURE__ */ p(
    v.Item,
    {
      ref: l,
      value: s,
      disabled: o,
      className: n(
        "peer relative shrink-0 group",
        h.box,
        "rounded-full",
        "overflow-hidden",
        "transition-colors",
        "focus-visible:outline-none focus-visible:shadow-component-focus",
        o ? "bg-checkbox-disabled border-default cursor-not-allowed" : d ? "border-none bg-checkbox-active cursor-pointer hover:bg-checkbox-active-hover" : "border-darker bg-checkbox-default cursor-pointer hover:border-strong",
        y,
        i
      ),
      ...g,
      children: [
        R && /* @__PURE__ */ t(
          "div",
          {
            className: "absolute rounded-full pointer-events-none",
            style: { inset: "1px", boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.25) inset" }
          }
        ),
        /* @__PURE__ */ t(v.Indicator, { className: "absolute flex items-center justify-center", style: { inset: "1px" }, children: /* @__PURE__ */ t(w, { color: k, size: h.indicatorSize }) }),
        !o && !d && /* @__PURE__ */ t(
          "div",
          {
            className: "absolute flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
            style: { inset: "1px" },
            children: /* @__PURE__ */ t(w, { color: "var(--icon-default-disabled)", size: h.indicatorSize })
          }
        )
      ]
    }
  );
  return !e && !r ? b : /* @__PURE__ */ p(
    "label",
    {
      className: n(
        "inline-flex ds-gap-10",
        u === "center" ? "items-center" : "items-start",
        f === "right" && "flex-row-reverse",
        o ? "cursor-not-allowed" : "cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ t("div", { className: n(h.labelLineHeight, "flex items-center shrink-0"), children: b }),
        /* @__PURE__ */ p("div", { className: "flex flex-col ds-gap-4", children: [
          e && /* @__PURE__ */ t(
            "span",
            {
              className: n(
                "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal select-none",
                x === "normal" ? "font-normal" : "font-medium",
                o ? "text-hint" : "text-default"
              ),
              children: e
            }
          ),
          r && /* @__PURE__ */ t(
            "span",
            {
              className: n(
                "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal select-none",
                o ? "text-hint" : "text-subtle"
              ),
              children: r
            }
          )
        ] })
      ]
    }
  );
});
I.displayName = "Radio";
export {
  I as Radio,
  N as RadioContext,
  _ as RadioGroup,
  w as RadioIndicator
};
