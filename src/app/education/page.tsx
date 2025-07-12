import { ArrowLeft, GraduationCap, BookOpen, Award, Lightbulb } from 'lucide-react'
import Link from 'next/link'

const education = [
  {
    degree: "Bachelor of Technology",
    specialization: "Computer Science & Engineering",
    institution: "Indian Institute of Technology (IIT) Dhanbad",
    duration: "2020 - 2024",
    grade: "CGPA: 8.2/10",
    highlights: [
      "Dean's List for Academic Excellence",
      "Active member of Coding Club",
      "Participated in multiple hackathons",
      "Research project on Machine Learning"
    ],
    description: "Four transformative years that shaped my technical foundation and problem-solving mindset."
  }
]

const subjects = [
  {
    category: "Core Computer Science",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Computer Graphics"
    ]
  },
  {
    category: "Mathematics & Theory",
    courses: [
      "Discrete Mathematics",
      "Linear Algebra",
      "Probability & Statistics",
      "Theory of Computation",
      "Design & Analysis of Algorithms"
    ]
  },
  {
    category: "Specialization",
    courses: [
      "Machine Learning",
      "Artificial Intelligence",
      "Web Development",
      "Mobile App Development",
      "Cloud Computing",
      "Cybersecurity Fundamentals"
    ]
  }
]

const projects = [
  {
    title: "Campus Management System",
    description: "Full-stack web application for managing campus resources and student information",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    outcome: "Used by 500+ students and faculty"
  },
  {
    title: "ML-based Recommendation Engine",
    description: "Collaborative filtering system for course recommendations",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
    outcome: "90% accuracy in course suggestions"
  },
  {
    title: "Smart Attendance System",
    description: "IoT-based solution using facial recognition for automated attendance",
    technologies: ["OpenCV", "Raspberry Pi", "Python", "MySQL"],
    outcome: "Implemented in 3 departments"
  }
]

const skills = [
  {
    name: "Problem Solving",
    level: 95,
    description: "Breaking down complex problems into manageable solutions"
  },
  {
    name: "Analytical Thinking",
    level: 90,
    description: "Data-driven approach to decision making"
  },
  {
    name: "Research & Learning",
    level: 88,
    description: "Continuous learning and staying updated with technology"
  },
  {
    name: "Technical Writing",
    level: 85,
    description: "Clear documentation and technical communication"
  }
]

const achievements = [
  "Secured admission to IIT Dhanbad through JEE Advanced",
  "Ranked in top 10% of the graduating class",
  "Winner of inter-college coding competition",
  "Published research paper on ML applications",
  "Lead organizer of technical symposium"
]

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900">
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
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <GraduationCap size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-6">
            Education
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            My journey through one of India's premier technical institutions, 
            where I built the foundation for innovation and excellence.
          </p>
        </div>
      </section>

      {/* IIT Dhanbad Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="glass p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-white mb-2">{edu.degree}</h2>
                  <h3 className="text-xl text-amber-400 font-semibold mb-2">{edu.specialization}</h3>
                  <h4 className="text-lg text-gray-300 mb-4">{edu.institution}</h4>
                  <p className="text-gray-300 mb-6">{edu.description}</p>
                  
                  <div className="space-y-3">
                    <h5 className="text-white font-semibold">Key Highlights:</h5>
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Award className="text-amber-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="glass p-4 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">Duration</h5>
                    <p className="text-amber-400">{edu.duration}</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">Academic Performance</h5>
                    <p className="text-green-400 font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Curriculum */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Academic <span className="glow-text">Curriculum</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{subject.category}</h3>
                <div className="space-y-2">
                  {subject.courses.map((course, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <BookOpen className="text-amber-400 flex-shrink-0" size={14} />
                      <span className="text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Major <span className="glow-text">Projects</span>
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-amber-500/20 text-amber-300 text-sm rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="glass p-4 rounded-lg w-full">
                      <h4 className="text-white font-semibold mb-2">Impact</h4>
                      <p className="text-green-400">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills <span className="glow-text">Developed</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                  <span className="text-amber-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Key <span className="glow-text">Achievements</span>
          </h2>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="text-amber-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-8 rounded-2xl">
            <div className="text-4xl mb-6">🎓</div>
            <blockquote className="text-2xl font-light text-white mb-4 italic">
              "Education is not just about acquiring knowledge - it's about developing 
              the ability to think, question, innovate, and solve real-world problems."
            </blockquote>
            <cite className="text-gray-400">- My educational philosophy</cite>
          </div>
        </div>
      </section>
    </main>
  )
}
