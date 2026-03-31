"use client";
import { jsx as o } from "react/jsx-runtime";
import { Controller as e } from "react-hook-form";
import { FormFieldContext as m } from "./FormContext.mjs";
const i = ({
  ...r
}) => /* @__PURE__ */ o(m.Provider, { value: { name: r.name }, children: /* @__PURE__ */ o(e, { ...r }) });
i.displayName = "FormField";
export {
  i as FormField
};
