"use client"

import { useState } from "react"
import { useLanguage } from "@/context/client-language-context"

export function SolutionSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const { t } = useLanguage()

  const features = [
    {
      title: t("client1.aiPoweredBooking"),
      description: t("client1.aiBookingDesc"),
      details: [
        "Disponibilidad de reservas en línea 24/7",
        "Emails y mensajes de confirmación automáticos",
        "Integración con Google, Apple y Outlook",
        "Flujo de reservas personalizado por servicio",
      ],
    },
    {
      title: t("client1.staffDashboard"),
      description: t("client1.staffDashboardDesc"),
      details: [
        "Interfaz visual de calendario",
        "Gestión de citas con un clic",
        "Optimización de horarios del personal",
        "Actualizaciones y notificaciones en tiempo real",
      ],
    },
    {
      title: t("client1.customerExperienceFeature"),
      description: t("client1.customerExperienceFeatureDesc"),
      details: [
        "Recordatorios personalizados de citas",
        "Recomendaciones basadas en historial",
        "Seguimiento y recolección de feedback automático",
        "Integración con programa de lealtad",
      ],
    },
  ]

  return (
    <section id="solution" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">{t("client1.theSolution")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("client1.modernBookingExperience")}</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">{t("client1.solutionDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-[#111] border-l-2 border-white"
                    : "hover:bg-[#0a0a0a] border-l-2 border-transparent"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-[#888] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-8 bg-[#111] p-8 md:p-12">
            <h3 className="text-2xl font-medium mb-8">{features[activeFeature].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features[activeFeature].details.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center mr-5 flex-shrink-0">
                    <span className="text-base font-medium">{index + 1}</span>
                  </div>
                  <p className="text-[#aaa] text-lg font-light leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
