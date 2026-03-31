import React from "react"
import { cx } from "../../lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cx(
                    // base
                    "relative w-full rounded-lg text-left ring-1 shadow-sm p-6",
                    // background color
                    "bg-white dark:bg-gray-950",
                    // ring color
                    "ring-gray-200 dark:ring-gray-800",
                    className,
                )}
                {...props}
            />
        )
    },
)
Card.displayName = "Card"

export { Card }
