import { useCallback as c } from "react";
function i(...o) {
  return c((e) => {
    o.forEach((t) => {
      typeof t == "function" ? t(e) : t && typeof t == "object" && (t.current = e);
    });
  }, o);
}
export {
  i as useMergeRefs
};
