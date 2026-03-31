import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white shadow hover:bg-primary/90",
                brand:
                    "bg-bg-brand text-fg-on-brand shadow hover:bg-bg-brand-hover",
                destructive:
                    "bg-bg-error text-fg-error shadow-sm hover:bg-bg-error/80 border border-border-error",
                outline:
                    "border border-border-primary bg-bg-primary shadow-sm hover:bg-bg-secondary hover:text-fg-primary",
                secondary:
                    "bg-bg-secondary text-fg-secondary shadow-sm hover:bg-bg-secondary-hover",
                ghost: "hover:bg-bg-secondary hover:text-fg-primary",
                link: "text-fg-brand underline-offset-4 hover:underline",
                success: "bg-bg-success text-fg-success shadow-sm hover:bg-bg-success/80",
                info: "bg-bg-info text-fg-info shadow-sm hover:bg-bg-info/80",
            },
            size: {
                "2xs": "h-6 rounded-sm px-2 text-2xs",
                xs: "h-7 rounded-sm px-2.5 text-xs",
                sm: "h-8 rounded-md px-3 text-sm",
                md: "h-9 rounded-md px-4 text-sm",
                default: "h-10 rounded-md px-4 py-2 text-md",
                lg: "h-11 rounded-md px-5 text-lg",
                xl: "h-12 rounded-lg px-6 text-xl",
                "2xl": "h-14 rounded-lg px-8 text-2xl",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
