"use client"

import { motion } from "framer-motion"

export default function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-16 lg:py-20 bg-[#e8ddd5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          {/* Left - Dark Brown Background */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#3e2723] p-8 md:p-12 flex flex-col justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">EDUCATION</h2>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 flex flex-col justify-center rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
          >
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c2c2c]">
                Diploma in Digital Media Marketing
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#5c4033] font-semibold">
                Institute of Business Administration (IBA), Karachi
              </p>
              <p className="text-sm sm:text-base text-[#2c2c2c]/70 leading-relaxed">
                Completed a comprehensive program (2020-2024) covering social media strategy, content creation,
                analytics, brand communication, and digital advertising. Gained hands-on experience with campaign
                planning, audience targeting, and platform optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
