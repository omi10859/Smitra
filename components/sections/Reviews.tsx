"use client"

import { motion } from "motion/react"
import Container from "@/components/ui/Container"
import { Star } from "lucide-react"

/* ---------------------- */
/* DATA */
/* ---------------------- */

const REVIEWS = [
  {
    title: "Best platform for workers and contractors",
    text: "Shram Mitra helped me find genuine work opportunities near my area. Communication with contractors is simple and the entire process feels trustworthy and smooth.",
    name: "Rahul Kumar",
    role: "Construction Worker",
  },
  {
    title: "Very useful for construction projects",
    text: "We were able to quickly hire verified workers for our Andhra project. Documentation and labour compliance management became much easier with Shram Mitra.",
    name: "Pratap Sharma",
    role: "Project Contractor",
  },
  {
    title: "Great platform for workers and companies",
    text: "This platform is very useful for workers, contractors and companies. Finding skilled labour and managing teams has become much faster and more organized.",
    name: "Kundan Kumar Singh",
    role: "Site Supervisor",
  },
  {
    title: "Documentation management became simple",
    text: "Finding verified workers is now very easy. The digital documentation process saves time and reduces hassle on large construction projects.",
    name: "Subhash",
    role: "Project Manager",
  },
  {
    title: "Amazing app for contractors and workers",
    text: "Shram Mitra helped us reduce delays by quickly connecting with reliable workers and project teams. The platform is easy to use and very practical.",
    name: "Amit Kumar",
    role: "Contractor",
  },
  {
    title: "Every worker should have this app",
    text: "Shram Mitra is doing great work for labourers across India. Every worker should keep this app because it makes finding work opportunities much easier.",
    name: "Manoj Turi",
    role: "Construction Worker",
  },
]

/* ---------------------- */
/* COMPONENT */
/* ---------------------- */

export function Reviews() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        {/* Heading */}
        <div className="relative mb-16 text-center">
          <h2 className="mb-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Loved by Workers, Contractors & Companies
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
            Real experiences from people using Shram Mitra to simplify
            workforce hiring, labour management and project coordination.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              className="
                group relative overflow-hidden rounded-2xl border
                bg-background/80 backdrop-blur-sm
                p-8 transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.05]" />
              </div>

              {/* Stars */}
              <div className="relative mb-5 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="relative mb-3 text-xl font-semibold tracking-tight">
                {review.title}
              </h3>

              {/* Review Text */}
              <p className="text-muted-foreground relative mb-7 text-[15px] leading-7">
                "{review.text}"
              </p>

              {/* User */}
              <div className="relative flex items-center gap-3 pt-5">
                {/* Avatar Initial */}
                {/* <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {review.name.charAt(0)}
                </div> */}

                <div>
                  <p className="text-sm font-semibold">{review.name}</p>

                  <p className="text-muted-foreground text-xs">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground text-sm">
            Trusted by workers, contractors and companies across multiple
            construction and industrial projects in India.
          </p>
        </div>
      </Container>
    </section>
  )
}