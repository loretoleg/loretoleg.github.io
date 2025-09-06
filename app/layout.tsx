import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"
import ScrollToTop from "@/components/ScrollToTop" // ✅ import client component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "loretoleg - AI Consultant",
  description:
    "AI consultant specializing in machine learning, data science, and strategic AI implementation. Helping businesses implement cutting-edge AI solutions.",
  keywords: "AI consultant, machine learning, data science, artificial intelligence, AI strategy, custom AI solutions",
  authors: [{ name: "Luis Loreto" }],
  creator: "Luis Loreto",
  openGraph: {
    title: "loretoleg - AI Consultant",
    description: "AI consultant specializing in machine learning, data science, and strategic AI implementation.",
    url: "https://loretoleg.github.io",
    siteName: "loretoleg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "loretoleg - AI Consultant",
    description: "AI consultant specializing in machine learning, data science, and strategic AI implementation.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop /> {/* ✅ scrolls to top on refresh */}
        <LanguageProvider defaultLang="en">{children}</LanguageProvider>
      </body>
    </html>
  )
}
