import { ArrowLeft, Utensils, ChefHat, MapPin, Heart } from 'lucide-react'
import Link from 'next/link'

const cuisines = [
  {
    name: "Indian Street Food",
    description: "From Mumbai's vada pav to Delhi's chole bhature",
    favorites: ["Pani Puri", "Bhel Puri", "Dosa", "Pav Bhaji"],
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80"
  },
  {
    name: "Italian Classics",
    description: "Homemade pasta and authentic flavors from Italy",
    favorites: ["Carbonara", "Margherita Pizza", "Risotto", "Tiramisu"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80"
  },
  {
    name: "Asian Fusion",
    description: "Modern takes on traditional Asian dishes",
    favorites: ["Ramen", "Sushi", "Thai Curry", "Dim Sum"],
    image: "https://images.unsplash.com/photo-1617196034183-421b4917abd8?w=400&q=80"
  }
]

const cookingSkills = [
  {
    name: "Spice Blending",
    description: "Creating complex flavor profiles with traditional Indian spices",
    icon: "🌶️"
  },
  {
    name: "Pasta Making",
    description: "Hand-rolled pasta from scratch with perfect texture",
    icon: "🍝"
  },
  {
    name: "Knife Skills",
    description: "Precision cutting techniques for consistent cooking",
    icon: "🔪"
  },
  {
    name: "Fermentation",
    description: "Traditional fermentation for enhanced flavors",
    icon: "🫙"
  }
]

const foodAdventures = [
  {
    location: "Mumbai Street Markets",
    experience: "Discovered the art of layering flavors in street food",
    dish: "Authentic Vada Pav with 7 different chutneys"
  },
  {
    location: "Home Kitchen",
    experience: "Recreated grandmother's secret dal recipe",
    dish: "Traditional Rajasthani Dal Baati Churma"
  },
  {
    location: "Friend's Kitchen",
    experience: "Late-night cooking sessions during college",
    dish: "Fusion Maggi with experimental toppings"
  }
]

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
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
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <Utensils size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-6">
            Food & Cooking
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Food is love, culture, and art all rolled into one. Every dish tells a story, 
            and every meal creates memories.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">My Food Philosophy</h2>
            <p className="text-lg text-gray-300 mb-6">
              Growing up in India, food wasn't just sustenance - it was celebration, comfort, 
              and connection. Every meal was an opportunity to bring people together, share stories, 
              and create lasting memories.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My approach to cooking combines traditional techniques with modern creativity. 
              Just like in programming, I believe in understanding the fundamentals before 
              experimenting with innovative solutions.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <Heart size={24} />
              <span className="text-lg font-semibold">Cooking is my meditation</span>
            </div>
          </div>
          <div className="glass p-8 rounded-2xl">
            <ChefHat className="text-orange-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Signature Style</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Bold, balanced flavors</li>
              <li>• Fresh, local ingredients</li>
              <li>• Traditional techniques</li>
              <li>• Modern presentation</li>
              <li>• Comfort food elevated</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Favorite Cuisines */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Favorite <span className="glow-text">Cuisines</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisines.map((cuisine, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cuisine.image} 
                    alt={cuisine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cuisine.name}</h3>
                  <p className="text-gray-300 mb-4">{cuisine.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Must-try dishes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cuisine.favorites.map((dish, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-500/20 text-orange-300 text-sm rounded">
                          {dish}
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

      {/* Cooking Skills */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cooking <span className="glow-text">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cookingSkills.map((skill, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                    <p className="text-gray-300">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Adventures */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Culinary <span className="glow-text">Adventures</span>
          </h2>
          
          <div className="space-y-8">
            {foodAdventures.map((adventure, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{adventure.location}</h3>
                    <p className="text-gray-300 mb-3">{adventure.experience}</p>
                    <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full">
                      <Utensils className="text-orange-400 mr-2" size={16} />
                      <span className="text-orange-300 font-medium">{adventure.dish}</span>
                    </div>
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
            <div className="text-4xl mb-6">🍽️</div>
            <blockquote className="text-2xl font-light text-white mb-4 italic">
              "The best recipes are made with love, seasoned with memories, 
              and shared with people who matter."
            </blockquote>
            <cite className="text-gray-400">- My kitchen philosophy</cite>
          </div>
        </div>
      </section>
    </main>
  )
}
