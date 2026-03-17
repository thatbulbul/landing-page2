'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '@/lib/animations'

const steps = [
  {
    number: '01',
    title: 'Submit Your Details',
    description:
      'Tell us about your agency, current setup, and goals. Takes just 2 minutes.',
  },
  {
    number: '02',
    title: 'Expert Analysis',
    description:
      'Our specialists audit your instance, workflows, and configurations thoroughly.',
  },
  {
    number: '03',
    title: 'Detailed Report',
    description:
      'Receive a comprehensive report with findings, opportunities, and actionable recommendations.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 space-y-4 md:mb-20"
        >
          <h2 className="font-syne text-3xl font-bold text-foreground md:text-5xl">
            How It Works
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Get your free audit in three simple steps.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Timeline line - hidden on mobile */}
          <div className="absolute top-12 left-0 right-0 hidden h-1 bg-gradient-to-r from-primary via-accent to-primary/50 md:block" />

          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="relative"
              >
                {/* Step number circle */}
                <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Arrow to next step - hidden on last step and mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden absolute -right-12 top-6 md:block">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile timeline indicator */}
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="mt-6 md:hidden"
                  >
                    <ArrowRight className="h-6 w-6 rotate-90 text-accent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline dots */}
          <div className="mt-12 flex items-center justify-center gap-4">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="h-3 w-3 rounded-full bg-accent"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
