import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuContentProps, DropdownMenuItemProps, DropdownMenuLabelProps, DropdownMenuShortcutProps, DropdownMenuSubTriggerProps, DropdownMenuCaptionProps, DropdownMenuAvatarProps, DropdownMenuUserbarProps, DropdownMenuButtonProps, DropdownMenuButtonGroupProps, MenuButtonProps, DropdownMenuSearchProps, DropdownMenuCheckboxItemProps, DropdownMenuRadioItemProps } from './Dropdown.types';
/**
 * DropdownMenu 컴포넌트
 *
 * 드롭다운 메뉴입니다. DropdownMenuTrigger, DropdownMenuContent와 함께 사용합니다.
 *
 * @example
 * <DropdownMenu>
 *   <DropdownMenuTrigger asChild><Button>메뉴</Button></DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>항목 1</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 */
declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: React.FC<DropdownMenuShortcutProps>;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCaption: React.ForwardRefExoticComponent<DropdownMenuCaptionProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuAvatar: React.ForwardRefExoticComponent<DropdownMenuAvatarProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuUserbar: React.ForwardRefExoticComponent<DropdownMenuUserbarProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuButton: React.ForwardRefExoticComponent<DropdownMenuButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuButtonGroup: React.ForwardRefExoticComponent<DropdownMenuButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const MenuButton: React.ForwardRefExoticComponent<MenuButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuSearch: React.ForwardRefExoticComponent<DropdownMenuSearchProps & React.RefAttributes<HTMLInputElement>>;
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuCaption, DropdownMenuAvatar, DropdownMenuUserbar, DropdownMenuButton, DropdownMenuButtonGroup, MenuButton, DropdownMenuSearch, };
