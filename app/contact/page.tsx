"use client"

import * as React from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import Container from "@/components/ui/Container"

export default function ContactPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-background px-4 py-12">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Side: Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are coming soon to revolutionize how workers and contractors
              connect. Have questions? Enter your details and we will get back
              to you.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail size={20} />
                </div>
                <span className="font-medium">office@shrammitra.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone size={20} />
                </div>
                <span className="font-medium">+91 9796495051</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-card rounded-2xl border-2 border-border p-8">
            <form
              action="https://formsubmit.co/office@shrammitra.com"
              method="POST"
              className="space-y-5"
            >
              {/* FormSubmit Configurations */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://shrammitra.com/"
              />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-muted w-full rounded-lg border-2 bg-background px-4 py-3 transition-all outline-none focus:border-primary"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="border-muted w-full rounded-lg border-2 bg-background px-4 py-3 transition-all outline-none focus:border-primary"
                  placeholder="10-digit mobile number"
                  required
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 10)
                  }}
                />
              </div>

              <div className="pt-2">
                <AnimatedButton type="submit" variant="default">
                  Submit Details
                </AnimatedButton>
              </div>

              {/* <p className="text-center text-xs text-muted-foreground mt-4">
                By submitting, you agree to be contacted regarding ShramMitra updates.
              </p> */}
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
