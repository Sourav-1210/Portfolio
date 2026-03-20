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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up order-2 lg:order-1 flex flex-col justify-center">
            <p className="text-green-600 dark:text-green-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
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
                href="https://www.linkedin.com/in/sourav1210/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-sm font-medium"
              >
                <FiLinkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative group">
              {/* Subtle professional glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-15 dark:opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500 scale-105"></div>
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-800 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/IMG_4388.PNG"
                  alt="Sourav Sharma"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
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
              <div className="absolute bottom-4 -right-4 lg:-left-6 lg:right-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl px-4 py-3 shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Ready to Work
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5 font-medium">B.Tech CS Student</p>
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
