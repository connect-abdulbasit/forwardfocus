import { CheckCircle } from "lucide-react"

const features = [
  "AI-powered task automation",
  "Expert professional outsourcing",
  "Seamless integration with your workflow",
  "24/7 support and monitoring",
  "Customizable solutions for your needs",
  "Secure and scalable infrastructure",
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Why Choose forwardfoc.us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <p className="text-xl text-gray-800 dark:text-gray-200">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

