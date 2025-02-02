import { CheckCircle } from "lucide-react";

const features = [
  "Low cost MVPs",
  "UX/UI that users love",
  "Performing frontends",
  "Design systems that scale",
  "3rd party integrations",
  "AI solutions",
];

export default function Services() {
  return (
    <section className="pt-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 bg-[#141414] md:grid-cols-2">
          {/* Services */}
          <div className="p-8 border-b md:border-r border-[#1c1c1c]">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Services</h2>
            <p className="text-gray-400 mb-6">
              We bring decades of experience to your project. No learning curve,
              just results.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-gray-400">
                Need a team that just gets it?{" "}
                <a href="#contact" className="text-blue-500 underline">
                  Let's talk
                </a>
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">
              Our process
            </h2>
            <div className="space-y-4 text-sm text-gray-400">
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