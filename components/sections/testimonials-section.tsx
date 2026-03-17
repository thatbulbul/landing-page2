'use client'

import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { StatCounter } from '@/components/ui/stat-counter'
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '@/lib/animations'

const testimonials = [
  {
    quote:
      'The audit revealed workflow inefficiencies we didn\'t even know existed. We implemented the recommendations and saw a 45% improvement in lead conversion within 3 months.',
    author: 'Sarah Chen',
    role: 'Founder, Digital Growth Agency',
    rating: 5,
  },
  {
    quote:
      'Worth every penny. The optimization cut our client onboarding time from 6 hours to 45 minutes. Our team has more time to focus on strategy.',
    author: 'Marcus Rodriguez',
    role: 'CEO, Growth Solutions Co',
    rating: 5,
  },
  {
    quote:
      'Finally someone who understands GHL at a deep level. The custom recommendations were specific to our workflows, not generic advice.',
    author: 'Jennifer Park',
    role: 'Operations Manager, Elite Agencies',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Stats bar */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 grid gap-8 rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-8 md:mb-20 md:grid-cols-3 md:p-12"
        >
          <StatCounter value={500} suffix="+" label="Agencies Transformed" />
          <StatCounter value={185} suffix="%" label="Average Revenue Increase" />
          <StatCounter value={4.9} suffix="/5" label="Customer Rating" />
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 space-y-4 md:mb-20"
        >
          <h2 className="font-syne text-3xl font-bold text-foreground md:text-5xl">
            Loved by Agency Owners
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            See how our optimization service has transformed agencies like yours.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
