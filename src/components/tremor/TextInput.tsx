// Tremor Raw TextInput [v0.0.1]

import React from "react"
import { RiEyeFill, RiEyeOffFill, RiSearchLine } from "@remixicon/react"

import { cx, focusInput, hasErrorInput } from "../../lib/utils"

interface TextInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "icon" | "size"> {
    error?: boolean
    errorMessage?: string
    icon?: React.ElementType
    size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            className,
            error = false,
            errorMessage,
            icon: Icon,
            type,
            size = "md",
            ...props
        },
        ref,
    ) => {
        const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

        const togglePasswordVisibility = () => {
            setIsPasswordVisible((prevState) => !prevState)
        }

        const inputType =
            type === "password" ? (isPasswordVisible ? "text" : "password") : type

        return (
            <div className={cx("relative w-full", className)}>
                <input
                    ref={ref}
                    type={inputType}
                    className={cx(
                        // common styles
                        "peer w-full border-0 bg-transparent text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm dark:text-gray-50 dark:placeholder-gray-500",
                        // light mode styles
                        "ring-inset ring-gray-200",
                        // dark mode styles
                        "dark:ring-gray-800",
                        // sizes
                        size === "xs" && "h-6 text-xs px-2",
                        size === "sm" && "h-[30px] text-[13px] px-2.5",
                        size === "md" && "h-9 text-sm px-4",
                        size === "lg" && "h-[42px] text-base px-5",
                        size === "xl" && "h-12 text-lg px-6",
                        // icon styles
                        Icon ? (size === "xs" ? "pl-7" : size === "sm" ? "pl-8" : "pl-10") : "",
                        type === "password" ? (size === "xs" ? "pr-7" : size === "sm" ? "pr-8" : "pr-10") : "",
                        // error styles
                        error ? hasErrorInput : "ring-1",
                        // focus styles
                        error ? "" : focusInput,
                        // disabled styles
                        props.disabled && "cursor-not-allowed opacity-50",
                        "rounded-md transition-shadow",
                    )}
                    {...props}
                />
                {Icon && (
                    <div className={cx(
                        "absolute inset-y-0 left-0 flex items-center text-gray-500",
                        size === "xs" ? "pl-2" : size === "sm" ? "pl-2.5" : "pl-3"
                    )}>
                        <Icon className={cx(
                            "size-4 shrink-0",
                            size === "xs" && "size-3",
                            size === "xl" && "size-5"
                        )} aria-hidden="true" />
                    </div>
                )}
                {type === "password" && (
                    <button
                        type="button"
                        className={cx(
                            "absolute inset-y-0 right-0 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300",
                            size === "xs" ? "pr-2" : size === "sm" ? "pr-2.5" : "pr-3"
                        )}
                        onClick={togglePasswordVisibility}
                        aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                    >
                        {isPasswordVisible ? (
                            <RiEyeOffFill className={cx("size-4 shrink-0", size === "xs" && "size-3", size === "xl" && "size-5")} aria-hidden="true" />
                        ) : (
                            <RiEyeFill className={cx("size-4 shrink-0", size === "xs" && "size-3", size === "xl" && "size-5")} aria-hidden="true" />
                        )}
                    </button>
                )}
                {error && errorMessage && (
                    <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
                )}
            </div>
        )
    },
)

TextInput.displayName = "TextInput"

export { TextInput }
