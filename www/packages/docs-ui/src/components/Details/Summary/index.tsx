import React from "react"
import clsx from "clsx"
import { PlusMini } from "@medusajs/icons"

export type DetailsSummaryProps = {
  title: React.ReactNode
  subtitle?: string
  badge?: React.ReactNode
  expandable?: boolean
  open?: boolean
  className?: string
  titleClassName?: string
} & Omit<React.HTMLAttributes<HTMLElement>, "title">

export const DetailsSummary = ({
  title,
  subtitle,
  badge,
  expandable = true,
  open = false,
  className,
  titleClassName,
  ...rest
}: DetailsSummaryProps) => {
  return (
    <summary
      className={clsx(
        "py-0.75 flex items-center justify-between",
        expandable && "cursor-pointer",
        !expandable &&
          "border-medusa-border-base dark:border-medusa-border-base-dark border-y",
        "no-marker",
        className
      )}
      {...rest}
    >
      <span className="gap-0.25 flex flex-col">
        <span
          className={clsx(
            "text-compact-medium-plus text-medusa-fg-base dark:text-medusa-fg-base-dark",
            titleClassName
          )}
        >
          {title}
        </span>
        {subtitle && (
          <span className="text-compact-medium text-medusa-fg-subtle dark:text-medusa-fg-subtle-dark">
            {subtitle}
          </span>
        )}
      </span>
      {(badge || expandable) && (
        <span className="flex gap-0.5">
          {badge}
          {expandable && (
            <PlusMini
              className={clsx("transition-transform", open && "rotate-45")}
            />
          )}
        </span>
      )}
    </summary>
  )
}