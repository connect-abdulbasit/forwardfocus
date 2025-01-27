import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    name: "AI Task Manager",
    description: "Automate your workflow with our intelligent task management system.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Smart Outsourcing",
    description: "Connect with skilled professionals to handle your projects efficiently.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Data Insights",
    description: "Gain valuable insights from your data with our AI-powered analytics.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our AI Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <Card key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="mb-6 rounded-lg"
                />
                <CardDescription className="text-lg">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

