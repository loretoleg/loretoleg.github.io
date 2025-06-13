import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ClientLanguageProvider } from "@/context/client-language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Propuesta de IA - Barbería | loretoleg",
  description:
    "Solución de reservas inteligente para barberías. Elimina la confusión en las citas y mejora la experiencia del cliente con IA.",
  keywords: "barbería, reservas, IA, sistema de citas, consultor IA, automatización",
  authors: [{ name: "Luis Loreto" }],
  creator: "Luis Loreto",
  openGraph: {
    title: "Propuesta de IA - Barbería | loretoleg",
    description: "Solución de reservas inteligente para barberías con IA.",
    url: "https://loretoleg.github.io/client-1",
    siteName: "loretoleg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta de IA - Barbería | loretoleg",
    description: "Solución de reservas inteligente para barberías con IA.",
  },
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientLanguageProvider>{children}</ClientLanguageProvider>
      </body>
    </html>
  )
}
