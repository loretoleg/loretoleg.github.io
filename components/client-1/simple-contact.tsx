"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/context/language-context"

export function SimpleContact() {
  const { t } = useLanguage() // translation function
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    barbershop: "",
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
    console.log(formState)
    alert(t("client1.simpleContact.alertSent"))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("client1.simpleContact.title1")}
            </h2>
            <p className="text-[#aaa] text-lg">
              {t("client1.simpleContact.description1")}
              <strong className="text-white"> {t("client1.simpleContact.descriptionStrong")}</strong>
            </p>
          </div>

          <div className="bg-[#111] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#888] mb-2">
                  {t("client1.simpleContact.formtitle1")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={t("client1.simpleContact.formdescription1")}
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-[#888] mb-2">
                  {t("client1.simpleContact.formtitle2")}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder={t("client1.simpleContact.formdescription2")}
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="barbershop" className="block text-sm text-[#888] mb-2">
                  {t("client1.simpleContact.formtitle3")}
                </label>
                <Input
                  id="barbershop"
                  name="barbershop"
                  value={formState.barbershop}
                  onChange={handleChange}
                  placeholder={t("client1.simpleContact.formdescription3")}
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#888] mb-2">
                  {t("client1.simpleContact.formtitle4")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t("client1.simpleContact.formdescription4")}
                  rows={4}
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] rounded-none resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-[#eee] rounded-none h-14 font-medium text-lg"
              >
                {t("client1.simpleContact.buttontitle1")}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-[#222] text-center">
              <p className="text-[#888] text-sm">
                {t("client1.simpleContact.description2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
