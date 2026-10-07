# Krafted Lab — Vee Trimidal

A responsive portfolio for Vee Trimidal and Krafted Lab, built with React, TypeScript, React Router, and Vite. Content and visual identity are drawn from the public Krafted Lab website.

## Run

Use Node 22+ and pnpm 11:

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Production output is `dist/`. Configure your static host to serve `index.html` for application routes.

## Pages

Overview, eight client case studies, B2PRO services and six-week timeline, founder story, KRAFTED Method, client stories, Value Vault and Akademy, experimental ecosystem projects, and contact.

## Content

- `src/data/website.ts`: imported public case studies, testimonials, timeline, FAQs, brand assets, courses, resources, and contact destinations.
- `src/data/krafted.ts`: individual services and in-development ecosystem concepts.
- `src/WebsiteContent.tsx`: reusable website sections and full case study pages.
- `src/Portfolio.tsx`: shell, routes, founder content, and brief builder.
- `src/styles/portfolio.css`: responsive layout and exact live-site brand colors.
- `docs/content-sources.md`: source URLs, coverage, and handling of published claims.

## Contact

Application buttons use the verified existing `https://www.kraftedlab.co/apply` flow. Email and WhatsApp use the public website's destinations. The optional brief builder keeps input in browser memory and offers copy, download, and an email draft; it does not automatically submit or persist data. `VITE_PUBLIC_CONTACT_URL` optionally overrides the connection link shown after generating a brief.

## Assets and launch

Brand photography, logos, project images, and testimonial media use the original public CDN URLs. Course pricing is a dated snapshot and links to the live course pages. No new backend, tracking, payment processing, or deployment is introduced.

## Attribution

Adapted from the linked portfolio template. Original license and attribution remain in `LICENSE`.
