'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { slideInLeftVariants, slideInRightVariants } from '@/lib/animations'

interface BeforeAfterCardProps {
  beforeTitle: string
  beforeMetrics: string[]
  afterTitle: string
  afterMetrics: string[]
  improvement: string
}

export function BeforeAfterCard({
  beforeTitle,
  beforeMetrics,
  afterTitle,
  afterMetrics,
  improvement,
}: BeforeAfterCardProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {/* Before */}
      <motion.div
        variants={slideInLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-xl border border-border/50 bg-card p-6 md:p-8"
      >
        <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
          {beforeTitle}
        </h3>
        <div className="space-y-3">
          {beforeMetrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
              <span className="text-muted-foreground">{metric}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="hidden items-center justify-center md:flex">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{ x: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <ArrowRight className="h-8 w-8 text-accent" />
        </motion.div>
      </div>

      {/* After */}
      <motion.div
        variants={slideInRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 md:col-span-2 md:col-start-2 md:p-8"
      >
        <h3 className="mb-4 text-lg font-semibold text-accent">{afterTitle}</h3>
        <div className="space-y-3">
          {afterMetrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-medium text-foreground">{metric}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
          {improvement}
        </div>
      </motion.div>
    </div>
  )
}
