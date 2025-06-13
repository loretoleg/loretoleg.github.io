"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const { t } = useLanguage()

  const services = [
    {
      title: t("aiStrategy"),
      description: t("aiStrategyDescription"),
      details: [t("competitiveAnalysis"), t("technologyAssessment"), t("implementationRoadmap"), t("roiForecasting")],
    },
    {
      title: t("customSolutions"),
      description: t("customSolutionsDescription"),
      details: [
        t("naturalLanguageProcessing"),
        t("computerVision"),
        t("predictiveAnalytics"),
        t("recommendationEngines"),
      ],
    },
    {
      title: t("implementation"),
      description: t("implementationDescription"),
      details: [t("technicalIntegration"), t("teamTraining"), t("performanceMonitoring"), t("continuousImprovement")],
    },
  ]

  return (
    <section id="services" className="flex items-center pb-56">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("servicesTitle")}</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">{t("servicesDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "bg-[#111] border-l-2 border-white"
                    : "hover:bg-[#0a0a0a] border-l-2 border-transparent"
                }`}
                onClick={() => setActiveService(index)}
              >
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-[#888] text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-8 bg-[#111] p-8 md:p-12">
            <h3 className="text-2xl font-medium mb-8">{services[activeService].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {services[activeService].details.map((detail, index) => (
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
