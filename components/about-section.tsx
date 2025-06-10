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
    <section id="about" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">Who I am</h2>

            <div className="space-y-6 text-[#aaa]">
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

            <div className="mt-12 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-[#111] text-sm text-[#aaa]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold">8+</h3>
                <p className="text-[#888] mt-2">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-[#888] mt-2">Projects Completed</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#222]">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center mr-4">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#888] mb-1">View my work and background</p>
                  <a
                    href="https://github.com/loretoleg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#aaa] hover:text-white transition-colors"
                  >
                    github.com/loretoleg
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Loreto Leg - AI Consultant"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-[#222] -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#111] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
