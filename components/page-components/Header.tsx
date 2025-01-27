"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            forwardfoc.us
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Features
            </Link>
            <Link
              href="#products"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Products
            </Link>
            <Link
              href="#pricing"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant="ghost" size="icon">
              {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

