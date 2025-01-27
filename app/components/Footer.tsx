import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">forwardfoc.us</h3>
            <p className="text-gray-400 text-lg">Empowering businesses with AI and expert outsourcing solutions.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  AI Task Manager
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  Smart Outsourcing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  Data Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-lg">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-lg">&copy; {new Date().getFullYear()} forwardfoc.us. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

