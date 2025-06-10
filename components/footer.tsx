import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-[#111]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-[#555]">© {new Date().getFullYear()} loretoleg. All rights reserved.</p>
          </div>

          <div className="flex space-x-8">
            <a href="mailto:loretoleg@gmail.com" className="text-[#555] hover:text-white transition-colors">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/luis-loreto-302460164/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/loretoleg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
