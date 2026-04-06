import type { SidebarUserbarProps } from './Sidebar.types';
declare const userbarVariants: (props?: ({
    variant?: "variant1" | "variant2" | "variant3" | null | undefined;
    state?: "default" | "hover" | "opened" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const collapsedUserbarVariants: (props?: ({
    variant?: "variant1" | "variant2" | "variant3" | null | undefined;
    state?: "default" | "hover" | "opened" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const SidebarUserbar: import("react").ForwardRefExoticComponent<SidebarUserbarProps & import("react").RefAttributes<HTMLButtonElement>>;
export { userbarVariants, collapsedUserbarVariants };
