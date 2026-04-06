"use client";
import { jsx as r, jsxs as l, Fragment as Q } from "react/jsx-runtime";
import { forwardRef as Ee, useId as ve, useState as A, useRef as W, useCallback as y, useLayoutEffect as Ie, useEffect as q } from "react";
import { createPortal as ye } from "react-dom";
import { cn as i } from "../../../utils/cn.mjs";
import { STATE_CONFIG as F, INPUT_WRAPPER_BASE as Te, INPUT_FIELD_BASE as Oe, SIZE_CONFIG as z, INPUT_COUNT_STYLE as Re } from "../../../constants/input/Input/Input.constants.mjs";
import { InputWrapper as _e } from "../shared/InputWrapper.mjs";
import { useInputState as be } from "../shared/useInputState.mjs";
import { DROPDOWN_DIVIDER as V, DROPDOWN_SIZE_CONFIG as ke, DROPDOWN_TRIGGER_TEXT as xe, DROPDOWN_TRIGGER_PLACEHOLDER as Se, DROPDOWN_TRIGGER_BASE as we, DROPDOWN_OPTION_TEXT as Ce, DROPDOWN_OPTION_SELECTED as Pe, DROPDOWN_OPTION_BASE as Ae, DROPDOWN_MENU_BASE as We } from "../../../constants/input/variants/dropdown.constants.mjs";
import { parseIconTypeWithFill as T } from "../../icons/Icon/Icon.types.mjs";
import { Icon as m } from "../../icons/Icon/Icon.mjs";
const Fe = Ee(({
  dropdownOptions: n,
  dropdownPosition: E = "lead",
  dropdownValue: h,
  onDropdownChange: G,
  dropdownPlaceholder: ee = "Select",
  dropdownWidth: L,
  inputStyle: te = "default",
  size: p = "sm",
  label: re,
  required: B = !1,
  supportText: ne,
  caption: U,
  error: O,
  success: R,
  leadIcon: _,
  tailIcon: b,
  width: se,
  disabled: c = !1,
  className: ce,
  onClear: M,
  showCount: oe = !1,
  maxLength: j,
  value: D,
  ...ae
}, le) => {
  const K = ve(), [s, X] = A(!1), [o, f] = A(-1), u = W(null), H = y(() => {
    X(!0);
    const e = n?.findIndex((t) => t.value === h) ?? -1;
    f(e >= 0 ? e : 0);
  }, [n, h]), a = y(() => {
    X(!1), f(-1);
  }, []), k = W(null), Y = W([]), [x, ie] = A({ top: 0, left: 0, width: 0 }), { inputId: S, hasError: ue, state: N, sizeConfig: v, styleConfig: Z, iconColor: g } = be({
    inputStyle: te,
    size: p,
    disabled: c,
    error: O,
    success: R
  }), fe = typeof D == "string" ? D.length : 0, w = ke[p];
  Ie(() => {
    if (s && u.current) {
      const e = u.current.getBoundingClientRect();
      ie({
        top: e.bottom + window.scrollY + 4,
        left: e.left + window.scrollX,
        width: e.width
      });
    }
  }, [s]), q(() => {
    const e = (t) => {
      const d = t.target, P = u.current && !u.current.contains(d), ge = k.current && !k.current.contains(d);
      P && ge && a();
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [a]);
  const I = n?.find((e) => e.value === h), de = _ && E !== "lead", me = b && E !== "tail", $ = M !== void 0 && D !== "" && D !== void 0;
  q(() => {
    s && o >= 0 && Y.current[o]?.focus();
  }, [s, o]);
  const C = y((e) => {
    G?.(e), a(), u.current?.focus();
  }, [G, a]), he = y((e) => {
    if (n)
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault(), f((t) => t < n.length - 1 ? t + 1 : 0);
          break;
        }
        case "ArrowUp": {
          e.preventDefault(), f((t) => t > 0 ? t - 1 : n.length - 1);
          break;
        }
        case "Home": {
          e.preventDefault(), f(0);
          break;
        }
        case "End": {
          e.preventDefault(), f(n.length - 1);
          break;
        }
        case "Enter":
        case " ": {
          e.preventDefault(), o >= 0 && o < n.length && C(n[o].value);
          break;
        }
        case "Escape": {
          e.preventDefault(), a(), u.current?.focus();
          break;
        }
      }
  }, [n, o, C, a]), pe = i(
    Te,
    v.container,
    "padding-0",
    // We'll handle padding in sub-elements
    v.gap,
    Z.base,
    !c && Z.focus,
    N === "disabled" && F.disabled.bg,
    N === "error" && "border-destructive",
    N === "success" && "border-success",
    c && "cursor-not-allowed"
  ), De = i(
    Oe,
    v.text,
    "letter-spacing-tracking-tight",
    F[N].text,
    F[N].placeholder,
    c && "cursor-not-allowed"
  ), Ne = () => !s || c || !n ? null : ye(
    /* @__PURE__ */ r(
      "div",
      {
        ref: k,
        className: i(
          We,
          "fixed"
        ),
        style: {
          top: x.top,
          left: x.left,
          minWidth: x.width
        },
        role: "listbox",
        "aria-labelledby": K,
        onKeyDown: he,
        children: n.map((e, t) => /* @__PURE__ */ l(
          "div",
          {
            ref: (d) => {
              Y.current[t] = d;
            },
            role: "option",
            tabIndex: -1,
            "aria-selected": e.value === h,
            className: i(
              Ae,
              e.value === h && Pe,
              o === t && "bg-state-ghost-hover"
            ),
            onClick: () => C(e.value),
            children: [
              e.icon && (() => {
                const { iconType: d, isFill: P } = T(e.icon);
                return /* @__PURE__ */ r(
                  m,
                  {
                    iconType: d,
                    isFill: P,
                    size: w.iconSize,
                    color: "default-subtle"
                  }
                );
              })(),
              /* @__PURE__ */ r("span", { className: Ce, children: e.label })
            ]
          },
          e.value
        ))
      }
    ),
    document.body
  ), J = () => /* @__PURE__ */ l("div", { className: "relative", children: [
    /* @__PURE__ */ l(
      "button",
      {
        ref: u,
        type: "button",
        id: K,
        disabled: c,
        onClick: () => !c && (s ? a() : H()),
        onKeyDown: (e) => {
          (e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), s || H()), e.key === "Escape" && s && (e.preventDefault(), a());
        },
        className: i(
          we,
          w.triggerPadding,
          c && "cursor-not-allowed opacity-50"
        ),
        style: L ? { width: L } : void 0,
        "aria-haspopup": "listbox",
        "aria-expanded": s,
        children: [
          I?.icon && (() => {
            const { iconType: e, isFill: t } = T(I.icon);
            return /* @__PURE__ */ r(
              m,
              {
                iconType: e,
                isFill: t,
                size: w.iconSize,
                color: g
              }
            );
          })(),
          /* @__PURE__ */ r("span", { className: I ? xe : Se, children: I?.label || ee }),
          /* @__PURE__ */ r(
            m,
            {
              iconType: ["arrows", "arrow-down-s"],
              size: 12,
              color: g,
              className: i("transition-transform", s && "rotate-180")
            }
          )
        ]
      }
    ),
    Ne()
  ] });
  return /* @__PURE__ */ r(
    _e,
    {
      label: re,
      inputId: S,
      required: B,
      supportText: ne,
      caption: U,
      error: O,
      success: R,
      width: se,
      className: ce,
      children: /* @__PURE__ */ l("div", { className: pe, children: [
        E === "lead" && /* @__PURE__ */ l(Q, { children: [
          J(),
          /* @__PURE__ */ r("div", { className: V })
        ] }),
        de && _ && /* @__PURE__ */ r("div", { className: "padding-l-8", children: (() => {
          const { iconType: e, isFill: t } = T(_);
          return /* @__PURE__ */ r(
            m,
            {
              iconType: e,
              isFill: t,
              size: z[p].iconSize,
              color: g,
              className: "flex-shrink-0"
            }
          );
        })() }),
        /* @__PURE__ */ l("div", { className: i("flex-1 flex items-center ds-gap-6", v.padding), children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: le,
              id: S,
              disabled: c,
              required: B,
              className: De,
              value: D,
              autoComplete: "off",
              "aria-invalid": ue,
              "aria-describedby": U || O || R ? `${S}-caption` : void 0,
              ...ae
            }
          ),
          $ && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: M,
              className: "flex-shrink-0 flex items-center justify-center hover:bg-state-ghost-hover rounded-xs transition-colors",
              "aria-label": "Clear input",
              children: /* @__PURE__ */ r(
                m,
                {
                  iconType: ["system", "close-circle"],
                  size: z[p].iconSize,
                  color: g
                }
              )
            }
          ),
          me && !$ && b && (() => {
            const { iconType: e, isFill: t } = T(b);
            return /* @__PURE__ */ r(
              m,
              {
                iconType: e,
                isFill: t,
                size: z[p].iconSize,
                color: g,
                className: "flex-shrink-0"
              }
            );
          })(),
          oe && j !== void 0 && /* @__PURE__ */ l("span", { className: i(Re, "flex-shrink-0"), children: [
            fe,
            "/",
            j
          ] })
        ] }),
        E === "tail" && /* @__PURE__ */ l(Q, { children: [
          /* @__PURE__ */ r("div", { className: V }),
          J()
        ] })
      ] })
    }
  );
});
Fe.displayName = "DropdownInput";
export {
  Fe as DropdownInput
};
