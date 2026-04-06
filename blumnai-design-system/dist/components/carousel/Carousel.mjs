"use client";
import { jsx as n, jsxs as T } from "react/jsx-runtime";
import * as t from "react";
import j from "embla-carousel-react";
import { ControlButton as E } from "../button/ControlButton.mjs";
import { cn as f } from "../../utils/cn.mjs";
const P = t.createContext(null);
function N() {
  const r = t.useContext(P);
  if (!r)
    throw new Error("useCarousel must be used within a <Carousel />");
  return r;
}
const A = t.forwardRef(
  ({
    orientation: r = "horizontal",
    opts: l,
    setApi: a,
    plugins: c,
    gap: o = 16,
    className: s,
    children: u,
    ...d
  }, m) => {
    const [i, e] = j(
      {
        ...l,
        axis: r === "horizontal" ? "x" : "y"
      },
      c
    ), [h, w] = t.useState(!1), [g, R] = t.useState(!1), C = t.useCallback((p) => {
      p && (w(p.canScrollPrev()), R(p.canScrollNext()));
    }, []), b = t.useCallback(() => {
      e?.scrollPrev();
    }, [e]), v = t.useCallback(() => {
      e?.scrollNext();
    }, [e]), k = t.useCallback(
      (p) => {
        const S = p.target, y = S.tagName;
        if (y === "INPUT" || y === "TEXTAREA" || y === "SELECT" || S.isContentEditable)
          return;
        const I = r === "vertical" ? "ArrowUp" : "ArrowLeft", D = r === "vertical" ? "ArrowDown" : "ArrowRight";
        p.key === I ? (p.preventDefault(), b()) : p.key === D && (p.preventDefault(), v());
      },
      [b, v, r]
    );
    t.useEffect(() => {
      e && a && a(e);
    }, [e, a]), t.useEffect(() => {
      if (e)
        return C(e), e.on("reInit", C), e.on("select", C), () => {
          e.off("select", C), e.off("reInit", C);
        };
    }, [e, C]);
    const x = r || (l?.axis === "y" ? "vertical" : "horizontal"), z = t.useMemo(
      () => ({
        carouselRef: i,
        api: e,
        opts: l,
        orientation: x,
        gap: o,
        scrollPrev: b,
        scrollNext: v,
        canScrollPrev: h,
        canScrollNext: g
      }),
      [i, e, l, x, o, b, v, h, g]
    );
    return /* @__PURE__ */ n(P.Provider, { value: z, children: /* @__PURE__ */ n(
      "div",
      {
        ref: m,
        onKeyDownCapture: k,
        className: f("relative", s),
        role: "region",
        "aria-roledescription": "carousel",
        ...d,
        children: u
      }
    ) });
  }
);
A.displayName = "Carousel";
const K = t.forwardRef(({ className: r, style: l, children: a, ...c }, o) => {
  const { carouselRef: s, orientation: u, gap: d } = N(), m = t.Children.toArray(a), i = m.length, e = m.map((h, w) => t.isValidElement(h) ? t.cloneElement(h, {
    "data-slide-index": w,
    "data-slide-count": i
  }) : h);
  return /* @__PURE__ */ n("div", { ref: s, className: "overflow-hidden", children: /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: f(
        "flex",
        u === "horizontal" ? "flex-row" : "flex-col",
        r
      ),
      style: { gap: d, ...l },
      ...c,
      children: e
    }
  ) });
});
K.displayName = "CarouselContent";
const V = t.forwardRef(({ className: r, ...l }, a) => /* @__PURE__ */ n("div", { ref: a, className: f("relative", r), ...l }));
V.displayName = "CarouselViewport";
const $ = t.forwardRef(
  ({ className: r, "data-slide-index": l, "data-slide-count": a, "aria-label": c, ...o }, s) => {
    const u = c ?? (l !== void 0 && a !== void 0 ? `${l + 1} of ${a}` : void 0);
    return /* @__PURE__ */ n(
      "div",
      {
        ref: s,
        role: "group",
        "aria-roledescription": "slide",
        "aria-label": u,
        className: f("min-w-0 shrink-0 grow-0 basis-full", r),
        ...o
      }
    );
  }
);
$.displayName = "CarouselItem";
const L = t.forwardRef(({ className: r, style: l, ...a }, c) => {
  const { orientation: o, scrollPrev: s, canScrollPrev: u, opts: d } = N(), m = d?.loop ? !1 : !u, i = o === "horizontal" ? { left: -20, top: "50%", transform: "translateY(-50%)" } : { top: -20, left: "50%", transform: "translateX(-50%) rotate(90deg)" };
  return /* @__PURE__ */ n(
    E,
    {
      ref: c,
      icon: ["arrows", "arrow-left"],
      shape: "circle",
      size: "lg",
      disabled: m,
      onClick: s,
      "aria-label": "Previous slide",
      className: f("absolute", r),
      style: { ...i, ...l },
      ...a
    }
  );
});
L.displayName = "CarouselPrevious";
const X = t.forwardRef(({ className: r, style: l, ...a }, c) => {
  const { orientation: o, scrollNext: s, canScrollNext: u, opts: d } = N(), m = d?.loop ? !1 : !u, i = o === "horizontal" ? { right: -20, top: "50%", transform: "translateY(-50%)" } : { bottom: -20, left: "50%", transform: "translateX(-50%) rotate(90deg)" };
  return /* @__PURE__ */ n(
    E,
    {
      ref: c,
      icon: ["arrows", "arrow-right"],
      shape: "circle",
      size: "lg",
      disabled: m,
      onClick: s,
      "aria-label": "Next slide",
      className: f("absolute", r),
      style: { ...i, ...l },
      ...a
    }
  );
});
X.displayName = "CarouselNext";
const G = t.forwardRef(({ className: r, variant: l = "dot", ...a }, c) => {
  const { api: o } = N(), [s, u] = t.useState(0), [d, m] = t.useState([]);
  return t.useEffect(() => {
    if (!o) return;
    m(o.scrollSnapList());
    const i = () => {
      u(o.selectedScrollSnap());
    };
    return o.on("select", i), i(), () => {
      o.off("select", i);
    };
  }, [o]), l === "dot" ? /* @__PURE__ */ n(
    "div",
    {
      ref: c,
      role: "tablist",
      "aria-label": "Slides",
      className: f("flex items-center justify-center ds-gap-8", r),
      ...a,
      children: d.map((i, e) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          role: "tab",
          className: f(
            "width-10 height-10 rounded-full transition-colors cursor-pointer",
            e === s ? "bg-state-primary" : "bg-state-soft hover:bg-state-soft-hover"
          ),
          onClick: () => o?.scrollTo(e),
          "aria-label": `Go to slide ${e + 1}`,
          "aria-selected": e === s
        },
        e
      ))
    }
  ) : l === "line" ? /* @__PURE__ */ n(
    "div",
    {
      ref: c,
      role: "tablist",
      "aria-label": "Slides",
      className: f("flex items-center justify-center ds-gap-4", r),
      ...a,
      children: d.map((i, e) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          role: "tab",
          className: f(
            "height-4 rounded-full transition-all cursor-pointer",
            e === s ? "width-24 bg-state-primary" : "width-16 bg-state-soft hover:bg-state-soft-hover"
          ),
          onClick: () => o?.scrollTo(e),
          "aria-label": `Go to slide ${e + 1}`,
          "aria-selected": e === s
        },
        e
      ))
    }
  ) : /* @__PURE__ */ T(
    "div",
    {
      ref: c,
      className: f(
        "flex items-center justify-center ds-gap-4 font-body size-sm",
        r
      ),
      ...a,
      children: [
        /* @__PURE__ */ n("span", { className: "text-default font-medium", children: s + 1 }),
        /* @__PURE__ */ n("span", { className: "text-muted", children: "/" }),
        /* @__PURE__ */ n("span", { className: "text-muted", children: d.length })
      ]
    }
  );
});
G.displayName = "CarouselIndicators";
export {
  A as Carousel,
  K as CarouselContent,
  G as CarouselIndicators,
  $ as CarouselItem,
  X as CarouselNext,
  L as CarouselPrevious,
  V as CarouselViewport,
  N as useCarousel
};
