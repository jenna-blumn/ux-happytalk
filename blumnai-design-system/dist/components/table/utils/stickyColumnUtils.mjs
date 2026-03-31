"use client";
function u(e) {
  if (!e) return 150;
  const s = e.match(/^(\d+(?:\.\d+)?)(px)?$/);
  return s ? parseFloat(s[1]) : 150;
}
function o(e, s) {
  const c = /* @__PURE__ */ new Map();
  let i = 0;
  return e.forEach((t, r) => {
    if (!(t.meta?.sticky === !0 || t.meta?.sticky === "left")) return;
    const n = t.id ?? t.accessorKey ?? `col-${r}`, a = s?.[n] ?? u(t.meta?.width);
    c.set(n, {
      index: r,
      leftOffset: i,
      width: a
    }), i += a;
  }), c;
}
export {
  o as calculateStickyPositions
};
