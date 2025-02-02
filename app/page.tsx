'use client';
import Hero from "../components/page-sections/Hero";
import Services from "../components/page-sections/Services";
import FAQ from "../components/page-sections/FAQ";
import Pricing from "../components/page-sections/Pricing";
import Footer from "../components/page-sections/Footer";
import SEO from "../components/SEO";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted)
    return null
  
  return (
    <>
      <SEO
        title="Forward Focus - AI Integration Experts"
        description="Ship new AI features with the speed of light. We're a boutique software development agency specializing in AI integration for B2B and SaaS companies."
        canonical="https://forwardfoc.us"
      />
      <main className="min-h-screen bg-white dark:bg-black">
        <Hero theme={theme} toggleTheme={toggleTheme} />
        <Services />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
