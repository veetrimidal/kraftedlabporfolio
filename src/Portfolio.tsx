import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { projects, services, method } from './data/krafted'
import { brand, socialLinks, caseStudies } from './data/website'
import {
  ApplyButton,
  ClientWork,
  CaseStudyPage,
  Timeline,
  Testimonials,
  FAQ,
  Resources,
  OfferLayers,
  Guarantee,
} from './WebsiteContent'

const Arrow = () => <span aria-hidden="true">↗</span>
const nav = [
  ['/', 'Overview', '◈'],
  ['/projects', 'Selected work', '▦'],
  ['/services', 'Work with me', '↗'],
  ['/about', 'The story', '◉'],
  ['/method', 'The method', '⌘'],
  ['/testimonials', 'Client stories', '❝'],
  ['/resources', 'Learn & build', '↗'],
  ['/lab', 'Inside the Lab', '✳'],
]
function ProjectArt({ kind }: { kind: string }) {
  return (
    <div className={`project-art ${kind}`} aria-hidden="true">
      {kind === 'os' ? (
        <div className="mini-app">
          <div className="mini-sidebar">
            <b>k.</b>
            <span>Overview</span>
            <span>Brand core</span>
            <span>Messaging</span>
            <span>Assets</span>
          </div>
          <div className="mini-main">
            <small>YOUR BRAND, CONNECTED.</small>
            <strong>
              Good ideas.
              <br />
              One home.
            </strong>
            <div className="mini-blocks">
              <i>
                01
                <br />
                CORE
              </i>
              <i>
                02
                <br />
                VOICE
              </i>
              <i>
                03
                <br />
                SYSTEM
              </i>
            </div>
          </div>
        </div>
      ) : kind === 'brandie' ? (
        <>
          <span className="brandie-flower">✳</span>
          <div className="chat-bubble">
            Let's find what makes
            <br />
            your brand, <em>yours.</em>
          </div>
          <small>STRATEGY MEETS POSSIBILITY.</small>
        </>
      ) : kind === 'method' ? (
        <>
          <div className="method-letters">
            K R A F<br />T E D <span>↗</span>
          </div>
          <small>INTENTION AT EVERY STEP.</small>
        </>
      ) : (
        <>
          <div className="growth-diagram">
            BRAND <span>↘</span>
            <br />
            <i>CONTENT</i> <span>↘</span>
            <br />
            FUNNEL <span>↗</span>
          </div>
          <small>THE PIECES WORK BETTER TOGETHER.</small>
        </>
      )}
    </div>
  )
}
function Projects({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<string | null>(null)
  const active = projects.find((p) => p.id === selected)
  return (
    <>
      <div className="section-head">
        <div>
          <p className="eyebrow">THE KRAFTED ECOSYSTEM</p>
          <h2>
            Ideas, turned into systems<span className="orange">.</span>
          </h2>
        </div>
        {compact && (
          <Link className="text-link" to="/lab">
            Explore the Lab <Arrow />
          </Link>
        )}
      </div>
      {!compact && (
        <div className="filters" aria-label="Filter projects">
          {['All', 'Systems', 'AI & tools', 'Strategy'].map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      )}
      <div className="project-grid">
        {projects
          .filter((p) => filter === 'All' || p.category === filter)
          .slice(0, compact ? 2 : 4)
          .map((p) => (
            <button className="project-card" key={p.id} onClick={() => setSelected(p.id)}>
              <ProjectArt kind={p.style} />
              <div className="project-caption">
                <div>
                  <small>{p.label}</small>
                  <h3>{p.name}</h3>
                </div>
                <span className="round-arrow">
                  <Arrow />
                </span>
              </div>
            </button>
          ))}
      </div>
      {active && (
        <dialog
          open
          className="project-dialog"
          aria-labelledby="project-title"
          ref={(el) => {
            if (el && !el.matches(':modal')) {
              el.close()
              el.showModal()
            }
          }}
          onCancel={() => setSelected(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null)
          }}
        >
          <button
            autoFocus
            className="dialog-close"
            onClick={() => setSelected(null)}
            aria-label="Close project"
          >
            ×
          </button>
          <ProjectArt kind={active.style} />
          <div className="dialog-copy">
            <p className="eyebrow">{active.label}</p>
            <h2 id="project-title">{active.name}</h2>
            <h3>{active.subtitle}</h3>
            <p>{active.description}</p>
            <div className="focus-line">{active.focus}</div>
            <p>{active.takeaway}</p>
            <Link className="button primary" to="/contact" onClick={() => setSelected(null)}>
              Build your system <Arrow />
            </Link>
          </div>
        </dialog>
      )}
    </>
  )
}
function Home() {
  return (
    <>
      <section className="hero live-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> BRAND × FUNNEL × GROWTH SYSTEMS
          </p>
          <h1>
            We kraft profitable
            <br />
            <em>brand systems</em>
            <br />
            for founders<span className="orange">.</span>
          </h1>
          <p className="lede">
            We'll turn your founder expertise into a brand, content, and funnel system krafted to
            turn your influence into profit—in six weeks.
          </p>
          <div className="actions">
            <ApplyButton label="Get KRAFTED" />
            <Link className="text-link" to="/projects">
              See the work <Arrow />
            </Link>
          </div>
          <p className="hero-footnote">Your vision. Our kraft. One connected system.</p>
        </div>
        <div className="founder-hero">
          <span className="founder-orbit" />
          <span className="founder-label">
            STRATEGIST.
            <br />
            BUILDER.
            <br />
            STILL LEARNING.
          </span>
          <img
            src={brand.portrait}
            alt="Vee Trimidal, founder of Krafted Lab"
            fetchPriority="high"
          />
          <div className="founder-caption">
            <div>
              <strong>Hey, I'm Vee.</strong>
              <span>The human behind the Lab.</span>
            </div>
            <Link to="/about" aria-label="Meet Vee">
              ↗
            </Link>
          </div>
          <span className="founder-spark" aria-hidden="true">
            ✳
          </span>
        </div>
      </section>
      <div className="principle-strip">
        <span>THE B2PRO™ SYSTEM</span>
        <p>
          Brand <b>↗</b> Content <b>↗</b> Funnel <b>↗</b> Growth
        </p>
        <span>YOUR VISION. OUR KRAFT!</span>
      </div>
      <section className="section">
        <ClientWork compact />
      </section>
      <section className="section system-section">
        <p className="eyebrow">THE COMPLETE SYSTEM</p>
        <h2>
          Here's what we can <span className="accent-word">kraft together.</span>
        </h2>
        <p className="section-intro">
          Three connected layers, from first impression to the next conversation.
        </p>
        <OfferLayers />
        <div className="actions">
          <Link to="/services" className="button primary">
            Explore the offer <Arrow />
          </Link>
        </div>
      </section>
      <section className="section">
        <Timeline compact />
      </section>
      <section className="section">
        <Testimonials compact />
      </section>
      <section className="manifesto">
        <p className="eyebrow">YOU BUILT THE BUSINESS.</p>
        <h2>
          Now build <em>the systems.</em>
        </h2>
        <p>
          Give your expertise a clear brand, your offer a focused website, and your inquiries a
          connected next step.
        </p>
        <ApplyButton label="Book your Brand-to-Profit call" />
      </section>
    </>
  )
}
function Services() {
  return (
    <section className="page">
      <p className="eyebrow">THE B2PRO™ SYSTEM / BRAND TO PROFIT</p>
      <h1>
        Your expertise.
        <br />
        <em>A connected growth system.</em>
      </h1>
      <p className="lede">
        You have the vision, the expertise, and the offer. We connect the brand, content, website,
        and follow-up around them—in a focused six-week build.
      </p>
      <ApplyButton />
      <OfferLayers />
      <Timeline />
      <Guarantee />
      <section className="fit-section">
        <div>
          <p className="eyebrow">IS KRAFTED LAB RIGHT FOR YOU?</p>
          <h2>
            You've built the expertise.
            <br />
            Let's build what supports it.
          </h2>
          <p>
            This is for founders with expertise and an offer who are ready to connect the systems
            around them.
          </p>
        </div>
        <ul>
          {[
            'Your brand no longer reflects the quality of your work.',
            'People discover you but struggle to understand your offer.',
            'Your website needs a clearer path to inquiry or booking.',
            'You handle too much of the customer journey manually.',
            'You want your brand, content, and funnel to work together.',
          ].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <div className="section-head">
        <div>
          <p className="eyebrow">INDIVIDUAL SERVICES</p>
          <h2>The right pieces for your next chapter.</h2>
        </div>
      </div>
      <div className="service-grid">
        {services.map((s, i) => (
          <article className="service-card" key={s.name}>
            <div className="service-top">
              <span>{s.icon}</span>
              <small>0{i + 1}</small>
            </div>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
            <small>{s.items}</small>
            <Link to={`/contact?service=${encodeURIComponent(s.name)}`} className="text-link">
              Let's talk about it <Arrow />
            </Link>
          </article>
        ))}
      </div>
      <FAQ />
      <div className="note">
        <h2>You bring the vision. We'll kraft the system.</h2>
        <p>
          Bring your business context and timely feedback. We'll guide the strategy, agree the
          scope, and build the connected experience.
        </p>
        <ApplyButton />
      </div>
    </section>
  )
}
function About() {
  return (
    <section className="page">
      <p className="eyebrow">THE HUMAN BEHIND THE LAB</p>
      <h1>
        Hi, I'm Vee.
        <br />
        <em>I build what I know.</em>
      </h1>
      <p className="lede">
        Personal Brand Strategist. Systems Builder. The founder of Krafted Lab—and a teacher at
        heart.
      </p>
      <div className="story-grid">
        <div className="story-statement">
          <img className="story-portrait" src={brand.portrait} alt="Vee Trimidal" loading="lazy" />
          <div>
            I started by selling
            <br />
            what I could <em>do.</em>
            <br />
            <br />
            Now I'm building
            <br />
            around what I <em>know.</em>
            <span>VEE TRIMIDAL / FOUNDER</span>
          </div>
        </div>
        <div className="story-copy">
          <h2>
            The same creative DNA.
            <br />A bigger vision.
          </h2>
          <p>
            Teaching taught me to simplify ideas. Freelancing taught me to make things. Design,
            websites, content, and funnels taught me to see how the pieces connect.
          </p>
          <p>
            The VeeCrafts was the home for that creative work. As the questions grew—from “How
            should this look?” to “How should this work?”—the vision grew with them.
          </p>
          <p>
            That evolution became Krafted Lab: a brand and growth systems studio, built around
            turning expertise into something clear, connected, and useful.
          </p>
          <p>
            I don't claim that I know it all. I'm still learning, experimenting, and building. I
            share the process because I want you to see what you can build, too.
          </p>
        </div>
      </div>
      <section className="founder-origin">
        <p className="eyebrow">WHY I STARTED KRAFTED LAB</p>
        <h2>The pieces were there. The connection wasn't.</h2>
        <p>
          I watched talented founders get attention but lose momentum. Their content got views, but
          inquiries were inconsistent. Their websites looked fine, but visitors still had questions
          the site should have answered.
        </p>
        <p>
          The problem wasn't effort or expertise. Brand, website, content, and follow-up were
          working in isolation. That's why I built Krafted Lab around the B2PRO™ System: a six-week
          process that connects the pieces around the founder, the offer, and the season of business
          they're actually in.
        </p>
        <div className="social-links">
          {socialLinks.map((l) => (
            <a href={l.url} key={l.name}>
              {l.name} ↗
            </a>
          ))}
        </div>
      </section>
      <div className="note">
        <p className="eyebrow">THE BELIEF THAT CONNECTS IT ALL</p>
        <h2>Your skill isn't your ceiling.</h2>
        <p>
          Whether you're a founder with expertise or a freelancer ready for your next chapter,
          there's more you can build around what you already know.
        </p>
      </div>
    </section>
  )
}
function Method() {
  return (
    <section className="page">
      <p className="eyebrow">THE KRAFTED METHOD™</p>
      <h1>
        Nothing random.
        <br />
        <em>Everything connected.</em>
      </h1>
      <p className="lede">
        Seven intentional stages. One working brand system. This is how strategy becomes something
        you can actually use.
      </p>
      <div className="method-list">
        {method.map(([letter, title, description], i) => (
          <details key={letter} open={i === 0}>
            <summary>
              <span className="method-letter">{letter}</span>
              <h2>{title}</h2>
              <span className="expand">+</span>
            </summary>
            <p>{description}</p>
          </details>
        ))}
      </div>
      <div className="note">
        <p className="eyebrow">B2PRO™ / THE BIGGER PICTURE</p>
        <h2>Brand → Content → Funnel → Sales → Profit</h2>
        <p>The method builds the foundation. B2Pro connects it to the growth engine.</p>
      </div>
    </section>
  )
}
function Contact() {
  const { search } = useLocation()
  const initial = new URLSearchParams(search).get('service') || services[0].name
  const [copied, setCopied] = useState(false)
  const [brief, setBrief] = useState('')
  const contact = import.meta.env.VITE_PUBLIC_CONTACT_URL || brand.apply
  return (
    <section className="page contact-page">
      <p className="eyebrow">YOUR VISION. OUR KRAFT!</p>
      <h1>
        What are you
        <br />
        <em>building next?</em>
      </h1>
      <p className="lede">
        Start with the idea, the challenge, or the pieces that aren't connecting yet. Let's put it
        into words.
      </p>
      <div className="contact-options">
        <a className="contact-option" href={brand.apply}>
          <span>01 / LET'S TALK STRATEGY</span>
          <h2>Book a Brand-to-Profit call ↗</h2>
          <p>Discuss your offer, review your current setup, and find the gaps worth addressing.</p>
        </a>
        <a className="contact-option" href={`mailto:${brand.email}`}>
          <span>02 / DROP A NOTE</span>
          <h2>{brand.email} ↗</h2>
          <p>Share your vision or ask about a custom project.</p>
        </a>
        <a className="contact-option" href={brand.whatsapp}>
          <span>03 / SAY HELLO</span>
          <h2>Chat on WhatsApp ↗</h2>
          <p>+63 946 749 7070 · Philippines, GMT+8</p>
        </a>
      </div>
      <div className="section-head">
        <div>
          <p className="eyebrow">A HEAD START FOR OUR CONVERSATION</p>
          <h2>Put your idea into a project brief.</h2>
        </div>
      </div>
      <form
        className="brief-form"
        onSubmit={(e) => {
          e.preventDefault()
          const data = new FormData(e.currentTarget)
          setBrief(
            `Project brief\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nFocus: ${data.get('service')}\n\n${data.get('message')}`,
          )
          setCopied(false)
        }}
      >
        <div className="form-row">
          <label>
            Your name
            <input
              name="name"
              required
              maxLength={80}
              autoComplete="name"
              placeholder="What should I call you?"
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@yourbusiness.com"
            />
          </label>
        </div>
        <label>
          What needs to work?
          <select name="service" defaultValue={initial}>
            {services.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
            <option>I'm still figuring it out</option>
          </select>
        </label>
        <label>
          A little about your vision
          <textarea
            name="message"
            required
            rows={4}
            maxLength={5000}
            placeholder="What are you building, and where are you getting stuck?"
          />
        </label>
        <button className="button primary" type="submit">
          Create my project brief <Arrow />
        </button>
        <p className="form-note">
          This prepares a brief on your device. Nothing is sent or stored on a server.
        </p>
      </form>
      {brief && (
        <div className="brief-result" aria-live="polite">
          <h2>Your starting point.</h2>
          <pre>{brief}</pre>
          <button
            className="button primary"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(brief)
                setCopied(true)
              } catch {
                setCopied(false)
              }
            }}
          >
            {copied ? 'Copied!' : 'Copy project brief'}
          </button>
          <a
            className="button secondary"
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(brief)}`}
            download="krafted-project-brief.txt"
          >
            Download brief ↓
          </a>
          <a
            className="button secondary"
            href={`mailto:${brand.email}?subject=${encodeURIComponent('Let’s kraft my project')}&body=${encodeURIComponent(brief)}`}
          >
            Email this brief ↗
          </a>
          {contact ? (
            <a className="text-link" href={contact}>
              Connect with Vee <Arrow />
            </a>
          ) : (
            <p>Keep this brief ready to share with Vee through your existing conversation.</p>
          )}
        </div>
      )}
    </section>
  )
}
export default function Portfolio() {
  const location = useLocation()
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    setMenu(false)
    const project = caseStudies.find((p) => location.pathname === `/case-studies/${p.id}`)
    const pageTitle =
      project?.name ||
      nav.find((n) => n[0] === location.pathname)?.[1] ||
      (location.pathname === '/contact' ? 'Let’s build' : 'Page not found')
    document.title = `${pageTitle} — Vee Trimidal · Krafted Lab`
  }, [location.pathname])
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <aside className="sidebar">
        <Link to="/" className="wordmark" aria-label="Krafted Lab home">
          <img src={brand.mark} alt="" />
          <img src={brand.logo} alt="Krafted Lab" />
        </Link>
        <div className="sidebar-profile">
          <img className="profile-photo" src={brand.avatar} alt="Vee Trimidal" />
          <h2>Vee Trimidal</h2>
          <p>
            Personal Brand Strategist
            <br />& Systems Builder
          </p>
          <span className="location">↗ Based in the Philippines</span>
        </div>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? 'Close ×' : 'Menu ☰'}
        </button>
        <nav className={menu ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          {nav.map(([to, label, icon]) => (
            <NavLink end key={to} to={to}>
              <span aria-hidden="true">{icon}</span>
              {label}
              <span className="nav-arrow">↗</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <p>
            Good ideas deserve
            <br />a system behind them.
          </p>
          <Link to="/contact" className="button primary">
            Let's kraft it <Arrow />
          </Link>
          <small>STRATEGY × CREATIVITY × SYSTEMS</small>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <span>
            THE PORTFOLIO / <b>KRAFTED LAB</b>
          </span>
          <Link to="/contact">
            Have something in mind? <Arrow />
          </Link>
        </header>
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/lab"
              element={
                <section className="page">
                  <p className="eyebrow">BUILDING IN PUBLIC</p>
                  <h1>
                    Welcome to
                    <br />
                    <em>the working Lab.</em>
                  </h1>
                  <p className="lede">
                    Products, frameworks, and experiments from the Krafted ecosystem. A look at what
                    I'm building and the thinking behind it.
                  </p>
                  <Projects />
                </section>
              }
            />
            <Route
              path="/projects"
              element={
                <section className="page">
                  <p className="eyebrow">THE WORK / BRAND × FUNNEL × CONTENT</p>
                  <h1>
                    Real brands.
                    <br />
                    <em>Connected systems.</em>
                  </h1>
                  <p className="lede">
                    Explore the strategy, design, and implementation behind the work. Eight case
                    studies from the Krafted Lab portfolio.
                  </p>
                  <ClientWork />
                </section>
              }
            />
            <Route path="/case-studies/:id" element={<CaseStudyPage />} />
            <Route
              path="/testimonials"
              element={
                <section className="page">
                  <p className="eyebrow">CLIENT STORIES</p>
                  <h1>
                    Krafted together.
                    <br />
                    <em>In their words.</em>
                  </h1>
                  <p className="lede">
                    Feedback from the founders, clients, and collaborators behind the work.
                  </p>
                  <Testimonials />
                </section>
              }
            />
            <Route path="/resources" element={<Resources />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/method" element={<Method />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <section className="page">
                  <p className="eyebrow">404 / OUTSIDE THE LAB</p>
                  <h1>
                    Let's find
                    <br />
                    <em>your way back.</em>
                  </h1>
                  <Link to="/" className="button primary">
                    Back to overview <Arrow />
                  </Link>
                </section>
              }
            />
          </Routes>
        </main>
        <section className="site-footer">
          <div>
            <h2>
              krafted<span>lab.</span>
            </h2>
            <p>We kraft profitable brand systems for founders.</p>
            <span>Your Vision. Our Kraft!</span>
          </div>
          <div>
            <h3>EXPLORE</h3>
            <Link to="/projects">Selected work</Link>
            <Link to="/services">B2PRO™ System</Link>
            <Link to="/resources">Value Vault & Akademy</Link>
          </div>
          <div>
            <h3>LET'S CONNECT</h3>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={brand.whatsapp}>WhatsApp ↗</a>
            <a href={brand.apply}>Book a strategy call ↗</a>
          </div>
        </section>
        <footer>
          <span>© {new Date().getFullYear()} Krafted Lab</span>
          <span>Still learning. Still building.</span>
          <Link to="/contact">
            Your next chapter starts here <Arrow />
          </Link>
        </footer>
      </div>
    </>
  )
}
