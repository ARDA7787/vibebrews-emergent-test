'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need coding experience to create games?',
    answer: 'Absolutely not! VibeGames uses conversational AI that understands natural language. Just describe your game idea like you\'re talking to a friend, and our AI will generate a fully playable HTML5 game for you.',
  },
  {
    question: 'What types of games can I create?',
    answer: 'You can create a wide variety of HTML5 games including puzzle games, arcade games, casual games, and more. Our AI understands different game mechanics and can bring your creative ideas to life in minutes.',
  },
  {
    question: 'How long does it take to generate a game?',
    answer: 'Most games are generated in under 5 minutes! The exact time depends on the complexity of your game idea, but our AI works incredibly fast to turn your concepts into playable reality.',
  },
  {
    question: 'Can I edit games after creation?',
    answer: 'Yes! You can continue conversing with the AI to refine and modify your game. You can also duplicate existing games and remix them into new creations.',
  },
  {
    question: 'Is VibeGames free to use?',
    answer: 'Yes, VibeGames is free to download and use. You can create, play, and discover games without any cost. We\'re focused on democratizing game creation for everyone.',
  },
  {
    question: 'What platforms are supported?',
    answer: 'Currently, VibeGames is available on Android via Google Play Store. All games created are HTML5-based, making them cross-platform compatible.',
  },
  {
    question: 'How do I share my games?',
    answer: 'Once your game is complete, you can instantly publish it to the community feed. Other users can discover, play, like, comment, and share your creations across platforms.',
  },
  {
    question: 'Can I create multiple games at once?',
    answer: 'Yes! VibeGames supports up to 3 concurrent projects. You can work on multiple game ideas simultaneously, with background generation while you browse the feed.',
  },
]

function FAQItem({ faq, index }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-vibe-purple/50 transition-colors"
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-vibe-purple flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-400 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about VibeGames
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
