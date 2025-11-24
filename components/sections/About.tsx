"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#e8ddd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/about-image.jpeg"
                  alt="About Muhammad Rafay Anwar - Social Media Manager at desk"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c2c] leading-tight text-balance"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2c2c2c]/80 leading-relaxed text-justify"
            >
              I'm Muhammad Rafay Anwar, a Creative Social Media Manager and Content Creator specializing in YouTube,
              Instagram, Facebook, and TikTok. I craft high-impact content—thumbnails, short-form videos, captions, and
              full-funnel posting strategies—that spark engagement, amplify reach, and build magnetic brand presence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5c4033] font-semibold italic"
            >
              Transforming brands into market leaders, one scroll at a time.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
