const l = {
  "⌘": "meta",
  "⇧": "shift",
  "⌥": "alt",
  "⌃": "ctrl"
}, o = {
  ctrl: "ctrl",
  control: "ctrl",
  cmd: "meta",
  meta: "meta",
  command: "meta",
  shift: "shift",
  alt: "alt",
  option: "alt",
  opt: "alt"
}, c = {
  esc: "escape",
  return: "enter",
  space: " ",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright",
  del: "delete",
  backspace: "backspace",
  "⌫": "backspace",
  "⌦": "delete"
};
function n(s) {
  const e = {
    key: "",
    meta: !1,
    ctrl: !1,
    shift: !1,
    alt: !1,
    hasModifier: !1
  };
  if (s.includes("+")) {
    const r = s.split("+").map((t) => t.trim());
    for (const t of r)
      if (t in l)
        e[l[t]] = !0;
      else {
        const a = t.toLowerCase();
        a in o ? e[o[a]] = !0 : e.key = c[a] ?? a;
      }
  } else {
    let r = s;
    for (const [a, i] of Object.entries(l))
      r.includes(a) && (e[i] = !0, r = r.replace(a, ""));
    const t = r.trim().toLowerCase();
    e.key = c[t] ?? t;
  }
  return e.hasModifier = e.meta || e.ctrl || e.shift || e.alt, e;
}
export {
  n as parseShortcut
};
