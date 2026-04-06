"use client";
import { useRef as w, useCallback as d, useEffect as M } from "react";
function v({
  rowCount: R,
  colCount: k,
  includeHeader: p = !0
}) {
  const x = w(null), b = w(0), m = w(0), f = d(() => {
    const r = x.current;
    if (!r) return [];
    const l = r.querySelectorAll('[role="row"]'), e = [];
    return l.forEach((c) => {
      const t = c.querySelectorAll(
        '[role="gridcell"], [role="columnheader"]'
      );
      e.push(Array.from(t));
    }), e;
  }, []), g = d(
    (r, l) => {
      const e = f();
      if (e.length === 0) return;
      const c = Math.max(0, Math.min(r, e.length - 1)), t = e[c];
      if (!t || t.length === 0) return;
      const s = Math.max(0, Math.min(l, t.length - 1)), n = t[s];
      if (!n) return;
      const h = e[b.current];
      if (h) {
        const a = h[m.current];
        a && a.setAttribute("tabindex", "-1");
      }
      n.setAttribute("tabindex", "0"), n.focus(), b.current = c, m.current = s;
    },
    [f]
  ), C = d(
    (r) => {
      const { key: l, ctrlKey: e, metaKey: c } = r, t = e || c, s = f();
      if (s.length === 0) return;
      const n = b.current, h = m.current, a = s.length - 1, A = (s[n]?.length ?? 1) - 1;
      let u = n, i = h, o = !1;
      switch (l) {
        case "ArrowRight":
          i = Math.min(h + 1, A), o = !0;
          break;
        case "ArrowLeft":
          i = Math.max(h - 1, 0), o = !0;
          break;
        case "ArrowDown":
          u = Math.min(n + 1, a), o = !0;
          break;
        case "ArrowUp":
          u = Math.max(n - 1, 0), o = !0;
          break;
        case "Home":
          t && (u = 0), i = 0, o = !0;
          break;
        case "End":
          t ? (u = a, i = (s[a]?.length ?? 1) - 1) : i = A, o = !0;
          break;
        case "PageDown":
          u = Math.min(n + 10, a), o = !0;
          break;
        case "PageUp":
          u = Math.max(n - 10, 0), o = !0;
          break;
      }
      o && (r.preventDefault(), g(u, i));
    },
    [f, g]
  );
  return M(() => {
    const r = f();
    r.length !== 0 && r.forEach((l, e) => {
      l.forEach((c, t) => {
        e === b.current && t === m.current ? c.setAttribute("tabindex", "0") : c.setAttribute("tabindex", "-1");
      });
    });
  }, [f, R, k]), {
    gridRef: x,
    handleKeyDown: C,
    focusCell: g
  };
}
export {
  v as useGridKeyboardNav
};
