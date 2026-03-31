"use client";
import { jsx as a, jsxs as c, Fragment as _ } from "react/jsx-runtime";
import * as f from "react";
import * as S from "@radix-ui/react-switch";
import { cn as n } from "../../utils/cn.mjs";
const j = {
  sm: {
    track: "width-32 height-20",
    thumb: "width-14 height-14",
    translateOff: "translate-x-[3px]",
    translateOn: "data-[state=checked]:translate-x-[15px]",
    spinnerSize: "width-10 height-10",
    labelLineHeight: "height-20",
    labeledTrackWidth: 40,
    labeledTranslateOn: "data-[state=checked]:translate-x-[23px]",
    labelWidth: 23,
    labelFontSize: 10,
    labelFontClass: ""
  },
  md: {
    track: "width-40 height-24",
    thumb: "width-20 height-20",
    translateOff: "translate-x-[2px]",
    translateOn: "data-[state=checked]:translate-x-[18px]",
    spinnerSize: "width-14 height-14",
    labelLineHeight: "height-24",
    labeledTrackWidth: 52,
    labeledTranslateOn: "data-[state=checked]:translate-x-[30px]",
    labelWidth: 30,
    labelFontSize: void 0,
    labelFontClass: "size-xs"
  },
  lg: {
    track: "width-48 height-28",
    thumb: "width-24 height-24",
    translateOff: "translate-x-[2px]",
    translateOn: "data-[state=checked]:translate-x-[22px]",
    spinnerSize: "width-16 height-16",
    labelLineHeight: "height-28",
    labeledTrackWidth: 60,
    labeledTranslateOn: "data-[state=checked]:translate-x-[34px]",
    labelWidth: 34,
    labelFontSize: void 0,
    labelFontClass: "size-xs"
  }
}, k = (i, l) => {
  if (i !== "green")
    return l ? { backgroundColor: `var(--bg-basic-${i}-subtle)` } : { backgroundColor: `var(--bg-basic-${i}-accent)` };
}, I = (i) => {
  if (i !== "green")
    return { backgroundColor: `var(--bg-basic-${i}-strong)` };
}, E = ({ className: i }) => /* @__PURE__ */ c(
  "svg",
  {
    className: n("animate-spin text-muted", i),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ a("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ a("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
    ]
  }
), L = f.forwardRef(({ className: i, label: l, description: r, switchPosition: z = "left", color: o = "green", size: N = "sm", disabled: O, loading: h = !1, checked: s, onCheckedChange: C, onLabel: b, offLabel: g, "aria-describedby": T, ...u }, F) => {
  const p = f.useId(), [W, x] = f.useState(!1), m = o === "green", t = O || h, e = j[N], v = !!(b || g), H = () => {
    const d = {};
    if (v && (d.width = e.labeledTrackWidth), s && !m) {
      const y = t ? k(o, !0) : W ? I(o) : k(o, !1);
      y && Object.assign(d, y);
    }
    return Object.keys(d).length > 0 ? d : void 0;
  }, w = /* @__PURE__ */ a(
    S.Root,
    {
      ref: F,
      checked: s,
      disabled: t,
      onCheckedChange: C,
      onMouseEnter: () => x(!0),
      onMouseLeave: () => x(!1),
      "aria-label": !l && !u["aria-label"] ? "Toggle" : u["aria-label"],
      "aria-describedby": [T, r ? p : void 0].filter(Boolean).join(" ") || void 0,
      "aria-busy": h || void 0,
      className: n(
        "peer relative inline-flex items-center shrink-0 overflow-hidden",
        e.track,
        "rounded-full cursor-pointer transition-colors",
        "focus-visible:outline-none focus-visible:shadow-component-misc-focus",
        t ? !s && "bg-switch-disabled cursor-not-allowed" : !s && "bg-switch-default hover:bg-switch-default-hover",
        t && "cursor-not-allowed",
        m && s && t && "bg-switch-active-disabled",
        m && s && !t && "bg-switch-active hover:bg-switch-active-hover",
        i
      ),
      style: H(),
      ...u,
      children: h ? /* @__PURE__ */ a("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a(E, { className: e.spinnerSize }) }) : /* @__PURE__ */ c(_, { children: [
        /* @__PURE__ */ a(
          S.Thumb,
          {
            className: n(
              "pointer-events-none block rounded-full",
              e.thumb,
              "transition-transform duration-200",
              "motion-reduce:transition-none",
              t ? "bg-switch-handle-disabled" : "bg-switch-handle",
              !t && "shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_-1px_rgba(0,0,0,0.08)]",
              e.translateOff,
              v ? e.labeledTranslateOn : e.translateOn
            )
          }
        ),
        b && /* @__PURE__ */ a(
          "span",
          {
            className: n(
              "absolute left-0 top-0 bottom-0 flex items-center justify-center select-none pointer-events-none",
              "font-body font-medium text-white transition-opacity duration-150",
              e.labelFontClass,
              s ? "opacity-100" : "opacity-0"
            ),
            style: {
              width: e.labelWidth,
              fontSize: e.labelFontSize,
              lineHeight: 1
            },
            "aria-hidden": "true",
            children: b
          }
        ),
        g && /* @__PURE__ */ a(
          "span",
          {
            className: n(
              "absolute right-0 top-0 bottom-0 flex items-center justify-center select-none pointer-events-none",
              "font-body font-medium text-muted transition-opacity duration-150",
              e.labelFontClass,
              s ? "opacity-0" : "opacity-100"
            ),
            style: {
              width: e.labelWidth,
              fontSize: e.labelFontSize,
              lineHeight: 1
            },
            "aria-hidden": "true",
            children: g
          }
        )
      ] })
    }
  );
  return !l && !r ? w : /* @__PURE__ */ c(
    "label",
    {
      className: n(
        "inline-flex items-start ds-gap-10",
        z === "right" && "flex-row-reverse",
        t ? "cursor-not-allowed" : "cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ a("div", { className: n(e.labelLineHeight, "flex items-center shrink-0"), children: w }),
        /* @__PURE__ */ c("div", { className: "flex flex-col ds-gap-4", children: [
          l && /* @__PURE__ */ a(
            "span",
            {
              className: n(
                "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal font-medium select-none",
                t ? "text-hint" : "text-default"
              ),
              children: l
            }
          ),
          r && /* @__PURE__ */ a(
            "span",
            {
              id: p,
              className: n(
                "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal select-none",
                t ? "text-hint" : "text-subtle"
              ),
              children: r
            }
          )
        ] })
      ]
    }
  );
});
L.displayName = "Switch";
export {
  L as Switch
};
