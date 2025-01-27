import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">€4750 / month</div>
              <div className="text-gray-500">Excluding VAT</div>
            </div>
            <div className="mt-6 space-y-3">
              <h3 className="font-medium">What you get:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>1 sync call / week</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Unlimited requests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Fast turnaround</span>
                </li>
              </ul>
            </div>
            <Button className="w-full mt-6 py-5">Start shipping!</Button>
          </div>

          <div className="pt-6 border-t">
            <div className="flex items-center justify-between text-sm">
              <span>Join our Slack channel instead?</span>
              <span>+ €250 / month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
