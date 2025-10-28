'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  { value: 5219, label: 'Game Views', suffix: '+' },
  { value: 814, label: 'Games Played Daily', suffix: '+' },
  { value: 65, label: 'Community Likes', suffix: '+' },
  { value: 15, label: 'Active Creators', suffix: '+' },
  { value: 553, label: 'Gaming Sessions', suffix: '+' },
  { value: 5, label: 'Minute Creation Time', suffix: '', prefix: '<' },
]

function Counter({ value, inView, suffix = '', prefix = '' }: any) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Dark Background with Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-vibe-dark via-black to-vibe-dark">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Join the <span className="gradient-text">Revolution</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thousands of creators and players building the future of social gaming
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-vibe-purple/50"
              data-testid={`stat-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <Counter value={stat.value} inView={inView} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
