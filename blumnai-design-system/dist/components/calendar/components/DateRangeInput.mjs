"use client";
import { jsxs as Y, jsx as N } from "react/jsx-runtime";
import { forwardRef as Ne, useState as _, useRef as p, useEffect as K, useMemo as Me, useCallback as S } from "react";
import { cn as V } from "../../../utils/cn.mjs";
import { Icon as Re } from "../../icons/Icon/Icon.mjs";
import { SIZE_CONFIG as Ee, STYLE_CONFIG as Ce, STATE_CONFIG as te, INPUT_WRAPPER_BASE as Te } from "../../../constants/input/Input/Input.constants.mjs";
const Ae = {
  day: "dd",
  month: "mm",
  year: "yyyy"
}, re = {
  day: 2,
  month: 2,
  year: 4
}, ke = (c) => {
  switch (c) {
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
}, be = (c) => c.includes(".") ? "." : c.includes("-") ? "-" : "/", j = (c, i) => {
  const m = parseInt(i, 10);
  if (isNaN(m)) return !1;
  switch (c) {
    case "day":
      return m >= 1 && m <= 31;
    case "month":
      return m >= 1 && m <= 12;
    case "year":
      return m >= 1 && m <= 9999;
    default:
      return !1;
  }
}, B = (c, i) => {
  if (!i) return "";
  const m = re[c];
  return i.padStart(m, "0");
}, w = (c) => c ? {
  day: B("day", String(c.getDate())),
  month: B("month", String(c.getMonth() + 1)),
  year: String(c.getFullYear())
} : { day: "", month: "", year: "" }, ne = (c) => {
  const { day: i, month: m, year: l } = c;
  if (!i || !m || !l || l.length < 4) return;
  const T = parseInt(i, 10), M = parseInt(m, 10), R = parseInt(l, 10);
  if (!j("day", i) || !j("month", m) || !j("year", l))
    return;
  const v = new Date(R, M - 1, T);
  if (!(v.getDate() !== T || v.getMonth() !== M - 1 || v.getFullYear() !== R))
    return v;
}, ze = Ne(({
  value: c,
  onChange: i,
  placeholder: m,
  disabled: l = !1,
  hasError: T = !1,
  hasSuccess: M = !1,
  isOpen: R = !1,
  datePickerStyle: v = "default",
  size: se = "sm",
  dateFormat: H = "yyyy.MM.dd",
  onFocus: W,
  onBlur: $,
  onCalendarClick: U,
  className: oe
}, ce) => {
  const f = ke(H), X = be(H), [g, A] = _({
    day: "",
    month: "",
    year: ""
  }), [y, k] = _({
    day: "",
    month: "",
    year: ""
  }), L = p(g), P = p(y);
  K(() => {
    L.current = g;
  }, [g]), K(() => {
    P.current = y;
  }, [y]);
  const [b, Z] = _(null), [ae, q] = _(!1), G = p(!1);
  K(() => {
    G.current || (A(w(c?.from)), k(w(c?.to)), q(!1));
  }, [c]);
  const le = p(null), ue = p(null), me = p(null), ie = p(null), fe = p(null), de = p(null), a = Me(() => ({
    from: { day: le, month: ue, year: me },
    to: { day: ie, month: fe, year: de }
  }), []), I = S(() => [
    { part: "from", segment: f[0] },
    { part: "from", segment: f[1] },
    { part: "from", segment: f[2] },
    { part: "to", segment: f[0] },
    { part: "to", segment: f[1] },
    { part: "to", segment: f[2] }
  ], [f]), D = S((e, t) => {
    let r = ne(e), s = ne(t);
    const o = !e.day && !e.month && !e.year && !t.day && !t.month && !t.year, h = e.day.length === 2 && e.month.length === 2 && e.year.length === 4, n = t.day.length === 2 && t.month.length === 2 && t.year.length === 4;
    if (q(h && !r || n && !s), r && s && r > s) {
      [r, s] = [s, r];
      const d = w(r), C = w(s);
      A(d), k(C);
    }
    i?.(o ? void 0 : { from: r, to: s });
  }, [i]), ge = S((e, t, r) => {
    const s = r.replace(/\D/g, ""), o = re[t], h = s.slice(0, o), n = e === "from" ? A : k, d = { ...e === "from" ? g : y, [t]: h };
    if (n(d), h.length === o) {
      const C = I(), ee = C.findIndex((x) => x.part === e && x.segment === t);
      if (ee < C.length - 1) {
        const x = C[ee + 1];
        setTimeout(() => {
          a[x.part][x.segment].current?.focus(), a[x.part][x.segment].current?.select();
        }, 0);
      }
    }
    e === "from" ? D(d, y) : D(g, d);
  }, [g, y, a, D, I]), ye = S((e, t, r) => {
    const s = I(), o = s.findIndex((n) => n.part === e && n.segment === t), h = e === "from" ? g : y;
    if (r.key === "ArrowRight") {
      const n = r.currentTarget;
      if (n.selectionStart === n.value.length && o < s.length - 1) {
        r.preventDefault();
        const u = s[o + 1];
        a[u.part][u.segment].current?.focus(), a[u.part][u.segment].current?.setSelectionRange(0, 0);
      }
    } else if (r.key === "ArrowLeft") {
      if (r.currentTarget.selectionStart === 0 && o > 0) {
        r.preventDefault();
        const u = s[o - 1], d = a[u.part][u.segment].current;
        d?.focus(), d?.setSelectionRange(d.value.length, d.value.length);
      }
    } else if (r.key === "Backspace" && !h[t] && o > 0) {
      r.preventDefault();
      const n = s[o - 1];
      a[n.part][n.segment].current?.focus(), a[n.part][n.segment].current?.select();
    } else if (r.key === "Tab" && !r.shiftKey && o < s.length - 1) {
      r.preventDefault();
      const n = s[o + 1];
      a[n.part][n.segment].current?.focus(), a[n.part][n.segment].current?.select();
    } else if (r.key === "Tab" && r.shiftKey && o > 0) {
      r.preventDefault();
      const n = s[o - 1];
      a[n.part][n.segment].current?.focus(), a[n.part][n.segment].current?.select();
    }
  }, [g, y, a, I]), he = S((e, t) => {
    G.current = !0, Z({ part: e, segment: t }), W?.();
  }, [W]), pe = S((e, t) => {
    setTimeout(() => {
      const r = e === "from" ? L.current : P.current, s = e === "from" ? A : k, o = B(t, r[t]);
      if (o !== r[t]) {
        const u = { ...r, [t]: o };
        s(u), e === "from" ? D(u, P.current) : D(L.current, u);
      }
      I().some(
        (u) => a[u.part][u.segment].current === document.activeElement
      ) || (G.current = !1, Z(null), $?.());
    }, 0);
  }, [a, D, $, I]), Se = S((e) => {
    if (e.stopPropagation(), !l && !b) {
      const t = f[0];
      a.from[t].current?.focus(), a.from[t].current?.select();
    }
  }, [l, b, f, a]), xe = S((e) => {
    e.stopPropagation(), l || U?.();
  }, [l, U]), E = Ee[se], J = Ce[v], z = T || ae, F = l ? "disabled" : z ? "error" : M ? "success" : "default", ve = te[F], Ie = l ? "default-disabled" : z ? "destructive" : M ? "success" : "default-subtle", De = V(
    Te,
    E.container,
    E.paddingWithTailIcon,
    E.gap,
    J.base,
    !l && !z && !R && J.focus,
    F === "disabled" && te.disabled.bg,
    F === "error" && "border-destructive",
    F === "success" && "border-success",
    R && !z && "border-strong shadow-component-input-focus",
    l ? "cursor-not-allowed" : "cursor-text",
    oe
  ), O = (e, t) => {
    const s = (e === "from" ? g : y)[t], o = m?.[t] || Ae[t], h = b?.part === e && b?.segment === t;
    return /* @__PURE__ */ N(
      "input",
      {
        ref: a[e][t],
        type: "text",
        inputMode: "numeric",
        value: s,
        placeholder: o,
        disabled: l,
        onChange: (n) => ge(e, t, n.target.value),
        onKeyDown: (n) => ye(e, t, n),
        onFocus: () => he(e, t),
        onBlur: () => pe(e, t),
        className: V(
          "bg-transparent border-0 outline-none text-center font-body",
          E.text,
          "letter-spacing-tracking-tight",
          s ? ve.text : "text-hint",
          "rounded-2xs padding-x-2",
          h && "bg-state-ghost-hover",
          l && "cursor-not-allowed"
        ),
        style: {
          width: t === "year" ? "40px" : "24px",
          height: "20px"
        }
      },
      `${e}-${t}`
    );
  }, Q = (e) => /* @__PURE__ */ Y("div", { className: "flex items-center ds-gap-2", children: [
    O(e, f[0]),
    /* @__PURE__ */ N("span", { className: "text-hint size-sm", children: X }),
    O(e, f[1]),
    /* @__PURE__ */ N("span", { className: "text-hint size-sm", children: X }),
    O(e, f[2])
  ] });
  return /* @__PURE__ */ Y(
    "div",
    {
      ref: ce,
      className: De,
      children: [
        /* @__PURE__ */ Y(
          "div",
          {
            className: "flex items-center ds-gap-8 flex-1 min-w-0",
            onClick: Se,
            children: [
              Q("from"),
              /* @__PURE__ */ N("span", { className: "text-hint size-sm", children: "-" }),
              Q("to")
            ]
          }
        ),
        /* @__PURE__ */ N(
          "button",
          {
            type: "button",
            disabled: l,
            onClick: xe,
            className: V(
              "flex-shrink-0 flex items-center justify-center",
              "hover:bg-state-ghost-hover rounded-xs transition-colors",
              l && "cursor-not-allowed"
            ),
            children: /* @__PURE__ */ N(
              Re,
              {
                iconType: ["business", "calendar"],
                size: E.iconSize,
                color: Ie
              }
            )
          }
        )
      ]
    }
  );
});
ze.displayName = "DateRangeInput";
export {
  ze as DateRangeInput
};
