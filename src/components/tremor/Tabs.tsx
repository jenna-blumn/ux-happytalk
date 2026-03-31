// Tremor Raw Tabs [v0.1.0]

import * as React from "react"
import * as TabsPrimitives from "@radix-ui/react-tabs"

import { cx, focusRing } from "../../lib/utils"

const Tabs = (
    props: Omit<
        React.ComponentPropsWithoutRef<typeof TabsPrimitives.Root>,
        "orientation"
    >,
) => {
    return <TabsPrimitives.Root {...props} />
}

Tabs.displayName = "Tabs"

type TabsListVariant = "line" | "solid"

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitives.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> & {
        variant?: TabsListVariant
    }
>(({ className, variant = "line", ...props }, ref) => {
    return (
        <TabsPrimitives.List
            ref={ref}
            className={cx(
                "flex items-center justify-start overflow-x-auto",
                variant === "line"
                    ? "border-b border-gray-200 dark:border-gray-800"
                    : "p-0.5 rounded-md bg-gray-100 dark:bg-gray-900",
                className,
            )}
            {...props}
        />
    )
})

TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitives.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger> & {
        variant?: TabsListVariant
    }
>(({ className, variant = "line", ...props }, ref) => {
    return (
        <TabsPrimitives.Trigger
            ref={ref}
            className={cx(
                "group flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-normal ring-offset-2 transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
                variant === "line"
                    ? "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 dark:text-gray-500 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:data-[state=active]:border-blue-500 dark:data-[state=active]:text-blue-500"
                    : "data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow dark:data-[state=active]:bg-gray-950 dark:data-[state=active]:text-gray-50 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 rounded-md",
                focusRing,
                className,
            )}
            {...props}
        />
    )
})

TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, ref) => {
    return (
        <TabsPrimitives.Content
            ref={ref}
            className={cx("w-full outline-none", focusRing, className)}
            {...props}
        />
    )
})

TabsContent.displayName = "TabsContent"

export { Tabs, TabsContent, TabsList, TabsTrigger }
