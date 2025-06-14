"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function SimpleContact() {
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
    alert("¡Mensaje enviado! Te contactaré pronto.")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para probarlo?</h2>
            <p className="text-[#aaa] text-lg">
              Cuéntame sobre tu barbería y te construyo un sistema personalizado.
              <strong className="text-white"> Sin costo inicial, sin riesgo.</strong>
            </p>
          </div>

          <div className="bg-[#111] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#888] mb-2">
                  Tu nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="¿Cómo te llamas?"
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-[#888] mb-2">
                  WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="Tu número de WhatsApp"
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="barbershop" className="block text-sm text-[#888] mb-2">
                  Nombre de tu barbería
                </label>
                <Input
                  id="barbershop"
                  name="barbershop"
                  value={formState.barbershop}
                  onChange={handleChange}
                  placeholder="¿Cómo se llama tu barbería?"
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#888] mb-2">
                  Cuéntame sobre tu barbería
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="¿Cuántas sillas tienes? ¿Cómo manejas las reservas ahora? ¿Cuál es tu mayor problema?"
                  rows={4}
                  className="bg-[#0a0a0a] border-[#222] focus:border-[#444] rounded-none resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-[#eee] rounded-none h-14 font-medium text-lg"
              >
                Enviar mensaje
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-[#222] text-center">
              <p className="text-[#888] text-sm">
                Te responderé en menos de 24 horas para agendar una llamada rápida y entender mejor tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
