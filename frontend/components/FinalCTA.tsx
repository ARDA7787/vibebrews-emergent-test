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
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-blue via-vibe-blue-dark to-vibe-teal opacity-15">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(13, 148, 136, 0.2) 0%, transparent 50%)' }}></div>
      </div>

      {/* Floating Elements - deterministic positions to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: '8%', top: '22%' },
          { left: '18%', top: '48%' },
          { left: '28%', top: '70%' },
          { left: '38%', top: '30%' },
          { left: '48%', top: '82%' },
          { left: '58%', top: '18%' },
          { left: '68%', top: '55%' },
          { left: '78%', top: '36%' },
          { left: '88%', top: '62%' },
          { left: '12%', top: '85%' },
          { left: '22%', top: '12%' },
          { left: '32%', top: '40%' },
          { left: '52%', top: '50%' },
          { left: '72%', top: '75%' },
          { left: '92%', top: '25%' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={pos}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + ((i * 0.23) % 2), repeat: Infinity, delay: (i * 0.17) % 2 }}
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
            <Sparkles className="w-5 h-5 text-vibe-teal" />
            <span className="font-semibold">Start Creating Today</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Ready to Turn Your Ideas
            <span className="block gradient-text mt-2">
              Into Games?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-3 px-10 py-5 bg-vibe-orange rounded-full font-bold text-lg text-white hover:scale-105 transition-transform duration-300 glow-orange hover:bg-vibe-orange/90"
              data-testid="final-cta-download-btn"
            >
              <Download className="w-6 h-6" />
              Download for Android
            </a>

            {/* QR Code */}
            <div className="glass rounded-2xl p-4">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/QR_code.png"
                  alt="QR Code to download VibeBrews from Play Store"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Scan to download</p>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <p className="text-sm text-gray-600 mb-4">Get updates on new features and releases</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-vibe-blue/5 border border-vibe-teal/30 focus:border-vibe-teal focus:outline-none transition-colors text-gray-800"
                data-testid="newsletter-input"
              />
              <button
                className="px-6 py-3 bg-vibe-teal rounded-full font-semibold text-white hover:bg-vibe-teal/80 transition-colors"
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
