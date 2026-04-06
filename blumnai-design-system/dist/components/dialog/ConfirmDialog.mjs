"use client";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
import * as x from "react";
import { AlertDialogRoot as C, AlertDialogContent as S, AlertDialogHeader as j, AlertDialogTitle as k, AlertDialogDescription as v, AlertDialogFooter as P } from "./AlertDialogPrimitives.mjs";
import { Button as s } from "../button/Button.mjs";
const R = ({
  open: n,
  onOpenChange: l,
  title: d,
  description: i,
  confirmLabel: c = "확인",
  cancelLabel: f = "취소",
  variant: m = "default",
  onConfirm: r,
  onCancel: u,
  width: g,
  loading: D = !1,
  confirmDisabled: y = !1
}) => {
  const [h, o] = x.useState(!1), A = async () => {
    if (!r) {
      l(!1);
      return;
    }
    try {
      o(!0), await r(), l(!1);
    } finally {
      o(!1);
    }
  }, b = () => {
    u?.(), l(!1);
  }, p = m === "destructive" ? "destructive" : "primary", a = D || h;
  return /* @__PURE__ */ e(C, { open: n, onOpenChange: l, children: /* @__PURE__ */ t(S, { width: g, children: [
    /* @__PURE__ */ t(j, { children: [
      /* @__PURE__ */ e(k, { children: d }),
      i && /* @__PURE__ */ e(v, { children: i })
    ] }),
    /* @__PURE__ */ t(P, { children: [
      /* @__PURE__ */ e(
        s,
        {
          buttonStyle: "secondary",
          onClick: b,
          disabled: a,
          children: f
        }
      ),
      /* @__PURE__ */ e(
        s,
        {
          buttonStyle: p,
          onClick: A,
          loading: a,
          disabled: y,
          children: c
        }
      )
    ] })
  ] }) });
};
R.displayName = "ConfirmDialog";
export {
  R as ConfirmDialog
};
