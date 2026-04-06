"use client";
import { jsx as e, jsxs as g } from "react/jsx-runtime";
import * as f from "react";
import { useState as v } from "react";
import { Panel as P, Group as C, Separator as N } from "react-resizable-panels";
import { cn as l } from "../../utils/cn.mjs";
import { Icon as o } from "../icons/Icon/Icon.mjs";
const k = () => /* @__PURE__ */ g(
  "svg",
  {
    width: "6",
    height: "14",
    viewBox: "0 0 6 14",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ e("circle", { cx: "1.5", cy: "1.5", r: "1.5" }),
      /* @__PURE__ */ e("circle", { cx: "1.5", cy: "7", r: "1.5" }),
      /* @__PURE__ */ e("circle", { cx: "1.5", cy: "12.5", r: "1.5" }),
      /* @__PURE__ */ e("circle", { cx: "4.5", cy: "1.5", r: "1.5" }),
      /* @__PURE__ */ e("circle", { cx: "4.5", cy: "7", r: "1.5" }),
      /* @__PURE__ */ e("circle", { cx: "4.5", cy: "12.5", r: "1.5" })
    ]
  }
), T = ({
  onClick: a,
  isCollapsed: r,
  direction: i,
  orientation: n,
  position: t = "center"
}) => {
  const c = () => n === "horizontal" ? i === "before" ? r ? /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-right"], size: 12 }) : /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-left"], size: 12 }) : r ? /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-left"], size: 12 }) : /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-right"], size: 12 }) : i === "before" ? r ? /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-down"], size: 12 }) : /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-up"], size: 12 }) : r ? /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-up"], size: 12 }) : /* @__PURE__ */ e(o, { iconType: ["arrows", "arrow-drop-down"], size: 12 }), d = () => {
    if (typeof t == "number")
      return n === "horizontal" ? { top: `${t}px` } : { left: `${t}px` };
  };
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: (u) => {
        u.stopPropagation(), a();
      },
      className: l(
        "z-20 absolute flex items-center justify-center cursor-pointer",
        "width-16 height-16 rounded-full",
        "bg-card border-darker hover:bg-subtle",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-highlight",
        "text-muted hover:text-default",
        (() => {
          if (typeof t == "number")
            return "";
          if (n === "horizontal")
            switch (t) {
              case "start":
                return "top-[16px]";
              case "end":
                return "bottom-[16px]";
              default:
                return "top-1/2 -translate-y-1/2";
            }
          switch (t) {
            case "start":
              return "left-[16px]";
            case "end":
              return "right-[16px]";
            default:
              return "left-1/2 -translate-x-1/2";
          }
        })()
      ),
      style: d(),
      "aria-expanded": !r,
      "aria-label": r ? "Expand panel" : "Collapse panel",
      children: c()
    }
  );
}, m = f.createContext({
  orientation: "horizontal"
}), R = f.forwardRef(({ className: a, orientation: r = "horizontal", ...i }, n) => /* @__PURE__ */ e(m.Provider, { value: { orientation: r }, children: /* @__PURE__ */ e(
  C,
  {
    className: l("flex h-full w-full", a),
    elementRef: n,
    orientation: r,
    ...i
  }
) }));
R.displayName = "ResizablePanelGroup";
const j = P;
j.displayName = "ResizablePanel";
const G = ({
  withHandle: a,
  variant: r = "line",
  collapseButton: i,
  collapseButtonPosition: n = "center",
  panelRef: t,
  isCollapsed: c,
  onCollapseChange: d,
  className: p,
  ...u
}) => {
  const x = r === "hidden", [w, y] = v(!1), h = c ?? w, { orientation: s } = f.useContext(m), z = () => {
    if (!t?.current) return;
    h ? t.current.expand() : t.current.collapse();
    const b = !h;
    y(b), d?.(b);
  };
  return /* @__PURE__ */ g(
    N,
    {
      className: l(
        "group/handle relative flex items-center justify-center overflow-visible",
        "after:absolute after:transition-colors after:duration-150",
        s === "horizontal" ? "after:inset-y-0 after:left-1/2 after:w-[2px] after:-translate-x-1/2" : "after:inset-x-0 after:top-1/2 after:h-[2px] after:-translate-y-1/2",
        "focus-visible:outline-none focus-visible:after:bg-border-highlight",
        x ? "after:bg-transparent hover:after:bg-muted active:after:bg-border-darker" : "after:bg-muted hover:after:bg-border-darker active:after:bg-border-strong",
        p
      ),
      ...u,
      children: [
        a && r === "pill" && /* @__PURE__ */ e(
          "div",
          {
            className: l(
              "z-10 rounded-full",
              s === "horizontal" ? "width-4 height-32" : "width-32 height-4",
              "bg-muted group-hover/handle:bg-border-darker group-active/handle:bg-border-strong",
              "transition-colors duration-150"
            )
          }
        ),
        a && r === "dots" && /* @__PURE__ */ e(
          "div",
          {
            className: l(
              "z-10 flex items-center justify-center",
              s === "horizontal" ? "width-16 height-24" : "width-24 height-16",
              "rounded-sm",
              "bg-card border-darker",
              "text-hint group-hover/handle:text-muted",
              "transition-colors duration-150"
            ),
            children: /* @__PURE__ */ e("div", { className: s === "vertical" ? "rotate-90" : "", children: /* @__PURE__ */ e(k, {}) })
          }
        ),
        a && r === "line" && /* @__PURE__ */ e(
          "div",
          {
            className: l(
              "z-10 rounded-full",
              s === "horizontal" ? "width-8 height-32" : "width-32 height-8",
              "bg-border-darker group-hover/handle:bg-border-strong",
              "transition-colors duration-150"
            )
          }
        ),
        i && t && /* @__PURE__ */ e(
          T,
          {
            onClick: z,
            isCollapsed: h,
            direction: i,
            orientation: s,
            position: n
          }
        )
      ]
    }
  );
};
G.displayName = "ResizableHandle";
export {
  G as ResizableHandle,
  j as ResizablePanel,
  R as ResizablePanelGroup
};
