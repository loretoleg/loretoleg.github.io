"use client"

import { Scissors, Calendar, Phone, AlertCircle } from "lucide-react"
import { useLanguage } from "@/context/client-language-context"

export function ProblemSection() {
  const { t } = useLanguage()

  return (
    <section id="problem" className="min-h-screen flex items-center pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">{t("client1.theChallenge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("client1.currentBookingIssues")}</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">{t("client1.problemDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-8 md:p-12">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.bookingConfusion")}</h3>
            <p className="text-[#aaa] text-lg">{t("client1.bookingConfusionDesc")}</p>
            <div className="mt-8 p-4 border-l-2 border-[#333] bg-[#0a0a0a]">
              <p className="text-[#888] italic">
                "I called to book an appointment but ended up with the wrong stylist at the wrong time."
              </p>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.calendarIntegration")}</h3>
            <p className="text-[#aaa] text-lg">{t("client1.calendarIntegrationDesc")}</p>
            <div className="mt-8 p-4 border-l-2 border-[#333] bg-[#0a0a0a]">
              <p className="text-[#888] italic">
                "When I asked for a calendar invite, they didn't know what I was talking about."
              </p>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.customerExperience")}</h3>
            <p className="text-[#aaa] text-lg">{t("client1.customerExperienceDesc")}</p>
            <div className="mt-8 p-4 border-l-2 border-[#333] bg-[#0a0a0a]">
              <p className="text-[#888] italic">
                "Great haircuts, but I almost didn't come back because booking was such a hassle."
              </p>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12">
            <div className="w-16 h-16 bg-[#222] flex items-center justify-center mb-8">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4">{t("client1.lostBusiness")}</h3>
            <p className="text-[#aaa] text-lg">{t("client1.lostBusinessDesc")}</p>
            <div className="mt-8 p-4 border-l-2 border-[#333] bg-[#0a0a0a]">
              <p className="text-[#888] italic">
                "I ended up going to another barbershop because I couldn't get a clear appointment time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
