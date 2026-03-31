"use client";
import { jsxs as K, jsx as p } from "react/jsx-runtime";
import { forwardRef as ue, useState as T, useRef as w, useEffect as V, useMemo as le, useCallback as m } from "react";
import { cn as E } from "../../../utils/cn.mjs";
import { Icon as ie } from "../../icons/Icon/Icon.mjs";
import { SIZE_CONFIG as de, STYLE_CONFIG as fe, STATE_CONFIG as j, INPUT_WRAPPER_BASE as ye } from "../../../constants/input/Input/Input.constants.mjs";
const me = {
  day: "dd",
  month: "mm",
  year: "yyyy"
}, B = {
  day: 2,
  month: 2,
  year: 4
}, he = (a) => {
  switch (a) {
    case "yyyy.MM.dd":
    case "yyyy-MM-dd":
    case "yyyy/MM/dd":
      return ["year", "month", "day"];
    case "MM/dd/yyyy":
      return ["month", "day", "year"];
    case "dd/MM/yyyy":
      return ["day", "month", "year"];
    default:
      return ["year", "month", "day"];
  }
}, ge = (a) => a.includes(".") ? "." : a.includes("-") ? "-" : "/", R = (a, d) => {
  const l = parseInt(d, 10);
  if (isNaN(l)) return !1;
  switch (a) {
    case "day":
      return l >= 1 && l <= 31;
    case "month":
      return l >= 1 && l <= 12;
    case "year":
      return l >= 1 && l <= 9999;
    default:
      return !1;
  }
}, C = (a, d) => {
  if (!d) return "";
  const l = B[a];
  return d.padStart(l, "0");
}, pe = ue(({
  value: a,
  onChange: d,
  placeholder: l,
  disabled: u = !1,
  hasError: H = !1,
  hasSuccess: k = !1,
  isOpen: A = !1,
  datePickerStyle: Y = "default",
  size: W = "sm",
  dateFormat: F = "yyyy.MM.dd",
  onFocus: b,
  onBlur: _,
  onCalendarClick: L,
  className: U
}, X) => {
  const s = he(F), O = ge(F), [f, S] = T({
    day: "",
    month: "",
    year: ""
  }), G = w(f);
  V(() => {
    G.current = f;
  }, [f]);
  const [I, P] = T(null), [Z, M] = T(!1), q = w(null), J = w(null), Q = w(null), o = le(() => ({
    day: q,
    month: J,
    year: Q
  }), []);
  V(() => {
    S(a ? {
      day: C("day", String(a.getDate())),
      month: C("month", String(a.getMonth() + 1)),
      year: String(a.getFullYear())
    } : { day: "", month: "", year: "" });
  }, [a]);
  const x = m((t) => {
    const { day: e, month: r, year: n } = t;
    if (e && r && n && n.length === 4 && e.length === 2 && r.length === 2) {
      const c = parseInt(e, 10), i = parseInt(r, 10), g = parseInt(n, 10);
      if (R("day", e) && R("month", r) && R("year", n)) {
        const y = new Date(g, i - 1, c);
        if (y.getDate() === c && y.getMonth() === i - 1 && y.getFullYear() === g) {
          M(!1), d?.(y);
          return;
        }
      }
      M(!0);
      return;
    }
    M(!1), !e && !r && !n && d?.(void 0);
  }, [d]), $ = m((t, e) => {
    const r = e.replace(/\D/g, ""), n = B[t], c = r.slice(0, n), i = { ...f, [t]: c };
    if (S(i), c.length === n) {
      const g = s.indexOf(t);
      if (g < s.length - 1) {
        const y = s[g + 1];
        setTimeout(() => {
          o[y].current?.focus(), o[y].current?.select();
        }, 0);
      }
    }
    x(i);
  }, [f, s, x, o]), ee = m((t, e) => {
    const r = s.indexOf(t);
    if (e.key === "ArrowRight") {
      const n = e.currentTarget;
      if (n.selectionStart === n.value.length && r < s.length - 1) {
        e.preventDefault();
        const c = s[r + 1];
        o[c].current?.focus(), o[c].current?.setSelectionRange(0, 0);
      }
    } else if (e.key === "ArrowLeft") {
      if (e.currentTarget.selectionStart === 0 && r > 0) {
        e.preventDefault();
        const c = s[r - 1], i = o[c].current;
        i?.focus(), i?.setSelectionRange(i.value.length, i.value.length);
      }
    } else if (e.key === "Backspace" && !f[t] && r > 0) {
      e.preventDefault();
      const n = s[r - 1];
      o[n].current?.focus(), o[n].current?.select();
    } else if (e.key === "Tab" && !e.shiftKey && r < s.length - 1) {
      e.preventDefault();
      const n = s[r + 1];
      o[n].current?.focus(), o[n].current?.select();
    } else if (e.key === "Tab" && e.shiftKey && r > 0) {
      e.preventDefault();
      const n = s[r - 1];
      o[n].current?.focus(), o[n].current?.select();
    }
  }, [f, s, o]), te = m((t) => {
    P(t), b?.();
  }, [b]), ne = m((t) => {
    setTimeout(() => {
      const e = G.current, r = C(t, e[t]);
      if (r !== e[t]) {
        const c = { ...e, [t]: r };
        S(c), x(c);
      }
      s.some(
        (c) => o[c].current === document.activeElement
      ) || (P(null), _?.());
    }, 0);
  }, [s, o, x, _]), re = m((t) => {
    if (t.stopPropagation(), !u && !I) {
      const e = s[0];
      o[e].current?.focus(), o[e].current?.select();
    }
  }, [u, I, s, o]), se = m((t) => {
    t.stopPropagation(), u || L?.();
  }, [u, L]), h = de[W], z = fe[Y], v = H || Z, N = u ? "disabled" : v ? "error" : k ? "success" : "default", oe = j[N], ce = u ? "default-disabled" : v ? "destructive" : k ? "success" : "default-subtle", ae = E(
    ye,
    h.container,
    h.paddingWithTailIcon,
    h.gap,
    z.base,
    !u && !v && !A && z.focus,
    N === "disabled" && j.disabled.bg,
    N === "error" && "border-destructive",
    N === "success" && "border-success",
    A && !v && "border-strong shadow-component-input-focus",
    u ? "cursor-not-allowed" : "cursor-text",
    U
  ), D = (t) => {
    const e = f[t], r = l?.[t] || me[t], n = I === t;
    return /* @__PURE__ */ p(
      "input",
      {
        ref: o[t],
        type: "text",
        inputMode: "numeric",
        value: e,
        placeholder: r,
        disabled: u,
        onChange: (c) => $(t, c.target.value),
        onKeyDown: (c) => ee(t, c),
        onFocus: () => te(t),
        onBlur: () => ne(t),
        className: E(
          "bg-transparent border-0 outline-none text-center font-body",
          h.text,
          "letter-spacing-tracking-tight",
          e ? oe.text : "text-hint",
          "rounded-2xs padding-x-2",
          n && "bg-state-ghost-hover",
          u && "cursor-not-allowed"
        ),
        style: {
          width: t === "year" ? "40px" : "24px",
          height: "20px"
        }
      },
      t
    );
  };
  return /* @__PURE__ */ K(
    "div",
    {
      ref: X,
      className: ae,
      children: [
        /* @__PURE__ */ K(
          "div",
          {
            className: "flex items-center ds-gap-2 flex-1 min-w-0",
            onClick: re,
            children: [
              D(s[0]),
              /* @__PURE__ */ p("span", { className: "text-hint size-sm", children: O }),
              D(s[1]),
              /* @__PURE__ */ p("span", { className: "text-hint size-sm", children: O }),
              D(s[2])
            ]
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            disabled: u,
            onClick: se,
            className: E(
              "flex-shrink-0 flex items-center justify-center",
              "hover:bg-state-ghost-hover rounded-xs transition-colors",
              u && "cursor-not-allowed"
            ),
            children: /* @__PURE__ */ p(
              ie,
              {
                iconType: ["business", "calendar"],
                size: h.iconSize,
                color: ce
              }
            )
          }
        )
      ]
    }
  );
});
pe.displayName = "DateInput";
export {
  pe as DateInput
};
