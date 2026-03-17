'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Zap, Clock } from 'lucide-react'
import { fadeUpVariants, scaleUpVariants } from '@/lib/animations'

export function PricingCTA() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.div
          variants={scaleUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-background to-primary/5 p-8 md:p-12 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent"
          >
            Limited Time Offer
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-syne text-3xl font-bold text-foreground md:text-4xl mb-4"
          >
            Your Free GHL Audit Awaits
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            No credit card. No obligations. Just honest, actionable insights to
            grow your agency.
          </motion.p>

          {/* Features list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 space-y-3 text-left inline-block"
          >
            {[
              'Complete GHL audit of your setup',
              'Detailed optimization recommendations',
              '24-hour turnaround guaranteed',
              'Personalized growth roadmap included',
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6"
          >
            <Button size="lg" className="gap-2 font-semibold text-base h-14">
              <Zap className="h-5 w-5" /> Request Your Free Audit Now
            </Button>
          </motion.div>

          {/* Trust element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <Clock className="h-4 w-4" />
            <span>Typical response: 30 minutes</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
