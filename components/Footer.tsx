"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 md:py-12 bg-brown-dark text-white border-t border-brown">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6"
        >
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <p className="text-base sm:text-lg font-semibold">Muhammad Rafay Anwar</p>
            <p className="text-white/90 text-xs sm:text-sm">Social Media Manager & Content Creator</p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs sm:text-sm">
            <a href="#home" className="text-white hover:text-beige transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-white hover:text-beige transition-colors duration-200">
              About
            </a>
            <a href="#experience" className="text-white hover:text-beige transition-colors duration-200">
              Experience
            </a>
            <a href="#skills" className="text-white hover:text-beige transition-colors duration-200">
              Skills
            </a>
            <a href="#contact" className="text-white hover:text-beige transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right text-xs sm:text-sm text-white/90">
            <p>&copy; {currentYear} Muhammad Rafay Anwar. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
