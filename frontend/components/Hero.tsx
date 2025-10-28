'use client'

import { motion } from 'framer-motion'
import { Sparkles, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-purple via-vibe-dark to-vibe-blue opacity-50">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-vibe-purple" />
              <span className="text-sm">AI-Powered Game Creation</span>
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
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              AI-powered game creation meets TikTok-style discovery. No coding. Infinite possibilities.
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-vibe-purple to-vibe-blue rounded-full font-semibold hover:scale-105 transition-transform duration-300 glow-purple"
                data-testid="download-now-btn"
              >
                <Download className="w-5 h-5" />
                Download Now
              </a>
              <button
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
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
                <div className="text-sm text-gray-400">Game Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">814+</div>
                <div className="text-sm text-gray-400">Games Played</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-400">Creators</div>
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
              {/* [IMAGE PLACEHOLDER: iPhone/Android mockup showing VibeGames app home screen with vertical feed of games. Dimension: 400x800px. Should show the TikTok-style swipeable interface with game cards.] */}
              <div className="w-[300px] h-[600px] mx-auto rounded-[3rem] border-8 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl"></div>
                <div className="p-4 h-full bg-gradient-to-b from-vibe-purple/20 to-vibe-blue/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 text-vibe-purple" />
                    <p className="text-sm text-gray-400">App Screenshot</p>
                    <p className="text-xs text-gray-500 mt-2">Swipeable Game Feed</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-vibe-purple to-vibe-blue blur-3xl opacity-30 animate-pulse-slow"></div>
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
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
