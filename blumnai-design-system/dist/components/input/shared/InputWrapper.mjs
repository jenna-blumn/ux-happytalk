"use client";
import { jsxs as x, jsx as s } from "react/jsx-runtime";
import { cn as y } from "../../../utils/cn.mjs";
import { INPUT_CONTAINER_BASE as N } from "../../../constants/input/Input/Input.constants.mjs";
import { InputLabel as u } from "./InputLabel.mjs";
import { InputCaption as I } from "./InputCaption.mjs";
const T = ({
  children: l,
  label: r,
  inputId: e,
  required: m = !1,
  supportText: i,
  caption: a,
  error: o,
  success: n,
  width: t,
  className: f
}) => {
  const c = o === !0 || typeof o == "string" && o.length > 0, g = n === !0 || typeof n == "string" && n.length > 0, v = typeof o == "string" && o.length > 0 ? o : void 0, d = typeof n == "string" && n.length > 0 ? n : void 0, p = v || d || a, h = p !== void 0 && p.length > 0;
  return /* @__PURE__ */ x(
    "div",
    {
      className: y(N, t === void 0 && "w-full", f),
      style: t !== void 0 ? { width: typeof t == "number" ? `${t}px` : /^\d+$/.test(t) ? `${t}px` : t } : void 0,
      children: [
        (r || i) && /* @__PURE__ */ s(
          u,
          {
            htmlFor: e,
            required: m,
            supportText: i,
            children: r
          }
        ),
        l,
        h && /* @__PURE__ */ s(
          I,
          {
            id: e ? `${e}-caption` : void 0,
            error: c,
            success: g,
            children: p
          }
        )
      ]
    }
  );
};
T.displayName = "InputWrapper";
export {
  T as InputWrapper
};
