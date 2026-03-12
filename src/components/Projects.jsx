import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Employee Leave Management System',
    description:
      'A full-stack MERN application for managing employee leave requests with role-based dashboards for Employees, Managers, and Admins.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    gradient: 'from-green-400 to-teal-500',
    initial: 'EL',
  },
  {
    title: 'Personal Finance Tracker',
    description:
      'A web app to track income and expenses with real-time balance updates, interactive charts, and budget management features.',
    tech: ['React', 'Context API', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    gradient: 'from-blue-400 to-indigo-500',
    initial: 'PF',
  },
  {
    title: 'Smart Study Planner',
    description:
      'A productivity tool that helps students schedule study sessions, track syllabus progress, and set subject-wise goals.',
    tech: ['React', 'JavaScript', 'CSS', 'Node.js'],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    gradient: 'from-purple-400 to-pink-500',
    initial: 'SS',
  },
  {
    title: 'Agent Job Portal',
    description:
      'A job listing platform where recruiters can post jobs and candidates can apply, with role-based authentication and dashboards.',
    tech: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    gradient: 'from-orange-400 to-red-500',
    initial: 'AJ',
  },
  {
    title: 'Smart Home Web Application',
    description:
      'A web-based dashboard to simulate control of smart home devices including lights, fans, and temperature settings.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    gradient: 'from-yellow-400 to-green-500',
    initial: 'SH',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="card overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
      {/* Project Banner */}
      <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <span className="text-4xl font-extrabold text-white/80 tracking-wider">{project.initial}</span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-medium bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <FiGithub className="w-4 h-4" /> GitHub
          </a>
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <FiExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Projects</h2>
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 mx-auto rounded-full mb-4"></div>
          <p className="section-subheading">
            A selection of projects I've built, showcasing full-stack and frontend skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
