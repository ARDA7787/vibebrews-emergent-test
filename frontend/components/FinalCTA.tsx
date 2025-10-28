'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-purple via-vibe-blue to-vibe-green opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8 border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-vibe-purple" />
            <span className="font-semibold">Start Creating Today</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Ready to Turn Your Ideas
            <span className="block gradient-text mt-2">
              Into Games?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of creators building the future of social gaming
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nextap.vibebrews&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-vibe-purple to-vibe-blue rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 glow-purple"
              data-testid="final-cta-download-btn"
            >
              <Download className="w-6 h-6" />
              Download for Android
            </a>

            {/* QR Code Placeholder */}
            <div className="glass rounded-2xl p-4">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                {/* [IMAGE: QR Code linking to Play Store. Dimension: 128x128px] */}
                <div className="text-center">
                  <Download className="w-8 h-8 mx-auto mb-1 text-vibe-dark" />
                  <p className="text-xs text-vibe-dark font-bold">QR Code</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Scan to download</p>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <p className="text-sm text-gray-400 mb-4">Get updates on new features and releases</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 focus:border-vibe-purple focus:outline-none transition-colors"
                data-testid="newsletter-input"
              />
              <button
                className="px-6 py-3 bg-vibe-purple rounded-full font-semibold hover:bg-vibe-purple/80 transition-colors"
                data-testid="newsletter-submit-btn"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
