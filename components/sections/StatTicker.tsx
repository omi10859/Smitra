"use client"

import { useEffect, useRef } from "react"
import { useInView, motion, useSpring, useTransform } from "framer-motion"
import Container from "@/components/ui/Container"
import { Users, HardHat, Building2, ShieldCheck } from "lucide-react"

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { mass: 1, stiffness: 60, damping: 20 })
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

const STATS = [
  {
    label: "Contractors",
    value: 450,
    icon: <HardHat className="size-8" />,
  },
  {
    label: "Workers",
    value: 2000,
    icon: <Users className="size-8" />,
  },
  {
    label: "Insured Workers",
    value: 700,
    icon: <ShieldCheck className="size-8" />,
  },
  {
    label: "Companies",
    value: 50,
    icon: <Building2 className="size-8" />,
  },
]

export default function StatTicker() {
  return (
    <section className="bg-secondary border-y border-border py-12 md:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              {/* Simple Icon */}
              <div className="mb-2 md:mb-4 text-primary opacity-80">{stat.icon}</div>

              {/* Number */}
              <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                <Counter value={stat.value} />
                <span className="ml-0.5 text-xl text-primary">+</span>
              </div>

              {/* Label */}
              <p className="text-white mt-1 text-[10px] font-semibold tracking-widest uppercase md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
