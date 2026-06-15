"use client"

import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"
import { motion, AnimatePresence } from "motion/react"
import CountUp from "react-countup"

import Container from "@/components/ui/Container"

/* ---------------------- */
/* CONFIG */
/* ---------------------- */

const STATS = [
  { label: "Workers", value: 2000, suffix: "+" },
  { label: "Contractors", value: 450, suffix: "+" },
  { label: "Companies", value: 50, suffix: "+" },
]

const LOGOS_TOP = [
  "/logos/companies/balmukund.jpg",
  "/logos/companies/deep.png",
  "/logos/companies/mrpl.jpg",
  "/logos/companies/ongc.jpg",
  "/logos/companies/tf.png",
  "/logos/companies/bnr.png",
]

const LOGOS_BOTTOM = [
  "/logos/companies/ongc.jpg",
  "/logos/companies/tf.png",
  "/logos/companies/bnr.png",
]

/* ---------------------- */
/* COMPONENT */
/* ---------------------- */

export function SocialProof() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATS.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const current = STATS[index]

  return (
    <section className="bg-black py-20 text-white">
      <Container>
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl">
            Connecting{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={current.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-semibold text-yellow-400"
              >
                <CountUp start={0} end={current.value} duration={1.2} />
                {current.suffix} {current.label}
              </motion.span>
            </AnimatePresence>{" "}
            across India
          </h2>
        </div>

        {/* Top Row */}
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
          className="mb-6 mask-[linear-gradient(to_right,transparent,black_5%,black_90%,transparent)] sm:mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          {LOGOS_TOP.map((logo, i) => (
            <div
              key={i}
              className="mx-12 flex items-center rounded bg-white p-1 opacity-100 transition hover:opacity-100"
            >
              <img src={logo} className="h-16 w-auto" alt="partner logo" />
            </div>
          ))}
        </Marquee>

        {/* Bottom Row */}
        {/* <Marquee speed={40} gradient={false} direction="right" pauseOnHover>
          {LOGOS_BOTTOM.map((logo, i) => (
            <div
              key={i}
              className="mx-12 flex items-center opacity-100 transition hover:opacity-100"
            >
              <img src={logo} className="invert grayscale h-16 w-auto" alt="partner logo" />
            </div>
          ))}
        </Marquee> */}
      </Container>
    </section>
  )
}
