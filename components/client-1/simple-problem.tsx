"use client"

import { useLanguage } from "@/context/language-context"

export function SimpleProblem() {
  const { t } = useLanguage() // get translation function

  return (
    <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("client1.simpleProblem.title1")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111] p-8">
              <h3 className="text-xl font-medium mb-4 text-red-400">
                {t("client1.simpleProblem.title2")}
              </h3>
              <ul className="space-y-3 text-[#aaa] text-left">
                <li>• {t("client1.simpleProblem.PBullet1")}</li>
                <li>• {t("client1.simpleProblem.PBullet2")}</li>
                <li>• {t("client1.simpleProblem.PBullet3")}</li>
                <li>• {t("client1.simpleProblem.PBullet4")}</li>
              </ul>
            </div>

            <div className="bg-[#111] p-8">
              <h3 className="text-xl font-medium mb-4 text-green-400">
                {t("client1.simpleProblem.title3")}
              </h3>
              <ul className="space-y-3 text-[#aaa] text-left">
                <li>• {t("client1.simpleProblem.SBullet1")}</li>
                <li>• {t("client1.simpleProblem.SBullet2")}</li>
                <li>• {t("client1.simpleProblem.SBullet3")}</li>
                <li>• {t("client1.simpleProblem.SBullet4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
