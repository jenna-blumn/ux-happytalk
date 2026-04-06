"use client";
import { jsx as n, jsxs as M } from "react/jsx-runtime";
import { useState as y, useMemo as F, useCallback as z } from "react";
import { addMonths as C } from "date-fns";
import { cn as Y } from "../../../utils/cn.mjs";
import { Popover as U, PopoverAnchor as X, PopoverContent as Z } from "../../popover/Popover.mjs";
import { InputWrapper as Q } from "../../input/shared/InputWrapper.mjs";
import { QuickPresets as tt } from "../components/QuickPresets.mjs";
import { MONTHS_KO as et, MONTHS_EN as ot, isMonthDisabled as rt, formatYearMonth as H } from "../utils.mjs";
import { Icon as I } from "../../icons/Icon/Icon.mjs";
const nt = (t) => {
  if (!t?.from) return "";
  const e = H(t.from);
  return t.to ? `${e} ~ ${H(t.to)}` : e;
}, lt = () => {
  const t = /* @__PURE__ */ new Date(), e = new Date(t.getFullYear(), t.getMonth(), 1);
  return [
    { label: "최근 3개월", getValue: () => ({ from: C(e, -2), to: e }) },
    { label: "최근 6개월", getValue: () => ({ from: C(e, -5), to: e }) },
    { label: "최근 1년", getValue: () => ({ from: C(e, -11), to: e }) },
    { label: "올해", getValue: () => ({ from: new Date(t.getFullYear(), 0, 1), to: e }) },
    { label: "작년", getValue: () => ({ from: new Date(t.getFullYear() - 1, 0, 1), to: new Date(t.getFullYear() - 1, 11, 1) }) }
  ];
}, st = (t, e) => e?.from ? t.findIndex((w) => {
  const l = w.getValue();
  if (!l.from) return !1;
  const x = e.from.getFullYear() === l.from.getFullYear() && e.from.getMonth() === l.from.getMonth(), R = !e.to && !l.to || e.to && l.to && e.to.getFullYear() === l.to.getFullYear() && e.to.getMonth() === l.to.getMonth();
  return x && R;
}) : -1, at = ({
  value: t,
  onChange: e,
  minDate: w,
  maxDate: l,
  disabledFuture: x = !1,
  locale: R = "ko",
  label: K,
  error: N,
  supportText: P,
  className: _,
  disabled: c = !1,
  placeholder: $ = "YYYY.MM ~ YYYY.MM",
  showQuickPresets: s = !1,
  presets: j
}) => {
  const [D, v] = y(!1), [a, S] = y(() => t?.from ? t.from.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [h, d] = y("from"), [m, p] = y({}), [b, g] = y(null), A = N === !0 || typeof N == "string" && N.length > 0, W = R === "ko" ? et : ot, q = F(
    () => ({ disabledFuture: x, minDate: w, maxDate: l }),
    [x, w, l]
  ), V = F(
    () => s ? j ?? lt() : [],
    [s, j]
  ), B = F(
    () => s ? st(V, t) : -1,
    [s, V, t]
  ), i = F(() => {
    if (h === "to" && m.from && b) {
      const o = m.from;
      return b < o ? { from: b, to: o } : { from: o, to: b };
    }
    return m;
  }, [h, m, b]), G = z((o) => {
    const r = new Date(a, o, 1);
    if (h === "from")
      p({ from: r }), d("to"), g(null);
    else {
      const f = m.from;
      if (!f) {
        p({ from: r }), d("to");
        return;
      }
      let u;
      r < f ? u = { from: r, to: f } : u = { from: f, to: r }, p(u), e?.(u), v(!1), d("from"), g(null);
    }
  }, [a, h, m.from, e]), J = z((o) => {
    const r = o.getValue();
    p(r), e?.(r), v(!1), d("from"), g(null);
  }, [e]), k = z((o) => {
    o ? (p(t ?? {}), d(t?.from && !t?.to ? "to" : "from"), t?.from && S(t.from.getFullYear()), g(null)) : (d("from"), g(null)), v(o);
  }, [t]), E = nt(t);
  return /* @__PURE__ */ n(
    Q,
    {
      label: K,
      error: N,
      supportText: P,
      className: _,
      children: /* @__PURE__ */ M(U, { open: D, onOpenChange: k, children: [
        /* @__PURE__ */ n(X, { asChild: !0, children: /* @__PURE__ */ M(
          "div",
          {
            role: "button",
            tabIndex: c ? -1 : 0,
            "aria-expanded": D,
            "aria-disabled": c,
            onClick: () => !c && k(!D),
            onKeyDown: (o) => {
              c || (o.key === "Enter" || o.key === " ") && (o.preventDefault(), k(!D));
            },
            className: Y(
              "flex w-full items-center justify-between",
              "height-36 padding-x-12 rounded-md",
              "font-body size-sm line-height-leading-5 text-default",
              "border-default bg-default",
              "transition-colors duration-150 cursor-pointer",
              "focus:outline-none focus:ring-2 focus:ring-[var(--border-highlight)]",
              A && "border-destructive",
              c && "cursor-not-allowed opacity-50 bg-muted"
            ),
            children: [
              /* @__PURE__ */ n("span", { className: Y(!E && "text-hint"), children: E || $ }),
              /* @__PURE__ */ n(
                I,
                {
                  iconType: ["business", "calendar"],
                  size: 16,
                  color: c ? "default-disabled" : "default-subtle",
                  className: "flex-shrink-0"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ M(
          Z,
          {
            align: "start",
            sideOffset: 4,
            className: Y(
              "z-[100] padding-16 bg-card border-default rounded-lg shadow-modal-sm",
              s && "flex padding-0"
            ),
            style: s ? void 0 : { width: 280 },
            onKeyDown: (o) => {
              o.key === "Escape" && v(!1);
            },
            children: [
              s && /* @__PURE__ */ n(
                tt,
                {
                  presets: V,
                  onSelect: J,
                  selectedIndex: B,
                  disabled: c
                }
              ),
              /* @__PURE__ */ M("div", { className: Y("flex flex-col ds-gap-16", s && "padding-16"), style: { width: s ? 248 : void 0 }, children: [
                /* @__PURE__ */ M("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      onClick: () => S((o) => o - 1),
                      className: "flex items-center justify-center width-28 height-28 rounded-sm hover:bg-[var(--bg-state-ghost-hover)] transition-colors",
                      children: /* @__PURE__ */ n(I, { iconType: ["arrows", "arrow-drop-left"], size: 16, color: "default" })
                    }
                  ),
                  /* @__PURE__ */ n("span", { className: "font-body size-sm line-height-leading-5 font-medium text-default", children: a }),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      onClick: () => S((o) => o + 1),
                      className: "flex items-center justify-center width-28 height-28 rounded-sm hover:bg-[var(--bg-state-ghost-hover)] transition-colors",
                      children: /* @__PURE__ */ n(I, { iconType: ["arrows", "arrow-drop-right"], size: 16, color: "default" })
                    }
                  )
                ] }),
                /* @__PURE__ */ n("div", { className: "grid grid-cols-4 ds-gap-4", children: W.map((o, r) => {
                  const f = rt(a, r, q), u = i.from?.getFullYear() === a && i.from?.getMonth() === r, L = i.to?.getFullYear() === a && i.to?.getMonth() === r, T = i.from && i.to && new Date(a, r, 1) >= i.from && new Date(a, r, 1) <= i.to, O = u || L;
                  return /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      disabled: f,
                      onClick: () => G(r),
                      onMouseEnter: () => {
                        h === "to" && g(new Date(a, r, 1));
                      },
                      className: Y(
                        "height-32 rounded-sm font-body size-xs line-height-leading-4 transition-colors",
                        f && "text-hint cursor-not-allowed",
                        !f && !O && !T && "text-default hover:bg-[var(--bg-state-ghost-hover)] cursor-pointer",
                        T && !O && "bg-[var(--bg-state-soft)] text-default",
                        O && "bg-[var(--bg-state-primary)] text-[var(--text-on-color)] font-medium"
                      ),
                      children: o
                    },
                    r
                  );
                }) })
              ] })
            ]
          }
        )
      ] })
    }
  );
};
at.displayName = "MonthRangePicker";
export {
  at as MonthRangePicker
};
