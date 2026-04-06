"use client";
import { jsxs as p, jsx as s } from "react/jsx-runtime";
import { forwardRef as Z, useState as $, useRef as J, useEffect as K, useCallback as M } from "react";
import { cn as c } from "../../../utils/cn.mjs";
import { STATE_CONFIG as h, INPUT_WRAPPER_BASE as Q, INPUT_FIELD_BASE as X, INPUT_COUNT_STYLE as q } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as ee } from "../shared/InputWrapper.mjs";
import { useInputState as te } from "../shared/useInputState.mjs";
import { parseIconTypeWithFill as re } from "../../icons/Icon/Icon.types.mjs";
import { Icon as C } from "../../icons/Icon/Icon.mjs";
import { TOGGLE_BUTTON_STYLE as se, STRENGTH_INDICATOR_CONTAINER as ie, STRENGTH_BAR_COLORS as oe, STRENGTH_BAR_INACTIVE as ne, STRENGTH_BAR_BASE as ce, STRENGTH_LABELS as ae, STRENGTH_LABEL_COLORS as le, STRENGTH_LABEL_STYLE as fe } from "../../../constants/input/variants/password.constants.mjs";
const pe = (e) => {
  if (!e || e.length === 0) return "none";
  let t = 0;
  return e.length >= 8 && (t += 1), e.length >= 12 && (t += 1), /[a-z]/.test(e) && (t += 1), /[A-Z]/.test(e) && (t += 1), /[0-9]/.test(e) && (t += 1), /[^a-zA-Z0-9]/.test(e) && (t += 1), t <= 2 ? "low" : t <= 4 ? "medium" : "high";
}, me = Z(({
  showToggle: e = !0,
  showStrength: t = !1,
  strength: B,
  onStrengthChange: m,
  autoCalculateStrength: u = !1,
  inputStyle: L = "default",
  size: G = "sm",
  label: O,
  required: _ = !1,
  supportText: w,
  caption: S,
  error: T,
  success: N,
  leadIcon: g,
  width: b,
  disabled: r = !1,
  className: v,
  showCount: x = !1,
  maxLength: R,
  value: a,
  onChange: H,
  ...P
}, z) => {
  const [d, k] = $(!1), { inputId: E, hasError: U, state: l, sizeConfig: i, styleConfig: A, iconColor: I } = te({
    inputStyle: L,
    size: G,
    disabled: r,
    error: T,
    success: N
  }), F = typeof a == "string" ? a.length : 0, f = u && typeof a == "string" ? pe(a) : "none", o = B ?? f, y = J(o);
  K(() => {
    u && m && y.current !== f && (y.current = f, m(f));
  }, [f, u, m]);
  const V = M(() => {
    k((n) => !n);
  }, []), W = (() => {
    switch (o) {
      case "low":
        return 1;
      case "medium":
        return 2;
      case "high":
        return 3;
      default:
        return 0;
    }
  })(), Y = c(
    Q,
    i.container,
    i.padding,
    i.gap,
    A.base,
    !r && A.focus,
    l === "disabled" && h.disabled.bg,
    l === "error" && "border-destructive",
    l === "success" && "border-success",
    r && "cursor-not-allowed"
  ), j = c(
    X,
    i.text,
    "letter-spacing-tracking-tight",
    h[l].text,
    h[l].placeholder,
    r && "cursor-not-allowed"
  );
  return /* @__PURE__ */ p(
    ee,
    {
      label: O,
      inputId: E,
      required: _,
      supportText: w,
      caption: S,
      error: T,
      success: N,
      width: b,
      className: v,
      children: [
        /* @__PURE__ */ p("div", { className: Y, children: [
          g && (() => {
            const { iconType: n, isFill: D } = re(g);
            return /* @__PURE__ */ s(
              C,
              {
                iconType: n,
                isFill: D,
                size: i.iconSize,
                color: I,
                className: "flex-shrink-0"
              }
            );
          })(),
          /* @__PURE__ */ s(
            "input",
            {
              ref: z,
              id: E,
              type: d ? "text" : "password",
              disabled: r,
              required: _,
              className: j,
              value: a,
              onChange: H,
              autoComplete: "current-password",
              "aria-invalid": U,
              "aria-describedby": S || T || N ? `${E}-caption` : void 0,
              ...P
            }
          ),
          e && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: V,
              disabled: r,
              className: c(se, r && "cursor-not-allowed opacity-50"),
              "aria-label": d ? "Hide password" : "Show password",
              children: /* @__PURE__ */ s(
                C,
                {
                  iconType: ["system", d ? "eye-off" : "eye"],
                  size: i.iconSize,
                  color: I
                }
              )
            }
          ),
          x && R !== void 0 && /* @__PURE__ */ p("span", { className: c(q, "flex-shrink-0"), children: [
            F,
            "/",
            R
          ] })
        ] }),
        t && /* @__PURE__ */ p("div", { className: ie, children: [
          /* @__PURE__ */ s("div", { className: "flex ds-gap-2 flex-1", children: [1, 2, 3].map((n) => /* @__PURE__ */ s(
            "div",
            {
              className: c(
                ce,
                n <= W ? oe[o] : ne
              )
            },
            n
          )) }),
          o !== "none" && /* @__PURE__ */ s("span", { className: c(fe, le[o]), children: ae[o] })
        ] })
      ]
    }
  );
});
me.displayName = "PasswordInput";
export {
  me as PasswordInput
};
