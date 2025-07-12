'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Zap } from 'lucide-react'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    github: "https://github.com",
    live: "https://demo.com",
    category: "Full Stack"
  },
  {
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered priority suggestions and natural language processing for task creation.",
    tech: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "TypeScript"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    github: "https://github.com",
    live: "https://demo.com",
    category: "AI/ML"
  },
  {
    title: "Real-time Chat App",
    description: "Socket.io powered chat application with rooms, file sharing, and emoji reactions. Built with modern React and Express.",
    tech: ["React", "Socket.io", "Express", "Redis", "AWS S3"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    github: "https://github.com",
    live: "https://demo.com",
    category: "Real-time"
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio! Built with Next.js, Three.js for 3D animations, and Framer Motion for smooth transitions.",
    tech: ["Next.js", "Three.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github: "https://github.com",
    live: "https://demo.com",
    category: "Frontend"
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my best work, showcasing various technologies and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl">
            <Code className="text-blue-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
