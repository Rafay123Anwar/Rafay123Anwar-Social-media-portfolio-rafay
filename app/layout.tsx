import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Rafay Anwar - Social Media Manager & Content Creator",
  description:
    "Professional Social Media Manager specializing in YouTube, Instagram, Facebook, and TikTok. Driving brand visibility & engagement through data-driven social media strategy.",
  icons: {
    icon: "/Logo.jpg",
    apple: "/Logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-beige text-charcoal`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
