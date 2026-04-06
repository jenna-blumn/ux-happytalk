"use client";
import { jsx as e, jsxs as h } from "react/jsx-runtime";
import { cn as p } from "../../../utils/cn.mjs";
function v({
  columns: l,
  gridTemplateColumns: d,
  rowCount: n = 5,
  overlay: o = !1,
  stickyColumnPositions: c,
  rowHeight: m
}) {
  if (o)
    return /* @__PURE__ */ e("div", { role: "status", "aria-label": "로딩 중", className: "absolute inset-0 flex items-center justify-center bg-default/80 z-20", children: /* @__PURE__ */ h("div", { className: "flex items-center ds-gap-8", children: [
      /* @__PURE__ */ e("div", { className: "width-20 height-20 border-2 border-state-primary border-t-transparent rounded-full animate-spin", "aria-hidden": "true" }),
      /* @__PURE__ */ e("span", { className: "font-body size-sm text-subtle", children: "로딩 중..." })
    ] }) });
  const f = m ?? "32px";
  return /* @__PURE__ */ e("div", { role: "rowgroup", children: Array.from({ length: n }).map((b, a) => /* @__PURE__ */ e(
    "div",
    {
      role: "row",
      className: "grid animate-pulse group",
      style: { gridTemplateColumns: d },
      children: l.map((s, t) => {
        const u = s.id ?? s.accessorKey ?? `col-${t}`, r = c.get(u), i = !!r;
        return /* @__PURE__ */ e(
          "div",
          {
            role: "cell",
            className: p(
              "padding-x-10 flex items-center",
              "border-r-default border-b-default last:border-r-0",
              "bg-default",
              i ? "sticky z-[100]" : "relative z-[1]"
            ),
            style: {
              height: f,
              ...i ? { left: r.leftOffset, width: r.width } : void 0
            },
            children: /* @__PURE__ */ e(
              "div",
              {
                className: "height-16 bg-basic-gray-alpha-10 rounded",
                style: {
                  width: `${(a * 7 + t * 13 + 5) % 40 + 40}%`
                }
              }
            )
          },
          t
        );
      })
    },
    a
  )) });
}
export {
  v as DataGridLoading
};
