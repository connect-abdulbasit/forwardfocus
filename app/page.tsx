import Hero from "../components/page-sections/Hero";
import Services from "../components/page-sections/Services";
import Process from "../components/page-sections/Process";
import FAQ from "../components/page-sections/FAQ";
import Pricing from "../components/page-sections/Pricing";
import Footer from "../components/page-sections/Footer";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Forward Focus - AI Integration Experts"
        description="Ship new AI features with the speed of light. We're a boutique software development agency specializing in AI integration for B2B and SaaS companies."
        canonical="https://forwardfoc.us"
      />

      <main className="min-h-screen bg-black">
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
