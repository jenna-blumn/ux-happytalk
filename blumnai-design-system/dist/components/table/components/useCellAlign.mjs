"use client";
import { useContext as t } from "react";
import { DataGridCellContext as e } from "./DataGridCellContext.mjs";
function l() {
  return t(e)?.align ?? "left";
}
export {
  l as useCellAlign
};
