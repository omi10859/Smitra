"use client"

import Container from "@/components/ui/Container"
import { Twitter, Facebook, Instagram, Linkedin, Github, Youtube } from "lucide-react"
import Link from "next/link"

/* ---------------------- */
/* CONFIG */
/* ---------------------- */

const RESOURCES = [
  { label: "Find Jobs", href: "https://play.google.com/store/apps/details?id=com.smitra"},
  { label: "Find Workers", href: "https://app.shrammitra.com/accounts/login" },
  { label: "Find Contractors", href: "https://app.shrammitra.com/accounts/login" },
]

const COMPANY = [
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
]

const SOCIALS = [
  // { icon: Twitter, href: "#" },
  { icon: Facebook, href: "https://www.facebook.com/people/Shram-Mitra/61582165992366/" },
  { icon: Instagram, href: "https://www.instagram.com/shram.mitra" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/shram-mitra" },
    { icon: Youtube, href: "https://www.youtube.com/@SHRAMMITRA" },
]

/* ---------------------- */
/* COMPONENT */
/* ---------------------- */

export function Footer() {
  return (
    <footer id="contact" className="border-t py-20">
      <Container>
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img src="assets/logo.png" alt="Shram Mitra" className="h-20" />

              
            </div>

            <p className="text-muted-foreground max-w-sm">
              <span className="font-semibold">Shram Mitra</span> – Bharat ka
              trusted digital platform jo company, contractor aur shramik ko
              jodta hai bina kisi pareshani ke.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>

            <ul className="text-muted-foreground space-y-3">
              {RESOURCES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>

            <ul className="text-muted-foreground space-y-3">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            Shram Mitra {new Date().getFullYear()}. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-5">
            {SOCIALS.map((item, i) => {
              const Icon = item.icon

              return (
                <a
                  key={i}
                  href={item.href}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
