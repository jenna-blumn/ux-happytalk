"use client";
import { jsx as d } from "react/jsx-runtime";
import * as m from "react";
import { RadioGroup as f, Radio as n } from "./Radio.mjs";
import { cn as v } from "../../utils/cn.mjs";
const R = m.forwardRef(
  ({ items: l, value: r, defaultValue: t, onValueChange: e, listStyle: o = "default", size: u, radioStyle: s = "with-shadow", disabled: i = !1, className: b }, c) => {
    const p = v(
      "flex flex-col",
      o === "default" && "ds-gap-24",
      b
    );
    return o === "bordered" ? /* @__PURE__ */ d(
      f,
      {
        ref: c,
        value: r,
        defaultValue: t,
        onValueChange: e,
        disabled: i,
        className: p,
        children: l.map((a) => /* @__PURE__ */ d(
          "div",
          {
            className: "w-full padding-y-12 border-b-default",
            children: /* @__PURE__ */ d(
              n,
              {
                value: a.value,
                disabled: a.disabled,
                size: u,
                radioStyle: s,
                label: a.title,
                description: a.description
              }
            )
          },
          a.value
        ))
      }
    ) : /* @__PURE__ */ d(
      f,
      {
        ref: c,
        value: r,
        onValueChange: e,
        disabled: i,
        className: p,
        children: l.map((a) => /* @__PURE__ */ d(
          n,
          {
            value: a.value,
            disabled: a.disabled,
            radioStyle: s,
            label: a.title,
            description: a.description
          },
          a.value
        ))
      }
    );
  }
);
R.displayName = "RadioList";
export {
  R as RadioList
};
