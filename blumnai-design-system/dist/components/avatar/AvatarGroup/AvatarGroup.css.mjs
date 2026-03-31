"use client";
const x = {
  "2xs": 20,
  xs: 24,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52,
  "2xl": 60,
  "3xl": 68
}, t = {
  "2xs": 8,
  xs: 8,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 12,
  "2xl": 14,
  "3xl": 16
}, i = {
  "2xs": { width: x["2xs"], height: x["2xs"], fontSize: "10px" },
  xs: { width: x.xs, height: x.xs, fontSize: "11px" },
  sm: { width: x.sm, height: x.sm, fontSize: "12px" },
  md: { width: x.md, height: x.md, fontSize: "14px" },
  lg: { width: x.lg, height: x.lg, fontSize: "16px" },
  xl: { width: x.xl, height: x.xl, fontSize: "18px" },
  "2xl": { width: x["2xl"], height: x["2xl"], fontSize: "20px" },
  "3xl": { width: x["3xl"], height: x["3xl"], fontSize: "22px" }
};
export {
  x as avatarRingSizes,
  t as overlaps,
  i as overlaySizes
};
