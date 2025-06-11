"use client"

import { useState } from "react"

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "AI Strategy",
      description: "Develop a comprehensive AI roadmap aligned with your business goals and market opportunities.",
      details: ["Competitive analysis", "Technology assessment", "Implementation roadmap", "ROI forecasting"],
    },
    {
      title: "Custom Solutions",
      description: "Build tailored AI applications and machine learning models for your specific business needs.",
      details: [
        "Natural language processing",
        "Computer vision systems",
        "Predictive analytics",
        "Recommendation engines",
      ],
    },
    {
      title: "Implementation",
      description: "Seamlessly integrate AI capabilities into your existing systems and business processes.",
      details: ["Technical integration", "Team training", "Performance monitoring", "Continuous improvement"],
    },
  ]

  return (
    <section id="services" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What I offer</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">
            Specialized AI consulting services to help you navigate the complex landscape of artificial intelligence.
          </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services[activeService].details.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm">{index + 1}</span>
                  </div>
                  <p className="text-[#aaa]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
