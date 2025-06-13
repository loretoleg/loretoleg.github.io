import { ClientNavbar } from "@/components/client-1/client-navbar"
import { HeroPitch } from "@/components/client-1/hero-pitch"
import { ProblemSection } from "@/components/client-1/problem-section"
import { SolutionSection } from "@/components/client-1/solution-section"
import { DemoSection } from "@/components/client-1/demo-section"
import { BenefitsSection } from "@/components/client-1/benefits-section"
import { ImplementationSection } from "@/components/client-1/implementation-section"
import { TestimonialSection } from "@/components/client-1/testimonial-section"
import { CtaSection } from "@/components/client-1/cta-section"
import { Footer } from "@/components/footer"

export default function ClientPitchPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <ClientNavbar />
      <main>
        <HeroPitch />
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <BenefitsSection />
        <ImplementationSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
