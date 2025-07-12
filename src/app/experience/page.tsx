import { ArrowLeft, Building2, Calendar, MapPin, TrendingUp, Monitor, Code } from 'lucide-react'
import Link from 'next/link'
import Experience from '@/components/Experience'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/"
          className="flex items-center space-x-2 glass p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft size={20} className="text-white" />
          <span className="text-white font-medium">Back to Room</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section-padding pt-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Monitor size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-6">
            Work & Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            From IIT Dhanbad to the startup ecosystem - building innovative solutions and scaling systems
          </p>
        </div>
      </section>

      {/* Experience Component */}
      <Experience />

      {/* Additional Skills Section */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="glow-text">Technical Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-2xl">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
              <p className="text-gray-300 mb-4">Building responsive, interactive user interfaces</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <TrendingUp className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
              <p className="text-gray-300 mb-4">Scalable APIs and database architecture</p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-green-500/20 text-green-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <Building2 className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">DevOps & Cloud</h3>
              <p className="text-gray-300 mb-4">Deployment and infrastructure management</p>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Git', 'CI/CD'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
