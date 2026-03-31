"use client";
import { jsx as t, jsxs as p } from "react/jsx-runtime";
import * as a from "react";
import { OTPInput as f, OTPInputContext as h } from "input-otp";
import { cn as d } from "../../utils/cn.mjs";
import { Icon as x } from "../icons/Icon/Icon.mjs";
const u = a.createContext(!1), g = a.forwardRef(({ containerClassName: s, className: n, error: e, label: o, "aria-label": l, ...r }, c) => {
  const i = e === !0 || typeof e == "string" && e.length > 0;
  return /* @__PURE__ */ t(u.Provider, { value: i, children: /* @__PURE__ */ p("div", { className: "flex flex-col ds-gap-4", children: [
    o && /* @__PURE__ */ t("span", { className: "font-body size-sm line-height-leading-5 font-medium text-default", children: o }),
    /* @__PURE__ */ t(
      f,
      {
        ref: c,
        containerClassName: d(
          "flex items-center ds-gap-8 has-[:disabled]:opacity-50",
          s
        ),
        className: d("disabled:cursor-not-allowed", n),
        ...r,
        "aria-label": l ?? o ?? "One-time password",
        "aria-invalid": i || void 0
      }
    ),
    typeof e == "string" && e.length > 0 && /* @__PURE__ */ t("span", { className: "font-body size-xs line-height-leading-4 text-destructive", children: e })
  ] }) });
});
g.displayName = "InputOTP";
const v = a.forwardRef(({ className: s, ...n }, e) => /* @__PURE__ */ t("div", { ref: e, className: d("flex items-center", s), ...n }));
v.displayName = "InputOTPGroup";
const y = a.forwardRef(({ index: s, className: n, ...e }, o) => {
  const l = a.useContext(h), r = a.useContext(u), { char: c, hasFakeCaret: i, isActive: m } = l.slots[s];
  return /* @__PURE__ */ p(
    "div",
    {
      ref: o,
      className: d(
        "relative flex height-40 width-40 items-center justify-center",
        "border-y border-r size-md font-body font-medium line-height-leading-5",
        "shadow-sm transition-all",
        "first:rounded-l-md first:border-l last:rounded-r-md",
        r ? "border-destructive" : "border-default",
        m && !r && "z-10 shadow-component-input-focus",
        m && r && "z-10 shadow-component-input-focus-error",
        n
      ),
      ...e,
      children: [
        c,
        i && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("div", { className: "height-20 w-px animate-caret-blink bg-default duration-1000" }) })
      ]
    }
  );
});
y.displayName = "InputOTPSlot";
const b = a.forwardRef(({ ...s }, n) => /* @__PURE__ */ t("div", { ref: n, role: "separator", ...s, children: /* @__PURE__ */ t(x, { iconType: ["system", "subtract"], size: 16, color: "muted" }) }));
b.displayName = "InputOTPSeparator";
export {
  g as InputOTP,
  v as InputOTPGroup,
  b as InputOTPSeparator,
  y as InputOTPSlot
};
