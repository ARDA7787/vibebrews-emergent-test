'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'The Weekend Creator',
    role: 'Game Designer',
    avatar: '🎨',
    quote: 'I had a game idea for years but didn\'t know how to code. VibeGames made it real in 10 minutes.',
    rating: 5,
  },
  {
    name: 'The Teacher',
    role: 'Educator',
    avatar: '👨‍🏫',
    quote: 'My students are learning game design without touching code. They love seeing their ideas playable immediately.',
    rating: 5,
  },
  {
    name: 'The Player',
    role: 'Gaming Enthusiast',
    avatar: '🎮',
    quote: 'It\'s like TikTok but for games. I can\'t stop swiping and discovering new creations.',
    rating: 5,
  },
]

export default function Testimonials() {
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
            Loved by <span className="gradient-text">Creators & Players</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our community has to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 border border-white/10"
              data-testid={`testimonial-${index}`}
            >
              <Quote className="w-10 h-10 text-vibe-purple/50 mb-4" />
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vibe-purple to-vibe-blue flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vibe-amber text-vibe-amber" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
