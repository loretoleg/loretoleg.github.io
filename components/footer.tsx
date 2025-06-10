import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tighter mb-4 block">
              <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                NEXUS AI
              </span>
            </Link>
            <p className="text-zinc-400 mb-4">Transforming business through AI innovation.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-purple-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-purple-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-purple-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  AI Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Custom AI Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Nexus AI Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
