import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="mb-12 text-2xl">
          Join forwardfoc.us today and experience the power of AI-driven solutions and expert outsourcing.
        </p>
        <Button size="lg" variant="secondary" className="text-xl py-6 px-12">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

