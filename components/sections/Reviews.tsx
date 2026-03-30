"use client"

import { motion } from "motion/react"
import Container from "@/components/ui/Container"
import { Star } from "lucide-react"

/* ---------------------- */
/* DATA */
/* ---------------------- */

const REVIEWS = [
  {
    title: "Best platform for finding reliable work!",
    text: "Shram Mitra helped me find verified work opportunities near my city. The platform makes communication with contractors very easy.",
    name: "Ramesh Kumar",
    role: "Worker",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    title: "Very helpful for managing contractors",
    text: "We were able to find skilled labor quickly and manage documentation digitally. It reduced our project delays significantly.",
    name: "Ankit Sharma",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    title: "Great app for contractors",
    text: "The project listings and transparent billing system make it easier for contractors like me to get reliable projects.",
    name: "Vikash Singh",
    role: "Contractor",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    title: "Highly recommended platform",
    text: "Managing workforce documentation and compliance used to be a headache. Shram Mitra simplified everything.",
    name: "Neha Verma",
    role: "HR Manager",
    avatar: "https://i.pravatar.cc/300",
  },
]

/* ---------------------- */
/* COMPONENT */
/* ---------------------- */

export function Reviews() {
  return (
    <section className="py-28">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            What People Are Saying
          </h2>

          <p className="text-muted-foreground mx-auto max-w-xl">
            Thousands of workers, contractors and companies trust Shram Mitra to
            manage their workforce and projects efficiently.
          </p>
        </div>

        {/* Review Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border p-8 transition hover:shadow-md"
            >
              {/* Stars */}
              <div className="mb-4 flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold">{review.title}</h3>

              {/* Text */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{review.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                {/* <img
                  src={review.avatar}
                  className="h-10 w-10 rounded-full object-cover"
                /> */}

                <div>
                  <p className="text-sm font-medium">{review.name}</p>

                  <p className="text-muted-foreground text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More */}
        {/* <div className="mt-12 text-center">
          <a
            href="https://play.google.com"
            target="_blank"
            className="font-medium text-secondary hover:underline"
          >
            Read more reviews on Google Play →
          </a>
        </div> */}
      </Container>
    </section>
  )
}
