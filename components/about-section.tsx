import { Github } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Deep Learning",
    "Data Science",
    "AI Strategy",
  ]

  return (
    <section id="about" className="bg-[#050505] min-h-[calc(100vh+5rem)] pt-32 pb-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">About</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Who I am</h2>

            <div className="space-y-4 text-[#aaa] text-sm md:text-base">
              <p>
                I'm an AI consultant specializing in helping businesses implement artificial intelligence solutions that
                drive real value. With expertise in machine learning, data science, and strategic implementation, I
                bridge the gap between cutting-edge AI technology and practical business applications.
              </p>
              <p>
                My approach focuses on understanding your unique business challenges and developing tailored AI
                solutions that deliver measurable results and competitive advantage.
              </p>
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
                <p className="text-[#888] mt-1 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">50+</h3>
                <p className="text-[#888] mt-1 text-sm">Projects Completed</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#222]">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#111] flex items-center justify-center mr-3">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[#888] mb-1 whitespace-normal break-words">View my work and background</p>
                  <a
                    href="https://github.com/loretoleg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#aaa] hover:text-white transition-colors break-all"
                  >
                    github.com/loretoleg
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-2xl mx-auto lg:mx-0 overflow-visible">
              <img
                src="https://nationaltoday.com/wp-content/uploads/2020/02/doggy-date-night.jpg.webp"
                alt="Loreto Leg - AI Consultant"
                className="w-full h-full object-cover rounded-lg shadow-lg"
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
