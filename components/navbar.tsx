"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"

export function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-[#030303]/90 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium">
          <span className="text-white">loreto</span>
          <span className="text-[#555]">leg</span>
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={toggleMenu}
                className="w-10 h-10 flex items-center justify-center text-white bg-[#111] rounded-full"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="fixed inset-0 bg-[#030303] z-40 pt-20">
                <div className="flex flex-col space-y-8 px-6 py-12">
                  <Link
                    href="#services"
                    className="text-3xl font-light hover:text-[#888] transition-colors"
                    onClick={toggleMenu}
                  >
                    {t("services")}
                  </Link>
                  <Link
                    href="#about"
                    className="text-3xl font-light hover:text-[#888] transition-colors"
                    onClick={toggleMenu}
                  >
                    {t("about")}
                  </Link>
                  <Link
                    href="#contact"
                    className="text-3xl font-light hover:text-[#888] transition-colors"
                    onClick={toggleMenu}
                  >
                    {t("contact")}
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center">
            <div className="flex items-center space-x-12 mr-8">
              <Link href="#services" className="text-sm uppercase tracking-wider hover:text-[#888] transition-colors">
                {t("services")}
              </Link>
              <Link href="#about" className="text-sm uppercase tracking-wider hover:text-[#888] transition-colors">
                {t("about")}
              </Link>
              <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-[#888] transition-colors">
                {t("contact")}
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  )
}