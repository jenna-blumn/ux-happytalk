"use client";
import { jsx as l, jsxs as s } from "react/jsx-runtime";
import { cn as t } from "../../../utils/cn.mjs";
function c({ payload: r, variant: i = "square" }) {
  return r?.length ? /* @__PURE__ */ l("div", { className: "flex flex-wrap justify-center ds-gap-4 padding-x-16 padding-b-16 margin-t-16", role: "list", "aria-label": "Chart legend", children: r.map((e, a) => /* @__PURE__ */ s("div", { className: "flex items-center ds-gap-2", role: "listitem", children: [
    /* @__PURE__ */ l(
      "div",
      {
        style: { backgroundColor: e.color, width: 12, height: 12 },
        className: i === "circle" ? "rounded-full" : "rounded-sm",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ l("span", { className: t("size-xs", "text-muted"), children: typeof e.value == "string" ? e.value : String(e.value) })
  ] }, `legend-${a}`)) }) : null;
}
export {
  c as ChartLegend
};
