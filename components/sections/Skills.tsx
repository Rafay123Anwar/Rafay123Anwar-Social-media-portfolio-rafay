"use client"

import { motion } from "framer-motion"

const skills = [
  "Social Media Strategy & Planning",
  "Content Creation & Short-Form Video Editing",
  "YouTube Management (SEO, Thumbnails, Optimization)",
  "Graphic Design (Photoshop, Canva)",
  "Analytics & Performance Optimization",
  "Branding & Visual Communication",
  "Digital Marketing & Audience Targeting",
]

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-16 lg:py-20 bg-white">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">SKILLS</h2>
          </motion.div>

          {/* Right - Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#e8ddd5] p-8 md:p-12 flex flex-col justify-center rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
          >
            <div className="space-y-3 md:space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#5c4033] font-bold text-sm md:text-base flex-shrink-0">{index + 1}.</span>
                  <p className="text-sm md:text-base text-[#2c2c2c] font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
