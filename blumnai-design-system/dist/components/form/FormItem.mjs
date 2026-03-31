"use client";
import { jsx as r } from "react/jsx-runtime";
import { forwardRef as d, useId as f } from "react";
import { cn as s } from "../../utils/cn.mjs";
import { FormItemContext as a } from "./FormContext.mjs";
const l = d(
  ({ className: o, children: m, ...e }, t) => {
    const i = f();
    return /* @__PURE__ */ r(a.Provider, { value: { id: i }, children: /* @__PURE__ */ r("div", { ref: t, className: s("flex flex-col ds-gap-6", o), ...e, children: m }) });
  }
);
l.displayName = "FormItem";
export {
  l as FormItem
};
