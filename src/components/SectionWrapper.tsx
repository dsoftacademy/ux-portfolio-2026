import * as React from "react"
import { cn } from "@/lib/cn"

export type SectionWrapperProps = React.HTMLAttributes<HTMLDivElement>

export function SectionWrapper({ className, ...props }: SectionWrapperProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-content px-5", className)}
      {...props}
    />
  )
}

