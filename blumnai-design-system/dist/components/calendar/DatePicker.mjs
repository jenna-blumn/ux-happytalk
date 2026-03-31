"use client";
import { jsx as r, jsxs as D } from "react/jsx-runtime";
import { useState as E, useRef as se, useMemo as U, useEffect as ae, useCallback as s } from "react";
import { addDays as L, addWeeks as ge, addMonths as G, endOfDay as re, startOfDay as oe } from "date-fns";
import { cn as W } from "../../utils/cn.mjs";
import { Popover as de, PopoverAnchor as ie, PopoverContent as fe } from "../popover/Popover.mjs";
import { InputWrapper as ce } from "../input/shared/InputWrapper.mjs";
import { Button as Y } from "../button/Button.mjs";
import { Calendar as me } from "./Calendar.mjs";
import { DateInput as ye } from "./components/DateInput.mjs";
import { QuickPresets as pe } from "./components/QuickPresets.mjs";
import { DateRangeInput as Se } from "./components/DateRangeInput.mjs";
const De = [
  { label: "오늘", getValue: () => /* @__PURE__ */ new Date() },
  { label: "어제", getValue: () => L(/* @__PURE__ */ new Date(), -1) },
  { label: "1주 전", getValue: () => ge(/* @__PURE__ */ new Date(), -1) },
  { label: "1개월 전", getValue: () => G(/* @__PURE__ */ new Date(), -1) }
], be = [
  { label: "오늘", getValue: () => ({ from: oe(/* @__PURE__ */ new Date()), to: re(/* @__PURE__ */ new Date()) }) },
  { label: "어제", getValue: () => ({ from: oe(L(/* @__PURE__ */ new Date(), -1)), to: re(L(/* @__PURE__ */ new Date(), -1)) }) },
  { label: "최근 7일", getValue: () => ({ from: L(/* @__PURE__ */ new Date(), -6), to: /* @__PURE__ */ new Date() }) },
  { label: "최근 30일", getValue: () => ({ from: L(/* @__PURE__ */ new Date(), -29), to: /* @__PURE__ */ new Date() }) },
  { label: "최근 3개월", getValue: () => ({ from: G(/* @__PURE__ */ new Date(), -3), to: /* @__PURE__ */ new Date() }) },
  { label: "최근 6개월", getValue: () => ({ from: G(/* @__PURE__ */ new Date(), -6), to: /* @__PURE__ */ new Date() }) },
  { label: "최근 1년", getValue: () => ({ from: G(/* @__PURE__ */ new Date(), -12), to: /* @__PURE__ */ new Date() }) }
], ue = (k, b, w) => b ? k.findIndex((R) => {
  const x = R.getValue();
  if (w) {
    const a = b, o = x;
    if (!a.from || !o.from) return !1;
    const d = a.from.toDateString() === o.from.toDateString(), F = !a.to && !o.to || a.to && o.to && a.to.toDateString() === o.to.toDateString();
    return d && F;
  } else {
    const a = b, o = x;
    return a.toDateString() === o.toDateString();
  }
}) : -1, Ve = ({
  datePickerStyle: k = "default",
  size: b = "sm",
  label: w,
  required: R = !1,
  supportText: x,
  caption: a,
  error: o,
  success: d,
  width: F,
  disabled: B = !1,
  className: q,
  minDate: V,
  maxDate: p,
  disabledDates: M,
  locale: H,
  showQuickPresets: P = !1,
  align: J = "start",
  captionLayout: K = "month-centered",
  dateFormat: X = "yyyy.MM.dd",
  value: t,
  onChange: l,
  presets: Z,
  showActions: i = !1,
  confirmLabel: u = "확인",
  cancelLabel: $ = "취소"
}) => {
  const [N, f] = E(!1), [y, h] = E(t || /* @__PURE__ */ new Date()), [g, c] = E(t), m = se(t), j = o === !0 || typeof o == "string" && o.length > 0, I = d === !0 || typeof d == "string" && d.length > 0, C = Z || De, z = i ? g : t, Q = U(
    () => ue(C, z, !1),
    [C, z]
  );
  ae(() => {
    N || c(t);
  }, [N, t]);
  const T = s((n) => {
    n ? (m.current = t, c(t)) : i && l?.(m.current), f(n);
  }, [i, t, l]), _ = s((n) => {
    i ? (c(n), n && h(n)) : (l?.(n), n && (h(n), f(!1)));
  }, [l, i]), v = s((n) => {
    l?.(n), n && h(n);
  }, [l]), A = s((n) => {
    const O = n.getValue();
    i ? (c(O), h(O)) : (l?.(O), h(O), f(!1));
  }, [l, i]), ee = s(() => {
    l?.(g), f(!1);
  }, [l, g]), te = s(() => {
    c(m.current), f(!1);
  }, []), ne = s(() => {
    t || h(/* @__PURE__ */ new Date()), f(!0);
  }, [t]), le = U(() => {
    const n = [];
    return V && n.push({ before: V }), p && n.push({ after: p }), M && n.push(...M), n.length > 0 ? n : void 0;
  }, [V, p, M]);
  return /* @__PURE__ */ r(
    ce,
    {
      label: w,
      required: R,
      supportText: x,
      caption: a,
      error: o,
      success: d,
      width: F,
      className: q,
      children: /* @__PURE__ */ D(de, { open: N, onOpenChange: T, children: [
        /* @__PURE__ */ r(ie, { asChild: !0, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          ye,
          {
            datePickerStyle: k,
            size: b,
            value: t,
            onChange: v,
            disabled: B,
            hasError: j,
            hasSuccess: I,
            isOpen: N,
            dateFormat: X,
            onCalendarClick: ne
          }
        ) }) }),
        /* @__PURE__ */ r(
          fe,
          {
            className: W("w-auto ![padding:0] overflow-hidden", P && "flex"),
            align: J,
            children: /* @__PURE__ */ D("div", { className: W(P && "flex"), children: [
              P && /* @__PURE__ */ r(
                pe,
                {
                  presets: C,
                  onSelect: A,
                  selectedIndex: Q
                }
              ),
              /* @__PURE__ */ D("div", { children: [
                /* @__PURE__ */ r(
                  me,
                  {
                    mode: "single",
                    selected: z,
                    onSelect: _,
                    month: y,
                    onMonthChange: h,
                    disabled: le,
                    locale: H,
                    calendarStyle: "default",
                    captionLayout: K,
                    initialFocus: !0
                  }
                ),
                i && /* @__PURE__ */ D("div", { className: "flex justify-end ds-gap-8 padding-x-12 padding-y-8 border-t border-default", children: [
                  /* @__PURE__ */ r(Y, { size: "sm", buttonStyle: "ghost", onClick: te, children: $ }),
                  /* @__PURE__ */ r(Y, { size: "sm", buttonStyle: "primary", onClick: ee, children: u })
                ] })
              ] })
            ] })
          }
        )
      ] })
    }
  );
}, Me = ({
  datePickerStyle: k = "default",
  size: b = "sm",
  label: w,
  required: R = !1,
  supportText: x,
  caption: a,
  error: o,
  success: d,
  width: F,
  disabled: B = !1,
  className: q,
  minDate: V,
  maxDate: p,
  disabledDates: M,
  locale: H,
  showQuickPresets: P = !1,
  align: J = "start",
  captionLayout: K = "month-centered",
  dateFormat: X = "yyyy.MM.dd",
  value: t,
  onChange: l,
  presets: Z,
  numberOfMonths: i = 2,
  showActions: u = !1,
  confirmLabel: $ = "확인",
  cancelLabel: N = "취소"
}) => {
  const [f, y] = E(!1), [h, g] = E(() => {
    const e = t?.from || /* @__PURE__ */ new Date();
    if (p && i >= 2) {
      const S = e.getFullYear() * 12 + e.getMonth();
      if (p.getFullYear() * 12 + p.getMonth() <= S)
        return G(e, -1);
    }
    return e;
  }), [c, m] = E("idle"), [j, I] = E(t), C = se(t), z = o === !0 || typeof o == "string" && o.length > 0, Q = d === !0 || typeof d == "string" && d.length > 0, T = Z || be, _ = u ? j : t, v = U(
    () => ue(T, _, !0),
    [T, _]
  );
  ae(() => {
    f || (m("idle"), I(t));
  }, [f, t]);
  const A = s((e) => {
    e ? (C.current = t, I(t)) : u && l?.(C.current), y(e);
  }, [u, t, l]), ee = s((e) => {
    if (u) {
      if (I(e), !e?.from) {
        m("idle");
        return;
      }
      c === "idle" ? m("selecting-end") : c === "selecting-end" && e?.to && m("idle");
    } else {
      if (l?.(e), !e?.from) {
        m("idle");
        return;
      }
      c === "idle" ? m("selecting-end") : c === "selecting-end" && e?.to && (y(!1), m("idle"));
    }
  }, [l, c, u]), te = s((e) => {
    l?.(e), e?.from && g(e.from);
  }, [l]), ne = s((e) => {
    const S = e.getValue();
    u ? (I(S), S.from && g(S.from)) : (l?.(S), S.from && g(S.from), y(!1));
  }, [l, u]), le = s(() => {
    l?.(j), y(!1);
  }, [l, j]), n = s(() => {
    I(C.current), y(!1);
  }, []), O = s(() => {
    t?.from || g(/* @__PURE__ */ new Date()), y(!0);
  }, [t]), he = U(() => {
    const e = [];
    return V && e.push({ before: V }), p && e.push({ after: p }), M && e.push(...M), e.length > 0 ? e : void 0;
  }, [V, p, M]);
  return /* @__PURE__ */ r(
    ce,
    {
      label: w,
      required: R,
      supportText: x,
      caption: a,
      error: o,
      success: d,
      width: F,
      className: q,
      children: /* @__PURE__ */ D(de, { open: f, onOpenChange: A, children: [
        /* @__PURE__ */ r(ie, { asChild: !0, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          Se,
          {
            datePickerStyle: k,
            size: b,
            value: t,
            onChange: te,
            disabled: B,
            hasError: z,
            hasSuccess: Q,
            isOpen: f,
            dateFormat: X,
            onCalendarClick: O
          }
        ) }) }),
        /* @__PURE__ */ r(
          fe,
          {
            className: W("w-auto ![padding:0] overflow-hidden", P && "flex"),
            align: J,
            children: /* @__PURE__ */ D("div", { className: W(P && "flex"), children: [
              P && /* @__PURE__ */ r(
                pe,
                {
                  presets: T,
                  onSelect: ne,
                  selectedIndex: v
                }
              ),
              /* @__PURE__ */ D("div", { children: [
                /* @__PURE__ */ r(
                  me,
                  {
                    mode: "range",
                    selected: _,
                    onSelect: ee,
                    month: h,
                    onMonthChange: g,
                    numberOfMonths: i,
                    disabled: he,
                    locale: H,
                    calendarStyle: "default",
                    captionLayout: K,
                    showOutsideDays: !1,
                    initialFocus: !0
                  }
                ),
                u && /* @__PURE__ */ D("div", { className: "flex justify-end ds-gap-8 padding-x-12 padding-y-8 border-t border-default", children: [
                  /* @__PURE__ */ r(Y, { size: "sm", buttonStyle: "ghost", onClick: n, children: N }),
                  /* @__PURE__ */ r(Y, { size: "sm", buttonStyle: "primary", onClick: le, children: $ })
                ] })
              ] })
            ] })
          }
        )
      ] })
    }
  );
};
Ve.displayName = "DatePicker";
Me.displayName = "DateRangePicker";
export {
  Ve as DatePicker,
  Me as DateRangePicker
};
