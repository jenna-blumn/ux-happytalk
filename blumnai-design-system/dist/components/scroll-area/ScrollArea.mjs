"use client";
import { jsxs as B, jsx as o } from "react/jsx-runtime";
import * as n from "react";
import * as s from "@radix-ui/react-scroll-area";
import { getPixelValue as d } from "../../lib/css-utils.mjs";
import { useMergeRefs as E } from "../../hooks/use-merge-refs.mjs";
import { cn as g } from "../../utils/cn.mjs";
const F = n.forwardRef(({
  className: i,
  children: e,
  orientation: r = "vertical",
  maxHeight: l,
  maxWidth: t,
  viewportRef: f,
  onScrollPositionChange: p,
  type: x,
  scrollbarSize: u,
  offsetScrollbars: v,
  dir: A,
  style: S,
  ...N
}, j) => {
  const h = n.useRef(null), c = n.useRef(0), V = E(h, f);
  n.useEffect(() => {
    if (!p) return;
    const a = h.current;
    if (!a) return;
    const y = () => {
      c.current && cancelAnimationFrame(c.current), c.current = requestAnimationFrame(() => {
        p({
          x: a.scrollLeft,
          y: a.scrollTop
        });
      });
    };
    return a.addEventListener("scroll", y, { passive: !0 }), () => {
      a.removeEventListener("scroll", y), c.current && cancelAnimationFrame(c.current);
    };
  }, [p]);
  const w = {
    ...S || {},
    ...l !== void 0 && l !== "" ? { maxHeight: d(l) } : {},
    ...t !== void 0 && t !== "" ? { maxWidth: d(t) } : {}
  }, b = {
    ...l !== void 0 && l !== "" ? { maxHeight: d(l) } : {},
    ...t !== void 0 && t !== "" ? { maxWidth: d(t) } : {}
  }, R = v ? u ?? 10 : 0, $ = v ? {
    ...r === "vertical" || r === "both" ? { paddingRight: `${R}px` } : {},
    ...r === "horizontal" || r === "both" ? { paddingBottom: `${R}px` } : {}
  } : {};
  return /* @__PURE__ */ B(
    s.Root,
    {
      ref: j,
      className: g("relative overflow-hidden min-h-0", i),
      style: Object.keys(w).length > 0 ? w : void 0,
      type: x,
      dir: A,
      ...N,
      children: [
        /* @__PURE__ */ o(
          s.Viewport,
          {
            ref: V,
            className: "h-full w-full max-w-full rounded-[inherit]",
            tabIndex: 0,
            style: {
              ...Object.keys(b).length > 0 ? b : {},
              ...$
            },
            children: e
          }
        ),
        (r === "vertical" || r === "both") && /* @__PURE__ */ o(m, { orientation: "vertical", size: u }),
        (r === "horizontal" || r === "both") && /* @__PURE__ */ o(m, { orientation: "horizontal", size: u }),
        /* @__PURE__ */ o(s.Corner, {})
      ]
    }
  );
});
F.displayName = "ScrollArea";
const m = n.forwardRef(({ className: i, orientation: e = "vertical", size: r, style: l, ...t }, f) => /* @__PURE__ */ o(
  s.ScrollAreaScrollbar,
  {
    ref: f,
    orientation: e,
    className: g(
      "flex touch-none select-none transition-colors z-50 cursor-pointer",
      e === "vertical" && "h-full border-l border-l-transparent padding-1",
      e === "horizontal" && "flex-col border-t border-t-transparent padding-1",
      !r && e === "vertical" && "width-10",
      !r && e === "horizontal" && "height-10",
      i
    ),
    style: {
      ...l,
      ...r && e === "vertical" ? { width: `${r}px` } : {},
      ...r && e === "horizontal" ? { height: `${r}px` } : {}
    },
    ...t,
    children: /* @__PURE__ */ o(s.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border cursor-pointer" })
  }
));
m.displayName = "ScrollBar";
export {
  F as ScrollArea,
  m as ScrollBar
};
