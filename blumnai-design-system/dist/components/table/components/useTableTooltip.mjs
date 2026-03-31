"use client";
import { useContext as t } from "react";
import { TableTooltipContext as e } from "./TableTooltipContext.mjs";
function n() {
  const o = t(e);
  if (!o)
    throw new Error("useTableTooltip must be used within a TableTooltipProvider");
  return o;
}
function l() {
  return t(e);
}
export {
  n as useTableTooltip,
  l as useTableTooltipOptional
};
