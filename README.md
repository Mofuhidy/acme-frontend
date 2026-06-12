# whitepace SaaS Landing Page

A production-quality SaaS landing page implementation built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It matches the layout and design across desktop, tablet, and mobile viewports.

## 🔗 Live Deployment
Once deployed, you can access the live application at:
- **Vercel Production URL**: [https://acme-frontend.vercel.app](https://acme-frontend.vercel.app) *(or your Vercel deployment URL)*

---

## 🚀 Setup & Installation

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.x or later) installed on your system.

### Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd acme-frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Development & Build Commands

- **Start dev server:** `npm run dev`
- **Lint check:** `npm run lint`
- **Build production bundle:** `npm run build`
- **Run contract tests:** `npm run test`

---

## 📦 Component Structure

The application is structured logically into reusable, semantic React components:

```txt
src/
  app/
    globals.css         # Main stylesheet with theme and animation definitions
    layout.tsx          # Root HTML skeleton using Next.js Metadata API
    page.tsx            # Landing page layout orchestrating sections
  components/
    layout/
      navbar.tsx        # Responsive header with sticky behaviour & active section highlights
      footer.tsx        # Semantic footer block with structural links
      scroll-progress.tsx # Scroll progress indicator
    sections/
      hero.tsx          # Dynamic responsive hero heading and CTA
      trusted-logos.tsx # Sponsor logos display (in original colors)
      features.tsx      # Alternating row sections with grid layout and responsive orders
      pricing.tsx       # Snap scroll carousel for mobile/tablet & grid columns for desktop
      integrations.tsx  # Zapier orbit layout with left/right column swaps
      testimonials.tsx  # User feedback cards with star reviews and arrow styling
      cta.tsx           # Call-To-Action wave section with single primary button
    ui/
      button.tsx        # Accessible action buttons
      container.tsx     # Fluid width responsive layout wrapper
      reveal.tsx        # Intersection-Observer viewport animations
      highlighted-heading.tsx # Yellow organic scribble headings
      yellow-dash.tsx   # Double-stroke dash SVG scribble
  content/
    landing-page.ts     # Centralized configuration file hosting all page data copy
  lib/
    landing-sections.ts # Tracks active viewport sections and order IDs
```

---

## 🎬 Animation Implementation Approach

Animations have been carefully structured to be fluid, modern, and performant without creating distractions:
1. **Entrance Animations**: Wrapped in the custom `<Reveal>` component, which utilizes the browser's native **Intersection Observer API** to trigger subtle class-based viewport fades and translate offsets as cards/headings scroll into view.
2. **Subtle Floating effect**: Implemented keyframes-based CSS float animations in `globals.css` applied directly to the integrations orbit graphics, providing a dynamic "living" feel to page graphics.
3. **Hover States**: Applied transitions for all interactive elements (buttons, testimonials, sponsors, features), lifting and scaling them (`scale-[1.02]`, `-translate-y-1`) smoothly on hover.
4. **Reduced Motion A11y**: Enforced a global CSS media block query (`prefers-reduced-motion: reduce`) which disables/reduces all animations and transitions when requested by OS settings.

---

## ⚙️ Brief Technical Summary

### Component Architecture Decisions
- Configured a **centralized configuration file** (`landing-page.ts`) to act as the single source of truth for copywriting text, pricing schemas, logos, and testimonials. This makes future localization, scaling, and maintenance simple and fast.
- UI elements are split from major page sections to maintain clean files, reusability, and modular test coverage.

### Responsiveness Approach
- Adopted a **mobile-first design strategy**. Grid layouts stack cleanly on mobile/tablet viewports and swap to side-by-side structures at tailwind breakpoints (`md` and `lg`).
- Built a **snap-scrolling pricing carousel** on mobile and tablet (below `lg` breakpoint) utilizing browser-native CSS scroll snapping, eliminating heavy third-party carousel dependencies while maintaining smooth, native swipe gestures and indicator dots.

### Accessibility (A11y) Considerations
- Implemented **Semantic HTML** (such as `<main>`, `<section>`, `<nav>`, `<figure>`, and `<header>`).
- Included a **Skip to Content link** at the top level to support keyboard screen readers.
- Outlined explicit hover/focus visible rings around buttons and links.
- Set descriptive `aria-label` tags on buttons, icons, and menus.

### Performance Optimizations
- Integrated Next.js `next/image` to serve modern WebP image formats, automatically resizing files, preventing layout shifts (CLS), and utilizing lazy loading.
- Used CSS-first animations to keep main thread execution free and fluid.
- Kept third-party library overhead to a minimum.
