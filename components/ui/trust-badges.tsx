'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Shield } from 'lucide-react'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations'

const badges = [
  { icon: CheckCircle2, label: 'Expert Verified' },
  { icon: Zap, label: 'Results Proven' },
  { icon: Shield, label: 'Secure & Safe' },
]

export function TrustBadges() {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-wrap gap-3"
    >
      {badges.map((badge, index) => {
        const Icon = badge.icon
        return (
          <motion.div
            key={index}
            variants={staggerItemVariants}
            className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
          >
            <Icon className="h-4 w-4" />
            <span>{badge.label}</span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
