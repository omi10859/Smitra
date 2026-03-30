"use client"

import { motion } from "motion/react"
import {
  ShieldCheck,
  Search,
  Pencil,
  Briefcase,
  FileText,
  StarIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { StackedCard } from "./StackedCard"

type FloatingCardProps = {
  className?: string
}

/* --- Verification Card --- */
function VerificationCard({ className }: FloatingCardProps) {
  return (
    <motion.div
      className={cn("absolute w-[340px] cursor-pointer", className)}
      animate={{ y: [0, -12, 0] }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <StackedCard backgroundCardClassName="-right-3 -bottom-3 p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-black bg-white p-2">
              <Briefcase className="size-6 text-black" strokeWidth={1.5} />
            </div>
            <span className="flex-grow text-base font-semibold text-white">
              Labour Pool
            </span>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ShieldCheck
                className="size-8 text-green-500"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-black bg-white p-2">
              <div className="flex gap-0.5">
                <Pencil className="size-4 text-black" strokeWidth={2} />
                <Search className="size-4 text-black" strokeWidth={2} />
              </div>
            </div>
            <span className="flex-grow text-base font-semibold text-white">
              Contractors
            </span>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <ShieldCheck
                className="size-8 text-green-500"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
        </div>
      </StackedCard>
    </motion.div>
  )
}

/* --- Visual Profile Card --- */
function ProfileCard({ className }: FloatingCardProps) {
  return (
    <motion.div
      className={cn("absolute w-[260px]", className)}
      animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-3">
        <img
          src="/assets/workerFloating.png"
          alt="Contractor"
          className="rounded-2xl object-cover"
        />
      </div>
    </motion.div>
  )
}

/* --- Financial Stats Card --- */
function StatsCard({ className }: FloatingCardProps) {
  return (
    <motion.div
      className={cn("absolute w-auto cursor-pointer", className)}
      animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
      whileHover={{ scale: 1.1, y: -15 }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <StackedCard backgroundCardClassName="-right-3 -bottom-3 p-4">
        <div className="flex flex-col">
          <motion.span
            className="text-3xl font-extrabold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ₹2,00,000
          </motion.span>
          <span className="text-xl font-bold text-white/80">
            Insurance Plan
          </span>
        </div>
      </StackedCard>
    </motion.div>
  )
}

/* --- Operations Card --- */
function OperationsCard({ className }: FloatingCardProps) {
  return (
    <motion.div
      className={cn("absolute w-[340px] cursor-pointer", className)}
      animate={{ y: [0, 12, 0] }}
      whileHover={{ scale: 1.05, x: 10 }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      <StackedCard backgroundCardClassName="-right-3 -bottom-3 p-4">
        <div className="space-y-4">
          <div className="group flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-black bg-white p-2 transition-transform group-hover:rotate-12">
              <FileText className="size-6 text-black" strokeWidth={1.5} />
            </div>
            <span className="flex-grow text-base text-white">
              Manage team & documents
            </span>
          </div>

          {/* <div className="flex items-center gap-3 group">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-black bg-white p-2 transition-transform group-hover:scale-110">
              <StarIcon className="size-6 text-black" strokeWidth={1.5} />
            </div>
            <span className="flex-grow text-base text-white">Unlock premium tenders</span>
          </div> */}
        </div>
      </StackedCard>
    </motion.div>
  )
}

export function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full overflow-hidden lg:block">
      <div className="pointer-events-auto relative h-full w-full">
        <VerificationCard className="top-[10%] left-[5%] scale-75" />
        <ProfileCard className="-top-[5%] right-[5%] scale-75" />
        <StatsCard className="top-[50%] right-[8%] scale-90" />
        <OperationsCard className="bottom-[15%] left-[2%] scale-75" />
      </div>
    </div>
  )
}
