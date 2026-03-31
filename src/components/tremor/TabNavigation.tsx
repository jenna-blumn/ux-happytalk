// Tremor Raw TabNavigation [v0.0.0]

import React from "react"
import { cx, focusRing } from "../../lib/utils"

const TabNavigation = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cx("flex items-center justify-start border-b border-gray-200 dark:border-gray-800 w-full overflow-x-auto", className)}
            {...props}
        />
    )
})

TabNavigation.displayName = "TabNavigation"

interface TabNavigationLinkProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
    active?: boolean
}

const TabNavigationLink = React.forwardRef<
    HTMLButtonElement,
    TabNavigationLinkProps
>(({ className, children, active, disabled, ...props }, ref) => {
    return (
        <button
            ref={ref}
            type="button"
            className={cx(
                "group inline-flex shrink-0 items-center justify-center whitespace-nowrap border-b-2 px-3 py-2 text-sm font-normal transition-all focus-visible:outline-none cursor-pointer",
                active
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                    : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-300",
                disabled
                    ? "pointer-events-none text-slate-300 dark:text-slate-700"
                    : "",
                focusRing,
                className,
            )}
            aria-current={active ? "page" : undefined}
            aria-disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
})

TabNavigationLink.displayName = "TabNavigationLink"

export { TabNavigation, TabNavigationLink }
