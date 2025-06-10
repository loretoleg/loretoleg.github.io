import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, LineChart, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Brain className="h-10 w-10 text-purple-500" />,
      title: "AI Strategy Consulting",
      description: "Develop a comprehensive AI roadmap tailored to your business objectives and industry challenges.",
    },
    {
      icon: <Code className="h-10 w-10 text-teal-500" />,
      title: "Custom AI Solutions",
      description: "Build bespoke AI applications and systems designed to address your specific business needs.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-purple-500" />,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with advanced analytics and machine learning.",
    },
    {
      icon: <Zap className="h-10 w-10 text-teal-500" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of AI consulting services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800 hover:border-purple-500/50 transition-all duration-300 h-full"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
