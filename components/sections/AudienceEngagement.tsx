"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const engagementTips = [
  "Understand Your Audience",
  "Post High-Quality and Relevant Content",
  "Be Consistent with Posting",
  "Encourage Interaction",
  "Engage with Your Audience Actively",
  "Collaborate with Influencers and Partners",
]

export default function AudienceEngagement() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#e8ddd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight text-balance">
              Audience Engagement and Growth
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#2c2c2c]/75 leading-relaxed font-light">
              Audience engagement and growth are essential for building a loyal and active following on social media.
              Engagement refers to the interaction between your audience and your content (likes, comments, shares,
              clicks), while growth focuses on increasing your follower base and extending your reach. A strategy for
              both involves creating meaningful connections, fostering conversations, and providing value.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c2c2c] mt-4 sm:mt-5 md:mt-6 leading-tight">
              Here's a step-by-step guide to boost audience engagement and growth
            </h3>

            <ul className="space-y-2 sm:space-y-3 pt-2">
              {engagementTips.map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-[#2c2c2c]/75 font-light leading-relaxed"
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#5c4033] to-[#2c2c2c] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <span className="w-2 h-2 bg-white rounded-full" />
                  </span>
                  <span className="pt-0.5">{tip}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square">
                <Image
                  src="/images/engagement.jpeg"
                  alt="Audience Engagement and Community Growth"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
