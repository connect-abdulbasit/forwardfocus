export default function Footer() {
  return (
    <footer className="py-8 dark:bg-black bg-white dark:text-white text-gray-900 dark:border-[#202020] border-gray-200 border-t transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between text-sm dark:text-gray-400 text-gray-600">
          <div>© 2024 Forward Focus B.V. All rights reserved.</div>
          <div>
            Designed by{" "}
            <a 
              target="_blank" 
              href="https://www.linkedin.com/in/jawad-a-dev/" 
              className="dark:text-white text-gray-900 hover:opacity-80 transition-opacity"
            >
              Jawad Asghar
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

