"use client"

import { useLanguage } from "@/context/client-language-context"

export function TestimonialSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote:
        "Implementar este sistema de reservas fue la mejor decisión de negocio que hemos tomado. Nuestra tasa de ausencias bajó un 60% y nuestros estilistas pueden enfocarse en cortar cabello en lugar de manejar el teléfono.",
      author: "Carlos Mendoza",
      role: "Propietario, Barbería El Corte Perfecto",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      quote:
        "A nuestros clientes les encanta poder reservar citas en cualquier momento, y a nosotros nos encanta no tener que manejar un calendario de papel. El sistema se pagó solo en el primer mes.",
      author: "María Rodríguez",
      role: "Gerente, Salón Estilo & Elegancia",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
    {
      quote:
        "Como una barbería pequeña, dudábamos sobre nueva tecnología, pero el sistema fue increíblemente fácil de aprender. Ahora no podemos imaginar manejar nuestro negocio sin él.",
      author: "David Chen",
      role: "Propietario, Cortes Clásicos",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
  ]

  return (
    <section id="testimonials" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">{t("client1.successStories")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("client1.whatOthersSay")}</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">{t("client1.testimonialsDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#111] p-8 flex flex-col h-full">
              <div className="flex-grow">
                <p className="text-[#aaa] text-lg italic mb-8">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-[#888] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
