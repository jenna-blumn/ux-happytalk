"use client";
import { jsx as t, jsxs as g } from "react/jsx-runtime";
import * as l from "react";
import * as V from "@radix-ui/react-popover";
import { Command as R } from "cmdk";
import { InputWrapper as De } from "../../input/shared/InputWrapper.mjs";
import { STYLE_CONFIG as je, SIZE_CONFIG as Ae, STATE_CONFIG as se, MENU_ITEM_SIZE_CONFIG as ne } from "../../../constants/select/Select/Select.constants.mjs";
import { cn as u } from "../../../utils/cn.mjs";
import { Icon as x } from "../../icons/Icon/Icon.mjs";
import { Avatar as le } from "../../avatar/Avatar/Avatar.mjs";
import { parseIconTypeWithFill as ae } from "../../icons/Icon/Icon.types.mjs";
import { Badge as ie } from "../../badge/Badge/Badge.mjs";
const Z = (r, y) => {
  if (!y.trim()) return r;
  const p = new RegExp(`(${y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"), S = r.split(p);
  return S.length === 1 ? r : S.map(
    (f, C) => p.test(f) ? /* @__PURE__ */ t("mark", { className: "bg-transparent font-bold text-default", children: f }, C) : f
  );
}, oe = l.forwardRef(
  ({ option: r, selected: y, variant: p, onSelect: S, searchTerm: f, highlightSearch: C = !0 }, D) => {
    const v = r.description ? ne.large : ne.default, j = r.iconColor ?? (r.disabled ? "var(--icon-default-disabled)" : "var(--icon-default)"), z = () => p !== "tags" ? null : /* @__PURE__ */ t(
      "div",
      {
        className: u(
          "relative width-16 height-16 rounded-default overflow-hidden flex-shrink-0 transition-colors",
          r.disabled ? "bg-checkbox-disabled border-default" : y ? "border-none bg-checkbox-active" : "border-darker bg-checkbox-default"
        ),
        children: y && /* @__PURE__ */ t(
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
                    stroke: r.disabled ? "var(--icon-default-disabled)" : "#FFFFFF",
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
    ), T = () => p === "tags" ? null : /* @__PURE__ */ t("span", { className: "flex width-20 height-20 items-center justify-center flex-shrink-0", children: y && /* @__PURE__ */ t(
      x,
      {
        iconType: ["system", "check"],
        size: 16,
        color: "var(--icon-primary)"
      }
    ) }), s = () => {
      if (p === "avatar" && r.avatarSrc)
        return /* @__PURE__ */ t(
          le,
          {
            variant: "userpic",
            size: r.description ? "sm" : "2xs",
            src: r.avatarSrc,
            alt: r.label,
            className: "flex-shrink-0"
          }
        );
      if (r.leadIcon) {
        const { iconType: A, isFill: h } = ae(r.leadIcon);
        return /* @__PURE__ */ t(
          "div",
          {
            className: u(
              "flex items-center justify-center flex-shrink-0",
              v.iconFrame
            ),
            children: /* @__PURE__ */ t(
              x,
              {
                iconType: A,
                size: v.iconSize,
                color: j,
                isFill: h
              }
            )
          }
        );
      }
      return null;
    };
    return /* @__PURE__ */ t(
      R.Item,
      {
        ref: D,
        value: r.id,
        disabled: r.disabled,
        onSelect: S,
        className: u(
          "flex w-full padding-x-4 outline-none",
          !r.disabled && [
            "cursor-pointer",
            "hover:bg-[var(--bg-state-ghost-hover)]",
            "aria-selected:bg-[var(--bg-state-ghost-hover)]"
          ]
        ),
        children: /* @__PURE__ */ g(
          "div",
          {
            className: u(
              "flex items-center w-full rounded-xs transition-colors duration-150",
              v.height,
              v.padding,
              v.gap,
              r.disabled && "cursor-not-allowed opacity-50"
            ),
            children: [
              z(),
              T(),
              s(),
              r.description ? /* @__PURE__ */ g("div", { className: "flex flex-col flex-1 min-w-0 padding-x-4 ds-gap-1", children: [
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: u(
                      "font-body",
                      v.text,
                      r.disabled ? "text-hint" : "text-default",
                      "flex-1 truncate"
                    ),
                    children: C && f ? Z(r.label, f) : r.label
                  }
                ),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: u(
                      "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight truncate",
                      r.disabled ? "text-hint" : "text-muted"
                    ),
                    children: C && f && r.description ? Z(r.description, f) : r.description
                  }
                )
              ] }) : /* @__PURE__ */ t("div", { className: "flex-1 min-w-0 padding-x-4", children: /* @__PURE__ */ t(
                "span",
                {
                  className: u(
                    "font-body block",
                    v.text,
                    r.disabled ? "text-hint" : "text-default",
                    "truncate"
                  ),
                  children: C && f ? Z(r.label, f) : r.label
                }
              ) }),
              r.badge && /* @__PURE__ */ t(ie, { size: "sm", color: "neutral", border: !0, label: r.badge })
            ]
          }
        )
      }
    );
  }
);
oe.displayName = "ComboboxItem";
const Me = l.forwardRef(
  (r, y) => {
    const {
      variant: p = "default",
      selectStyle: S = "default",
      size: f = "sm",
      label: C,
      required: D = !1,
      supportText: v,
      caption: j,
      error: z,
      success: T,
      disabled: s = !1,
      placeholder: A = "Search...",
      options: h,
      noResultsText: K,
      emptyStateTitle: ce = "No search results",
      emptyStateDescription: de = "Your search did not match any results.",
      creatable: M = !1,
      createText: O,
      open: J,
      onOpenChange: Q,
      maxHeight: ue = 300,
      width: fe,
      className: me,
      highlightSearch: he = !0,
      filterFunction: P,
      tailIcon: X
    } = r, ee = l.useId(), _ = l.useRef(null), B = l.useRef(null), L = l.useRef(null), [ge, pe] = l.useState(!1), [a, E] = l.useState(""), [U, $] = l.useState(!1), [be, xe] = l.useState(!1), [ve, we] = l.useState(!1), G = J !== void 0, w = G ? J : ge, c = p === "tags", d = r, N = r, H = l.useMemo(() => c ? d.value ?? [] : N.value ? [N.value] : [], [c, d.value, N.value]), i = l.useMemo(() => h.filter((e) => H.includes(e.id)), [h, H]), ye = z === !0 || typeof z == "string" && z.length > 0, Ce = T === !0 || typeof T == "string" && T.length > 0, I = s ? "disabled" : ye ? "error" : Ce ? "success" : "default", k = Ae[f], te = je[S], re = s ? "default-disabled" : I === "error" ? "destructive" : I === "success" ? "success" : "default-subtle", b = l.useCallback(
      (e) => {
        s || (G || pe(e), e || (E(""), $(!1)), Q?.(e));
      },
      [s, G, Q]
    ), Ne = l.useCallback(
      (e) => {
        if (s) return;
        const n = h.find((o) => o.id === e);
        if (!(!n || n.disabled)) {
          if (c) {
            const o = d.value ?? [];
            let m;
            if (o.includes(e))
              m = o.filter((F) => F !== e);
            else {
              if (d.maxSelections && o.length >= d.maxSelections)
                return;
              m = [...o, e];
            }
            d.onChange?.(m);
          } else
            N.onChange?.(e), b(!1);
          E("");
        }
      },
      [s, h, c, d, N, b]
    ), ke = l.useCallback(() => {
      !M || !a.trim() || (c ? d.onCreate?.(a.trim()) : N.onCreate?.(a.trim()), E(""), c || b(!1));
    }, [M, a, c, d, N, b]), Se = l.useCallback(
      (e) => {
        if (s || !c) return;
        const o = (d.value ?? []).filter((m) => m !== e);
        d.onChange?.(o);
      },
      [s, c, d]
    ), ze = () => typeof O == "function" ? O(a) : typeof O == "string" ? O.replace("{value}", a) : `Add "${a}"`, W = l.useMemo(() => {
      if (!a.trim())
        return h;
      if (P)
        return h.filter((n) => P(n, a));
      const e = a.toLowerCase().trim();
      return h.filter((n) => {
        const o = n.label.toLowerCase(), m = n.description?.toLowerCase() ?? "";
        return o.includes(e) || m.includes(e);
      });
    }, [h, a, P]), q = l.useCallback(() => {
      const e = L.current;
      if (!e) return;
      const { scrollTop: n, scrollHeight: o, clientHeight: m } = e;
      xe(n > 0), we(n + m < o - 1);
    }, []);
    l.useEffect(() => {
      w && requestAnimationFrame(q);
    }, [w, W, q]);
    const Te = () => {
      const e = L.current;
      e && e.scrollBy({ top: -100, behavior: "smooth" });
    }, Ie = () => {
      const e = L.current;
      e && e.scrollBy({ top: 100, behavior: "smooth" });
    }, Fe = M && a.trim() && !h.some(
      (e) => e.label.toLowerCase() === a.trim().toLowerCase()
    ), Oe = () => {
      if (c) {
        if (i.length === 0)
          return null;
        const e = d.maxVisibleTags, n = d.overflowText, o = e !== void 0 && i.length > e, m = o ? i.slice(0, e) : i, F = i.length - m.length, Re = () => typeof n == "function" ? n(F, i.length) : typeof n == "string" ? n.replace("{hiddenCount}", String(F)).replace("{totalCount}", String(i.length)) : `+${F} more`;
        return /* @__PURE__ */ g("div", { className: "flex flex-wrap ds-gap-4 items-center", children: [
          m.map((Y) => /* @__PURE__ */ t(
            ie,
            {
              size: "sm",
              color: "neutral",
              border: !0,
              label: Y.label,
              closeIcon: !s,
              onClose: s ? void 0 : () => Se(Y.id)
            },
            Y.id
          )),
          o && F > 0 && /* @__PURE__ */ t("span", { className: u("size-sm font-body", s ? "text-hint" : "text-muted"), children: Re() })
        ] });
      }
      return null;
    }, Le = u(
      "flex w-full items-center justify-between whitespace-nowrap transition-colors duration-150",
      k.minHeight,
      k.padding,
      k.gap,
      k.text,
      "font-body",
      te.base,
      !s && te.focus,
      I === "error" && "border-destructive",
      I === "success" && "border-success",
      I === "disabled" && se.disabled.bg,
      I === "disabled" && se.disabled.border,
      s ? "cursor-not-allowed" : "cursor-text",
      "focus-within:outline-none",
      c && "flex-wrap min-h-auto"
    ), Ee = () => {
      s || ($(!0), w || b(!0), _.current?.focus());
    }, Ve = () => K !== void 0 ? /* @__PURE__ */ t("div", { className: "flex items-center justify-center padding-y-24 text-muted size-sm font-body", children: K }) : /* @__PURE__ */ g("div", { className: "flex flex-col items-center padding-24 ds-gap-12", children: [
      /* @__PURE__ */ t(
        x,
        {
          iconType: ["system", "search"],
          size: 40,
          color: "default-muted"
        }
      ),
      /* @__PURE__ */ g("div", { className: "flex flex-col items-center ds-gap-4 text-center", children: [
        /* @__PURE__ */ t("span", { className: "font-body size-sm line-height-leading-5 font-medium text-subtle", children: ce }),
        /* @__PURE__ */ t("span", { className: "font-body size-xs line-height-leading-4 text-muted", children: de })
      ] })
    ] });
    return /* @__PURE__ */ t(
      De,
      {
        label: C,
        inputId: ee,
        required: D,
        supportText: v,
        caption: j,
        error: z,
        success: T,
        width: fe,
        className: me,
        children: /* @__PURE__ */ t("div", { ref: y, children: /* @__PURE__ */ t(
          R,
          {
            shouldFilter: !1,
            onKeyDown: (e) => {
              s || (e.key === "ArrowDown" || e.key === "ArrowUp" ? w || (e.preventDefault(), b(!0)) : e.key === "Escape" && w && (e.preventDefault(), b(!1)));
            },
            children: /* @__PURE__ */ g(V.Root, { open: w, onOpenChange: b, children: [
              /* @__PURE__ */ t(V.Anchor, { asChild: !0, children: /* @__PURE__ */ g(
                "div",
                {
                  ref: B,
                  role: "combobox",
                  "aria-expanded": w,
                  "aria-haspopup": "listbox",
                  "aria-disabled": s,
                  className: Le,
                  onClick: Ee,
                  children: [
                    !c && i.length === 0 && /* @__PURE__ */ t("div", { className: "flex items-center ds-gap-6 flex-shrink-0", children: /* @__PURE__ */ t(
                      x,
                      {
                        iconType: ["system", "search"],
                        size: 16,
                        color: "default-muted"
                      }
                    ) }),
                    Oe(),
                    !c && i.length === 1 && !U && /* @__PURE__ */ g("div", { className: "flex items-center ds-gap-6 flex-1 min-w-0", children: [
                      p === "avatar" && i[0].avatarSrc && /* @__PURE__ */ t(
                        le,
                        {
                          variant: "userpic",
                          size: "2xs",
                          src: i[0].avatarSrc,
                          alt: i[0].label
                        }
                      ),
                      /* @__PURE__ */ t("span", { className: u("truncate", s ? "text-hint" : "text-default"), children: i[0].label })
                    ] }),
                    /* @__PURE__ */ t(
                      R.Input,
                      {
                        ref: _,
                        value: a,
                        onValueChange: (e) => {
                          E(e), w || b(!0);
                        },
                        onFocus: () => {
                          s || ($(!0), w || b(!0));
                        },
                        placeholder: i.length === 0 || U ? A : "",
                        disabled: s,
                        className: u(
                          "bg-transparent border-none outline-none",
                          k.text,
                          "font-body text-default placeholder:text-hint",
                          s && "cursor-not-allowed",
                          !c && i.length === 1 && !U ? "absolute opacity-0 [width:0] [height:0]" : "flex-1 min-w-[60px]"
                        ),
                        id: ee
                      }
                    ),
                    X && (() => {
                      const { iconType: e, isFill: n } = ae(X);
                      return /* @__PURE__ */ t(
                        x,
                        {
                          iconType: e,
                          size: k.iconSize,
                          color: re,
                          className: "flex-shrink-0",
                          isFill: n
                        }
                      );
                    })(),
                    /* @__PURE__ */ t(
                      x,
                      {
                        iconType: ["arrows", "expand-up-down"],
                        size: k.iconSize,
                        color: re,
                        className: "flex-shrink-0"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ t(V.Portal, { children: /* @__PURE__ */ g(
                V.Content,
                {
                  align: "start",
                  sideOffset: 4,
                  collisionPadding: 8,
                  onOpenAutoFocus: (e) => {
                    e.preventDefault(), _.current?.focus();
                  },
                  onInteractOutside: (e) => {
                    const n = e.target;
                    B.current?.contains(n) && e.preventDefault();
                  },
                  onFocusOutside: (e) => {
                    const n = e.target;
                    B.current?.contains(n) && e.preventDefault();
                  },
                  className: u(
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
                    W.length === 0 ? Ve() : /* @__PURE__ */ g(
                      "div",
                      {
                        ref: L,
                        className: "overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden",
                        style: {
                          maxHeight: ue,
                          scrollbarWidth: "none"
                        },
                        onScroll: q,
                        children: [
                          be && /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: Te,
                              className: "sticky top-0 z-10 flex w-full cursor-default items-center justify-center padding-y-4 bg-card",
                              children: /* @__PURE__ */ t(x, { iconType: ["arrows", "arrow-drop-up"], size: 16, color: "default-muted" })
                            }
                          ),
                          /* @__PURE__ */ t("div", { className: "padding-4", children: /* @__PURE__ */ t(R.List, { children: W.map((e) => /* @__PURE__ */ t(
                            oe,
                            {
                              option: e,
                              selected: H.includes(e.id),
                              variant: p,
                              onSelect: () => Ne(e.id),
                              searchTerm: a,
                              highlightSearch: he
                            },
                            e.id
                          )) }) }),
                          ve && /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: Ie,
                              className: "sticky bottom-0 z-10 flex w-full cursor-default items-center justify-center padding-y-4 bg-card",
                              children: /* @__PURE__ */ t(x, { iconType: ["arrows", "arrow-drop-down"], size: 16, color: "default-muted" })
                            }
                          )
                        ]
                      }
                    ),
                    Fe && /* @__PURE__ */ t("div", { className: "border-t border-default", children: /* @__PURE__ */ g(
                      "button",
                      {
                        type: "button",
                        onClick: ke,
                        className: u(
                          "flex items-center w-full height-36 padding-x-8 ds-gap-6",
                          "bg-transparent hover:bg-state-ghost-hover transition-colors cursor-pointer",
                          "outline-none focus:bg-state-ghost-hover"
                        ),
                        children: [
                          /* @__PURE__ */ t(x, { iconType: ["system", "add"], size: 16, color: "default-muted" }),
                          /* @__PURE__ */ t("span", { className: "flex-1 text-left size-sm font-body text-default", children: ze() }),
                          /* @__PURE__ */ t(x, { iconType: ["arrows", "arrow-drop-right"], size: 16, color: "default-muted" })
                        ]
                      }
                    ) })
                  ]
                }
              ) })
            ] })
          }
        ) })
      }
    );
  }
);
Me.displayName = "Combobox";
export {
  Me as Combobox
};
