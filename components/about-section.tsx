"use client"

import { Github } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const skills = [
    t("machineLearning"),
    t("naturalLanguageProcessing"),
    t("computerVisionSkill"),
    t("deepLearning"),
    t("dataScience"),
    t("aiStrategySkill"),
  ]

  return (
    <section id="about" className="flex items-center bg-[#050505] pb-56">
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">About</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{t("aboutTitle")}</h2>

            <div className="space-y-4 text-[#aaa] text-sm md:text-base">
              <p>{t("aboutDescription1")}</p>
              <p>{t("aboutDescription2")}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-[#111] text-xs text-[#aaa]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">8+</h3>
                <p className="text-[#888] mt-1 text-sm">{t("yearsExperience")}</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">50+</h3>
                <p className="text-[#888] mt-1 text-sm">{t("projectsCompleted")}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#222]">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#111] flex items-center justify-center mr-3">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#888] mb-1">{t("viewWorkBackground")}</p>
                  <a
                    href="https://github.com/loretoleg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#aaa] hover:text-white transition-colors"
                  >
                    github.com/loretoleg
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Loreto Leg - AI Consultant"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-[#222] -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#111] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
