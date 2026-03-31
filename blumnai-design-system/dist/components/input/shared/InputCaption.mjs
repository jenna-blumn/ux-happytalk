"use client";
import { jsx as p } from "react/jsx-runtime";
import { cn as m } from "../../../utils/cn.mjs";
import { ERROR_CAPTION_STYLE as e, SUCCESS_CAPTION_STYLE as n, CAPTION_STYLE as s } from "../../../constants/input/Input/Input.constants.mjs";
const C = ({
  children: t,
  error: a = !1,
  success: i = !1,
  className: o,
  ...r
}) => /* @__PURE__ */ p(
  "div",
  {
    className: m(
      "margin-t-4",
      a ? e : i ? n : s,
      o
    ),
    "aria-live": "polite",
    ...r,
    children: t
  }
);
C.displayName = "InputCaption";
export {
  C as InputCaption
};
