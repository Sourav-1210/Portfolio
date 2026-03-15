import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'souravsharma9142@gmail.com',
    href: 'mailto:souravsharma9142@gmail.com',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Sourav-1210',
    href: 'https://github.com/Sourav-1210',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sourav-sharma',
    href: 'https://www.linkedin.com/in/sourav1210/',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 mx-auto rounded-full mb-4"></div>
          <p className="section-subheading">
            Have an opportunity or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact Details</h3>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 card hover:border-green-200 dark:hover:border-green-800 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-green-50 dark:bg-green-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 border border-green-100 dark:border-green-900 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-sm font-semibold text-green-700 dark:text-green-300">Open to Opportunities</p>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400">
                Currently available for internship and full-time roles in frontend development.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            {submitted ? (
              <div className="card p-8 text-center">
                <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-green-600 dark:text-green-400 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-green-500 dark:focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-green-500 dark:focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-green-500 dark:focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
