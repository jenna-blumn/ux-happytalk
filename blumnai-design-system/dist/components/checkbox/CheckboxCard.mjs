"use client";
import { jsx as e, jsxs as l } from "react/jsx-runtime";
import * as B from "react";
import { Checkbox as D } from "./Checkbox.mjs";
import { cn as n } from "../../utils/cn.mjs";
const E = B.forwardRef(
  ({
    title: h,
    description: N,
    sections: g = [],
    layout: d = "vertical",
    checked: v = !1,
    disabled: t = !1,
    background: c = "default",
    checkboxPosition: a = "right",
    checkboxStyle: S = "with-shadow",
    name: z,
    value: y,
    onCheckedChange: x,
    className: R
  }, b) => {
    const j = n(
      "group w-full padding-16 rounded-md overflow-hidden",
      d === "vertical" ? "flex flex-col ds-gap-24" : "flex",
      c === "default" ? "bg-card" : "bg-state-soft",
      t ? c === "default" ? "card-border-default" : "" : v ? c === "default" ? "card-border-selected" : "card-border-selected-soft" : c === "default" ? "card-border-darker" : "",
      t ? "cursor-not-allowed" : "cursor-pointer",
      R
    ), p = n(
      "flex items-start ds-gap-10",
      d === "horizontal" && "w-full"
    ), o = d === "vertical" ? "flex-1 flex flex-col ds-gap-24" : "flex-1 flex items-start", u = "flex flex-col ds-gap-4", C = n(
      "flex flex-col items-end ds-gap-4",
      "text-right"
    ), s = () => n(
      "font-body size-sm font-medium line-height-leading-5 letter-spacing-tracking-normal",
      t ? "text-hint" : "text-default"
    ), i = () => n(
      "font-body size-sm font-normal line-height-leading-5 letter-spacing-tracking-normal",
      t ? "text-hint" : "text-subtle"
    ), k = () => {
      t || x?.(!v);
    }, f = /* @__PURE__ */ e("div", { className: "height-20 flex items-center shrink-0", onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ e(
      D,
      {
        checked: v,
        disabled: t,
        checkboxStyle: S,
        name: z,
        value: y,
        onCheckedChange: x
      }
    ) });
    return /* @__PURE__ */ e("div", { ref: b, className: j, onClick: k, children: (() => {
      if (d === "horizontal") {
        const r = g[0];
        return a === "off" ? /* @__PURE__ */ l("div", { className: o, children: [
          /* @__PURE__ */ l("div", { className: "flex-1 flex flex-col ds-gap-4", children: [
            /* @__PURE__ */ e("div", { className: s(), children: h }),
            /* @__PURE__ */ e("div", { className: i(), children: N })
          ] }),
          r && /* @__PURE__ */ l("div", { className: C, children: [
            /* @__PURE__ */ e("div", { className: s(), children: r.title }),
            /* @__PURE__ */ e("div", { className: i(), children: r.description })
          ] })
        ] }) : /* @__PURE__ */ l("div", { className: p, children: [
          a === "left" && f,
          /* @__PURE__ */ l("div", { className: o, children: [
            /* @__PURE__ */ l("div", { className: "flex-1 flex flex-col ds-gap-4", children: [
              /* @__PURE__ */ e("div", { className: s(), children: h }),
              /* @__PURE__ */ e("div", { className: i(), children: N })
            ] }),
            r && /* @__PURE__ */ l("div", { className: C, children: [
              /* @__PURE__ */ e("div", { className: s(), children: r.title }),
              /* @__PURE__ */ e("div", { className: i(), children: r.description })
            ] })
          ] }),
          a === "right" && f
        ] });
      }
      const m = /* @__PURE__ */ l("div", { className: u, children: [
        /* @__PURE__ */ e("div", { className: s(), children: h }),
        /* @__PURE__ */ e("div", { className: i(), children: N })
      ] }), w = g.map((r) => /* @__PURE__ */ l("div", { className: u, children: [
        /* @__PURE__ */ e("div", { className: s(), children: r.title }),
        /* @__PURE__ */ e("div", { className: i(), children: r.description })
      ] }, r.title));
      return a === "off" ? /* @__PURE__ */ l("div", { className: o, children: [
        m,
        w
      ] }) : /* @__PURE__ */ l("div", { className: p, children: [
        a === "left" && f,
        /* @__PURE__ */ l("div", { className: o, children: [
          m,
          w
        ] }),
        a === "right" && f
      ] });
    })() });
  }
);
E.displayName = "CheckboxCard";
export {
  E as CheckboxCard
};
