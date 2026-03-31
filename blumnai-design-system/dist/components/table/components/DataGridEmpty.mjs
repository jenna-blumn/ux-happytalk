"use client";
import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { cn as i } from "../../../utils/cn.mjs";
import { Icon as a } from "../../icons/Icon/Icon.mjs";
function c({
  text: t = "검색된 내용이 없습니다.",
  content: s
}) {
  return s ? /* @__PURE__ */ e("div", { role: "status", className: "padding-24", children: s }) : /* @__PURE__ */ r(
    "div",
    {
      role: "status",
      className: i(
        "flex flex-col items-center justify-center padding-24 ds-gap-12",
        "min-height-200"
      ),
      children: [
        /* @__PURE__ */ e(
          a,
          {
            iconType: ["system", "search"],
            size: 32,
            color: "default-muted"
          }
        ),
        /* @__PURE__ */ e("span", { className: "font-body size-sm text-subtle", children: t })
      ]
    }
  );
}
export {
  c as DataGridEmpty
};
