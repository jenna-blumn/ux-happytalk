"use client";
import { jsxs as j, jsx as E, Fragment as _e } from "react/jsx-runtime";
import { forwardRef as ze, useMemo as de, useState as b, useRef as P, useEffect as G, useCallback as N } from "react";
import { cn as B } from "../../../utils/cn.mjs";
import { Icon as we } from "../../icons/Icon/Icon.mjs";
import { SIZE_CONFIG as Ge, STYLE_CONFIG as Le, STATE_CONFIG as fe, INPUT_WRAPPER_BASE as Ue } from "../../../constants/input/Input/Input.constants.mjs";
const Ke = {
  hour: "hh",
  minute: "mm",
  second: "ss"
}, ge = {
  hour: 2,
  minute: 2,
  second: 2
}, W = (r, x) => {
  switch (r) {
    case "hour":
      return x === "24h" ? 23 : 12;
    case "minute":
    case "second":
      return 59;
  }
}, $ = (r, x) => r === "hour" && x === "12h" ? 1 : 0, ne = (r, x, A) => {
  const c = parseInt(x, 10);
  if (isNaN(c)) return !1;
  const I = $(r, A), M = W(r, A);
  return c >= I && c <= M;
}, R = (r) => r ? r.padStart(2, "0") : "", Oe = (r) => r === 0 ? { hour12: 12, period: "AM" } : r === 12 ? { hour12: 12, period: "PM" } : r > 12 ? { hour12: r - 12, period: "PM" } : { hour12: r, period: "AM" }, je = (r, x) => x === "AM" ? r === 12 ? 0 : r : r === 12 ? 12 : r + 12, me = (r, x) => {
  if (!r) return { segments: { hour: "", minute: "", second: "" }, period: "AM" };
  let A = r.hour, c = "AM";
  if (x === "12h") {
    const I = Oe(r.hour);
    A = I.hour12, c = I.period;
  }
  return {
    segments: {
      hour: R(String(A)),
      minute: R(String(r.minute)),
      second: r.second !== void 0 ? R(String(r.second)) : ""
    },
    period: c
  };
}, pe = (r, x, A, c) => {
  const { hour: I, minute: M, second: k } = r;
  if (!I || !M || I.length < 2 || M.length < 2 || c && (!k || k.length < 2)) return;
  const L = parseInt(I, 10), X = parseInt(M, 10), m = c ? parseInt(k, 10) : void 0;
  if (!ne("hour", I, A) || !ne("minute", M, A) || c && !ne("second", k, A)) return;
  let T = L;
  A === "12h" && (T = je(L, x));
  const H = { hour: T, minute: X };
  return c && m !== void 0 && (H.second = m), H;
}, Be = ze(({
  value: r,
  onChange: x,
  placeholder: A,
  disabled: c = !1,
  hasError: I = !1,
  hasSuccess: M = !1,
  isOpen: k = !1,
  timePickerStyle: L = "default",
  size: X = "sm",
  timeFormat: m = "24h",
  showSeconds: T = !1,
  onFocus: H,
  onBlur: se,
  onClockClick: re,
  className: he
}, Se) => {
  const _ = de(
    () => T ? ["hour", "minute", "second"] : ["hour", "minute"],
    [T]
  ), [h, D] = b({ hour: "", minute: "", second: "" }), [S, C] = b({ hour: "", minute: "", second: "" }), [l, oe] = b("AM"), [a, ce] = b("AM"), Y = P(h), Z = P(S), q = P(l), J = P(a);
  G(() => {
    Y.current = h;
  }, [h]), G(() => {
    Z.current = S;
  }, [S]), G(() => {
    q.current = l;
  }, [l]), G(() => {
    J.current = a;
  }, [a]);
  const [U, ue] = b(null), [ve, ie] = b(!1), Q = P(!1);
  G(() => {
    if (!Q.current) {
      const t = me(r?.start, m), e = me(r?.end, m);
      D(t.segments), oe(t.period), C(e.segments), ce(e.period), ie(!1);
    }
  }, [r, m]);
  const xe = P(null), ye = P(null), Te = P(null), Ae = P(null), Ie = P(null), Pe = P(null), d = de(() => ({
    start: { hour: xe, minute: ye, second: Te },
    end: { hour: Ae, minute: Ie, second: Pe }
  }), []), V = N(() => {
    const t = [];
    for (const e of _)
      t.push({ part: "start", segment: e });
    for (const e of _)
      t.push({ part: "end", segment: e });
    return t;
  }, [_]), f = N((t, e, s, v) => {
    const u = pe(t, s, m, T), y = pe(e, v, m, T), n = !t.hour && !t.minute && (!T || !t.second) && !e.hour && !e.minute && (!T || !e.second), o = t.hour.length === 2 && t.minute.length === 2 && (!T || t.second.length === 2), i = e.hour.length === 2 && e.minute.length === 2 && (!T || e.second.length === 2);
    ie(o && !u || i && !y), x?.(n ? void 0 : { start: u, end: y });
  }, [x, m, T]), Me = N((t, e, s) => {
    const u = s.replace(/\D/g, "").slice(0, ge[e]), y = t === "start" ? D : C, o = { ...t === "start" ? h : S, [e]: u };
    if (y(o), u.length === ge[e]) {
      const i = V(), g = i.findIndex((p) => p.part === t && p.segment === e);
      if (g < i.length - 1) {
        const p = i[g + 1];
        setTimeout(() => {
          d[p.part][p.segment].current?.focus(), d[p.part][p.segment].current?.select();
        }, 0);
      }
    }
    t === "start" ? f(o, S, l, a) : f(h, o, l, a);
  }, [h, S, l, a, d, f, V]), Ne = N((t, e, s) => {
    const v = V(), u = v.findIndex((n) => n.part === t && n.segment === e), y = t === "start" ? h : S;
    if (s.key === "ArrowUp" || s.key === "ArrowDown") {
      s.preventDefault();
      const n = parseInt(y[e] || "0", 10), o = $(e, m), i = W(e, m);
      let g;
      s.key === "ArrowUp" ? g = n >= i ? o : n + 1 : g = n <= o ? i : n - 1;
      const p = R(String(g)), ee = t === "start" ? D : C, w = { ...y, [e]: p };
      ee(w), t === "start" ? f(w, S, l, a) : f(h, w, l, a);
    } else if (s.key === "ArrowRight") {
      const n = s.currentTarget;
      if (n.selectionStart === n.value.length && u < v.length - 1) {
        s.preventDefault();
        const o = v[u + 1];
        d[o.part][o.segment].current?.focus(), d[o.part][o.segment].current?.setSelectionRange(0, 0);
      }
    } else if (s.key === "ArrowLeft") {
      if (s.currentTarget.selectionStart === 0 && u > 0) {
        s.preventDefault();
        const o = v[u - 1], i = d[o.part][o.segment].current;
        i?.focus(), i?.setSelectionRange(i.value.length, i.value.length);
      }
    } else if (s.key === "Home") {
      s.preventDefault();
      const n = $(e, m), o = R(String(n)), i = t === "start" ? D : C, g = { ...y, [e]: o };
      i(g), t === "start" ? f(g, S, l, a) : f(h, g, l, a);
    } else if (s.key === "End") {
      s.preventDefault();
      const n = W(e, m), o = R(String(n)), i = t === "start" ? D : C, g = { ...y, [e]: o };
      i(g), t === "start" ? f(g, S, l, a) : f(h, g, l, a);
    } else if (s.key === "PageUp" || s.key === "PageDown") {
      s.preventDefault();
      const n = parseInt(y[e] || "0", 10), o = $(e, m), i = W(e, m), g = e === "hour" ? 1 : 5;
      let p;
      s.key === "PageUp" ? (p = n + g, p > i && (p = i)) : (p = n - g, p < o && (p = o));
      const ee = R(String(p)), w = t === "start" ? D : C, te = { ...y, [e]: ee };
      w(te), t === "start" ? f(te, S, l, a) : f(h, te, l, a);
    } else if (s.key === "Backspace" && !y[e] && u > 0) {
      s.preventDefault();
      const n = v[u - 1];
      d[n.part][n.segment].current?.focus(), d[n.part][n.segment].current?.select();
    } else if (s.key === "Tab" && !s.shiftKey && u < v.length - 1) {
      s.preventDefault();
      const n = v[u + 1];
      d[n.part][n.segment].current?.focus(), d[n.part][n.segment].current?.select();
    } else if (s.key === "Tab" && s.shiftKey && u > 0) {
      s.preventDefault();
      const n = v[u - 1];
      d[n.part][n.segment].current?.focus(), d[n.part][n.segment].current?.select();
    }
  }, [h, S, l, a, d, V, f, m]), Re = N((t, e) => {
    Q.current = !0, ue({ part: t, segment: e }), H?.();
  }, [H]), ke = N((t, e) => {
    setTimeout(() => {
      const s = t === "start" ? Y.current : Z.current, v = t === "start" ? D : C, u = R(s[e]);
      if (u !== s[e]) {
        const o = { ...s, [e]: u };
        v(o), t === "start" ? f(o, Z.current, q.current, J.current) : f(Y.current, o, q.current, J.current);
      }
      V().some(
        (o) => d[o.part][o.segment].current === document.activeElement
      ) || (Q.current = !1, ue(null), se?.());
    }, 0);
  }, [d, f, se, V]), De = N((t) => {
    if (t.stopPropagation(), !c && !U) {
      const e = _[0];
      d.start[e].current?.focus(), d.start[e].current?.select();
    }
  }, [c, U, _, d]), Ce = N((t) => {
    t.stopPropagation(), c || re?.();
  }, [c, re]), Ee = N((t) => {
    if (!c)
      if (t === "start") {
        const e = l === "AM" ? "PM" : "AM";
        oe(e), f(h, S, e, a);
      } else {
        const e = a === "AM" ? "PM" : "AM";
        ce(e), f(h, S, l, e);
      }
  }, [c, l, a, h, S, f]), z = Ge[X], le = Le[L], K = I || ve, O = c ? "disabled" : K ? "error" : M ? "success" : "default", Ve = fe[O], be = c ? "default-disabled" : K ? "destructive" : M ? "success" : "default-subtle", He = B(
    Ue,
    z.container,
    z.paddingWithTailIcon,
    z.gap,
    le.base,
    !c && !K && !k && le.focus,
    O === "disabled" && fe.disabled.bg,
    O === "error" && "border-destructive",
    O === "success" && "border-success",
    k && !K && "border-strong shadow-component-input-focus",
    c ? "cursor-not-allowed" : "cursor-text",
    he
  ), F = (t, e) => {
    const v = (t === "start" ? h : S)[e], u = A?.[e] || Ke[e], y = U?.part === t && U?.segment === e;
    return /* @__PURE__ */ E(
      "input",
      {
        ref: d[t][e],
        type: "text",
        inputMode: "numeric",
        value: v,
        placeholder: u,
        disabled: c,
        onChange: (n) => Me(t, e, n.target.value),
        onKeyDown: (n) => Ne(t, e, n),
        onFocus: () => Re(t, e),
        onBlur: () => ke(t, e),
        className: B(
          "bg-transparent border-0 outline-none text-center font-body",
          z.text,
          "letter-spacing-tracking-tight",
          v ? Ve.text : "text-hint",
          "rounded-2xs padding-x-2",
          y && "bg-state-ghost-hover",
          c && "cursor-not-allowed"
        ),
        style: {
          width: "24px",
          height: "20px"
        }
      },
      `${t}-${e}`
    );
  }, ae = (t) => {
    const e = t === "start" ? l : a;
    return /* @__PURE__ */ j("div", { className: "flex items-center ds-gap-2", children: [
      F(t, "hour"),
      /* @__PURE__ */ E("span", { className: "text-hint size-sm", children: ":" }),
      F(t, "minute"),
      T && /* @__PURE__ */ j(_e, { children: [
        /* @__PURE__ */ E("span", { className: "text-hint size-sm", children: ":" }),
        F(t, "second")
      ] }),
      m === "12h" && /* @__PURE__ */ E(
        "button",
        {
          type: "button",
          disabled: c,
          onClick: () => Ee(t),
          className: B(
            "padding-x-4 padding-y-2 rounded-xs",
            "ml-[4px]",
            "font-body size-sm line-height-leading-5 font-medium",
            "transition-colors duration-150",
            c ? "text-hint cursor-not-allowed" : "text-default hover:bg-state-ghost-hover cursor-pointer"
          ),
          children: e
        }
      )
    ] });
  };
  return /* @__PURE__ */ j(
    "div",
    {
      ref: Se,
      className: He,
      children: [
        /* @__PURE__ */ j(
          "div",
          {
            className: "flex items-center ds-gap-8 flex-1 min-w-0",
            onClick: De,
            children: [
              ae("start"),
              /* @__PURE__ */ E("span", { className: "text-hint size-sm", children: "-" }),
              ae("end")
            ]
          }
        ),
        /* @__PURE__ */ E(
          "button",
          {
            type: "button",
            disabled: c,
            onClick: Ce,
            className: B(
              "flex-shrink-0 flex items-center justify-center",
              "hover:bg-state-ghost-hover rounded-xs transition-colors",
              c && "cursor-not-allowed"
            ),
            children: /* @__PURE__ */ E(
              we,
              {
                iconType: ["system", "time"],
                size: z.iconSize,
                color: be
              }
            )
          }
        )
      ]
    }
  );
});
Be.displayName = "TimeRangeInput";
export {
  Be as TimeRangeInput
};
