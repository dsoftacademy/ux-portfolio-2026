import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/cn"

type ButtonVariant = "primary" | "secondary"

type SharedProps = {
  variant?: ButtonVariant
  className?: string
  children?: React.ReactNode
}

type ButtonAsButton = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsLink = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const styles = cn(
      "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variant === "primary" && "bg-brand-primary text-white hover:bg-zinc-800",
      variant === "secondary" &&
        "border border-zinc-200 bg-white text-brand-primary hover:bg-zinc-50",
      className,
    )

    if ("href" in props) {
      const { href, children, target, rel, ...rest } = props
      const isExternal =
        href.startsWith("http") || href.startsWith("mailto:")

      if (isExternal) {
        return (
          <a
            className={styles}
            href={href}
            target={target}
            rel={target === "_blank" ? rel ?? "noreferrer" : rel}
            {...rest}
          >
            {children}
          </a>
        )
      }

      return (
        <Link className={styles} href={href} {...rest}>
          {props.children}
        </Link>
      )
    }

    const { type = "button", ...buttonProps } = props
    return (
      <button
        ref={ref}
        type={type}
        className={styles}
        {...buttonProps}
      />
    )
  },
)

Button.displayName = "Button"

