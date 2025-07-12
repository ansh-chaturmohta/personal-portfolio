'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react'

const experiences = [
  {
    title: "Software Developer",
    company: "Current Startup",
    location: "Remote",
    period: "2024 - Present",
    type: "Full-time",
    description: "Building innovative solutions with modern tech stack, contributing to product development and scaling systems.",
    highlights: [
      "Developed full-stack applications using React, Node.js, and cloud technologies",
      "Collaborated with cross-functional teams to deliver products",
      "Implemented scalable solutions for growing user base"
    ],
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Full Stack Developer Intern",
    company: "Startup #3",
    location: "Bangalore",
    period: "2023",
    type: "Internship",
    description: "Worked on web applications and gained experience in startup culture and agile development.",
    highlights: [
      "Built responsive web applications with modern frameworks",
      "Participated in code reviews and agile ceremonies",
      "Contributed to product features and bug fixes"
    ],
    color: "from-green-400 to-blue-500"
  },
  {
    title: "Software Development Intern",
    company: "Startup #2",
    location: "Mumbai",
    period: "2023",
    type: "Internship",
    description: "Focused on backend development and API integration, working with databases and cloud services.",
    highlights: [
      "Designed and implemented RESTful APIs",
      "Worked with databases and data modeling",
      "Gained experience in cloud platforms and deployment"
    ],
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Tech Intern",
    company: "Startup #1",
    location: "Delhi",
    period: "2022",
    type: "Internship",
    description: "First startup experience, learned fundamentals of web development and startup ecosystem.",
    highlights: [
      "Started journey in web development",
      "Learned version control and collaborative coding",
      "Understood startup dynamics and fast-paced development"
    ],
    color: "from-yellow-400 to-orange-500"
  }
]

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", 
  "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Agile"
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="glow-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From IIT Dhanbad to the startup ecosystem - building, learning, and growing
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`} />
                {index !== experiences.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-white/20 to-transparent" />
                )}
              </div>

              {/* Experience Card */}
              <div className="glass p-8 rounded-2xl max-w-2xl w-full hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white`}>
                    {exp.type}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex items-center mb-4">
                  <Building2 className="text-blue-400 mr-2" size={20} />
                  <span className="text-xl text-blue-400 font-semibold">{exp.company}</span>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <TrendingUp className="text-green-400 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="glow-text">Technical Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="px-4 py-2 glass rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
