"use client";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as p, Suspense as u } from "react";
import { hasFile as d, getFileSync as y, getFileLazy as b } from "./file-registry.mjs";
function f(n, i) {
  return `${n.replace("thumbnail-", "thumbnail ")}__${i}`;
}
const g = {
  sm: 24,
  md: 32,
  lg: 40
}, F = p(({
  fileType: n,
  size: i = "md",
  className: l,
  src: r,
  ...c
}, m) => {
  const t = f(n, i), e = g[i];
  if (!d(t))
    return console.warn(`FileIcon: Unknown file type "${n}" with size "${i}"`), null;
  const s = /* @__PURE__ */ o("div", { style: { width: e, height: e, display: "inline-block" } }), h = n.startsWith("thumbnail") && r ? { imageSrc: r } : {}, a = y(t) || b(t);
  return a ? /* @__PURE__ */ o(u, { fallback: s, children: /* @__PURE__ */ o(
    a,
    {
      ref: m,
      size: e,
      className: l,
      ...h,
      ...c
    }
  ) }) : s;
});
F.displayName = "FileIcon";
export {
  F as FileIcon
};
