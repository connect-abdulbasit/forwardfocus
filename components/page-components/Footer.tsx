import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div>© 2024 Forward Focus B.V. All rights reserved.</div>
          <div>
            Designed by{" "}
            <a href="#" className="text-gray-900 dark:text-white">
              Michael Andreuzza
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
