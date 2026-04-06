import type * as React from 'react';
import type { SidebarMenuItemProps } from './Sidebar.types';
declare const menuItemVariants: (props?: ({
    variant?: "default" | "children" | "caption" | "label" | "avatar" | "divider" | "buttons" | null | undefined;
    state?: "default" | "active" | "disabled" | "hover" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const SidebarMenuItem: React.ForwardRefExoticComponent<SidebarMenuItemProps & React.RefAttributes<HTMLDivElement | HTMLButtonElement>>;
export { menuItemVariants };
