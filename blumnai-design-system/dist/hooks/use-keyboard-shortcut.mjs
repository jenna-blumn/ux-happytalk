import { useRef as d, useEffect as a } from "react";
import { parseShortcut as l } from "./keyboard-shortcut-parser.mjs";
const m = /* @__PURE__ */ new Set(["INPUT", "TEXTAREA", "SELECT"]);
function y(e) {
  return !e || !(e instanceof HTMLElement) ? !1 : m.has(e.tagName) || e.isContentEditable;
}
function T(e, n, c) {
  const i = d(n);
  a(() => {
    i.current = n;
  });
  const {
    enabled: u = !0,
    ignoreInputFields: f = !0,
    preventDefault: o = !0
  } = c ?? {};
  a(() => {
    if (!e || !u) return;
    const r = l(e);
    if (!r.key) return;
    const s = (t) => {
      t.repeat || t.metaKey === r.meta && t.ctrlKey === r.ctrl && t.shiftKey === r.shift && t.altKey === r.alt && t.key.toLowerCase() === r.key && (f && !r.hasModifier && y(t.target) || (o && t.preventDefault(), i.current()));
    };
    return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [e, u, f, o]);
}
export {
  T as useKeyboardShortcut
};
