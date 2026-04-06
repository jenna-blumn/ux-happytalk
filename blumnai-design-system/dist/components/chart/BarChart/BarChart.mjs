"use client";
import { jsxs as L, jsx as r, Fragment as O } from "react/jsx-runtime";
import { forwardRef as b, useMemo as R, useCallback as A } from "react";
import { BarChart as y, CartesianGrid as K, XAxis as D, YAxis as H, Tooltip as tt, Legend as rt, Bar as k, ResponsiveContainer as I, Rectangle as et } from "recharts";
import { Chart as at } from "../Chart/Chart.mjs";
import { useChartConfig as it } from "../Chart/useChartConfig.mjs";
import { ChartTooltipAdapter as ot } from "../Chart/ChartTooltipAdapter.mjs";
import { ChartLegend as nt } from "../Chart/ChartLegend.mjs";
import { DEFAULT_CHART_COLORS as c } from "../Chart/Chart.types.mjs";
const lt = b(
  ({
    data: F,
    xAxis: n,
    yAxis: i,
    dataKey: h,
    config: p,
    width: B = 600,
    height: s = 400,
    barSize: u,
    gap: M,
    stacked: N = !1,
    stackedKeys: m,
    stackedColors: l,
    barRadius: a,
    layout: _ = "vertical",
    showXGrid: T = !0,
    showYGrid: w = !1,
    showLegend: $ = !1,
    className: q,
    ariaLabel: E,
    onDataPointClick: f,
    isLoading: U,
    responsive: g,
    renderTooltip: W,
    ...G
  }, J) => {
    const o = _ === "horizontal", v = R(() => F ?? [], [F]), { getLabel: d, getColor: Q } = it(p, l), C = (t, e) => p?.[t] ? p[t].color : l ? Array.isArray(l) ? l[e % l.length] || c[e % c.length] : l[t] || c[e % c.length] : c[e % c.length], V = A((t) => {
      if (!f || t?.activeTooltipIndex == null) return;
      const e = Number(t.activeTooltipIndex);
      e >= 0 && e < v.length && f(v[e], e);
    }, [f, v]), X = E || `Bar chart showing ${h || m?.join(", ") || "data"}`, z = i.domain === "auto" || i.domain === void 0 ? [0, (t) => Math.max(t, 1)] : i.domain, S = i.tickCount ?? 5, Y = (t, e, Z) => {
      if (!a || a <= 0)
        return /* @__PURE__ */ r(
          k,
          {
            dataKey: t,
            stackId: "stack",
            fill: C(t, e),
            name: d(t),
            barSize: u
          },
          t
        );
      const x = e === Z - 1;
      return /* @__PURE__ */ r(
        k,
        {
          dataKey: t,
          stackId: "stack",
          fill: C(t, e),
          name: d(t),
          barSize: u,
          shape: (P) => /* @__PURE__ */ r(et, { ...P, radius: x ? o ? [0, a, a, 0] : [a, a, 0, 0] : [0, 0, 0, 0] })
        },
        t
      );
    }, j = /* @__PURE__ */ L(
      y,
      {
        data: v,
        barCategoryGap: M ?? 8,
        margin: { top: 20, right: 20, bottom: 20, left: o ? 60 : 20 },
        onClick: f ? V : void 0,
        ...o ? { layout: "vertical" } : {},
        children: [
          /* @__PURE__ */ r(
            K,
            {
              horizontal: o ? w : T,
              vertical: o ? T : w,
              syncWithTicks: !0,
              stroke: "var(--chart-grid-line)",
              strokeDasharray: "3 3"
            }
          ),
          o ? /* @__PURE__ */ L(O, { children: [
            /* @__PURE__ */ r(
              D,
              {
                type: "number",
                domain: z,
                tickCount: S,
                interval: i.interval,
                tickFormatter: i.tickFormatter,
                tick: { fontSize: 12, fill: "var(--text-muted)" },
                axisLine: { stroke: "var(--chart-axis)" },
                tickLine: !1,
                hide: i.show === !1
              }
            ),
            /* @__PURE__ */ r(
              H,
              {
                type: "category",
                dataKey: n.dataKey,
                tickFormatter: n.tickFormatter,
                tick: { fontSize: 12, fill: "var(--text-muted)" },
                axisLine: { stroke: "var(--chart-axis)" },
                tickLine: !1,
                hide: n.show === !1,
                width: 55
              }
            )
          ] }) : /* @__PURE__ */ L(O, { children: [
            /* @__PURE__ */ r(
              D,
              {
                dataKey: n.dataKey,
                tickFormatter: n.tickFormatter,
                tick: { fontSize: 12, fill: "var(--text-muted)" },
                axisLine: { stroke: "var(--chart-axis)" },
                tickLine: !1,
                hide: n.show === !1
              }
            ),
            /* @__PURE__ */ r(
              H,
              {
                domain: z,
                tickCount: S,
                interval: i.interval,
                tickFormatter: i.tickFormatter,
                tick: { fontSize: 12, fill: "var(--text-muted)" },
                axisLine: { stroke: "var(--chart-axis)" },
                tickLine: !1,
                hide: i.show === !1
              }
            )
          ] }),
          /* @__PURE__ */ r(
            tt,
            {
              content: /* @__PURE__ */ r(
                ot,
                {
                  renderTooltip: W,
                  getLabel: d,
                  getColor: Q
                }
              ),
              cursor: { stroke: "var(--chart-indicator)", strokeDasharray: "4 4", strokeOpacity: 0.5 }
            }
          ),
          $ && /* @__PURE__ */ r(rt, { content: /* @__PURE__ */ r(nt, { variant: "square" }) }),
          N && m && m.length > 0 ? m.map((t, e) => Y(t, e, m.length)) : h && /* @__PURE__ */ r(
            k,
            {
              dataKey: h,
              fill: C(h, 0),
              name: d(h),
              barSize: u,
              radius: a ? o ? [0, a, a, 0] : [a, a, 0, 0] : void 0
            }
          )
        ]
      }
    );
    return /* @__PURE__ */ r(at, { ref: J, width: g ? void 0 : B, height: s, className: q, ariaLabel: X, isLoading: U, responsive: g, ...G, children: g ? /* @__PURE__ */ r(I, { width: "100%", height: s, children: j }) : /* @__PURE__ */ r("div", { style: { width: B, height: s }, children: /* @__PURE__ */ r(I, { width: "100%", height: "100%", children: j }) }) });
  }
);
lt.displayName = "BarChart";
export {
  lt as BarChart
};
