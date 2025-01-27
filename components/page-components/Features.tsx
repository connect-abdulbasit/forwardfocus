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
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We bring decades of experience to your project. No learning curve, just results.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-300"></span>
            <span>AI model integration and fine-tuning</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-300"></span>
            <span>Custom AI solutions development</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-300"></span>
            <span>AI-powered frontend applications</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-300"></span>
            <span>Design systems that scale</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full border border-gray-300"></span>
            <span>LLM and vector database integrations</span>
          </li>
        </ul>
        <div className="mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            Need a team that just gets it?{" "}
            <a href="#contact" className="text-blue-600 dark:text-blue-400 underline">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
