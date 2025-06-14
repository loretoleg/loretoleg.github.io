import { ClientNavbar } from "@/components/client-1/client-navbar"
import { SimpleHero } from "@/components/client-1/simple-hero"
import { SimpleProblem } from "@/components/client-1/simple-problem"
import { SimpleContact } from "@/components/client-1/simple-contact"
import { Footer } from "@/components/footer"

export default function ClientPitchPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <ClientNavbar />
      <main>
        <SimpleHero />
        <SimpleProblem />
        <SimpleContact />
      </main>
      <Footer />
    </div>
  )
}
