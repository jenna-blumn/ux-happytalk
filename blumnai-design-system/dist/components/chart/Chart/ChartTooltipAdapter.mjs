"use client";
import { jsx as c } from "react/jsx-runtime";
import { AdvancedTooltip as m } from "../../tooltip/Tooltip/AdvancedTooltip.mjs";
function v({
  active: s,
  payload: a,
  label: r,
  renderTooltip: o,
  getLabel: d,
  getColor: i
}) {
  if (!s || !a?.length) return null;
  const e = {
    xValue: r ?? "",
    items: a.map((t, n) => ({
      dataKey: String(t.dataKey ?? ""),
      label: d(String(t.dataKey ?? "")),
      value: Number(t.value ?? 0),
      color: t.color || i(String(t.dataKey ?? ""), n)
    }))
  };
  if (o) return /* @__PURE__ */ c("div", { className: "rounded-card-xs padding-4 bg-card shadow-modal-sm", children: o(e) });
  const l = [
    { type: "label", label: String(r ?? "") },
    { type: "divider" },
    ...e.items.map((t) => ({
      type: "item",
      label: t.label,
      caption: String(t.value),
      indicatorColor: t.color
    }))
  ];
  return /* @__PURE__ */ c(m, { items: l });
}
function f({
  active: s,
  payload: a,
  renderTooltip: r,
  getLabel: o,
  totalValue: d = 0
}) {
  if (!s || !a?.length) return null;
  const i = a[0], e = String(i.name ?? ""), l = Number(i.value ?? 0), t = d > 0 ? l / d : 0, n = String(i.payload?.fill ?? ""), p = { name: e, value: l, percent: t * 100, color: n };
  if (r) return /* @__PURE__ */ c("div", { className: "rounded-card-xs padding-4 bg-card shadow-modal-sm", children: r(p) });
  const u = [
    { type: "label", label: o(e) },
    { type: "divider" },
    { type: "item", label: o(e), caption: String(l), indicatorColor: n },
    { type: "item", label: `${(t * 100).toFixed(1)}%`, indicatorColor: n }
  ];
  return /* @__PURE__ */ c(m, { items: u });
}
export {
  v as ChartTooltipAdapter,
  f as PieTooltipAdapter
};
