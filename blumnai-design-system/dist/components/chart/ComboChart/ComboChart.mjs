"use client";
import { jsxs as Y, jsx as o } from "react/jsx-runtime";
import { forwardRef as $, useMemo as y, useCallback as J } from "react";
import { ComposedChart as Q, CartesianGrid as V, XAxis as Z, YAxis as T, Tooltip as P, Legend as tt, Bar as z, Rectangle as at, Area as ot, Line as rt, ResponsiveContainer as F } from "recharts";
import { Chart as et } from "../Chart/Chart.mjs";
import { useChartConfig as nt } from "../Chart/useChartConfig.mjs";
import { ChartTooltipAdapter as it } from "../Chart/ChartTooltipAdapter.mjs";
import { ChartLegend as dt } from "../Chart/ChartLegend.mjs";
import { DEFAULT_CHART_COLORS as W } from "../Chart/Chart.types.mjs";
const ct = $(
  ({
    data: A,
    xAxis: k,
    yAxis: h,
    barSeries: s,
    lineSeries: f,
    config: p,
    width: g = 600,
    height: K = 400,
    showXGrid: D = !0,
    showYGrid: N = !1,
    showLegend: O = !1,
    className: R,
    ariaLabel: M,
    onDataPointClick: u,
    isLoading: j,
    responsive: v,
    renderTooltip: E,
    ...G
  }, _) => {
    const l = y(() => A ?? [], [A]), { getLabel: m, getColor: q } = nt(p), x = Array.isArray(h), d = x ? h[0] : h, e = x ? h[1] : void 0, w = (t, a, r) => a || (p?.[t] ? p[t].color : W[r % W.length]), B = J((t) => {
      if (!u || t?.activeTooltipIndex == null) return;
      const a = Number(t.activeTooltipIndex);
      a >= 0 && a < l.length && u(l[a], a);
    }, [u, l]), H = M || `Combo chart showing ${[...s.map((t) => t.dataKey), ...f.map((t) => t.dataKey)].join(", ")}`, L = y(() => [
      ...s.map((t) => t.dataKey),
      ...f.filter((t) => (t.yAxisIndex ?? 0) === 0).map((t) => t.dataKey)
    ], [s, f]), I = y(
      () => f.filter((t) => t.yAxisIndex === 1).map((t) => t.dataKey),
      [f]
    ), S = y(() => {
      if (d.domain !== "auto" && d.domain !== void 0) return d.domain;
      const t = l.reduce((a, r) => {
        for (const n of L) {
          const i = Number(r[n] ?? 0);
          i > a && (a = i);
        }
        return a;
      }, 0);
      return [0, Math.max(t, 1)];
    }, [d.domain, l, L]), U = y(() => {
      if (!e) return;
      if (e.domain !== "auto" && e.domain !== void 0) return e.domain;
      const t = l.reduce((a, r) => {
        for (const n of I) {
          const i = Number(r[n] ?? 0);
          i > a && (a = i);
        }
        return a;
      }, 0);
      return [0, Math.max(t, 1)];
    }, [e, l, I]), C = /* @__PURE__ */ new Map();
    s.forEach((t) => {
      if (t.stack) {
        const a = C.get(t.stack) || [];
        a.push(t.dataKey), C.set(t.stack, a);
      }
    });
    const b = /* @__PURE__ */ Y(
      Q,
      {
        data: l,
        margin: { top: 20, right: 20, bottom: 24, left: 20 },
        onClick: u ? B : void 0,
        children: [
          /* @__PURE__ */ o(
            V,
            {
              horizontal: D,
              vertical: N,
              syncWithTicks: !0,
              yAxisId: "0",
              stroke: "var(--chart-grid-line)",
              strokeDasharray: "3 3"
            }
          ),
          /* @__PURE__ */ o(
            Z,
            {
              dataKey: k.dataKey,
              tickFormatter: k.tickFormatter,
              tick: { fontSize: 12, fill: "var(--text-muted)" },
              axisLine: { stroke: "var(--chart-axis)" },
              tickLine: !1,
              hide: k.show === !1
            }
          ),
          /* @__PURE__ */ o(
            T,
            {
              yAxisId: "0",
              dataKey: d.dataKey,
              domain: S,
              allowDataOverflow: !0,
              tickCount: d.tickCount ?? 5,
              interval: d.interval,
              tickFormatter: d.tickFormatter,
              tick: { fontSize: 12, fill: "var(--text-muted)" },
              axisLine: { stroke: "var(--chart-axis)" },
              tickLine: !1,
              hide: d.show === !1
            }
          ),
          x && e && /* @__PURE__ */ o(
            T,
            {
              yAxisId: "1",
              orientation: "right",
              dataKey: e.dataKey,
              domain: U,
              allowDataOverflow: !0,
              tickCount: e.tickCount ?? 5,
              interval: e.interval,
              tickFormatter: e.tickFormatter,
              tick: e.show === !1 ? !1 : { fontSize: 12, fill: "var(--text-muted)" },
              axisLine: e.show === !1 ? !1 : { stroke: "var(--chart-axis)" },
              tickLine: !1,
              width: e.show === !1 ? 0 : void 0
            }
          ),
          /* @__PURE__ */ o(
            P,
            {
              content: /* @__PURE__ */ o(
                it,
                {
                  renderTooltip: E,
                  getLabel: m,
                  getColor: q
                }
              ),
              cursor: { stroke: "var(--chart-indicator)", strokeDasharray: "4 4", strokeOpacity: 0.5 }
            }
          ),
          O && /* @__PURE__ */ o(tt, { content: /* @__PURE__ */ o(dt, { variant: "square" }) }),
          s.map((t, a) => {
            const r = w(t.dataKey, t.color, a), n = t.stack ?? void 0, i = n ? C.get(n)?.slice(-1)[0] === t.dataKey : !1, c = t.radius;
            return n && c && c > 0 ? /* @__PURE__ */ o(
              z,
              {
                dataKey: t.dataKey,
                yAxisId: "0",
                stackId: n,
                fill: r,
                name: m(t.dataKey),
                barSize: t.barSize,
                shape: (X) => /* @__PURE__ */ o(at, { ...X, radius: i ? [c, c, 0, 0] : [0, 0, 0, 0] })
              },
              t.dataKey
            ) : /* @__PURE__ */ o(
              z,
              {
                dataKey: t.dataKey,
                yAxisId: "0",
                stackId: n,
                fill: r,
                name: m(t.dataKey),
                barSize: t.barSize,
                radius: c ? [c, c, c, c] : void 0
              },
              t.dataKey
            );
          }),
          f.map((t, a) => {
            const r = w(t.dataKey, t.color, s.length + a), n = String(t.yAxisIndex ?? 0), i = t.smooth ? "monotone" : "linear";
            return t.showArea ? /* @__PURE__ */ o(
              ot,
              {
                connectNulls: !0,
                type: i,
                dataKey: t.dataKey,
                yAxisId: n,
                stroke: r,
                fill: r,
                fillOpacity: 0.1,
                strokeWidth: t.strokeWidth ?? 2,
                name: m(t.dataKey),
                dot: { r: 4, fill: r, stroke: "#fff", strokeWidth: 2 }
              },
              t.dataKey
            ) : /* @__PURE__ */ o(
              rt,
              {
                connectNulls: !0,
                type: i,
                dataKey: t.dataKey,
                yAxisId: n,
                stroke: r,
                strokeWidth: t.strokeWidth ?? 2,
                name: m(t.dataKey),
                dot: { r: 4, fill: r, stroke: "#fff", strokeWidth: 2 }
              },
              t.dataKey
            );
          })
        ]
      }
    );
    return /* @__PURE__ */ o(et, { ref: _, width: v ? void 0 : g, height: K, className: R, ariaLabel: H, isLoading: j, responsive: v, ...G, children: v ? /* @__PURE__ */ o(F, { width: "100%", height: K, children: b }) : /* @__PURE__ */ o("div", { style: { width: g, height: K }, children: /* @__PURE__ */ o(F, { width: "100%", height: "100%", children: b }) }) });
  }
);
ct.displayName = "ComboChart";
export {
  ct as ComboChart
};
