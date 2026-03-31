"use client";
import { jsx as m } from "react/jsx-runtime";
import { FormProvider as t } from "react-hook-form";
const d = ({
  form: r,
  onSubmit: o,
  children: e,
  ...i
}) => /* @__PURE__ */ m(t, { ...r, children: /* @__PURE__ */ m(
  "form",
  {
    noValidate: !0,
    onSubmit: o ? r.handleSubmit(o) : void 0,
    ...i,
    children: e
  }
) });
d.displayName = "Form";
export {
  d as Form
};
