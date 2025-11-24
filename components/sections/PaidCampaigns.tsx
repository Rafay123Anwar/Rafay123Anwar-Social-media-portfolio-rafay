"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const paidCampaignSteps = [
  "Defining the Goals of a Paid Social Media Campaign",
  "Selecting the Right Platform",
  "Choosing the Ad Format",
  "Targeting the Right Audience",
  "Budgeting and Bidding Strategies",
  "Analyzing Results and Reporting",
]

export default function PaidCampaigns() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 md:space-y-5 order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c2c] leading-tight text-balance">
              Paid Social Media Campaigns
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#2c2c2c]/75 leading-relaxed font-light">
              Paid social media campaigns involve using advertising features on social media platforms to promote
              content, products, or services to a targeted audience. Here's a detailed guide:
            </p>

            <ul className="space-y-2 sm:space-y-2.5">
              {paidCampaignSteps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base text-[#2c2c2c]/75 font-light leading-snug"
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#5c4033] to-[#2c2c2c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-white text-xs shadow-md">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm md:text-base text-[#2c2c2c]/75 leading-relaxed font-light pt-3 sm:pt-4 border-t border-[#5c4033]/20"
            >
              A paid social media campaign requires strategic planning, thoughtful execution, and continuous
              optimization. By targeting the right audience, using compelling content, testing approaches, and carefully
              monitoring performance, you maximize campaign impact.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-80">
                <Image
                  src="/images/paid.jpeg"
                  alt="Paid Campaigns Analytics Dashboard"
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
