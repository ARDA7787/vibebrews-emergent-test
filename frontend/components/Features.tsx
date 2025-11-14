'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageSquare, Infinity, Sparkles, Heart } from 'lucide-react'

const features = [
  {
    title: 'AI Creation Studio',
    subtitle: 'From Idea to Game in 5 Minutes',
    description: 'Conversational AI that understands natural language. Describe your game idea like talking to a friend. Real-time generation with live preview. Create up to 3 games concurrently.',
    icon: MessageSquare,
    color: 'blue',
    stats: ['5 min creation', '3 concurrent projects', 'No coding required'],
    imagePath: '/AI_Games.PNG',
    reverse: false,
  },
  {
    title: 'Infinite Discovery Feed',
    subtitle: 'Zero Download, Instant Play',
    description: 'Swipe-to-play infinite feed just like TikTok. Instant WebView rendering with no app installs. Social engagement with likes, comments, and shares. Personalized game recommendations.',
    icon: Infinity,
    color: 'teal',
    stats: ['0s load time', '814 games daily', 'Instant WebView'],
    imagePath: null, // No image for this feature
    reverse: true,
  },
  {
    title: 'Multi-Project Studio',
    subtitle: 'Professional Tools, Zero Learning Curve',
    description: 'Advanced workspace with background generation. Manage multiple projects simultaneously. Real-time progress tracking with project states. Duplicate and remix existing games.',
    icon: Sparkles,
    color: 'blue-dark',
    stats: ['3 concurrent projects', 'Background processing', 'Real-time tracking'],
    imagePath: '/Multi_Project.PNG',
    reverse: false,
  },
  {
    title: 'Social Gaming Community',
    subtitle: 'Join 15+ Active Creators',
    description: 'Creator profiles with comprehensive stats. Comment threads on every game. Like and favorite system. Follow your favorite creators. Real-time engagement tracking.',
    icon: Heart,
    color: 'teal',
    stats: ['15+ creators', '65 total likes', 'Growing community'],
    imagePath: '/Social_Gaming.png',
    reverse: true,
  },
]

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <FeatureRow key={index} feature={feature} Icon={Icon} index={index} />
          )
        })}
      </div>
    </section>
  )
}

function FeatureRow({ feature, Icon, index }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Define color classes based on feature.color
  const colorClasses = {
    blue: {
      badge: 'bg-vibe-blue/10 border-vibe-blue/30',
      icon: 'text-vibe-blue',
      subtitle: 'text-vibe-blue',
      bgGradient: 'from-vibe-blue/10',
      glow: 'bg-vibe-blue',
    },
    teal: {
      badge: 'bg-vibe-teal/10 border-vibe-teal/30',
      icon: 'text-vibe-teal',
      subtitle: 'text-vibe-teal',
      bgGradient: 'from-vibe-teal/10',
      glow: 'bg-vibe-teal',
    },
    'blue-dark': {
      badge: 'bg-vibe-blue-dark/10 border-vibe-blue-dark/30',
      icon: 'text-vibe-blue-dark',
      subtitle: 'text-vibe-blue-dark',
      bgGradient: 'from-vibe-blue-dark/10',
      glow: 'bg-vibe-blue-dark',
    },
  }

  const colors = colorClasses[feature.color as keyof typeof colorClasses]

  // For Infinite Discovery Feed, show full-width text layout
  if (!feature.imagePath) {
    return (
      <div ref={ref} className="mb-32 last:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.badge} border mb-6`}>
            <Icon className={`w-5 h-5 ${colors.icon}`} />
            <span className="text-sm font-medium">Feature Highlight</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            {feature.title}
          </h3>
          <p className={`text-xl font-semibold mb-6 ${colors.subtitle}`}>
            {feature.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            {feature.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 justify-center">
            {feature.stats.map((stat: string, i: number) => (
              <div key={i} className="glass px-4 py-2 rounded-full">
                <span className="text-sm font-medium">{stat}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div ref={ref} className="mb-32 last:mb-0">
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={feature.reverse ? 'lg:order-2' : ''}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.badge} border mb-6`}>
            <Icon className={`w-5 h-5 ${colors.icon}`} />
            <span className="text-sm font-medium">Feature Highlight</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            {feature.title}
          </h3>
          <p className={`text-xl font-semibold mb-6 ${colors.subtitle}`}>
            {feature.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {feature.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {feature.stats.map((stat: string, i: number) => (
              <div key={i} className="glass px-4 py-2 rounded-full">
                <span className="text-sm font-medium">{stat}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={feature.reverse ? 'lg:order-1' : ''}
        >
          <div className="relative">
            <div className="glass rounded-3xl overflow-hidden relative shadow-2xl group">
              <img
                src={feature.imagePath}
                alt={feature.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute -z-10 inset-0 ${colors.glow} blur-3xl opacity-20 animate-pulse-slow`}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
