import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "forwardfoc.us - AI Solutions & Expert Outsourcing",
  description:
    "Empower your business with AI-driven solutions and professional outsourcing services. Streamline your workflow and boost productivity with forwardfoc.us.",
  keywords: ["AI solutions", "expert outsourcing", "task automation", "workflow optimization"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forwardfoc.us",
    siteName: "forwardfoc.us",
    title: "forwardfoc.us - AI Solutions & Expert Outsourcing",
    description: "Empower your business with AI-driven solutions and professional outsourcing services.",
    images: [
      {
        url: "https://forwardfoc.us/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "forwardfoc.us - AI Solutions & Expert Outsourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "forwardfoc.us - AI Solutions & Expert Outsourcing",
    description: "Empower your business with AI-driven solutions and professional outsourcing services.",
    images: ["https://forwardfoc.us/twitter-image.jpg"],
    creator: "@forwardfocus",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

