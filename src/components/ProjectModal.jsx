import { useEffect } from 'react'
import { FiX, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      {/* Modal Panel */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'slideUp 0.25s ease-out' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm"
        >
          <FiX className="w-4 h-4" />
        </button>

        {/* Project Image */}
        <div className="w-full aspect-video overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover translate-y-0"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">

          {/* Header */}
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {project.title}
            </h2>
            <p className="text-green-600 dark:text-green-400 font-medium text-sm">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Key Features */}
            <div className="bg-gray-50 dark:bg-gray-800/60 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-50 dark:bg-gray-800/60 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-semibold bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full border border-green-100 dark:border-green-900"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm"
            >
              <FiGithub className="w-4 h-4" /> View on GitHub
            </a>
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-sm"
              >
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
