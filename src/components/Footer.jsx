import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-5">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-green-600 dark:text-green-400 tracking-tight">
            Sourav<span className="text-gray-900 dark:text-white">.</span>
          </a>

          {/* Tagline */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Frontend / React Developer — Building clean, modern web experiences.
          </p>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium text-gray-500 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/Sourav-1210', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sourav1210/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:souravsharma9142@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-700 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-100 dark:border-gray-800 w-full pt-5 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-600">
              © {year} Sourav Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
