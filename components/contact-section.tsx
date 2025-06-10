import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-zinc-950 border-zinc-800" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-zinc-950 border-zinc-800" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" className="bg-zinc-950 border-zinc-800" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} className="bg-zinc-950 border-zinc-800" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white">Send Message</Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-zinc-900 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-zinc-400">contact@nexusai.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-zinc-900 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-zinc-900 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-zinc-400">123 Tech Avenue, San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
              <p className="text-zinc-400 mb-6">
                Book a free 30-minute consultation with one of our AI experts to discuss your business needs.
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white">Book a Call</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
