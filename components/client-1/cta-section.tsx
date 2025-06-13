"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/context/client-language-context"

export function CtaSection() {
  const { t } = useLanguage()

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("¡Formulario enviado! (Esto es solo una demostración)")
  }

  return (
    <section id="contact" className="min-h-screen flex items-center pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">{t("client1.nextSteps")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">{t("client1.readyToTransform")}</h2>

            <p className="text-[#aaa] text-lg max-w-md mb-12">{t("client1.ctaDescription")}</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{t("client1.freeConsultation")}</h3>
                  <p className="text-[#888]">{t("client1.consultationDesc")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{t("client1.customProposal")}</h3>
                  <p className="text-[#888]">{t("client1.proposalDesc")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{t("client1.seamlessImplementation")}</h3>
                  <p className="text-[#888]">{t("client1.implementationDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#111] p-8 md:p-12">
              <h3 className="text-2xl font-medium mb-8">{t("client1.getStartedToday")}</h3>
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
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
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
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-[#888] mb-2">
                    {t("client1.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder={t("client1.phonePlaceholder")}
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#888] mb-2">
                    {t("client1.tellUsAboutBarbershop")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t("client1.barbershopPlaceholder")}
                    rows={4}
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] rounded-none resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-[#eee] rounded-none h-14 font-medium"
                >
                  {t("client1.scheduleConsultation")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
