import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import SEO from "./components/SEO"

export default function Home() {
  return (
    <>
      <SEO
        title="forwardfoc.us - AI Solutions & Expert Outsourcing"
        description="Empower your business with AI-driven solutions and professional outsourcing services. Streamline your workflow and boost productivity with forwardfoc.us."
        canonical="https://forwardfoc.us"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Features />
          <Products />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

