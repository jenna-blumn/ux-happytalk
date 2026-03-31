"use client";
import { jsx as n, jsxs as w, Fragment as me } from "react/jsx-runtime";
import * as s from "react";
import * as G from "@radix-ui/react-popover";
import { useVirtualizer as Ue } from "@tanstack/react-virtual";
import { InputWrapper as Ye } from "../input/shared/InputWrapper.mjs";
import { ScrollArea as qe } from "../scroll-area/ScrollArea.mjs";
import { STYLE_CONFIG as Qe, SIZE_CONFIG as Ze, STATE_CONFIG as pe, MENU_ITEM_SIZE_CONFIG as H } from "../../constants/select/Select/Select.constants.mjs";
import { VirtualSelectItem as Be } from "./VirtualSelectItem.mjs";
import { cn as g } from "../../utils/cn.mjs";
import { parseIconTypeWithFill as Je } from "../icons/Icon/Icon.types.mjs";
import { Icon as A } from "../icons/Icon/Icon.mjs";
const Xe = s.forwardRef(
  (a, ge) => {
    const {
      variant: xe = "single",
      selectStyle: be = "default",
      size: ve = "sm",
      label: J,
      required: ye = !1,
      supportText: we,
      caption: Ie,
      error: j,
      success: L,
      disabled: o = !1,
      placeholder: K = "Select...",
      leadIcon: X,
      options: z,
      searchable: M = !1,
      searchPlaceholder: ee = "Search...",
      noResultsText: Se = "No results found",
      open: te,
      onOpenChange: ne,
      maxHeight: ke = 300,
      className: Ne,
      clearable: Ce = !1,
      loading: Te = !1,
      renderOption: se,
      itemHeight: Fe = 32,
      overscan: Ve = 5
    } = a, i = xe === "multi", m = i ? a : null, ze = !i && "selectType" in a ? a.selectType : void 0, I = !i && "value" in a ? a.value : void 0, P = !i && "onChange" in a ? a.onChange : void 0, S = m?.onChange, W = m?.maxSelections, x = m?.value, ie = s.useId(), le = s.useRef(null), U = s.useRef(null), [Me, Oe] = s.useState(null), [Ee, De] = s.useState(!1), [k, Y] = s.useState(""), [c, b] = s.useState(-1), [Ae, oe] = s.useState(
      (!i && "defaultValue" in a ? a.defaultValue : void 0) ?? ""
    ), [ae, q] = s.useState(
      m?.defaultValue ?? []
    ), Q = te !== void 0, N = Q ? te : Ee, $ = i ? "" : I !== void 0 ? I : Ae, Z = i ? x : void 0, r = s.useMemo(
      () => Z !== void 0 ? Z : ae,
      [Z, ae]
    ), je = j === !0 || typeof j == "string" && j.length > 0, Le = L === !0 || typeof L == "string" && L.length > 0, C = o ? "disabled" : je ? "error" : Le ? "success" : "default", T = Ze[ve], re = Qe[be], de = o ? "default-disabled" : C === "error" ? "destructive" : C === "success" ? "success" : "default-subtle", u = s.useMemo(() => {
      if (!M || !k.trim()) return z;
      const e = k.toLowerCase().trim();
      return z.filter(
        (t) => t.label.toLowerCase().includes(e) || t.description?.toLowerCase().includes(e)
      );
    }, [z, k, M]), d = s.useMemo(
      () => u.filter((e) => !e.disabled),
      [u]
    ), F = i && m?.showSelectAll && !W, v = F && d.length > 0 && d.every((e) => r.includes(e.id)), ce = F && !v && d.some((e) => r.includes(e.id)), V = s.useCallback(
      (e) => {
        o || (Q || De(e), e || (Y(""), b(-1)), ne?.(e));
      },
      [o, Q, ne]
    ), O = s.useMemo(
      () => new Map(z.map((e) => [e.id, e])),
      [z]
    ), Pe = s.useMemo(
      () => new Map(d.map((e, t) => [e.id, t])),
      [d]
    ), ue = s.useCallback(
      (e) => {
        if (o) return;
        const t = O.get(e);
        !t || t.disabled || (I === void 0 && oe(e), P?.(e), V(!1));
      },
      [o, O, I, P, V]
    ), fe = s.useCallback(
      (e) => {
        if (o || !i) return;
        const t = O.get(e);
        if (!t || t.disabled) return;
        let l;
        if (r.includes(e))
          l = r.filter((h) => h !== e);
        else {
          if (W && r.length >= W) return;
          l = [...r, e];
        }
        x === void 0 && q(l), S?.(l);
      },
      [o, i, O, r, W, x, S]
    ), _ = s.useCallback(() => {
      if (o || !i) return;
      const e = d.map((l) => l.id);
      let t;
      if (v)
        t = r.filter((l) => !e.includes(l));
      else {
        const l = /* @__PURE__ */ new Set([...r, ...e]);
        t = Array.from(l);
      }
      x === void 0 && q(t), S?.(t);
    }, [o, i, d, v, r, x, S]), he = s.useCallback(
      (e) => {
        e.stopPropagation(), e.preventDefault(), i ? (x === void 0 && q([]), S?.([])) : (I === void 0 && oe(""), P?.(""));
      },
      [i, x, S, I, P]
    ), R = s.useCallback(
      (e) => {
        i ? fe(e) : ue(e);
      },
      [i, fe, ue]
    ), f = F ? 1 : 0, E = f + d.length, p = Ue({
      count: u.length,
      getScrollElement: () => Me,
      estimateSize: () => Fe,
      overscan: Ve
    }), We = s.useCallback(
      (e) => {
        if (!N) {
          ["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key) && (e.preventDefault(), V(!0), b(0));
          return;
        }
        switch (e.key) {
          case "ArrowDown": {
            e.preventDefault(), b((t) => {
              const l = t + 1 >= E ? 0 : t + 1, h = l - f;
              if (h >= 0) {
                const y = d[h], D = u.findIndex((B) => B.id === y?.id);
                D >= 0 && p.scrollToIndex(D);
              }
              return l;
            });
            break;
          }
          case "ArrowUp": {
            e.preventDefault(), b((t) => {
              const l = t - 1 < 0 ? E - 1 : t - 1, h = l - f;
              if (h >= 0) {
                const y = d[h], D = u.findIndex((B) => B.id === y?.id);
                D >= 0 && p.scrollToIndex(D);
              }
              return l;
            });
            break;
          }
          case "Home":
            e.preventDefault(), b(0), p.scrollToIndex(0);
            break;
          case "End":
            e.preventDefault(), b(E - 1), u.length > 0 && p.scrollToIndex(u.length - 1);
            break;
          case "Enter":
          case " ": {
            if (e.preventDefault(), F && c === 0)
              _();
            else if (c >= f && c < E) {
              const t = d[c - f];
              R(t.id);
            }
            break;
          }
          case "Escape":
            e.preventDefault(), V(!1), le.current?.focus();
            break;
        }
      },
      [N, d, u, c, E, f, F, R, _, V, p]
    );
    s.useEffect(() => {
      N && M && (p.scrollToIndex(0), b(-1));
    }, [k, N, M, p]);
    const $e = i ? r.length > 0 : !!$, _e = () => {
      if (i) {
        if (r.length === 0)
          return /* @__PURE__ */ n("span", { className: "text-hint", children: K });
        const t = typeof m?.selectedText == "function" ? m.selectedText(r.length) : m?.selectedText ?? `${r.length} selected`;
        return /* @__PURE__ */ n("span", { className: g("truncate", o ? "text-hint" : "text-default"), children: t });
      }
      if (!$)
        return /* @__PURE__ */ n("span", { className: "text-hint", children: K });
      const e = O.get($);
      return e ? /* @__PURE__ */ n("span", { className: g("truncate", o ? "text-hint" : "text-default"), children: e.label }) : /* @__PURE__ */ n("span", { className: "text-hint", children: K });
    }, Re = g(
      "flex w-full items-center justify-between whitespace-nowrap transition-colors duration-150",
      T.container,
      T.padding,
      T.gap,
      T.text,
      "font-body",
      re.base,
      !o && re.focus,
      C === "error" && "border-destructive",
      C === "success" && "border-success",
      C === "disabled" && pe.disabled.bg,
      C === "disabled" && pe.disabled.border,
      o ? "cursor-not-allowed" : "cursor-pointer",
      "focus:outline-none"
    ), Ge = s.useMemo(() => {
      if (c < f) return;
      const e = d[c - f];
      return e ? `vs-item-${e.id}` : void 0;
    }, [c, f, d]), He = p.getVirtualItems(), Ke = p.getTotalSize();
    return /* @__PURE__ */ n(
      Ye,
      {
        label: J,
        inputId: ie,
        required: ye,
        supportText: we,
        caption: Ie,
        error: j,
        success: L,
        width: a.width,
        className: Ne,
        children: /* @__PURE__ */ n(
          "div",
          {
            ref: ge,
            onKeyDown: We,
            style: a.minWidth ? { minWidth: typeof a.minWidth == "number" ? `${a.minWidth}px` : a.minWidth } : void 0,
            children: /* @__PURE__ */ w(G.Root, { open: N, onOpenChange: V, children: [
              /* @__PURE__ */ n(G.Trigger, { asChild: !0, disabled: o, children: /* @__PURE__ */ w(
                "button",
                {
                  ref: le,
                  type: "button",
                  role: "combobox",
                  "aria-expanded": N,
                  "aria-haspopup": "listbox",
                  disabled: o,
                  className: Re,
                  id: ie,
                  children: [
                    X && (() => {
                      const { iconType: e, isFill: t } = Je(X);
                      return /* @__PURE__ */ n(
                        A,
                        {
                          iconType: e,
                          size: T.iconSize,
                          color: de,
                          className: "flex-shrink-0",
                          isFill: t
                        }
                      );
                    })(),
                    /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 text-left", children: _e() }),
                    Ce && $e && !o && /* @__PURE__ */ n(
                      "span",
                      {
                        role: "button",
                        tabIndex: -1,
                        "aria-label": "Clear selection",
                        onClick: he,
                        onKeyDown: (e) => {
                          (e.key === "Enter" || e.key === " ") && (e.preventDefault(), he(e));
                        },
                        className: "flex items-center justify-center width-16 height-16 flex-shrink-0 text-muted hover:text-default",
                        children: /* @__PURE__ */ n(A, { iconType: ["system", "close"], size: 12 })
                      }
                    ),
                    /* @__PURE__ */ n(
                      A,
                      {
                        iconType: ["arrows", "expand-up-down"],
                        size: T.iconSize,
                        color: de,
                        className: "flex-shrink-0"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ n(G.Portal, { children: /* @__PURE__ */ w(
                G.Content,
                {
                  align: "start",
                  sideOffset: 4,
                  collisionPadding: 8,
                  className: g(
                    "z-[100] min-w-[200px] max-w-[320px] overflow-hidden",
                    "bg-card border-default rounded-lg shadow-modal-sm",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
                    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    "origin-[--radix-popover-content-transform-origin]"
                  ),
                  style: { width: "var(--radix-popover-trigger-width)" },
                  children: [
                    M && /* @__PURE__ */ n("div", { className: "border-b border-default", children: /* @__PURE__ */ w("div", { className: "flex items-center ds-gap-2 padding-x-8 height-36", children: [
                      /* @__PURE__ */ n("div", { className: "flex items-center justify-center width-20 height-20 flex-shrink-0", children: /* @__PURE__ */ n(A, { iconType: ["system", "search"], size: 16, color: "default-muted" }) }),
                      /* @__PURE__ */ n(
                        "input",
                        {
                          ref: U,
                          type: "text",
                          role: "searchbox",
                          "aria-label": ee || "옵션",
                          value: k,
                          onChange: (e) => {
                            Y(e.target.value), setTimeout(() => U.current?.focus(), 0);
                          },
                          placeholder: ee,
                          className: "flex-1 bg-transparent border-none outline-none size-sm line-height-leading-5 letter-spacing-tracking-tight font-body text-default placeholder:text-hint",
                          autoFocus: !0
                        }
                      ),
                      k && /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            Y(""), setTimeout(() => U.current?.focus(), 0);
                          },
                          className: "flex items-center justify-center width-20 height-20 flex-shrink-0 text-muted hover:text-default",
                          children: /* @__PURE__ */ n(A, { iconType: ["system", "close"], size: 14 })
                        }
                      )
                    ] }) }),
                    Te ? /* @__PURE__ */ n("div", { className: "flex items-center justify-center padding-y-16", children: /* @__PURE__ */ n("div", { className: "width-16 height-16 border-2 border-default border-t-transparent rounded-full motion-safe:animate-spin" }) }) : u.length > 0 ? /* @__PURE__ */ w(me, { children: [
                      F && /* @__PURE__ */ w(me, { children: [
                        /* @__PURE__ */ n("div", { className: "flex w-full padding-x-4 padding-t-4", children: /* @__PURE__ */ w(
                          "div",
                          {
                            role: "option",
                            "aria-selected": v,
                            tabIndex: 0,
                            onClick: _,
                            onKeyDown: (e) => {
                              (e.key === "Enter" || e.key === " ") && (e.preventDefault(), _());
                            },
                            className: g(
                              "flex items-center w-full rounded-xs transition-colors duration-150",
                              H.default.height,
                              H.default.padding,
                              H.default.gap,
                              "bg-transparent hover:bg-state-ghost-hover active:bg-state-ghost-hover cursor-pointer",
                              c === 0 && "shadow-component-focus"
                            ),
                            children: [
                              /* @__PURE__ */ n(
                                "div",
                                {
                                  className: g(
                                    "relative width-16 height-16 rounded-default overflow-hidden flex-shrink-0 transition-colors",
                                    v || ce ? "border-none bg-checkbox-active" : "border-darker bg-checkbox-default"
                                  ),
                                  children: (v || ce) && /* @__PURE__ */ n("div", { className: "absolute flex items-center justify-center", style: { inset: "1px" }, children: /* @__PURE__ */ n("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: v ? /* @__PURE__ */ n("path", { d: "M1 4L3 6L7 2", stroke: "#FFFFFF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) : /* @__PURE__ */ n("path", { d: "M1.5 4H6.5", stroke: "#FFFFFF", strokeWidth: "2", strokeLinecap: "round" }) }) })
                                }
                              ),
                              /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 padding-x-4", children: /* @__PURE__ */ n("span", { className: g("font-body", H.default.text, "text-default truncate"), children: m?.selectAllLabel ?? "전체 선택" }) })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ n("div", { className: "margin-x-4 margin-y-4 height-1 bg-muted" })
                      ] }),
                      /* @__PURE__ */ n(
                        "div",
                        {
                          role: "listbox",
                          "aria-multiselectable": i || void 0,
                          "aria-label": J || "Options",
                          "aria-activedescendant": Ge,
                          className: "padding-y-4",
                          children: /* @__PURE__ */ n(
                            qe,
                            {
                              maxHeight: ke,
                              viewportRef: Oe,
                              children: /* @__PURE__ */ n(
                                "div",
                                {
                                  style: {
                                    height: `${Ke}px`,
                                    width: "100%",
                                    position: "relative"
                                  },
                                  children: He.map((e) => {
                                    const t = u[e.index], l = i ? r.includes(t.id) : $ === t.id, h = Pe.get(t.id) ?? -1, y = h >= 0 && h + f === c;
                                    return se ? /* @__PURE__ */ n(
                                      "div",
                                      {
                                        role: "option",
                                        "aria-selected": l,
                                        "aria-disabled": t.disabled,
                                        id: `vs-item-${t.id}`,
                                        "data-focused": y || void 0,
                                        onClick: () => !t.disabled && R(t.id),
                                        className: "flex w-full padding-x-4",
                                        style: {
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          width: "100%",
                                          height: `${e.size}px`,
                                          transform: `translateY(${e.start}px)`
                                        },
                                        children: /* @__PURE__ */ n(
                                          "div",
                                          {
                                            className: g(
                                              "flex items-center w-full rounded-xs transition-colors duration-150 padding-6",
                                              t.disabled ? "cursor-not-allowed opacity-50" : "hover:bg-state-ghost-hover cursor-pointer",
                                              !t.disabled && y && "shadow-component-focus"
                                            ),
                                            children: se(t, l)
                                          }
                                        )
                                      },
                                      t.id
                                    ) : /* @__PURE__ */ n(
                                      Be,
                                      {
                                        option: t,
                                        selected: l,
                                        focused: y,
                                        disabled: t.disabled,
                                        isMulti: i,
                                        selectType: ze,
                                        onSelect: () => R(t.id),
                                        style: {
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          width: "100%",
                                          height: `${e.size}px`,
                                          transform: `translateY(${e.start}px)`
                                        }
                                      },
                                      t.id
                                    );
                                  })
                                }
                              )
                            }
                          )
                        }
                      )
                    ] }) : /* @__PURE__ */ n("div", { className: "flex items-center justify-center padding-y-8 text-muted size-sm font-body", children: Se })
                  ]
                }
              ) })
            ] })
          }
        )
      }
    );
  }
);
Xe.displayName = "VirtualSelect";
export {
  Xe as VirtualSelect
};
