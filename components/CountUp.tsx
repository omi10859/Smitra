"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, animate } from "framer-motion"

export function CountUp({
  end,
  duration = 1.2,
}: {
  end: number
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, end, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(Math.floor(latest))
        },
      })

      return () => controls.stop()
    }
  }, [isInView, end, duration, motionValue])

  return <span ref={ref}>{display}</span>
}
