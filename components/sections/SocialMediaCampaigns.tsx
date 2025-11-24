"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const campaigns = [
  {
    title: "Clear Goals",
    image: "/images/clear-goals.jpeg",
    description: "Define measurable objectives",
  },
  {
    title: "Understanding the Audience",
    image: "/images/audience.jpeg",
    description: "Know your audience well",
  },
  {
    title: "Creative Content",
    image: "/images/creative-content.jpeg",
    description: "Produce engaging content",
  },
  {
    title: "Platform Optimization",
    image: "/images/platform.jpeg",
    description: "Tailor content for each platform",
  },
  {
    title: "Engagement & Interaction",
    image: "/images/engagement.jpeg",
    description: "Foster conversations",
  },
]

export default function SocialMediaCampaigns() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c2c] mb-3 sm:mb-4 md:mb-5 tracking-tight">
            SOCIAL MEDIA CAMPAIGNS
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#2c2c2c]/70 leading-relaxed font-light max-w-4xl mx-auto px-2">
            A successful social media campaign achieves specific business goals, engages the target audience, and
            generates measurable results.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#2c2c2c] mb-6 sm:mb-8 md:mb-12 text-pretty leading-snug px-2"
        >
          KEY ELEMENTS OF A SUCCESSFUL SOCIAL MEDIA CAMPAIGN
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-1.5 sm:gap-2 group"
            >
              {/* Image container with responsive heights */}
              <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="relative w-full h-28 sm:h-32 md:h-40 lg:h-48">
                  <Image
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>

              {/* Button with responsive text */}
              <button className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-[#5c4033] to-[#2c2c2c] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md hover:scale-105 text-xs sm:text-xs md:text-sm">
                {campaign.title}
              </button>

              {/* Description - show on tablet and up */}
              <p className="hidden md:block text-xs text-[#2c2c2c]/60 text-center leading-snug font-light">
                {campaign.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
