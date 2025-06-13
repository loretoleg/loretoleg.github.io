export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Implementing this booking system was the best business decision we've made. Our no-show rate dropped by 60% and our stylists can focus on cutting hair instead of managing the phone.",
      author: "James Wilson",
      role: "Owner, The Sharp Cut Barbershop",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      quote:
        "Our customers love being able to book appointments anytime, and we love not having to manage a paper calendar. The system paid for itself within the first month.",
      author: "Maria Rodriguez",
      role: "Manager, Style & Edge Salon",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
    {
      quote:
        "As a small barbershop, we were hesitant about new technology, but the system was incredibly easy to learn. Now we can't imagine running our business without it.",
      author: "David Chen",
      role: "Owner, Classic Cuts",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
  ]

  return (
    <section id="testimonials" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Others Say</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">
            Hear from other barbershop owners who have transformed their booking experience.
          </p>
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
