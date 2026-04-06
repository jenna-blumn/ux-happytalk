"use client";
import { jsxs as l, jsx as a } from "react/jsx-runtime";
import { Avatar as c } from "../../avatar/Avatar/Avatar.mjs";
import { cn as o } from "../../../utils/cn.mjs";
function p(i) {
  const t = i.trim().split(/\s+/);
  return t.length === 1 ? t[0].charAt(0).toUpperCase() : (t[0].charAt(0) + t[t.length - 1].charAt(0)).toUpperCase();
}
function d({
  src: i,
  name: t,
  initials: e,
  size: n = "2xs",
  showName: s = !0
}) {
  const r = e ?? (t ? p(t) : void 0);
  return /* @__PURE__ */ l("div", { className: "flex items-center ds-gap-8", children: [
    /* @__PURE__ */ a(
      c,
      {
        variant: i ? "userpic" : r ? "initials" : "empty",
        src: i,
        initials: r,
        size: n
      }
    ),
    s && t && /* @__PURE__ */ a("span", { className: o("truncate font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-default"), children: t })
  ] });
}
export {
  d as CellAvatar
};
