import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: '2023 – 2027',
    score: 'CGPA: 8.57 / 10',
    scoreIcon: FiAward,
    description: 'Focused on Data Structures, Algorithms, Web Development, and Software Engineering. Active in coding clubs and hackathons.',
    color: 'bg-green-500',
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Adarsh Vidya Mandir',
    location: 'Bokaro, Jharkhand',
    period: '2019 – 2021',
    score: 'Percentage: 89%',
    scoreIcon: FiAward,
    description: 'Studied Physics, Chemistry, and Mathematics with a strong foundation in logical reasoning and problem-solving.',
    color: 'bg-blue-500',
  },
  {
    degree: 'Matriculation (Class X)',
    institution: 'Adarsh Vidya Mandir',
    location: 'Bokaro, Jharkhand',
    period: '2019',
    score: 'Percentage: 92%',
    scoreIcon: FiAward,
    description: 'Achieved excellent academic performance with distinction in Mathematics and Science.',
    color: 'bg-purple-500',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Education</h2>
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 mx-auto rounded-full mb-4"></div>
          <p className="section-subheading">My academic background and learning journey.</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative sm:pl-16 pl-0">
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 top-5 w-5 h-5 rounded-full ${edu.color} border-2 border-white dark:border-gray-900 hidden sm:flex items-center justify-center -translate-x-1/2`}
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Card */}
                <div className="card p-6 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                      <edu.scoreIcon className="w-3 h-3" />
                      {edu.score}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <FiMapPin className="w-3 h-3" /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <FiCalendar className="w-3 h-3" /> {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
