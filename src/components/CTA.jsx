import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Send, Download } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <section id="demo" className="relative py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <h3 className="text-white text-xl font-semibold">Start Mining in Minutes</h3>
            <p className="text-blue-100/80 mt-1">Enter your work email to get instant onboarding access and payment link.</p>
            <form onSubmit={submit} className="mt-4 flex flex-col sm:flex-row gap-3">
              <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="you@company.com" className="flex-1 rounded-xl bg-slate-900/70 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
              <button disabled={loading} className="rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-3 hover:shadow-[0_0_35px_6px_rgba(251,191,36,0.18)] disabled:opacity-70 flex items-center justify-center gap-2">
                {loading ? 'Processing...' : 'Get Started'}
              </button>
            </form>
            <div className="mt-3 text-xs text-blue-200/70">Payments are processed securely via Stripe.</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <h3 className="text-white text-xl font-semibold">Schedule a Free Demo</h3>
            <p className="text-blue-100/80 mt-1">Pick a time to see the platform live with our solutions team.</p>
            <button className="mt-4 w-full rounded-xl border border-blue-300/30 bg-blue-400/10 px-5 py-3 text-blue-100 hover:bg-blue-400/15 flex items-center justify-center gap-2">
              <Calendar size={18} /> Open Scheduler
            </button>
            <a href="#guide" className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white/90 hover:bg-white/5"><Download size={18} /> Download Investor Guide</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
