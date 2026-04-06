"use client";
import { jsxs as s, jsx as a } from "react/jsx-runtime";
import { cn as c } from "../../../utils/cn.mjs";
const i = {
  default: "bg-state-primary",
  success: "bg-basic-green-accent",
  warning: "bg-basic-orange-accent",
  destructive: "bg-basic-red-accent"
};
function u({
  value: t,
  max: r = 100,
  showLabel: l = !0,
  color: n = "default"
}) {
  const e = Math.min(100, Math.max(0, t / r * 100));
  return /* @__PURE__ */ s("div", { className: "flex items-center ds-gap-8 w-full", children: [
    /* @__PURE__ */ a("div", { className: "flex-1 height-8 bg-basic-gray-alpha-10 rounded-full overflow-hidden", children: /* @__PURE__ */ a(
      "div",
      {
        className: c("h-full rounded-full transition-all", i[n]),
        style: { width: `${e}%` }
      }
    ) }),
    l && /* @__PURE__ */ s("span", { className: "font-body size-xs text-subtle shrink-0", children: [
      Math.round(e),
      "%"
    ] })
  ] });
}
export {
  u as CellProgress
};
