import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Gauge, Zap, ArrowDownRight } from 'lucide-react'

function AnimatedCounter({ from = 0, to = 100, suffix = '', duration = 2.2 }) {
  const [value, setValue] = useState(from)
  useEffect(() => {
    let start = performance.now()
    let raf
    const loop = (t) => {
      const elapsed = (t - start) / 1000
      const p = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(from + (to - from) * eased)
      if (p < 1) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [from, to, duration])
  return (
    <span className="tabular-nums">
      {Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value)}{suffix}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-[95vh] w-full overflow-hidden bg-slate-950">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950 pointer-events-none" />
        {/* Glow gradients */}
        <div className="absolute -inset-x-32 -top-10 h-64 bg-gradient-to-r from-blue-600/20 via-cyan-400/10 to-amber-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -inset-x-16 bottom-0 h-72 bg-gradient-to-t from-slate-950 via-blue-900/20 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm text-xs text-blue-100">
              <Shield size={14} className="text-blue-300" />
              Built for institutional trust
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Unlock Hassle-Free Bitcoin Mining. Maximize Your Hardware. Scale Your Profits.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-5 text-base sm:text-lg text-blue-100/80 max-w-2xl">
              HashBranch.com is the #1 U.S. Bitcoin mining management and investment platform. Secure hosting, real-time monitoring, instant onboarding.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#start" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3 font-semibold text-slate-900 shadow-[0_0_0_0_rgba(251,191,36,0.7)] transition-all hover:shadow-[0_0_40px_10px_rgba(251,191,36,0.15)]">
                Start Mining in Minutes
                <ArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-400/10 px-5 py-3 font-semibold text-blue-100 backdrop-blur-sm hover:bg-blue-400/15">
                Schedule a Free Demo
              </a>
              <a href="#guide" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white/90 hover:bg-white/5">
                Download Investor Guide
              </a>
            </motion.div>

            {/* Metrics */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
                <div className="text-xs text-blue-200/70">Live Hashrate</div>
                <div className="mt-1 text-2xl font-semibold text-white">
                  <AnimatedCounter to={145_000} suffix=" TH/s" />
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
                <div className="text-xs text-blue-200/70">Daily Revenue</div>
                <div className="mt-1 text-2xl font-semibold text-amber-300">
                  $<AnimatedCounter to={58_400} />
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
                <div className="text-xs text-blue-200/70">Fleet Uptime</div>
                <div className="mt-1 text-2xl font-semibold text-white">99.98%</div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
                <div className="text-xs text-blue-200/70">Power Efficiency</div>
                <div className="mt-1 text-2xl font-semibold text-emerald-300">21.5 J/TH</div>
              </div>
            </div>

            {/* Feature chips */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-blue-100/80">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Gauge size={14} /> Real-time monitoring</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Zap size={14} /> Rapid deployment</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Shield size={14} /> 100% transparent</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-blue-100/70">
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-px bg-gradient-to-b from-transparent via-blue-300/50 to-blue-300/80" />
          <span className="text-xs">Scroll</span>
        </div>
      </div>
    </section>
  )
}
