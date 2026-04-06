"use client";
import { useContext as t } from "react";
import { useFormContext as d } from "react-hook-form";
import { FormFieldContext as s, FormItemContext as f } from "./FormContext.mjs";
const l = () => {
  const o = t(s), m = t(f), { getFieldState: r, formState: i } = d();
  if (!o)
    throw new Error("useFormField should be used within <FormField>");
  const n = r(o.name, i), e = m?.id;
  return {
    id: e,
    name: o.name,
    formItemId: e ? `${e}-form-item` : void 0,
    formDescriptionId: e ? `${e}-form-item-description` : void 0,
    formMessageId: e ? `${e}-form-item-message` : void 0,
    ...n
  };
};
export {
  l as useFormField
};
