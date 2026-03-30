"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "secondary-outline" | "link"
  asChild?: boolean
}

const variants = {
  default:
    "outline-2 outline-primary bg-primary text-primary-foreground hover:bg-primary/80",

  outline: "outline-2 outline-border bg-background hover:bg-muted",

  secondary:
    "outline-2 outline-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90",

  "secondary-outline":
    "outline-2 outline-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground",

  link: "text-primary underline-offset-4 hover:underline px-0 py-0",
}

export const AnimatedButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps
>(({ className, variant = "default", asChild = false, ...props }, ref) => {
  const baseClass = cn(
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors",
    variants[variant],
    className
  )

  /* If using Slot (asChild) we cannot pass motion props */
  if (asChild) {
    return <Slot ref={ref} className={baseClass} {...props} />
  }

  return (
    <motion.button
      ref={ref}
      // whileHover={{ scale: 1.05, y: -2 }}
      // whileTap={{ scale: 0.96 }}
      // transition={{
      //   type: "spring",
      //   stiffness: 400,
      //   damping: 17,
      // }}
      className={baseClass}
      {...(props as any)}
    />
  )
})

AnimatedButton.displayName = "AnimatedButton"
