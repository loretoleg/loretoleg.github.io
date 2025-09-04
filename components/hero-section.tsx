"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
    const { t } = useLanguage()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
        ctx.stroke()
      }

      // Draw vertical lines
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
    <section className="relative min-h-screen flex items-center mb-40">
       <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-[#111] flex items-center justify-center mb-6 md:mb-0">
              <span className="text-xl font-medium">AI</span>
            </div>
            <div className="md:ml-4">
              <h2 className="text-sm uppercase tracking-widest text-[#888] mb-2">{t("aiConsultant")}</h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                {t("craftingTitle")} <br />
                <span className="text-[#888]">{t("intelligentTitle")}</span> <br />
                {t("solutionsTitle")}
              </h1>
            </div>
          </div>

          <div className="mt-12 md:mt-20 md:ml-24">
            <p className="text-xl md:text-2xl text-[#aaa] max-w-xl leading-relaxed">{t("heroDescription")}</p>

            <div className="mt-12 flex flex-col md:flex-row gap-6">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black font-medium hover:bg-[#eee] transition-colors inline-flex items-center"
              >
                {t("startProject")}
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#services" className="px-8 py-4 border border-[#222] hover:border-[#444] transition-colors">
                {t("exploreServices")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
        <a href="#services" aria-label="Scroll to services">
          <div className="animate-bounce cursor-pointer p-2">
            <svg className="w-6 h-6 text-[#888]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}
