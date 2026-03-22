# Tristan — Personal Portfolio

A sleek, editorial-inspired personal portfolio built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion + CSS animations
- **Typography**: Instrument Serif (display) + DM Sans (body) + JetBrains Mono (code)
- **Deployment**: Vercel (recommended)

## Features

- Smooth scroll-triggered entrance animations
- Animated generative canvas visual (signature element)
- Responsive design with mobile navigation
- Noise texture overlay for depth
- Custom color system with accent blues
- Project cards with category tagging
- Timeline-style experience section
- Writing/essay section
- "Open to opportunities" status indicator
- Accessible and performant

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

All personal data is in `lib/data.ts`. Edit this file to update:

- Name, bio, and location
- Social links and email
- Projects (with categories: platform, saas, tooling, finance)
- Work experience and highlights
- Writing/essays

### Design Tokens

Colors, fonts, and animations are configured in `tailwind.config.js`. The palette uses:

- **Surface**: Warm off-white (#FAFAF7)
- **Ink**: Near-black (#0A0A08) with opacity variants
- **Accent**: Electric blue (#2B44FF)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy — zero config needed

### Other Platforms

```bash
npm run build
# Output in .next/ directory
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles, animations, noise overlay
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Navigation.tsx       # Fixed nav with mobile menu
│   ├── SignatureVisual.tsx   # Animated canvas generative art
│   ├── AnimatedSection.tsx   # Scroll-triggered wrapper
│   ├── SectionHeader.tsx     # Section label + title
│   ├── ProjectCard.tsx       # Project display cards
│   ├── ExperienceCard.tsx    # Timeline experience items
│   └── Footer.tsx            # Footer with CTA + socials
├── lib/
│   └── data.ts              # All personal content data
├── tailwind.config.js        # Design tokens
├── next.config.js
├── tsconfig.json
└── package.json
```

## License

MIT
