import Header from "../components/page-components/Header"
import Hero from "../components/page-components/Hero"
import Services from "../components/page-components/Features"
import Process from "../components/page-components/Process"
import FAQ from "../components/page-components/FAQ"
import Pricing from "../components/page-components/Pricing"
import Footer from "../components/page-components/Footer"
import SEO from "../components/page-components/SEO"

export default function Home() {
  return (
    <>
      <SEO
        title="Forward Focus - AI Integration Experts"
        description="Ship new AI features with the speed of light. We're a boutique software development agency specializing in AI integration for B2B and SaaS companies."
        canonical="https://forwardfoc.us"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}
