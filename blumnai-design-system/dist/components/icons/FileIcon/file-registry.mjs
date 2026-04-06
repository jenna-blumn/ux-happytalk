"use client";
import { lazy as _ } from "react";
let l = null, n = null;
function u() {
  return l ? Promise.resolve(l) : (n || (n = import("./icons/all.mjs").then((e) => (l = e, l))), n);
}
const m = {
  archive__lg: "FileArchiveLgIcon",
  archive__md: "FileArchiveMdIcon",
  archive__sm: "FileArchiveSmIcon",
  code__lg: "FileCodeLgIcon",
  code__md: "FileCodeMdIcon",
  code__sm: "FileCodeSmIcon",
  default__lg: "FileDefaultLgIcon",
  default__md: "FileDefaultMdIcon",
  default__sm: "FileDefaultSmIcon",
  image__lg: "FileImageLgIcon",
  image__md: "FileImageMdIcon",
  image__sm: "FileImageSmIcon",
  music__lg: "FileMusicLgIcon",
  music__md: "FileMusicMdIcon",
  music__sm: "FileMusicSmIcon",
  pdf__lg: "FilePDFLgIcon",
  pdf__md: "FilePDFMdIcon",
  pdf__sm: "FilePDFSmIcon",
  "thumbnail 1:1__lg": "FileThumbnail11LgIcon",
  "thumbnail 1:1__md": "FileThumbnail11MdIcon",
  "thumbnail 1:1__sm": "FileThumbnail11SmIcon",
  "thumbnail 4:3__lg": "FileThumbnail43LgIcon",
  "thumbnail 4:3__md": "FileThumbnail43MdIcon",
  "thumbnail 4:3__sm": "FileThumbnail43SmIcon",
  video__lg: "FileVideoLgIcon",
  video__md: "FileVideoMdIcon",
  video__sm: "FileVideoSmIcon"
}, o = {};
function t(e) {
  const i = m[e];
  return !i || !l ? null : l[i] || null;
}
function a(e) {
  const i = m[e];
  return i ? (o[e] || (o[e] = _(
    () => u().then((c) => ({
      default: c[i]
    }))
  )), o[e]) : null;
}
function F(e) {
  return e in m;
}
export {
  a as getFileLazy,
  t as getFileSync,
  F as hasFile
};
