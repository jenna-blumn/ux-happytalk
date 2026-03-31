// Tremor Raw Select [v0.0.1]

import React from "react"
import * as SelectPrimitives from "@radix-ui/react-select"
import {
    RiCheckLine,
    RiExpandUpDownLine,
} from "@remixicon/react"

import { cx, focusInput } from "../../lib/utils"

const Select = SelectPrimitives.Root
Select.displayName = "Select"

const SelectGroup = SelectPrimitives.Group
SelectGroup.displayName = "SelectGroup"

const SelectValue = SelectPrimitives.Value
SelectValue.displayName = "SelectValue"

const selectTriggerStyles = [
    cx(
        // common
        "group/trigger flex w-full select-none items-center justify-between rounded-md border text-left ring-inset transition-shadow focus:outline-none whitespace-nowrap",
        // light
        "border-gray-200 bg-white text-gray-900 data-[placeholder]:text-gray-500",
        // dark
        "dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:data-[placeholder]:text-gray-500",
        "focus:ring-2",
    ),
]

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitives.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger> & {
        hasError?: boolean
        size?: "xs" | "sm" | "md" | "lg" | "xl"
    }
>(({ className, children, hasError, size = "md", ...props }, ref) => {
    return (
        <SelectPrimitives.Trigger
            ref={ref}
            className={cx(
                selectTriggerStyles,
                hasError
                    ? "border-red-500 ring-red-200 focus:ring-red-200 dark:border-red-700 dark:ring-red-700/30 dark:focus:ring-red-700/30"
                    : focusInput,
                // sizes
                size === "xs" && "h-6 px-2 text-xs",
                size === "sm" && "h-[30px] px-2.5 text-[13px]",
                size === "md" && "h-9 px-4 text-sm",
                size === "lg" && "h-[42px] px-5 text-base",
                size === "xl" && "h-12 px-6 text-lg",
                className,
            )}
            {...props}
        >
            {children}
            <SelectPrimitives.Icon asChild>
                <RiExpandUpDownLine
                    className={cx(
                        "shrink-0 text-gray-400 group-data-[disabled]/trigger:text-gray-300 dark:text-gray-600 dark:group-data-[disabled]/trigger:text-gray-600",
                        size === "xs" ? "size-3" : size === "sm" ? "size-4" : "size-5",
                    )}
                />
            </SelectPrimitives.Icon>
        </SelectPrimitives.Trigger>
    )
})
SelectTrigger.displayName = SelectPrimitives.Trigger.displayName

const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>
>(({ className, position = "popper", children, ...props }, ref) => {
    return (
        <SelectPrimitives.Portal>
            <SelectPrimitives.Content
                ref={ref}
                className={cx(
                    // common
                    "z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-lg",
                    // light
                    "border-gray-200 bg-white text-gray-900",
                    // dark
                    "dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
                    position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                    className,
                )}
                position={position}
                {...props}
            >
                <SelectPrimitives.Viewport
                    className={cx(
                        "p-1",
                        position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                    )}
                >
                    {children}
                </SelectPrimitives.Viewport>
            </SelectPrimitives.Content>
        </SelectPrimitives.Portal>
    )
})
SelectContent.displayName = SelectPrimitives.Content.displayName

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitives.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
>(({ className, children, ...props }, ref) => {
    return (
        <SelectPrimitives.Item
            ref={ref}
            className={cx(
                "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800",
                className,
            )}
            {...props}
        >
            <span className="absolute left-2 flex size-3.5 items-center justify-center">
                <SelectPrimitives.ItemIndicator>
                    <RiCheckLine className="size-4 shrink-0 text-gray-800 dark:text-gray-200" />
                </SelectPrimitives.ItemIndicator>
            </span>

            <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
        </SelectPrimitives.Item>
    )
})
SelectItem.displayName = SelectPrimitives.Item.displayName

const SelectLabel = React.forwardRef<
    React.ElementRef<typeof SelectPrimitives.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitives.Label>
>(({ className, ...props }, ref) => {
    return (
        <SelectPrimitives.Label
            ref={ref}
            className={cx(
                "px-2 py-1.5 text-xs font-normal text-gray-500 dark:text-gray-500",
                className,
            )}
            {...props}
        />
    )
})
SelectLabel.displayName = SelectPrimitives.Label.displayName

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitives.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitives.Separator>
>(({ className, ...props }, ref) => {
    return (
        <SelectPrimitives.Separator
            ref={ref}
            className={cx("-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-900", className)}
            {...props}
        />
    )
})
SelectSeparator.displayName = SelectPrimitives.Separator.displayName

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectValue,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
}
