import { FiExternalLink, FiAward } from 'react-icons/fi'

const certifications = [
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    year: 'Oct 2025',
    description: 'Demonstrates proficiency in Java programming, object-oriented concepts, and problem solving.',
    icon: FiAward,
    link: 'https://www.hackerrank.com/certificates/563c76827bff',
    image: '/Screenshot 2026-03-14 230103.png',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    year: 'Oct 2025',
    description: 'Demonstrates proficiency in JavaScript syntax, basic algorithms, and coding concepts.',
    icon: FiAward,
    link: 'https://www.hackerrank.com/certificates/eae4528a12ef',
    image: '/Screenshot 2026-03-14 230300.png',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    year: 'April 2025',
    description: 'Covered cloud architecture, virtualization, and distributed computing fundamentals.',
    icon: FiAward,
    link: 'https://drive.google.com/file/d/1_mf8pjUEELYN8OQjskT9zteF513KMrFM/view?usp=sharing',
    image: '/Screenshot 2026-03-14 230141.png',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    title: 'Fundamentals of Data Structures',
    issuer: 'Lovely Professional University',
    year: 'July 2025',
    description: 'Skill development course to learn, apply, and build projects using foundational data structures.',
    icon: FiAward,
    link: 'https://drive.google.com/file/d/1xQowZ7jIO5Sfu3OdX3ocaTdwe__eF45h/view?usp=sharing',
    image: '/Screenshot 2026-03-14 230400.png',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: 'Nov 2023',
    description: 'Focused on modern web design principles including responsive layouts, Flexbox, Grid, and accessibility.',
    icon: FiAward,
    link: 'https://drive.google.com/file/d/19EWAfcM9GcfYOrJrZ9T_ASyKqwQXufS9/view?usp=sharing',
    image: '/Screenshot 2026-03-14 230203.png',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Certifications</h2>
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 mx-auto rounded-full mb-4"></div>
          <p className="section-subheading">
            Professional certificates and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-[400px]"
            >
              {/* Floating Badge (Top Right) */}
              <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cert.bgColor} ${cert.color}`}>
                   <cert.icon className="w-5 h-5" />
                 </div>
              </div>

              {/* Top Half: Certificate Image */}
              <div className="relative h-[220px] w-full bg-gray-50 dark:bg-gray-900 overflow-hidden shrink-0 group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10 transition-colors duration-300">
                <div className="absolute inset-0 p-4 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="max-w-full max-h-full object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Certificate+Image+Pending';
                    }}
                  />
                </div>
                
                {/* Year Label */}
                <span className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                  {cert.year}
                </span>
                
                {/* Overlay link button that appears on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center z-20">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 shadow-lg"
                    >
                       View Certificate <FiExternalLink className="w-4 h-4" />
                    </a>
                </div>
              </div>

              {/* Bottom Half: Details */}
              <div className="p-6 flex flex-col flex-1 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 relative z-10">
                <div className="mb-2">
                  <span className="font-semibold text-green-600 dark:text-green-400 text-sm tracking-wide">
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-2 border-green-200 dark:border-green-800 pl-3">
                  "{cert.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
