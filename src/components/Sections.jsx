export function Services({ highContrast }) {
  const card = highContrast
    ? 'border-slate-200 bg-white'
    : 'border-white/15 bg-white/15'
  const text = highContrast ? 'text-slate-900' : 'text-white'
  const sub = highContrast ? 'text-slate-700' : 'text-white/80'

  const items = [
    {
      title: 'Consulting',
      bullets: [
        'Product strategy and prioritization',
        'Go-to-market and positioning',
        'UX audits and opportunity mapping',
      ],
      outcome: 'Leave with clarity, focus, and a sequenced plan.',
    },
    {
      title: 'Branding & Design',
      bullets: [
        'Identity systems and brand kits',
        'Web & app UI design (design systems)',
        'Conversion-focused marketing pages',
      ],
      outcome: 'A brand and interface that earns trust and drives action.',
    },
    {
      title: 'Development',
      bullets: [
        'Modern frontend with React & Tailwind',
        'Type-safe APIs and integrations',
        'Performance, accessibility, reliability',
      ],
      outcome: 'Robust web apps ready for scale and iteration.',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold ${text}`}>Services</h2>
        <p className={`mt-2 ${sub}`}>Three pillars to take you from idea to launch.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className={`rounded-2xl border ${card} backdrop-blur-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)]`}> 
              <h3 className={`text-xl font-semibold ${text}`}>{it.title}</h3>
              <ul className={`mt-4 space-y-2 text-sm ${sub}`}>
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-4 text-sm ${sub}`}>{it.outcome}</p>
              <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Work({ highContrast }) {
  const card = highContrast
    ? 'border-slate-200 bg-white'
    : 'border-white/15 bg-white/15'
  const text = highContrast ? 'text-slate-900' : 'text-white'
  const sub = highContrast ? 'text-slate-700' : 'text-white/80'

  const projects = [
    {
      name: 'Nebula SaaS',
      summary: 'Repositioned brand and built marketing site that doubled trials.',
      tags: ['Brand identity', 'Website', 'SaaS'],
    },
    {
      name: 'Atlas CRM',
      summary: 'Design system and React app for sales teams at scale.',
      tags: ['Design system', 'Web app', 'React'],
    },
    {
      name: 'Lumen Health',
      summary: 'Accessible patient portal with fast, reliable UX.',
      tags: ['Healthcare', 'Accessibility', 'Frontend'],
    },
    {
      name: 'CourierPay',
      summary: 'Fintech dashboard, realtime insights, and API integrations.',
      tags: ['Fintech', 'Dashboard', 'APIs'],
    },
  ]

  return (
    <section id="work" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold ${text}`}>Selected Work</h2>
        <p className={`mt-2 ${sub}`}>A few recent projects and case studies.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className={`group rounded-2xl border ${card} backdrop-blur-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-shadow`}> 
              <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 border border-white/20" />
              <h3 className={`mt-4 text-lg font-semibold ${text}`}>{p.name}</h3>
              <p className={`text-sm mt-1 ${sub}`}>{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className={`text-xs px-2 py-1 rounded-full border ${card} ${sub}`}>{t}</span>
                ))}
              </div>
              <a href="#contact" className="mt-5 inline-block text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">View case study →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process({ highContrast }) {
  const text = highContrast ? 'text-slate-900' : 'text-white'
  const sub = highContrast ? 'text-slate-700' : 'text-white/80'
  const chip = highContrast ? 'bg-white border-slate-200' : 'bg-white/15 border-white/15'
  const steps = [
    { title: 'Discover', desc: 'Goals, users, constraints, and success metrics.' },
    { title: 'Define', desc: 'Prioritize opportunities and roadmap the work.' },
    { title: 'Design', desc: 'From concepts to systems, validate quickly.' },
    { title: 'Build', desc: 'Ship reliable software and iterate.' },
  ]
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold ${text}`}>Process</h2>
        <p className={`mt-2 ${sub}`}>A proven rhythm to reduce risk and increase velocity.</p>
        <div className="mt-10 grid md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.title} className={`rounded-2xl border ${chip} backdrop-blur-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]`}>
              <div className={`font-semibold ${text}`}>{s.title}</div>
              <div className={`text-sm mt-1 ${sub}`}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About({ highContrast }) {
  const card = highContrast
    ? 'border-slate-200 bg-white'
    : 'border-white/15 bg-white/15'
  const text = highContrast ? 'text-slate-900' : 'text-white'
  const sub = highContrast ? 'text-slate-700' : 'text-white/80'

  const tools = ['Figma', 'Manrope/Inter', 'Tailwind', 'React', 'Node', 'FastAPI', 'PostgreSQL', 'Vercel']

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border ${card} backdrop-blur-2xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.18)]`}> 
          <h2 className={`text-3xl sm:text-4xl font-bold ${text}`}>About</h2>
          <p className={`mt-3 ${sub}`}>
            I’m Maxim — a senior designer-engineer based in Berlin. I partner with founders and product teams to shape brands and ship software that users love. Over the last decade I’ve led projects across fintech, healthcare, and B2B SaaS.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className={`text-xs px-3 py-1 rounded-full border ${card} ${sub}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials({ highContrast }) {
  const card = highContrast
    ? 'border-slate-200 bg-white'
    : 'border-white/15 bg-white/15'
  const text = highContrast ? 'text-slate-900' : 'text-white'
  const sub = highContrast ? 'text-slate-700' : 'text-white/80'

  const items = [
    {
      quote:
        'Maxim brought clarity fast and delivered a brand + product we’re proud of. Our trial-to-paid doubled.',
      name: 'Elena M.',
      role: 'CEO, Nebula',
    },
    {
      quote:
        'A rare combo of strategic thinking and hands-on craft. We shipped a 0→1 product in 8 weeks.',
      name: 'Tom K.',
      role: 'Head of Product, Atlas',
    },
    {
      quote:
        'Polished, pragmatic, and collaborative. The new design system unblocked our team.',
      name: 'Priya S.',
      role: 'Design Lead, CourierPay',
    },
  ]

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold ${text}`}>Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className={`rounded-2xl border ${card} backdrop-blur-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)]`}>
              <blockquote className={`${sub}`}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className={`mt-4 text-sm ${text}`}>
                <span className="font-semibold">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact({ highContrast }) {
  const card = highContrast
    ? 'border-slate-200 bg-white'
    : 'border-white/15 bg-white/15'
  const text = highContrast ? 'text-slate-900' : 'text-white'
  const sub = highContrast ? 'text-slate-700' : 'text-white/80'

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border ${card} backdrop-blur-2xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.18)]`}> 
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-bold ${text}`}>Let’s work together</h2>
              <p className={`mt-3 ${sub}`}>Tell me about your next project. I reply within 1–2 business days.</p>
              <a href="mailto:hello@maxim.studio" className="mt-6 inline-block text-cyan-300 hover:text-cyan-200">Prefer email? hello@maxim.studio</a>
            </div>
            <form className="grid gap-4">
              <div>
                <label className={`block text-sm mb-1 ${sub}`}>Name</label>
                <input type="text" required className={`w-full rounded-xl border ${card} px-4 py-3 bg-transparent outline-none focus:ring-2 focus:ring-cyan-400 ${text}`} />
              </div>
              <div>
                <label className={`block text-sm mb-1 ${sub}`}>Email</label>
                <input type="email" required className={`w-full rounded-xl border ${card} px-4 py-3 bg-transparent outline-none focus:ring-2 focus:ring-cyan-400 ${text}`} />
              </div>
              <div>
                <label className={`block text-sm mb-1 ${sub}`}>Budget</label>
                <select className={`w-full rounded-xl border ${card} px-4 py-3 bg-transparent outline-none focus:ring-2 focus:ring-cyan-400 ${text}`} defaultValue="">
                  <option value="" disabled className="text-slate-500">Select a range</option>
                  <option value="under-5">Under $5k</option>
                  <option value="5-15">$5k – $15k</option>
                  <option value="15-50">$15k – $50k</option>
                  <option value="50+">$50k+</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm mb-1 ${sub}`}>Message</label>
                <textarea rows={4} className={`w-full rounded-xl border ${card} px-4 py-3 bg-transparent outline-none focus:ring-2 focus:ring-cyan-400 ${text}`} placeholder="What are you building?" />
              </div>
              <button type="submit" className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-900 font-semibold shadow hover:opacity-95 transition">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
