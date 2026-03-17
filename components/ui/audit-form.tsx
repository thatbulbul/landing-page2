'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Button } from './button'
import { Input } from './input'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  businessName: z.string().min(2, 'Business name is required'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
})

type FormValues = z.infer<typeof formSchema>

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    try {
      setError('')
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setSubmitted(true)
      reset()
      // Reset success state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center md:p-8"
      >
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-500" />
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Audit Request Received!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ll analyze your GoHighLevel setup and send you a detailed report
          within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {error && (
        <div className="flex gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label htmlFor="businessName" className="block text-sm font-medium mb-2">
          Business Name *
        </label>
        <Input
          id="businessName"
          placeholder="Your business name"
          {...register('businessName')}
          className={errors.businessName ? 'border-destructive' : ''}
        />
        {errors.businessName && (
          <p className="mt-1 text-xs text-destructive">
            {errors.businessName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register('email')}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium mb-2">
          Website (optional)
        </label>
        <Input
          id="website"
          placeholder="https://example.com"
          {...register('website')}
          className={errors.website ? 'border-destructive' : ''}
        />
        {errors.website && (
          <p className="mt-1 text-xs text-destructive">
            {errors.website.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Submitting...' : 'Request Your Free Audit'}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </motion.form>
  )
}
