"use client";
import { jsx as a } from "react/jsx-runtime";
import { toast as r } from "sonner";
import { ToastContent as c } from "./ToastContent.mjs";
const m = {
  default: 4e3,
  info: 4e3,
  success: 3e3,
  warning: 6e3,
  error: 8e3
}, e = (s, o, t) => {
  const i = t?.duration ?? m[s];
  return r.custom(
    (n) => /* @__PURE__ */ a(
      c,
      {
        variant: s,
        message: o,
        label: t?.label,
        toastId: n,
        action: t?.action
      }
    ),
    {
      duration: i,
      onDismiss: t?.onDismiss ? () => t.onDismiss?.() : void 0,
      onAutoClose: t?.onAutoClose ? () => t.onAutoClose?.() : void 0
    }
  );
}, f = {
  default: (s, o) => e("default", s, o),
  info: (s, o) => e("info", s, o),
  success: (s, o) => e("success", s, o),
  warning: (s, o) => e("warning", s, o),
  error: (s, o) => e("error", s, o),
  dismiss: r.dismiss,
  dismissAll: () => r.dismiss()
};
export {
  f as toast
};
