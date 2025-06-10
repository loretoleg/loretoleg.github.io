import Image from "next/image"
import { Button } from "@/components/ui/button"
import "@/app/globals.css"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <p className="text-zinc-400 mb-6 text-lg">
              Founded by a team of AI researchers and industry veterans, Nexus AI Consulting bridges the gap between
              cutting-edge artificial intelligence research and practical business applications.
            </p>
            <p className="text-zinc-400 mb-6 text-lg">
              Our mission is to democratize access to AI technology, helping businesses of all sizes harness the
              transformative power of artificial intelligence to solve complex problems and create new opportunities.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-4xl font-bold text-purple-500 mb-2">50+</h3>
                <p className="text-zinc-400">Clients Worldwide</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-teal-500 mb-2">100+</h3>
                <p className="text-zinc-400">AI Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-500 mb-2">15+</h3>
                <p className="text-zinc-400">Industry Experts</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-teal-500 mb-2">8+</h3>
                <p className="text-zinc-400">Years of Experience</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">Learn More About Us</Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-zinc-800">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 z-10"></div>
              <Image
                src="/placeholder.svg"
                alt="AI Consulting Team"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-600 to-teal-500 rounded-xl -z-10 blur-xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-purple-600 to-teal-500 rounded-xl -z-10 blur-xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
