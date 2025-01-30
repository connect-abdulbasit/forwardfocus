import { CheckCircle } from "lucide-react"

const features = [
  "AI-powered task automation",
  "Expert professional outsourcing",
  "Seamless integration with your workflow",
  "24/7 support and monitoring",
  "Customizable solutions for your needs",
  "Secure and scalable infrastructure",
]

export default function Services() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Services</h2>
        <p className="text-gray-400 mb-6">
          We bring decades of experience to your project. No learning curve, just results.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-700"></span>
            <span className="text-gray-300">AI model integration and fine-tuning</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-700"></span>
            <span className="text-gray-300">Custom AI solutions development</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-700"></span>
            <span className="text-gray-300">AI-powered frontend applications</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-700"></span>
            <span className="text-gray-300">Design systems that scale</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-700"></span>
            <span className="text-gray-300">LLM and vector database integrations</span>
          </li>
        </ul>
        <div className="mt-6">
          <p className="text-gray-400">
            Need a team that just gets it?{" "}
            <a href="#contact" className="text-blue-500 underline">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

