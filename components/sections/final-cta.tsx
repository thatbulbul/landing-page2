'use client'

import { motion } from 'framer-motion'
import { AuditForm } from '@/components/ui/audit-form'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Heading */}
          <motion.div
            variants={fadeUpVariants}
            className="space-y-4 text-center"
          >
            <h2 className="font-syne text-3xl font-bold text-foreground md:text-4xl">
              Ready to Optimize Your GHL?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your free, no-obligation audit today. Discover the
              opportunities hiding in your setup.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUpVariants}
            className="rounded-xl border border-border/50 bg-card p-8 md:p-10 shadow-lg"
          >
            <AuditForm />
          </motion.div>

          {/* Security note */}
          <motion.p
            variants={fadeUpVariants}
            className="text-center text-xs text-muted-foreground"
          >
            Your information is secure. We never sell or share data.{' '}
            <a href="#" className="text-accent hover:underline">
              Privacy Policy
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
