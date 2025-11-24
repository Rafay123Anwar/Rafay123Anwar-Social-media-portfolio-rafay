"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Experience() {
  const experiences = [
    {
      title: "Social Media Manager",
      company: "Daraz Pakistan",
      description:
        "Developed and executed platform-specific social media strategies across Facebook, Instagram, and TikTok, helping boost overall engagement by 45%. Managed large-scale content calendars, product campaigns, and event-based promotions with precision. Collaborated with design and marketing teams to create high-performing visuals and short-form videos. Consistently tracked analytics to optimize campaigns, improve CTR, and increase audience retention.",
      image: "/images/creative-content.jpeg",
    },
    {
      title: "Social Media Manager",
      company: "Khaadi Pakistan",
      description:
        "Led the brand's digital presence by planning and producing creative, on-brand content including reels, product showcases, and seasonal campaigns. Implemented a data-driven content strategy that increased reach and follower growth by 38%. Ensured consistent brand voice across all platforms while managing community engagement with authenticity. Used advanced insights to refine content performance, improve campaign results, and boost overall brand visibility.",
      image: "/images/meeting.jpg",
    },
  ]

  return (
    <section id="experience" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#2c2c2c] mb-12 md:mb-16 lg:mb-20 tracking-tight"
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center"
            >
              {index % 2 === 0 && (
                <div className="order-2 md:order-1">
                  <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96">
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className={`order-1 ${index % 2 === 0 ? "md:order-2" : ""} space-y-2 sm:space-y-3 md:space-y-4`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-1"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5c4033]">{exp.title}</h3>
                  <p className="text-sm sm:text-base text-[#2c2c2c]/60">{exp.company}</p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base text-[#2c2c2c]/80 leading-relaxed text-justify pt-2"
                >
                  {exp.description}
                </motion.p>
              </div>

              {index % 2 !== 0 && (
                <div className="order-2">
                  <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96">
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
