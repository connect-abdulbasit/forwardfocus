import { CheckCircle } from "lucide-react";

const features = [
  "UX/UI that users love",
  "Performing frontends",
  "Design systems that scale",
  "3rd party integrations",
  "AI solutions",
];

export default function Services() {
  return (
    <section className="pt-28 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 dark:bg-[#141414] bg-gray-100 md:grid-cols-2">
          {/* Services */}
          <div className="p-8 border-b md:border-r dark:border-[#1c1c1c] border-gray-200">
            <h2 className="text-2xl font-bold dark:text-gray-100 text-gray-900 mb-4">
              Services
            </h2>
            <p className="dark:text-gray-400 text-gray-600 mb-6">
              We bring decades of experience to your project. No learning curve,
              just results.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 dark:text-gray-500 text-gray-400" />
                  <span className="dark:text-gray-300 text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="dark:text-gray-400 text-gray-600">
                Need a team that just gets it?{" "}
                <a href="#contact" className="text-blue-500 hover:text-blue-600 underline transition-colors">
                  Let's talk
                </a>
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-100 text-gray-900">
              Our process
            </h2>
            <div className="space-y-4 text-sm dark:text-gray-400 text-gray-600">
              <p>
                After purchase you are invited to Discord, where you can connect
                with our team in real-time.
              </p>
              <p>
                We start shipping as soon as the requirements have been
                discussed and approved.
              </p>
              <p>To ensure a short feedback loop we release fast and often.</p>
              <p>
                We exclusively build AI-powered apps and design systems on top
                of our own boilerplate. This means all the non-differentiating
                work has already been done and we can quickly build your
                features.
              </p>
              <p>
                Framework we use is Next.js (SSR) or Vue (SPA). Design systems
                are built with Sass UI, and Chakra UI or Panda CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}