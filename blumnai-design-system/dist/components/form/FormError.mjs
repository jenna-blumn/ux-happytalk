"use client";
import { jsx as f } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { cn as a } from "../../utils/cn.mjs";
import { ERROR_CAPTION_STYLE as l } from "../../constants/input/Input/Input.constants.mjs";
import { useFormField as p } from "./useFormField.mjs";
const d = n(
  ({ className: m, children: e, ...t }, s) => {
    const { error: r, formMessageId: i } = p(), o = r ? String(r?.message ?? "") : e;
    return o ? /* @__PURE__ */ f(
      "p",
      {
        ref: s,
        id: i,
        role: "alert",
        className: a(l, m),
        ...t,
        children: o
      }
    ) : null;
  }
);
d.displayName = "FormError";
export {
  d as FormError
};
