"use client";
import { jsxs as a, jsx as s } from "react/jsx-runtime";
import { cn as l } from "../../../utils/cn.mjs";
import { REQUIRED_STYLE as t, LABEL_STYLE as o, SUPPORT_TEXT_STYLE as p } from "../../../constants/input/Input/Input.constants.mjs";
const d = ({
  children: n,
  htmlFor: r,
  required: m = !1,
  supportText: e,
  className: c,
  ...i
}) => /* @__PURE__ */ a("div", { className: "flex items-center ds-gap-4 margin-b-4", children: [
  /* @__PURE__ */ a(
    "label",
    {
      htmlFor: r,
      className: l(o, "select-none", c),
      ...i,
      children: [
        n,
        m && /* @__PURE__ */ s("span", { className: l(t, "margin-l-2"), children: "*" })
      ]
    }
  ),
  e && /* @__PURE__ */ s("span", { className: p, children: e })
] });
d.displayName = "InputLabel";
export {
  d as InputLabel
};
