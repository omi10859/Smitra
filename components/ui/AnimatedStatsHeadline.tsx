"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import CountUp from "react-countup"



/* ----------------------- */
/* DATA */
/* ----------------------- */

const STATS = [
  {
    label: "Workers",
    value: 1000,
    suffix: "+",
  },
  {
    label: "Contractors",
    value: 60,
    suffix: "+",
  },
  {
    label: "Companies",
    value: 20,
    suffix: "+",
  },
]



export function AnimatedStatsHeadline() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATS.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const current = STATS[index]

  return (
    <div className="text-center">

      <h2 className="font-heading text-3xl md:text-4xl">

        Over{" "}

        <AnimatePresence mode="wait">

          <motion.span
            key={current.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-yellow-400 font-semibold"
          >
            <CountUp
              start={0}
              end={current.value}
              duration={1.2}
            />
            {current.suffix} {current.label}

          </motion.span>

        </AnimatePresence>

        {" "}rely on our platform

      </h2>

    </div>
  )
}