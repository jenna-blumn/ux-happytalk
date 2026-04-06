import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { type VariantProps } from "class-variance-authority";
import type { SidebarProviderProps } from "./Sidebar.types";
type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
    collapsible: "offcanvas" | "icon" | "none";
    setCollapsible: (value: "offcanvas" | "icon" | "none") => void;
};
declare function useSidebar(): SidebarContextProps;
declare const SidebarProvider: React.ForwardRefExoticComponent<Omit<SidebarProviderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Sidebar: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
    showRail?: boolean;
    showToggleButton?: boolean;
    toggleButtonPosition?: "top" | "center" | "bottom";
    toggleButtonOffset?: number | string;
    toggleButtonIcon?: React.ReactNode;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarRail: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarToggleButton: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "style" | "type"> & {
    position?: "top" | "center" | "bottom";
    offset?: number | string;
    icon?: React.ReactNode;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarInset: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarInput: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
declare const SidebarHeader: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarFooter: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarSeparator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupLabel: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupAction: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarGroupContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarMenu: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuButton: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | {
        children: React.ReactNode;
    };
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuAction: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    showOnHover?: boolean;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuBadge: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSkeleton: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    showIcon?: boolean;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSub: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuSubItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuSubButton: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarToggleButton, SidebarTrigger, useSidebar, };
