"use client";
import { jsx as p } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import { cn as s } from "../../utils/cn.mjs";
import { CAPTION_STYLE as f } from "../../constants/input/Input/Input.constants.mjs";
import { useFormField as c } from "./useFormField.mjs";
const n = e(
  ({ className: r, children: o, ...m }, i) => {
    const { formDescriptionId: t } = c();
    return /* @__PURE__ */ p(
      "p",
      {
        ref: i,
        id: t,
        className: s(f, r),
        ...m,
        children: o
      }
    );
  }
);
n.displayName = "FormDescription";
export {
  n as FormDescription
};
