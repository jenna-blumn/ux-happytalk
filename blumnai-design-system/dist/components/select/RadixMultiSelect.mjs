"use client";
import { jsx as t, jsxs as h, Fragment as ie } from "react/jsx-runtime";
import * as l from "react";
import * as H from "@radix-ui/react-popover";
import { InputWrapper as Ke } from "../input/shared/InputWrapper.mjs";
import { STATE_CONFIG as be, STYLE_CONFIG as _e, SIZE_CONFIG as Pe, MENU_ITEM_SIZE_CONFIG as D } from "../../constants/select/Select/Select.constants.mjs";
import { cn as c } from "../../utils/cn.mjs";
import { parseIconTypeWithFill as oe } from "../icons/Icon/Icon.types.mjs";
import { Icon as I } from "../icons/Icon/Icon.mjs";
import { Badge as ve } from "../badge/Badge/Badge.mjs";
import { Avatar as ye } from "../avatar/Avatar/Avatar.mjs";
const we = l.forwardRef(
  ({ option: a, selected: E, focused: L, disabled: u = !1, variant: Y, onToggle: A }, k) => {
    const x = l.useRef(null);
    l.useEffect(() => {
      L && x.current && x.current.scrollIntoView({ block: "nearest" });
    }, [L]);
    const F = l.useCallback(
      (o) => {
        x.current = o, typeof k == "function" ? k(o) : k && (k.current = o);
      },
      [k]
    ), n = a.description ? D.large : D.default, J = a.iconColor ?? (u ? "var(--icon-default-disabled)" : "var(--icon-default)"), T = () => {
      u || A();
    }, V = (o) => {
      (o.key === "Enter" || o.key === " ") && !u && (o.preventDefault(), A());
    }, p = () => /* @__PURE__ */ t(
      "div",
      {
        className: c(
          "relative width-16 height-16 rounded-default overflow-hidden flex-shrink-0 transition-colors",
          u ? "bg-checkbox-disabled border-default" : E ? "border-none bg-checkbox-active" : "border-darker bg-checkbox-default"
        ),
        children: E && /* @__PURE__ */ t(
          "div",
          {
            className: "absolute flex items-center justify-center",
            style: { inset: "1px" },
            children: /* @__PURE__ */ t(
              "svg",
              {
                width: "8",
                height: "8",
                viewBox: "0 0 8 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ t(
                  "path",
                  {
                    d: "M1 4L3 6L7 2",
                    stroke: u ? "var(--icon-default-disabled)" : "#FFFFFF",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            )
          }
        )
      }
    ), K = () => {
      if (Y === "avatar" && a.avatarSrc)
        return /* @__PURE__ */ t(
          ye,
          {
            variant: "userpic",
            size: a.description ? "sm" : "2xs",
            src: a.avatarSrc,
            alt: a.label,
            className: "flex-shrink-0"
          }
        );
      if (a.leadIcon) {
        const { iconType: o, isFill: X } = oe(a.leadIcon);
        return /* @__PURE__ */ t(
          "div",
          {
            className: c(
              "flex items-center justify-center flex-shrink-0",
              n.iconFrame
            ),
            children: /* @__PURE__ */ t(
              I,
              {
                iconType: o,
                size: n.iconSize,
                color: J,
                isFill: X
              }
            )
          }
        );
      }
      return null;
    };
    return /* @__PURE__ */ t(
      "div",
      {
        ref: F,
        role: "option",
        "aria-selected": E,
        "aria-disabled": u,
        tabIndex: u ? -1 : 0,
        onClick: T,
        onKeyDown: V,
        className: "flex w-full padding-x-4",
        children: /* @__PURE__ */ h(
          "div",
          {
            className: c(
              "flex items-center w-full rounded-xs transition-colors duration-150",
              n.height,
              n.padding,
              n.gap,
              u ? "bg-transparent cursor-not-allowed" : "bg-transparent hover:bg-state-ghost-hover active:bg-state-ghost-hover cursor-pointer",
              !u && L && "shadow-component-focus"
            ),
            children: [
              p(),
              K(),
              a.description ? /* @__PURE__ */ h("div", { className: "flex flex-col flex-1 min-w-0 padding-x-4 ds-gap-1", children: [
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: c(
                      "font-body",
                      n.text,
                      u ? "text-hint" : "text-default",
                      "flex-1 truncate"
                    ),
                    children: a.label
                  }
                ),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: c(
                      "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight truncate",
                      u ? "text-hint" : "text-muted"
                    ),
                    children: a.description
                  }
                )
              ] }) : /* @__PURE__ */ t("div", { className: "flex-1 min-w-0 padding-x-4", children: /* @__PURE__ */ t(
                "span",
                {
                  className: c(
                    "font-body block",
                    n.text,
                    u ? "text-hint" : "text-default",
                    "truncate"
                  ),
                  children: a.label
                }
              ) }),
              a.badge && /* @__PURE__ */ t(ve, { size: "sm", color: "neutral", border: !0, label: a.badge })
            ]
          }
        )
      }
    );
  }
);
we.displayName = "MultiSelectItem";
const $e = l.forwardRef(
  ({
    variant: a = "default",
    selectStyle: E = "default",
    size: L = "sm",
    label: u,
    required: Y = !1,
    supportText: A,
    caption: k,
    error: x,
    success: F,
    disabled: n = !1,
    placeholder: J = "Select...",
    leadIcon: T,
    tailIcon: V,
    options: p,
    value: K,
    onChange: o,
    defaultValue: X,
    open: ce,
    onOpenChange: de,
    searchable: ee = !1,
    searchPlaceholder: ue = "Search...",
    noResultsText: ke = "No results found",
    maxSelections: _,
    selectedText: P,
    maxVisibleTags: te,
    overflowText: $,
    width: Ne,
    minWidth: B,
    maxHeight: re = 300,
    className: Ce,
    showSelectAll: Ie = !1,
    selectAllLabel: Fe = "전체 선택",
    clearable: Se = !1,
    loading: ze = !1,
    optionGroups: U,
    renderOption: fe
  }, De) => {
    const he = l.useId(), me = l.useRef(null), ne = l.useRef(null), [Ee, Le] = l.useState(!1), [je, W] = l.useState(
      X || []
    ), [j, se] = l.useState(""), [b, S] = l.useState(-1), le = ce !== void 0, Q = le ? ce : Ee, g = K !== void 0, d = g ? K : je, Me = x === !0 || typeof x == "string" && x.length > 0, Oe = F === !0 || typeof F == "string" && F.length > 0, z = n ? "disabled" : Me ? "error" : Oe ? "success" : "default", N = Pe[L], pe = _e[E], ae = n ? "default-disabled" : z === "error" ? "destructive" : z === "success" ? "success" : "default-subtle", v = l.useMemo(() => {
      if (!ee || !j.trim())
        return p;
      const e = j.toLowerCase().trim();
      return p.filter(
        (r) => r.label.toLowerCase().includes(e) || r.description?.toLowerCase().includes(e)
      );
    }, [p, j, ee]), Z = l.useMemo(() => v.filter((e) => !e.disabled), [v]), y = Ie && !_, M = l.useMemo(() => v.filter((e) => !e.disabled), [v]), C = y && M.length > 0 && M.every((e) => d.includes(e.id)), ge = y && !C && M.some((e) => d.includes(e.id)), f = l.useMemo(() => p.filter((e) => d.includes(e.id)), [p, d]), q = l.useCallback(
      (e) => {
        n || (le || Le(e), e || (se(""), S(-1)), de?.(e));
      },
      [n, le, de]
    ), O = l.useCallback(
      (e) => {
        if (n) return;
        const r = p.find((i) => i.id === e);
        if (!r || r.disabled) return;
        let s;
        if (d.includes(e))
          s = d.filter((i) => i !== e);
        else {
          if (_ && d.length >= _) return;
          s = [...d, e];
        }
        g || W(s), o?.(s);
      },
      [n, p, d, _, g, o]
    ), Re = l.useCallback(
      (e) => {
        if (n) return;
        const r = d.filter((s) => s !== e);
        g || W(r), o?.(r);
      },
      [n, d, g, o]
    ), G = l.useCallback(() => {
      if (n) return;
      const e = M.map((s) => s.id);
      let r;
      if (C)
        r = d.filter((s) => !e.includes(s));
      else {
        const s = /* @__PURE__ */ new Set([...d, ...e]);
        r = Array.from(s);
      }
      g || W(r), o?.(r);
    }, [n, M, C, d, g, o]), xe = l.useCallback(
      (e) => {
        e.stopPropagation(), e.preventDefault(), g || W([]), o?.([]);
      },
      [g, o]
    ), R = (y ? 1 : 0) + Z.length, Ae = l.useCallback(
      (e) => {
        if (!Q) {
          ["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key) && (e.preventDefault(), q(!0), S(0));
          return;
        }
        const r = y ? 1 : 0;
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault(), S(
              (s) => s + 1 >= R ? 0 : s + 1
            );
            break;
          case "ArrowUp":
            e.preventDefault(), S(
              (s) => s - 1 < 0 ? R - 1 : s - 1
            );
            break;
          case "Home":
            e.preventDefault(), S(0);
            break;
          case "End":
            e.preventDefault(), S(R - 1);
            break;
          case "Enter":
          case " ":
            if (e.preventDefault(), y && b === 0)
              G();
            else if (b >= r && b < R) {
              const s = Z[b - r];
              O(s.id);
            }
            break;
          case "Escape":
            e.preventDefault(), q(!1), me.current?.focus();
            break;
        }
      },
      [Q, Z, b, O, G, q, y, R]
    ), Te = () => {
      if (f.length === 0)
        return /* @__PURE__ */ t("span", { className: "text-hint", children: J });
      if (a === "tags") {
        const r = te !== void 0 && f.length > te, s = r ? f.slice(0, te) : f, i = f.length - s.length, w = () => typeof $ == "function" ? $(i, f.length) : typeof $ == "string" ? $.replace("{hiddenCount}", String(i)).replace("{totalCount}", String(f.length)) : `+${i} more`;
        return /* @__PURE__ */ h("div", { className: "flex flex-wrap ds-gap-4 items-center", children: [
          s.map((m) => /* @__PURE__ */ t(
            ve,
            {
              size: "sm",
              color: "neutral",
              border: !0,
              label: m.label,
              closeIcon: !n,
              onClose: n ? void 0 : () => Re(m.id)
            },
            m.id
          )),
          r && i > 0 && /* @__PURE__ */ t("span", { className: c("size-sm font-body", n ? "text-hint" : "text-muted"), children: w() })
        ] });
      }
      if (f.length === 1 && !P) {
        const r = f[0];
        return a === "avatar" && r.avatarSrc ? /* @__PURE__ */ h("div", { className: "flex items-center ds-gap-6", children: [
          /* @__PURE__ */ t(ye, { variant: "userpic", size: "2xs", src: r.avatarSrc, alt: r.label }),
          /* @__PURE__ */ t(
            "span",
            {
              className: c("truncate", n ? "text-hint" : "text-default"),
              children: r.label
            }
          )
        ] }) : /* @__PURE__ */ t(
          "span",
          {
            className: c("truncate", n ? "text-hint" : "text-default"),
            children: r.label
          }
        );
      }
      const e = typeof P == "function" ? P(f.length) : P ?? (f.length === 1 ? f[0].label : `${f.length} selected`);
      return /* @__PURE__ */ t("span", { className: c("truncate", n ? "text-hint" : "text-default"), children: e });
    }, Ve = c(
      "flex w-full items-center justify-between whitespace-nowrap transition-colors duration-150",
      N.container,
      N.padding,
      N.gap,
      N.text,
      "font-body",
      pe.base,
      !n && pe.focus,
      z === "error" && "border-destructive",
      z === "success" && "border-success",
      z === "disabled" && be.disabled.bg,
      z === "disabled" && be.disabled.border,
      n ? "cursor-not-allowed" : "cursor-pointer",
      "focus:outline-none",
      a === "tags" && "overflow-hidden"
    );
    return /* @__PURE__ */ t(
      Ke,
      {
        label: u,
        inputId: he,
        required: Y,
        supportText: A,
        caption: k,
        error: x,
        success: F,
        width: Ne,
        className: Ce,
        children: /* @__PURE__ */ t("div", { ref: De, onKeyDown: Ae, style: B ? { minWidth: typeof B == "number" ? `${B}px` : B } : void 0, children: /* @__PURE__ */ h(H.Root, { open: Q, onOpenChange: q, children: [
          /* @__PURE__ */ t(H.Trigger, { asChild: !0, disabled: n, children: /* @__PURE__ */ h(
            "button",
            {
              ref: me,
              type: "button",
              role: "combobox",
              "aria-expanded": Q,
              "aria-haspopup": "listbox",
              disabled: n,
              className: Ve,
              id: he,
              children: [
                T && (() => {
                  const { iconType: e, isFill: r } = oe(T);
                  return /* @__PURE__ */ t(
                    I,
                    {
                      iconType: e,
                      size: N.iconSize,
                      color: ae,
                      className: "flex-shrink-0",
                      isFill: r
                    }
                  );
                })(),
                /* @__PURE__ */ t(
                  "div",
                  {
                    className: c(
                      "flex-1 min-w-0 text-left",
                      a === "tags" && "flex items-center"
                    ),
                    children: Te()
                  }
                ),
                Se && d.length > 0 && !n && /* @__PURE__ */ t(
                  "span",
                  {
                    role: "button",
                    tabIndex: -1,
                    "aria-label": "Clear all selections",
                    onClick: xe,
                    onKeyDown: (e) => {
                      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), xe(e));
                    },
                    className: "flex items-center justify-center width-16 height-16 flex-shrink-0 text-muted hover:text-default",
                    children: /* @__PURE__ */ t(I, { iconType: ["system", "close"], size: 12 })
                  }
                ),
                V && (() => {
                  const { iconType: e, isFill: r } = oe(V);
                  return /* @__PURE__ */ t(
                    I,
                    {
                      iconType: e,
                      size: N.iconSize,
                      color: ae,
                      className: "flex-shrink-0",
                      isFill: r
                    }
                  );
                })(),
                /* @__PURE__ */ t(
                  I,
                  {
                    iconType: ["arrows", "expand-up-down"],
                    size: N.iconSize,
                    color: ae,
                    className: "flex-shrink-0"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ t(H.Portal, { children: /* @__PURE__ */ h(
            H.Content,
            {
              align: "start",
              sideOffset: 4,
              collisionPadding: 8,
              className: c(
                "z-[100] min-w-[200px] max-w-[320px] overflow-hidden",
                "bg-card border-default rounded-lg shadow-modal-sm",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
                "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                "origin-[--radix-popover-content-transform-origin]"
              ),
              style: {
                width: "var(--radix-popover-trigger-width)"
              },
              children: [
                ee && /* @__PURE__ */ t("div", { className: "border-b border-default", children: /* @__PURE__ */ h("div", { className: "flex items-center ds-gap-2 padding-x-8 height-36", children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center justify-center width-20 height-20 flex-shrink-0", children: /* @__PURE__ */ t(I, { iconType: ["system", "search"], size: 16, color: "default-muted" }) }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      ref: ne,
                      type: "text",
                      role: "searchbox",
                      "aria-label": ue || "옵션",
                      value: j,
                      onChange: (e) => {
                        se(e.target.value), setTimeout(() => ne.current?.focus(), 0);
                      },
                      placeholder: ue,
                      className: "flex-1 bg-transparent border-none outline-none size-sm line-height-leading-5 letter-spacing-tracking-tight font-body text-default placeholder:text-hint",
                      autoFocus: !0
                    }
                  ),
                  j && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        se(""), setTimeout(() => ne.current?.focus(), 0);
                      },
                      className: "flex items-center justify-center width-20 height-20 flex-shrink-0 text-muted hover:text-default",
                      children: /* @__PURE__ */ t(I, { iconType: ["system", "close"], size: 14 })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ t(
                  "div",
                  {
                    role: "listbox",
                    "aria-multiselectable": "true",
                    "aria-label": u || "Options",
                    className: "padding-y-4 overflow-y-auto overflow-x-hidden",
                    style: {
                      maxHeight: typeof re == "number" ? `${re}px` : re
                    },
                    children: ze ? /* @__PURE__ */ t("div", { className: "flex items-center justify-center padding-y-16", children: /* @__PURE__ */ t("div", { className: "width-16 height-16 border-2 border-default border-t-transparent rounded-full motion-safe:animate-spin" }) }) : v.length > 0 ? /* @__PURE__ */ h(ie, { children: [
                      y && /* @__PURE__ */ h(ie, { children: [
                        /* @__PURE__ */ t("div", { className: "flex w-full padding-x-4", children: /* @__PURE__ */ h(
                          "div",
                          {
                            role: "option",
                            "aria-selected": C,
                            tabIndex: 0,
                            onClick: G,
                            onKeyDown: (e) => {
                              (e.key === "Enter" || e.key === " ") && (e.preventDefault(), G());
                            },
                            className: c(
                              "flex items-center w-full rounded-xs transition-colors duration-150",
                              D.default.height,
                              D.default.padding,
                              D.default.gap,
                              "bg-transparent hover:bg-state-ghost-hover active:bg-state-ghost-hover cursor-pointer",
                              b === 0 && "shadow-component-focus"
                            ),
                            children: [
                              /* @__PURE__ */ t(
                                "div",
                                {
                                  className: c(
                                    "relative width-16 height-16 rounded-default overflow-hidden flex-shrink-0 transition-colors",
                                    C || ge ? "border-none bg-checkbox-active" : "border-darker bg-checkbox-default"
                                  ),
                                  children: (C || ge) && /* @__PURE__ */ t(
                                    "div",
                                    {
                                      className: "absolute flex items-center justify-center",
                                      style: { inset: "1px" },
                                      children: /* @__PURE__ */ t(
                                        "svg",
                                        {
                                          width: "8",
                                          height: "8",
                                          viewBox: "0 0 8 8",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: C ? /* @__PURE__ */ t(
                                            "path",
                                            {
                                              d: "M1 4L3 6L7 2",
                                              stroke: "#FFFFFF",
                                              strokeWidth: "2",
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round"
                                            }
                                          ) : /* @__PURE__ */ t(
                                            "path",
                                            {
                                              d: "M1.5 4H6.5",
                                              stroke: "#FFFFFF",
                                              strokeWidth: "2",
                                              strokeLinecap: "round"
                                            }
                                          )
                                        }
                                      )
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ t("div", { className: "flex-1 min-w-0 padding-x-4", children: /* @__PURE__ */ t(
                                "span",
                                {
                                  className: c(
                                    "font-body",
                                    D.default.text,
                                    "text-default truncate"
                                  ),
                                  children: Fe
                                }
                              ) })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ t("div", { className: "margin-x-4 margin-y-4 height-1 bg-muted" })
                      ] }),
                      (() => {
                        const e = (r) => {
                          const s = Z.findIndex(
                            (m) => m.id === r.id
                          ), i = y ? s + 1 === b : s === b, w = d.includes(r.id);
                          return fe ? /* @__PURE__ */ t(
                            "div",
                            {
                              role: "option",
                              "aria-selected": w,
                              "aria-disabled": r.disabled,
                              tabIndex: r.disabled ? -1 : 0,
                              onClick: () => !r.disabled && O(r.id),
                              onKeyDown: (m) => {
                                (m.key === "Enter" || m.key === " ") && !r.disabled && (m.preventDefault(), O(r.id));
                              },
                              className: "flex w-full padding-x-4",
                              children: /* @__PURE__ */ t(
                                "div",
                                {
                                  className: c(
                                    "flex items-center w-full rounded-xs transition-colors duration-150 padding-6",
                                    r.disabled ? "cursor-not-allowed opacity-50" : "hover:bg-state-ghost-hover cursor-pointer",
                                    !r.disabled && i && "shadow-component-focus"
                                  ),
                                  children: fe(r, w)
                                }
                              )
                            },
                            r.id
                          ) : /* @__PURE__ */ t(
                            we,
                            {
                              option: r,
                              selected: w,
                              focused: i,
                              disabled: r.disabled,
                              variant: a,
                              onToggle: () => O(r.id)
                            },
                            r.id
                          );
                        };
                        if (U && U.length > 0) {
                          const r = new Set(
                            U.flatMap((i) => i.optionIds)
                          ), s = v.filter(
                            (i) => !r.has(i.id)
                          );
                          return /* @__PURE__ */ h(ie, { children: [
                            U.map((i) => {
                              const w = v.filter(
                                (m) => i.optionIds.includes(m.id)
                              );
                              return w.length === 0 ? null : /* @__PURE__ */ h(l.Fragment, { children: [
                                /* @__PURE__ */ t("div", { className: "padding-x-8 padding-y-4", children: /* @__PURE__ */ t("span", { className: "font-body size-xs text-muted font-medium", children: i.label }) }),
                                w.map(e)
                              ] }, i.label);
                            }),
                            s.map(e)
                          ] });
                        }
                        return v.map(e);
                      })()
                    ] }) : /* @__PURE__ */ t("div", { className: "flex items-center justify-center padding-y-8 text-muted size-sm font-body", children: ke })
                  }
                )
              ]
            }
          ) })
        ] }) })
      }
    );
  }
);
$e.displayName = "MultiSelect";
export {
  $e as MultiSelect
};
