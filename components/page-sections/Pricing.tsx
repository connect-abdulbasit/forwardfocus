import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="pt-16 transition-colors duration-300">
      <div className="container p-8 mx-auto max-w-4xl">
        <h2 className="dark:text-white text-gray-900 text-2xl font-bold mb-4">Pricing</h2>
        <div className="space-y-6">
          <div className="rounded-lg">
            <div className="flex items-baseline justify-between">
              <div className="dark:text-white text-gray-900 text-2xl font-bold">€4750 / month</div>
              <div className="dark:text-gray-400 text-gray-500">Excluding VAT</div>
            </div>
            <div className="mt-6 space-y-3">
              <h3 className="font-medium dark:text-white text-gray-900">What you get:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 dark:bg-gray-400 bg-gray-500 rounded-full"></span>
                  <span className="dark:text-white text-gray-900">1 sync call / week</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 dark:bg-gray-400 bg-gray-500 rounded-full"></span>
                  <span className="dark:text-white text-gray-900">Unlimited requests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 dark:bg-gray-400 bg-gray-500 rounded-full"></span>
                  <span className="dark:text-white text-gray-900">Fast turnaround</span>
                </li>
              </ul>
            </div>
            <Button
              className="w-full mt-6 py-5 rounded dark:bg-white dark:text-black bg-gray-900 text-white dark:hover:bg-gray-200 hover:bg-gray-800 transition-colors duration-200"
            >
              Start shipping!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

