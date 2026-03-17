'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TrustBadges } from '@/components/ui/trust-badges'
import { StatCounter } from '@/components/ui/stat-counter'
import { ArrowRight, Zap } from 'lucide-react'
import {
  fadeUpVariants,
  scaleUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/animations'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-card pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:space-y-12"
        >
          {/* Trust badges */}
          <motion.div variants={staggerItemVariants}>
            <TrustBadges />
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeUpVariants} className="space-y-6">
            <h1 className="font-syne text-4xl font-bold leading-tight text-foreground md:text-6xl md:leading-tight lg:text-7xl">
              Unlock Your{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                GoHighLevel Potential
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Get a free expert audit of your GoHighLevel setup. Discover hidden
              opportunities, optimize workflows, and unlock revenue you didn&apos;t
              know you were missing.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItemVariants}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            <Button
              size="lg"
              className="gap-2 font-semibold text-base h-12 md:h-14"
            >
              Request Free Audit <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 font-semibold text-base h-12 md:h-14"
            >
              <Zap className="h-5 w-5" /> Watch Demo
            </Button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={staggerItemVariants}
            className="grid gap-6 pt-8 md:grid-cols-3 md:pt-12"
          >
            <StatCounter value={500} suffix="+" label="Agencies Optimized" />
            <StatCounter value={185} suffix="%" label="Avg Revenue Increase" />
            <StatCounter value={24} suffix="h" label="Free Audit Turnaround" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
