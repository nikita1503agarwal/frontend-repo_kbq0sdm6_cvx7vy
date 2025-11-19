import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Server, Power, Coins, Play, Pause, RefreshCw } from 'lucide-react'

function Stat({ label, value, accent }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-xs text-blue-200/70">{label}</div>
      <div className={`mt-1 text-2xl font-semibold ${accent || 'text-white'}`}>{value}</div>
    </div>
  )
}

export default function DashboardPreview() {
  const [hashrate, setHashrate] = useState(138_200)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setHashrate((h) => Math.max(120_000, Math.min(160_000, h + (Math.random() - 0.5) * 1800)))
    }, 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="start" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-bold text-white">
              Command, monitor, and invest — all in one place
            </motion.h2>
            <p className="mt-3 text-blue-100/80">Real-time uptime, power, and profitability insights with instant investment controls. Hands-off management, institutional reliability.</p>

            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
              <Stat label="Fleet Uptime" value="99.98%" />
              <Stat label="Live Hashrate" value={`${Math.round(hashrate).toLocaleString()} TH/s`} accent="text-amber-300" />
              <Stat label="Avg Power" value="21.5 J/TH" />
              <Stat label="Daily BTC" value="+7.42 BTC" accent="text-emerald-300" />
            </div>

            <div className="mt-8 flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 px-4 py-2 font-semibold transition">
                <Play size={16} /> Start Fleet
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-blue-400/20 hover:bg-blue-400/30 text-blue-100 border border-blue-300/30 px-4 py-2 font-semibold transition">
                <Pause size={16} /> Pause
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 border border-amber-300/30 px-4 py-2 font-semibold transition">
                <RefreshCw size={16} /> Reboot
              </button>
            </div>
          </div>

          {/* Preview Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 overflow-hidden">
            <div className="absolute -inset-1 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.08),rgba(16,185,129,0.08),rgba(251,191,36,0.09),rgba(56,189,248,0.08))] blur-2xl pointer-events-none" />
            <div className="relative grid grid-cols-3 gap-4">
              <div className="col-span-3 rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between text-xs text-blue-200/70">
                  <span>Live Hashrate</span>
                  <span>Realtime</span>
                </div>
                <div className="mt-1 text-3xl font-bold text-amber-300">{Math.round(hashrate).toLocaleString()} TH/s</div>
                <div className="mt-2 h-16 w-full rounded-lg bg-gradient-to-r from-blue-500/20 to-amber-400/20 overflow-hidden">
                  <div className="h-full w-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'64\'><polyline points=\'0,50 40,20 80,30 120,10 160,35 200,15\' fill=\'none\' stroke=\'rgba(251,191,36,0.7)\' stroke-width=\'3\'/></svg>')] bg-repeat-x bg-[length:200px_64px] animate-[bg-scroll_2.5s_linear_infinite]" />
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="text-xs text-blue-200/70">Status</div>
                <div className="mt-1 flex items-center gap-2 font-semibold text-emerald-300">
                  <Activity size={16} /> Online
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="text-xs text-blue-200/70">Miners</div>
                <div className="mt-1 flex items-center gap-2 font-semibold text-white">
                  <Server size={16} /> 2,384
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="text-xs text-blue-200/70">Power</div>
                <div className="mt-1 flex items-center gap-2 font-semibold text-white">
                  <Power size={16} /> 52.7 MW
                </div>
              </div>

              <div className="col-span-3 grid sm:grid-cols-3 gap-3">
                {[['Instant Buy', '0.25 BTC'], ['Auto-Reinvest', 'On'], ['Yield (30d)', '+14.2%']].map(([label, val]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                    <div className="text-xs text-blue-200/70">{label}</div>
                    <div className="mt-1 font-semibold text-white">{val}</div>
                  </div>
                ))}
              </div>

              <div className="col-span-3 mt-2 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 font-semibold shadow hover:opacity-95 transition">
                  <Coins size={16} /> Invest Now
                </button>
                <button className="rounded-xl border border-white/10 px-4 py-2 text-white/90 hover:bg-white/5 transition">Open Console</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
