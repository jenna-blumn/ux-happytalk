import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-white shadow hover:bg-primary/80",
                brand:
                    "border-transparent bg-bg-brand text-fg-on-brand shadow hover:bg-bg-brand-hover",
                secondary:
                    "border-transparent bg-bg-secondary text-fg-secondary hover:bg-bg-secondary-hover",
                destructive:
                    "border-transparent bg-bg-error text-fg-error shadow hover:bg-bg-error/80 border-border-error",
                outline: "text-fg-primary border-border-primary",
                success:
                    "border-transparent bg-bg-success text-fg-success shadow",
                warning:
                    "border-transparent bg-bg-warning text-fg-warning shadow",
                info:
                    "border-transparent bg-bg-info text-fg-info shadow",
            },
            size: {
                xs: "text-2xs px-1.5 py-0.5 rounded-sm",
                sm: "text-xs px-2 py-0.5 rounded-md",
                default: "text-sm px-2.5 py-0.5 rounded-md",
                md: "text-md px-3 py-1 rounded-md",
                lg: "text-lg px-4 py-1.5 rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, size, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
