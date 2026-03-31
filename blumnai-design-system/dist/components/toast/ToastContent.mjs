"use client";
import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { toast as l } from "sonner";
import { cn as n } from "../../utils/cn.mjs";
import { TOAST_LABEL as a, TOAST_LABEL_STYLE as u, TOAST_INDICATOR as m, TOAST_INDICATOR_BASE as h, TOAST_MESSAGE_STYLE as f, TOAST_VARIANT as T, TOAST_BASE as p } from "../../constants/toast/toast.constants.mjs";
const b = ({ variant: o = "default", message: c, label: d, toastId: s, action: t }) => {
  const r = d ?? a[o];
  return /* @__PURE__ */ i(
    "div",
    {
      className: n(p, T[o]),
      role: o === "error" ? "alert" : "status",
      children: [
        /* @__PURE__ */ e("div", { className: n(h, m[o]) }),
        /* @__PURE__ */ i("p", { className: n(f, "flex-1"), children: [
          r && /* @__PURE__ */ i("span", { className: u, children: [
            r,
            " "
          ] }),
          c
        ] }),
        t && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => {
              t.onClick(), s !== void 0 && l.dismiss(s);
            },
            className: "flex-shrink-0 font-body size-sm line-height-leading-5 font-medium text-basic-blue-strong hover:text-basic-blue-accent transition-colors cursor-pointer border-0 bg-transparent padding-x-4 padding-y-2 rounded-xs focus:outline-none focus-visible:shadow-component-misc-focus",
            children: t.label
          }
        ),
        s !== void 0 && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => l.dismiss(s),
            className: "flex-shrink-0 inline-flex items-center justify-center width-20 height-20 rounded-xs text-muted hover:text-default transition-colors cursor-pointer focus:outline-none focus-visible:shadow-component-misc-focus",
            "aria-label": "Close",
            children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        )
      ]
    }
  );
};
b.displayName = "ToastContent";
export {
  b as ToastContent
};
