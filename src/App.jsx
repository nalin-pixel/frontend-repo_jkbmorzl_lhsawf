import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Services, Work, Process, About, Testimonials, Contact } from './components/Sections'

function App() {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('high-contrast')
    if (stored === 'true') setHighContrast(true)
  }, [])

  // Sync with navbar toggle through body class observer (simple interval)
  useEffect(() => {
    const id = setInterval(() => {
      const active = document.body.classList.contains('contrast-high')
      setHighContrast(active)
    }, 400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Rich layered gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(34,211,238,0.18),transparent),radial-gradient(1000px_500px_at_100%_0%,rgba(168,85,247,0.16),transparent),radial-gradient(800px_400px_at_50%_100%,rgba(16,185,129,0.12),transparent)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero highContrast={highContrast} />
        <Services highContrast={highContrast} />
        <Work highContrast={highContrast} />
        <Process highContrast={highContrast} />
        <About highContrast={highContrast} />
        <Testimonials highContrast={highContrast} />
        <Contact highContrast={highContrast} />
        <footer className="py-10 text-center text-white/60">
          © {new Date().getFullYear()} Maxim Studio — All rights reserved.
        </footer>
      </main>

      {/* High contrast mode styles via body class */}
      <style>{`
        body.contrast-high .backdrop-blur-xl, 
        body.contrast-high .backdrop-blur-2xl { backdrop-filter: none !important; }
        body.contrast-high .bg-white\/10, 
        body.contrast-high .bg-white\/15, 
        body.contrast-high .bg-white\/20 { background-color: rgba(255,255,255,0.95) !important; }
      `}</style>
    </div>
  )
}

export default App
