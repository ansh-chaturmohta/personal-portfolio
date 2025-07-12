import { ArrowLeft, Music, Headphones, Heart, Play } from 'lucide-react'
import Link from 'next/link'

const genres = [
  {
    name: "Bollywood Classics",
    description: "Timeless melodies from the golden era of Indian cinema",
    artists: ["Kishore Kumar", "Lata Mangeshkar", "Mohammed Rafi", "Asha Bhosle"],
    mood: "Nostalgic",
    color: "from-orange-400 to-red-500",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80"
  },
  {
    name: "International Hits",
    description: "Chart-toppers and underground gems from around the world",
    artists: ["Ed Sheeran", "The Weeknd", "Dua Lipa", "Bruno Mars"],
    mood: "Energetic",
    color: "from-blue-400 to-purple-500",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
  },
  {
    name: "Jazz & Blues",
    description: "Smooth rhythms and soulful expressions",
    artists: ["Miles Davis", "John Coltrane", "B.B. King", "Ella Fitzgerald"],
    mood: "Sophisticated",
    color: "from-purple-400 to-pink-500",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&q=80"
  },
  {
    name: "Electronic/EDM",
    description: "High-energy beats for coding sessions and workouts",
    artists: ["Deadmau5", "Martin Garrix", "Skrillex", "Calvin Harris"],
    mood: "Pumped",
    color: "from-green-400 to-blue-500",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b4d41e6?w=400&q=80"
  }
]

const playlists = [
  {
    name: "Coding Flow",
    description: "Perfect background music for deep focus coding sessions",
    songs: 45,
    duration: "3h 12m",
    vibe: "Instrumental, Lo-fi, Ambient"
  },
  {
    name: "Workout Energy",
    description: "High-energy tracks to power through gym sessions",
    songs: 32,
    duration: "2h 8m",
    vibe: "EDM, Hip-hop, Rock"
  },
  {
    name: "Evening Unwind",
    description: "Smooth melodies for relaxing after a long day",
    songs: 28,
    duration: "1h 56m",
    vibe: "Jazz, Acoustic, Indie"
  },
  {
    name: "Road Trip Classics",
    description: "Sing-along favorites for long drives",
    songs: 50,
    duration: "3h 45m",
    vibe: "Rock, Pop, Bollywood"
  }
]

const musicMemories = [
  {
    song: "Tum Hi Ho - Aashiqui 2",
    memory: "First song I learned to play on guitar during college",
    emotion: "Nostalgic"
  },
  {
    song: "Bohemian Rhapsody - Queen",
    memory: "Epic sing-along session with friends during a late-night coding marathon",
    emotion: "Euphoric"
  },
  {
    song: "Kun Faya Kun - Rockstar",
    memory: "This played during a peaceful moment while debugging a complex algorithm",
    emotion: "Peaceful"
  }
]

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
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
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Music size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-6">
            Music
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Music is the soundtrack to life - it amplifies emotions, fuels creativity, 
            and connects us across cultures and languages.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Music & Code</h2>
            <p className="text-lg text-gray-300 mb-6">
              There's a beautiful parallel between music and programming. Both have rhythm, 
              structure, and patterns. The best code flows like a good melody - elegant, 
              purposeful, and satisfying to experience.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Music shapes my mood and productivity. Whether it's lo-fi beats for deep focus, 
              energetic EDM for problem-solving, or classical Indian ragas for contemplation, 
              the right soundtrack makes all the difference.
            </p>
            <div className="flex items-center space-x-2 text-purple-400">
              <Headphones size={24} />
              <span className="text-lg font-semibold">Always in my ears</span>
            </div>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Listening Habits</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Daily listening</span>
                <span className="text-purple-400 font-semibold">6+ hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Spotify wrapped</span>
                <span className="text-purple-400 font-semibold">Top 1% listener</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Favorite platform</span>
                <span className="text-purple-400 font-semibold">Spotify Premium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Concert attendance</span>
                <span className="text-purple-400 font-semibold">Multiple per year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Favorite Genres */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Musical <span className="glow-text">Tastes</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {genres.map((genre, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={genre.image} 
                    alt={genre.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${genre.color} text-white`}>
                      {genre.mood}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{genre.name}</h3>
                  <p className="text-gray-300 mb-4">{genre.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Favorite artists:</h4>
                    <div className="flex flex-wrap gap-2">
                      {genre.artists.map((artist, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 text-white text-sm rounded">
                          {artist}
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

      {/* Curated Playlists */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Curated <span className="glow-text">Playlists</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {playlists.map((playlist, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{playlist.name}</h3>
                    <p className="text-gray-300 mb-3">{playlist.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                      <span>{playlist.songs} songs</span>
                      <span>{playlist.duration}</span>
                    </div>
                    <span className="text-purple-400 text-sm italic">{playlist.vibe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Musical Memories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Musical <span className="glow-text">Memories</span>
          </h2>
          
          <div className="space-y-6">
            {musicMemories.map((memory, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{memory.song}</h3>
                    <p className="text-gray-300 mb-2">{memory.memory}</p>
                    <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">
                      {memory.emotion}
                    </span>
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
            <div className="text-4xl mb-6">🎵</div>
            <blockquote className="text-2xl font-light text-white mb-4 italic">
              "Music is the universal language that speaks to the soul. 
              It's my companion in code, my motivation in challenges, 
              and my joy in celebrations."
            </blockquote>
            <cite className="text-gray-400">- How music shapes my world</cite>
          </div>
        </div>
      </section>
    </main>
  )
}
