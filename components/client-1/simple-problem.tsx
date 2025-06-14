"use client"

export function SimpleProblem() {
  return (
    <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">¿Te suena familiar?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111] p-8">
              <h3 className="text-xl font-medium mb-4 text-red-400">El problema</h3>
              <ul className="space-y-3 text-[#aaa] text-left">
                <li>• Clientes confundidos con las reservas por teléfono</li>
                <li>• No sabes usar Google Calendar o WhatsApp Business</li>
                <li>• Pierdes clientes por la mala experiencia de reserva</li>
                <li>• Gastas mucho tiempo organizando citas manualmente</li>
              </ul>
            </div>

            <div className="bg-[#111] p-8">
              <h3 className="text-xl font-medium mb-4 text-green-400">La solución</h3>
              <ul className="space-y-3 text-[#aaa] text-left">
                <li>• Sistema automático de reservas por WhatsApp</li>
                <li>• Recordatorios automáticos a tus clientes</li>
                <li>• Base de datos de clientes organizada</li>
                <li>• Más tiempo para cortar cabello, menos para el teléfono</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
