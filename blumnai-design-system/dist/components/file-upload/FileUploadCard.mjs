"use client";
import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { forwardRef as F, useMemo as u } from "react";
import { ControlButton as f } from "../button/ControlButton.mjs";
import { FILE_UPLOAD_CARD_ICON_SIZE as N, FILE_UPLOAD_CARD_SIZE as D, FILE_UPLOAD_THUMBNAIL as O, FILE_UPLOAD_CONTENT as U, FILE_UPLOAD_FILENAME as x, FILE_UPLOAD_PROGRESS_TRACK as v, FILE_UPLOAD_PROGRESS_FILL as P, FILE_UPLOAD_META as S, FILE_UPLOAD_META_DIVIDER as C, FILE_UPLOAD_STATUS_LABEL as m, FILE_UPLOAD_STATUS_TEXT as z, FILE_UPLOAD_ACTIONS as M, FILE_UPLOAD_CARD_BASE as R } from "../../constants/file-upload/file-upload.constants.mjs";
import { cn as _ } from "../../utils/cn.mjs";
import { AspectRatio as B } from "../aspect-ratio/AspectRatio.mjs";
import { Icon as g } from "../icons/Icon/Icon.mjs";
function W(t) {
  if (t <= 0 || !Number.isFinite(t)) return "0 B";
  const n = ["B", "KB", "MB", "GB", "TB"], r = 1024, e = Math.floor(Math.log(t) / Math.log(r));
  return `${parseFloat((t / Math.pow(r, e)).toFixed(1))} ${n[e]}`;
}
function w(t) {
  return t.startsWith("image/") ? ["media", "image"] : t.startsWith("video/") ? ["media", "video"] : t.startsWith("audio/") ? ["media", "music"] : t === "application/pdf" ? ["document", "file-pdf"] : t.includes("word") || t.includes("document") ? ["document", "file-word"] : t.includes("excel") || t.includes("spreadsheet") ? ["document", "file-excel"] : t.includes("powerpoint") || t.includes("presentation") ? ["document", "file-ppt"] : t.includes("zip") || t.includes("rar") || t.includes("archive") || t.includes("compressed") || t.includes("tar") || t.includes("gzip") ? ["document", "file-zip"] : t === "application/json" || t === "application/xml" || t === "application/javascript" || t === "application/typescript" ? ["development", "code-s"] : t.startsWith("text/html") || t.startsWith("text/css") || t.startsWith("text/javascript") || t.startsWith("text/xml") ? ["development", "code-s"] : t.startsWith("text/csv") ? ["document", "file-excel"] : t.startsWith("text/") ? ["document", "file-text"] : ["document", "file"];
}
const j = F(({
  file: t,
  thumbnail: n,
  status: r,
  progress: e = 0,
  errorMessage: a,
  size: c = "lg",
  onRemove: o,
  onRetry: l,
  className: L
}, h) => {
  const d = D[c], p = N[c], A = u(() => w(t.type), [t.type]), E = u(() => W(t.size), [t.size]), I = r === "error" && a ? a : m[r];
  return /* @__PURE__ */ s(
    "div",
    {
      ref: h,
      className: _(
        R,
        d.container,
        L
      ),
      children: [
        /* @__PURE__ */ i("div", { className: _(O, d.thumbnail), children: n ? /* @__PURE__ */ i(B, { ratio: 1, children: /* @__PURE__ */ i(
          "img",
          {
            src: n,
            alt: t.name,
            className: "w-full h-full object-cover"
          }
        ) }) : /* @__PURE__ */ i(
          g,
          {
            iconType: A,
            size: p,
            color: "default-muted"
          }
        ) }),
        /* @__PURE__ */ s("div", { className: U, children: [
          /* @__PURE__ */ i("span", { className: x, title: t.name, children: t.name }),
          r === "uploading" ? /* @__PURE__ */ i("div", { className: v, children: /* @__PURE__ */ i(
            "div",
            {
              className: P,
              style: { width: `${Math.min(100, Math.max(0, e))}%` }
            }
          ) }) : /* @__PURE__ */ s("div", { className: S, children: [
            /* @__PURE__ */ i("span", { children: E }),
            /* @__PURE__ */ i("span", { className: C, children: "|" }),
            /* @__PURE__ */ i("span", { className: z[r], children: I })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: M, children: [
          r === "error" && l && /* @__PURE__ */ i(
            f,
            {
              icon: ["system", "refresh"],
              size: "sm",
              onClick: l,
              "aria-label": "Retry upload"
            }
          ),
          o && /* @__PURE__ */ i(
            f,
            {
              icon: ["system", "close"],
              size: "sm",
              onClick: o,
              "aria-label": "Remove file"
            }
          )
        ] })
      ]
    }
  );
});
j.displayName = "FileUploadCard";
export {
  j as FileUploadCard
};
