"use client";
import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { parseIconTypeWithFill as p } from "../../icons/Icon/Icon.types.mjs";
import { cn as a } from "../../../utils/cn.mjs";
import { Icon as m } from "../../icons/Icon/Icon.mjs";
function x({
  iconType: t,
  size: n = 16,
  color: o = "default",
  label: e,
  className: r
}) {
  const { iconType: s, isFill: c } = p(t);
  return /* @__PURE__ */ l("div", { className: a("flex items-center ds-gap-6", r), children: [
    /* @__PURE__ */ i(m, { iconType: s, size: n, color: o, isFill: c }),
    e && /* @__PURE__ */ i("span", { className: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-default", children: e })
  ] });
}
export {
  x as CellIcon
};
