"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function CtaSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Form submitted! (This is just a demo)")
  }

  return (
    <section id="contact" className="min-h-screen flex items-center pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">Next Steps</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Ready to Transform Your Booking Experience?</h2>

            <p className="text-[#aaa] text-lg max-w-md mb-12">
              Let's discuss how we can implement this solution for your barbershop and start improving your customer
              experience today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Free Consultation</h3>
                  <p className="text-[#888]">
                    We'll analyze your current booking process and identify opportunities for improvement.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Custom Proposal</h3>
                  <p className="text-[#888]">
                    You'll receive a tailored solution designed specifically for your barbershop's needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Seamless Implementation</h3>
                  <p className="text-[#888]">
                    We'll handle the entire setup process with minimal disruption to your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#111] p-8 md:p-12">
              <h3 className="text-2xl font-medium mb-8">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#888] mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#888] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-[#888] mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] h-14 rounded-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#888] mb-2">
                    Tell us about your barbershop
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Number of chairs, current booking process, main challenges..."
                    rows={4}
                    className="bg-[#0a0a0a] border-[#222] focus:border-[#444] rounded-none resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-[#eee] rounded-none h-14 font-medium"
                >
                  Schedule Free Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
