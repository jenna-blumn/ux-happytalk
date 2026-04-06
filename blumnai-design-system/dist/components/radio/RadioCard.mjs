"use client";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
import * as k from "react";
import * as B from "@radix-ui/react-radio-group";
import { RadioContext as D, RadioIndicator as y } from "./Radio.mjs";
import { cn as o } from "../../utils/cn.mjs";
const E = k.forwardRef(
  ({
    value: v,
    title: u,
    description: c,
    sections: x = [],
    layout: d = "vertical",
    disabled: r = !1,
    background: f = "default",
    radioPosition: l = "right",
    radioStyle: g = "with-shadow",
    className: R
  }, S) => {
    const a = k.useContext(D).value === v, _ = o(
      "group w-full padding-16 rounded-md overflow-hidden",
      "focus-visible:outline-none focus-visible:shadow-component-focus",
      d === "vertical" ? "flex flex-col ds-gap-24" : "flex",
      f === "default" ? "bg-card" : "bg-state-soft",
      r ? f === "default" ? "card-border-default" : "" : a ? f === "default" ? "card-border-selected" : "card-border-selected-soft" : f === "default" ? "card-border-darker" : "",
      l === "off" && a && !r && "bg-state-soft",
      r ? "cursor-not-allowed" : "cursor-pointer",
      R
    ), p = o(
      "flex items-start ds-gap-10",
      d === "horizontal" && "w-full"
    ), h = d === "vertical" ? "flex-1 flex flex-col ds-gap-24" : "flex-1 flex items-start", N = "flex flex-col ds-gap-4", b = o(
      "flex flex-col items-end ds-gap-4",
      "text-right"
    ), i = () => o(
      "font-body size-sm font-medium line-height-leading-5 letter-spacing-tracking-normal",
      r ? "text-hint" : "text-default"
    ), n = () => o(
      "font-body size-sm font-normal line-height-leading-5 letter-spacing-tracking-normal",
      r ? "text-hint" : "text-subtle"
    ), z = g === "with-shadow" && !a && !r ? "shadow-[inset_0_-1px_0_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)]" : "", j = g === "with-shadow" && a && !r, F = r ? "var(--icon-default-disabled)" : "var(--icon-white-default, #FFF)", m = /* @__PURE__ */ e("div", { className: "height-20 flex items-center shrink-0", children: /* @__PURE__ */ t(
      "div",
      {
        className: o(
          "relative shrink-0 group/radio",
          "width-16 height-16",
          "rounded-full",
          "overflow-hidden",
          "transition-colors",
          r ? "bg-checkbox-disabled border-default" : a ? "border-none bg-checkbox-active group-hover:bg-checkbox-active-hover" : "border-darker bg-checkbox-default group-hover:border-strong",
          z
        ),
        children: [
          j && /* @__PURE__ */ e(
            "div",
            {
              className: "absolute rounded-full pointer-events-none",
              style: { inset: "1px", boxShadow: "0px 1px 0px rgba(255, 255, 255, 0.25) inset" }
            }
          ),
          a && /* @__PURE__ */ e("div", { className: "absolute flex items-center justify-center", style: { inset: "1px" }, children: /* @__PURE__ */ e(y, { color: F }) }),
          !r && !a && /* @__PURE__ */ e(
            "div",
            {
              className: "absolute flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
              style: { inset: "1px" },
              children: /* @__PURE__ */ e(y, { color: "var(--icon-default-disabled)" })
            }
          )
        ]
      }
    ) }), I = () => {
      if (d === "horizontal") {
        const s = x[0];
        return l === "off" ? /* @__PURE__ */ t("div", { className: h, children: [
          /* @__PURE__ */ t("div", { className: "flex-1 flex flex-col ds-gap-4", children: [
            /* @__PURE__ */ e("div", { className: i(), children: u }),
            c && /* @__PURE__ */ e("div", { className: n(), children: c })
          ] }),
          s && /* @__PURE__ */ t("div", { className: b, children: [
            /* @__PURE__ */ e("div", { className: i(), children: s.title }),
            /* @__PURE__ */ e("div", { className: n(), children: s.description })
          ] })
        ] }) : /* @__PURE__ */ t("div", { className: p, children: [
          l === "left" && m,
          /* @__PURE__ */ t("div", { className: h, children: [
            /* @__PURE__ */ t("div", { className: "flex-1 flex flex-col ds-gap-4", children: [
              /* @__PURE__ */ e("div", { className: i(), children: u }),
              c && /* @__PURE__ */ e("div", { className: n(), children: c })
            ] }),
            s && /* @__PURE__ */ t("div", { className: b, children: [
              /* @__PURE__ */ e("div", { className: i(), children: s.title }),
              /* @__PURE__ */ e("div", { className: n(), children: s.description })
            ] })
          ] }),
          l === "right" && m
        ] });
      }
      const w = /* @__PURE__ */ t("div", { className: N, children: [
        /* @__PURE__ */ e("div", { className: i(), children: u }),
        c && /* @__PURE__ */ e("div", { className: n(), children: c })
      ] }), C = x.map((s) => /* @__PURE__ */ t("div", { className: N, children: [
        /* @__PURE__ */ e("div", { className: i(), children: s.title }),
        /* @__PURE__ */ e("div", { className: n(), children: s.description })
      ] }, s.title));
      return l === "off" ? /* @__PURE__ */ t("div", { className: h, children: [
        w,
        C
      ] }) : /* @__PURE__ */ t("div", { className: p, children: [
        l === "left" && m,
        /* @__PURE__ */ t("div", { className: h, children: [
          w,
          C
        ] }),
        l === "right" && m
      ] });
    };
    return /* @__PURE__ */ e(B.Item, { value: v, disabled: r, asChild: !0, children: /* @__PURE__ */ e("label", { ref: S, className: _, children: I() }) });
  }
);
E.displayName = "RadioCard";
export {
  E as RadioCard
};
