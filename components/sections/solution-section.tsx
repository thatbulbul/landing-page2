'use client'

import { motion } from 'framer-motion'
import { BeforeAfterCard } from '@/components/ui/before-after-card'
import { fadeUpVariants } from '@/lib/animations'

export function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 space-y-4 md:mb-20"
        >
          <h2 className="font-syne text-3xl font-bold text-foreground md:text-5xl">
            Our Optimization Framework
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            See the transformation we deliver for agencies like yours.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16 md:space-y-24"
        >
          <BeforeAfterCard
            beforeTitle="Typical Setup"
            beforeMetrics={[
              'Manual lead routing (error-prone)',
              'Inconsistent follow-up sequences',
              'No automation for common tasks',
              'Limited reporting and insights',
              '40% lead conversion rate',
            ]}
            afterTitle="Optimized Setup"
            afterMetrics={[
              'Intelligent lead routing automation',
              'Smart sequences based on client behavior',
              'Automated everything that can be',
              'Real-time dashboards and insights',
              '73% lead conversion rate',
            ]}
            improvement="33% Conversion Improvement"
          />

          <BeforeAfterCard
            beforeTitle="Inefficient Process"
            beforeMetrics={[
              'Manual client onboarding (6+ hours)',
              'Inconsistent documentation',
              'Multiple tools integration issues',
              'Poor task delegation',
              'High team turnover',
            ]}
            afterTitle="Streamlined Process"
            afterMetrics={[
              'Automated onboarding (30 minutes)',
              'Standardized templates and systems',
              'Seamless tool integration',
              'Clear role-based workflows',
              'Improved team satisfaction',
            ]}
            improvement="80% Time Savings"
          />

          <BeforeAfterCard
            beforeTitle="Lost Revenue"
            beforeMetrics={[
              'Missed upsell opportunities',
              'No usage-based insights',
              'Reactive customer support',
              'Client churn at 25%',
              
            ]}
            afterTitle="Revenue Growth"
            afterMetrics={[
              'Proactive upsell automation',
              'Usage tracking and alerts',
              'Predictive support triggers',
              'Client churn at 8%',
              
            ]}
            improvement="68% Revenue Increase"
          />
        </motion.div>
      </div>
    </section>
  )
}
