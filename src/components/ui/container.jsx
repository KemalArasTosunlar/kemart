import * as React from "react"
import { cn } from "@/lib/utils"

const Container = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  )
})
Container.displayName = "Container"

const Section = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-12", className)}
      {...props}
    />
  )
})
Section.displayName = "Section"

export { Container, Section }
