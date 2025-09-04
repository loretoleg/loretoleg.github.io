"use client"

import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"

export function ClientLanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-sm text-white hover:text-[#888] transition-colors"
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "EN" : "ES"}</span>
    </button>
  )
}
