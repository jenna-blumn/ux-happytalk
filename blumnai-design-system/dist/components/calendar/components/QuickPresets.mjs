"use client";
import { jsx as i } from "react/jsx-runtime";
import { useRef as f, useCallback as d } from "react";
import { cn as c } from "../../../utils/cn.mjs";
const g = ({
  presets: o,
  onSelect: u,
  selectedIndex: l,
  disabled: n = !1,
  className: h
}) => {
  const s = f([]), b = d((t, r) => {
    let e = null;
    switch (t.key) {
      case "ArrowDown":
        t.preventDefault(), e = r < o.length - 1 ? r + 1 : 0;
        break;
      case "ArrowUp":
        t.preventDefault(), e = r > 0 ? r - 1 : o.length - 1;
        break;
      case "Home":
        t.preventDefault(), e = 0;
        break;
      case "End":
        t.preventDefault(), e = o.length - 1;
        break;
    }
    e !== null && s.current[e]?.focus();
  }, [o.length]);
  return /* @__PURE__ */ i(
    "div",
    {
      role: "listbox",
      "aria-label": "Quick presets",
      className: c(
        "flex flex-col ds-gap-4 padding-8",
        "w-[160px] self-stretch",
        "border-r-default",
        h
      ),
      children: o.map((t, r) => {
        const e = l === r;
        return /* @__PURE__ */ i(
          "button",
          {
            ref: (a) => {
              s.current[r] = a;
            },
            type: "button",
            role: "option",
            "aria-selected": e,
            tabIndex: e || l === void 0 && r === 0 ? 0 : -1,
            disabled: n,
            onClick: () => u(t),
            onKeyDown: (a) => b(a, r),
            className: c(
              "padding-x-8 padding-y-4 rounded-xs text-left",
              "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight font-medium",
              "transition-colors whitespace-nowrap",
              "focus-visible:outline-none",
              n ? "text-hint cursor-not-allowed" : e ? "cursor-pointer bg-state-brand text-white-default hover:bg-state-brand-hover" : "cursor-pointer text-subtle hover:bg-state-ghost-hover focus-visible:[box-shadow:0_0_0_2px_var(--border-highlight-accent)]"
            ),
            style: { height: "28px" },
            children: t.label
          },
          t.label
        );
      })
    }
  );
};
g.displayName = "QuickPresets";
export {
  g as QuickPresets
};
