'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles, Download } from 'lucide-react'

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState<string | null>(null)

  // Preload hero image to avoid broken image + alt text rendering
  useEffect(() => {
    const candidates = ['/Image_1.PNG', '/Image_1.png', '/image_1.png']
    let mounted = true
    ;(async () => {
      for (const src of candidates) {
        try {
          await new Promise<void>((resolve, reject) => {
            const img = new window.Image()
            img.onload = () => resolve()
            img.onerror = () => reject(new Error('load-failed'))
            img.src = src
          })
          if (mounted) setHeroSrc(src)
          break
        } catch (_) {
          continue
        }
      }
    })()
    return () => {
      mounted = false
    }
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-blue via-vibe-blue-dark to-vibe-teal opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(13, 148, 136, 0.15) 0%, transparent 50%)' }}></div>
      </div>

      {/* Floating Particles - Fixed hydration issue by using static positions */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: '10%', top: '20%' },
          { left: '25%', top: '45%' },
          { left: '70%', top: '15%' },
          { left: '85%', top: '60%' },
          { left: '40%', top: '80%' },
          { left: '15%', top: '70%' },
          { left: '60%', top: '30%' },
          { left: '90%', top: '25%' },
          { left: '30%', top: '55%' },
          { left: '75%', top: '75%' },
          { left: '50%', top: '10%' },
          { left: '20%', top: '90%' },
          { left: '80%', top: '40%' },
          { left: '35%', top: '65%' },
          { left: '65%', top: '85%' },
          { left: '45%', top: '35%' },
          { left: '55%', top: '50%' },
          { left: '5%', top: '75%' },
          { left: '95%', top: '45%' },
          { left: '55%', top: '15%' }
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={position}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i * 0.2) % 2,
              repeat: Infinity,
              delay: (i * 0.3) % 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vibe-blue-dark/80 backdrop-blur-md border border-vibe-blue-dark/50 mb-6 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white">AI-Powered Game Creation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]"
            >
              Turn Conversations
              <span className="block gradient-text mt-2">
                Into Games
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Brew the Vibe - Create, Play, Explore. AI-powered game creation meets an instant browse-and-play universe. Infinite possibilities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nextap.vibebrews&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-vibe-orange rounded-full font-semibold hover:scale-105 transition-transform duration-300 glow-orange hover:bg-vibe-orange/90"
                data-testid="download-now-btn"
              >
                <Download className="w-5 h-5" />
                Download Now
              </a>
              <button
                className="px-8 py-4 border-2 border-vibe-teal rounded-full font-semibold text-vibe-blue hover:bg-vibe-teal/10 transition-all duration-300"
                data-testid="watch-demo-btn"
              >
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <div className="text-3xl font-bold gradient-text">5,219+</div>
                <div className="text-sm text-gray-500">Game Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">814+</div>
                <div className="text-sm text-gray-500">Games Played</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-500">Creators</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block hidden"
          >
            <div className="relative z-10 animate-float">
              {/* [IMAGE PLACEHOLDER: iPhone/Android mockup showing VibeBrews app home screen with vertical feed of games. Dimension: 400x800px. Should show the TikTok-style swipeable interface with game cards.] */}
              <div className="w-[300px] h-[600px] mx-auto rounded-[3rem] border-8 border-gray-300 bg-white shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-200 rounded-b-2xl"></div>
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                  {/* Hero Image (renders only if preloaded successfully) */}
                  {heroSrc ? (
                    <img
                      src={heroSrc}
                      alt="VibeBrews app home screen showing swipeable game feed"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-vibe-blue/10 to-vibe-teal/10">
                      <div className="text-center">
                        <Sparkles className="w-16 h-16 mx-auto mb-4 text-vibe-teal" />
                        <p className="text-sm text-gray-600">Loading...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-vibe-blue to-vibe-teal blur-3xl opacity-20 animate-pulse-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-vibe-teal/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-vibe-teal rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
