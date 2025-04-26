import * as React from "react"
import { cn } from "@/lib/utils"

const Steps = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
Steps.displayName = "Steps"

const Step = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex gap-2", className)} {...props} />
))
Step.displayName = "Step"

const StepIndicator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col items-center", className)} {...props} />
  ),
)
StepIndicator.displayName = "StepIndicator"

const StepNumber = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-600",
        className,
      )}
      {...props}
    />
  ),
)
StepNumber.displayName = "StepNumber"

const StepSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("h-10 w-px bg-gray-200 ml-4", className)} {...props} />
  ),
)
StepSeparator.displayName = "StepSeparator"

const StepContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col", className)} {...props} />,
)
StepContent.displayName = "StepContent"

const StepTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-base font-medium text-gray-900", className)} {...props} />
  ),
)
StepTitle.displayName = "StepTitle"

const StepDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />,
)
StepDescription.displayName = "StepDescription"

export { Steps, Step, StepIndicator, StepNumber, StepSeparator, StepContent, StepTitle, StepDescription }
