"use client"

import React from "react"
import Link from "next/link"
import Container from "@/components/ui/Container"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* 404 Number */}
          <h1 className="mb-4 text-7xl font-extrabold text-primary md:text-8xl">
            404
          </h1>

          {/* Title */}
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Page not found
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
            Don’t worry — let’s get you back on track.
          </p>

          {/* CTA Buttons */}
          <AnimatedButton asChild variant="default">
            <Link
              href="/"
              className="rounded-xl bg-primary px-6 py-3 font-semibold text-secondary transition hover:opacity-90"
            >
              Go to Home
            </Link>
          </AnimatedButton>
        </motion.div>
      </Container>
    </div>
  )
}

export default NotFound
