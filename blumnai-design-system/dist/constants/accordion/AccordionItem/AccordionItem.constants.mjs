import { BG as S, BORDER_STYLE as r, BORDER as $, SHADOWS as a, BG_STATE as e, RADIUS as o, SPACING as t } from "../../common/token-classes.mjs";
const f = a.card, d = `${S.card} ${r.border} ${$.default}`, l = {
  default: `${e.secondary} ${r.border} ${o.lg.default} ${t.p6} ${$.default}`,
  soft: `${e.soft} ${o.lg.default} ${t.p6}`,
  ghost: `${S.transparent} ${o.lg.default} ${t.p6}`,
  line: `${S.transparent} ${r.border0} ${r.borderB} ${o.none.default} ${t.py6} ${t.px0} ${$.default}`
}, n = {
  default: e.secondaryHover,
  soft: e.softHover,
  ghost: e.ghostHover,
  line: $.darker
}, E = {
  default: "",
  soft: `${d} ${a.card}`,
  ghost: `${d} ${a.card}`,
  line: ""
};
export {
  f as BOX_SHADOW,
  d as OPEN_CARD_CLASSES,
  l as STYLE_BASE_CLASSES,
  n as STYLE_HOVER_CLASSES,
  E as STYLE_OPEN_CLASSES
};
