"use client";
import { jsx as o, jsxs as d } from "react/jsx-runtime";
import { useState as k, useMemo as w, useCallback as N } from "react";
import { addMonths as p } from "date-fns";
import { cn as c } from "../../../utils/cn.mjs";
import { Popover as _, PopoverAnchor as A, PopoverContent as W } from "../../popover/Popover.mjs";
import { InputWrapper as q } from "../../input/shared/InputWrapper.mjs";
import { QuickPresets as B } from "../components/QuickPresets.mjs";
import { formatYearMonth as G, MONTHS_KO as J, MONTHS_EN as L, isMonthDisabled as R } from "../utils.mjs";
import { Icon as Y } from "../../icons/Icon/Icon.mjs";
const U = () => {
  const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), 1);
  return [
    { label: "이번 달", getValue: () => new Date(t.getFullYear(), t.getMonth(), 1) },
    { label: "지난 달", getValue: () => p(n, -1) },
    { label: "3개월 전", getValue: () => p(n, -3) },
    { label: "6개월 전", getValue: () => p(n, -6) },
    { label: "작년 이번 달", getValue: () => p(n, -12) }
  ];
}, X = (t, n) => {
  if (!n) return -1;
  const f = n.getFullYear() * 12 + n.getMonth();
  return t.findIndex((h) => {
    const a = h.getValue();
    return a.getFullYear() * 12 + a.getMonth() === f;
  });
}, Z = ({
  value: t,
  onChange: n,
  minDate: f,
  maxDate: h,
  disabledFuture: a = !1,
  locale: O = "ko",
  label: z,
  error: g,
  supportText: C,
  className: F,
  disabled: s = !1,
  placeholder: I = "YYYY.MM",
  showQuickPresets: r = !1,
  presets: v
}) => {
  const [u, m] = k(!1), [i, b] = k(() => t ? t.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), j = g === !0 || typeof g == "string" && g.length > 0, S = O === "ko" ? J : L, T = w(
    () => ({ disabledFuture: a, minDate: f, maxDate: h }),
    [a, f, h]
  ), y = w(
    () => r ? v ?? U() : [],
    [r, v]
  ), E = w(
    () => r ? X(y, t) : -1,
    [r, y, t]
  ), P = N((e) => {
    const l = new Date(i, e, 1);
    n?.(l), m(!1);
  }, [i, n]), K = N((e) => {
    const l = e.getValue();
    n?.(l), m(!1);
  }, [n]), x = N((e) => {
    e && t && b(t.getFullYear()), m(e);
  }, [t]), D = t ? G(t) : "", H = (e) => t?.getFullYear() === i && t?.getMonth() === e;
  return /* @__PURE__ */ o(
    q,
    {
      label: z,
      error: g,
      supportText: C,
      className: F,
      children: /* @__PURE__ */ d(_, { open: u, onOpenChange: x, children: [
        /* @__PURE__ */ o(A, { asChild: !0, children: /* @__PURE__ */ d(
          "div",
          {
            role: "button",
            tabIndex: s ? -1 : 0,
            "aria-expanded": u,
            "aria-disabled": s,
            onClick: () => !s && x(!u),
            onKeyDown: (e) => {
              s || (e.key === "Enter" || e.key === " ") && (e.preventDefault(), x(!u));
            },
            className: c(
              "flex w-full items-center justify-between",
              "height-36 padding-x-12 rounded-md",
              "font-body size-sm line-height-leading-5 text-default",
              "border-default bg-default",
              "transition-colors duration-150 cursor-pointer",
              "focus:outline-none focus:ring-2 focus:ring-[var(--border-highlight)]",
              j && "border-destructive",
              s && "cursor-not-allowed opacity-50 bg-muted"
            ),
            children: [
              /* @__PURE__ */ o("span", { className: c(!D && "text-hint"), children: D || I }),
              /* @__PURE__ */ o(
                Y,
                {
                  iconType: ["business", "calendar"],
                  size: 16,
                  color: s ? "default-disabled" : "default-subtle",
                  className: "flex-shrink-0"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ d(
          W,
          {
            align: "start",
            sideOffset: 4,
            className: c(
              "z-[100] padding-16 bg-card border-default rounded-lg shadow-modal-sm",
              r && "flex padding-0"
            ),
            style: r ? void 0 : { width: 280 },
            onKeyDown: (e) => {
              e.key === "Escape" && m(!1);
            },
            children: [
              r && /* @__PURE__ */ o(
                B,
                {
                  presets: y,
                  onSelect: K,
                  selectedIndex: E,
                  disabled: s
                }
              ),
              /* @__PURE__ */ d("div", { className: c("flex flex-col ds-gap-16", r && "padding-16"), style: { width: 248 }, children: [
                /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      onClick: () => b((e) => e - 1),
                      className: "flex items-center justify-center width-28 height-28 rounded-sm hover:bg-[var(--bg-state-ghost-hover)] transition-colors",
                      children: /* @__PURE__ */ o(Y, { iconType: ["arrows", "arrow-drop-left"], size: 16, color: "default" })
                    }
                  ),
                  /* @__PURE__ */ o("span", { className: "font-body size-sm line-height-leading-5 font-medium text-default", children: i }),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      onClick: () => b((e) => e + 1),
                      className: "flex items-center justify-center width-28 height-28 rounded-sm hover:bg-[var(--bg-state-ghost-hover)] transition-colors",
                      children: /* @__PURE__ */ o(Y, { iconType: ["arrows", "arrow-drop-right"], size: 16, color: "default" })
                    }
                  )
                ] }),
                /* @__PURE__ */ o("div", { className: "grid grid-cols-4 ds-gap-4", children: S.map((e, l) => {
                  const M = R(i, l, T), V = H(l);
                  return /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      disabled: M,
                      onClick: () => P(l),
                      className: c(
                        "height-32 rounded-sm font-body size-xs line-height-leading-4 transition-colors",
                        M && "text-hint cursor-not-allowed",
                        !M && !V && "text-default hover:bg-[var(--bg-state-ghost-hover)] cursor-pointer",
                        V && "bg-[var(--bg-state-primary)] text-[var(--text-on-color)] font-medium"
                      ),
                      children: e
                    },
                    l
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
Z.displayName = "MonthPicker";
export {
  Z as MonthPicker
};
