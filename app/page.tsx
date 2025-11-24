"use client"

import { useEffect, useRef } from "react"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Education from "@/components/sections/Education"
import Skills from "@/components/sections/Skills"
import SocialMediaStrategy from "@/components/sections/SocialMediaStrategy"
import SocialMediaCampaigns from "@/components/sections/SocialMediaCampaigns"
import AudienceEngagement from "@/components/sections/AudienceEngagement"
import PaidCampaigns from "@/components/sections/PaidCampaigns"
import ThankYou from "@/components/sections/ThankYou"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 100) {
          navRef.current.classList.add("shadow-md", "bg-white/95", "backdrop-blur")
        } else {
          navRef.current.classList.remove("shadow-md", "bg-white/95", "backdrop-blur")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full bg-beige">
      <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <Navigation />
      </div>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <SocialMediaStrategy />
      <SocialMediaCampaigns />
      <AudienceEngagement />
      <PaidCampaigns />
      <ThankYou />
      <Footer />
    </main>
  )
}
