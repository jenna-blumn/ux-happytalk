"use client";
import { jsxs as z, jsx as A, Fragment as Ae } from "react/jsx-runtime";
import { forwardRef as ke, useMemo as Q, useState as D, useRef as R, useEffect as F, useCallback as x } from "react";
import { cn as b } from "../../../utils/cn.mjs";
import { Icon as Ie } from "../../icons/Icon/Icon.mjs";
import { SIZE_CONFIG as Me, STYLE_CONFIG as Ne, STATE_CONFIG as ee, INPUT_WRAPPER_BASE as Pe } from "../../../constants/input/Input/Input.constants.mjs";
const Ve = {
  hour: "hh",
  minute: "mm",
  second: "ss"
}, te = {
  hour: 2,
  minute: 2,
  second: 2
}, I = (o, p) => {
  switch (o) {
    case "hour":
      return p === "24h" ? 23 : 12;
    case "minute":
    case "second":
      return 59;
  }
}, M = (o, p) => o === "hour" && p === "12h" ? 1 : 0, G = (o, p, N) => {
  const u = parseInt(p, 10);
  if (isNaN(u)) return !1;
  const C = M(o, N), P = I(o, N);
  return u >= C && u <= P;
}, y = (o) => o ? o.padStart(2, "0") : "", Ee = (o) => o === 0 ? { hour12: 12, period: "AM" } : o === 12 ? { hour12: 12, period: "PM" } : o > 12 ? { hour12: o - 12, period: "PM" } : { hour12: o, period: "AM" }, De = (o, p) => p === "AM" ? o === 12 ? 0 : o : o === 12 ? 12 : o + 12, Re = ke(({
  value: o,
  onChange: p,
  placeholder: N,
  disabled: u = !1,
  hasError: C = !1,
  hasSuccess: P = !1,
  isOpen: L = !1,
  timePickerStyle: ne = "default",
  size: re = "sm",
  timeFormat: a = "24h",
  showSeconds: S = !1,
  hideClockIcon: U = !1,
  onFocus: K,
  onBlur: j,
  onClockClick: B,
  className: oe
}, se) => {
  const l = Q(
    () => S ? ["hour", "minute", "second"] : ["hour", "minute"],
    [S]
  ), [f, v] = D({
    hour: "",
    minute: "",
    second: ""
  }), [d, W] = D("AM"), X = R(f);
  F(() => {
    X.current = f;
  }, [f]);
  const [H, Y] = D(null), [ce, _] = D(!1), ue = R(null), ie = R(null), ae = R(null), i = Q(() => ({
    hour: ue,
    minute: ie,
    second: ae
  }), []);
  F(() => {
    if (o) {
      let e = o.hour, t = "AM";
      if (a === "12h") {
        const s = Ee(o.hour);
        e = s.hour12, t = s.period;
      }
      v({
        hour: y(String(e)),
        minute: y(String(o.minute)),
        second: o.second !== void 0 ? y(String(o.second)) : ""
      }), W(t);
    } else
      v({ hour: "", minute: "", second: "" });
  }, [o, a]);
  const h = x((e, t) => {
    const { hour: s, minute: n, second: r } = e, c = s && s.length === 2, g = n && n.length === 2, m = !S || r && r.length === 2;
    if (c && g && m) {
      const T = parseInt(s, 10), E = parseInt(n, 10), $ = S ? parseInt(r, 10) : void 0, ye = G("hour", s, a), Te = G("minute", n, a), we = !S || G("second", r, a);
      if (ye && Te && we) {
        let q = T;
        a === "12h" && (q = De(T, t)), _(!1);
        const J = {
          hour: q,
          minute: E
        };
        S && $ !== void 0 && (J.second = $), p?.(J);
        return;
      }
      _(!0);
      return;
    }
    _(!1), !s && !n && (!S || !r) && p?.(void 0);
  }, [p, a, S]), le = x((e, t) => {
    const n = t.replace(/\D/g, "").slice(0, te[e]), r = { ...f, [e]: n };
    if (v(r), n.length === te[e]) {
      const c = l.indexOf(e);
      if (c < l.length - 1) {
        const g = l[c + 1];
        setTimeout(() => {
          i[g].current?.focus(), i[g].current?.select();
        }, 0);
      }
    }
    h(r, d);
  }, [f, l, h, i, d]), fe = x((e, t) => {
    const s = l.indexOf(e);
    if (t.key === "ArrowUp" || t.key === "ArrowDown") {
      t.preventDefault();
      const n = parseInt(f[e] || "0", 10), r = M(e, a), c = I(e, a);
      let g;
      t.key === "ArrowUp" ? g = n >= c ? r : n + 1 : g = n <= r ? c : n - 1;
      const m = y(String(g)), T = { ...f, [e]: m };
      v(T), h(T, d);
    } else if (t.key === "ArrowRight") {
      const n = t.currentTarget;
      if (n.selectionStart === n.value.length && s < l.length - 1) {
        t.preventDefault();
        const r = l[s + 1];
        i[r].current?.focus(), i[r].current?.setSelectionRange(0, 0);
      }
    } else if (t.key === "ArrowLeft") {
      if (t.currentTarget.selectionStart === 0 && s > 0) {
        t.preventDefault();
        const r = l[s - 1], c = i[r].current;
        c?.focus(), c?.setSelectionRange(c.value.length, c.value.length);
      }
    } else if (t.key === "Home") {
      t.preventDefault();
      const n = M(e, a), r = y(String(n)), c = { ...f, [e]: r };
      v(c), h(c, d);
    } else if (t.key === "End") {
      t.preventDefault();
      const n = I(e, a), r = y(String(n)), c = { ...f, [e]: r };
      v(c), h(c, d);
    } else if (t.key === "PageUp" || t.key === "PageDown") {
      t.preventDefault();
      const n = parseInt(f[e] || "0", 10), r = M(e, a), c = I(e, a), g = e === "hour" ? 1 : 5;
      let m;
      t.key === "PageUp" ? (m = n + g, m > c && (m = c)) : (m = n - g, m < r && (m = r));
      const T = y(String(m)), E = { ...f, [e]: T };
      v(E), h(E, d);
    } else if (t.key === "Backspace" && !f[e] && s > 0) {
      t.preventDefault();
      const n = l[s - 1];
      i[n].current?.focus(), i[n].current?.select();
    } else if (t.key === "Tab" && !t.shiftKey && s < l.length - 1) {
      t.preventDefault();
      const n = l[s + 1];
      i[n].current?.focus(), i[n].current?.select();
    } else if (t.key === "Tab" && t.shiftKey && s > 0) {
      t.preventDefault();
      const n = l[s - 1];
      i[n].current?.focus(), i[n].current?.select();
    }
  }, [f, l, i, a, h, d]), de = x((e) => {
    Y(e), K?.();
  }, [K]), pe = x((e) => {
    setTimeout(() => {
      const t = X.current, s = y(t[e]);
      if (s !== t[e]) {
        const r = { ...t, [e]: s };
        v(r), h(r, d);
      }
      l.some(
        (r) => i[r].current === document.activeElement
      ) || (Y(null), j?.());
    }, 0);
  }, [l, i, h, j, d]), he = x((e) => {
    if (e.stopPropagation(), !u && !H) {
      const t = l[0];
      i[t].current?.focus(), i[t].current?.select();
    }
  }, [u, H, l, i]), ge = x((e) => {
    e.stopPropagation(), u || B?.();
  }, [u, B]), me = x(() => {
    if (u) return;
    const e = d === "AM" ? "PM" : "AM";
    W(e), h(f, e);
  }, [u, d, f, h]), w = Me[re], Z = Ne[ne], k = C || ce, V = u ? "disabled" : k ? "error" : P ? "success" : "default", Se = ee[V], ve = u ? "default-disabled" : k ? "destructive" : P ? "success" : "default-subtle", xe = b(
    Pe,
    w.container,
    U ? w.padding : w.paddingWithTailIcon,
    w.gap,
    Z.base,
    !u && !k && !L && Z.focus,
    V === "disabled" && ee.disabled.bg,
    V === "error" && "border-destructive",
    V === "success" && "border-success",
    L && !k && "border-strong shadow-component-input-focus",
    u ? "cursor-not-allowed" : "cursor-text",
    oe
  ), O = (e) => {
    const t = f[e], s = N?.[e] || Ve[e], n = H === e;
    return /* @__PURE__ */ A(
      "input",
      {
        ref: i[e],
        type: "text",
        inputMode: "numeric",
        role: "spinbutton",
        "aria-label": e,
        "aria-valuenow": t ? parseInt(t, 10) : void 0,
        "aria-valuemin": M(e, a),
        "aria-valuemax": I(e, a),
        value: t,
        placeholder: s,
        disabled: u,
        onChange: (r) => le(e, r.target.value),
        onKeyDown: (r) => fe(e, r),
        onFocus: () => de(e),
        onBlur: () => pe(e),
        className: b(
          "bg-transparent border-0 outline-none text-center font-body",
          w.text,
          "letter-spacing-tracking-tight",
          t ? Se.text : "text-hint",
          "rounded-2xs padding-x-2",
          n && "bg-state-ghost-hover",
          u && "cursor-not-allowed"
        ),
        style: {
          width: "24px",
          height: "20px"
        }
      },
      e
    );
  };
  return /* @__PURE__ */ z(
    "div",
    {
      ref: se,
      className: xe,
      "aria-invalid": k || void 0,
      children: [
        /* @__PURE__ */ z(
          "div",
          {
            className: "flex items-center ds-gap-2 flex-1 min-w-0",
            onClick: he,
            children: [
              O("hour"),
              /* @__PURE__ */ A("span", { className: "text-hint size-sm", children: ":" }),
              O("minute"),
              S && /* @__PURE__ */ z(Ae, { children: [
                /* @__PURE__ */ A("span", { className: "text-hint size-sm", children: ":" }),
                O("second")
              ] }),
              a === "12h" && /* @__PURE__ */ A(
                "button",
                {
                  type: "button",
                  disabled: u,
                  onClick: me,
                  "aria-label": `Toggle AM/PM, current: ${d}`,
                  className: b(
                    "padding-x-4 padding-y-2 rounded-xs",
                    "ml-[4px]",
                    "font-body size-sm line-height-leading-5 font-medium",
                    "transition-colors duration-150",
                    u ? "text-hint cursor-not-allowed" : "text-default hover:bg-state-ghost-hover cursor-pointer"
                  ),
                  children: d
                }
              )
            ]
          }
        ),
        !U && /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            disabled: u,
            onClick: ge,
            "aria-label": "Open time picker",
            className: b(
              "flex-shrink-0 flex items-center justify-center",
              "hover:bg-state-ghost-hover rounded-xs transition-colors",
              u && "cursor-not-allowed"
            ),
            children: /* @__PURE__ */ A(
              Ie,
              {
                iconType: ["system", "time"],
                size: w.iconSize,
                color: ve
              }
            )
          }
        )
      ]
    }
  );
});
Re.displayName = "TimeInput";
export {
  Re as TimeInput
};
