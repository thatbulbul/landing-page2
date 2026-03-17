import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
import { ProcessSection } from '@/components/sections/process-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { PricingCTA } from '@/components/sections/pricing-cta'
import { FinalCTA } from '@/components/sections/final-cta'
import { FAQSection } from '@/components/sections/faq-section'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingCTA />
      <FinalCTA />
      <FAQSection />
      <Footer />
    </main>
  )
}
