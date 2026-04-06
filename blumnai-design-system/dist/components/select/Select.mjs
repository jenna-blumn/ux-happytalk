"use client";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { ExtendedSelect as s } from "./RadixSelect.mjs";
import { MultiSelect as r } from "./RadixMultiSelect.mjs";
const c = i((l, t) => {
  const n = l.variant ?? "default";
  if (n === "multi-select") {
    const e = l;
    return /* @__PURE__ */ o(
      r,
      {
        ref: t,
        variant: "default",
        selectStyle: e.selectStyle,
        size: e.size,
        label: e.label,
        required: e.required,
        supportText: e.supportText,
        caption: e.caption,
        error: e.error,
        success: e.success,
        disabled: e.disabled,
        placeholder: e.placeholder,
        leadIcon: e.leadIcon,
        tailIcon: e.tailIcon,
        options: e.options,
        value: e.value,
        onChange: e.onChange,
        searchable: e.searchable,
        searchPlaceholder: e.searchPlaceholder,
        noResultsText: e.noResultsText,
        open: e.open,
        onOpenChange: e.onOpenChange,
        maxHeight: e.maxHeight,
        width: e.width,
        minWidth: e.minWidth,
        className: e.className,
        maxSelections: e.maxSelections,
        selectedText: e.selectedText,
        showSelectAll: e.showSelectAll,
        selectAllLabel: e.selectAllLabel,
        clearable: e.clearable,
        loading: e.loading,
        optionGroups: e.optionGroups,
        renderOption: e.renderOption
      }
    );
  }
  if (n === "tags") {
    const e = l;
    return /* @__PURE__ */ o(
      r,
      {
        ref: t,
        variant: "tags",
        selectStyle: e.selectStyle,
        size: e.size,
        label: e.label,
        required: e.required,
        supportText: e.supportText,
        caption: e.caption,
        error: e.error,
        success: e.success,
        disabled: e.disabled,
        placeholder: e.placeholder,
        leadIcon: e.leadIcon,
        tailIcon: e.tailIcon,
        options: e.options,
        value: e.value,
        onChange: e.onChange,
        searchable: e.searchable,
        searchPlaceholder: e.searchPlaceholder,
        noResultsText: e.noResultsText,
        open: e.open,
        onOpenChange: e.onOpenChange,
        maxHeight: e.maxHeight,
        width: e.width,
        minWidth: e.minWidth,
        className: e.className,
        maxSelections: e.maxSelections,
        maxVisibleTags: e.maxVisibleTags,
        overflowText: e.overflowText,
        clearable: e.clearable,
        loading: e.loading,
        optionGroups: e.optionGroups,
        renderOption: e.renderOption
      }
    );
  }
  if (n === "avatar") {
    const e = l;
    return /* @__PURE__ */ o(
      s,
      {
        ref: t,
        variant: "avatar",
        selectStyle: e.selectStyle,
        size: e.size,
        label: e.label,
        required: e.required,
        supportText: e.supportText,
        caption: e.caption,
        error: e.error,
        success: e.success,
        disabled: e.disabled,
        placeholder: e.placeholder,
        leadIcon: e.leadIcon,
        tailIcon: e.tailIcon,
        options: e.options,
        value: e.value,
        onChange: e.onChange,
        defaultValue: e.defaultValue,
        searchable: e.searchable,
        searchPlaceholder: e.searchPlaceholder,
        noResultsText: e.noResultsText,
        open: e.open,
        onOpenChange: e.onOpenChange,
        maxHeight: e.maxHeight,
        width: e.width,
        minWidth: e.minWidth,
        className: e.className,
        clearable: e.clearable,
        loading: e.loading,
        optionGroups: e.optionGroups,
        renderOption: e.renderOption
      }
    );
  }
  const a = l;
  return /* @__PURE__ */ o(
    s,
    {
      ref: t,
      variant: "default",
      selectStyle: a.selectStyle,
      size: a.size,
      label: a.label,
      required: a.required,
      supportText: a.supportText,
      caption: a.caption,
      error: a.error,
      success: a.success,
      disabled: a.disabled,
      placeholder: a.placeholder,
      leadIcon: a.leadIcon,
      tailIcon: a.tailIcon,
      options: a.options,
      value: a.value,
      onChange: a.onChange,
      defaultValue: a.defaultValue,
      searchable: a.searchable,
      searchPlaceholder: a.searchPlaceholder,
      noResultsText: a.noResultsText,
      open: a.open,
      onOpenChange: a.onOpenChange,
      maxHeight: a.maxHeight,
      width: a.width,
      minWidth: a.minWidth,
      className: a.className,
      selectType: a.selectType,
      clearable: a.clearable,
      loading: a.loading,
      optionGroups: a.optionGroups,
      renderOption: a.renderOption
    }
  );
});
c.displayName = "Select";
export {
  c as Select
};
