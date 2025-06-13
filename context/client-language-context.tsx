"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const ClientLanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function ClientLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es") // Default to Spanish for client pages

  // Load language preference from localStorage on mount, but default to Spanish
  useEffect(() => {
    const savedLanguage = localStorage.getItem("client-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes (separate key for client pages)
  useEffect(() => {
    localStorage.setItem("client-language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k as keyof typeof value]
      } else {
        return key // Return the key if translation not found
      }
    }

    return value as string
  }

  return (
    <ClientLanguageContext.Provider value={{ language, setLanguage, t }}>{children}</ClientLanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(ClientLanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a ClientLanguageProvider")
  }
  return context
}
