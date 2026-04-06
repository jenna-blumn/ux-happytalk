"use client";
function l(e) {
  return e.length === 3 && typeof e[2] == "boolean" ? {
    iconType: [e[0], e[1]],
    isFill: e[2]
  } : {
    iconType: e,
    isFill: !1
  };
}
export {
  l as parseIconTypeWithFill
};
