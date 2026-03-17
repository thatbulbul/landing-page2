'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { numberCounterVariants } from '@/lib/animations'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2.5,
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValue((prev) => {
        if (prev < value) {
          return Math.min(prev + Math.ceil(value / (duration * 60)), value)
        }
        clearInterval(interval)
        return value
      })
    }, 16)

    return () => clearInterval(interval)
  }, [value, duration])

  return (
    <motion.div
      variants={numberCounterVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-2"
    >
      <div className="text-4xl font-bold text-primary md:text-5xl">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground md:text-base">{label}</p>
    </motion.div>
  )
}
