import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const roles = [
  'Frontend Developer',
  'React Developer',
  'UI/UX Enthusiast',
  'Full Stack Learner',
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      // Typing
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      // Pause then start deleting
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (deleting && displayed.length === 0) {
      // Move to next role
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-5 flex items-center gap-1 min-h-[2rem]">
      <span>{displayed}</span>
      <span className="inline-block w-0.5 h-6 bg-green-500 dark:bg-green-400 animate-pulse ml-0.5 rounded-full" />
    </h2>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="container-max mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <p className="text-green-600 dark:text-green-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              Sourav{' '}
              <span className="text-green-600 dark:text-green-400">Sharma</span>
            </h1>
            <TypewriterText />
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              A Computer Science student passionate about crafting clean, performant, 
              and user-centered web experiences using React.js and modern JavaScript.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                View Projects <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Sourav Sharma General CV.pdf"
                download
                className="btn-outline"
              >
                <FiDownload className="w-4 h-4" /> Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Sourav-1210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-sm font-medium"
              >
                <FiGithub className="w-5 h-5" /> GitHub
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://linkedin.com/in/sourav-sharma-124500284"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-sm font-medium"
              >
                <FiLinkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Green glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-20 blur-2xl scale-110"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Sourav Sharma"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                        <span style="font-size: 5rem; font-weight: 800; color: white;">S</span>
                      </div>
                    `
                  }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl px-3 py-2 shadow-lg">
                <p className="text-xs font-semibold text-green-600 dark:text-green-400">Frontend Developer</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">B.Tech CS Student</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <a href="#about" className="text-gray-400 dark:text-gray-600 flex flex-col items-center gap-1">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
