"use client";
import { jsx as p, Fragment as f } from "react/jsx-runtime";
import { isValidElement as u, cloneElement as a } from "react";
import { useFormField as c } from "./useFormField.mjs";
const d = ["Input", "Textarea", "Select", "Combobox"], l = (o) => {
  const r = o.type;
  if (typeof r == "string")
    return r;
  if (typeof r == "object" && r !== null) {
    const e = r;
    return e.displayName || e.type?.displayName || e.type?.name || "";
  }
  return typeof r == "function" && (r.displayName || r.name) || "";
}, y = (o) => {
  const r = l(o);
  return d.some((e) => r?.includes(e));
}, N = ({ children: o }) => {
  const { error: r, formItemId: e, formDescriptionId: s, formMessageId: i } = c();
  if (!u(o))
    return /* @__PURE__ */ p(f, { children: o });
  const t = !!r, m = r?.message, n = {
    id: e,
    "aria-invalid": t || void 0,
    "aria-describedby": t ? `${s} ${i}` : s || void 0
  };
  return y(o) ? a(o, {
    ...n,
    error: m || (t ? !0 : void 0)
  }) : a(o, n);
};
N.displayName = "FormControl";
export {
  N as FormControl
};
