"use client";
import { jsx as i, jsxs as R } from "react/jsx-runtime";
import { forwardRef as M, useRef as Q, useCallback as w } from "react";
import { useKeyboardShortcut as V } from "../../../hooks/use-keyboard-shortcut.mjs";
import { cn as C } from "../../../utils/cn.mjs";
import { STATE_CONFIG as X, INPUT_WRAPPER_BASE as Z, INPUT_FIELD_BASE as q, SHORTCUT_STYLE as D, INPUT_COUNT_STYLE as ee } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as te } from "../shared/InputWrapper.mjs";
import { useInputState as ie } from "../shared/useInputState.mjs";
import { parseIconTypeWithFill as F } from "../../icons/Icon/Icon.types.mjs";
import { Icon as I } from "../../icons/Icon/Icon.mjs";
const ne = M(({
  inputStyle: W = "default",
  size: K = "sm",
  label: L,
  required: v = !1,
  supportText: U,
  caption: x,
  error: l,
  success: p,
  leadIcon: f,
  tailIcon: d,
  shortcut: o,
  width: A,
  disabled: n = !1,
  className: B,
  onClear: S,
  onCmdEnter: m,
  showCount: P = !1,
  maxLength: b,
  value: s,
  onKeyDown: k,
  ...j
}, r) => {
  const u = Q(null), O = w(
    (e) => {
      u.current = e, typeof r == "function" ? r(e) : r && (r.current = e);
    },
    [r]
  );
  V(
    o,
    () => {
      document.activeElement !== u.current && u.current?.focus();
    },
    { enabled: !n, ignoreInputFields: !1 }
  );
  const { inputId: h, hasError: Y, state: g, sizeConfig: t, styleConfig: E, stateConfig: _, iconColor: y } = ie({
    inputStyle: W,
    size: K,
    disabled: n,
    error: l,
    success: p
  }), G = typeof s == "string" ? s.length : 0, H = w((e) => {
    m && e.key === "Enter" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), m()), k?.(e);
  }, [m, k]), a = S !== void 0 && s !== "" && s !== void 0, N = f !== void 0, z = d !== void 0 || o !== void 0 || a;
  let c = t.padding;
  N && z ? c = t.paddingWithBothIcons : N ? c = t.paddingWithLeadIcon : z && (c = t.paddingWithTailIcon);
  const $ = C(
    Z,
    t.container,
    c,
    t.gap,
    E.base,
    !n && E.focus,
    g === "disabled" && X.disabled.bg,
    g === "error" && "border-destructive",
    g === "success" && "border-success",
    n && "cursor-not-allowed"
  ), J = C(
    q,
    t.text,
    "letter-spacing-tracking-tight",
    _.text,
    _.placeholder,
    n && "cursor-not-allowed"
  );
  return /* @__PURE__ */ i(
    te,
    {
      label: L,
      inputId: h,
      required: v,
      supportText: U,
      caption: x,
      error: l,
      success: p,
      width: A,
      className: B,
      children: /* @__PURE__ */ R("div", { className: $, children: [
        N && f && (() => {
          const { iconType: e, isFill: T } = F(f);
          return /* @__PURE__ */ i(
            I,
            {
              iconType: e,
              isFill: T,
              size: t.iconSize,
              color: y,
              className: "flex-shrink-0"
            }
          );
        })(),
        /* @__PURE__ */ i(
          "input",
          {
            ref: O,
            id: h,
            disabled: n,
            required: v,
            className: J,
            value: s,
            autoComplete: "off",
            "aria-invalid": Y,
            "aria-describedby": x || l || p ? `${h}-caption` : void 0,
            onKeyDown: H,
            ...j
          }
        ),
        a && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: S,
            className: "flex-shrink-0 flex items-center justify-center hover:bg-state-ghost-hover rounded-xs transition-colors",
            "aria-label": "Clear input",
            children: /* @__PURE__ */ i(
              I,
              {
                iconType: ["system", "close-circle"],
                size: t.iconSize,
                color: y
              }
            )
          }
        ),
        o && !a && /* @__PURE__ */ i("div", { className: D.container, children: /* @__PURE__ */ i("span", { className: D.text, children: o }) }),
        d && !o && !a && (() => {
          const { iconType: e, isFill: T } = F(d);
          return /* @__PURE__ */ i(
            I,
            {
              iconType: e,
              isFill: T,
              size: t.iconSize,
              color: y,
              className: "flex-shrink-0"
            }
          );
        })(),
        P && b !== void 0 && /* @__PURE__ */ R("span", { className: C(ee, "flex-shrink-0"), children: [
          G,
          "/",
          b
        ] })
      ] })
    }
  );
});
ne.displayName = "DefaultInput";
export {
  ne as DefaultInput
};
