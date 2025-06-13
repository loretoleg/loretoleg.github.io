export function ImplementationSection() {
  const phases = [
    {
      number: "01",
      title: "Discovery & Planning",
      duration: "1 Week",
      description:
        "We'll analyze your current booking process, identify pain points, and design a custom solution tailored to your barbershop's specific needs.",
      deliverables: [
        "Current process analysis",
        "Requirements document",
        "Solution blueprint",
        "Implementation timeline",
      ],
    },
    {
      number: "02",
      title: "System Setup & Integration",
      duration: "2 Weeks",
      description:
        "We'll set up your booking system, integrate it with calendars and messaging services, and customize it to match your brand.",
      deliverables: [
        "Booking system configuration",
        "Calendar integration",
        "SMS/Email notification setup",
        "Staff dashboard",
      ],
    },
    {
      number: "03",
      title: "Training & Onboarding",
      duration: "1 Week",
      description:
        "We'll train your staff on the new system, ensuring everyone is comfortable with the technology and can handle any customer questions.",
      deliverables: [
        "Staff training sessions",
        "Documentation and guides",
        "Customer communication templates",
        "Support procedures",
      ],
    },
    {
      number: "04",
      title: "Launch & Optimization",
      duration: "Ongoing",
      description:
        "We'll launch your new booking system, monitor its performance, and make continuous improvements based on feedback and data.",
      deliverables: [
        "System launch",
        "Performance monitoring",
        "Customer feedback collection",
        "Regular optimization updates",
      ],
    },
  ]

  return (
    <section id="implementation" className="min-h-screen flex items-center pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#888]">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Implementation Plan</h2>
          </div>
          <p className="text-[#888] max-w-md mt-4 md:mt-0 text-sm">
            A clear roadmap to transform your booking experience with minimal disruption to your business.
          </p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-4xl font-bold text-white">{phase.number}</div>
                <div className="mt-2 text-[#888]">{phase.duration}</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-medium">{phase.title}</h3>
              </div>
              <div className="md:col-span-7 bg-[#111] p-8">
                <p className="text-[#aaa] text-lg mb-6">{phase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-wider text-[#888]">Deliverables</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-[#aaa]">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
