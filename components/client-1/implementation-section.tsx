"use client"

import { useLanguage } from "@/context/client-language-context"

export function ImplementationSection() {
  const { t } = useLanguage()

  const phases = [
    {
      number: "01",
      title: t("client1.discoveryPlanning"),
      duration: "1 Semana",
      description:
        "Analizaremos tu proceso actual de reservas, identificaremos puntos problemáticos y diseñaremos una solución personalizada para las necesidades específicas de tu barbería.",
      deliverables: [
        "Análisis del proceso actual",
        "Documento de requerimientos",
        "Plano de la solución",
        "Cronograma de implementación",
      ],
    },
    {
      number: "02",
      title: t("client1.systemSetup"),
      duration: "2 Semanas",
      description:
        "Configuraremos tu sistema de reservas, lo integraremos con calendarios y servicios de mensajería, y lo personalizaremos para que coincida con tu marca.",
      deliverables: [
        "Configuración del sistema de reservas",
        "Integración de calendario",
        "Configuración de notificaciones SMS/Email",
        "Panel de control del personal",
      ],
    },
    {
      number: "03",
      title: t("client1.trainingOnboarding"),
      duration: "1 Semana",
      description:
        "Capacitaremos a tu personal en el nuevo sistema, asegurándonos de que todos se sientan cómodos con la tecnología y puedan manejar cualquier pregunta de los clientes.",
      deliverables: [
        "Sesiones de capacitación del personal",
        "Documentación y guías",
        "Plantillas de comunicación con clientes",
        "Procedimientos de soporte",
      ],
    },
    {
      number: "04",
      title: t("client1.launchOptimization"),
      duration: "Continuo",
      description:
        "Lanzaremos tu nuevo sistema de reservas, monitorearemos su rendimiento y haremos mejoras continuas basadas en comentarios y datos.",
      deliverables: [
        "Lanzamiento del sistema",
        "Monitoreo de rendimiento",
        "Recolección de comentarios de clientes",
        "Actualizaciones de optimización regulares",
      ],
    },
  ]

  return (
    <section id="implementation" className="min-h-screen flex items-center pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">{t("client1.theProcess")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("client1.implementationPlan")}</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">{t("client1.implementationDescription")}</p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-4xl font-bold text-white">{phase.number}</div>
                <div className="mt-2 text-[#888]">{phase.duration}</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-medium">{phase.title}</h3>
              </div>
              <div className="md:col-span-7 bg-[#111] p-8">
                <p className="text-[#aaa] text-lg mb-6">{phase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-wider text-[#888]">Entregables</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-[#aaa]">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
