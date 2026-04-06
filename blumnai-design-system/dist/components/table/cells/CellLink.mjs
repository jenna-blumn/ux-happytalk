"use client";
import { jsxs as h, jsx as c } from "react/jsx-runtime";
import { useRef as a, useEffect as T, useCallback as s } from "react";
import { useTableTooltipOptional as g } from "../components/useTableTooltip.mjs";
import { cn as v } from "../../../utils/cn.mjs";
import { Icon as b } from "../../icons/Icon/Icon.mjs";
function C({
  href: u,
  label: f,
  tooltip: e,
  external: o = !1,
  className: m
}) {
  const i = f || u, t = a(null), r = g(), n = a(null);
  T(() => () => {
    n.current && clearTimeout(n.current), r?.hideTooltip();
  }, []);
  const l = s(() => typeof e == "boolean" ? i : e, [e, i]), d = s(() => {
    !e || !r || !t.current || (n.current = setTimeout(() => {
      t.current && r.showTooltip(t.current, l());
    }, 200));
  }, [e, r, l]), p = s(() => {
    n.current && (clearTimeout(n.current), n.current = null), r?.hideTooltip();
  }, [r]);
  return /* @__PURE__ */ h(
    "a",
    {
      ref: t,
      href: u,
      target: o ? "_blank" : void 0,
      rel: o ? "noopener noreferrer" : void 0,
      className: v(
        "inline-flex items-center ds-gap-4 truncate group",
        "text-state-primary",
        "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight",
        m
      ),
      onMouseEnter: e ? d : void 0,
      onMouseLeave: e ? p : void 0,
      children: [
        /* @__PURE__ */ c("span", { className: "truncate group-hover:underline", children: i }),
        o && /* @__PURE__ */ c(
          b,
          {
            iconType: ["system", "external-link"],
            size: 12,
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
export {
  C as CellLink
};
