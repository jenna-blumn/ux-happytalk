"use client";
import { jsx as r, jsxs as S } from "react/jsx-runtime";
import * as i from "react";
import { Slot as y } from "@radix-ui/react-slot";
import * as A from "@radix-ui/react-separator";
import { cva as j } from "class-variance-authority";
import { useIsMobile as B } from "../../hooks/use-mobile.mjs";
import { TooltipTrigger as G } from "../tooltip/Tooltip/TooltipTrigger.mjs";
import { Sheet as H, SheetContent as K, SheetHeader as O, SheetTitle as $, SheetDescription as L } from "../drawer-sheet/Sheet/Sheet.mjs";
import { cn as o } from "../../utils/cn.mjs";
import { Icon as _ } from "../icons/Icon/Icon.mjs";
import { Skeleton as T } from "../skeleton/Skeleton.mjs";
const V = "sidebar_state", W = 3600 * 24 * 7, q = "256px", F = "288px", P = "48px", U = "b", D = i.createContext(null);
function N() {
  const e = i.useContext(D);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const X = i.forwardRef(
  ({
    defaultOpen: e = !0,
    open: a,
    onOpenChange: t,
    onCollapse: d,
    onExpand: n,
    persistState: s = !0,
    className: l,
    style: g,
    children: m,
    ...f
  }, v) => {
    const u = B(), [w, x] = i.useState(!1), [h, z] = i.useState("offcanvas"), [R, C] = i.useState(e), c = a ?? R, M = i.useCallback(
      (b) => {
        const p = typeof b == "function" ? b(c) : b;
        t ? t(p) : C(p), p ? n?.() : d?.(), s && (document.cookie = `${V}=${p}; path=/; max-age=${W}`);
      },
      [t, c, d, n, s]
    ), k = i.useCallback(() => {
      if (h !== "none")
        return u ? x((b) => !b) : M((b) => !b);
    }, [u, M, x, h]);
    i.useEffect(() => {
      const b = (p) => {
        h !== "none" && p.key === U && (p.metaKey || p.ctrlKey) && (p.preventDefault(), k());
      };
      return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
    }, [k, h]);
    const I = c ? "expanded" : "collapsed", E = i.useMemo(
      () => ({
        state: I,
        open: c,
        setOpen: M,
        isMobile: u,
        openMobile: w,
        setOpenMobile: x,
        toggleSidebar: k,
        collapsible: h,
        setCollapsible: z
      }),
      [I, c, M, u, w, x, k, h]
    );
    return /* @__PURE__ */ r(D.Provider, { value: E, children: /* @__PURE__ */ r(
      "div",
      {
        style: {
          "--sidebar-width": q,
          "--sidebar-width-icon": P,
          ...g
        },
        className: o(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          l
        ),
        ref: v,
        ...f,
        children: m
      }
    ) });
  }
);
X.displayName = "SidebarProvider";
const Y = i.forwardRef(
  ({
    side: e = "left",
    variant: a = "sidebar",
    collapsible: t = "offcanvas",
    showRail: d = !1,
    showToggleButton: n = !1,
    toggleButtonPosition: s = "center",
    toggleButtonOffset: l,
    toggleButtonIcon: g,
    className: m,
    children: f,
    ...v
  }, u) => {
    const { isMobile: w, state: x, openMobile: h, setOpenMobile: z, setCollapsible: R, toggleSidebar: C } = N();
    i.useEffect(() => {
      R(t);
    }, [t, R]);
    const c = t === "none" ? "expanded" : x;
    return w ? /* @__PURE__ */ r(H, { open: h, onOpenChange: z, ...v, children: /* @__PURE__ */ S(
      K,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[var(--sidebar-width)] bg-sidebar padding-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": F
        },
        side: e,
        children: [
          /* @__PURE__ */ S(O, { className: "sr-only", children: [
            /* @__PURE__ */ r($, { children: "Sidebar" }),
            /* @__PURE__ */ r(L, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex h-full w-full flex-col", children: f })
        ]
      }
    ) }) : /* @__PURE__ */ S(
      "div",
      {
        ref: u,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": c,
        "data-collapsible": c === "collapsed" ? t : "",
        "data-variant": a,
        "data-side": e,
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              className: o(
                "relative w-[var(--sidebar-width)] bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:!w-0",
                "group-data-[side=right]:rotate-180",
                // Floating: spacer stays at icon width (sidebar overlays content when expanded)
                a === "floating" ? "!w-[var(--sidebar-width-icon)]" : "group-data-[collapsible=icon]:!w-[var(--sidebar-width-icon)]"
              )
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: o(
                "fixed inset-y-0 z-10 hidden h-svh w-[var(--sidebar-width)] transition-[left,right,width] duration-200 ease-linear md:flex",
                e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                a === "floating" || a === "inset" ? "padding-8 group-data-[collapsible=icon]:!w-[var(--sidebar-width-icon)] group-data-[collapsible=icon]:!padding-4" : "group-data-[collapsible=icon]:!w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                m
              ),
              ...v,
              children: /* @__PURE__ */ r(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border-solid group-data-[variant=floating]:border-[1px] group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: f
                }
              )
            }
          ),
          d && /* @__PURE__ */ r(
            "button",
            {
              "data-sidebar": "rail",
              "aria-label": "Toggle Sidebar",
              tabIndex: -1,
              onClick: C,
              title: "Toggle Sidebar",
              className: o(
                "fixed inset-y-0 z-20 hidden width-16 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
                e === "left" ? "left-[var(--sidebar-width)] group-data-[collapsible=icon]:left-[var(--sidebar-width-icon)]" : "right-[var(--sidebar-width)] group-data-[collapsible=icon]:right-[var(--sidebar-width-icon)]",
                "cursor-w-resize",
                c === "collapsed" && "cursor-e-resize"
              )
            }
          ),
          n && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              "data-sidebar": "toggle-button",
              onClick: C,
              "aria-label": "Toggle Sidebar",
              "aria-expanded": c === "expanded",
              title: "Toggle Sidebar",
              className: o(
                "fixed z-20 flex items-center justify-center cursor-pointer",
                "width-24 height-24 rounded-full",
                "bg-default border-default shadow-sm",
                "hover:bg-subtle transition-colors",
                e === "left" ? "left-[calc(var(--sidebar-width)-12px)] group-data-[collapsible=icon]:left-[calc(var(--sidebar-width-icon)-12px)]" : "right-[calc(var(--sidebar-width)-12px)] group-data-[collapsible=icon]:right-[calc(var(--sidebar-width-icon)-12px)]",
                !l && s === "top" && "[top:16px]",
                !l && s === "center" && "top-1/2 -translate-y-1/2",
                !l && s === "bottom" && "[bottom:16px]"
              ),
              style: l !== void 0 ? {
                top: typeof l == "number" ? `${l}px` : l
              } : void 0,
              children: g || /* @__PURE__ */ r(
                _,
                {
                  iconType: c === "collapsed" != (e === "right") ? ["arrows", "arrow-right-s"] : ["arrows", "arrow-left-s"],
                  size: 14,
                  color: "var(--icon-default-muted)"
                }
              )
            }
          )
        ]
      }
    );
  }
);
Y.displayName = "Sidebar";
const J = i.forwardRef(({ className: e, onClick: a, ...t }, d) => {
  const { toggleSidebar: n } = N();
  return /* @__PURE__ */ S(
    "button",
    {
      ref: d,
      type: "button",
      "data-sidebar": "trigger",
      className: o(
        "height-28 width-28 inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        e
      ),
      onClick: (s) => {
        a?.(s), n();
      },
      ...t,
      children: [
        /* @__PURE__ */ r(_, { iconType: ["system", "side-bar"], size: 16 }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
J.displayName = "SidebarTrigger";
const Q = i.forwardRef(({ className: e, ...a }, t) => {
  const { toggleSidebar: d } = N();
  return /* @__PURE__ */ r(
    "button",
    {
      ref: t,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: d,
      title: "Toggle Sidebar",
      className: o(
        "absolute inset-y-0 z-20 hidden width-16 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:[right:-16px] group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:[right:-8px]",
        "[[data-side=right][data-collapsible=offcanvas]_&]:[left:-8px]",
        e
      ),
      ...a
    }
  );
});
Q.displayName = "SidebarRail";
const Z = i.forwardRef(({ className: e, position: a = "center", offset: t, icon: d, ...n }, s) => {
  const { toggleSidebar: l, state: g, collapsible: m } = N();
  if (m === "none") return null;
  const f = g === "collapsed";
  return /* @__PURE__ */ r(
    "button",
    {
      ref: s,
      type: "button",
      "data-sidebar": "toggle-button",
      onClick: l,
      "aria-label": "Toggle Sidebar",
      "aria-expanded": g === "expanded",
      title: "Toggle Sidebar",
      className: o(
        "absolute [right:-12px] z-20 flex items-center justify-center cursor-pointer",
        "width-24 height-24 rounded-full",
        "bg-default border-default shadow-sm",
        "hover:bg-subtle transition-colors",
        "group-data-[side=right]:[left:-12px] group-data-[side=right]:right-auto",
        !t && {
          top: "[top:16px]",
          center: "top-1/2 -translate-y-1/2",
          bottom: "[bottom:16px]"
        }[a],
        e
      ),
      style: t !== void 0 ? {
        top: typeof t == "number" ? `${t}px` : t
      } : void 0,
      ...n,
      children: d || /* @__PURE__ */ r(
        _,
        {
          iconType: f ? ["arrows", "arrow-right-s"] : ["arrows", "arrow-left-s"],
          size: 14,
          color: "var(--icon-default-muted)",
          className: "group-data-[side=right]:rotate-180"
        }
      )
    }
  );
});
Z.displayName = "SidebarToggleButton";
const ee = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "main",
  {
    ref: t,
    className: o(
      "relative flex w-full flex-1 flex-col bg-background",
      "md:peer-data-[variant=inset]:m-[8px] md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-[8px] md:peer-data-[variant=inset]:[margin-left:0] md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      e
    ),
    ...a
  }
));
ee.displayName = "SidebarInset";
const ae = i.forwardRef(({ className: e, type: a, ...t }, d) => /* @__PURE__ */ r(
  "input",
  {
    ref: d,
    type: a,
    "data-sidebar": "input",
    className: o(
      "flex height-32 w-full rounded-md border-solid border-[1px] border-input bg-background padding-x-12 padding-y-4 size-sm font-body line-height-leading-5 shadow-none transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t
  }
));
ae.displayName = "SidebarInput";
const te = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    "data-sidebar": "header",
    className: o(
      "flex flex-col ds-gap-8 padding-8",
      "group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:padding-x-0",
      e
    ),
    ...a
  }
));
te.displayName = "SidebarHeader";
const re = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    "data-sidebar": "footer",
    className: o(
      "flex flex-col ds-gap-8 padding-8",
      "group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:padding-x-0",
      e
    ),
    ...a
  }
));
re.displayName = "SidebarFooter";
const ie = i.forwardRef(({ className: e, orientation: a = "horizontal", decorative: t = !0, ...d }, n) => /* @__PURE__ */ r(
  A.Root,
  {
    ref: n,
    decorative: t,
    orientation: a,
    "data-sidebar": "separator",
    className: o(
      "margin-x-8 w-auto bg-sidebar-border shrink-0",
      a === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      e
    ),
    ...d
  }
));
ie.displayName = "SidebarSeparator";
const de = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    "data-sidebar": "content",
    className: o(
      "flex min-h-0 flex-1 flex-col ds-gap-8 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...a
  }
));
de.displayName = "SidebarContent";
const oe = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    "data-sidebar": "group",
    className: o(
      "relative flex w-full min-w-0 flex-col padding-8",
      "group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:padding-x-0",
      e
    ),
    ...a
  }
));
oe.displayName = "SidebarGroup";
const ne = i.forwardRef(({ className: e, asChild: a = !1, ...t }, d) => /* @__PURE__ */ r(
  a ? y : "div",
  {
    ref: d,
    "data-sidebar": "group-label",
    className: o(
      "flex height-32 shrink-0 items-center rounded-md padding-x-8 size-xs font-body font-medium line-height-leading-4 text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:width-16 [&>svg]:height-16 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:[margin-top:-32px] group-data-[collapsible=icon]:opacity-0",
      e
    ),
    ...t
  }
));
ne.displayName = "SidebarGroupLabel";
const se = i.forwardRef(({ className: e, asChild: a = !1, ...t }, d) => /* @__PURE__ */ r(
  a ? y : "button",
  {
    ref: d,
    "data-sidebar": "group-action",
    className: o(
      "absolute right-[12px] top-[14px] flex aspect-square width-20 items-center justify-center rounded-md padding-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:width-16 [&>svg]:height-16 [&>svg]:shrink-0",
      "after:absolute after:[inset:-8px] after:md:hidden",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...t
  }
));
se.displayName = "SidebarGroupAction";
const le = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    "data-sidebar": "group-content",
    className: o("w-full size-sm font-body line-height-leading-5", e),
    ...a
  }
));
le.displayName = "SidebarGroupContent";
const ce = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "ul",
  {
    ref: t,
    "data-sidebar": "menu",
    className: o(
      "flex w-full min-w-0 flex-col ds-gap-4 list-none",
      "group-data-[collapsible=icon]:items-center",
      e
    ),
    ...a
  }
));
ce.displayName = "SidebarMenu";
const be = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "li",
  {
    ref: t,
    "data-sidebar": "menu-item",
    className: o("group/menu-item relative", e),
    ...a
  }
));
be.displayName = "SidebarMenuItem";
const ue = j(
  "peer/menu-button flex w-full items-center ds-gap-8 overflow-hidden rounded-md padding-8 text-left size-sm font-body line-height-leading-5 outline-none ring-sidebar-ring transition-[width,height,padding] cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:[padding-right:32px] aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!width-32 group-data-[collapsible=icon]:!padding-8 group-data-[collapsible=icon]:justify-center [&>span:last-child]:truncate [&>svg]:width-16 [&>svg]:height-16 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "height-32 size-sm",
        sm: "height-28 size-xs",
        lg: "height-48 size-sm group-data-[collapsible=icon]:!padding-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), pe = i.forwardRef(
  ({
    asChild: e = !1,
    isActive: a = !1,
    variant: t = "default",
    size: d = "default",
    tooltip: n,
    className: s,
    ...l
  }, g) => {
    const m = e ? y : "button", { isMobile: f, state: v } = N(), u = /* @__PURE__ */ r(
      m,
      {
        ref: g,
        "data-sidebar": "menu-button",
        "data-size": d,
        "data-active": a,
        "aria-current": a ? "page" : void 0,
        className: o(ue({ variant: t, size: d }), s),
        ...l
      }
    );
    if (!n)
      return u;
    const w = typeof n == "string" ? n : n.children;
    return /* @__PURE__ */ r(
      G,
      {
        content: w,
        placement: "right",
        delay: 0,
        disabled: v !== "collapsed" || f,
        children: u
      }
    );
  }
);
pe.displayName = "SidebarMenuButton";
const ge = i.forwardRef(({ className: e, asChild: a = !1, showOnHover: t = !1, ...d }, n) => /* @__PURE__ */ r(
  a ? y : "button",
  {
    ref: n,
    "data-sidebar": "menu-action",
    className: o(
      "absolute right-[4px] top-[6px] flex aspect-square width-20 items-center justify-center rounded-md padding-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:width-16 [&>svg]:height-16 [&>svg]:shrink-0",
      "after:absolute after:[inset:-8px] after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-[4px]",
      "peer-data-[size=default]/menu-button:top-[6px]",
      "peer-data-[size=lg]/menu-button:top-[10px]",
      "group-data-[collapsible=icon]:hidden",
      t && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      e
    ),
    ...d
  }
));
ge.displayName = "SidebarMenuAction";
const fe = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    "data-sidebar": "menu-badge",
    className: o(
      "pointer-events-none absolute right-[4px] top-[6px] flex height-20 min-w-[20px] select-none items-center justify-center rounded-md padding-x-4 size-xs font-body font-medium line-height-leading-4 tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...a
  }
));
fe.displayName = "SidebarMenuBadge";
const he = i.forwardRef(({ className: e, showIcon: a = !1, ...t }, d) => {
  const n = i.useRef(null);
  n.current === null && (n.current = `${Math.floor(Math.random() * 40) + 50}%`);
  const s = n.current;
  return /* @__PURE__ */ S(
    "div",
    {
      ref: d,
      "data-sidebar": "menu-skeleton",
      className: o("flex height-32 items-center ds-gap-8 rounded-md padding-x-8", e),
      ...t,
      children: [
        a && /* @__PURE__ */ r(
          T,
          {
            className: "width-16 height-16 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ r(
          T,
          {
            className: "height-16 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": s
            }
          }
        )
      ]
    }
  );
});
he.displayName = "SidebarMenuSkeleton";
const me = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "ul",
  {
    ref: t,
    "data-sidebar": "menu-sub",
    className: o(
      "margin-x-14 flex min-w-0 translate-x-px flex-col ds-gap-4 border-l border-sidebar-border padding-x-10 padding-y-2 list-none",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...a
  }
));
me.displayName = "SidebarMenuSub";
const ve = i.forwardRef(({ ...e }, a) => /* @__PURE__ */ r("li", { ref: a, ...e }));
ve.displayName = "SidebarMenuSubItem";
const xe = i.forwardRef(({ asChild: e = !1, size: a = "md", isActive: t, className: d, ...n }, s) => /* @__PURE__ */ r(
  e ? y : "a",
  {
    ref: s,
    "data-sidebar": "menu-sub-button",
    "data-size": a,
    "data-active": t,
    className: o(
      "flex height-28 min-w-0 -translate-x-px items-center ds-gap-8 overflow-hidden rounded-md padding-x-8 font-body text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:width-16 [&>svg]:height-16 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      a === "sm" && "size-xs line-height-leading-4",
      a === "md" && "size-sm line-height-leading-5",
      "group-data-[collapsible=icon]:hidden",
      d
    ),
    ...n
  }
));
xe.displayName = "SidebarMenuSubButton";
export {
  Y as Sidebar,
  de as SidebarContent,
  re as SidebarFooter,
  oe as SidebarGroup,
  se as SidebarGroupAction,
  le as SidebarGroupContent,
  ne as SidebarGroupLabel,
  te as SidebarHeader,
  ae as SidebarInput,
  ee as SidebarInset,
  ce as SidebarMenu,
  ge as SidebarMenuAction,
  fe as SidebarMenuBadge,
  pe as SidebarMenuButton,
  be as SidebarMenuItem,
  he as SidebarMenuSkeleton,
  me as SidebarMenuSub,
  xe as SidebarMenuSubButton,
  ve as SidebarMenuSubItem,
  X as SidebarProvider,
  Q as SidebarRail,
  ie as SidebarSeparator,
  Z as SidebarToggleButton,
  J as SidebarTrigger,
  N as useSidebar
};
