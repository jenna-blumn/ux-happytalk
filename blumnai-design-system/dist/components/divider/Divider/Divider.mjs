"use client";
import { jsx as t, jsxs as i, Fragment as l } from "react/jsx-runtime";
import { forwardRef as L } from "react";
import { cn as n } from "../../../utils/cn.mjs";
import { Button as S } from "../../button/Button.mjs";
import { ICON_CONTAINER as x, ICON_COLOR as D, ICON_SIZE as B, LINE_DASHED as V, LINE_VERTICAL as z, LINE_BASE as F, CONTENT_TEXT as H, CONTENT_BASE as g, CONTAINER_VERTICAL as j, CONTAINER_BASE as k, CONTAINER_VERTICAL_WITH_CONTENT as w, CONTAINER_WITH_CONTENT as X } from "../../../constants/divider/Divider/Divider.constants.mjs";
import { parseIconTypeWithFill as Z } from "../../icons/Icon/Icon.types.mjs";
import { Icon as b } from "../../icons/Icon/Icon.mjs";
const q = L(
  ({
    type: r = "default",
    orientation: a = "horizontal",
    lineStyle: u = "default",
    label: N,
    icon: d,
    buttonLabel: m,
    buttonLeadIcon: _,
    buttonTailIcon: O,
    buttonBadge: p,
    onButtonClick: v,
    children: C,
    className: I,
    ...T
  }, E) => {
    const A = u === "dashed", o = a === "vertical", s = n(
      o ? z : F,
      A && V
    ), h = n(
      g,
      H
    ), e = (() => {
      if (C)
        return /* @__PURE__ */ t("span", { className: h, children: C });
      if (r.startsWith("text-") && N)
        return /* @__PURE__ */ t("span", { className: h, children: N });
      if (r.startsWith("icon-") && d) {
        const { iconType: R, isFill: W } = Z(d);
        return /* @__PURE__ */ t("span", { className: x, children: /* @__PURE__ */ t(b, { iconType: R, isFill: W, size: B, color: D }) });
      }
      return r.startsWith("button-") && m ? /* @__PURE__ */ t(
        S,
        {
          size: "xs",
          buttonStyle: "secondary",
          leadIcon: _,
          tailIcon: O,
          shortcut: p,
          onClick: v,
          children: m
        }
      ) : null;
    })(), c = r.split("-")[1], f = r.startsWith("button-");
    return r === "default" || !e ? /* @__PURE__ */ t(
      "div",
      {
        ref: E,
        role: "separator",
        "aria-orientation": a,
        className: n(o ? j : k, I),
        ...T,
        children: /* @__PURE__ */ t("div", { className: s })
      }
    ) : /* @__PURE__ */ i(
      "div",
      {
        ref: E,
        role: f ? "presentation" : "separator",
        "aria-orientation": f ? void 0 : a,
        className: n(o ? w : X, I),
        ...T,
        children: [
          c === "left" && /* @__PURE__ */ i(l, { children: [
            e,
            /* @__PURE__ */ t("div", { className: s })
          ] }),
          c === "center" && /* @__PURE__ */ i(l, { children: [
            /* @__PURE__ */ t("div", { className: s }),
            e,
            /* @__PURE__ */ t("div", { className: s })
          ] }),
          c === "right" && /* @__PURE__ */ i(l, { children: [
            /* @__PURE__ */ t("div", { className: s }),
            e
          ] })
        ]
      }
    );
  }
);
q.displayName = "Divider";
export {
  q as Divider
};
