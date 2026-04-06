"use client";
import { jsx as m } from "react/jsx-runtime";
import { forwardRef as S, useCallback as i, useRef as N, useState as E, useMemo as w } from "react";
import { cn as G } from "../../../utils/cn.mjs";
import { AccordionItem as R } from "../AccordionItem/AccordionItem.mjs";
const _ = S(({
  items: a,
  spacing: g = 8,
  style: y = "default",
  allowMultipleOpen: u = !0,
  onToggle: d,
  className: p,
  ...v
}, I) => {
  const h = i((e, n) => e.id ?? `__idx_${n}`, []), c = d !== void 0, b = N([]), [x, D] = E(() => {
    const e = /* @__PURE__ */ new Set();
    return a.forEach((n, r) => {
      n.isOpen && e.add(h(n, r));
    }), e;
  }), k = i(
    (e, n, r) => {
      if (r) {
        r(!n);
        return;
      }
      if (c) {
        d(e, !n);
        return;
      }
      D((s) => {
        const t = new Set(s), l = t.has(e);
        return u ? l ? t.delete(e) : t.add(e) : l ? t.delete(e) : (t.clear(), t.add(e)), t;
      });
    },
    [u, c, d]
  ), o = w(
    () => a.map((e, n) => ({ index: n, disabled: e.disabled ?? !1 })).filter((e) => !e.disabled).map((e) => e.index),
    [a]
  ), C = i(
    (e, n) => {
      const r = o.indexOf(e);
      if (r === -1) return;
      let s;
      switch (n.key) {
        case "ArrowDown":
          n.preventDefault(), s = o[(r + 1) % o.length];
          break;
        case "ArrowUp":
          n.preventDefault(), s = o[(r - 1 + o.length) % o.length];
          break;
        case "Home":
          n.preventDefault(), s = o[0];
          break;
        case "End":
          n.preventDefault(), s = o[o.length - 1];
          break;
      }
      s !== void 0 && b.current[s]?.focus();
    },
    [o]
  ), A = w(() => G("flex flex-col w-full", p), [p]);
  return /* @__PURE__ */ m(
    "div",
    {
      ref: I,
      className: A,
      style: { gap: g },
      ...v,
      children: a.map((e, n) => {
        const r = h(e, n), t = e.onToggle !== void 0 || c ? e.isOpen ?? !1 : x.has(r), l = e.style ?? y;
        return /* @__PURE__ */ m(
          R,
          {
            header: e.header,
            style: l,
            isOpen: t,
            onToggle: () => k(r, t, e.onToggle),
            disabled: e.disabled,
            className: e.className,
            headerProps: {
              ref: (f) => {
                b.current[n] = f;
              },
              onKeyDown: (f) => C(n, f)
            },
            children: e.children
          },
          r
        );
      })
    }
  );
});
_.displayName = "AccordionGroup";
export {
  _ as AccordionGroup
};
