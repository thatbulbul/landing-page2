'use client'

import { motion } from 'framer-motion'
import {
  AlertCircle,
  Zap,
  Users,
  DollarSign,
  TrendingDown,
  Clock,
} from 'lucide-react'
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '@/lib/animations'

const problems = [
  {
    icon: AlertCircle,
    title: 'Suboptimal Configuration',
    description:
      'Most agencies leave 60% of GHL capabilities untapped, missing powerful automation opportunities.',
  },
  {
    icon: Zap,
    title: 'Workflow Inefficiencies',
    description:
      'Manual processes that could be automated, wasting team time and creating bottlenecks.',
  },
  {
    icon: Users,
    title: 'Poor Lead Management',
    description:
      'Leads falling through cracks, inconsistent follow-ups, and low conversion rates.',
  },
  {
    icon: DollarSign,
    title: 'Revenue Leakage',
    description:
      'Missed upsell opportunities and inefficient pipeline management costing you money.',
  },
  {
    icon: TrendingDown,
    title: 'Low Client Retention',
    description:
      'Clients see minimal results because workflows aren&apos;t optimized for their needs.',
  },
  {
    icon: Clock,
    title: 'Slow Implementation',
    description:
      'Setting up complex automations takes forever without expert guidance and templates.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 space-y-4 md:mb-20"
        >
          <h2 className="font-syne text-3xl font-bold text-foreground md:text-5xl">
            The GHL Gap
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Most agencies are leaving money on the table. Here&apos;s what&apos;s
            probably happening in your setup.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="rounded-xl border border-border/50 bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="mb-4 inline-block rounded-lg bg-destructive/10 p-3">
                  <Icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
