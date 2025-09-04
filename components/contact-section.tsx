"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/context/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const response = await fetch("https://lpvni7bguxwspcrrmev5grslk40xgqrh.lambda-url.us-east-1.on.aws/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })

    const result = await response.text() // <== show the body even if it's not JSON
      console.log("Lambda response:", result)

      if (response.ok) {
        alert("Form submitted successfully!")
      } else {
        alert("Failed to submit the form. Check console.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred.")
    }
  }



  return (
    <section id="contact" className="flex items-center pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">{t("contactTitle")}</h2>

            <p className="text-[#aaa] max-w-md mb-12">{t("contactDescription")}</p>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a href="mailto:loretoleg@gmail.com" className="text-[#aaa] hover:text-white transition-colors">
                loretoleg@gmail.com
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#888] mb-2">
                  {t("nameLabel")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  className="bg-[#111] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#888] mb-2">
                  {t("emailLabel")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  className="bg-[#111] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#888] mb-2">
                  {t("messageLabel")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  rows={6}
                  className="bg-[#111] border-[#222] focus:border-[#444] rounded-none resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-[#eee] rounded-none h-14 font-medium"
              >
                {t("sendMessage")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
