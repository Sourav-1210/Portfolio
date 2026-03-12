import { useState } from 'react'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux,
  FaDatabase
} from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiVsco } from 'react-icons/si'

const allSkills = [
  // Frontend
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', category: 'Frontend' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500', category: 'Frontend' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-500 dark:text-gray-300', category: 'Backend' },
  // Database
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', category: 'Database' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', category: 'Database' },
  // Tools
  { name: 'Git', icon: FaGitAlt, color: 'text-red-400', category: 'Tools' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-700 dark:text-gray-300', category: 'Tools' },
  { name: 'VS Code', icon: SiVsco, color: 'text-blue-500', category: 'Tools' },
  { name: 'Linux', icon: FaLinux, color: 'text-yellow-400', category: 'Tools' },
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="section-heading">Skills</h2>
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 mx-auto rounded-full mb-4"></div>
          <p className="section-subheading">Technologies I work with daily to build modern applications.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-green-600 dark:bg-green-500 text-white shadow-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="card p-5 flex flex-col items-center gap-3 hover:border-green-200 dark:hover:border-green-800 hover:-translate-y-1 transition-all duration-200"
            >
              <Icon className={`w-10 h-10 ${color}`} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
