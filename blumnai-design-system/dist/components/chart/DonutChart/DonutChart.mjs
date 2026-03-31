"use client";
import { jsxs as g, jsx as t } from "react/jsx-runtime";
import { forwardRef as R, useMemo as u, useState as U } from "react";
import { PieChart as X, Pie as Y, Cell as Z, Tooltip as O, Legend as H, ResponsiveContainer as D } from "recharts";
import { Chart as K } from "../Chart/Chart.mjs";
import { useChartConfig as tt } from "../Chart/useChartConfig.mjs";
import { PieTooltipAdapter as et } from "../Chart/ChartTooltipAdapter.mjs";
import { ChartLegend as rt } from "../Chart/ChartLegend.mjs";
import { cn as M } from "../../../utils/cn.mjs";
const nt = R(
  ({
    data: p,
    dataKey: l,
    nameKey: o,
    config: _,
    width: v = 400,
    height: x = 400,
    innerRadius: C = 80,
    outerRadius: S = 150,
    startAngle: $ = 0,
    endAngle: k = 360,
    paddingAngle: z = 0,
    showLegend: E = !1,
    centerLabel: P,
    centerValue: T,
    showCenterOnHover: c = !1,
    isHalf: i = !1,
    className: V,
    ariaLabel: w,
    onDataPointClick: b,
    isLoading: W,
    responsive: d,
    renderTooltip: q,
    ...y
  }, B) => {
    const r = u(() => p ?? [], [p]), { getLabel: L, getColor: N } = tt(_), [a, A] = U(null), F = u(() => r.map((n, e) => {
      const s = String(n[o] ?? "");
      return N(s, e);
    }), [r, o, N]), G = u(
      () => r.reduce((n, e) => n + Number(e[l] ?? 0), 0),
      [r, l]
    ), I = i ? 180 : 90 - $, J = i ? 0 : 90 - k, m = i ? S + 40 : x, h = c && a ? a.name : P, f = c && a ? String(a.value) : T, Q = w || `Donut chart showing ${r.map((n) => String(n[o] ?? "")).join(", ")}`, j = /* @__PURE__ */ g(X, { children: [
      /* @__PURE__ */ t(
        Y,
        {
          data: r,
          dataKey: l,
          nameKey: o,
          cx: "50%",
          cy: i ? "100%" : "50%",
          innerRadius: C,
          outerRadius: S,
          startAngle: I,
          endAngle: J,
          paddingAngle: z,
          stroke: "#fff",
          strokeWidth: 2,
          onMouseEnter: (n, e) => {
            if (c) {
              const s = r[e];
              A({
                name: L(String(s[o] ?? "")),
                value: Number(s[l] ?? 0)
              });
            }
          },
          onMouseLeave: () => {
            c && A(null);
          },
          onClick: (n, e) => {
            b && b(r[e], e);
          },
          children: r.map((n, e) => /* @__PURE__ */ t(Z, { fill: F[e] }, `cell-${e}`))
        }
      ),
      /* @__PURE__ */ t(
        O,
        {
          content: /* @__PURE__ */ t(
            et,
            {
              renderTooltip: q,
              getLabel: L,
              totalValue: G
            }
          )
        }
      ),
      E && /* @__PURE__ */ t(H, { content: /* @__PURE__ */ t(rt, { variant: "circle" }) })
    ] });
    return /* @__PURE__ */ t(K, { ref: B, width: d ? void 0 : v, height: i ? void 0 : x, className: V, ariaLabel: Q, isLoading: W, responsive: d, ...y, children: /* @__PURE__ */ g("div", { className: "relative", children: [
      d ? /* @__PURE__ */ t(D, { width: "100%", height: m, children: j }) : /* @__PURE__ */ t("div", { style: { width: v, height: m }, children: /* @__PURE__ */ t(D, { width: "100%", height: "100%", children: j }) }),
      (h || f) && /* @__PURE__ */ g(
        "div",
        {
          className: "absolute flex flex-col items-center justify-center ds-gap-1 pointer-events-none",
          style: {
            left: "50%",
            top: i ? `${m - C / 2}px` : "50%",
            transform: "translate(-50%, -50%)"
          },
          "aria-hidden": "true",
          children: [
            h && /* @__PURE__ */ t(
              "div",
              {
                className: M(
                  "size-xs line-height-leading-4 font-medium text-center",
                  "text-muted"
                ),
                children: h
              }
            ),
            f && /* @__PURE__ */ t(
              "div",
              {
                className: M(
                  "size-2xl line-height-leading-8 font-medium text-center",
                  "text-default"
                ),
                children: f
              }
            )
          ]
        }
      )
    ] }) });
  }
);
nt.displayName = "DonutChart";
export {
  nt as DonutChart
};
