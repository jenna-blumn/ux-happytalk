"use client";
import { jsxs as B, jsx as t } from "react/jsx-runtime";
import { forwardRef as E, useMemo as x, useCallback as H } from "react";
import { ComposedChart as J, LineChart as K, CartesianGrid as Q, XAxis as U, YAxis as V, Tooltip as Z, Legend as _, Area as y, Line as A, ResponsiveContainer as F } from "recharts";
import { Chart as P } from "../Chart/Chart.mjs";
import { useChartConfig as tt } from "../Chart/useChartConfig.mjs";
import { ChartTooltipAdapter as rt } from "../Chart/ChartTooltipAdapter.mjs";
import { ChartLegend as et } from "../Chart/ChartLegend.mjs";
const ot = E(
  ({
    data: u,
    xAxis: s,
    yAxis: e,
    dataKey: f,
    dataKeys: a,
    lineColors: N,
    config: W,
    width: p = 600,
    height: d = 400,
    showArea: C = !1,
    showPoints: n = !0,
    strokeWidth: k = 2,
    smooth: j = !1,
    showXGrid: z = !0,
    showYGrid: D = !1,
    showLegend: M = !1,
    className: w,
    ariaLabel: I,
    onDataPointClick: l,
    isLoading: O,
    responsive: h,
    renderTooltip: R,
    ...S
  }, $) => {
    const c = x(() => u ?? [], [u]), v = a && a.length > 0, L = x(() => v ? a : f ? [f] : [], [v, a, f]), { getLabel: m, getColor: g } = tt(W, N), q = H((r) => {
      if (!l || r?.activeTooltipIndex == null) return;
      const i = Number(r.activeTooltipIndex);
      i >= 0 && i < c.length && l(c[i], i);
    }, [l, c]), G = I || `Line chart showing ${L.join(", ") || "data"}`, X = e.domain === "auto" || e.domain === void 0 ? [0, (r) => Math.max(r, 1)] : e.domain, Y = e.tickCount ?? 5, b = j ? "monotone" : "linear", T = /* @__PURE__ */ B(
      C ? J : K,
      {
        data: c,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        onClick: l ? q : void 0,
        children: [
          /* @__PURE__ */ t(
            Q,
            {
              horizontal: z,
              vertical: D,
              syncWithTicks: !0,
              stroke: "var(--chart-grid-line)",
              strokeDasharray: "3 3"
            }
          ),
          /* @__PURE__ */ t(
            U,
            {
              dataKey: s.dataKey,
              padding: { left: 20, right: 20 },
              tickFormatter: s.tickFormatter,
              tick: { fontSize: 12, fill: "var(--text-muted)" },
              axisLine: { stroke: "var(--chart-axis)" },
              tickLine: !1,
              hide: s.show === !1
            }
          ),
          /* @__PURE__ */ t(
            V,
            {
              domain: X,
              tickCount: Y,
              interval: e.interval,
              tickFormatter: e.tickFormatter,
              tick: { fontSize: 12, fill: "var(--text-muted)" },
              axisLine: { stroke: "var(--chart-axis)" },
              tickLine: !1,
              hide: e.show === !1
            }
          ),
          /* @__PURE__ */ t(
            Z,
            {
              content: /* @__PURE__ */ t(
                rt,
                {
                  renderTooltip: R,
                  getLabel: m,
                  getColor: g
                }
              ),
              cursor: { stroke: "var(--chart-indicator)", strokeDasharray: "4 4", strokeOpacity: 0.5 }
            }
          ),
          M && /* @__PURE__ */ t(_, { content: /* @__PURE__ */ t(et, { variant: "square" }) }),
          L.map((r, i) => {
            const o = g(r, i);
            return C ? /* @__PURE__ */ t(
              y,
              {
                connectNulls: !0,
                type: b,
                dataKey: r,
                stroke: o,
                fill: o,
                fillOpacity: 0.1,
                strokeWidth: k,
                dot: n ? { r: 4, fill: o, stroke: "#fff", strokeWidth: 2 } : !1,
                activeDot: n ? { r: 5, fill: o, stroke: "#fff", strokeWidth: 2 } : void 0,
                name: m(r)
              },
              r
            ) : /* @__PURE__ */ t(
              A,
              {
                connectNulls: !0,
                type: b,
                dataKey: r,
                stroke: o,
                strokeWidth: k,
                dot: n ? { r: 4, fill: o, stroke: "#fff", strokeWidth: 2 } : !1,
                activeDot: n ? { r: 5, fill: o, stroke: "#fff", strokeWidth: 2 } : void 0,
                name: m(r)
              },
              r
            );
          })
        ]
      }
    );
    return /* @__PURE__ */ t(P, { ref: $, width: h ? void 0 : p, height: d, className: w, ariaLabel: G, isLoading: O, responsive: h, ...S, children: h ? /* @__PURE__ */ t(F, { width: "100%", height: d, children: T }) : /* @__PURE__ */ t("div", { style: { width: p, height: d }, children: /* @__PURE__ */ t(F, { width: "100%", height: "100%", children: T }) }) });
  }
);
ot.displayName = "LineChart";
export {
  ot as LineChart
};
