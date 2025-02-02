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
    return (
      <div className="h-screen w-screen">
        <div className="h-full w-full flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900 dark:text-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
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
