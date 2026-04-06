"use client";
import { jsxs as h, Fragment as K, jsx as o } from "react/jsx-runtime";
import { forwardRef as L, useState as M, useId as W, useCallback as l, useEffect as G } from "react";
import { cn as J } from "../../../utils/cn.mjs";
import { InputWrapper as X } from "../../input/shared/InputWrapper.mjs";
import { TimeRangeInput as Y } from "./TimeRangeInput.mjs";
import { Popover as Z, PopoverAnchor as Q, PopoverContent as w } from "../../popover/Popover.mjs";
const V = [
  {
    label: "Morning",
    value: { start: { hour: 9, minute: 0 }, end: { hour: 12, minute: 0 } }
  },
  {
    label: "Afternoon",
    value: { start: { hour: 13, minute: 0 }, end: { hour: 17, minute: 0 } }
  },
  {
    label: "Business Hours",
    value: { start: { hour: 9, minute: 0 }, end: { hour: 18, minute: 0 } }
  },
  {
    label: "Full Day",
    value: { start: { hour: 0, minute: 0 }, end: { hour: 23, minute: 59 } }
  }
], C = (t, e) => {
  if (!t) return "";
  const s = String(t.hour).padStart(2, "0"), r = String(t.minute).padStart(2, "0");
  if (e) {
    const c = String(t.second ?? 0).padStart(2, "0");
    return `${s}:${r}:${c}`;
  }
  return `${s}:${r}`;
}, y = (t) => t.hour * 3600 + t.minute * 60 + (t.second ?? 0), tt = (t, e) => {
  if (!t) return !1;
  const s = t.start && e.start ? t.start.hour === e.start.hour && t.start.minute === e.start.minute && (t.start.second ?? 0) === (e.start.second ?? 0) : !t.start && !e.start, r = t.end && e.end ? t.end.hour === e.end.hour && t.end.minute === e.end.minute && (t.end.second ?? 0) === (e.end.second ?? 0) : !t.end && !e.end;
  return !!s && !!r;
}, et = L(({
  value: t,
  onChange: e,
  name: s,
  onValidationError: r,
  label: c,
  required: I = !1,
  supportText: x,
  caption: O,
  error: i,
  success: u,
  width: S,
  disabled: a = !1,
  timeFormat: T = "24h",
  showSeconds: m = !1,
  size: $ = "sm",
  timePickerStyle: k = "default",
  placeholder: P,
  showQuickSelect: d = !1,
  quickSelectOptions: N,
  align: R = "start",
  className: q,
  onFocus: v,
  onBlur: A
}, E) => {
  const [f, p] = M(!1), F = W(), b = i === !0 || typeof i == "string" && i.length > 0, j = u === !0 || typeof u == "string" && u.length > 0, D = l(() => {
    !a && d && p((n) => !n);
  }, [a, d]), U = l((n) => {
    a || p(n);
  }, [a]), _ = l((n) => {
    e?.(n.value), p(!1);
  }, [e]), z = l((n) => {
    e?.(n);
  }, [e]);
  G(() => {
    if (r)
      if (t?.start && t?.end) {
        const n = y(t.start) >= y(t.end);
        r(n ? "invalid-range" : null);
      } else
        r(null);
  }, [t, r]);
  const B = N || V;
  return /* @__PURE__ */ h(
    X,
    {
      label: c,
      inputId: F,
      required: I,
      supportText: x,
      caption: O,
      error: i,
      success: u,
      width: S,
      className: q,
      children: [
        s && /* @__PURE__ */ h(K, { children: [
          /* @__PURE__ */ o("input", { type: "hidden", name: `${s}-start`, value: C(t?.start, m) }),
          /* @__PURE__ */ o("input", { type: "hidden", name: `${s}-end`, value: C(t?.end, m) })
        ] }),
        /* @__PURE__ */ h(Z, { open: f && d, onOpenChange: U, children: [
          /* @__PURE__ */ o(Q, { asChild: !0, children: /* @__PURE__ */ o(
            Y,
            {
              ref: E,
              value: t,
              onChange: z,
              timeFormat: T,
              showSeconds: m,
              disabled: a,
              hasError: b,
              hasSuccess: j,
              isOpen: f,
              size: $,
              timePickerStyle: k,
              placeholder: P,
              onFocus: v,
              onBlur: A,
              onClockClick: D
            }
          ) }),
          d && /* @__PURE__ */ o(
            w,
            {
              align: R,
              sideOffset: 4,
              className: "w-auto padding-8",
              children: /* @__PURE__ */ o("div", { className: "flex flex-wrap ds-gap-6", children: B.map((n, H) => {
                const g = tt(t, n.value);
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    onClick: () => _(n),
                    "aria-pressed": g,
                    className: J(
                      "padding-x-10 padding-y-6 rounded-md",
                      "font-body size-sm line-height-leading-5",
                      g ? "bg-state-soft text-basic-blue-strong" : "bg-state-ghost hover:bg-state-ghost-hover text-default",
                      "transition-colors duration-150",
                      "cursor-pointer border-0"
                    ),
                    children: n.label
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
et.displayName = "TimeRangePicker";
export {
  et as TimeRangePicker
};
