"use client";
import { useId as d } from "react";
import { SIZE_CONFIG as C, STYLE_CONFIG as g, STATE_CONFIG as p } from "../../../constants/input/Input/Input.constants.mjs";
const h = ({
  inputStyle: r = "default",
  size: u = "sm",
  disabled: n = !1,
  error: t,
  success: s
}) => {
  const i = d(), o = t === !0 || typeof t == "string" && t.length > 0, e = s === !0 || typeof s == "string" && s.length > 0, c = n ? "disabled" : o ? "error" : e ? "success" : "default", f = C[u], l = g[r], a = p[c];
  return {
    inputId: i,
    hasError: o,
    hasSuccess: e,
    state: c,
    sizeConfig: f,
    styleConfig: l,
    stateConfig: a,
    iconColor: n ? "default-disabled" : o ? "destructive" : e ? "success" : "default-subtle"
  };
};
export {
  h as useInputState
};
