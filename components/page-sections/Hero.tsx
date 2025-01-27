import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-3 text-orange-500 font-medium">Fully booked until March 15th, 2025</div>
        <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          Ship new AI features
          <br />
          with the speed of light.
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          We're a boutique software development agency specializing in AI integration, B2B, SaaS, and early stage
          startups.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div>
            <h3 className="font-medium mb-1.5">Velocity</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Our no-nonsense approach means less talk, more action, and faster time-to-market.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-1.5">Holistic</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We build powerful, user-friendly AI solutions that look as good as they perform.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-1.5">Expertise</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Work directly with seasoned engineers that understand what's at stake.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
