"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
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
    <section id="contact" className="bg-[#050505] min-h-screen pt-32 pb-36 scroll-mt-36">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Get in touch</h2>

            <p className="text-[#aaa] max-w-md mb-12">
              Have a project in mind or want to learn more about how AI can benefit your business? Let's start a
              conversation.
            </p>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a href="mailto:loretoleg@gmail.com" className="text-[#aaa] hover:text-white transition-colors">
                loretoleg@gmail.com
              </a>
            </div>
          </div>

          <div>
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
                  className="bg-[#111] border-[#222] focus:border-[#444] h-14 rounded-none"
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
                  className="bg-[#111] border-[#222] focus:border-[#444] h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#888] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-[#111] border-[#222] focus:border-[#444] rounded-none resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-[#eee] rounded-none h-14 font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
