"use client";
import { jsx as e, jsxs as o, Fragment as w } from "react/jsx-runtime";
import { forwardRef as Q } from "react";
import { cn as r } from "../../../utils/cn.mjs";
import { STYLE_CONFIG as q, STATE_CONFIG as E, INPUT_FIELD_BASE as ee, INPUT_COUNT_STYLE as te } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as se } from "../shared/InputWrapper.mjs";
import { useInputState as ie } from "../shared/useInputState.mjs";
import { BUTTON_SIZE_CONFIG as ne, INLINE_BUTTON_HOVER as oe, INLINE_BUTTON_TEXT as re, INLINE_BUTTON_BASE as le, DIVIDER_STYLE as U } from "../../../constants/input/variants/button.constants.mjs";
import { parseIconTypeWithFill as p } from "../../icons/Icon/Icon.types.mjs";
import { Icon as c } from "../../icons/Icon/Icon.mjs";
const ae = Q(({
  buttonLabel: d,
  buttonLeadIcon: f,
  buttonTailIcon: u,
  buttonPosition: _ = "tail",
  onButtonClick: A,
  buttonDisabled: G = !1,
  inputStyle: y = "default",
  size: B = "sm",
  label: D,
  required: S = !1,
  supportText: j,
  caption: z,
  error: N,
  success: h,
  leadIcon: T,
  tailIcon: C,
  width: L,
  disabled: i = !1,
  className: P,
  onClear: F,
  showCount: R = !1,
  maxLength: b,
  value: l,
  ...Y
}, V) => {
  const { inputId: I, hasError: W, state: a, iconColor: x } = ie({
    inputStyle: y,
    size: B,
    disabled: i,
    error: N,
    success: h
  }), H = typeof l == "string" ? l.length : 0, t = ne[B], k = q[y], X = !!T, Z = !!C, v = F !== void 0 && l !== "" && l !== void 0, n = i || G, $ = r(
    "flex items-center w-full transition-colors duration-150",
    t.container,
    k.base,
    !i && k.focus,
    a === "disabled" && E.disabled.bg,
    a === "error" && "border-destructive",
    a === "success" && "border-success",
    i && "cursor-not-allowed"
  ), J = r(
    "flex items-center flex-1 min-w-0",
    t.inputPadding,
    t.inputGap
  ), K = r(
    ee,
    "size-sm line-height-leading-5",
    "letter-spacing-tracking-tight",
    E[a].text,
    E[a].placeholder,
    i && "cursor-not-allowed"
  ), M = r(
    le,
    re,
    t.buttonPadding,
    t.buttonGap,
    n ? "text-hint cursor-not-allowed" : r("text-default", oe)
  ), O = () => d || f || u ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: n ? void 0 : A,
      disabled: n,
      className: M,
      tabIndex: n ? -1 : 0,
      "aria-label": d || "Action button",
      children: [
        f && (() => {
          const { iconType: s, isFill: g } = p(f);
          return /* @__PURE__ */ e(
            c,
            {
              iconType: s,
              isFill: g,
              size: t.iconSize,
              color: n ? "default-disabled" : "default-subtle",
              className: "flex-shrink-0"
            }
          );
        })(),
        d && /* @__PURE__ */ e("span", { children: d }),
        u && (() => {
          const { iconType: s, isFill: g } = p(u);
          return /* @__PURE__ */ e(
            c,
            {
              iconType: s,
              isFill: g,
              size: t.iconSize,
              color: n ? "default-disabled" : "default-subtle",
              className: "flex-shrink-0"
            }
          );
        })()
      ]
    }
  ) : null;
  return /* @__PURE__ */ e(
    se,
    {
      label: D,
      inputId: I,
      required: S,
      supportText: j,
      caption: z,
      error: N,
      success: h,
      width: L,
      className: P,
      children: /* @__PURE__ */ o("div", { className: $, children: [
        _ === "lead" && /* @__PURE__ */ o(w, { children: [
          O(),
          /* @__PURE__ */ e("div", { className: U })
        ] }),
        /* @__PURE__ */ o("div", { className: J, children: [
          X && T && (() => {
            const { iconType: m, isFill: s } = p(T);
            return /* @__PURE__ */ e(
              c,
              {
                iconType: m,
                isFill: s,
                size: t.iconSize,
                color: x,
                className: "flex-shrink-0"
              }
            );
          })(),
          /* @__PURE__ */ e(
            "input",
            {
              ref: V,
              id: I,
              disabled: i,
              required: S,
              className: K,
              value: l,
              autoComplete: "off",
              "aria-invalid": W,
              "aria-describedby": z || N || h ? `${I}-caption` : void 0,
              ...Y
            }
          ),
          v && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: F,
              className: "flex-shrink-0 flex items-center justify-center hover:bg-state-ghost-hover rounded-xs transition-colors cursor-pointer",
              "aria-label": "Clear input",
              children: /* @__PURE__ */ e(
                c,
                {
                  iconType: ["system", "close-circle"],
                  size: t.iconSize,
                  color: x
                }
              )
            }
          ),
          Z && !v && C && (() => {
            const { iconType: m, isFill: s } = p(C);
            return /* @__PURE__ */ e(
              c,
              {
                iconType: m,
                isFill: s,
                size: t.iconSize,
                color: x,
                className: "flex-shrink-0"
              }
            );
          })(),
          R && b !== void 0 && /* @__PURE__ */ o("span", { className: r(te, "flex-shrink-0"), children: [
            H,
            "/",
            b
          ] })
        ] }),
        _ === "tail" && /* @__PURE__ */ o(w, { children: [
          /* @__PURE__ */ e("div", { className: U }),
          O()
        ] })
      ] })
    }
  );
});
ae.displayName = "ButtonInput";
export {
  ae as ButtonInput
};
