"use client"

import { TrendingUp, Clock, Users, Award } from "lucide-react"
import { useLanguage } from "@/context/client-language-context"

export function BenefitsSection() {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">{t("client1.theImpact")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("client1.businessBenefits")}</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">{t("client1.benefitsDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-8 md:p-12 flex flex-col h-full">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.increasedRevenue")}</h3>
            <div className="flex-grow">
              <p className="text-[#aaa] text-lg mb-6">{t("client1.revenueDesc")}</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">20% reducción en ausencias</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">15% aumento en reservas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">10% mayor valor promedio por venta adicional</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-[#222]">
              <div className="flex items-end">
                <span className="text-4xl font-bold">30%</span>
                <span className="text-[#888] ml-2">aumento potencial de ingresos</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12 flex flex-col h-full">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.timeSavings")}</h3>
            <div className="flex-grow">
              <p className="text-[#aaa] text-lg mb-6">{t("client1.timeSavingsDesc")}</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">90% reducción en tiempo de reservas telefónicas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Recordatorios automáticos eliminan seguimientos manuales</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Programación optimizada maximiza productividad del personal</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-[#222]">
              <div className="flex items-end">
                <span className="text-4xl font-bold">15</span>
                <span className="text-[#888] ml-2">horas ahorradas por semana</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12 flex flex-col h-full">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.customerSatisfaction")}</h3>
            <div className="flex-grow">
              <p className="text-[#aaa] text-lg mb-6">{t("client1.customerSatisfactionDesc")}</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Conveniencia de reservas 24/7</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Confirmaciones y recordatorios claros</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Experiencia personalizada del cliente</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-[#222]">
              <div className="flex items-end">
                <span className="text-4xl font-bold">40%</span>
                <span className="text-[#888] ml-2">aumento en reseñas positivas</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12 flex flex-col h-full">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.competitiveEdge")}</h3>
            <div className="flex-grow">
              <p className="text-[#aaa] text-lg mb-6">{t("client1.competitiveEdgeDesc")}</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Presencia digital moderna</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Atrae clientes conocedores de tecnología</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-[#aaa]">Decisiones de negocio basadas en datos</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-[#222]">
              <div className="flex items-end">
                <span className="text-4xl font-bold">85%</span>
                <span className="text-[#888] ml-2">de clientes prefieren reservas en línea</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
