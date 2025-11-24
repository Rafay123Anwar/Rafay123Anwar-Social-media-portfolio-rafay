"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="w-full pt-20 pb-0 md:pt-24 lg:pt-28 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-4 md:px-6">
          {/* Left - Image - Hidden on mobile, shown on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-soft">
              <div className="relative w-full h-96 md:h-[500px]">
                <Image src="/images/hero-image.png" alt="Muhammad Rafay Anwar" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

          {/* Right - Content - Centered on mobile/tablet, left-aligned on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:col-start-2 text-center lg:text-left"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="inline-block mb-3 sm:mb-4 mx-auto lg:mx-0"
              >
                <div className="px-6 py-3 rounded-full border-2 border-charcoal">
                  <p className="text-xs sm:text-sm md:text-base font-bold text-charcoal tracking-wide">WELCOME</p>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight"
              >
                MUHAMMAD
                <br />
                RAFAY
                <br />
                ANWAR
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed"
            >
              Professional Social Media Manager
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-charcoal/60 leading-relaxed"
            >
              Driving brand visibility & engagement through data-driven social media strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-2 sm:pt-4 flex justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-block px-6 sm:px-8 py-3 bg-brown text-white rounded-full font-semibold hover:bg-brown-dark transition-all duration-300 shadow-soft hover:shadow-xl text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Image - Shows on mobile/tablet only */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:hidden w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-soft"
          >
            <div className="relative w-full h-64 sm:h-80">
              <Image src="/images/hero-image.png" alt="Muhammad Rafay Anwar" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
