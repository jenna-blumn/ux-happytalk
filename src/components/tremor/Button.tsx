import React from "react"
import { cx, focusRing } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "light"
    size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cx(
                    // base
                    "inline-flex shrink-0 items-center justify-center rounded-md font-normal transition-colors disabled:pointer-events-none disabled:opacity-50",
                    // sizes
                    size === "xs" && "h-6 px-2 text-xs",
                    size === "sm" && "h-[30px] px-2.5 text-[13px]",
                    size === "md" && "h-9 px-4 text-sm",
                    size === "lg" && "h-[42px] px-5 text-base",
                    size === "xl" && "h-12 px-6 text-lg",

                    // focus
                    focusRing,
                    // variants
                    variant === "primary" && [
                        "border-transparent bg-primary text-white hover:bg-primary/90",
                        "dark:bg-primary dark:hover:bg-primary/90",
                    ],
                    variant === "secondary" && [
                        "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                        "dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900",
                    ],
                    variant === "light" && [
                        "bg-gray-100 text-gray-900 hover:bg-gray-200/80",
                        "dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80"
                    ],
                    className,
                )}
                {...props}
            />
        )
    },
)
Button.displayName = "Button"

export { Button }
