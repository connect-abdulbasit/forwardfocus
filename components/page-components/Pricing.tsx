import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Focus on What Matters",
    price: "$4850",
    features: ["Custom integrations","All AI-powered products", "Unlimited outsourcing", "24/7 dedicated support", "Custom solutions"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-semibold">
                  <span className="text-4xl">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-xl text-gray-600 dark:text-gray-400">/month</span>}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-xl py-6">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

