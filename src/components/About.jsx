export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 bg-green-600 dark:bg-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-5">
              I'm <span className="font-semibold text-green-600 dark:text-green-400">Sourav Sharma</span>, 
              a Computer Science student at Lovely Professional University with a strong passion for frontend 
              development. I enjoy building modern, responsive, and user-friendly web applications that solve 
              real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-5">
              My primary stack is <span className="font-medium text-gray-800 dark:text-gray-200">React.js</span>, 
              <span className="font-medium text-gray-800 dark:text-gray-200"> JavaScript (ES6+)</span>, and 
              <span className="font-medium text-gray-800 dark:text-gray-200"> Tailwind CSS</span> — tools I've 
              used to craft polished interfaces. I also have hands-on experience with <strong>Node.js, Express, 
              and MongoDB</strong> for building full-stack applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
              I'm continuously growing as a developer, exploring design systems, performance optimization, and 
              best practices in software engineering. I'm actively looking for opportunities where I can 
              contribute meaningfully and grow alongside a talented team.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Degree', value: 'B.Tech in CS' },
                { label: 'University', value: 'LPU' },
                { label: 'CGPA', value: '8.67 / 10' },
                { label: 'Focus', value: 'Frontend Dev' },
              ].map(({ label, value }) => (
                <div key={label} className="card p-4">
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '5+', label: 'Projects Built' },
              { num: '8.67', label: 'CGPA' },
              { num: '10+', label: 'Technologies' },
              { num: '2+', label: 'Years of Coding' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="card p-6 text-center hover:border-green-200 dark:hover:border-green-800 transition-colors duration-200"
              >
                <p className="text-3xl font-extrabold text-green-600 dark:text-green-400 mb-2">{num}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
