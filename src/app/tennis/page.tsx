import { ArrowLeft, Award, Target, TrendingUp, Clock } from 'lucide-react'
import Link from 'next/link'

const achievements = [
  {
    title: "College Tournament Finalist",
    year: "2022",
    description: "Reached finals in inter-college tennis championship",
    level: "College Level"
  },
  {
    title: "Club Championship Winner",
    year: "2023",
    description: "Won local tennis club's annual tournament",
    level: "Club Level"
  },
  {
    title: "Consistent Player",
    year: "2024",
    description: "Maintained regular training schedule throughout the year",
    level: "Personal Goal"
  }
]

const skills = [
  {
    name: "Serve",
    level: 85,
    description: "Powerful and accurate serves with good placement"
  },
  {
    name: "Forehand",
    level: 90,
    description: "Strong and consistent forehand with topspin"
  },
  {
    name: "Backhand",
    level: 80,
    description: "Reliable backhand with improving technique"
  },
  {
    name: "Volley",
    level: 75,
    description: "Solid net play with quick reflexes"
  },
  {
    name: "Strategy",
    level: 88,
    description: "Good court awareness and tactical thinking"
  }
]

const favoriteMatches = [
  {
    opponent: "College Rival",
    score: "6-4, 4-6, 7-5",
    description: "Epic 3-set match that went to the wire. Great comeback in the final set.",
    memorable: "The crowd was amazing and the intensity was unreal"
  },
  {
    opponent: "Club Pro",
    score: "3-6, 6-3, 6-4",
    description: "Beat the club professional in a practice match. Huge confidence boost.",
    memorable: "Proved to myself that hard work pays off"
  },
  {
    opponent: "Doubles Partner",
    score: "6-2, 6-1",
    description: "Dominated singles match against my usual doubles partner.",
    memorable: "Friendly competition that improved both our games"
  }
]

export default function TennisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-900">
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
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Award size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-6">
            Tennis
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            The court is where strategy meets athleticism, where mental toughness is tested, 
            and where every point is a new opportunity.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Tennis?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Tennis taught me that success isn't just about physical ability - it's about 
              mental resilience, strategic thinking, and the ability to adapt under pressure. 
              These lessons translate directly to both my professional and personal life.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Every match is like debugging code - you analyze the problem, adapt your approach, 
              and find the optimal solution. The satisfaction of a perfectly executed strategy 
              is similar to deploying clean, efficient code.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Target size={24} />
              <span className="text-lg font-semibold">Precision meets passion</span>
            </div>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Playing Style</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Aggressive baseline player</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Strong mental game</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Strategic shot placement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Consistent under pressure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Assessment */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skill <span className="glow-text">Assessment</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                  <span className="text-green-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="glow-text">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                      <span className="text-green-400 text-sm font-semibold">{achievement.year}</span>
                    </div>
                    <p className="text-gray-300 mb-2">{achievement.description}</p>
                    <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                      {achievement.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorable Matches */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Memorable <span className="glow-text">Matches</span>
          </h2>
          
          <div className="space-y-8">
            {favoriteMatches.map((match, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">vs {match.opponent}</h3>
                    <div className="text-2xl font-bold text-green-400 mb-2">{match.score}</div>
                    <p className="text-gray-300">{match.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-white mb-2">What made it special:</h4>
                    <p className="text-gray-300 italic">"{match.memorable}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-8 rounded-2xl">
            <div className="text-4xl mb-6">🎾</div>
            <blockquote className="text-2xl font-light text-white mb-4 italic">
              "Champions aren't made in the comfort zone. Every practice session is a step 
              towards becoming the player you aspire to be."
            </blockquote>
            <cite className="text-gray-400">- My training philosophy</cite>
          </div>
        </div>
      </section>
    </main>
  )
}
