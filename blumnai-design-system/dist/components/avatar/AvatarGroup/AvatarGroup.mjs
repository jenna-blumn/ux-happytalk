"use client";
import { jsxs as c, jsx as a } from "react/jsx-runtime";
import { forwardRef as A, useMemo as d } from "react";
import { Avatar as b } from "../Avatar/Avatar.mjs";
import { cn as f } from "../../../utils/cn.mjs";
import { overlaps as x, overlaySizes as N } from "./AvatarGroup.css.mjs";
const S = A(
  ({
    size: n = "md",
    stacking: h = "last-on-top",
    avatars: e,
    max: r,
    className: p,
    ...g
  }, v) => {
    const m = d(() => x[n], [n]), { visibleAvatars: i, remainingCount: l } = d(() => r && e.length > r ? {
      visibleAvatars: e.slice(0, r),
      remainingCount: e.length - r
    } : {
      visibleAvatars: e,
      remainingCount: 0
    }, [e, r]), u = (o, t) => h === "last-on-top" ? o + 1 : t - o, s = N[n];
    return /* @__PURE__ */ c("div", { ref: v, className: f("relative inline-flex items-center shrink-0", p), ...g, children: [
      i.map((o, t) => {
        const y = u(t, i.length);
        return /* @__PURE__ */ a(
          "div",
          {
            className: "relative shrink-0",
            style: {
              zIndex: y,
              marginLeft: t > 0 ? `-${m}px` : 0
            },
            children: /* @__PURE__ */ a(
              b,
              {
                ...o,
                size: n,
                ring: !0
              }
            )
          },
          t
        );
      }),
      l > 0 && /* @__PURE__ */ a(
        "div",
        {
          className: f("relative flex items-center justify-center shrink-0 rounded-full font-body font-medium select-none", "text-muted"),
          style: {
            zIndex: u(i.length, i.length + 1),
            marginLeft: `-${m}px`,
            width: s.width,
            height: s.height,
            fontSize: s.fontSize
          },
          role: "img",
          "aria-label": `${l} more`,
          children: /* @__PURE__ */ c("span", { "aria-hidden": "true", children: [
            "+",
            l
          ] })
        }
      )
    ] });
  }
);
S.displayName = "AvatarGroup";
export {
  S as AvatarGroup
};
