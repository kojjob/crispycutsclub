import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-light tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crispy-gold disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-crispy-gold text-crispy-black hover:bg-crispy-black hover:text-crispy-white",
        destructive:
          "bg-crispy-error text-crispy-white hover:bg-crispy-error/90",
        outline:
          "border border-crispy-text-primary text-crispy-text-primary hover:bg-crispy-text-primary hover:text-crispy-bg-primary dark:border-crispy-text-primary dark:text-crispy-text-primary dark:hover:bg-crispy-text-primary dark:hover:text-crispy-bg-primary",
        secondary:
          "bg-crispy-bg-secondary text-crispy-text-primary hover:bg-crispy-bg-tertiary",
        ghost: "hover:bg-crispy-bg-secondary hover:text-crispy-text-primary",
        link: "text-crispy-gold underline-offset-4 hover:underline",
        premium:
          "relative overflow-hidden group bg-crispy-gold text-crispy-black [&>span]:relative [&>span]:z-10 after:absolute after:inset-0 after:bg-crispy-black after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 hover:text-crispy-white",
      },
      size: {
        default: "px-8 py-3",
        sm: "px-6 py-2 text-xs",
        lg: "px-12 py-4 text-base",
        icon: "h-10 w-10",
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
