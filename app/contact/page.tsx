"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Send email via formspree or custom API
      const response = await fetch("https://formspree.io/f/mjkdglng", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="w-full bg-beige min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Contact Form Section */}
      <section className="w-full pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-4">Let's Work Together</h1>
              <p className="text-base md:text-lg text-charcoal/70">
                Share your project details and let me know how I can help grow your brand's social media presence.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl p-8 md:p-10 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-beige-dark rounded-xl focus:outline-none focus:border-brown bg-beige/30 text-charcoal placeholder-charcoal/50"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-beige-dark rounded-xl focus:outline-none focus:border-brown bg-beige/30 text-charcoal placeholder-charcoal/50"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-beige-dark rounded-xl focus:outline-none focus:border-brown bg-beige/30 text-charcoal placeholder-charcoal/50"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </motion.div>

                {/* Company */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
                    Company/Brand Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-beige-dark rounded-xl focus:outline-none focus:border-brown bg-beige/30 text-charcoal placeholder-charcoal/50"
                    placeholder="Your company"
                  />
                </motion.div>
              </div>

              {/* Service Type */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-beige-dark rounded-xl focus:outline-none focus:border-brown bg-beige/30 text-charcoal"
                >
                  <option value="">Select a service</option>
                  <option value="social-media-strategy">Social Media Strategy</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="analytics-optimization">Analytics & Optimization</option>
                  <option value="complete-management">Complete Management</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-beige-dark rounded-xl focus:outline-none focus:border-brown bg-beige/30 text-charcoal placeholder-charcoal/50 resize-none"
                  placeholder="Tell me about your project, goals, and requirements..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-brown text-white rounded-full font-semibold hover:bg-brown-dark transition-all duration-300 shadow-soft hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-green-50 border-l-4 border-green-500 rounded text-green-700"
                >
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700"
                >
                  Oops! Something went wrong. Please try again or email me directly at muhammadrafayy0@gmail.com
                </motion.div>
              )}
            </form>

            {/* Alternative Contact */}
            <div className="text-center">
              <p className="text-charcoal/70 text-sm md:text-base mb-4">Or email me directly:</p>
              <a
                href="mailto:muhammadrafayy0@gmail.com"
                className="text-brown font-semibold hover:text-brown-dark transition-colors"
              >
                muhammadrafayy0@gmail.com
              </a>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-8">
              <Link href="/" className="text-brown hover:text-brown-dark font-semibold transition-colors">
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
