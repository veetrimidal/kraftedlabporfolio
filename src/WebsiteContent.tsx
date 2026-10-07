import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  brand,
  caseStudies,
  courses,
  faqs,
  resources,
  testimonials,
  timeline,
} from './data/website'

export function ApplyButton({ label = 'Apply to work with Krafted Lab' }: { label?: string }) {
  return (
    <a href={brand.apply} className="button primary">
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
export function ClientWork({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState('All')
  const visible = caseStudies
    .filter((p) => filter === 'All' || p.categoryGroup === filter)
    .slice(0, compact ? 4 : undefined)
  return (
    <section className="client-work">
      <div className="section-head">
        <div>
          <p className="eyebrow">SELECTED CLIENT WORK</p>
          <h2>
            Built with purpose. <span className="accent-word">Krafted to work.</span>
          </h2>
        </div>
        {compact && (
          <Link to="/projects" className="text-link">
            All case studies ↗
          </Link>
        )}
      </div>
      {!compact && (
        <div className="filters" aria-label="Filter case studies">
          {['All', 'Brand', 'Funnels', 'Website', 'Content'].map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      )}
      <div className="client-grid">
        {visible.map((p) => (
          <Link to={`/case-studies/${p.id}`} className="client-card" key={p.id}>
            <div className="client-image">
              <img src={p.thumbnail} alt={p.name} loading="lazy" />
              <span className="result-badge">{p.metrics}</span>
            </div>
            <div className="client-copy">
              <p className="eyebrow">{p.category}</p>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="text-link">Read the case study ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export function CaseStudyPage() {
  const { id } = useParams()
  const project = caseStudies.find((p) => p.id === id)
  if (!project)
    return (
      <section className="page">
        <h1>Project not found.</h1>
        <Link to="/projects" className="button primary">
          Explore selected work ↗
        </Link>
      </section>
    )
  return (
    <article className="page case-page">
      <Link to="/projects" className="text-link">
        ← Back to selected work
      </Link>
      <p className="eyebrow">{project.category}</p>
      <h1>{project.name}</h1>
      <p className="lede">{project.description}</p>
      <div className="case-meta">
        <strong>{project.metrics}</strong>
        <span>{project.tags.join(' / ')}</span>
      </div>
      <img className="case-cover" src={project.thumbnail} alt={project.name} />
      {project.beforeImage && project.afterImage && (
        <div className="before-after">
          <figure>
            <figcaption>BEFORE</figcaption>
            <img
              src={project.beforeImage}
              alt="MyStudio website before the revamp"
              loading="lazy"
            />
          </figure>
          <figure>
            <figcaption>AFTER</figcaption>
            <img src={project.afterImage} alt="MyStudio website after the revamp" loading="lazy" />
          </figure>
        </div>
      )}
      <div className="case-body">
        {project.fullContent.map((s, i) => (
          <section key={`${i}-${s.heading}`}>
            <p className="eyebrow">{String(i + 1).padStart(2, '0')} / THE CASE STUDY</p>
            <h2>{s.heading}</h2>
            {s.body && <p>{s.body}</p>}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {s.bodyAfter && <p>{s.bodyAfter}</p>}
            {s.image && (
              <figure>
                <img src={s.image} alt={s.imageCaption || s.heading} loading="lazy" />
                {s.imageCaption && <figcaption>{s.imageCaption}</figcaption>}
              </figure>
            )}
          </section>
        ))}
      </div>
      <a className="text-link source-link" href={`${brand.site}/case-studies/${project.id}`}>
        View original case study on kraftedlab.co ↗
      </a>
      <div className="note">
        <h2>What could we build for your business?</h2>
        <ApplyButton />
      </div>
    </article>
  )
}
export function Timeline({ compact = false }: { compact?: boolean }) {
  const [week, setWeek] = useState(0)
  const active = timeline[week]
  return (
    <section className="timeline-section">
      <div className="section-head">
        <div>
          <p className="eyebrow">HOW IT WORKS / B2PRO™ SYSTEM</p>
          <h2>
            From expertise to a working system.
            <br />
            <span className="accent-word">Six weeks. One connected journey.</span>
          </h2>
        </div>
        <span className="timeline-stamp">
          BRAND
          <br />
          TO PROFIT ↗
        </span>
      </div>
      <p className="section-intro">
        Turn your founder expertise into a clear brand, consistent content, and a funnel that guides
        the right people toward your offer.
      </p>
      <div className="week-tabs" aria-label="Choose a B2PRO week">
        {timeline.map((w, i) => (
          <button key={w.week} aria-pressed={i === week} onClick={() => setWeek(i)}>
            <small>WEEK {w.week}</small>
            <span>{w.focus}</span>
          </button>
        ))}
      </div>
      <div className="week-panel" aria-live="polite">
        <span className="week-number">0{active.week}</span>
        <div>
          <p className="eyebrow">THE FOCUS</p>
          <h3>{active.focus}</h3>
          <p>{active.whatHappens}</p>
          <div className="week-outcome">
            <small>END-OF-WEEK OUTCOME</small>
            <p>{active.outcome}</p>
          </div>
        </div>
      </div>
      <p className="timeline-note">
        The six-week promise is a connected system ready to attract and convert leads. Revenue
        depends on the offer, traffic, sales process, and launch data.
      </p>
      {compact && (
        <Link className="text-link" to="/services">
          Explore the full offer ↗
        </Link>
      )}
    </section>
  )
}
export function Testimonials({ compact = false }: { compact?: boolean }) {
  return (
    <section className="testimonials-section">
      <div className="section-head">
        <div>
          <p className="eyebrow">KIND WORDS FROM CLIENTS</p>
          <h2>The people behind the projects.</h2>
        </div>
        {compact && (
          <Link className="text-link" to="/testimonials">
            All client stories ↗
          </Link>
        )}
      </div>
      <div className="testimonial-grid">
        {testimonials.slice(0, compact ? 3 : undefined).map((t) => (
          <article className="quote-card" key={t.id}>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{t.quote}</blockquote>
            <div className="quote-person">
              <span className="quote-avatar">
                {t.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <div>
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </div>
            </div>
            {!compact && (
              <details>
                <summary>
                  Read the full story <span>+</span>
                </summary>
                <p>{t.fullTestimonial}</p>
                {t.mediaType === 'video' ? (
                  <video
                    controls
                    playsInline
                    preload="none"
                    src={t.mediaUrl}
                    aria-label={`Testimonial from ${t.name}`}
                  />
                ) : (
                  <img src={t.mediaUrl} alt={`Client feedback from ${t.name}`} loading="lazy" />
                )}
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
export function FAQ() {
  return (
    <section className="faq-section">
      <p className="eyebrow">A LITTLE MORE CLARITY</p>
      <h2>Before we build together.</h2>
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span>+</span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  )
}
export function Resources() {
  return (
    <section className="page resources-page">
      <p className="eyebrow">LEARN IT. BUILD IT. KRAFT IT.</p>
      <h1>
        A little knowledge.
        <br />
        <em>A lot of possibility.</em>
      </h1>
      <p className="lede">
        Free value krafts and guided courses from the Krafted ecosystem. Take the thinking, use the
        tools, and build something of your own.
      </p>
      <div className="section-head">
        <div>
          <p className="eyebrow">THE KRAFTED VAULT</p>
          <h2>Free value krafts, all guilt-free.</h2>
        </div>
        <a href={`${brand.site}/valuevault`} className="text-link">
          Open the Value Vault ↗
        </a>
      </div>
      <div className="resource-grid">
        {resources.map((r) => (
          <article key={r.name} className="resource-card">
            <div className="resource-icon" aria-hidden="true">
              {r.icon}
            </div>
            <p className="eyebrow">{r.type}</p>
            <h3>{r.name}</h3>
            <p>{r.description}</p>
            {r.url ? (
              <a href={r.url} className="text-link">
                Explore the resource ↗
              </a>
            ) : (
              <span className="coming-soon">In development</span>
            )}
          </article>
        ))}
      </div>
      <section className="akademy-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">KRAFTED AKADEMY</p>
            <h2>Paid courses that kraft real skills.</h2>
          </div>
          <a href={`${brand.site}/akademy`} className="text-link">
            Explore the Akademy ↗
          </a>
        </div>
        <div className="course-grid">
          {courses.map((c) => (
            <article key={c.name} className="course-card">
              <div className="course-art" aria-hidden="true">
                <span>{c.icon}</span>
                <small>LEARN → BUILD → LAUNCH</small>
              </div>
              <div className="course-copy">
                <p className="eyebrow">GUIDED, PROJECT-BASED LEARNING</p>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <small>{c.detail}</small>
                <div className="course-bottom">
                  <strong>{c.price}</strong>
                  <a href={c.url} className="button primary">
                    View course ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="form-note">
          Course prices shown on kraftedlab.co when this portfolio was updated. Check the course
          page for current pricing and access.
        </p>
      </section>
    </section>
  )
}
export function OfferLayers() {
  const layers = [
    [
      '01',
      'A brand people understand.',
      'Clarify who you serve, what makes your offer valuable, and how to communicate it. Bring that message to life with a visual identity that feels unmistakably like you.',
      'Positioning × Story × Identity',
    ],
    [
      '02',
      'A website that guides the next step.',
      'Give your offer a clear home with pages that explain what you do, answer buying questions, and guide visitors toward an inquiry, booking, or purchase.',
      'Website × Funnel × Customer journey',
    ],
    [
      '03',
      'Follow-up that keeps things moving.',
      'Connect your forms, booking flow, CRM, and email follow-up so every new inquiry has a next step, with less manual chasing.',
      'Forms × CRM × Automation',
    ],
  ]
  return (
    <div className="offer-layers">
      {layers.map(([n, title, body, tags]) => (
        <article key={n}>
          <span className="layer-number">{n}</span>
          <h3>{title}</h3>
          <p>{body}</p>
          <small>{tags}</small>
        </article>
      ))}
    </div>
  )
}
export function Guarantee() {
  return (
    <section className="guarantee">
      <span aria-hidden="true">↗</span>
      <div>
        <p className="eyebrow">THE SIX-WEEK DELIVERY GUARANTEE</p>
        <h2>A working system. On a deadline.</h2>
        <p>
          We build your full funnel and content system in six weeks. If it’s not live and running by
          then, you get a full refund.
        </p>
        <a href={brand.apply} className="text-link">
          Discuss your scope and timeline ↗
        </a>
      </div>
    </section>
  )
}
