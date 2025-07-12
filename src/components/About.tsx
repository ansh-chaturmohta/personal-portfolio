'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Heart, MapPin, Briefcase } from 'lucide-react'

const interests = [
  { icon: "🍕", title: "Foodie", description: "Exploring culinary adventures" },
  { icon: "🍸", title: "Mixology", description: "Crafting perfect cocktails" },
  { icon: "🎵", title: "Music Lover", description: "From classics to trending beats" },
  { icon: "📺", title: "Entertainment", description: "Web series, sitcoms & romcoms" },
  { icon: "🎾", title: "Tennis", description: "Serving aces on the court" },
  { icon: "🏊", title: "Swimming", description: "Making waves in the pool" }
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate engineer with a zest for life, technology, and everything in between
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-yellow-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Engineering Graduate from <span className="text-yellow-400 font-semibold">IIT Dhanbad</span>, 
                where I honed my technical skills and developed a passion for innovation.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold">Professional Journey</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Extensive experience as an intern at multiple startups, and currently working 
                at a dynamic startup where I contribute to building innovative solutions.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Heart className="text-pink-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold">Philosophy</h3>
              </div>
              <p className="text-gray-300 text-lg">
                I believe in the perfect blend of work and passion. Whether it's coding, 
                creating cocktails, or playing tennis, I bring the same energy and dedication.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              What I <span className="glow-text">Love</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
