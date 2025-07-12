'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Hero3D from './Hero3D'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-blue-900/50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <span className="glow-text">ANSH</span>
            <br />
            <span className="text-white">CHATURMOHTA</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Engineering Graduate from <span className="text-yellow-400 font-semibold">IIT Dhanbad</span>
            <br />
            Startup Enthusiast • Full Stack Developer • Foodie • Mixologist
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a 
              href="#about" 
              className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Explore My Journey
            </a>
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a 
              href="https://github.com" 
              className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:ansh@example.com" 
              className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={32} className="text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
