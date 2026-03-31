"use client";
import { jsx as e, jsxs as g } from "react/jsx-runtime";
import { forwardRef as re } from "react";
import { cn as t } from "../../../utils/cn.mjs";
import { STATE_CONFIG as d, INPUT_FIELD_BASE as X, INPUT_COUNT_STYLE as Z, INPUT_WRAPPER_BASE as oe } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as H } from "../shared/InputWrapper.mjs";
import { useInputState as ie } from "../shared/useInputState.mjs";
import { ADDON_SIZE_CONFIG as te, ADDON_SECTION_BASE as J, INLINE_ADDON_STYLE as ne, ADDON_TEXT_STYLE as ce } from "../../../constants/input/variants/addon.constants.mjs";
import { parseIconTypeWithFill as O } from "../../icons/Icon/Icon.types.mjs";
import { Icon as f } from "../../icons/Icon/Icon.mjs";
const ae = re(({
  prefix: _,
  suffix: A,
  inline: E = !1,
  inputStyle: K = "default",
  size: w = "sm",
  label: D,
  required: P = !1,
  supportText: F,
  caption: C,
  error: p,
  success: m,
  leadIcon: u,
  tailIcon: h,
  width: B,
  disabled: o = !1,
  className: j,
  onClear: z,
  showCount: L = !1,
  maxLength: x,
  value: c,
  ...U
}, R) => {
  const { inputId: a, hasError: W, state: r, sizeConfig: s, styleConfig: S, iconColor: l } = ie({
    inputStyle: K,
    size: w,
    disabled: o,
    error: p,
    success: m
  }), Y = typeof c == "string" ? c.length : 0, N = te[w], y = _ !== void 0, T = A !== void 0, M = y || T, G = u && (E || !y), $ = h && (E || !T), v = z !== void 0 && c !== "" && c !== void 0, b = (i, n) => typeof i == "string" ? /* @__PURE__ */ e("span", { className: n ? ne : ce, children: i }) : i;
  if (!E && M) {
    const i = t(
      "flex items-center w-full overflow-hidden transition-colors duration-150",
      s.container,
      S.base,
      !o && S.focus,
      r === "disabled" && d.disabled.bg,
      r === "error" && "border-destructive",
      r === "success" && "border-success",
      o && "cursor-not-allowed"
    ), n = t(
      J,
      N.addOnPadding,
      N.prefixBorder
    ), q = t(
      J,
      N.addOnPadding,
      N.suffixBorder
    ), ee = t(
      "flex items-center flex-1 min-w-0",
      N.inputPadding,
      s.gap
    ), se = t(
      X,
      s.text,
      "letter-spacing-tracking-tight",
      d[r].text,
      d[r].placeholder,
      o && "cursor-not-allowed"
    );
    return /* @__PURE__ */ e(
      H,
      {
        label: D,
        inputId: a,
        required: P,
        supportText: F,
        caption: C,
        error: p,
        success: m,
        width: B,
        className: j,
        children: /* @__PURE__ */ g("div", { className: i, children: [
          y && /* @__PURE__ */ e("div", { className: n, children: b(_, !1) }),
          /* @__PURE__ */ g("div", { className: ee, children: [
            G && u && (() => {
              const { iconType: k, isFill: I } = O(u);
              return /* @__PURE__ */ e(
                f,
                {
                  iconType: k,
                  isFill: I,
                  size: s.iconSize,
                  color: l,
                  className: "flex-shrink-0"
                }
              );
            })(),
            /* @__PURE__ */ e(
              "input",
              {
                ref: R,
                id: a,
                disabled: o,
                className: se,
                value: c,
                autoComplete: "off",
                "aria-invalid": W,
                "aria-describedby": C || p || m ? `${a}-caption` : void 0,
                ...U
              }
            ),
            v && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: z,
                className: "flex-shrink-0 flex items-center justify-center hover:bg-state-ghost-hover rounded-xs transition-colors cursor-pointer",
                "aria-label": "Clear input",
                children: /* @__PURE__ */ e(
                  f,
                  {
                    iconType: ["system", "close-circle"],
                    size: s.iconSize,
                    color: l
                  }
                )
              }
            ),
            $ && !v && h && (() => {
              const { iconType: k, isFill: I } = O(h);
              return /* @__PURE__ */ e(
                f,
                {
                  iconType: k,
                  isFill: I,
                  size: s.iconSize,
                  color: l,
                  className: "flex-shrink-0"
                }
              );
            })(),
            L && x !== void 0 && /* @__PURE__ */ g("span", { className: t(Z, "flex-shrink-0"), children: [
              Y,
              "/",
              x
            ] })
          ] }),
          T && /* @__PURE__ */ e("div", { className: q, children: b(A, !1) })
        ] })
      }
    );
  }
  const Q = t(
    oe,
    s.container,
    s.padding,
    s.gap,
    S.base,
    !o && S.focus,
    r === "disabled" && d.disabled.bg,
    r === "error" && "border-destructive",
    r === "success" && "border-success",
    o && "cursor-not-allowed"
  ), V = t(
    X,
    s.text,
    "letter-spacing-tracking-tight",
    d[r].text,
    d[r].placeholder,
    o && "cursor-not-allowed"
  );
  return /* @__PURE__ */ e(
    H,
    {
      label: D,
      inputId: a,
      required: P,
      supportText: F,
      caption: C,
      error: p,
      success: m,
      width: B,
      className: j,
      children: /* @__PURE__ */ g("div", { className: Q, children: [
        y && b(_, !0),
        G && u && (() => {
          const { iconType: i, isFill: n } = O(u);
          return /* @__PURE__ */ e(
            f,
            {
              iconType: i,
              isFill: n,
              size: s.iconSize,
              color: l,
              className: "flex-shrink-0"
            }
          );
        })(),
        /* @__PURE__ */ e(
          "input",
          {
            ref: R,
            id: a,
            disabled: o,
            className: V,
            value: c,
            autoComplete: "off",
            "aria-invalid": W,
            "aria-describedby": C || p || m ? `${a}-caption` : void 0,
            ...U
          }
        ),
        v && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: z,
            className: "flex-shrink-0 flex items-center justify-center hover:bg-state-ghost-hover rounded-xs transition-colors cursor-pointer",
            "aria-label": "Clear input",
            children: /* @__PURE__ */ e(
              f,
              {
                iconType: ["system", "close-circle"],
                size: s.iconSize,
                color: l
              }
            )
          }
        ),
        $ && !v && h && (() => {
          const { iconType: i, isFill: n } = O(h);
          return /* @__PURE__ */ e(
            f,
            {
              iconType: i,
              isFill: n,
              size: s.iconSize,
              color: l,
              className: "flex-shrink-0"
            }
          );
        })(),
        L && x !== void 0 && /* @__PURE__ */ g("span", { className: t(Z, "flex-shrink-0"), children: [
          Y,
          "/",
          x
        ] }),
        T && b(A, !0)
      ] })
    }
  );
});
ae.displayName = "AddOnInput";
export {
  ae as AddOnInput
};
