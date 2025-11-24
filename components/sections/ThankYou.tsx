"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ThankYou() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-beige-dark">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brown leading-tight">Get in Touch</h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-charcoal font-medium"
          >
            Ready to grow your social media presence? Let's connect and discuss your project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-brown text-white rounded-full font-semibold hover:bg-brown-dark transition-all duration-300 shadow-soft hover:shadow-xl"
            >
              Send Message
            </Link>
            <a
              href="mailto:muhammadrafayy0@gmail.com"
              className="inline-block px-8 py-4 border-2 border-brown text-brown rounded-full font-semibold hover:bg-brown hover:text-white transition-all duration-300"
            >
              Email Directly
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-charcoal/70 text-sm md:text-base pt-6"
          >
            muhammadrafayy0@gmail.com
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
