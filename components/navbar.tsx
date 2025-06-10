"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">NEXUS AI</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-zinc-800 py-4">
                <div className="flex flex-col space-y-4 px-4">
                  <Link href="#services" className="py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                    Services
                  </Link>
                  <Link href="#about" className="py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                    About
                  </Link>
                  <Link href="#contact" className="py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                    Contact
                  </Link>
                  <Button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white border-0">
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <Link href="#services" className="text-sm hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white border-0">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
