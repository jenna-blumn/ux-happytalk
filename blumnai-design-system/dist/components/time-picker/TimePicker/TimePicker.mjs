"use client";
import { jsxs as g, jsx as r } from "react/jsx-runtime";
import { forwardRef as R, useState as V, useId as W, useCallback as p } from "react";
import { cn as B } from "../../../utils/cn.mjs";
import { InputWrapper as F } from "../../input/shared/InputWrapper.mjs";
import { TimeInput as G } from "./TimeInput.mjs";
import { Popover as J, PopoverAnchor as K, PopoverContent as L } from "../../popover/Popover.mjs";
const U = () => {
  const t = /* @__PURE__ */ new Date();
  return [
    { label: "Now", value: { hour: t.getHours(), minute: t.getMinutes() } },
    { label: "9:00 AM", value: { hour: 9, minute: 0 } },
    { label: "12:00 PM", value: { hour: 12, minute: 0 } },
    { label: "5:00 PM", value: { hour: 17, minute: 0 } }
  ];
}, X = (t, n) => {
  if (!t) return "";
  const o = String(t.hour).padStart(2, "0"), a = String(t.minute).padStart(2, "0");
  if (n && t.second !== void 0) {
    const c = String(t.second).padStart(2, "0");
    return `${o}:${a}:${c}`;
  }
  return `${o}:${a}`;
}, Y = (t, n) => t ? t.hour === n.hour && t.minute === n.minute && (t.second ?? 0) === (n.second ?? 0) : !1, Z = R(({
  value: t,
  onChange: n,
  name: o,
  label: a,
  required: c = !1,
  supportText: b,
  caption: C,
  error: i,
  success: l,
  width: v,
  disabled: s = !1,
  timeFormat: x = "24h",
  showSeconds: m = !1,
  size: k = "sm",
  timePickerStyle: y = "default",
  placeholder: P,
  showQuickSelect: u = !1,
  quickSelectOptions: I,
  align: O = "start",
  className: S,
  onFocus: N,
  onBlur: T
}, $) => {
  const [f, d] = V(!1), M = W(), j = i === !0 || typeof i == "string" && i.length > 0, w = l === !0 || typeof l == "string" && l.length > 0, A = p(() => {
    !s && u && d((e) => !e);
  }, [s, u]), D = p((e) => {
    s || d(e);
  }, [s]), E = p((e) => {
    n?.(e.value), d(!1);
  }, [n]), q = p((e) => {
    n?.(e);
  }, [n]), z = I || U();
  return /* @__PURE__ */ g(
    F,
    {
      label: a,
      inputId: M,
      required: c,
      supportText: b,
      caption: C,
      error: i,
      success: l,
      width: v,
      className: S,
      children: [
        o && /* @__PURE__ */ r("input", { type: "hidden", name: o, value: X(t, m) }),
        /* @__PURE__ */ g(J, { open: f && u, onOpenChange: D, children: [
          /* @__PURE__ */ r(K, { asChild: !0, children: /* @__PURE__ */ r(
            G,
            {
              ref: $,
              value: t,
              onChange: q,
              timeFormat: x,
              showSeconds: m,
              disabled: s,
              hasError: j,
              hasSuccess: w,
              isOpen: f,
              size: k,
              timePickerStyle: y,
              placeholder: P,
              onFocus: N,
              onBlur: T,
              onClockClick: A
            }
          ) }),
          u && /* @__PURE__ */ r(
            L,
            {
              align: O,
              sideOffset: 4,
              className: "w-auto padding-8",
              children: /* @__PURE__ */ r("div", { className: "flex flex-wrap ds-gap-6", children: z.map((e, H) => {
                const h = Y(t, e.value);
                return /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => E(e),
                    "aria-pressed": h,
                    className: B(
                      "padding-x-10 padding-y-6 rounded-md",
                      "font-body size-sm line-height-leading-5",
                      h ? "bg-state-soft text-basic-blue-strong" : "bg-state-ghost hover:bg-state-ghost-hover text-default",
                      "transition-colors duration-150",
                      "cursor-pointer border-0"
                    ),
                    children: e.label
                  },
                  H
                );
              }) })
            }
          )
        ] })
      ]
    }
  );
});
Z.displayName = "TimePicker";
export {
  Z as TimePicker
};
