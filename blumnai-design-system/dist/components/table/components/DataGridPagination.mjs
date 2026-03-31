"use client";
import { jsx as o, jsxs as t, Fragment as z } from "react/jsx-runtime";
import { Select as P } from "../../select/Select.mjs";
import { cn as w } from "../../../utils/cn.mjs";
import { Pagination as D } from "../../pagination/Pagination.mjs";
const E = (s) => `${s}개씩 보기`;
function $({
  page: s,
  totalPages: p,
  total: c,
  limit: u,
  limitOptions: b = [10, 20, 50, 100],
  limitOptionLabel: h = E,
  startIndex: l,
  endIndex: m,
  onPageChange: y,
  onLimitChange: n,
  pageChangeConfirmMessage: g,
  align: e = "right",
  variant: x = "numbered",
  maxVisiblePages: j,
  disabled: N,
  hideNavButtons: S,
  resultTextFormatter: v,
  showItemCount: a = !0
}) {
  const r = a || n, f = n && /* @__PURE__ */ o(
    P,
    {
      size: "sm",
      selectStyle: "default",
      options: b.map((i) => ({
        id: String(i),
        label: h(i)
      })),
      value: String(u),
      onChange: (i) => n(Number(i)),
      width: 140
    }
  ), d = /* @__PURE__ */ o(
    D,
    {
      variant: x,
      page: s,
      totalPages: p,
      total: c,
      onPageChange: y,
      pageChangeConfirmMessage: g,
      maxVisiblePages: j,
      disabled: N,
      hideNavButtons: S,
      resultTextFormatter: v
    }
  );
  return /* @__PURE__ */ t(
    "div",
    {
      className: w(
        "flex items-center padding-y-8 padding-x-10 border-t-default",
        e === "left" && "justify-start",
        e === "center" && "justify-center",
        e === "right" && r && "justify-between",
        e === "right" && !r && "justify-end"
      ),
      children: [
        e === "right" && r && /* @__PURE__ */ t("div", { className: "flex items-center ds-gap-8", children: [
          a && /* @__PURE__ */ t("span", { className: "font-body size-sm text-subtle", children: [
            l,
            "-",
            m,
            " / ",
            c
          ] }),
          f
        ] }),
        e === "center" && d,
        e === "left" && /* @__PURE__ */ t(z, { children: [
          d,
          r && /* @__PURE__ */ t("div", { className: "flex items-center ds-gap-8 ml-auto", children: [
            a && /* @__PURE__ */ t("span", { className: "font-body size-sm text-subtle", children: [
              l,
              "-",
              m,
              " / ",
              c
            ] }),
            f
          ] })
        ] }),
        e === "right" && d
      ]
    }
  );
}
export {
  $ as DataGridPagination
};
