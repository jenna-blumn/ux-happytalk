"use client";
import { jsx as o, jsxs as d } from "react/jsx-runtime";
import { forwardRef as Re, useId as Ie, useRef as H, useCallback as h, useEffect as L } from "react";
import * as z from "@radix-ui/react-scroll-area";
import { cn as f } from "../../utils/cn.mjs";
import { InputWrapper as ke } from "../input/shared/InputWrapper.mjs";
import { ScrollBar as He } from "../scroll-area/ScrollArea.mjs";
import { STYLE_CONFIG as Le, SIZE_CONFIG as ze, STATE_CONFIG as se, TEXTAREA_BASE as Fe, RESIZE_CONFIG as Ue, TOOLBAR_CONTAINER as We, TOOLBAR_ACTIONS_CONTAINER as ae, TOOLBAR_BUTTON_ICON_ONLY as F, TOOLBAR_BUTTON_BASE as U, TOOLBAR_CHIP_BASE as Ke, TOOLBAR_SUBMIT_BUTTON_DISABLED as Pe, TOOLBAR_SUBMIT_BUTTON as $e, COUNT_STYLE as je } from "./Textarea.constants.mjs";
import { Icon as v } from "../icons/Icon/Icon.mjs";
import { parseIconTypeWithFill as ce } from "../icons/Icon/Icon.types.mjs";
const Ge = Re(({
  textareaStyle: de = "default",
  size: W = "sm",
  label: fe,
  required: K = !1,
  supportText: pe,
  caption: P,
  error: m,
  success: g,
  width: ue,
  minRows: $ = 3,
  maxRows: A,
  showCount: he = !1,
  resize: me = "vertical",
  showToolbar: j = !1,
  toolbarActions: G,
  onAttach: B,
  onSubmit: p,
  submitDisabled: y = !1,
  onVoiceInput: E,
  toolbarTrailing: Y,
  disabled: l = !1,
  className: ge,
  maxLength: S,
  value: C,
  defaultValue: _,
  onInput: D,
  onKeyUp: M,
  onKeyDown: Z,
  readOnly: N,
  fieldSizing: ye = "fixed",
  autoResize: Te = !1,
  ...ve
}, u) => {
  const R = Ie(), w = H(null), X = H(null), T = H(0), Ce = h((e) => {
    w.current = e, typeof u == "function" ? u(e) : u && (u.current = e);
  }, [u]), q = m === !0 || typeof m == "string" && m.length > 0, Ne = g === !0 || typeof g == "string" && g.length > 0, b = l ? "disabled" : q ? "error" : Ne ? "success" : "default", J = ze[W], Q = Le[de], V = se[b], ee = 20, te = W === "sm" ? 20 : 24, re = j ? 36 : 0, we = $ * ee + te + re, I = A ? A * ee + te + re : void 0, be = typeof C == "string" ? C.length : typeof _ == "string" ? _.length : 0, a = j || B || p || E || G?.length || Y, n = !!A && !a, i = Te && !a, c = h(() => {
    const e = w.current;
    e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
  }, []), x = h(() => {
    T.current && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
      const e = w.current, s = X.current;
      if (!e || !s) return;
      const t = document.createElement("div"), r = window.getComputedStyle(e);
      t.style.position = "absolute", t.style.visibility = "hidden", t.style.whiteSpace = "pre-wrap", t.style.wordWrap = "break-word", t.style.overflow = "hidden", t.style.width = r.width, t.style.fontFamily = r.fontFamily, t.style.fontSize = r.fontSize, t.style.fontWeight = r.fontWeight, t.style.lineHeight = r.lineHeight, t.style.letterSpacing = r.letterSpacing, t.style.paddingTop = r.paddingTop, t.style.paddingRight = r.paddingRight, t.style.paddingBottom = r.paddingBottom, t.style.paddingLeft = r.paddingLeft, t.style.borderWidth = r.borderWidth, t.style.boxSizing = r.boxSizing;
      const _e = e.value.substring(0, e.selectionEnd ?? e.value.length);
      t.textContent = _e;
      const O = document.createElement("span");
      O.textContent = "​", t.appendChild(O), document.body.appendChild(t);
      const k = O.offsetTop, ne = k + O.offsetHeight;
      document.body.removeChild(t);
      const le = s.scrollTop, ie = s.clientHeight;
      k < le ? s.scrollTop = k : ne > le + ie && (s.scrollTop = ne - ie);
    });
  }, []), xe = h((e) => {
    n ? (c(), x()) : i && c(), D?.(e);
  }, [n, i, c, x, D]), Oe = h((e) => {
    Z?.(e), !e.defaultPrevented && p && !y && (e.metaKey || e.ctrlKey) && e.key === "Enter" && (e.preventDefault(), p());
  }, [p, y, Z]), Ae = h((e) => {
    n && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(e.key) && x(), M?.(e);
  }, [n, x, M]);
  L(() => {
    (n || i) && c();
  }, [n, i, C, c]), L(() => () => {
    T.current && cancelAnimationFrame(T.current);
  }, []), L(() => {
    if (!n && !i) return;
    const e = w.current;
    if (!e) return;
    const s = new ResizeObserver(() => {
      c();
    });
    return s.observe(e), () => s.disconnect();
  }, [n, i, c]);
  const Be = f(
    "flex flex-col w-full transition-colors duration-150",
    J.padding,
    Q.base,
    !l && !N && Q.focus,
    b === "disabled" && se.disabled.bg,
    b === "error" && "border-destructive",
    b === "success" && "border-success",
    l && "cursor-not-allowed",
    N && "bg-muted cursor-default"
  ), Ee = f(
    Fe,
    "scrollbar-thin",
    J.text,
    "letter-spacing-tracking-tight",
    V.text,
    V.placeholder,
    "placeholder:transition-opacity placeholder:duration-150",
    "focus:placeholder:opacity-50",
    a || n || i ? "resize-none" : Ue[me],
    l && "cursor-not-allowed",
    N && "cursor-default"
  ), Se = () => a ? /* @__PURE__ */ d("div", { className: We, children: [
    /* @__PURE__ */ d("div", { className: ae, children: [
      B && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: B,
          disabled: l,
          className: f(U, F),
          "aria-label": "Attach file",
          children: /* @__PURE__ */ o(v, { iconType: ["system", "add"], size: 16, color: "default-muted" })
        }
      ),
      G?.map((e) => {
        if (!(e.label && e.label.length > 0) && e.icon) {
          const { iconType: t, isFill: r } = ce(e.icon);
          return /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: e.onClick,
              disabled: l || e.disabled,
              className: f(U, F),
              "aria-label": e.label || e.key,
              children: /* @__PURE__ */ o(v, { iconType: t, isFill: r, size: 16, color: "default-muted" })
            },
            e.key
          );
        }
        return /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            onClick: e.onClick,
            disabled: l || e.disabled,
            className: Ke,
            children: [
              e.icon && (() => {
                const { iconType: t, isFill: r } = ce(e.icon);
                return /* @__PURE__ */ o(v, { iconType: t, isFill: r, size: 16, color: "default-muted" });
              })(),
              e.label && /* @__PURE__ */ o("span", { children: e.label })
            ]
          },
          e.key
        );
      })
    ] }),
    /* @__PURE__ */ d("div", { className: ae, children: [
      Y,
      E && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: E,
          disabled: l,
          className: f(U, F),
          "aria-label": "Voice input",
          children: /* @__PURE__ */ o(v, { iconType: ["media", "mic"], size: 16, color: "default-muted" })
        }
      ),
      p && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: p,
          disabled: l || y,
          className: l || y ? Pe : $e,
          "aria-label": "Submit",
          children: /* @__PURE__ */ o(
            v,
            {
              iconType: ["arrows", "arrow-up"],
              size: 16,
              color: l || y ? "default-muted" : "white"
            }
          )
        }
      )
    ] })
  ] }) : null, oe = /* @__PURE__ */ o(
    "textarea",
    {
      ref: n || i ? Ce : u,
      id: R,
      disabled: l,
      readOnly: N,
      required: K,
      className: Ee,
      style: {
        minHeight: a ? void 0 : `${we}px`,
        maxHeight: n || i ? void 0 : I && !a ? `${I}px` : void 0,
        overflow: n || i ? "hidden" : void 0,
        ...ye === "content" ? { fieldSizing: "content" } : {}
      },
      rows: $,
      maxLength: S,
      value: C,
      defaultValue: _,
      "aria-invalid": q,
      "aria-describedby": P || m || g ? `${R}-caption` : void 0,
      onInput: xe,
      onKeyDown: Oe,
      onKeyUp: Ae,
      ...ve
    }
  );
  return /* @__PURE__ */ o(
    ke,
    {
      label: fe,
      inputId: R,
      required: K,
      supportText: pe,
      caption: P,
      error: m,
      success: g,
      width: ue,
      className: ge,
      children: /* @__PURE__ */ d("div", { className: f(Be, "relative"), children: [
        n ? /* @__PURE__ */ d(z.Root, { className: "relative overflow-hidden min-h-0", children: [
          /* @__PURE__ */ o(
            z.Viewport,
            {
              ref: X,
              className: "h-full w-full max-w-full",
              style: { maxHeight: `${I}px` },
              children: oe
            }
          ),
          /* @__PURE__ */ o(He, { orientation: "vertical" }),
          /* @__PURE__ */ o(z.Corner, {})
        ] }) : oe,
        Se(),
        he && S && !a && /* @__PURE__ */ o("div", { className: f("flex justify-end margin-t-16", je), "aria-live": "polite", children: /* @__PURE__ */ d("span", { children: [
          be,
          "/",
          S
        ] }) })
      ] })
    }
  );
});
Ge.displayName = "Textarea";
export {
  Ge as Textarea
};
