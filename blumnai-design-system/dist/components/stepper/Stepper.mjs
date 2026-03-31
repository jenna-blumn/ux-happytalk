"use client";
import { jsx as i, jsxs as m, Fragment as _ } from "react/jsx-runtime";
import { forwardRef as O, useMemo as R, createContext as D, useContext as f, useCallback as z } from "react";
import { cn as r } from "../../utils/cn.mjs";
import { Icon as I } from "../icons/Icon/Icon.mjs";
const g = D({
  orientation: "horizontal",
  indicatorType: "number",
  size: "md",
  color: "blue",
  horizontalAlign: "center",
  verticalAlign: "left",
  indicatorPosition: "top",
  clickable: !1,
  showCheckOnCompleted: !1,
  totalSteps: 0
}), C = {
  sm: "width-24 height-24",
  md: "width-32 height-32",
  lg: "width-40 height-40"
}, P = {
  sm: "size-xs line-height-leading-4",
  md: "size-sm line-height-leading-5",
  lg: "size-md line-height-leading-6"
}, S = {
  sm: 14,
  md: 16,
  lg: 20
}, u = {
  gray: "bg-basic-gray-accent",
  red: "bg-basic-red-accent",
  orange: "bg-basic-orange-accent",
  amber: "bg-basic-amber-accent",
  yellow: "bg-basic-yellow-accent",
  lime: "bg-basic-lime-accent",
  green: "bg-basic-green-accent",
  emerald: "bg-basic-emerald-accent",
  teal: "bg-basic-teal-accent",
  cyan: "bg-basic-cyan-accent",
  sky: "bg-basic-sky-accent",
  blue: "bg-basic-blue-accent",
  indigo: "bg-basic-indigo-accent",
  violet: "bg-basic-violet-accent",
  purple: "bg-basic-purple-accent",
  fuchsia: "bg-basic-fuchsia-accent",
  pink: "bg-basic-pink-accent",
  rose: "bg-basic-rose-accent"
};
function M(e, c, t) {
  return t.error ? "error" : e < c ? "completed" : e === c ? "active" : "pending";
}
function j({
  index: e,
  status: c
}) {
  const { size: t, color: n, showCheckOnCompleted: o, clickable: a } = f(g), s = c === "completed" && o, h = r(
    c === "active" && u[n],
    c === "completed" && u[n],
    c === "error" && "bg-basic-red-accent",
    c === "pending" && "bg-subtle border-darker"
  ), l = r(
    c === "pending" ? "text-default" : "text-white"
  );
  return /* @__PURE__ */ i(
    "div",
    {
      className: r(
        "flex items-center justify-center rounded-full shrink-0 transition-opacity",
        "font-body font-semibold",
        C[t],
        P[t],
        h,
        l,
        a && "group-hover/step:opacity-80"
      ),
      children: s ? /* @__PURE__ */ i(I, { iconType: ["system", "check"], size: S[t] }) : e + 1
    }
  );
}
function E({
  status: e,
  icon: c
}) {
  const { size: t, color: n, showCheckOnCompleted: o, clickable: a } = f(g), s = ["system", "check"], l = e === "completed" && o ? s : c ?? s, d = r(
    e === "active" && u[n],
    e === "completed" && u[n],
    e === "error" && "bg-basic-red-accent",
    e === "pending" && "bg-subtle border-darker"
  ), b = e === "pending" ? "default" : void 0;
  return /* @__PURE__ */ i(
    "div",
    {
      className: r(
        "flex items-center justify-center rounded-full shrink-0 transition-opacity",
        C[t],
        d,
        e !== "pending" && "text-white",
        a && "group-hover/step:opacity-80"
      ),
      children: /* @__PURE__ */ i(
        I,
        {
          iconType: l,
          size: S[t],
          color: b
        }
      )
    }
  );
}
function W({ status: e }) {
  const { color: c, clickable: t } = f(g), n = e === "active" || e === "completed", o = r(
    n && u[c],
    e === "error" && "bg-basic-red-accent",
    e === "pending" && "bg-subtle border-darker"
  );
  return /* @__PURE__ */ i(
    "div",
    {
      className: r(
        "rounded-full shrink-0 transition-opacity",
        n || e === "error" ? "width-16 height-16" : "width-10 height-10",
        o,
        t && "group-hover/step:opacity-80"
      )
    }
  );
}
function k({
  filled: e,
  isLast: c
}) {
  const { orientation: t, color: n } = f(g);
  return c ? null : t === "vertical" ? /* @__PURE__ */ i(
    "div",
    {
      className: "flex-1",
      style: {
        minHeight: 24,
        borderLeftWidth: e ? 2 : 1,
        borderLeftStyle: "solid",
        borderLeftColor: e ? `var(--bg-basic-${n}-accent)` : "var(--border-default)"
      }
    }
  ) : /* @__PURE__ */ i(
    "div",
    {
      className: "flex-1",
      style: {
        minWidth: 16,
        height: e ? 2 : 1,
        backgroundColor: e ? `var(--bg-basic-${n}-accent)` : "var(--border-darker)"
      }
    }
  );
}
function T({
  index: e,
  status: c,
  icon: t
}) {
  const { indicatorType: n, clickable: o, onStepClick: a } = f(g), s = z(() => {
    o && a?.(e);
  }, [o, a, e]), h = z(
    (d) => {
      o && (d.key === "Enter" || d.key === " ") && (d.preventDefault(), a?.(e));
    },
    [o, a, e]
  );
  let l;
  switch (n) {
    case "icon":
      l = /* @__PURE__ */ i(E, { status: c, icon: t });
      break;
    case "dot":
      l = /* @__PURE__ */ i(W, { status: c });
      break;
    default:
      l = /* @__PURE__ */ i(j, { index: e, status: c });
  }
  return o ? /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      className: "cursor-pointer group/step",
      onClick: s,
      onKeyDown: h,
      "aria-label": `Step ${e + 1}`,
      children: l
    }
  ) : /* @__PURE__ */ i(_, { children: l });
}
function B({
  step: e,
  index: c,
  status: t
}) {
  const { size: n, verticalAlign: o, totalSteps: a } = f(g), s = c === a - 1, l = /* @__PURE__ */ m(
    "div",
    {
      className: r(
        "flex flex-col items-center",
        n === "sm" ? "width-24" : n === "lg" ? "width-40" : "width-32",
        "shrink-0"
      ),
      children: [
        /* @__PURE__ */ i(T, { index: c, status: t, icon: e.icon }),
        /* @__PURE__ */ i(k, { filled: t === "completed", isLast: s })
      ]
    }
  ), d = /* @__PURE__ */ m("div", { className: r("flex flex-col flex-1 ds-gap-2", "padding-t-4"), children: [
    /* @__PURE__ */ m("div", { className: "flex flex-col ds-gap-1", children: [
      /* @__PURE__ */ m("div", { className: "flex items-center ds-gap-4", children: [
        /* @__PURE__ */ i(
          "span",
          {
            className: r(
              "font-body font-medium size-md line-height-leading-6",
              t === "active" ? "text-default" : "text-subtle"
            ),
            children: e.label
          }
        ),
        e.supportText && /* @__PURE__ */ i("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: e.supportText })
      ] }),
      e.caption && /* @__PURE__ */ i("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: e.caption })
    ] }),
    e.children && t === "active" && /* @__PURE__ */ i("div", { className: "padding-y-8", children: e.children })
  ] });
  return /* @__PURE__ */ m(
    "div",
    {
      role: "listitem",
      "aria-current": t === "active" ? "step" : void 0,
      className: r(
        "flex",
        o === "right" ? "flex-row-reverse" : "flex-row",
        "ds-gap-12"
      ),
      children: [
        l,
        d
      ]
    }
  );
}
function H({
  step: e,
  index: c,
  status: t
}) {
  const {
    horizontalAlign: n,
    indicatorPosition: o,
    indicatorType: a,
    size: s,
    totalSteps: h
  } = f(g), l = c === h - 1, d = n === "center" ? "text-center items-center" : n === "right" ? "text-right items-end" : "text-left items-start", b = a === "dot" ? "height-16" : C[s].split(" ")[1], v = /* @__PURE__ */ m("div", { className: r("flex flex-row items-center w-full", b), children: [
    c > 0 && /* @__PURE__ */ i(k, { filled: t === "completed" || t === "active", isLast: !1 }),
    /* @__PURE__ */ i(T, { index: c, status: t, icon: e.icon }),
    !l && /* @__PURE__ */ i(k, { filled: t === "completed", isLast: !1 })
  ] }), x = /* @__PURE__ */ m("div", { className: r("flex flex-col ds-gap-1 padding-x-4", d), children: [
    /* @__PURE__ */ m("div", { className: "flex flex-col ds-gap-1", children: [
      /* @__PURE__ */ i(
        "span",
        {
          className: r(
            "font-body font-medium size-md line-height-leading-6",
            t === "active" ? "text-default" : "text-subtle"
          ),
          children: e.label
        }
      ),
      e.supportText && /* @__PURE__ */ i("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: e.supportText })
    ] }),
    e.caption && /* @__PURE__ */ i("span", { className: "font-body size-sm line-height-leading-5 text-muted", children: e.caption })
  ] });
  return /* @__PURE__ */ m(
    "div",
    {
      role: "listitem",
      "aria-current": t === "active" ? "step" : void 0,
      className: r(
        "flex flex-1",
        o === "bottom" ? "flex-col-reverse" : "flex-col",
        "ds-gap-8"
      ),
      children: [
        v,
        x
      ]
    }
  );
}
const $ = O(
  ({
    steps: e,
    activeStep: c = 0,
    orientation: t = "horizontal",
    indicatorType: n = "number",
    size: o = "md",
    color: a = "blue",
    horizontalAlign: s = "center",
    verticalAlign: h = "left",
    indicatorPosition: l = "top",
    clickable: d = !1,
    onStepClick: b,
    showCheckOnCompleted: v = !1,
    className: x,
    ...w
  }, A) => {
    const L = R(() => ({
      orientation: t,
      indicatorType: n,
      size: o,
      color: a,
      horizontalAlign: s,
      verticalAlign: h,
      indicatorPosition: l,
      clickable: d,
      showCheckOnCompleted: v,
      onStepClick: b,
      totalSteps: e.length
    }), [t, n, o, a, s, h, l, d, v, b, e.length]);
    return /* @__PURE__ */ i(g.Provider, { value: L, children: /* @__PURE__ */ i(
      "div",
      {
        ref: A,
        role: "list",
        "aria-orientation": t,
        className: r(
          "flex",
          t === "vertical" ? "flex-col" : "flex-row",
          x
        ),
        ...w,
        children: e.map((y, p) => {
          const N = M(p, c, y);
          return t === "vertical" ? /* @__PURE__ */ i(
            B,
            {
              step: y,
              index: p,
              status: N
            },
            p
          ) : /* @__PURE__ */ i(
            H,
            {
              step: y,
              index: p,
              status: N
            },
            p
          );
        })
      }
    ) });
  }
);
$.displayName = "Stepper";
export {
  $ as Stepper
};
