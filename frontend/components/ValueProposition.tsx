'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Gamepad2, Wand2, Users } from 'lucide-react'

const values = [
  {
    icon: Gamepad2,
    color: 'vibe-blue',
    title: 'Discover & Play',
    description: 'Swipe through endless AI-generated games. No downloads, instant fun.',
  },
  {
    icon: Wand2,
    color: 'vibe-purple',
    title: 'Chat & Create',
    description: 'Describe your game idea. Watch AI bring it to life in minutes.',
  },
  {
    icon: Users,
    color: 'vibe-green',
    title: 'Connect & Share',
    description: 'Join a vibrant community. Share creations. Build your audience.',
  },
]

export default function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Three Ways to Experience
            <span className="gradient-text"> VibeGames</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass glass-hover rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300"
                data-testid={`value-card-${index}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-${value.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
