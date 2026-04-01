"use client"

import React from "react"
import Container from "@/components/ui/Container"
import { motion } from "framer-motion"
import { DATA_DELETION } from "./content"
import Link from "next/link"

export default function DataDeletion() {
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
              Data Deletion & Account Removal
            </h1>
            <p className="text-muted-foreground">
              Effective:{" "}
              <span className="text-primary font-medium">
                {DATA_DELETION.lastUpdated}
              </span>
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href={`mailto:${DATA_DELETION.supportEmail}?subject=Data%20Deletion%20Request%20-%20shrammitra`}
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Email Deletion Request
              </a>
              <a
                href="#how-to-request"
                className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-semibold transition hover:bg-muted"
              >
                See Steps
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-1 md:col-span-4 space-y-10">
            {DATA_DELETION.sections.map((section) => (
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

          {/* Footer info */}
          <div className="mt-16 border-t pt-8 text-sm text-muted-foreground space-y-1">
            <p><strong>Controller/Company:</strong> shrammitra</p>
            <p><strong>Contact:</strong>{" "}
              <a href={`mailto:${DATA_DELETION.supportEmail}`} className="text-primary hover:underline">
                {DATA_DELETION.supportEmail}
              </a>
            </p>
            <p className="pt-2 text-xs">
              This page is provided to satisfy Google Play&apos;s &quot;Data deletion&quot; requirement. It describes how users can request deletion, scope of deletion, and timelines.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
