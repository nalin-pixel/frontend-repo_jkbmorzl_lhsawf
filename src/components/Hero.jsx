import Spline from '@splinetool/react-spline'

export default function Hero({ highContrast }) {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 md:pt-36">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.22),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-8 items-stretch`}> 
          <div className={`relative rounded-3xl border ${highContrast ? 'border-white/20 bg-white/95' : 'border-white/15 bg-white/20'} backdrop-blur-2xl supports-[backdrop-filter]:bg-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.25)] p-6 sm:p-10 flex flex-col justify-between`}> 
            <div>
              <h1 className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ${highContrast ? 'text-slate-900' : 'text-white'}`}>
                Strategy, Brand & Code — aligned
              </h1>
              <p className={`mt-4 text-base sm:text-lg leading-relaxed ${highContrast ? 'text-slate-800' : 'text-white/80'}`}>
                I help founders and product teams turn ideas into sharp brands and robust digital products. Boutique attention, senior execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-900 font-semibold shadow hover:opacity-95 transition">Book a consultation</a>
                <a href="#work" className={`px-5 py-3 rounded-xl border ${highContrast ? 'border-slate-300 text-slate-800 hover:bg-slate-100' : 'border-white/25 text-white/90 hover:bg-white/10'} transition`}>View portfolio</a>
              </div>
            </div>
            <div className="mt-8 grid gap-3">
              {[
                { label: 'Consulting', desc: 'Clarity, focus and momentum for your roadmap.' },
                { label: 'Branding & Design', desc: 'Identity systems and interfaces that earn trust.' },
                { label: 'Development', desc: 'Modern, performant web apps built to last.' },
              ].map((t) => (
                <div key={t.label} className={`rounded-2xl border px-4 py-3 ${highContrast ? 'border-slate-200 bg-white' : 'border-white/15 bg-white/10'} backdrop-blur-xl flex items-start gap-3`}> 
                  <div className="h-2.5 w-2.5 mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                  <div>
                    <div className={`${highContrast ? 'text-slate-900' : 'text-white'} font-semibold`}>{t.label}</div>
                    <div className={`${highContrast ? 'text-slate-700' : 'text-white/80'} text-sm`}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative rounded-3xl overflow-hidden border ${highContrast ? 'border-white/10 bg-slate-950' : 'border-white/15 bg-white/10'} backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] min-h-[420px] md:min-h-[520px]`}> 
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
