"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Scissors } from "lucide-react"
import { useLanguage } from "@/context/client-language-context"

export function DemoSection() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedBarber, setSelectedBarber] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const { t } = useLanguage()

  const services = ["Corte de Cabello", "Arreglo de Barba", "Corte + Barba", "Tinte de Cabello"]
  const barbers = ["Miguel", "Sara", "David", "Emma"]
  const times = ["10:00 AM", "11:00 AM", "1:00 PM", "2:30 PM", "4:00 PM"]

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleReset = () => {
    setStep(1)
    setSelectedService("")
    setSelectedBarber("")
    setSelectedDate("")
    setSelectedTime("")
  }

  return (
    <section id="demo" className="min-h-screen flex items-center pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">{t("client1.interactiveDemo")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("client1.seeItInAction")}</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">{t("client1.demoDescription")}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#111] p-8 md:p-12 relative">
          <div className="flex mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= i ? "bg-white text-black" : "bg-[#222] text-[#888]"
                  }`}
                >
                  {i}
                </div>
                {i < 4 && <div className={`h-[2px] w-16 mx-2 ${step > i ? "bg-white" : "bg-[#222]"}`}></div>}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-medium flex items-center">
                <Scissors className="mr-3 w-5 h-5" />
                {t("client1.selectService")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className={`p-4 border cursor-pointer transition-all ${
                      selectedService === service ? "border-white bg-[#222]" : "border-[#333] hover:border-[#555]"
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-medium flex items-center">
                <User className="mr-3 w-5 h-5" />
                {t("client1.selectBarber")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {barbers.map((barber) => (
                  <div
                    key={barber}
                    className={`p-4 border cursor-pointer transition-all ${
                      selectedBarber === barber ? "border-white bg-[#222]" : "border-[#333] hover:border-[#555]"
                    }`}
                    onClick={() => setSelectedBarber(barber)}
                  >
                    {barber}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-medium flex items-center">
                <Calendar className="mr-3 w-5 h-5" />
                {t("client1.selectDate")}
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`p-4 border text-center cursor-pointer transition-all ${
                      selectedDate === `Mayo ${day}` ? "border-white bg-[#222]" : "border-[#333] hover:border-[#555]"
                    } ${[6, 13, 20, 27].includes(day) ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => ![6, 13, 20, 27].includes(day) && setSelectedDate(`Mayo ${day}`)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-medium flex items-center">
                <Clock className="mr-3 w-5 h-5" />
                {t("client1.selectTime")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {times.map((time) => (
                  <div
                    key={time}
                    className={`p-4 border text-center cursor-pointer transition-all ${
                      selectedTime === time ? "border-white bg-[#222]" : "border-[#333] hover:border-[#555]"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && selectedTime && (
            <div className="mt-12 p-6 bg-[#0a0a0a] border border-[#333]">
              <h4 className="text-xl font-medium mb-4">{t("client1.bookingSummary")}</h4>
              <div className="space-y-2 text-[#aaa]">
                <p>
                  <strong>{t("client1.service")}:</strong> {selectedService}
                </p>
                <p>
                  <strong>{t("client1.barber")}:</strong> {selectedBarber}
                </p>
                <p>
                  <strong>{t("client1.date")}:</strong> {selectedDate}
                </p>
                <p>
                  <strong>{t("client1.time")}:</strong> {selectedTime}
                </p>
              </div>
              <div className="mt-6 p-4 bg-[#111] border-l-2 border-white">
                <p className="text-sm">{t("client1.confirmationMessage")}</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <Button
                onClick={handleBack}
                className="bg-transparent border border-[#333] hover:bg-[#111] hover:border-[#555]"
              >
                {t("client1.back")}
              </Button>
            ) : (
              <div></div>
            )}
            {step < 4 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !selectedService) || (step === 2 && !selectedBarber) || (step === 3 && !selectedDate)
                }
                className="bg-white text-black hover:bg-[#eee]"
              >
                {t("client1.next")}
              </Button>
            ) : (
              <Button onClick={handleReset} className="bg-white text-black hover:bg-[#eee]">
                {t("client1.startOver")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
