"use client";
import { jsx as o, jsxs as D } from "react/jsx-runtime";
import { forwardRef as Z, useCallback as _ } from "react";
import { cn as r } from "../../../utils/cn.mjs";
import { Icon as S } from "../../icons/Icon/Icon.mjs";
import { STATE_CONFIG as g, INPUT_WRAPPER_BASE as Y, INPUT_FIELD_BASE as F } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as K } from "../shared/InputWrapper.mjs";
import { useInputState as H } from "../shared/useInputState.mjs";
import { QUANTITY_INPUT_STYLE as L, QUANTITY_BUTTON_STATES as R, QUANTITY_BUTTON_SIZE as J, QUANTITY_BUTTON_BASE as X, COMPACT_BUTTON_STYLE as q } from "../../../constants/input/variants/quantity.constants.mjs";
const tt = Z(({
  value: a = 0,
  onChange: d,
  min: c = 0,
  max: n,
  step: i = 1,
  quantityVariant: j = "default",
  inputStyle: W = "default",
  size: A = "sm",
  label: E,
  required: k = !1,
  supportText: z,
  caption: b,
  error: N,
  success: y,
  width: B,
  disabled: t = !1,
  className: M,
  ...V
}, x) => {
  const { inputId: m, hasError: O, state: l, sizeConfig: f, styleConfig: I, iconColor: h } = H({
    inputStyle: W,
    size: A,
    disabled: t,
    error: N,
    success: y
  }), s = a > c, u = n === void 0 || a < n, v = _(() => {
    if (!t && u) {
      const e = a + i, p = n !== void 0 ? Math.min(e, n) : e;
      d?.(p);
    }
  }, [t, u, a, i, n, d]), C = _(() => {
    if (!t && s) {
      const e = a - i, p = Math.max(e, c);
      d?.(p);
    }
  }, [t, s, a, i, c, d]), P = _((e) => {
    const p = e.target.value;
    if (p === "") {
      d?.(c);
      return;
    }
    const w = parseFloat(p);
    if (!isNaN(w)) {
      let U = Math.max(w, c);
      n !== void 0 && (U = Math.min(U, n)), d?.(U);
    }
  }, [c, n, d]), Q = _((e) => {
    e.key === "ArrowUp" ? (e.preventDefault(), v()) : e.key === "ArrowDown" && (e.preventDefault(), C());
  }, [v, C]);
  if (j === "default") {
    const e = r(
      Y,
      f.container,
      "padding-4",
      "ds-gap-4",
      I.base,
      !t && I.focus,
      l === "disabled" && g.disabled.bg,
      l === "error" && "border-destructive",
      l === "success" && "border-success",
      t && "cursor-not-allowed"
    ), p = r(
      F,
      f.text,
      "letter-spacing-tracking-tight",
      L,
      g[l].text,
      t && "cursor-not-allowed"
    ), w = r(
      X,
      J[A],
      t ? R.disabled : R.default
    );
    return /* @__PURE__ */ o(
      K,
      {
        label: E,
        inputId: m,
        required: k,
        supportText: z,
        caption: b,
        error: N,
        success: y,
        width: B,
        className: M,
        children: /* @__PURE__ */ D("div", { className: e, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: C,
              disabled: t || !s,
              className: r(w, !s && "opacity-50"),
              "aria-label": "Decrease value",
              children: /* @__PURE__ */ o(
                S,
                {
                  iconType: ["system", "subtract"],
                  size: f.iconSize,
                  color: t || !s ? "default-disabled" : h
                }
              )
            }
          ),
          /* @__PURE__ */ o(
            "input",
            {
              ref: x,
              id: m,
              type: "text",
              role: "spinbutton",
              inputMode: i % 1 !== 0 ? "decimal" : "numeric",
              pattern: i % 1 !== 0 ? "[0-9]*[.]?[0-9]*" : "[0-9]*",
              disabled: t,
              className: p,
              value: a,
              onChange: P,
              onKeyDown: Q,
              autoComplete: "off",
              "aria-invalid": O,
              "aria-describedby": b || N || y ? `${m}-caption` : void 0,
              "aria-valuemin": c,
              "aria-valuemax": n,
              "aria-valuenow": a,
              ...V
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: v,
              disabled: t || !u,
              className: r(w, !u && "opacity-50"),
              "aria-label": "Increase value",
              children: /* @__PURE__ */ o(
                S,
                {
                  iconType: ["system", "add"],
                  size: f.iconSize,
                  color: t || !u ? "default-disabled" : h
                }
              )
            }
          )
        ] })
      }
    );
  }
  const T = q[A], $ = r(
    Y,
    f.container,
    "padding-0",
    I.base,
    !t && I.focus,
    l === "disabled" && g.disabled.bg,
    l === "error" && "border-destructive",
    l === "success" && "border-success",
    t && "cursor-not-allowed",
    "overflow-hidden"
  ), G = r(
    F,
    f.text,
    "letter-spacing-tracking-tight",
    L,
    g[l].text,
    t && "cursor-not-allowed",
    f.padding
  );
  return /* @__PURE__ */ o(
    K,
    {
      label: E,
      inputId: m,
      required: k,
      supportText: z,
      caption: b,
      error: N,
      success: y,
      width: B,
      className: M,
      children: /* @__PURE__ */ D("div", { className: $, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: x,
            id: m,
            type: "text",
            role: "spinbutton",
            inputMode: i % 1 !== 0 ? "decimal" : "numeric",
            pattern: i % 1 !== 0 ? "[0-9]*[.]?[0-9]*" : "[0-9]*",
            disabled: t,
            className: r(G, "flex-1"),
            value: a,
            onChange: P,
            onKeyDown: Q,
            autoComplete: "off",
            "aria-invalid": O,
            "aria-describedby": b || N || y ? `${m}-caption` : void 0,
            "aria-valuemin": c,
            "aria-valuemax": n,
            "aria-valuenow": a,
            ...V
          }
        ),
        /* @__PURE__ */ D("div", { className: T.container, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: v,
              disabled: t || !u,
              className: r(
                T.button,
                T.buttonTop,
                "flex-1",
                (t || !u) && "opacity-50 cursor-not-allowed"
              ),
              "aria-label": "Increase value",
              children: /* @__PURE__ */ o(
                S,
                {
                  iconType: ["arrows", "arrow-up-s"],
                  size: T.iconSize,
                  color: t || !u ? "default-disabled" : h
                }
              )
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: C,
              disabled: t || !s,
              className: r(
                T.button,
                "flex-1",
                (t || !s) && "opacity-50 cursor-not-allowed"
              ),
              "aria-label": "Decrease value",
              children: /* @__PURE__ */ o(
                S,
                {
                  iconType: ["arrows", "arrow-down-s"],
                  size: T.iconSize,
                  color: t || !s ? "default-disabled" : h
                }
              )
            }
          )
        ] })
      ] })
    }
  );
});
tt.displayName = "QuantityInput";
export {
  tt as QuantityInput
};
