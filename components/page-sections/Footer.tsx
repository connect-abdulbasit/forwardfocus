import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white border-t border-[#202020]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div>© 2024 Forward Focus B.V. All rights reserved.</div>
          <div>
            Designed by{" "}
            <a target="_blank" href="https://www.linkedin.com/in/jawad-a-dev/" className="text-white">
              Jawad Asghar
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

