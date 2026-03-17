'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cardEntranceVariants } from '@/lib/animations'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating?: number
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={cardEntranceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative rounded-xl border border-border/50 bg-card p-6 md:p-8"
    >
      {/* Left accent border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-accent via-accent/50 to-transparent" />

      {/* Stars */}
      {rating && (
        <div className="mb-4 flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="mb-6 text-base font-medium leading-relaxed text-foreground md:text-lg">
        "{quote}"
      </blockquote>

      {/* Author info */}
      <footer className="border-t border-border/30 pt-4">
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </footer>
    </motion.div>
  )
}
