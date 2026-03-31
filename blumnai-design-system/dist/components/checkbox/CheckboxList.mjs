"use client";
import { jsx as d } from "react/jsx-runtime";
import * as u from "react";
import { Checkbox as n } from "./Checkbox.mjs";
import { cn as b } from "../../utils/cn.mjs";
const t = u.forwardRef(
  ({ items: a, listStyle: l = "default", checkboxStyle: o = "with-shadow", name: r, onItemChange: h, className: p }, c) => {
    const s = b(
      "flex flex-col",
      l === "default" && "ds-gap-24",
      p
    ), i = (e) => (f) => {
      h?.(e, f !== !1);
    };
    return l === "bordered" ? /* @__PURE__ */ d("div", { ref: c, role: "group", className: s, children: a.map((e) => /* @__PURE__ */ d(
      "div",
      {
        className: "w-full padding-y-12 border-b-default",
        children: /* @__PURE__ */ d(
          n,
          {
            checked: e.checked,
            disabled: e.disabled,
            checkboxStyle: o,
            name: r,
            value: e.value,
            onCheckedChange: i(e.id),
            label: e.title,
            description: e.description
          }
        )
      },
      e.id
    )) }) : /* @__PURE__ */ d("div", { ref: c, role: "group", className: s, children: a.map((e) => /* @__PURE__ */ d(
      n,
      {
        checked: e.checked,
        disabled: e.disabled,
        checkboxStyle: o,
        name: r,
        value: e.value,
        onCheckedChange: i(e.id),
        label: e.title,
        description: e.description
      },
      e.id
    )) });
  }
);
t.displayName = "CheckboxList";
export {
  t as CheckboxList
};
