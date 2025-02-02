import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="pt-16">
      <div className="container p-8 mx-auto max-w-4xl">
        <h2 className="text-white text-2xl font-bold mb-4">Pricing</h2>
        <div className="space-y-6">
          <div className="rounded-lg">
            <div className="flex items-baseline justify-between">
              <div className="text-white text-2xl font-bold">€4750 / month</div>
              <div className="text-gray-400">Excluding VAT</div>
            </div>
            <div className="mt-6 space-y-3">
              <h3 className="font-medium text-white">What you get:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-white">1 sync call / week</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-white">Unlimited requests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-white">Fast turnaround</span>
                </li>
              </ul>
            </div>
            <Button
              className="w-full mt-6 py-5 rounded bg-white text-black hover:bg-gray-200 transition-colors duration-200"
            >
              Start shipping!
            </Button>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <div className="flex items-center justify-between text-sm text-white">
              <span>Join your Slack channel instead?</span>
              <span>+ €250 / month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

