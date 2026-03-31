"use client";
import { jsx as e, jsxs as m, Fragment as he } from "react/jsx-runtime";
import * as o from "react";
import * as r from "@radix-ui/react-select";
import { InputWrapper as me } from "../input/shared/InputWrapper.mjs";
import { SIZE_CONFIG as pe, STYLE_CONFIG as ge, MENU_ITEM_SIZE_CONFIG as G, STATE_CONFIG as Q } from "../../constants/select/Select/Select.constants.mjs";
import { cn as c } from "../../utils/cn.mjs";
import { Icon as p } from "../icons/Icon/Icon.mjs";
import { parseIconTypeWithFill as V } from "../icons/Icon/Icon.types.mjs";
import { Avatar as W } from "../avatar/Avatar/Avatar.mjs";
import { Badge as be } from "../badge/Badge/Badge.mjs";
const xe = ({ color: a = "currentColor" }) => /* @__PURE__ */ e(
  "svg",
  {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e(
      "path",
      {
        d: "M1 4L3 6L7 2",
        stroke: a,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), ye = ({ color: a = "currentColor" }) => /* @__PURE__ */ e(
  "svg",
  {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("circle", { cx: "4", cy: "4", r: "4", fill: a })
  }
), we = r.Root, Le = r.Group, ve = r.Value, Z = o.forwardRef(
  ({
    className: a,
    children: s,
    size: n = "sm",
    selectStyle: g = "default",
    state: d = "default",
    leadIcon: u,
    tailIcon: y,
    ...w
  }, i) => {
    const l = pe[n], b = ge[g], x = d === "disabled", f = x ? "default-disabled" : d === "error" ? "destructive" : d === "success" ? "success" : "default-subtle";
    return /* @__PURE__ */ m(
      r.Trigger,
      {
        ref: i,
        className: c(
          "flex w-full items-center justify-between whitespace-nowrap transition-colors duration-150",
          l.container,
          u ? l.paddingWithLeadIcon : l.padding,
          l.gap,
          l.text,
          "font-body",
          b.base,
          !x && b.focus,
          d === "error" && "border-destructive",
          d === "success" && "border-success",
          x && Q.disabled.bg,
          x && Q.disabled.border,
          x ? "cursor-not-allowed" : "cursor-pointer",
          "data-[placeholder]:text-hint",
          "focus:outline-none",
          "[&>span]:line-clamp-1 [&>span]:text-left",
          a
        ),
        ...w,
        children: [
          u && (() => {
            const { iconType: N, isFill: h } = V(u);
            return /* @__PURE__ */ e(
              p,
              {
                iconType: N,
                size: l.iconSize,
                color: f,
                className: "flex-shrink-0",
                isFill: h
              }
            );
          })(),
          /* @__PURE__ */ e("span", { className: "flex-1 min-w-0", children: s }),
          y && (() => {
            const { iconType: N, isFill: h } = V(y);
            return /* @__PURE__ */ e(
              p,
              {
                iconType: N,
                size: l.iconSize,
                color: f,
                className: "flex-shrink-0",
                isFill: h
              }
            );
          })(),
          /* @__PURE__ */ e(r.Icon, { asChild: !0, children: /* @__PURE__ */ e(
            p,
            {
              iconType: ["arrows", "expand-up-down"],
              size: l.iconSize,
              color: f,
              className: "flex-shrink-0"
            }
          ) })
        ]
      }
    );
  }
);
Z.displayName = r.Trigger.displayName;
const $ = o.forwardRef(({ className: a, ...s }, n) => /* @__PURE__ */ e(
  r.ScrollUpButton,
  {
    ref: n,
    className: c(
      "sticky top-0 z-10 flex cursor-default items-center justify-center padding-y-4 bg-card",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(p, { iconType: ["arrows", "arrow-drop-up"], size: 16, color: "default-muted" })
  }
));
$.displayName = r.ScrollUpButton.displayName;
const q = o.forwardRef(({ className: a, ...s }, n) => /* @__PURE__ */ e(
  r.ScrollDownButton,
  {
    ref: n,
    className: c(
      "sticky bottom-0 z-10 flex cursor-default items-center justify-center padding-y-4 bg-card",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(p, { iconType: ["arrows", "arrow-drop-down"], size: 16, color: "default-muted" })
  }
));
q.displayName = r.ScrollDownButton.displayName;
const K = o.forwardRef(({ className: a, children: s, position: n = "popper", sideOffset: g = 4, maxHeight: d, header: u, ...y }, w) => {
  const i = d ? typeof d == "number" ? `${d}px` : d : "var(--radix-select-content-available-height)";
  return /* @__PURE__ */ e(r.Portal, { children: /* @__PURE__ */ m(
    r.Content,
    {
      ref: w,
      sideOffset: g,
      collisionPadding: 8,
      className: c(
        "relative z-[100] min-w-[128px] overflow-y-auto overflow-x-hidden",
        "bg-card border-default rounded-lg shadow-modal-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-[--radix-select-content-transform-origin]",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        a
      ),
      position: n,
      style: { maxHeight: i },
      ...y,
      children: [
        u && /* @__PURE__ */ e("div", { className: "sticky top-0 z-20 bg-card", children: u }),
        /* @__PURE__ */ e($, { className: u ? "top-[37px]" : void 0 }),
        /* @__PURE__ */ e(
          r.Viewport,
          {
            className: c(
              "padding-4",
              n === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: s
          }
        ),
        /* @__PURE__ */ e(q, {})
      ]
    }
  ) });
});
K.displayName = r.Content.displayName;
const Y = o.forwardRef(({ className: a, ...s }, n) => /* @__PURE__ */ e(
  r.Label,
  {
    ref: n,
    className: c(
      "padding-x-8 padding-y-6 size-sm font-body font-semibold",
      a
    ),
    ...s
  }
));
Y.displayName = r.Label.displayName;
const Ne = o.forwardRef(({ className: a, children: s, ...n }, g) => /* @__PURE__ */ m(
  r.Item,
  {
    ref: g,
    className: c(
      "flex w-full cursor-pointer select-none items-center rounded-sm",
      "padding-6 ds-gap-6",
      "size-sm font-body line-height-leading-5",
      "outline-none",
      "hover:bg-[var(--bg-state-ghost-hover)]",
      "data-[highlighted]:bg-[var(--bg-state-ghost-hover)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      a
    ),
    ...n,
    children: [
      /* @__PURE__ */ e("span", { className: "flex width-20 height-20 items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(r.ItemIndicator, { children: /* @__PURE__ */ e(
        p,
        {
          iconType: ["system", "check"],
          size: 16,
          color: "primary"
        }
      ) }) }),
      /* @__PURE__ */ e(r.ItemText, { children: s })
    ]
  }
));
Ne.displayName = r.Item.displayName;
const J = o.forwardRef(
  ({
    className: a,
    children: s,
    selectType: n = "default",
    leadIcon: g,
    iconColor: d,
    description: u,
    badge: y,
    avatarSrc: w,
    disabled: i,
    isSelected: l,
    ...b
  }, x) => {
    const f = u ? G.large : G.default, N = d ?? (i ? "var(--icon-default-disabled)" : "var(--icon-default)"), h = () => {
      const I = i ? "var(--icon-default-disabled)" : "var(--icon-white-default, #FFF)";
      return n === "checkbox" ? /* @__PURE__ */ e("span", { className: "flex width-20 height-20 items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(
        "span",
        {
          className: c(
            "flex items-center justify-center width-16 height-16 rounded-default transition-colors",
            i ? "bg-checkbox-disabled border-default" : l ? "bg-checkbox-active border-none" : "bg-checkbox-default border-darker"
          ),
          children: l && /* @__PURE__ */ e(xe, { color: I })
        }
      ) }) : n === "radio" ? /* @__PURE__ */ e("span", { className: "flex width-20 height-20 items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(
        "span",
        {
          className: c(
            "flex items-center justify-center width-16 height-16 rounded-full transition-colors",
            i ? "bg-checkbox-disabled border-default" : l ? "bg-checkbox-active border-none" : "bg-checkbox-default border-darker"
          ),
          children: l && /* @__PURE__ */ e(ye, { color: I })
        }
      ) }) : /* @__PURE__ */ e("span", { className: "flex width-20 height-20 items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(r.ItemIndicator, { children: /* @__PURE__ */ e(
        p,
        {
          iconType: ["system", "check"],
          size: 16,
          color: i ? "default-disabled" : "primary"
        }
      ) }) });
    }, v = () => {
      if (w)
        return /* @__PURE__ */ e(
          W,
          {
            variant: "userpic",
            size: u ? "sm" : "2xs",
            src: w,
            alt: typeof s == "string" ? s : "",
            className: "flex-shrink-0"
          }
        );
      if (g) {
        const { iconType: I, isFill: E } = V(g);
        return /* @__PURE__ */ e(
          "div",
          {
            className: c(
              "flex items-center justify-center flex-shrink-0",
              f.iconFrame
            ),
            children: /* @__PURE__ */ e(
              p,
              {
                iconType: I,
                size: f.iconSize,
                color: N,
                isFill: E
              }
            )
          }
        );
      }
      return null;
    }, z = () => y ? /* @__PURE__ */ e(be, { size: "sm", color: "neutral", border: !0, label: y }) : null;
    return /* @__PURE__ */ m(
      r.Item,
      {
        ref: x,
        className: c(
          "group flex w-full select-none items-center rounded-sm outline-none",
          f.height,
          f.padding,
          f.gap,
          "font-body",
          f.text,
          i ? "text-hint cursor-not-allowed" : "text-default cursor-pointer",
          "hover:bg-[var(--bg-state-ghost-hover)]",
          "data-[highlighted]:bg-[var(--bg-state-ghost-hover)]",
          "data-[disabled]:pointer-events-none data-[disabled]:text-hint",
          l && (n === "checkbox" || n === "radio") && "bg-[var(--bg-state-ghost-hover)]",
          a
        ),
        disabled: i,
        ...b,
        children: [
          h(),
          v(),
          /* @__PURE__ */ e(r.ItemText, { className: "flex-1 min-w-0", children: u ? /* @__PURE__ */ m("div", { className: "flex flex-col ds-gap-1", children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: s }),
            /* @__PURE__ */ e(
              "span",
              {
                className: c(
                  "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight truncate",
                  i ? "text-hint" : "text-muted"
                ),
                children: u
              }
            )
          ] }) : /* @__PURE__ */ e("span", { className: "block truncate", children: s }) }),
          z()
        ]
      }
    );
  }
);
J.displayName = "ExtendedSelectItem";
const Se = o.forwardRef(({ className: a, ...s }, n) => /* @__PURE__ */ e(
  r.Separator,
  {
    ref: n,
    className: c("-margin-x-4 margin-y-4 height-1 bg-muted", a),
    ...s
  }
));
Se.displayName = r.Separator.displayName;
const ke = o.forwardRef(
  ({
    variant: a = "default",
    selectStyle: s = "default",
    size: n = "sm",
    selectType: g = "default",
    label: d,
    required: u = !1,
    supportText: y,
    caption: w,
    error: i,
    success: l,
    disabled: b = !1,
    placeholder: x = "Select...",
    leadIcon: f,
    tailIcon: N,
    options: h,
    value: v,
    onChange: z,
    defaultValue: I,
    open: E,
    onOpenChange: M,
    searchable: L = !1,
    searchPlaceholder: P = "Search...",
    noResultsText: X = "No results found",
    maxHeight: H = 300,
    width: ee,
    minWidth: j,
    className: te,
    clearable: re = !1,
    loading: ae = !1,
    optionGroups: F,
    renderOption: _
  }, ne) => {
    const U = o.useId(), [T, O] = o.useState(""), B = o.useRef(null), se = i === !0 || typeof i == "string" && i.length > 0, le = l === !0 || typeof l == "string" && l.length > 0, ie = b ? "disabled" : se ? "error" : le ? "success" : "default", R = o.useMemo(() => {
      if (!L || !T.trim())
        return h;
      const t = T.toLowerCase().trim();
      return h.filter(
        (S) => S.label.toLowerCase().includes(t) || S.description?.toLowerCase().includes(t)
      );
    }, [h, T, L]), C = o.useMemo(() => h.find((t) => t.id === v), [h, v]), oe = o.useCallback(
      (t) => {
        t || O(""), M?.(t);
      },
      [M]
    ), ce = o.useCallback(
      (t) => {
        t.stopPropagation(), t.preventDefault(), z?.("");
      },
      [z]
    ), D = (t) => {
      const S = t.id === v;
      return _ ? /* @__PURE__ */ m(
        r.Item,
        {
          value: t.id,
          textValue: t.label,
          className: c(
            "flex w-full select-none items-center rounded-sm outline-none",
            "padding-6",
            "hover:bg-[var(--bg-state-ghost-hover)]",
            "data-[highlighted]:bg-[var(--bg-state-ghost-hover)]",
            t.disabled && "pointer-events-none opacity-50 cursor-not-allowed",
            !t.disabled && "cursor-pointer"
          ),
          disabled: t.disabled,
          children: [
            /* @__PURE__ */ e(r.ItemText, { className: "sr-only", children: t.label }),
            _(t, S)
          ]
        },
        t.id
      ) : /* @__PURE__ */ e(
        J,
        {
          value: t.id,
          textValue: t.label,
          selectType: g,
          leadIcon: t.leadIcon,
          iconColor: t.iconColor,
          description: t.description,
          badge: t.badge,
          avatarSrc: a === "avatar" ? t.avatarSrc : void 0,
          disabled: t.disabled,
          isSelected: S,
          children: t.label
        },
        t.id
      );
    }, de = () => {
      if (ae)
        return /* @__PURE__ */ e("div", { className: "flex items-center justify-center padding-y-16", children: /* @__PURE__ */ e("div", { className: "width-16 height-16 border-2 border-default border-t-transparent rounded-full motion-safe:animate-spin" }) });
      if (R.length === 0)
        return /* @__PURE__ */ e("div", { className: "flex items-center justify-center padding-y-8 text-muted size-sm font-body", children: X });
      if (F && F.length > 0) {
        const t = new Set(
          F.flatMap((k) => k.optionIds)
        ), S = R.filter(
          (k) => !t.has(k.id)
        );
        return /* @__PURE__ */ m(he, { children: [
          F.map((k) => {
            const A = R.filter(
              (fe) => k.optionIds.includes(fe.id)
            );
            return A.length === 0 ? null : /* @__PURE__ */ m(r.Group, { children: [
              /* @__PURE__ */ e(Y, { children: k.label }),
              A.map(D)
            ] }, k.label);
          }),
          S.map(D)
        ] });
      }
      return R.map(D);
    }, ue = () => C ? a === "avatar" && C.avatarSrc ? /* @__PURE__ */ m("div", { className: "flex items-center ds-gap-6", children: [
      /* @__PURE__ */ e(
        W,
        {
          variant: "userpic",
          size: "2xs",
          src: C.avatarSrc,
          alt: C.label
        }
      ),
      /* @__PURE__ */ e(
        "span",
        {
          className: c("truncate", b ? "text-hint" : "text-default"),
          children: C.label
        }
      )
    ] }) : /* @__PURE__ */ e("span", { className: c("truncate", b ? "text-hint" : "text-default"), children: C.label }) : x;
    return /* @__PURE__ */ e(
      me,
      {
        label: d,
        inputId: U,
        required: u,
        supportText: y,
        caption: w,
        error: i,
        success: l,
        width: ee,
        className: te,
        children: /* @__PURE__ */ e("div", { ref: ne, className: "relative", style: j ? { minWidth: typeof j == "number" ? `${j}px` : j } : void 0, children: /* @__PURE__ */ m(
          we,
          {
            value: v,
            onValueChange: z,
            defaultValue: I,
            open: E,
            onOpenChange: oe,
            disabled: b,
            children: [
              /* @__PURE__ */ e(
                Z,
                {
                  id: U,
                  size: n,
                  selectStyle: s,
                  state: ie,
                  leadIcon: f,
                  tailIcon: N,
                  children: v ? ue() : /* @__PURE__ */ e(ve, { placeholder: x })
                }
              ),
              re && v && !b && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "Clear selection",
                  onClick: ce,
                  className: "absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center width-16 height-16 text-muted hover:text-default z-10",
                  children: /* @__PURE__ */ e(p, { iconType: ["system", "close"], size: 12 })
                }
              ),
              /* @__PURE__ */ e(
                K,
                {
                  maxHeight: H,
                  header: L ? /* @__PURE__ */ e("div", { className: "border-b border-default", children: /* @__PURE__ */ m("div", { className: "flex items-center ds-gap-2 padding-x-8 height-36", children: [
                    /* @__PURE__ */ e("div", { className: "flex items-center justify-center width-20 height-20 flex-shrink-0", children: /* @__PURE__ */ e(p, { iconType: ["system", "search"], size: 16, color: "default-muted" }) }),
                    /* @__PURE__ */ e(
                      "input",
                      {
                        ref: B,
                        type: "text",
                        role: "searchbox",
                        "aria-label": P || "Search options",
                        value: T,
                        onChange: (t) => {
                          O(t.target.value), setTimeout(() => B.current?.focus(), 0);
                        },
                        placeholder: P,
                        className: "flex-1 bg-transparent border-none outline-none size-sm line-height-leading-5 letter-spacing-tracking-tight font-body text-default placeholder:text-hint",
                        onClick: (t) => t.stopPropagation(),
                        onKeyDown: (t) => {
                          ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(t.key) || t.stopPropagation();
                        },
                        autoFocus: !0
                      }
                    ),
                    T && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: (t) => {
                          t.stopPropagation(), O(""), setTimeout(() => B.current?.focus(), 0);
                        },
                        className: "flex items-center justify-center width-20 height-20 flex-shrink-0 text-muted hover:text-default",
                        children: /* @__PURE__ */ e(p, { iconType: ["system", "close"], size: 14 })
                      }
                    )
                  ] }) }) : void 0,
                  children: de()
                }
              )
            ]
          }
        ) })
      }
    );
  }
);
ke.displayName = "ExtendedSelect";
export {
  ke as ExtendedSelect,
  J as ExtendedSelectItem,
  we as Select,
  K as SelectContent,
  Le as SelectGroup,
  Ne as SelectItem,
  Y as SelectLabel,
  q as SelectScrollDownButton,
  $ as SelectScrollUpButton,
  Se as SelectSeparator,
  Z as SelectTrigger,
  ve as SelectValue
};
