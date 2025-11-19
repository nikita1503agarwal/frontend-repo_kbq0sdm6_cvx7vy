import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Calendar } from 'lucide-react'

export default function FooterBar() {
  return (
    <footer className="sticky bottom-0 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur p-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-white/90 text-sm">Ready to see it live? Book a demo or contact us.</div>
            <div className="flex flex-wrap gap-2">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-blue-100 hover:bg-blue-400/15"><Calendar size={16} /> Schedule Demo</a>
              <a href="mailto:team@hashbranch.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-white/90 hover:bg-white/5"><Mail size={16} /> Contact</a>
              <a href="tel:+18001234567" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-white/90 hover:bg-white/5"><Phone size={16} /> Call</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
