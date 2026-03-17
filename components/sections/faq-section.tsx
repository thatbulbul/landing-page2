'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { fadeUpVariants } from '@/lib/animations'

const faqs = [
  {
    question: 'How much does the free audit cost?',
    answer:
      'It\'s completely free. No credit card required. We audit your GHL setup and provide a detailed report with actionable recommendations at no cost.',
  },
  {
    question: 'What if I don\'t use GoHighLevel yet?',
    answer:
      'The audit is specifically for existing GoHighLevel users. However, if you\'re considering GHL, we\'d be happy to discuss how it could work for your agency during a consultation.',
  },
  {
    question: 'How long does the audit take?',
    answer:
      'Most audits are completed within 24 hours. We review your workflows, configurations, databases, and automations, then provide a comprehensive report with recommendations.',
  },
  {
    question: 'What happens after I get the report?',
    answer:
      'You\'ll receive a detailed report with findings, optimization opportunities, and a personalized growth roadmap. You can implement recommendations yourself, or we offer implementation services.',
  },
  {
    question: 'Do you offer implementation services?',
    answer:
      'Yes! After your audit, we can help implement the recommendations. We offer various service packages tailored to your needs and budget.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We follow strict security protocols and never access or store your client data. We only review configurations and workflow setups to provide recommendations.',
  },
  {
    question: 'Can you help with specific workflows?',
    answer:
      'Yes. During the audit, we identify workflow issues and provide specific recommendations. Our implementation team can also build custom workflows for your unique use cases.',
  },
  {
    question: 'What if I have a custom setup?',
    answer:
      'Custom setups are our specialty. We have experience with complex, multi-client, and highly customized GHL implementations. The audit will be even more valuable for identifying optimization opportunities.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 space-y-4 md:mb-20"
        >
          <h2 className="font-syne text-3xl font-bold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl border border-border/50 px-6 data-[state=open]:border-accent/50 data-[state=open]:bg-background/50 transition-colors"
                >
                  <AccordionTrigger className="font-semibold hover:text-accent transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
