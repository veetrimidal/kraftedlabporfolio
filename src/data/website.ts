// Public content from https://www.kraftedlab.co/, retrieved 2026-10-07.
export type CaseSection = {
  heading: string
  body?: string
  bullets?: string[]
  bodyAfter?: string
  image?: string
  imageCaption?: string
}
export type CaseStudy = {
  id: string
  name: string
  category: string
  categoryGroup: string
  description: string
  thumbnail: string
  metrics: string
  tags: string[]
  beforeImage?: string
  afterImage?: string
  fullContent: CaseSection[]
}
export const caseStudies: CaseStudy[] = [
  {
    id: 'proj-flagship',
    name: 'Build Your First Funnel Challenge',
    category: 'FLAGSHIP CASE STUDY',
    categoryGroup: 'Funnels',
    description:
      'Client: Coach Darla (Funnels Mastery Academy) — Complete conversion-ready funnel system with 656 students enrolled at launch.',
    thumbnail:
      'https://storage.googleapis.com/msgsndr/G2e0HeGpH7rHjayK4Sp0/media/a35970ef-5a92-4b16-a0b2-e037f273ae13.png',
    metrics: '₱655,344 Revenue',
    tags: ['Challenge Funnel', '656 Students', 'Evergreen'],
    fullContent: [
      {
        heading: 'Case Study',
        body: 'I help Coaches like Coach Darla turn their big ideas into high-converting, purpose-driven funnels that bring their message to life and their offers to the right audience.',
      },
      {
        heading: 'Project Overview',
        body: 'When Coach Darla prepared to launch her new course, Build Your First Funnel Challenge, she had:',
        bullets: ['Her course idea', 'Her curriculum', 'Her copy written'],
        bodyAfter:
          '…but no actual funnel design.\n\nNo pages. No layout. No structure. No user flow. Nothing that visually communicated value or guided prospects toward enrollment.\n\nShe contacted me to transform her raw copy into a fully designed, conversion-ready Funnel System that looked premium, matched her authority, and maximized conversions for the launch.\n\nMy role: Architect the entire funnel design from scratch, using sales psychology, behavior-driven layout, and premium visual communication.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/8b7da3db-60db-422c-9fc5-7c20cfed1104.png',
        imageCaption:
          'BYFFC Moodboard: Developing the high-energy visual system, emblem identity, page layouts, and social media creative foundation.',
      },
      {
        heading: 'The First Launch Results',
        body: 'Once the funnel design was completed and launched, the results spoke for themselves.\n\n📈 Enrollees: 656 Students\n\nThe ₱997 challenge generated ₱655,344 in total revenue (rounded to ₱655K).',
        bullets: [
          'Achieved an estimated 7% to 10% conversion rate',
          'Surpassed industry averages for low-ticket paid challenges',
          'Maintained ₱0 acquisition cost (organic-driven funnel flow)',
        ],
        bodyAfter:
          "Engagement Metrics:\n\n• High engagement inside the challenge\n• Strong satisfaction-driven referrals\n• Momentum that boosted her next launch\n\nThe funnel didn't need a redesign — it needed a design, period. And that design elevated everything.",
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/ec284e2f-e17c-4c26-8003-0c4e7abdaee7.png',
        imageCaption:
          'Launch Deliverables & Offer Stack: Turning the course curriculum and bonus breakdown into high-converting visual assets.',
      },
      {
        heading: 'Transition Into Evergreen',
        body: 'Because the funnel design was built with clarity, simplicity, and decision psychology, the system smoothly transitioned into an evergreen model.',
        bullets: [
          'Streamlined visuals for automated use',
          'Strengthened the flow for long-term consistency',
          'Ensured that the journey felt intuitive even without a live hype cycle',
          'Enhanced CTA placement for recurring conversions',
        ],
        bodyAfter:
          'The result:\n\n✔ A repeatable evergreen Funnel System\n✔ Multiple six-figure revenue over repeated cycles\n✔ A reliable enrollment engine she could turn on anytime',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/f6d233a8-b088-405e-93d1-e8609d6b2853.png',
        imageCaption:
          'Organic Funnel Driver: Social-first curiosity hook and bonus stacking that propelled high organic conversion rates.',
      },
      {
        heading: 'Summary',
        body: 'Coach Darla had:',
        bullets: ['Her offer', 'Her copy', 'Her vision'],
        bodyAfter:
          "What she didn't have was a funnel design that communicated value, guided behavior, and converted traffic into paid students.\n\nWith Krafted Lab Funnel Design:\n\n✓ 656 students enrolled in the first launch\n✓ ₱655K revenue at ₱997\n✓ A premium funnel experience built from zero design\n✓ Evolved into a repeatable evergreen system\n✓ Multiple six figures across cycles\n\nThis case study shows what happens when raw copy meets strategic funnel design grounded in sales psychology.",
      },
    ],
  },
  {
    id: 'proj-craftedlive',
    name: 'CRAFTED Live — Webinar Funnel System',
    category: 'WEBINAR FUNNEL & AUTOMATION',
    categoryGroup: 'Funnels',
    description:
      'A complete webinar funnel system — high-converting registration page, game-inspired brand visuals, backend automations, and nurture sequences that generated 1,583 registrations.',
    thumbnail:
      'https://vibe.filesafe.space/1787943656363336634/attachments/92d88556-60d6-4677-8286-23e0e4cf98a3.png',
    metrics: '1,583 Registrations',
    tags: ['Webinar Funnel', 'Landing Page', 'Email Automation', 'Conversion Flow'],
    fullContent: [
      {
        heading: 'Project Focus',
        body: 'Project: CRAFTED Live, “Brand Visuals That Convert”\nScope: Webinar landing page, registration flow, backend automations, and nurture emails\nResult: 1,583 registrations\nBy: Krafted Lab',
      },
      {
        heading: 'Overview',
        body: 'CRAFTED Live was a training for creatives and business owners who were tired of making content that looked good but did little to bring in clients. The promise was specific: learn how to design brand visuals that guide people toward a decision, rather than collecting likes alone.\n\nTo bring that training to the right people, I built a webinar funnel that made the offer clear and kept the conversation going after someone registered.',
      },
      {
        heading: 'The Challenge',
        body: 'A registration page can get someone to sign up. It cannot, by itself, keep them engaged until webinar day.\n\nThe funnel needed to speak to people who had plenty of ideas but felt their brand was inconsistent or unclear. It also needed a backend journey that would support registrants between sign-up and the live session.',
      },
      {
        heading: 'The Approach',
        body: 'I gave CRAFTED Live a playful, game-inspired identity with bright green, orange, pixel details, and direct copy. The page walks visitors from a familiar frustration, “my visuals look okay, but they aren’t converting,” to the shift the webinar teaches: making visuals function as part of a sales process.\n\nThe registration flow was supported by backend automations and nurture emails leading up to webinar day. That meant the experience continued after someone clicked “Reserve My Spot”, with planned communication to keep the training relevant and help registrants remember to attend.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/92d88556-60d6-4677-8286-23e0e4cf98a3.png',
        imageCaption:
          'CRAFTED Live Landing Page: Playful retro-game aesthetic, high-contrast CTA, clear curriculum breakdown, and urgent scarcity cues.',
      },
      {
        heading: 'What I Built',
        body: 'A complete end-to-end registration and retention system:',
        bullets: [
          'A focused landing page that explains who the training is for, what attendees will learn, and why visual strategy matters to conversion.',
          'Repeated registration opportunities placed throughout the page as visitors learn more about the offer.',
          'A webinar registration workflow that captures sign-ups and connects them directly to the backend journey.',
          'Nurture emails and timed automations that communicate with registrants through to webinar day.',
        ],
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/e3239c15-3165-4bc5-9bac-d433ae1613ef.png',
        imageCaption:
          'Backend Registration & Nurture Architecture: Immediate confirmation, event calendar sync, and progressive countdown reminders (24h, 4h, 1h).',
      },
      {
        heading: 'Live Session & Post-Webinar Automation',
        body: 'To maximize live attendance and catch anyone who missed the room, the backend sequence timed notifications down to the minute and delivered immediate follow-ups.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/d3a8f43f-1ebc-4d4c-8d24-c997c99df43f.png',
        imageCaption:
          'Show-up Sequence: 5-minute reminder, live room starting announcement, and post-event replay / follow-up flow.',
      },
      {
        heading: 'The Result',
        body: 'CRAFTED Live generated 1,583 registrations across launch cycles (1,452 and 131 sign-ups recorded in the dashboard).\n\nThis result measures sign-ups. Attendance, sales, and downstream conversion figures are not included here. What the project demonstrates is a complete registration system: a distinctive offer, a page designed to earn the sign-up, and an automated follow-through built to carry that interest to the live event.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/e2305dfd-4766-408f-a383-618d9c512ed2.png',
        imageCaption:
          'Dashboard Proof: 1,452 main funnel registrations + 131 automated workflow enrollments, totaling 1,583 verified sign-ups.',
      },
      {
        heading: 'The Takeaway',
        body: 'A webinar funnel should do more than fill a form. It should make the right people want to register, then give them a reason to stay connected until the room opens.',
      },
    ],
  },
  {
    id: 'proj-purescence',
    name: 'Puréscence — Fragrance House Rebrand',
    category: 'FLAGSHIP CASE STUDY',
    categoryGroup: 'Brand',
    description:
      'Rebranding The Pure Prescents into Puréscence — a modern fragrance house with premium identity, cohesive storytelling, and elevated packaging design.',
    thumbnail:
      'https://storage.googleapis.com/msgsndr/G2e0HeGpH7rHjayK4Sp0/media/8c72130a-fedd-4015-b063-15fdd19e3145.png',
    metrics: 'Complete Rebrand',
    tags: ['Brand Strategy', 'Visual Identity', 'Packaging', 'Typography'],
    fullContent: [
      {
        heading: 'Project Overview',
        body: "When this project began, the brand had quality fragrances and an established customer base, but its identity didn't reflect the premium experience the products deserved. The original name, The Pure Prescents, created confusion due to its spelling and lacked the distinctiveness needed to compete in today's fragrance market. Visually, the brand felt generic and focused primarily on selling perfume rather than building an emotional connection with its audience.\n\nThe goal wasn't simply to redesign a logo. It was to reposition the business into a fragrance house with a clear identity, cohesive storytelling, and a premium customer experience that could support long-term growth.",
      },
      {
        heading: 'The Challenge',
        body: 'The original identity faced several strategic challenges:',
        bullets: [
          'A brand name that was difficult to remember and easy to misread.',
          'A visual identity that lacked differentiation within the fragrance industry.',
          'No emotional positioning beyond selling scents.',
          "Packaging that didn't communicate a premium experience.",
          'No cohesive system for future product expansion.',
        ],
      },
      {
        heading: 'The Strategy',
        body: 'The rebrand centered around one core idea:\n\nPeople don\'t just wear perfume. They wear an identity.\n\nThis insight became the foundation for every design and branding decision.\n\nInstead of asking,\n\n"What does this fragrance smell like?"\n\nthe new brand asks,\n\n"Who do you become when you wear it?"\n\nThis shift transformed the business from a perfume seller into a lifestyle-driven fragrance brand.',
      },
      {
        heading: 'Brand Rename',
        body: 'The first strategic move was renaming the brand from The Pure Prescents to Puréscence.\n\nThe new name combines the ideas of purity and essence, while the accented "é" introduces a subtle European influence associated with craftsmanship and luxury perfumery.\n\nThe result is a name that feels:',
        bullets: [
          'Elegant',
          'Memorable',
          'Premium',
          'Distinctive',
          'Scalable for future collections',
        ],
      },
      {
        heading: 'Visual Identity',
        body: 'The visual identity was intentionally minimal, allowing typography, spacing, and materials to communicate luxury rather than relying on decorative graphics.\n\nThe custom wordmark features refined serif typography with flowing ligatures that evoke the movement of fragrance through the air. Every curve reflects softness, sophistication, and timeless elegance.\n\nTo support different brand applications, a secondary monogram was developed using the custom P and é, creating a recognizable mark for packaging, bottle caps, embossing, and digital platforms.',
      },
      {
        heading: 'Color Strategy',
        body: 'The color palette was designed around three intentional tones:',
        bullets: [
          'Charcoal — Communicates mystery, confidence, and luxury.',
          'Warm Ivory — Represents purity, softness, and refinement.',
          "Signature Orange — Introduces warmth, individuality, and modern energy while becoming the brand's most recognizable accent.",
        ],
        bodyAfter:
          'Together, these colors create a premium visual language that seamlessly supports both the Homme and Femme collections.',
      },
      {
        heading: 'Typography System',
        body: 'The typography pairs The Seasons with Poppins to balance elegance and functionality.\n\nThe Seasons serves as the hero typeface, bringing sophistication and emotional depth through its high-contrast serif forms.\n\nPoppins provides clarity and readability across supporting information, ensuring a clean, modern experience across print and digital applications.',
      },
      {
        heading: 'Packaging Design',
        body: "The packaging was redesigned to reflect the brand's elevated positioning.\n\nEach bottle features a full-width label that transforms the fragrance into a modern design object rather than simply a product container.\n\nMinimal typography, generous white space, and intentional color variations distinguish each fragrance while maintaining consistency across the collection.\n\nThe result feels editorial, collectible, and worthy of display.",
      },
      {
        heading: 'Brand Experience',
        body: 'The rebrand extends far beyond the bottle.\n\nIt establishes a complete ecosystem that includes:',
        bullets: [
          'Story-driven fragrance collections',
          'Premium packaging',
          'Consistent typography',
          'Cohesive visual language',
          'Character archetypes',
          'Lifestyle-focused marketing',
          'Scalable brand architecture for future launches',
        ],
        bodyAfter:
          'Every touchpoint reinforces the same promise:\n\nEvery scent tells a story. Every story begins with you.',
      },
      {
        heading: 'The Outcome',
        body: 'The transformation elevated the business from a local perfume label into a modern fragrance house with a clear point of differentiation.\n\nThe new identity creates stronger shelf presence, a more memorable customer experience, and a scalable foundation for future product lines. More importantly, it shifts the conversation from simply selling fragrances to building emotional connections through identity, storytelling, and design.\n\nPuréscence is no longer just a brand of perfumes. It is a collection of personalities, memories, and moments, thoughtfully bottled into a luxury fragrance experience.',
      },
    ],
  },
  {
    id: 'proj-rjadvisor',
    name: 'RJ Advisor Group LLC — Turning a Logo Concept Into a Brand Story',
    category: 'BRAND STRATEGY & LOGO DEVELOPMENT',
    categoryGroup: 'Brand',
    description:
      'Turning an initial AI-generated visual into a brand-aligned logo direction grounded in trust, financial guidance, and long-term growth.',
    thumbnail:
      'https://vibe.filesafe.space/1787943656363336634/attachments/eff8f113-4c6a-4067-b2d8-f24a9185d581.png',
    metrics: 'Brand & Logo System',
    tags: ['Brand Strategy', 'Logo Development', 'Visual Identity', 'Financial Consulting'],
    fullContent: [
      {
        heading: 'Project Focus',
        body: 'Project: Brand strategy and logo development\nIndustry: Financial education and consulting\nBy: Krafted Lab',
      },
      {
        heading: 'The Challenge',
        body: 'RJ Advisor Group LLC came to the branding process with an initial AI-generated logo. It gave the business a visual starting point, but a logo for a financial advisory brand needs to do more than look polished. It needs to communicate why people can trust the business and what kind of guidance they can expect.\n\nRJ serves individuals, entrepreneurs, and small businesses through credit optimization, funding guidance, bookkeeping support, and strategic financial planning. Across those services, the deeper promise is consistent: help people understand their finances, make informed decisions, and build a stronger future.\n\nThe question became: How can the logo carry that promise?',
      },
      {
        heading: 'From Generation to Intention',
        body: 'We used the initial logo as a starting point for ideation, then went back to the brand itself. We defined RJ’s personality as calm, credible, and relationship driven, with education, integrity, transparency, and long-term growth at its core.\n\nThat strategy shaped the visual exploration. We considered an RJ monogram paired with ideas of protection, direction, and progress. A shield could speak to trust. A compass or arrow could suggest guidance and forward movement. Steps could represent the learning and steady decisions behind financial growth. Each element had to earn its place by supporting RJ’s story.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/8f59e3fe-f3a0-439f-887d-e56d79017f3d.jpg',
        imageCaption:
          'Ideation & mind mapping: Exploring core values (trust, integrity, education, structure) and sketching the evolution from initial shield forms and monogram concepts.',
      },
      {
        heading: 'The Final Direction',
        body: 'The resulting logo direction brought those ideas into a clean, professional identity built around the RJ name. Its purpose was to feel credible without becoming distant, and confident without promising overnight transformation.\n\nThat balance matters for RJ. The brand is about helping clients move forward with clarity and structure, one informed decision at a time. The logo gives that approach a recognizable visual home, while the broader identity supports it with authoritative typography and a palette designed around trust, stability, and growth.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/b436f5ba-5d0c-4c1d-aefd-b4ddab32e336.jpg',
        imageCaption:
          'Visual system exploration: Lockups, color variations, dimensional treatments, and stationery application.',
      },
      {
        heading: 'The Outcome',
        body: 'What began as an AI-generated visual became a brand-aligned logo direction with a reason behind it. RJ Advisor Group LLC now has an identity shaped by the work it does and the future it helps its clients build.\n\nThe takeaway: AI helped start the conversation. Brand strategy gave the mark its meaning.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/a9a74052-c7f4-4ade-898c-1a0277b92717.png',
        imageCaption:
          'Brand in action: Stage presentation backdrop and out-of-home advertising applications.',
      },
    ],
  },
  {
    id: 'proj-alch3my',
    name: 'Alch3my Method — AI-Powered Website Redesign',
    category: 'AI-POWERED WEBSITE',
    categoryGroup: 'Website',
    description:
      'Complete customer journey redesign for Alch3my Method fitness coaching using AI-assisted design and conversion psychology.',
    thumbnail:
      'https://storage.googleapis.com/msgsndr/G2e0HeGpH7rHjayK4Sp0/media/802b973d-4e2b-4342-bfca-b08764f9104d.png',
    metrics: 'AI + Psychology Design',
    tags: ['AI-Assisted', 'Conversion UX', 'Mobile-First'],
    fullContent: [
      {
        heading: "Why We Redesigned Alch3my Method's Website with AI and Why It Actually Works",
        body: "Most fitness websites have the same problem.\n\nThey look impressive at first glance, but they don't help visitors make a decision. They're often filled with stock photos, endless paragraphs about certifications, and multiple menu options that distract people from taking action.\n\nWhen someone lands on a fitness website, they're usually asking one simple question:\n\n\"Can this person help someone like me?\"\n\nThe old experience didn't answer that question quickly enough.\n\nSo instead of simply giving the website a visual makeover, we rebuilt the entire customer journey using AI assisted design and conversion psychology.",
      },
      {
        heading: 'The Goal Was Never Just a Better Looking Website',
        body: "The objective wasn't to create another trendy fitness website.\n\nIt was to create a website that feels like having a conversation with the right coach.\n\nEvery section has a purpose. Every button has a destination. Every piece of copy moves visitors one step closer to taking action.\n\nThe website doesn't try to impress.\n\nIt guides.",
      },
      {
        heading: 'Built with AI. Directed by Strategy.',
        body: "Artificial Intelligence accelerated the design process, but it didn't replace strategy.",
        bullets: [
          'User experience',
          'Messaging',
          'Information hierarchy',
          'Mobile responsiveness',
          'Conversion optimization',
        ],
        bodyAfter: 'AI became the assistant.\n\nStrategy remained the architect.',
      },
      {
        heading: 'Designed Around Real Human Behavior',
        body: "Most visitors don't read websites.\n\nThey scan.\n\nThat's why the redesign follows a simple psychological flow.",
      },
      {
        heading: '1. Capture Attention Immediately',
        body: 'The hero section immediately communicates the transformation.\n\nNot workouts. Not equipment. Not certifications.\n\nThe visitor instantly understands the outcome:\n\nRestore. Rebuild. Perform.\n\nSimple. Memorable. Clear.',
      },
      {
        heading: '2. Build Trust Before Selling',
        body: "People don't buy coaching.\n\nThey buy confidence.\n\nInstead of jumping into offers, the website first establishes credibility through:",
        bullets: [
          'Real messaging',
          'Transformation-focused copy',
          'Professional branding',
          'Clear positioning',
        ],
        bodyAfter: 'Trust comes before the call-to-action.',
      },
      {
        heading: '3. Remove Decision Fatigue',
        body: 'Many websites overwhelm visitors with choices.\n\nHome. Programs. About. Blog. Gallery. Pricing. Contact.\n\nInstead, we intentionally simplified the journey.\n\nThe website answers one question at a time.\n\nThis keeps visitors moving forward instead of bouncing away.',
      },
      {
        heading: '4. Every Section Leads Somewhere',
        body: 'Nothing exists simply to fill space.\n\nEach section has one responsibility:',
        bullets: [
          'Educate',
          'Build trust',
          'Handle objections',
          'Present the solution',
          'Invite action',
        ],
        bodyAfter:
          'The entire experience functions like a guided conversation instead of a digital brochure.',
      },
      {
        heading: "Mobile First Because That's Where People Are",
        body: "Most visitors discover coaches through Instagram, Facebook, or referrals.\n\nThat means they're arriving on mobile devices.\n\nThe redesign prioritizes:",
        bullets: [
          'Fast loading speed',
          'Thumb-friendly navigation',
          'Large readable typography',
          'Clear spacing',
          'Scroll based storytelling',
        ],
        bodyAfter:
          'The website feels native on a phone rather than being a desktop website squeezed onto a smaller screen.',
      },
      {
        heading: 'Conversion Before Decoration',
        body: 'Beautiful websites don\'t automatically generate clients.\n\nClear customer journeys do.\n\nEvery design decision supports conversion.\n\nThe messaging addresses pain points before features.\n\nThe layout creates momentum instead of clutter.\n\nThe calls-to-action appear naturally rather than aggressively.\n\nInstead of asking visitors to "Contact Us," the website invites them to take the next logical step in improving their health.\n\nThat\'s a completely different experience.',
      },
      {
        heading: 'AI Helped Us Build Faster. Psychology Made It Convert Better.',
        body: "There's a growing misconception that AI builds websites.\n\nIt doesn't.\n\nAI generates possibilities.\n\nGreat strategy determines which possibilities actually work.\n\nThe redesign combines:",
        bullets: [
          'AI assisted website generation',
          'Conversion focused UX',
          'Sales psychology',
          'Clear brand positioning',
          'Human centered storytelling',
        ],
        bodyAfter:
          "The result isn't just a modern website.\n\nIt's a digital coach that works 24 hours a day.",
      },
      {
        heading: 'Final Thoughts',
        body: 'A website should never exist just because every business is expected to have one.\n\nIt should become the most reliable member of your team.',
        bullets: [
          'Answering questions',
          'Building trust',
          'Qualifying leads',
          'Guiding visitors',
          'Creating momentum before a sales conversation even begins',
        ],
        bodyAfter:
          "That's what this redesign set out to accomplish.\n\nNot simply making Alch3my Method look better.\n\nMaking it work better.",
      },
    ],
  },
  {
    id: 'proj-lumina',
    name: 'Lumina Dispensary — Connected Website & Inquiry System',
    category: 'BRAND DIRECTION & WEB SYSTEM',
    categoryGroup: 'Website',
    description:
      'From brand direction to a connected website, intake form, and email automation system for a calm, credible digital presence.',
    thumbnail:
      'https://vibe.filesafe.space/1787943656363336634/attachments/eee05ffb-b928-463a-aa12-38da352b64be.png',
    metrics: 'Connected System',
    tags: ['Brand Direction', 'Website Design', 'Intake Form', 'Email Automation'],
    fullContent: [
      {
        heading: 'Project Focus',
        body: 'Brand direction, website, intake form, and email automation\n\nBy: Krafted Lab',
      },
      {
        heading: 'The Challenge',
        body: 'Lumina needed a digital presence that felt calm, credible, and easy to navigate. A beautiful site alone would not solve the whole problem: visitors also needed a clear way to take the next step, and the team needed a more organized way to receive and respond to inquiries.\n\nThe assignment was to connect the experience end to end, from the first impression to the first follow-up.',
      },
      {
        heading: 'The Approach',
        body: 'We built the experience around three connected layers: a distinct visual direction, a website with a clear path to inquire, and an intake and email flow that supports the conversation after submission.',
        bullets: [
          'Brand direction: Restrained, welcoming visual balance (60% light cream, 30% green, 10% brown) giving room to breathe with warmth and recognition, shaping clear, reassuring language that respects category guidelines.',
          'Website: Cohesive site experience with scannable content, clear calls to action, and an obvious inquiry path that guides interested visitors smoothly to the intake form.',
          'Intake & automation: Connected intake form and automated email follow-up sequence, creating a structured handoff where inquiries are captured and followed up consistently.',
        ],
      },
      {
        heading: 'The System at a Glance',
        body: 'Visitor discovers Lumina → explores the website → completes the intake form → receives an email follow-up → the team continues the conversation.\n\nEach touchpoint carries the same tone and visual identity, so the experience feels like one brand rather than disconnected tools.',
      },
      {
        heading: 'The Outcome',
        body: 'Lumina gained a cohesive foundation for its online presence and a clearer path from interest to inquiry. The site, form, and email flow work together to make the visitor journey easier to follow and the team’s first response more consistent.\n\nWhat this project shows: branding becomes more useful when it is built into the customer journey. For Lumina, the goal was a recognizable experience that also helps move a real conversation forward.\n\nResults note: Conversion, response-time, and inquiry-volume figures have not been supplied, so this case study describes the delivered system without claiming measured performance gains.',
      },
    ],
  },
  {
    id: 'proj-mystudio',
    name: 'MyStudio — Creative Studio Website Revamp',
    category: 'WEBSITE STRATEGY & REVAMP',
    categoryGroup: 'Website',
    description:
      'Turning a creative studio’s website into a clearer path from interest to inquiry for MyStudio Circulo Verde.',
    thumbnail:
      'https://vibe.filesafe.space/1787943656363336634/attachments/aa1a3f0e-69ba-49e4-8010-04dd7eb1c9e5.png',
    metrics: 'Website Revamp',
    tags: ['Website Strategy', 'Messaging', 'UI/UX Design', 'Inquiry Flow'],
    beforeImage:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/6abaa873c13d4373c2e6d931.png',
    afterImage:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/6abaab6db5e520ac173f4aa9.png',
    fullContent: [
      {
        heading: 'Project Focus',
        body: 'Client: MyStudio Circulo Verde\nScope: Website strategy, messaging, design, and inquiry flow\nBy: Krafted Lab',
      },
      {
        heading: 'Project Overview',
        body: 'MyStudio has a space built for creators: a white cyclorama studio, equipment, and production support under one roof. Its website showed those capabilities, but it wasn’t doing enough to help visitors choose a service and take the next step.',
      },
      {
        heading: 'The Challenge',
        body: 'The original site had a brand disconnect. MyStudio’s logo felt playful, energetic, and approachable, while the website leaned serious and editorial. Both directions had merit, but together they made the experience feel less cohesive than the studio itself.\n\nThe copy also had constraints. Much of the page described the space and listed what set it apart, while visitors had to work harder to understand which offer suited their shoot, what was included, and how to book. For a business receiving interest through Facebook and Instagram, that gap meant more questions and more manual follow-up before an inquiry could move forward.',
      },
      {
        heading: 'The Strategy',
        body: 'We reframed the website around the decisions a potential client needs to make:\n\nCan I create what I’m imagining here? What help can I get? What will it cost? How do I start?\n\nThe revamp brought MyStudio’s visual personality forward with confident type, its recognizable blue, and a more energetic presentation of the studio. We paired that with clearer service descriptions, visible rates, relevant imagery, and calls to action throughout the page.',
      },
      {
        heading: 'What Changed',
        body: 'We restructured the key decision points across the user journey:',
        bullets: [
          'A stronger first impression: “Space to Create. Built to Shoot.” gives visitors an immediate sense of what MyStudio offers and who the space is for.',
          'Services organized around real needs: Studio rental, vehicle shoots, and production support are easier to find and compare.',
          'Less friction around pricing: Rate cards give visitors a useful starting point before they inquire.',
          'A clearer route to booking: Calls to action and the inquiry form help visitors move from browsing to sharing the details of their shoot.',
          'A more consistent brand experience: The new design carries the energy of the logo through the rest of the site, so the brand feels like one studio speaking with one voice.',
        ],
      },
      {
        heading: 'The Outcome',
        body: 'The result is a website designed to do more than display a beautiful space. It helps potential clients picture their shoot, understand their options, and submit a more informed inquiry. It also gives the MyStudio team a clearer starting point for conversations that previously required more manual explanation.\n\nThe revamp is built to improve conversion, but a measured lift would require before and after inquiry data. The visible transformation is already clear: MyStudio now has a website that feels closer to its brand and makes the next step easier to take.\n\nKrafted Lab: We kraft profitable brand systems for founders.\nYour Vision. Our Kraft!',
      },
    ],
  },
  {
    id: 'proj-veereel',
    name: "How a Client's Personal Brand Reel Generated Over 55,000 Views and Nearly 1,000 Follows",
    category: 'PERSONAL BRAND REEL',
    categoryGroup: 'Content',
    description:
      'A strategic career-transformation reel contrasting a public school teaching background with modern funnel consulting, driving 55K+ views and ~1K follows.',
    thumbnail:
      'https://vibe.filesafe.space/1787943656363336634/attachments/0c1dd61d-b377-42af-b5b1-0703c6c95d21.png',
    metrics: '55K+ Views · ~1K Follows',
    tags: ['Personal Brand', 'Content Strategy', 'Reel / Shorts', 'Social Proof'],
    fullContent: [
      {
        heading: 'Project Focus',
        body: 'Brand: Vee Trimidal\nFormat: Career transformation reel\nResults: 55K+ views · Almost 1K follows\nBy: Krafted Lab',
      },
      {
        heading: 'The Challenge',
        body: 'As Vee expanded into coaching and consulting around funnels and automation, he needed his audience to understand the experience behind his offer.\n\nSharing what he teaches was one part of that. Showing his journey and the people learning from him gave viewers a more personal reason to pay attention.',
      },
      {
        heading: 'The Story',
        body: 'The reel contrasted Vee’s past as a public school teacher with his current work teaching business owners and freelancers about funnels and automation.\n\nFootage of a room full of people learning from him made that transition tangible. Viewers could see his shift from a demanding, restrictive chapter to one where he could apply his skills with greater freedom and impact.\n\nThe thread connecting both chapters was his teacher’s heart. His previous career gave him experience explaining complex ideas, guiding people, and helping them take action. Those skills became part of how he coaches today.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/c786d2e5-0bcd-4262-9e01-07d0c5311d0d.png',
        imageCaption:
          "The Reel Hook & Visual Proof: 'POV: From being a Public School Teacher to now teaching Funnels & Automation' with active workshop footage.",
      },
      {
        heading: 'The Content Strategy',
        body: "Four core pillars drove the reel's engagement and retention:",
        bullets: [
          'Lead with a human transformation: Vee’s career story gave viewers something to connect with before introducing the expertise behind his services.',
          'Make his authority visible: The training-room footage showed him doing the work: teaching, leading, and sharing knowledge with an audience.',
          'Connect his past to his present: The reel positioned his teaching background as a foundation for his consulting work. That connection made his transition feel authentic and gave his personal brand a distinct point of view.',
          'Give viewers a reason to follow: The reel introduced both his story and the subjects he now teaches, helping interested viewers understand what they could expect from his content.',
        ],
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/36549ea2-7f24-44c6-bfe6-ce6c802b0b08.png',
        imageCaption:
          'Strategic Objective: Demonstrate career success to provide social proof for your new consulting offer (@veetrimidal).',
      },
      {
        heading: 'The Results',
        body: 'Vee’s reel generated over 55,000 views and almost 1,000 follows, based on his reported results.\n\nThese figures demonstrate reach and audience growth. Consulting sales were not measured in this case study.',
        image:
          'https://vibe.filesafe.space/1787943656363336634/attachments/8cbad19f-3a11-46ac-8d2c-72f5fcaf95a0.png',
        imageCaption:
          'Performance Proof: 55.6K verified organic views across YouTube / Instagram distribution.',
      },
      {
        heading: 'The Takeaway',
        body: 'Vee’s career journey became a personal brand asset by showing how his past shaped the work he does today.\n\nHe carried his teacher’s heart into a new chapter. His setting changed, while his desire to help people understand, build, and grow continued.\n\nHis experience became more powerful when viewers could see why it mattered to them.',
      },
    ],
  },
]
export const timeline = [
  {
    week: '1',
    focus: 'Brand clarity',
    whatHappens:
      "Define the founder's strengths, audience, offer, goals, and what makes the business distinct. Audit the current brand and customer journey.",
    outcome: 'A clear brand foundation and one priority offer to build around.',
  },
  {
    week: '2',
    focus: 'Translate expertise',
    whatHappens:
      'Turn what the founder knows into positioning, a core promise, key messages, and a simple explanation of the offer.',
    outcome: 'Messaging that makes the value easy to understand and repeat.',
  },
  {
    week: '3',
    focus: 'Content path',
    whatHappens:
      'Choose content pillars, map topics to buyer questions, and create calls to action that lead naturally to the offer.',
    outcome: 'A practical content plan that connects visibility to inquiries.',
  },
  {
    week: '4',
    focus: 'Build the funnel',
    whatHappens:
      'Map and create the landing page, application or booking path, lead capture, and essential follow-up messages.',
    outcome: 'A working path from interested visitor to qualified lead.',
  },
  {
    week: '5',
    focus: 'Connect and test',
    whatHappens:
      'Set up automations, check every link and form, review the mobile experience, and test the journey as a prospective client.',
    outcome: 'A ready-to-launch system with fewer manual steps.',
  },
  {
    week: '6',
    focus: 'Launch & optimize',
    whatHappens:
      'Publish the content, send traffic to the funnel, review early behavior, and refine the message or page where people hesitate.',
    outcome: 'A live brand-to-profit system and a clear plan for improving it.',
  },
]
export const faqs = [
  {
    q: 'Can you work with my existing brand or website?',
    a: "Yes. We'll review what you already have and recommend what to retain, refine, or rebuild based on your goals.",
  },
  {
    q: 'Do I need to know exactly what I want?',
    a: "You need a business or offer we can work around. We'll help clarify the message and customer journey during the strategy stage.",
  },
  {
    q: "What's included?",
    a: 'Your proposal will outline the deliverables, platform setup, revisions, timeline, and handover support. We confirm the scope before the project begins.',
  },
  {
    q: 'How much does it cost?',
    a: "Investment depends on the scope of your brand, website, and automation needs. After reviewing your goals, we'll recommend a suitable scope and provide a clear proposal.",
  },
  {
    q: 'How involved do I need to be?',
    a: "You'll provide business information, available assets, and timely feedback at agreed checkpoints. We'll guide you through what we need at each stage.",
  },
  {
    q: 'What happens on the call?',
    a: "We'll discuss your offer, review your current setup, and identify the gaps worth addressing. If there's a fit, we'll explain the recommended scope and next steps.",
  },
]
export const testimonials = [
  {
    id: 'darla',
    name: 'Coach Darla',
    role: 'Funnels Mastery Academy',
    quote:
      "He didn't just copy a template, but he really understood the assignment and brought his own creativity into the project, and that is what I'm really happy about.",
    fullTestimonial:
      "I just wanted to recognize Vee for the amazing work that he did in the build your first funnel challenge sales page. He's actually one of my FMA students, and I am so proud of everything that he did, because what's crazy about this project is that we literally built this in just one night. So I was thinking of who can I actually ask to do this job, and I thought of Vee, and I gave him the Challenge, and he immediately stepped up and really took it seriously. He stayed really, really focused, worked through everything, and made sure that the page was finished. And what I love about it is that you can clearly see how he followed the frameworks that we teach inside FMA and also the frameworks that he learned about sales, and the structure of the page, the way the section flowed, the messaging, everything was applied exactly how it should be when it comes to conversion and also for sales and exactly how he teaches inside FMA, but at the same time, you can also see his natural talent. This one is really amazing, even though we had a structure for it, he didn't just copy a template, but he really understood the assignment and brought his own creativity into the project, and that is what I'm really happy about. So he is one of the best students that I had.",
    mediaType: 'video',
    mediaUrl:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/69ab7f736805aaf109cb709c.mp4',
  },
  {
    id: 'andre',
    name: 'Andre Lewis',
    role: 'Mr. Big Faith',
    quote: 'It was so elite that I marketed it to all my friends.',
    fullTestimonial:
      "It's Mr. Big Faith and I want to give a special shout out to Vee. Vee is the person that put together my branding kit for my company, for both my business actually, from the colors to the logos to the mission statement, the vision, the different variations of the logo, the ones for the banner, the ones for pretty much everything. He did everything. It was super professional, it was timely, probably the fastest I ever got any kind of service done, and it was so, so elite that I've marketed it to all my friends. I've told all my friends about him so far. Because I love the work that he did, the way he communicates, and how professional and fast he works. So if you're looking for someone that is a professional at getting your branding kit done for your business or for whatever entity that you have, definitely reach out to Vee.",
    mediaType: 'video',
    mediaUrl:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/6934befc1d466e31231a41ef.mp4',
  },
  {
    id: 'nahieli',
    name: 'Nahieli Davis',
    role: 'Client',
    quote: 'The funnels that he built for me were outstanding and exceeded my expectations.',
    fullTestimonial:
      "Hi, I'm Nahieli Davis. I had a great experience working with Vee. He was incredibly helpful, very professional, and consistently detail oriented. His response time was exceptional, even working around the clock when needed. The funnels that he built for me were outstanding and exceeded my expectations. He has such a strong understanding of marketing, excellent work ethic, and is generally pleasant to work with. I would absolutely work with him again for any marketing needs in the future and highly recommend him.",
    mediaType: 'video',
    mediaUrl:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/69a7198bb2508b5ecc7ea4b3.mp4',
  },
  {
    id: 'marga',
    name: 'Marga',
    role: 'Founder of Funnels Rock',
    quote:
      'What actually really impressed me is how Vee translated our branded visual elements into the funnel.',
    fullTestimonial:
      'I just want to share how genuinely great it was working with Vee on our Funnels Rock and the Branded Office sales funnel. Working with Vee was honestly a treat. He comes with over a decade of experience in branding, and it was actually very humbling for us to be pitched by him. You can see that clearly in the funnel. The offer was communicated so well. It was clean, confident, and intentional. And what actually really impressed me is how Vee translated our branded visual elements into the funnel, especially within the current constraints and features of the platform, as we all know.',
    mediaType: 'video',
    mediaUrl:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/6960e4a1f13bc3dbd30c9dce.mp4',
  },
  {
    id: 'sam',
    name: 'Sam Aine',
    role: 'VA',
    quote: "I'm proud to introduce Vee to our international clients.",
    fullTestimonial:
      "Working with him was so easy. I told him what we wanted, who we serve, and what we hope to achieve and he just got it. The result? A branding identity that feels spot-on. I'm proud to introduce Vee to our international clients. He's truly a top-tier Filipino graphic designer, and I have no doubt he'll continue to do amazing things. Congrats on everything you've achieved so far, Vee!",
    mediaType: 'photo',
    mediaUrl:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/6934bc41e0f09283dd0c6aa9.jpg',
  },
  {
    id: 'dani',
    name: 'Dani Nicolas',
    role: 'Client',
    quote: 'The deliverables I received were top-notch, excellent, and awe-inspiring.',
    fullTestimonial:
      "Vee is a talented individual with an awesome eye for design that captures a business's essence so well! I worked with him for a project and all the deliverables I received were top-notch, excellent, and awe-inspiring. I highly suggest you get him on your radar now, because this guy is going to be big. Mark my words!",
    mediaType: 'photo',
    mediaUrl:
      'https://assets.cdn.filesafe.space/G2e0HeGpH7rHjayK4Sp0/media/6934bb1ee0f09201d20c4b5d.jpg',
  },
]
export const brand = {
  site: 'https://www.kraftedlab.co',
  apply: 'https://www.kraftedlab.co/apply',
  email: 'vee@mail.kraftedlab.co',
  whatsapp: 'https://wa.me/639467497070',
  logo: 'https://vibe.filesafe.space/1787943656363336634/attachments/e7343c3f-ac59-4a74-bcc7-911dad504458.png',
  mark: 'https://vibe.filesafe.space/1787943656363336634/attachments/cd5f24fc-78da-4460-b49e-92d0aede122d.png',
  portrait:
    'https://vibe.filesafe.space/1787943656363336634/attachments/569cdc0e-c3f7-4c07-811a-ee1d091a2f08.png',
  avatar:
    'https://vibe.filesafe.space/1787943656363336634/attachments/685c497d-b9db-42ec-b799-4971cba76134.png',
  colors: {
    green: '#192717',
    lime: '#d4f53d',
    orange: '#f16223',
    paper: '#f9f9f7',
    pale: '#f1f5dc',
  },
}
export const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/theveecrafts/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vee-trimidal-45615a15a/' },
  { name: 'Facebook', url: 'https://www.facebook.com/veetrimidal/' },
  { name: 'Save my contact', url: 'https://link.funnelgenie.io/qr/iCuwjmiKJEDX' },
]
export const resources = [
  {
    name: 'The Mini Brand Journey Playbook',
    type: 'Free playbook',
    description:
      'Map your brand’s journey from scattered content to a connected system with a short, practical guide.',
    url: 'https://www.kraftedlab.co/minibrandjourneyplaybook',
    icon: '↗',
  },
  {
    name: 'Personal Brand Storytelling Bot',
    type: 'Free tool',
    description:
      'Turn raw experiences into personal brand stories with the C.P.E.P. framework, then adapt them for LinkedIn, Reels, email, and more.',
    url: 'https://www.kraftedlab.co/storytelling-bot',
    icon: '✳',
  },
  {
    name: 'Brand Archetype Assessment',
    type: 'Still experimenting',
    description:
      'A 20-question assessment with primary, secondary, and cross archetypes, plus a personalized strategy report. In development on the Value Vault.',
    url: '',
    icon: '◈',
  },
]
export const courses = [
  {
    name: 'AI Music Channel Mini Course',
    description:
      'Turn ideas into songs, songs into videos, and videos into a YouTube channel you’re ready to launch.',
    detail: '7 guided stages · 22 ChatGPT prompts · 7 worksheets',
    url: 'https://www.kraftedlab.co/akademy/ai-music-channel',
    price: '$97',
    icon: '♫',
  },
  {
    name: 'Personal Brand Shot Bank',
    description:
      'Know what to film with your phone and build a month of content from moments you already live.',
    detail: 'Shot lists · 30-day plan · Prompts & worksheets',
    url: 'https://www.kraftedlab.co/akademy/shot-bank',
    price: '$67',
    icon: '▣',
  },
]
