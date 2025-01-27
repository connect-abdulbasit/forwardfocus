import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h1 className="text-7xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
          Empower Your Business with <span className="text-blue-600 dark:text-blue-400">AI</span> and Expert Outsourcing
        </h1>
        <p className="text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          forwardfoc.us brings cutting-edge AI solutions and professional outsourcing services to streamline your
          workflow and boost productivity.
        </p>
        <div className="flex justify-center space-x-6">
          <Button size="lg" className="text-xl py-6 px-8">
            Book a Call
          </Button>
          <Button size="lg" variant="outline" className="text-xl py-6 px-8">
            Don't trust what we say - trust our clients.
          </Button>
        </div>
      </div>
    </section>
  )
}

