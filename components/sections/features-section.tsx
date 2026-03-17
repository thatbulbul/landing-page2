'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Database,
  Gauge,
  Users,
  Shield,
  TrendingUp,
} from 'lucide-react'
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '@/lib/animations'

const features = [
  {
    icon: Zap,
    title: 'Workflow Optimization',
    description:
      'Streamline your automation sequences, eliminating bottlenecks and improving efficiency.',
  },
  {
    icon: Database,
    title: 'Database Cleanup',
    description:
      'Organize your contacts, remove duplicates, and improve data quality for better targeting.',
  },
  {
    icon: Gauge,
    title: 'Performance Tuning',
    description:
      'Optimize system settings and configurations to ensure peak performance and speed.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Set up roles, permissions, and workflows that empower your team without slowing things down.',
  },
  {
    icon: Shield,
    title: 'Security Review',
    description:
      'Ensure your data is protected with proper access controls and security best practices.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Roadmap',
    description:
      'Get a strategic plan for scaling your GHL usage as your agency and client base grows.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 space-y-4 md:mb-20"
        >
          <h2 className="font-syne text-3xl font-bold text-foreground md:text-5xl">
            What&apos;s Included in Your Audit
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            A comprehensive review covering every aspect of your GoHighLevel setup.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border/50 bg-background p-6 hover:border-accent/50 transition-colors"
              >
                <div className="mb-4 inline-block rounded-lg bg-accent/10 p-3">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
