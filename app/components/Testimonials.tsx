import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "forwardfoc.us has revolutionized our workflow. Their AI solutions have saved us countless hours and improved our productivity tenfold.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateCo",
    content:
      "The outsourcing services provided by forwardfoc.us are top-notch. We've found incredible talent that integrates seamlessly with our team.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700 dark:text-gray-200">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

