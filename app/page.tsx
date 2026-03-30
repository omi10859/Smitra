import { AppCTA } from "@/components/sections/AppCTA"
import { AppFeatures } from "@/components/sections/AppFeatures"
import { Hero } from "@/components/sections/Hero"
import { Reviews } from "@/components/sections/Reviews"
import { SocialProof } from "@/components/sections/SocialProof"
import StatTicker from "@/components/sections/StatTicker"
import { FAQSection } from "@/components/sections/FAQSection"

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AppFeatures />
      <StatTicker />
      <FAQSection />
      <Reviews />
      <AppCTA />
    </>
  )
}
