import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | loretoleg - AI Consultant",
  description:
    "Privacy Policy for loretoleg AI consulting services. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
