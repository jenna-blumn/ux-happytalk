"use client";
import { jsx as r } from "react/jsx-runtime";
import { forwardRef as v } from "react";
import { DefaultInput as d } from "./variants/DefaultInput.mjs";
import { AddOnInput as o } from "./variants/AddOnInput.mjs";
import { ButtonInput as e } from "./variants/ButtonInput.mjs";
import { DropdownInput as s } from "./variants/DropdownInput.mjs";
import { QuantityInput as u } from "./variants/QuantityInput.mjs";
import { TagsInput as c } from "./variants/TagsInput.mjs";
import { ShortcutInput as m } from "./variants/ShortcutInput.mjs";
import { PasswordInput as l } from "./variants/PasswordInput.mjs";
const _ = v((a, n) => {
  switch (a.variant) {
    case "password": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(l, { ref: n, ...t });
    }
    case "shortcut": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(m, { ref: n, ...t });
    }
    case "tags": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(c, { ref: n, ...t, inline: !0 });
    }
    case "inline-tags": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(c, { ref: n, ...t, inline: !1 });
    }
    case "quantity": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(u, { ref: n, ...t, quantityVariant: "default" });
    }
    case "quantity-2": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(u, { ref: n, ...t, quantityVariant: "compact" });
    }
    case "tail-dropdown": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(s, { ref: n, ...t, dropdownPosition: "tail" });
    }
    case "lead-dropdown": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(s, { ref: n, ...t, dropdownPosition: "lead" });
    }
    case "tail-button": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(e, { ref: n, ...t, buttonPosition: "tail" });
    }
    case "lead-button": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(e, { ref: n, ...t, buttonPosition: "lead" });
    }
    case "addon": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(o, { ref: n, ...t, inline: !1 });
    }
    case "inline-addon": {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(o, { ref: n, ...t, inline: !0 });
    }
    default: {
      const { variant: i, ...t } = a;
      return /* @__PURE__ */ r(d, { ref: n, ...t });
    }
  }
});
_.displayName = "Input";
export {
  _ as Input
};
