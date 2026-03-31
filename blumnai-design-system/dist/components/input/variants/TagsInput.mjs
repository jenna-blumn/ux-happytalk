"use client";
import { jsxs as G, jsx as o } from "react/jsx-runtime";
import { forwardRef as re, useState as ne, useCallback as v } from "react";
import { cn as T } from "../../../utils/cn.mjs";
import { STATE_CONFIG as w, INPUT_WRAPPER_BASE as oe, INPUT_FIELD_BASE as ae } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as se } from "../shared/InputWrapper.mjs";
import { useInputState as ce } from "../shared/useInputState.mjs";
import { parseIconTypeWithFill as le } from "../../icons/Icon/Icon.types.mjs";
import { Icon as z } from "../../icons/Icon/Icon.mjs";
import { INLINE_TAGS_CONTAINER as ie, TAGS_CONTAINER as ue, TAG_SIZE_CONFIG as pe, TAG_TEXT_STYLE as me, TAG_CLOSE_BUTTON as fe, TAG_VARIANT_STYLES as de, TAG_BASE as Te } from "../../../constants/input/variants/tags.constants.mjs";
const he = ({ label: e, onRemove: s, disabled: i, size: h, variant: a, removable: N = !0 }) => {
  const c = pe[h], E = de[a];
  return /* @__PURE__ */ G(
    "span",
    {
      className: T(
        Te,
        c.container,
        i ? E.disabled : E.default
      ),
      children: [
        /* @__PURE__ */ o("span", { className: T(me, c.text), children: e }),
        !i && N && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: s,
            className: T(fe, c.closeButton),
            "aria-label": `Remove ${e}`,
            children: /* @__PURE__ */ o(
              z,
              {
                iconType: ["system", "close"],
                size: c.iconSize,
                color: "default-subtle"
              }
            )
          }
        )
      ]
    }
  );
}, Ne = re(({
  tags: e = [],
  onTagsChange: s,
  onTagAdd: i,
  onTagRemove: h,
  inline: a = !0,
  maxTags: N,
  value: c,
  onInputChange: E,
  delimiters: I = [",", "Enter"],
  allowDuplicates: k = !1,
  removable: F = !0,
  inputStyle: L = "default",
  size: x = "sm",
  label: P,
  required: $ = !1,
  supportText: D,
  caption: R,
  error: y,
  success: C,
  leadIcon: V,
  width: U,
  disabled: l = !1,
  className: W,
  placeholder: j,
  ...K
}, Y) => {
  const [M, X] = ne(""), { inputId: g, hasError: Z, state: u, sizeConfig: p, styleConfig: B, iconColor: q } = ce({
    inputStyle: L,
    size: x,
    disabled: l,
    error: y,
    success: C
  }), _ = c ?? M, m = E ?? X, S = !N || e.length < N, A = v((r) => {
    const t = r.trim();
    if (!t || !S || !k && e.includes(t)) return;
    const n = [...e, t];
    s?.(n), i?.(t), m("");
  }, [e, S, k, s, i, m]), b = v((r) => {
    const t = e[r];
    if (t === void 0) return;
    const n = e.filter((f, d) => d !== r);
    s?.(n), h?.(t);
  }, [e, s, h]), H = v((r) => {
    if (r.key === "Enter" && I.includes("Enter")) {
      r.preventDefault(), A(_);
      return;
    }
    if (r.key === "Backspace" && _ === "" && e.length > 0) {
      b(e.length - 1);
      return;
    }
  }, [I, _, e, A, b]), J = v((r) => {
    const t = r.target.value, n = I.filter((f) => f !== "Enter");
    for (const f of n)
      if (t.includes(f)) {
        const d = t.split(f);
        d.slice(0, -1).forEach((te) => A(te)), m(d[d.length - 1]);
        return;
      }
    m(t);
  }, [I, A, m]), O = (r) => e.map((t, n) => /* @__PURE__ */ o(
    he,
    {
      label: t,
      onRemove: () => b(n),
      disabled: l,
      size: x,
      variant: r,
      removable: F
    },
    `${t}-${n}`
  )), Q = T(
    oe,
    a ? "min-height-32" : p.container,
    p.padding,
    p.gap,
    B.base,
    !l && B.focus,
    u === "disabled" && w.disabled.bg,
    u === "error" && "border-destructive",
    u === "success" && "border-success",
    l && "cursor-not-allowed",
    a && "flex-wrap"
  ), ee = T(
    ae,
    p.text,
    "letter-spacing-tracking-tight",
    w[u].text,
    w[u].placeholder,
    l && "cursor-not-allowed",
    a && "min-w-0"
  );
  return /* @__PURE__ */ G(
    se,
    {
      label: P,
      inputId: g,
      required: $,
      supportText: D,
      caption: R,
      error: y,
      success: C,
      width: U,
      className: W,
      children: [
        /* @__PURE__ */ G("div", { className: Q, children: [
          V && (() => {
            const { iconType: r, isFill: t } = le(V);
            return /* @__PURE__ */ o(
              z,
              {
                iconType: r,
                isFill: t,
                size: p.iconSize,
                color: q,
                className: "flex-shrink-0"
              }
            );
          })(),
          a && e.length > 0 && /* @__PURE__ */ o("div", { className: ie, children: O("inline") }),
          /* @__PURE__ */ o(
            "input",
            {
              ref: Y,
              id: g,
              type: "text",
              disabled: l || !S,
              className: ee,
              value: _,
              onChange: J,
              onKeyDown: H,
              placeholder: S ? j : "Max tags reached",
              autoComplete: "off",
              "aria-invalid": Z,
              "aria-describedby": R || y || C ? `${g}-caption` : void 0,
              ...K
            }
          )
        ] }),
        !a && e.length > 0 && /* @__PURE__ */ o("div", { className: ue, children: O("stacked") })
      ]
    }
  );
});
Ne.displayName = "TagsInput";
export {
  Ne as TagsInput
};
