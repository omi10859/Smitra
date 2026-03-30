"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils" // Assumed cn utility

type StackedCardProps = {
  children: React.ReactNode
  className?: string
  backgroundCardClassName?: string
}

export function StackedCard({ children, className, backgroundCardClassName }: StackedCardProps) {
  return (
    <div className={cn("relative", className)}>
      {/* 1. The Background Card (The "Offset shadow") */}
      <div
        className={cn(
          "absolute -right-2.5 -bottom-2.5 h-full w-full rounded-2xl border-2 border-black bg-white",
          backgroundCardClassName
        )}
      />

      {/* 2. The Main Foreground Card */}
      <div
        className={cn(
          "relative rounded-2xl border-2 border-black bg-secondary p-6 font-raleway text-black",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}