import { ArrowLeft, Wine, Droplets, Award, Clock } from 'lucide-react'
import Link from 'next/link'

const cocktails = [
  {
    name: "Classic Old Fashioned",
    ingredients: ["Bourbon", "Sugar cube", "Angostura bitters", "Orange peel"],
    description: "A timeless classic that showcases the whiskey's character",
    difficulty: "Beginner",
    time: "3 mins",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80"
  },
  {
    name: "Molecular Moscow Mule",
    ingredients: ["Vodka", "Ginger beer caviar", "Lime foam", "Copper garnish"],
    description: "A modern twist on the classic with molecular gastronomy",
    difficulty: "Advanced",
    time: "15 mins",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=80"
  },
  {
    name: "Smoky Mezcal Margarita",
    ingredients: ["Mezcal", "Lime juice", "Agave nectar", "Smoked salt rim"],
    description: "Earthy mezcal meets citrus with a hint of smoke",
    difficulty: "Intermediate",
    time: "5 mins",
    image: "https://images.unsplash.com/photo-1514888915297-d5c6b3403ca1?w=400&q=80"
  }
]

const techniques = [
  {
    name: "Muddling",
    description: "Gently pressing herbs and fruits to release flavors"
  },
  {
    name: "Double Straining",
    description: "Ensuring perfectly smooth cocktails without pulp"
  },
  {
    name: "Fat Washing",
    description: "Infusing spirits with savory fats for unique flavors"
  },
  {
    name: "Clarification",
    description: "Creating crystal-clear cocktails using milk proteins"
  }
]

export default function MixologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
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
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Wine size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-6">
            Mixology
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Crafting the perfect cocktail is an art - balancing flavors, textures, and presentation to create memorable experiences
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">My Mixology Philosophy</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Just like coding, mixology requires precision, creativity, and attention to detail. 
              Every ingredient has a purpose, every technique serves a function, and the final 
              result should be both beautiful and functional. I believe in respecting classic 
              recipes while experimenting with modern techniques to create unique experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Signature <span className="glow-text">Creations</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cocktails.map((cocktail, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cocktail.image} 
                    alt={cocktail.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className={`px-2 py-1 text-xs rounded ${
                      cocktail.difficulty === 'Beginner' ? 'bg-green-500/80' :
                      cocktail.difficulty === 'Intermediate' ? 'bg-yellow-500/80' : 'bg-red-500/80'
                    } text-white`}>
                      {cocktail.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cocktail.name}</h3>
                  <p className="text-gray-300 mb-4">{cocktail.description}</p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Clock size={16} className="mr-2" />
                    {cocktail.time}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Ingredients:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cocktail.ingredients.map((ingredient, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 text-white text-xs rounded">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="glow-text">Techniques</span> & Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{technique.name}</h3>
                    <p className="text-gray-300">{technique.description}</p>
                  </div>
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
            <Droplets className="text-purple-400 mx-auto mb-6" size={48} />
            <blockquote className="text-2xl font-light text-white mb-4 italic">
              "A great cocktail is like great code - every element has a purpose, 
              and the magic happens when they all work together in perfect harmony."
            </blockquote>
            <cite className="text-gray-400">- My approach to mixology</cite>
          </div>
        </div>
      </section>
    </main>
  )
}
