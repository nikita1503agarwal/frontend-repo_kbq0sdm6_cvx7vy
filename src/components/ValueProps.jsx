import React from 'react'
import { ShieldCheck, Timer, Sparkles, Rocket, Headphones, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: ShieldCheck, title: '100% Transparent', desc: 'Live metrics, on-chain proofs, and clear fees.' },
  { icon: Rocket, title: 'Secure U.S. Hosting', desc: 'Tier-3+ data centers with compliant operations.' },
  { icon: BarChart3, title: 'Real Profit Metrics', desc: 'Track revenue, costs, and net yield in real-time.' },
  { icon: Headphones, title: 'Dedicated Support', desc: '24/7 monitoring and white-glove help.' },
  { icon: Timer, title: 'Rapid Deployment', desc: 'Spin up capacity and onboard hardware fast.' },
  { icon: Sparkles, title: 'Minimal Effort', desc: 'Hands-off management for investors and teams.' },
]

export default function ValueProps() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(37,99,235,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-bold text-white">
          Built for scale. Trusted by miners.
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-6 hover:border-blue-400/40">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-400/10 text-blue-300 p-3">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-blue-100/80">{desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-amber-400/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
