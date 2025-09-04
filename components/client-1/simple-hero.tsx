"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context" // Assuming this is the correct context

export function SimpleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
        ctx.stroke()
      }

      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
        ctx.stroke()
      }
    }

    drawGrid()
    window.addEventListener("resize", drawGrid)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", drawGrid)
    }
  }, [])

  return (
    // Adjusted padding for better responsiveness, especially on smaller screens.
    // Removed min-h-screen if you want the section to be defined by its content height + padding.
    // Or, keep min-h-screen but ensure content scales down gracefully.
    // <section className="relative flex items-center justify-center py-12 md:py-16 lg:py-20">
    <section className="relative flex items-center justify-center min-h-screen py-12 md:py-16 lg:py-20">
      
      {/* Reduced vertical padding to help content fit better */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Adjusted text sizes for better fit on various screens */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t("client1.simpleHero.title1")} <br />
            <span className="text-[#888]">{t("client1.simpleHero.title2")}</span> <br />
            {t("client1.simpleHero.title3")}
          </h1>

          <p className="text-md sm:text-lg md:text-xl text-[#aaa] max-w-3xl mx-auto leading-relaxed mb-8">
            {t("client1.simpleHero.description1")}
            <strong className="text-white"> {t("client1.simpleHero.descriptionStrong")}</strong> {t("client1.simpleHero.description2")}
          </p>

          <div className="bg-[#111] p-6 md:p-8 lg:p-10 max-w-3xl mx-auto mb-8">
            <h3 className="text-xl md:text-2xl font-medium mb-6">{t("client1.simpleHero.howItWorksTitle")}</h3>
            <div className="space-y-4 md:space-y-6 text-left">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-medium text-sm">
                  1
                </div>
                <p className="text-[#aaa] text-sm md:text-base">
                  <strong className="text-white">{t("client1.simpleHero.step1Strong")}</strong> - {t("client1.simpleHero.step1Description")}
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-medium text-sm">
                  2
                </div>
                <p className="text-[#aaa] text-sm md:text-base">
                  <strong className="text-white">{t("client1.simpleHero.step2Strong")}</strong> - {t("client1.simpleHero.step2Description")}
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-medium text-sm">
                  3
                </div>
                <p className="text-[#aaa] text-sm md:text-base">
                  <strong className="text-white">{t("client1.simpleHero.step3Strong")}</strong> - {t("client1.simpleHero.step3Description")}
                </p>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center px-8 md:px-12 py-3 md:py-4 bg-white text-black text-base md:text-lg font-medium hover:bg-[#eee] transition-colors"
          >
            {t("client1.simpleHero.ctaButton")}
            <svg className="ml-3 w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
