'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Music, Tv, Utensils, Wine, Award, Waves } from 'lucide-react'

const hobbies = [
  {
    icon: Utensils,
    title: "Food Explorer",
    description: "Always hunting for the next great meal",
    details: "From street food to fine dining, I love exploring diverse cuisines and discovering hidden gems. Cooking is my creative outlet!",
    color: "from-orange-400 to-red-500",
    bgImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
  },
  {
    icon: Wine,
    title: "Mixology Master",
    description: "Crafting the perfect cocktail experience",
    details: "From classic Old Fashioneds to innovative molecular cocktails, I love experimenting with flavors and presentation.",
    color: "from-purple-400 to-pink-500",
    bgImage: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80"
  },
  {
    icon: Music,
    title: "Music Enthusiast",
    description: "Soundtrack to life",
    details: "From Bollywood classics to international hits, jazz to EDM - music is my constant companion and inspiration.",
    color: "from-blue-400 to-purple-500",
    bgImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
  },
  {
    icon: Tv,
    title: "Entertainment Buff",
    description: "Binge-watching specialist",
    details: "Web series, sitcoms, and romantic comedies are my go-to. Always up for recommendations and passionate discussions!",
    color: "from-green-400 to-blue-500",
    bgImage: "https://images.unsplash.com/photo-1489599045908-f75f0e86b0ab?w=800&q=80"
  },
  {
    icon: Award,
    title: "Tennis Player",
    description: "Serving aces and chasing dreams",
    details: "The court is where I find my focus and competitive spirit. Love the strategy and athleticism of tennis.",
    color: "from-yellow-400 to-orange-500",
    bgImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80"
  },
  {
    icon: Waves,
    title: "Swimming",
    description: "Making waves in the pool",
    details: "Swimming is my meditation. The rhythm of strokes and breathing helps me clear my mind and stay fit.",
    color: "from-cyan-400 to-blue-500",
    bgImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80"
  }
]

export default function Hobbies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="hobbies" className="section-padding bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Life Beyond <span className="glow-text">Code</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passions that fuel my creativity and keep me balanced
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group perspective-1000"
            >
              <div className="relative glass rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-y-5">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img 
                    src={hobby.bgImage} 
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                </div>

                <div className="relative p-8 h-80 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="self-start">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${hobby.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <hobby.icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {hobby.title}
                    </h3>
                    <p className="text-blue-300 text-sm mb-4 font-medium">
                      {hobby.description}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {hobby.details}
                    </p>
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${hobby.color} group-hover:h-2 transition-all duration-300`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Fact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="glow-text">Fun Fact</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I believe the best ideas come when you step away from the screen. Whether I'm perfecting a cocktail recipe 
              or analyzing a tennis match, each hobby teaches me something that makes me a better developer!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
