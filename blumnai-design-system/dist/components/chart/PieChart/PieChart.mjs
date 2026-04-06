"use client";
import { jsxs as W, jsx as t } from "react/jsx-runtime";
import { forwardRef as q, useMemo as l } from "react";
import { PieChart as z, Pie as B, Cell as D, Tooltip as F, Legend as G, ResponsiveContainer as u } from "recharts";
import { Chart as I } from "../Chart/Chart.mjs";
import { useChartConfig as J } from "../Chart/useChartConfig.mjs";
import { PieTooltipAdapter as O } from "../Chart/ChartTooltipAdapter.mjs";
import { ChartLegend as Q } from "../Chart/ChartLegend.mjs";
const U = q(
  ({
    data: a,
    dataKey: c,
    nameKey: i,
    config: A,
    width: s = 400,
    height: m = 400,
    outerRadius: g = 150,
    startAngle: P = 0,
    endAngle: L = 360,
    paddingAngle: b = 0,
    showLegend: v = !1,
    isHalf: n = !1,
    className: w,
    ariaLabel: j,
    onDataPointClick: d,
    isLoading: S,
    responsive: h,
    renderTooltip: $,
    ...k
  }, x) => {
    const e = l(() => a ?? [], [a]), { getLabel: N, getColor: f } = J(A), T = l(() => e.map((o, r) => {
      const V = String(o[i] ?? "");
      return f(V, r);
    }), [e, i, f]), _ = l(
      () => e.reduce((o, r) => o + Number(r[c] ?? 0), 0),
      [e, c]
    ), E = n ? 180 : 90 - P, M = n ? 0 : 90 - L, p = n ? g + 40 : m, R = j || `Pie chart showing ${e.map((o) => String(o[i] ?? "")).join(", ")}`, C = /* @__PURE__ */ W(z, { children: [
      /* @__PURE__ */ t(
        B,
        {
          data: e,
          dataKey: c,
          nameKey: i,
          cx: "50%",
          cy: n ? "100%" : "50%",
          outerRadius: g,
          startAngle: E,
          endAngle: M,
          paddingAngle: b,
          stroke: "#fff",
          strokeWidth: 2,
          onClick: (o, r) => {
            d && d(e[r], r);
          },
          children: e.map((o, r) => /* @__PURE__ */ t(D, { fill: T[r] }, `cell-${r}`))
        }
      ),
      /* @__PURE__ */ t(
        F,
        {
          content: /* @__PURE__ */ t(
            O,
            {
              renderTooltip: $,
              getLabel: N,
              totalValue: _
            }
          )
        }
      ),
      v && /* @__PURE__ */ t(G, { content: /* @__PURE__ */ t(Q, { variant: "circle" }) })
    ] });
    return /* @__PURE__ */ t(I, { ref: x, width: h ? void 0 : s, height: n ? void 0 : m, className: w, ariaLabel: R, isLoading: S, responsive: h, ...k, children: h ? /* @__PURE__ */ t(u, { width: "100%", height: p, children: C }) : /* @__PURE__ */ t("div", { style: { width: s, height: p }, children: /* @__PURE__ */ t(u, { width: "100%", height: "100%", children: C }) }) });
  }
);
U.displayName = "PieChart";
export {
  U as PieChart
};
