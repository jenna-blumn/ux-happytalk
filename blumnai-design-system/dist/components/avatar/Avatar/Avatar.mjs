"use client";
import { jsxs as R, jsx as t } from "react/jsx-runtime";
import { forwardRef as Z, useState as j, useMemo as o } from "react";
import v from "../../../assets/avatar-placeholder-icon.png.mjs";
import { IMAGE_CONTAINER_BG_CLASSES as F, IMAGE_WRAPPER_CLASSES as f, IMAGE_CLASSES as u, CONTAINER_SIZE_CLASSES as V, CONTAINER_BASE_CLASSES as W, RING_SIZE_CLASSES as k, RING_BASE_CLASSES as X, RING_BG_CLASS as q, RING_SHAPE_CLASSES_CIRCULAR as J, RING_ROUNDED_RADIUS_CLASSES as K, IMAGE_CONTAINER_BORDER_CLASS as Q, IMAGE_CONTAINER_SHAPE_CLASSES as $, IMAGE_SIZE_CLASSES as z, IMAGE_CONTAINER_BASE_CLASSES as rr, INITIALS_VERTICAL_OFFSET as sr, INITIALS_LETTER_SPACING as Sr, INITIALS_TYPOGRAPHY_CLASSES as tr, INITIALS_POSITION_CLASSES as er, INITIALS_TEXT_BASE_CLASSES as or } from "../../../constants/avatar/Avatar/Avatar.constants.mjs";
import { cn as a } from "../../../utils/cn.mjs";
import { AvatarBadge as nr } from "./AvatarBadge.mjs";
import { AspectRatio as T } from "../../aspect-ratio/AspectRatio.mjs";
const lr = v, Ar = Z(
  ({
    variant: S = "initials",
    size: r = "md",
    shape: n = "circular",
    initials: i,
    src: l,
    alt: p,
    color: e,
    ring: G = !1,
    status: _,
    logoImage: g,
    icon: O,
    badgeLocation: h = "top",
    onError: P,
    onLoad: M,
    className: C,
    ...B
  }, x) => {
    const [c, m] = j({ src: l, error: !1 });
    c.src !== l && m({ src: l, error: !1 });
    const N = c.error, D = (s) => m((A) => ({ ...A, error: s })), E = o(() => {
      if (!i) return "";
      const s = i.trim();
      if (!s) return "";
      const L = ["2xs", "xs", "sm", "md"].includes(r) ? 1 : 2, I = s.split(/\s+/);
      return I.length >= 2 && L === 2 ? (I[0][0] + I[1][0]).toUpperCase() : s.toUpperCase().slice(0, L);
    }, [i, r]), U = o(
      () => a(W, V[r], C),
      [r, C]
    ), w = o(
      () => a(X, k[r]),
      [r]
    ), y = o(() => {
      const s = n === "circular" ? J : K[r];
      return a("w-full h-full", s, q);
    }, [n, r]), H = o(() => {
      const s = F[S];
      let A = s.default;
      return S === "initials" && e && (A = s.withColor || ""), a(
        rr,
        z[r],
        $[n],
        Q,
        A
      );
    }, [r, n, S, e]), b = o(() => {
      if (S === "initials" && e)
        return { backgroundColor: e };
    }, [S, e]), d = o(
      () => a(
        or,
        er[r],
        tr[r],
        Sr[r],
        sr[r]
      ),
      [r]
    ), Y = o(() => {
      if (e)
        return e;
      if (S === "initials")
        return "#6f6f77";
    }, [S, e]);
    return /* @__PURE__ */ R("div", { ref: x, className: U, ...B, children: [
      G && /* @__PURE__ */ t("div", { className: w, children: /* @__PURE__ */ t("div", { className: y }) }),
      /* @__PURE__ */ R("div", { className: H, style: b, children: [
        S === "initials" && E && /* @__PURE__ */ t("span", { className: d, children: E }),
        S === "userpic" && l && !N && /* @__PURE__ */ t("div", { className: f, children: /* @__PURE__ */ t(T, { ratio: 1, children: /* @__PURE__ */ t(
          "img",
          {
            src: l,
            alt: p || "",
            className: u,
            onError: (s) => {
              D(!0), P?.(s);
            },
            onLoad: M
          }
        ) }) }),
        S === "userpic" && N && E && /* @__PURE__ */ t("span", { className: d, children: E }),
        S === "empty" && /* @__PURE__ */ t("div", { className: f, children: /* @__PURE__ */ t(T, { ratio: 1, children: /* @__PURE__ */ t("img", { src: lr, alt: "", className: u }) }) })
      ] }),
      _ && /* @__PURE__ */ t(
        nr,
        {
          status: _,
          size: r,
          shape: n,
          badgeLocation: h,
          logoImage: g,
          icon: O,
          color: Y
        }
      )
    ] });
  }
);
Ar.displayName = "Avatar";
export {
  Ar as Avatar
};
