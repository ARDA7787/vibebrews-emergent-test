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
    color: 'vibe-purple',
    stats: ['5 min creation', '3 concurrent projects', 'No coding required'],
    imageDesc: '[IMAGE: Phone mockup showing CreateChat interface with typing animation of game prompts. Show AI responding and generating game in real-time. Dimension: 500x600px]',
    reverse: false,
  },
  {
    title: 'Infinite Discovery Feed',
    subtitle: 'Zero Download, Instant Play',
    description: 'Swipe-to-play infinite feed just like TikTok. Instant WebView rendering with no app installs. Social engagement with likes, comments, and shares. Personalized game recommendations.',
    icon: Infinity,
    color: 'vibe-blue',
    stats: ['0s load time', '814 games daily', 'Instant WebView'],
    imageDesc: '[IMAGE: Phone showing vertical feed with smooth scroll animation between game cards. Display social interaction buttons. Dimension: 500x600px]',
    reverse: true,
  },
  {
    title: 'Multi-Project Studio',
    subtitle: 'Professional Tools, Zero Learning Curve',
    description: 'Advanced workspace with background generation. Manage multiple projects simultaneously. Real-time progress tracking with project states. Duplicate and remix existing games.',
    icon: Sparkles,
    color: 'vibe-amber',
    stats: ['3 concurrent projects', 'Background processing', 'Real-time tracking'],
    imageDesc: '[IMAGE: Desktop/tablet view of project grid showing 3 concurrent game cards with status chips and progress bars. Dimension: 600x400px]',
    reverse: false,
  },
  {
    title: 'Social Gaming Community',
    subtitle: 'Join 15+ Active Creators',
    description: 'Creator profiles with comprehensive stats. Comment threads on every game. Like and favorite system. Follow your favorite creators. Real-time engagement tracking.',
    icon: Heart,
    color: 'vibe-green',
    stats: ['15+ creators', '65 total likes', 'Growing community'],
    imageDesc: '[IMAGE: Profile cards showing avatars, bios, and statistics. Include comment threads and engagement metrics. Dimension: 500x500px]',
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
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${feature.color}/10 border border-${feature.color}/30 mb-6`}>
            <Icon className={`w-5 h-5 text-${feature.color}`} />
            <span className="text-sm font-medium">Feature Highlight</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            {feature.title}
          </h3>
          <p className={`text-xl font-semibold mb-6 text-${feature.color}`}>
            {feature.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
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

        {/* Image Mockup */}
        <motion.div
          initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={feature.reverse ? 'lg:order-1' : ''}
        >
          <div className="relative">
            {/* Placeholder with description */}
            <div className="glass rounded-3xl p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent"></div>
              <div className="relative z-10 text-center">
                <Icon className={`w-20 h-20 mx-auto mb-4 text-${feature.color}`} />
                <p className="text-sm text-gray-400 max-w-md">{feature.imageDesc}</p>
              </div>
            </div>
            <div className={`absolute -z-10 inset-0 bg-${feature.color} blur-3xl opacity-20 animate-pulse-slow`}></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
