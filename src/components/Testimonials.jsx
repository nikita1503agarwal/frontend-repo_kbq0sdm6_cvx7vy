import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'HashBranch helped us scale from 200 to 2,000 units without hiring a single extra ops engineer. Uptime is phenomenal and reporting is investor-grade.',
    author: 'Michael P., Fund Partner',
  },
  {
    quote:
      'The onboarding and monitoring are turnkey. We were producing within days and our LPs love the transparency.',
    author: 'Sara K., Mining Operator',
  },
  {
    quote:
      'Exactly what institutional miners needed — secure U.S. hosting with real profit metrics and hands-off management.',
    author: 'Devon R., Family Office CIO',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-bold text-white">
          Trusted by miners. Built for scale.
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-6">
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-blue-100/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/80">— {t.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
