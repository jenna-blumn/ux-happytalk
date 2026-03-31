"use client";
import { jsxs as N, jsx as t } from "react/jsx-runtime";
import { forwardRef as I, useMemo as j } from "react";
import T from "../../../assets/avatar-placeholder-icon.png.mjs";
import { cn as m } from "../../../utils/cn.mjs";
import { parseIconTypeWithFill as _ } from "../../icons/Icon/Icon.types.mjs";
import { Icon as p } from "../../icons/Icon/Icon.mjs";
const B = T, E = (e, i) => e === "neutral" ? i ? "bg-badge-default" : "bg-badge-gray" : `bg-badge-${e}`, S = (e) => e === "neutral" ? "var(--text-subtle)" : `var(--bg-basic-${e}-strong)`, A = (e) => e === "neutral" ? "var(--text-subtle)" : `var(--bg-basic-${e}-accent)`, f = (e) => e === "neutral" ? "var(--icon-default-muted)" : `var(--bg-basic-${e}-strong)`, F = I(({
  variant: e = "default",
  size: i = "sm",
  color: r = "neutral",
  shape: c = "rounded",
  border: a = !1,
  closeIcon: h = !1,
  closeDisabled: l = !1,
  label: u,
  icon: g,
  image: b,
  imageAlt: x,
  onClose: y,
  className: o,
  style: $,
  ...k
}, C) => {
  const v = j(() => {
    const n = [
      "relative inline-flex items-center justify-center",
      'font-["Spoqa_Han_Sans_Neo",sans-serif] font-medium select-none whitespace-nowrap'
    ];
    return i === "sm" ? n.push("min-height-20 padding-y-2 padding-x-2 size-xs line-height-leading-4 letter-spacing-tracking-normal") : n.push("min-height-24 padding-y-4 padding-x-4 size-sm line-height-leading-4 letter-spacing-tracking-normal"), c === "pill" ? n.push("rounded-full") : n.push("rounded-sm"), n.push(E(r, a)), a && n.push("border-badge-default"), o && n.push(o), m(...n);
  }, [i, c, r, a, o]), s = i === "sm" ? 12 : 14, d = e === "icon" && g ? _(g) : null, w = { color: S(r), ...$ };
  return /* @__PURE__ */ N("div", { ref: C, className: v, style: w, ...k, children: [
    d && /* @__PURE__ */ t("span", { className: `inline-flex items-center shrink-0 leading-none margin-${i !== "sm" ? "1" : "2"}`, children: /* @__PURE__ */ t(p, { iconType: d.iconType, size: s, color: f(r), isFill: d.isFill }) }),
    e === "image" && /* @__PURE__ */ t(
      "span",
      {
        className: "inline-flex items-center shrink-0 overflow-hidden rounded-full leading-none border-darker",
        style: {
          width: `${s}px`,
          height: `${s}px`,
          marginLeft: "2px"
        },
        children: /* @__PURE__ */ t(
          "img",
          {
            src: b || B,
            alt: x ?? "",
            className: "object-cover rounded-full"
          }
        )
      }
    ),
    e === "dot" && /* @__PURE__ */ t(
      "span",
      {
        className: `inline-flex items-center shrink-0 rounded-full leading-none margin-${i !== "sm" ? "4" : "5"}`,
        style: {
          width: `${s - 6}px`,
          height: `${s - 6}px`,
          backgroundColor: A(r)
        }
      }
    ),
    (e === "default" || u) && /* @__PURE__ */ t("span", { className: `shrink-0 leading-none padding-l-${e === "dot" || e === "icon" ? "2" : "4"} padding-r-4`, children: u }),
    h && /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: m(
          "flex items-center justify-center shrink-0 padding-0 border-0 bg-transparent focus:outline-none focus-visible:shadow-component-misc-focus rounded-full",
          l ? "cursor-not-allowed opacity-40" : "cursor-pointer hover:opacity-80"
        ),
        onClick: y,
        disabled: l,
        "aria-disabled": l,
        "aria-label": "Close badge",
        children: /* @__PURE__ */ t(p, { iconType: ["system", "close"], size: s, color: f(r) })
      }
    )
  ] });
});
F.displayName = "Badge";
export {
  F as Badge
};
