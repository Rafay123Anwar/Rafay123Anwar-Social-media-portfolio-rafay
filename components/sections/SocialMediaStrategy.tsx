"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SocialMediaStrategy() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#e8ddd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight text-balance">
              SOCIAL MEDIA STRATEGY DEVELOPMENT
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#2c2c2c]/75 leading-relaxed font-light">
              Creating a strategic social media plan tailored to business goals involves aligning social media
              activities with the company's overall objectives, target audience, and brand message. Let me guide you
              through crafting an effective plan:
            </p>

            <ul className="space-y-2 sm:space-y-3">
              {[
                "Define Your Business Goals",
                "Identify Your Target Audience",
                "Choose the Right Social Media Platforms",
                "Brand Voice and Consistency",
                "Content Strategy",
                "Set SMART Goals",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-[#2c2c2c]/75 font-light"
                >
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#5c4033] to-[#2c2c2c] rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src="/images/strategy-image.jpeg"
                  alt="Social Media Strategy Discussion"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
