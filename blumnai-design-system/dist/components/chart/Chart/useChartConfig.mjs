"use client";
import { useMemo as C } from "react";
import { DEFAULT_CHART_COLORS as e } from "./Chart.types.mjs";
function f(u, t) {
  return C(() => ({ getLabel: (r) => u?.[r] ? u[r].label : r, getColor: (r, l) => u?.[r] ? u[r].color : t ? Array.isArray(t) ? t[l % t.length] || e[l % e.length] : t[r] || e[l % e.length] : e[l % e.length] }), [u, t]);
}
export {
  f as useChartConfig
};
