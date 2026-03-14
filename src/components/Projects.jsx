import { useState } from 'react'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'Employee Leave Management System',
    tagline: 'Full-stack MERN HR tool for managing employee leaves',
    description: 'A full-stack MERN application for managing employee leave requests with role-based dashboards for Employees, Managers, and Admins.',
    fullDescription: 'The Employee Leave Management System is a comprehensive HR platform built with the MERN stack. Employees can apply for leaves, track their leave balance, and view approval history. Managers get notified of pending requests and can approve or reject them. Admins have full control over employees, departments, and leave policies. The platform features JWT-based authentication, real-time dashboards, and detailed analytics.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    features: [
      'Role-based access: Employee, Manager, Admin',
      'Leave application with type and date picker',
      'Real-time approval/rejection notifications',
      'Admin dashboard with monthly analytics',
      'Leave balance tracking per employee',
      'Department-wise leave reports',
    ],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    image: '/proj-leave.png',
  },
  {
    title: 'Personal Finance Tracker',
    tagline: 'Track income, expenses, and savings with visual insights',
    description: 'A web app to track income and expenses with real-time balance updates, interactive charts, and budget management features.',
    fullDescription: 'Personal Finance Tracker is a sleek fintech-inspired web application that helps users take control of their finances. Users can log income and expense transactions, categorize spending, and view real-time balance updates. The dashboard features interactive charts showing monthly trends, category-wise breakdowns, and savings rates. Budget limits can be set per category with alerts when spending thresholds are exceeded.',
    tech: ['React', 'Context API', 'MongoDB', 'Express', 'Tailwind CSS', 'Chart.js'],
    features: [
      'Real-time income and expense tracking',
      'Interactive line and donut charts',
      'Category-wise spending analysis',
      'Monthly budget limit setting',
      'Transaction history with filters',
      'Savings rate and goal tracking',
    ],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    image: '/proj-finance.png',
  },
  {
    title: 'Smart Study Planner',
    tagline: 'AI-assisted study scheduling and syllabus tracker',
    description: 'A productivity tool that helps students schedule study sessions, track syllabus progress, and set subject-wise goals.',
    fullDescription: 'Smart Study Planner is a productivity web app designed for students to manage their academic workload efficiently. It allows scheduling study sessions by subject, tracking syllabus completion with visual progress bars, and setting daily study goals. A built-in Pomodoro timer helps maintain focus, while the weekly timetable grid provides a clear overview of planned sessions. Upcoming exam dates and task checklists keep students on track.',
    tech: ['React', 'JavaScript', 'CSS Modules', 'Node.js', 'LocalStorage API'],
    features: [
      'Weekly timetable with drag-and-drop sessions',
      'Subject-wise syllabus progress bars',
      'Built-in Pomodoro focus timer',
      'Upcoming exam countdown tracker',
      'Daily task checklist with priorities',
      'Study streak and hours analytics',
    ],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    image: '/proj-study.png',
  },
  {
    title: 'Agent Job Portal',
    tagline: 'Role-based job board for recruiters and candidates',
    description: 'A job listing platform where recruiters can post jobs and candidates can apply, with role-based authentication and dashboards.',
    fullDescription: 'Agent Job Portal is a full-stack job listing platform that connects recruiters and job seekers. Recruiters can post job openings with descriptions, requirements, salary ranges, and deadlines. Candidates can browse listings, apply with their profile, and track application status. The platform features a smart application pipeline — from Applied to Screened, Interview, and Offer stages — with dashboard analytics for each role.',
    tech: ['React', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Mongoose'],
    features: [
      'Recruiter and candidate role-based dashboards',
      'Job posting with full details and deadlines',
      'Candidate application tracking pipeline',
      'Smart search and filter for job listings',
      'Application status updates with notifications',
      'Recruiter analytics: views, applications, hires',
    ],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    image: '/proj-jobs.png',
  },
  {
    title: 'Smart Home Web Application',
    tagline: 'IoT-inspired control panel for smart home devices',
    description: 'A web-based dashboard to simulate control of smart home devices including lights, fans, and temperature settings.',
    fullDescription: 'The Smart Home Web Application is a futuristic IoT-inspired dashboard for controlling virtual home devices from a browser. Users can toggle lights on/off with brightness control, adjust fan speeds, set thermostat temperatures, and monitor energy usage in real time. The interactive floor plan shows the status of each device room by room. Security camera placeholders and motion sensor status complete the control panel experience.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Context API', 'CSS Animations'],
    features: [
      'Toggle lights with brightness slider per room',
      'Fan speed control (Low / Medium / High)',
      'Thermostat dial with temperature adjustment',
      'Real-time energy usage sparkline chart',
      'Interactive room-wise device status map',
      'Night mode and Away mode quick presets',
    ],
    github: 'https://github.com/Sourav-1210',
    demo: '#',
    image: '/proj-home.png',
  },
]

function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="card overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
      onClick={() => onOpen(project)}
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
            View Details <FiArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
        <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-2">{project.tagline}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-medium bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-md"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <FiGithub className="w-4 h-4" /> GitHub
          </a>
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
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
  const [selectedProject, setSelectedProject] = useState(null)

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
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
