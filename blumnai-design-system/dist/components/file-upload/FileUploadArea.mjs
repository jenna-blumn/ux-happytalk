"use client";
import { jsxs as _, jsx as g, Fragment as re } from "react/jsx-runtime";
import { forwardRef as ne, useRef as oe, useState as se, useCallback as l } from "react";
import { parseIconTypeWithFill as ae } from "../icons/Icon/Icon.types.mjs";
import { FILE_UPLOAD_AREA_ICON_SIZE as le, FILE_UPLOAD_AREA_TITLE_DISABLED as ie, FILE_UPLOAD_AREA_TITLE as ce, FILE_UPLOAD_AREA_CLICK_TEXT_DISABLED as fe, FILE_UPLOAD_AREA_CLICK_TEXT as ue, FILE_UPLOAD_AREA_DESC_DISABLED as Ae, FILE_UPLOAD_AREA_DESC as pe, FILE_UPLOAD_AREA_PADDING as Ee, FILE_UPLOAD_AREA_BASE as _e, FILE_UPLOAD_AREA_ERROR_CAPTION as ge, FILE_UPLOAD_AREA_CAPTION as De, FILE_UPLOAD_AREA_STATE as d } from "../../constants/file-upload/file-upload.constants.mjs";
import { cn as P } from "../../utils/cn.mjs";
import { Icon as he } from "../icons/Icon/Icon.mjs";
const U = "Drop your files here, or", Le = "click to browse", me = "Up to 10 files, 100MB total limit", Ie = ne(({
  onFilesSelected: O,
  onValidationError: R,
  onDragEnter: N,
  onDragLeave: D,
  accept: h,
  maxFiles: f,
  maxSize: L,
  maxFileSize: u,
  multiple: y = !0,
  title: T = U,
  clickText: m = Le,
  description: F = me,
  icon: $ = ["system", "upload-cloud"],
  disabled: t = !1,
  error: i,
  caption: k,
  className: B,
  width: c
}, S) => {
  const A = oe(null), [K, v] = se(!1), W = K && !t, j = l(() => {
    t || A.current?.click();
  }, [t]), w = l((e) => {
    t || (e.key === "Enter" || e.key === " ") && (e.preventDefault(), A.current?.click());
  }, [t]), I = l((e, a) => {
    const n = [];
    let r = e;
    if (h) {
      const p = h.split(",").map((s) => s.trim()), o = r.filter((s) => !p.some((E) => {
        if (E.startsWith("."))
          return s.name.toLowerCase().endsWith(E.toLowerCase());
        if (E.endsWith("/*")) {
          const te = E.slice(0, -2);
          return s.type.startsWith(te);
        }
        return s.type === E;
      }));
      o.length > 0 && (o.forEach((s) => {
        n.push({ file: s, code: "invalid-type", message: `File "${s.name}" has an unsupported type` });
      }), r = r.filter((s) => !o.includes(s)));
    }
    if (u !== void 0) {
      const p = r.filter((o) => o.size > u);
      p.length > 0 && (p.forEach((o) => {
        n.push({ file: o, code: "file-too-large", message: `File "${o.name}" exceeds ${u} bytes` });
      }), r = r.filter((o) => o.size <= u));
    }
    f !== void 0 && r.length > f && (n.push({ code: "too-many-files", message: `Maximum ${f} files allowed` }), r = r.slice(0, f)), L !== void 0 && r.reduce((o, s) => o + s.size, 0) > L && (n.push({ code: "total-size-exceeded", message: `Total size exceeds ${L} bytes` }), r = []), n.length > 0 && R?.(n), r.length > 0 && O?.(r, a);
  }, [h, u, f, L, R, O]), x = l((e) => {
    const a = e.target.files;
    if (!a || a.length === 0) return;
    const n = Array.from(a);
    I(n, "click"), A.current && (A.current.value = "");
  }, [I]), X = l((e) => {
    e.preventDefault(), e.stopPropagation();
  }, []), z = l((e) => {
    e.preventDefault(), e.stopPropagation(), !t && (v(!0), N?.());
  }, [t, N]), M = l((e) => {
    e.preventDefault(), e.stopPropagation(), !t && (e.currentTarget.contains(e.relatedTarget) || (v(!1), D?.()));
  }, [t, D]), G = l((e) => {
    if (e.preventDefault(), e.stopPropagation(), t) return;
    v(!1), D?.();
    const a = e.dataTransfer.files;
    if (!a || a.length === 0) return;
    let n = Array.from(a);
    y || (n = n.slice(0, 1)), I(n, "drop");
  }, [t, y, D, I]), Z = () => t ? d.disabled : i ? d.error : W ? d.dragging : d.default, { iconType: q, isFill: H } = ae($), J = i === !0 || typeof i == "string" && i.length > 0, C = (typeof i == "string" && i.length > 0 ? i : void 0) || k, Q = C !== void 0 && C.length > 0, Y = c !== void 0 ? { width: typeof c == "number" ? `${c}px` : /^\d+$/.test(c) ? `${c}px` : c } : void 0, V = t ? ie : ce, b = t ? fe : ue, ee = t ? Ae : pe;
  return /* @__PURE__ */ _(
    "div",
    {
      ref: S,
      className: P("flex flex-col", c === void 0 && "w-full", B),
      style: Y,
      children: [
        /* @__PURE__ */ _(
          "div",
          {
            role: "button",
            tabIndex: t ? -1 : 0,
            onClick: j,
            onKeyDown: w,
            onDragOver: X,
            onDragEnter: z,
            onDragLeave: M,
            onDrop: G,
            className: P(
              _e,
              Ee,
              Z()
            ),
            "aria-disabled": t,
            "aria-label": m ? [T, m].filter(Boolean).join(" ") : T || U,
            children: [
              /* @__PURE__ */ g(
                "input",
                {
                  ref: A,
                  type: "file",
                  accept: h,
                  multiple: y,
                  onChange: x,
                  className: "sr-only",
                  disabled: t
                }
              ),
              /* @__PURE__ */ g(
                he,
                {
                  iconType: q,
                  isFill: H,
                  size: le,
                  color: t ? "default-disabled" : "default-muted"
                }
              ),
              /* @__PURE__ */ _("div", { className: "flex flex-col items-center ds-gap-4", children: [
                /* @__PURE__ */ _("span", { className: V, children: [
                  T,
                  m && /* @__PURE__ */ _(re, { children: [
                    " ",
                    /* @__PURE__ */ g("span", { className: b, children: m })
                  ] })
                ] }),
                /* @__PURE__ */ g("span", { className: ee, children: F })
              ] })
            ]
          }
        ),
        Q && /* @__PURE__ */ g("div", { className: P("margin-t-6", J ? ge : De), children: C })
      ]
    }
  );
});
Ie.displayName = "FileUploadArea";
export {
  Ie as FileUploadArea
};
