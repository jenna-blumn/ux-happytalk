"use client";
import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { Button as o } from "../../button/Button.mjs";
import { cn as n } from "../../../utils/cn.mjs";
import { Icon as s } from "../../icons/Icon/Icon.mjs";
function a({ error: e, onRetry: i }) {
  return /* @__PURE__ */ r(
    "div",
    {
      role: "alert",
      className: n(
        "flex flex-col items-center justify-center padding-24 ds-gap-12",
        "min-height-200"
      ),
      children: [
        /* @__PURE__ */ t(
          s,
          {
            iconType: ["system", "error-warning"],
            size: 32,
            color: "destructive"
          }
        ),
        /* @__PURE__ */ t("div", { className: "font-body size-sm text-subtle text-center", children: e }),
        i && /* @__PURE__ */ t(
          o,
          {
            buttonStyle: "secondary",
            size: "sm",
            onClick: i,
            children: "다시 시도"
          }
        )
      ]
    }
  );
}
export {
  a as DataGridError
};
