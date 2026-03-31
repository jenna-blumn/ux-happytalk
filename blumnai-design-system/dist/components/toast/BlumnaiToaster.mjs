"use client";
import { jsx as m } from "react/jsx-runtime";
import { Toaster as a } from "sonner";
const e = ({
  visibleToasts: o = 3,
  position: r = "bottom-right",
  ...t
}) => /* @__PURE__ */ m(
  a,
  {
    position: r,
    visibleToasts: o,
    ...t
  }
);
e.displayName = "BlumnaiToaster";
export {
  e as BlumnaiToaster
};
