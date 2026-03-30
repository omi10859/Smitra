"use client"

import React from "react"
import Container from "@/components/ui/Container"
import { motion } from "framer-motion"
import { PRIVACY_POLICY } from "./content"

export default function PrivacyPolicy() {
  return (
    <div className="bg-background pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12 border-b pb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated:{" "}
              <span className="text-primary font-medium">
                {PRIVACY_POLICY.lastUpdated}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Sidebar */}
            {/* <aside className="hidden md:block col-span-1 sticky top-32 h-fit">
              <nav className="space-y-3">
                {PRIVACY_POLICY.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside> */}

            {/* Content */}
            <div className="col-span-1 md:col-span-4 space-y-10">
              {PRIVACY_POLICY.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>

                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}