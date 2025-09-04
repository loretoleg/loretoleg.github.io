"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ClientLanguageSwitcher } from "@/components/client-1/client-language-switcher"

export function ClientNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-[#030303]/90 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center text-xl font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-white">loreto</span>
          <span className="text-[#555]">leg</span>
        </Link>

        <ClientLanguageSwitcher />
      </div>
    </nav>
  )
}
