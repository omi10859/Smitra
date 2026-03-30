"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"

import Container from "@/components/ui/Container"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

/* ----------------------------- */
/* NAVBAR CONFIG */
/* ----------------------------- */

const NAVBAR_CONFIG = {
  logo: {
    src: "/assets/logo.png",
    alt: "Shram Mitra",
    url: "/",
  },

  links: [
    { title: "Home", url: "/#" },
    { title: "About", url: "/#about" },
    { title: "Features", url: "/#features" },
    { title: "Contact", url: "/contact" },
  ],

  actions: {
    login: {
      title: "Login",
      url: "https://app.shrammitra.com/accounts/login",
    },
    register: {
      title: "Register",
      url: "https://app.shrammitra.com/onboard/user",
    },
    call: {
      title: "Call us - 9796495051",
      url: "tel:9796495051",
    },
  },
}

/* ----------------------------- */
/* NAVBAR */
/* ----------------------------- */

export function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-lg"
          : "bg-transparent pt-2",
        className
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href={NAVBAR_CONFIG.logo.url} className="flex items-center">
              <img
                src={NAVBAR_CONFIG.logo.src}
                alt={NAVBAR_CONFIG.logo.alt}
                className="h-14 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-10 lg:flex">
            {NAVBAR_CONFIG.links.map((link, i) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.url}
                  className="text-muted-foreground text-sm font-medium transition hover:text-foreground"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <AnimatedButton variant="secondary-outline" asChild>
              <Link href={NAVBAR_CONFIG.actions.login.url}>
                {NAVBAR_CONFIG.actions.login.title}
              </Link>
            </AnimatedButton>

            <AnimatedButton variant="default" asChild>
              <Link href={NAVBAR_CONFIG.actions.register.url}>
                {NAVBAR_CONFIG.actions.register.title}
              </Link>
            </AnimatedButton>

            <AnimatedButton
              variant="secondary"
              className="flex items-center gap-2"
              asChild
            >
              <Link href={NAVBAR_CONFIG.actions.call.url}>
                <Phone size={16} />
                {NAVBAR_CONFIG.actions.call.title}
              </Link>
            </AnimatedButton>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <AnimatedButton variant="outline" className="px-3 py-2">
                  <Menu size={20} />
                </AnimatedButton>
              </SheetTrigger>

              <SheetContent className="p-6">
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src={NAVBAR_CONFIG.logo.src}
                      alt={NAVBAR_CONFIG.logo.alt}
                      className="h-12"
                    />
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Links */}
                <div className="mt-10 flex flex-col gap-6 px-2">
                  {NAVBAR_CONFIG.links.map((link, i) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.url}
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground text-lg font-medium hover:underline"
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Actions */}
                  <div className="flex flex-col gap-3 pt-8">
                    <AnimatedButton variant="secondary-outline" asChild>
                      <Link
                        href={NAVBAR_CONFIG.actions.login.url}
                        onClick={() => setOpen(false)}
                      >
                        {NAVBAR_CONFIG.actions.login.title}
                      </Link>
                    </AnimatedButton>

                    <AnimatedButton variant="default" asChild>
                      <Link
                        href={NAVBAR_CONFIG.actions.register.url}
                        onClick={() => setOpen(false)}
                      >
                        {NAVBAR_CONFIG.actions.register.title}
                      </Link>
                    </AnimatedButton>

                    <AnimatedButton variant="secondary" asChild>
                      <Link
                        href={NAVBAR_CONFIG.actions.call.url}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2"
                      >
                        <Phone size={16} />
                        {NAVBAR_CONFIG.actions.call.title}
                      </Link>
                    </AnimatedButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
