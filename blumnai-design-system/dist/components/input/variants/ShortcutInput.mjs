"use client";
import { jsx as n, jsxs as C } from "react/jsx-runtime";
import { forwardRef as z, useRef as B, useCallback as O } from "react";
import { useKeyboardShortcut as j } from "../../../hooks/use-keyboard-shortcut.mjs";
import { cn as f } from "../../../utils/cn.mjs";
import { STATE_CONFIG as Y, INPUT_WRAPPER_BASE as D, INPUT_FIELD_BASE as G, SHORTCUT_STYLE as S, INPUT_COUNT_STYLE as H } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as K } from "../shared/InputWrapper.mjs";
import { useInputState as $ } from "../shared/useInputState.mjs";
import { parseIconTypeWithFill as q } from "../../icons/Icon/Icon.types.mjs";
import { Icon as J } from "../../icons/Icon/Icon.mjs";
const M = z(({
  inputStyle: v = "default",
  size: E = "sm",
  label: y,
  required: _ = !1,
  supportText: x,
  caption: m,
  error: i,
  success: s,
  leadIcon: a,
  shortcut: d,
  width: R,
  disabled: e = !1,
  className: b,
  showCount: F = !1,
  maxLength: h,
  ...c
}, r) => {
  const l = B(null), P = O(
    (o) => {
      l.current = o, typeof r == "function" ? r(o) : r && (r.current = o);
    },
    [r]
  );
  j(
    d,
    () => {
      document.activeElement !== l.current && l.current?.focus();
    },
    { enabled: !e, ignoreInputFields: !1 }
  );
  const { inputId: p, hasError: U, state: u, sizeConfig: t, styleConfig: g, stateConfig: I, iconColor: W } = $({
    inputStyle: v,
    size: E,
    disabled: e,
    error: i,
    success: s
  }), k = typeof c.value == "string" ? c.value.length : 0, N = a !== void 0;
  let T = t.paddingWithTailIcon;
  N && (T = t.paddingWithBothIcons);
  const w = f(
    D,
    t.container,
    T,
    t.gap,
    g.base,
    !e && g.focus,
    u === "disabled" && Y.disabled.bg,
    u === "error" && "border-destructive",
    u === "success" && "border-success",
    e && "cursor-not-allowed"
  ), A = f(
    G,
    t.text,
    "letter-spacing-tracking-tight",
    I.text,
    I.placeholder,
    e && "cursor-not-allowed"
  );
  return /* @__PURE__ */ n(
    K,
    {
      label: y,
      inputId: p,
      required: _,
      supportText: x,
      caption: m,
      error: i,
      success: s,
      width: R,
      className: b,
      children: /* @__PURE__ */ C("div", { className: w, children: [
        N && a && (() => {
          const { iconType: o, isFill: L } = q(a);
          return /* @__PURE__ */ n(
            J,
            {
              iconType: o,
              isFill: L,
              size: t.iconSize,
              color: W,
              className: "flex-shrink-0"
            }
          );
        })(),
        /* @__PURE__ */ n(
          "input",
          {
            ref: P,
            id: p,
            disabled: e,
            className: A,
            autoComplete: "off",
            "aria-invalid": U,
            "aria-describedby": m || i || s ? `${p}-caption` : void 0,
            ...c
          }
        ),
        /* @__PURE__ */ n("div", { className: S.container, children: /* @__PURE__ */ n("span", { className: S.text, children: d }) }),
        F && h !== void 0 && /* @__PURE__ */ C("span", { className: f(H, "flex-shrink-0"), children: [
          k,
          "/",
          h
        ] })
      ] })
    }
  );
});
M.displayName = "ShortcutInput";
export {
  M as ShortcutInput
};
