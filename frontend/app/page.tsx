import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Statistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
