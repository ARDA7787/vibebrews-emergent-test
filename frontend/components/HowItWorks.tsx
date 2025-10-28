'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, MessageSquare, Sparkles, Upload, Gamepad2 } from 'lucide-react'

const steps = [
  {
    icon: Download,
    title: 'Download',
    description: 'Get the app on Android',
  },
  {
    icon: MessageSquare,
    title: 'Describe',
    description: 'Tell our AI what game you want to create',
  },
  {
    icon: Sparkles,
    title: 'Generate',
    description: 'Watch your game come to life in real-time',
  },
  {
    icon: Upload,
    title: 'Publish',
    description: 'Share with the community instantly',
  },
  {
    icon: Gamepad2,
    title: 'Play & Discover',
    description: 'Swipe through infinite creative games',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-vibe-dark via-vibe-purple/5 to-vibe-dark"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From idea to playable game in 5 simple steps
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-vibe-purple via-vibe-blue to-vibe-green origin-left"
            ></motion.div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 w-32 h-32 rounded-full glass flex items-center justify-center mb-6 group hover:scale-110 transition-all duration-300">
                      <Icon className="w-12 h-12 text-vibe-purple group-hover:text-vibe-blue transition-colors" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-vibe-purple to-vibe-blue opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                    <div className="text-3xl font-bold text-vibe-purple mb-2">{index + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                    <Icon className="w-8 h-8 text-vibe-purple" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="text-2xl font-bold text-vibe-purple mb-1">{index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
