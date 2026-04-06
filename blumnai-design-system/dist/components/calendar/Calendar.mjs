"use client";
import { jsx as n, Fragment as k, jsxs as x } from "react/jsx-runtime";
import * as _ from "react";
import { getDefaultClassNames as C, DayPicker as N, useDayPicker as M } from "react-day-picker";
import { ko as L } from "date-fns/locale";
import { format as w } from "date-fns";
import { Select as S, SelectTrigger as z, SelectValue as P, SelectContent as D, SelectItem as j } from "../select/RadixSelect.mjs";
import { cn as t } from "../../utils/cn.mjs";
import { ControlButton as y } from "../button/ControlButton.mjs";
function B({
  className: s,
  day: d,
  modifiers: r,
  children: o,
  ...l
}) {
  const g = _.useRef(null);
  _.useEffect(() => {
    r.focused && g.current?.focus();
  }, [r.focused]);
  const h = r.selected || r.range_start || r.range_end, c = r.range_start, e = r.range_end, u = r.range_middle, m = r.today, a = r.outside, i = () => a ? u || h ? "bg-state-disabled" : "" : u ? "bg-state-soft hover:bg-state-soft-hover" : h ? "bg-state-brand hover:bg-state-brand-hover" : "hover:bg-state-ghost-hover", f = () => a ? "text-hint" : u ? "text-informative" : h ? "text-white-default" : "text-default", p = () => u ? "focus-visible:[box-shadow:0_0_0_2px_var(--border-highlight-accent)]" : c || e || r.selected ? "focus-visible:[box-shadow:0_0_0_1px_var(--border-accent-inverted),0_0_0_3px_var(--border-highlight)]" : "focus-visible:[box-shadow:0_0_0_2px_var(--border-highlight-accent)]", v = () => m ? /* @__PURE__ */ n(
    "span",
    {
      className: "grid place-items-center rounded-full bg-state-destructive text-white-default size-xs font-medium",
      style: { width: 21, height: 21, lineHeight: "21px" },
      children: o
    }
  ) : o;
  return /* @__PURE__ */ n(
    "button",
    {
      ref: g,
      type: "button",
      "data-day": d.date.toLocaleDateString(),
      "data-selected": h,
      "data-range-start": c,
      "data-range-end": e,
      "data-range-middle": u,
      "data-today": m,
      "data-outside": a,
      className: t(
        "flex items-center justify-center",
        "width-30 height-32",
        "appearance-none border-0 box-border",
        "cursor-pointer transition-colors duration-150",
        "font-body size-xs line-height-leading-4 font-medium letter-spacing-tracking-tight",
        "rounded-sm",
        "focus-visible:outline-none",
        p(),
        i(),
        f(),
        c && "rounded-r-none",
        e && "rounded-l-none",
        s
      ),
      ...l,
      "aria-current": m ? "date" : void 0,
      children: v()
    }
  );
}
function R({
  value: s,
  onChange: d,
  options: r,
  "aria-label": o
}) {
  const [l, g] = _.useState(!1), h = (e) => {
    d?.({
      target: { value: e }
    });
  }, c = Array.isArray(s) ? s[0] : s;
  return /* @__PURE__ */ n(
    "div",
    {
      onPointerDown: (e) => e.stopPropagation(),
      onMouseDown: (e) => e.stopPropagation(),
      onClick: (e) => e.stopPropagation(),
      style: { position: "relative", zIndex: 10 },
      children: /* @__PURE__ */ x(
        S,
        {
          value: c?.toString(),
          onValueChange: h,
          open: l,
          onOpenChange: g,
          children: [
            /* @__PURE__ */ n(
              z,
              {
                "aria-label": o,
                size: "sm",
                selectStyle: "default",
                className: "!w-auto !h-auto !min-h-0",
                children: /* @__PURE__ */ n(P, {})
              }
            ),
            /* @__PURE__ */ n(D, { className: "max-h-[280px]", children: r?.map((e) => /* @__PURE__ */ n(
              j,
              {
                value: e.value.toString(),
                disabled: e.disabled,
                children: e.label
              },
              e.value
            )) })
          ]
        }
      )
    }
  );
}
function b({
  direction: s,
  disabled: d,
  onClick: r,
  "aria-label": o
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      "aria-label": o ?? (s === "prev" ? "Previous month" : "Next month"),
      onClick: r,
      disabled: d,
      className: t(
        "inline-flex items-center justify-center width-24 height-24 rounded-xs",
        "transition-all duration-200 focus:outline-none",
        d ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-state-ghost-hover active:bg-state-ghost-press focus-visible:shadow-component-misc-focus"
      ),
      children: /* @__PURE__ */ n(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "text-muted",
          children: s === "prev" ? /* @__PURE__ */ n("path", { d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" }) : /* @__PURE__ */ n("path", { d: "M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" })
        }
      )
    }
  );
}
function O({
  calendarMonth: s,
  layout: d,
  children: r
}) {
  const { previousMonth: o, nextMonth: l, goToMonth: g, dayPickerProps: h } = M(), c = h.locale ?? L, e = w(s.date, "LLLL", { locale: c }), u = () => {
    o && g(o);
  }, m = () => {
    l && g(l);
  }, a = o ? w(o, "LLLL", { locale: c }) : void 0, i = l ? w(l, "LLLL", { locale: c }) : void 0, f = a ? `${a}` : void 0, p = i ? `${i}` : void 0, v = d === "month-centered" || d === "month-left";
  return d === "month-left" ? /* @__PURE__ */ x("div", { className: "flex items-center height-40 border-b-default [margin-top:-8px] [margin-right:-8px] [margin-left:-8px] padding-y-8 padding-l-12 padding-r-8 ds-gap-8", "data-caption-layout": "month-left", children: [
    /* @__PURE__ */ n("span", { className: "flex-1 text-left size-md font-medium line-height-leading-5 text-default font-body", children: e }),
    /* @__PURE__ */ x("div", { className: "flex ds-gap-4", children: [
      /* @__PURE__ */ n(b, { direction: "prev", disabled: !o, onClick: u, "aria-label": f }),
      /* @__PURE__ */ n(b, { direction: "next", disabled: !l, onClick: m, "aria-label": p })
    ] })
  ] }) : /* @__PURE__ */ x("div", { className: "flex items-center height-40 border-b-default [margin-top:-8px] [margin-right:-8px] [margin-left:-8px] padding-8 ds-gap-8", "data-caption-layout": d, children: [
    /* @__PURE__ */ n(b, { direction: "prev", disabled: !o, onClick: u, "aria-label": f }),
    /* @__PURE__ */ n("div", { className: "flex-1 flex items-center justify-center ds-gap-6 size-sm font-medium line-height-leading-5 text-default font-body", children: v ? e : r }),
    /* @__PURE__ */ n(b, { direction: "next", disabled: !l, onClick: m, "aria-label": p })
  ] });
}
function A({
  className: s,
  classNames: d,
  showOutsideDays: r = !0,
  captionLayout: o = "month-centered",
  calendarStyle: l = "bordered",
  locale: g = L,
  components: h,
  ...c
}) {
  const e = C(), m = o === "month-centered" || o === "month-left" ? "label" : o;
  return /* @__PURE__ */ n(
    N,
    {
      showOutsideDays: r,
      locale: g,
      className: t(
        "bg-card group/calendar padding-8 font-body",
        l === "bordered" && "border-default rounded-lg",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        s
      ),
      captionLayout: m,
      classNames: {
        root: t("w-fit [--calendar-width:234px]", e.root),
        months: t(
          "flex flex-col md:flex-row md:ds-gap-0",
          e.months
        ),
        month: t(
          "flex w-[var(--calendar-width)] [box-sizing:content-box] flex-col ds-gap-4 relative",
          "md:[&:not(:first-child)]:[padding-left:8px] md:[&:not(:last-child)]:[padding-right:8px]",
          'md:[&:not(:first-child)]:before:content-[""] md:[&:not(:first-child)]:before:absolute md:[&:not(:first-child)]:before:[left:-0.5px] md:[&:not(:first-child)]:before:[top:-8px] md:[&:not(:first-child)]:before:[bottom:-8px] md:[&:not(:first-child)]:before:w-px md:[&:not(:first-child)]:before:[background:var(--border-darker)]',
          e.month
        ),
        nav: t("hidden", e.nav),
        button_previous: t("hidden", e.button_previous),
        button_next: t("hidden", e.button_next),
        month_caption: t(e.month_caption),
        dropdowns: t(
          "flex items-center justify-center ds-gap-6",
          e.dropdowns
        ),
        dropdown_root: t(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border-solid border-[1px]",
          e.dropdown_root
        ),
        dropdown: t(
          "bg-popover absolute inset-0 opacity-0",
          e.dropdown
        ),
        caption_label: t(
          "select-none font-medium size-sm line-height-leading-5",
          e.caption_label
        ),
        table: "w-full",
        weekdays: t("flex ds-gap-4 [margin-bottom:4px]", e.weekdays),
        weekday: t(
          "text-hint select-none rounded-sm size-xs font-medium width-30 height-32 flex items-center justify-center letter-spacing-tracking-tight",
          e.weekday
        ),
        week: t("flex w-full ds-gap-4 [margin-bottom:4px] last:[margin-bottom:0]", e.week),
        week_number_header: t(
          "width-30 select-none",
          e.week_number_header
        ),
        week_number: t(
          "text-hint select-none size-xs",
          e.week_number
        ),
        day: t(
          "group/day relative width-30 height-32 select-none padding-0 text-center",
          "[&:first-child[data-selected=true]_button]:rounded-l-md",
          "[&:last-child[data-selected=true]_button]:rounded-r-md",
          e.day
        ),
        range_start: t(e.range_start),
        range_middle: t(e.range_middle),
        range_end: t(e.range_end),
        today: t(e.today),
        outside: t(
          "text-hint aria-selected:text-hint",
          e.outside
        ),
        disabled: t(
          "text-hint opacity-50",
          e.disabled
        ),
        hidden: t("invisible", e.hidden),
        ...d
      },
      components: {
        Root: ({ className: a, rootRef: i, ...f }) => /* @__PURE__ */ n(
          "div",
          {
            "data-slot": "calendar",
            ref: i,
            className: t(a),
            ...f
          }
        ),
        PreviousMonthButton: ({ children: a, ...i }) => /* @__PURE__ */ n(
          y,
          {
            icon: ["arrows", "arrow-left-s"],
            size: "sm",
            shape: "rounded",
            "aria-label": "Previous month",
            ...i
          }
        ),
        NextMonthButton: ({ children: a, ...i }) => /* @__PURE__ */ n(
          y,
          {
            icon: ["arrows", "arrow-right-s"],
            size: "sm",
            shape: "rounded",
            "aria-label": "Next month",
            ...i
          }
        ),
        DayButton: B,
        WeekNumber: ({ children: a, ...i }) => /* @__PURE__ */ n("td", { ...i, children: /* @__PURE__ */ n("div", { className: "flex width-30 height-32 items-center justify-center text-center", children: a }) }),
        Dropdown: (a) => /* @__PURE__ */ n(R, { ...a }),
        Nav: () => /* @__PURE__ */ n(k, {}),
        MonthCaption: ({ calendarMonth: a, children: i }) => /* @__PURE__ */ n(
          O,
          {
            calendarMonth: a,
            layout: o,
            children: i
          }
        ),
        ...h
      },
      ...c
    }
  );
}
A.displayName = "Calendar";
export {
  A as Calendar,
  B as CalendarDayButton
};
