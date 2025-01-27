import Header from "../components/page-components/Header"
import Hero from "../components/page-components/Hero"
import Features from "../components/page-components/Features"
import Products from "../components/page-components/Products"
import Testimonials from "../components/page-components/Testimonials"
import Pricing from "../components/page-components/Pricing"
import CTA from "../components/page-components/CTA"
import Footer from "../components/page-components/Footer"
import SEO from "../components/page-components/SEO"

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

