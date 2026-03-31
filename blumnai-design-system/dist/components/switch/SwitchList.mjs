"use client";
import { jsx as d, jsxs as b } from "react/jsx-runtime";
import * as N from "react";
import { Switch as n } from "./Switch.mjs";
import { cn as m } from "../../utils/cn.mjs";
const v = N.forwardRef(
  ({ items: c, listStyle: i = "default", color: r = "green", onItemChange: o, showToggleAll: g = !1, toggleAllLabel: u = "전체 토글", onToggleAll: h, className: k }, t) => {
    const l = c.filter((e) => !e.disabled), C = l.length > 0 && l.every((e) => e.checked), f = m(
      "flex flex-col",
      i === "default" && "ds-gap-24",
      k
    ), p = (e) => (a) => {
      o?.(e, a);
    }, w = (e) => {
      h ? h(e) : l.forEach((a) => {
        a.checked !== e && o?.(a.id, e);
      });
    }, s = g ? /* @__PURE__ */ d(
      n,
      {
        checked: C,
        color: r,
        disabled: l.length === 0,
        onCheckedChange: w,
        label: u
      }
    ) : null;
    return i === "bordered" ? /* @__PURE__ */ b("div", { ref: t, role: "group", className: f, children: [
      s && /* @__PURE__ */ d("div", { className: "w-full padding-y-12 border-b-default", children: s }),
      c.map((e) => /* @__PURE__ */ d(
        "div",
        {
          className: "w-full padding-y-12 border-b-default",
          children: /* @__PURE__ */ d(
            n,
            {
              checked: e.checked,
              disabled: e.disabled,
              color: r,
              onCheckedChange: p(e.id),
              label: e.title,
              description: e.description
            }
          )
        },
        e.id
      ))
    ] }) : /* @__PURE__ */ b("div", { ref: t, role: "group", className: f, children: [
      s,
      c.map((e) => /* @__PURE__ */ d(
        n,
        {
          checked: e.checked,
          disabled: e.disabled,
          color: r,
          onCheckedChange: p(e.id),
          label: e.title,
          description: e.description
        },
        e.id
      ))
    ] });
  }
);
v.displayName = "SwitchList";
export {
  v as SwitchList
};
