import React from 'react'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import DashboardPreview from './components/DashboardPreview'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FooterBar from './components/FooterBar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Nav */}
      <header className="fixed top-0 inset-x-0 z-20 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-amber-400" />
            <span className="font-semibold tracking-tight">HashBranch</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#start" className="hover:text-white">Platform</a>
            <a href="#demo" className="hover:text-white">Pricing</a>
            <a href="#guide" className="hover:text-white">Resources</a>
          </nav>
          <a href="#demo" className="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm hover:bg-white/15">Book Demo</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <DashboardPreview />
        <ValueProps />
        <Testimonials />
        <CTA />
      </main>

      <FooterBar />
    </div>
  )
}

export default App
